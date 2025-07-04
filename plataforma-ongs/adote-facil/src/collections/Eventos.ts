import type { CollectionConfig } from 'payload'

export const Eventos: CollectionConfig = {
  slug: 'eventos',
  admin: { useAsTitle: 'title' },
  fields: [
    { name: 'title', type: 'text', required: true, label: 'Título' },
    { name: 'description', type: 'richText', label: 'Descrição' },
    { name: 'date', type: 'date', required: true, label: 'Data' },
    { name: 'location', type: 'text', label: 'Local' },
    { name: 'banner', type: 'upload', relationTo: 'media', label: 'Banner' },
  ],
}
