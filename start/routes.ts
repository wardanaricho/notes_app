/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'
import { controllers } from '#generated/controllers'
const AuthController = () => import('#controllers/auth_controller')

router.get('/', () => {
  return { hello: 'world' }
})

router
  .group(() => {
    router
      .group(() => {
        router.post('register', [AuthController, 'register'])
        router.post('login', [AuthController, 'login'])
      })
      .prefix('auth')
      .as('auth')

    router
      .group(() => {
        router.get('profile', [controllers.Profile, 'show'])
        router.post('logout', [AuthController, 'logout'])
      })
      .prefix('account')
      .as('profile')
      .use(middleware.auth())
  })
  .prefix('/api/v1')

const NotesController = () => import('#controllers/notes_controller')
const CategoriesController = () => import('#controllers/categories_controller')
const TagsController = () => import('#controllers/tags_controller')
const CommentsController = () => import('#controllers/comments_controller')


router.group(() => {

  // Notes
  router.get('/notes', [NotesController, 'index'])
  router.post('/notes', [NotesController, 'store'])
  router.get('/notes/:id', [NotesController, 'show'])
  router.put('/notes/:id', [NotesController, 'update'])
  router.delete('/notes/:id', [NotesController, 'destroy'])

  // Tags pada sebuah Note
  router.post('/notes/:id/tags', [NotesController, 'syncTags'])

  // Comments pada sebuah Note
  router.get('/notes/:id/comments', [CommentsController, 'index'])
  router.post('/notes/:id/comments', [CommentsController, 'store'])
  router.delete('/comments/:id', [CommentsController, 'destroy'])

  // Categories
  router.get('/categories', [CategoriesController, 'index'])
  router.post('/categories', [CategoriesController, 'store'])
  router.put('/categories/:id', [CategoriesController, 'update'])
  router.delete('/categories/:id', [CategoriesController, 'destroy'])

  // Tags
  router.get('/tags', [TagsController, 'index'])
  router.post('/tags', [TagsController, 'store'])
  router.delete('/tags/:id', [TagsController, 'destroy'])

}).prefix('/api/v1').use(middleware.auth())