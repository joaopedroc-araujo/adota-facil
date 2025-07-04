import type { CollectionConfig } from 'payload'

export const Paginas: CollectionConfig = {
  slug: 'paginas',
  admin: { useAsTitle: 'title' },
  fields: [
    { name: 'title', type: 'text', required: true, label: 'Título' },
    { name: 'slug', type: 'text', required: true, unique: true, label: 'Slug (URL)' },
    { name: 'content', type: 'richText', label: 'Conteúdo' },
  ],
}
