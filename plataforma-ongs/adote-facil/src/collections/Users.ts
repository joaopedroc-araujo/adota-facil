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
      options: ['admin', 'editor', 'viewer'],
      defaultValue: 'editor',
      required: true,
      label: 'Papel',
    },
  ],
}
