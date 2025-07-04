import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: { useAsTitle: 'email' },
  fields: [
    { name: 'firstName', type: 'text', required: true, label: 'Nome' },
    { name: 'lastName', type: 'text', required: true, label: 'Sobrenome' },
    {
      name: 'role',
      type: 'select',
      options: [
        { label: 'Super Admin', value: 'super-admin' },
        { label: 'Admin ONG', value: 'admin-ong' },
        { label: 'Voluntário', value: 'voluntario' },
      ],
      defaultValue: 'voluntario',
      required: true,
      label: 'Papel',
    },
  ],
  access: {
    read: ({ req: { user } }) =>
      user?.role === 'super-admin' ||
      user?.role === 'admin-ong' ||
      (user?.role === 'voluntario' && { id: { equals: user.id } }),
    create: ({ req: { user } }) => user?.role === 'super-admin' || user?.role === 'admin-ong',
    update: ({ req: { user }, id }) =>
      user?.role === 'super-admin' ||
      user?.role === 'admin-ong' ||
      (user?.role === 'voluntario' && user.id === id),
    delete: ({ req: { user } }) => user?.role === 'super-admin' || user?.role === 'admin-ong',
    admin: ({ req: { user } }) => user?.role === 'super-admin' || user?.role === 'admin-ong',
  },
}
