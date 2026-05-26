import { NoteSchema } from '#database/schema'
import { belongsTo, hasMany, manyToMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany, ManyToMany } from '@adonisjs/lucid/types/relations'
import User from './user.ts'
import Category from './category.ts'
import Tag from './tag.ts'
import Comment from './comment.ts'

export default class Note extends NoteSchema {
    @belongsTo(() => User)
    declare user: BelongsTo<typeof User>

    @belongsTo(() => Category)
    declare category: BelongsTo<typeof Category>

    @manyToMany(() => Tag)
    declare tags: ManyToMany<typeof Tag>

    @hasMany(() => Comment)
    declare comments: HasMany<typeof Comment>

}