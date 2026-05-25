import Tag from '#models/tag'
import { createTagValidator } from '#validators/tag'
import type { HttpContext } from '@adonisjs/core/http'

export default class TagsController {
  async index({ auth, response }: HttpContext) {
    const user = auth.getUserOrFail()
    const tags = await Tag.query().where('user_id', user.id)
    return response.ok(tags)
  }

  async store({ auth, request, response }: HttpContext) {
    const user = auth.getUserOrFail()
    const { name } = await request.validateUsing(createTagValidator)
    const tag = await Tag.create({ name, userId: user.id })
    return response.created(tag)
  }

  async destroy({ auth, params, response }: HttpContext) {
    const user = auth.getUserOrFail()
    const tag = await Tag.find(params.id)
    if (!tag) return response.notFound({ message: 'Tag tidak ditemukan' })
    if (tag.userId !== user.id) {
      return response.unauthorized({
        message: 'Anda tidak memiliki izin untuk menghapus tag ini',
      })
    }
    await tag.delete()
    return response.ok({ message: 'Tag berhasil dihapus' })
  }
}
