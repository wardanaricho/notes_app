import { CategorySchema } from '#database/schema'
import { belongsTo, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import User from './user.ts'
import Note from './note.ts'

export default class Category extends CategorySchema {
    @belongsTo(() => User)
    declare user: BelongsTo<typeof User>

    @hasMany(() => Note)
    declare notes: HasMany<typeof Note>

}