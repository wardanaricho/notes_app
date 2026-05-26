import User from '#models/user'
import { registerValidator, loginValidator } from '#validators/auth'
import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  async register({ request, response }: HttpContext) {
    const data = await request.validateUsing(registerValidator)
    const user = await User.create(data)
    const token = await User.accessTokens.create(user)
    return response.status(201).json({ user, token })
  }

  async login({ request, response }: HttpContext) {
    const { email, password } = await request.validateUsing(loginValidator)
    const user = await User.verifyCredentials(email, password)
    const token = await User.accessTokens.create(user)
    return response.ok({ user, token })
  }

  async logout({ auth, response }: HttpContext) {
    const user = auth.getUserOrFail()
    const currentToken = user.currentAccessToken
    if (currentToken) await User.accessTokens.delete(user, currentToken.identifier)
    return response.ok({
      message: 'Logout berhasil',
    })
  }
}
