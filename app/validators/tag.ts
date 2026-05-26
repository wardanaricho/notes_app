import vine from '@vinejs/vine'

export const createTagValidator = vine.object({
    name: vine.string().trim().minLength(1).maxLength(50)
})