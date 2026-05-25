import { NoteSchema } from '#database/schema'
import { DateTime } from 'luxon'
import { belongsTo, column, hasMany, manyToMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany, ManyToMany } from '@adonisjs/lucid/types/relations'
import User from './user.ts'
import Category from './category.ts'
import Tag from './tag.ts'
import Comment from './comment.ts'

export default class Note extends NoteSchema {
    @column({ isPrimary: true })
    declare id: number

    @column()
    declare userId: number

    @column()
    declare categoryId: number | null

    @column()
    declare title: string

    @column()
    declare body: string

    @column()
    declare isPinned: boolean

    @column.dateTime({ autoCreate: true })
    declare createdAt: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    declare updatedAt: DateTime

    @belongsTo(() => User)
    declare user: BelongsTo<typeof User>

    @belongsTo(() => Category)
    declare category: BelongsTo<typeof Category>

    @manyToMany(() => Tag)
    declare tags: ManyToMany<typeof Tag>

    @hasMany(() => Comment)
    declare comments: HasMany<typeof Comment>

}