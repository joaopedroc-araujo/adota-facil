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
  access: {
    read: ({ req: { user } }) => Boolean(user),
    create: ({ req: { user } }) =>
      user?.role === 'super-admin' || user?.role === 'admin-ong' || user?.role === 'voluntario',
    update: ({ req: { user } }) =>
      user?.role === 'super-admin' || user?.role === 'admin-ong' || user?.role === 'voluntario',
    delete: ({ req: { user } }) => user?.role === 'super-admin' || user?.role === 'admin-ong',
    admin: ({ req: { user } }) => Boolean(user),
  },
}
