import { TagSchema } from '#database/schema'
import { belongsTo, manyToMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, ManyToMany } from '@adonisjs/lucid/types/relations'
import User from './user.ts'
import Note from './note.ts'

export default class Tag extends TagSchema {
    @belongsTo(() => User)
    declare user: BelongsTo<typeof User>

    @manyToMany(() => Note)
    declare notes: ManyToMany<typeof Note>


}