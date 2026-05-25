import Category from '#models/category'
import Note from '#models/note'
import Tag from '#models/tag'
import { createNoteValidator, syncTagsValidator, updateNoteValidator } from '#validators/note'
import type { HttpContext } from '@adonisjs/core/http'

export default class NotesController {
  async index({ auth, request, response }: HttpContext) {
    const user = auth.getUserOrFail()
    const page = request.input('page', 1)
    const limit = request.input('limit', 10)
    const search = request.input('search')
    const categoryId = request.input('category_id')
    const pinned = request.input('pinned')

    const query = Note.query()
      .where('user_id', user.id)
      .preload('category')
      .preload('tags')
      .orderBy('is_pinned', 'desc')
      .orderBy('created_at', 'desc')

    if (search) {
      query.where((q) => {
        q.whereLike('title', `%${search}%`).orWhereLike('body', `%${search}%`)
      })
    }
    if (categoryId) query.where('category_id', categoryId)
    if (pinned === 'true') query.where('is_pinned', true)

    const notes = await query.paginate(page, limit)
    return response.ok(notes)
  }

  async show({ auth, params, response }: HttpContext) {
    const user = auth.getUserOrFail()
    const note = await Note.query()
      .where('id', params.id)
      .where('user_id', user.id) // ← cegah lihat punya orang lain
      .preload('category')
      .preload('tags')
      .preload('comments', (q) => q.preload('user').orderBy('created_at', 'asc'))
      .first()
    if (!note) return response.notFound({ message: 'Catatan tidak ditemukan' })
    return response.ok(note)
  }

  async store({ auth, request, response }: HttpContext) {
    const user = auth.getUserOrFail()
    const data = await request.validateUsing(createNoteValidator)

    if (data.categoryId) {
      const category = await Category.find(data.categoryId)
      if (!category || category.userId !== user.id) {
        return response.badRequest({ message: 'Kategori tidak valid' })
      }
    }

    const note = await Note.create({ ...data, userId: user.id })
    return response.created(note)
  }

  async update({ auth, params, request, response }: HttpContext) {
    const user = auth.getUserOrFail()
    const note = await Note.query().where('id', params.id).where('user_id', user.id).first()
    if (!note) return response.notFound({ message: 'Catatan tidak ditemukan' })
    
    const data = await request.validateUsing(updateNoteValidator)

    if (data.categoryId) {
      const category = await Category.find(data.categoryId)
      if (!category || category.userId !== user.id) {
        return response.badRequest({ message: 'Kategori tidak valid' })
      }
    }

    note.merge(data)
    await note.save()
    return response.ok(note)
  }

  async destroy({ auth, params, response }: HttpContext) {
    const user = auth.getUserOrFail()
    const note = await Note.query().where('id', params.id).where('user_id', user.id).first()
    if (!note) return response.notFound({ message: 'Catatan tidak ditemukan' })
    await note.delete()
    return response.ok({ message: 'Catatan berhasil dihapus' })
  }

  async syncTags({ auth, params, request, response }: HttpContext) {
    const user = auth.getUserOrFail()
    const note = await Note.query().where('id', params.id).where('user_id', user.id).first()
    if (!note) return response.notFound({ message: 'Catatan tidak ditemukan' })
    
    const { tagIds } = await request.validateUsing(syncTagsValidator)

    if (tagIds.length > 0) {
      const tags = await Tag.query().whereIn('id', tagIds).where('user_id', user.id)
      if (tags.length !== tagIds.length) {
        return response.badRequest({ message: 'Satu atau lebih tag tidak valid' })
      }
    }

    await note.related('tags').sync(tagIds)
    await note.load('tags')
    return response.ok({ message: 'Tag berhasil disimpan', tags: note.tags })
  }
}
