import { CommentSchema } from '#database/schema'
import { belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import User from './user.ts'
import Note from './note.ts'

export default class Comment extends CommentSchema {
    @belongsTo(() => User)
    declare user: BelongsTo<typeof User>

    @belongsTo(() => Note)
    declare note: BelongsTo<typeof Note>

}