import { defineCollection, z } from 'astro:content';

const techsCollection = defineCollection({
    type: "content",
    schema: z.object({
        imagen: z.string(),
        nombre: z.string()
    })
});

export const collections = {
    techs: techsCollection
}