import Category from '#models/category'
import { createCategoryValidator, updateCategoryValidator } from '#validators/category'
import type { HttpContext } from '@adonisjs/core/http'

export default class CategoriesController {
  async index({ auth, response }: HttpContext) {
    const user = auth.getUserOrFail()
    const categories = await Category.query().where('user_id', user.id)
    return response.ok(categories)
  }

  async store({ auth, request, response }: HttpContext) {
    const user = auth.getUserOrFail()
    const data = await request.validateUsing(createCategoryValidator)
    const category = await Category.create({ ...data, userId: user.id })
    return response.created(category)
  }

  async update({ auth, params, request, response }: HttpContext) {
    const user = auth.getUserOrFail()

    const category = await Category.query()
      .where('id', params.id)
      .where('user_id', user.id)
      .first()

    if (!category) return response.notFound({ message: 'Kategori tidak ditemukan' })

    const data = await request.validateUsing(updateCategoryValidator)
    category.merge(data)
    await category.save()
    return response.ok(category)
  }

  async destroy({ auth, params, response }: HttpContext) {
    const user = auth.getUserOrFail()
    const category = await Category.query()
      .where('id', params.id)
      .where('user_id', user.id)
      .first()
    if (!category) return response.notFound({ message: 'Kategori tidak ditemukan' })
    await category.delete()
    return response.ok({ message: 'Kategori berhasil dihapus' })
  }
}
