import { defineCollection, z } from 'astro:content';

const techsCollection = defineCollection({
    type: "content",
    schema: z.object({
        imagen: z.string(),
        nombre: z.string()
    })
});

const trabajosCollection = defineCollection({
    type: "content",
    schema: z.object({
        imagen: z.string(),
        nombre: z.string().optional(),
        proyecto: z.string().optional(),
        link: z.string().optional(),
        back: z.string().optional(),
        front: z.string().optional()
    })
});

// Define the collections
export const collections = {
    trabajos: trabajosCollection,
    techs: techsCollection
};