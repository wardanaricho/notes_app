import { CommentSchema } from '#database/schema'
import { DateTime } from 'luxon'
import { belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import User from './user.ts'
import Note from './note.ts'

export default class Comment extends CommentSchema {
    @column({ isPrimary: true })
    declare id: number

    @column()
    declare userId: number

    @column()
    declare noteId: number

    @column()
    declare body: string

    @column.dateTime({ autoCreate: true })
    declare createdAt: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    declare updatedAt: DateTime

    @belongsTo(() => User)
    declare user: BelongsTo<typeof User>

    @belongsTo(() => Note)
    declare note: BelongsTo<typeof Note>

}