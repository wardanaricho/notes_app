import Comment from '#models/comment'
import Note from '#models/note'
import { createCommentValidator } from '#validators/comment'
import type { HttpContext } from '@adonisjs/core/http'

export default class CommentsController {
  async index({ auth, params, response }: HttpContext) {
    const user = auth.getUserOrFail()
    const note = await Note.find(params.id)

    if (!note) return response.notFound({ message: 'Catatan tidak ditemukan' })

    if (note.userId !== user.id) {
      return response.unauthorized({
        message: 'Anda tidak memiliki izin untuk melihat komentar ini',
      })
    }

    const comments = await Comment.query()
      .where('note_id', note.id)
      .preload('user')
      .preload('note')
      .orderBy('created_at', 'asc')

    return response.ok(comments)
  }

  async store({ auth, params, request, response }: HttpContext) {
    const note = await Note.find(params.id)
    const user = auth.getUserOrFail()

    if (!note) return response.notFound({ message: 'Catatan tidak ditemukan' })

    if (note.userId !== user.id) {
      return response.unauthorized({
        message: 'Anda tidak memiliki izin untuk mengomentari catatan ini',
      })
    }

    const { body } = await request.validateUsing(createCommentValidator)

    const comment = await Comment.create({
      noteId: note.id,
      userId: user.id,
      body,
    })

    await comment.load('user')

    return response.created(comment)
  }

  async destroy({ auth, params, response }: HttpContext) {
    const user = auth.getUserOrFail()
    const comment = await Comment.find(params.id)

    if (!comment) return response.notFound({ message: 'Komentar tidak ditemukan' })

    if (comment.userId !== user.id) {
      return response.unauthorized({
        message: 'Anda tidak memiliki izin untuk menghapus komentar ini',
      })
    }

    await comment.delete()

    return response.ok({ message: 'Komentar berhasil dihapus' })
  }
}
