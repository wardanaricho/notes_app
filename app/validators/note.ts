import vine from '@vinejs/vine'

export const createNoteValidator = vine.object({
    title: vine.string().trim().minLength(3).maxLength(255),
    body: vine.string().trim().minLength(1),
    categoryId: vine.number().optional(),
    isPinned: vine.boolean().optional(),
})

export const updateNoteValidator = vine.object({
    title: vine.string().trim().minLength(3).maxLength(255).optional(),
    body: vine.string().trim().optional(),
    categoryId: vine.number().optional(),
    isPinned: vine.boolean().optional(),
})

export const syncTagsValidator = vine.object({
    tagIds: vine.array(vine.number()),
})