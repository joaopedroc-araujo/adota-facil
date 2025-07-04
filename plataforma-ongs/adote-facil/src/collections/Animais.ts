import type { CollectionConfig } from 'payload'

export const Animais: CollectionConfig = {
  slug: 'animais',
  admin: { useAsTitle: 'name' },
  fields: [
    { name: 'name', type: 'text', required: true, label: 'Nome' },
    {
      name: 'species',
      type: 'select',
      options: ['Cachorro', 'Gato', 'Outro'],
      required: true,
      label: 'Espécie',
    },
    { name: 'breed', type: 'text', label: 'Raça' },
    { name: 'age', type: 'number', label: 'Idade' },
    { name: 'gender', type: 'select', options: ['Macho', 'Fêmea'], label: 'Sexo' },
    { name: 'description', type: 'richText', label: 'Descrição' },
    { name: 'photos', type: 'upload', relationTo: 'media', hasMany: true, label: 'Fotos' },
    {
      name: 'status',
      type: 'select',
      options: ['Disponível', 'Adotado', 'Reservado'],
      label: 'Status',
    },
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
