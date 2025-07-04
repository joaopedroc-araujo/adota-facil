import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  upload: true,
  admin: { useAsTitle: 'filename' },
  fields: [{ name: 'description', type: 'text', label: 'Descrição' }],
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
