import { DateTime } from 'luxon'
import { CategorySchema } from '#database/schema'
import { belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import User from './user.ts'
import Note from './note.ts'

export default class Category extends CategorySchema {
    @column({ isPrimary: true })
    declare id: number

    @column()
    declare userId: number

    @column()
    declare name: string

    @column()
    declare color: string | null

    @column.dateTime({ autoCreate: true })
    declare createdAt: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    declare updatedAt: DateTime

    @belongsTo(() => User)
    declare user: BelongsTo<typeof User>

    @hasMany(() => Note)
    declare notes: HasMany<typeof Note>

}