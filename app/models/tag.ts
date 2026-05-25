import { TagSchema } from '#database/schema'
import { DateTime } from 'luxon'
import { belongsTo, column, manyToMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, ManyToMany } from '@adonisjs/lucid/types/relations'
import User from './user.ts'
import Note from './note.ts'

export default class Tag extends TagSchema {
    @column({ isPrimary: true })
    declare id: number

    @column()
    declare userId: number

    @column()
    declare name: string

    @column.dateTime({ autoCreate: true })
    declare createdAt: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    declare updatedAt: DateTime

    @belongsTo(() => User)
    declare user: BelongsTo<typeof User>

    @manyToMany(() => Note)
    declare notes: ManyToMany<typeof Note>


}