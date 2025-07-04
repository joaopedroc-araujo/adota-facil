import { CollectionConfig } from 'payload'

export const Tenants: CollectionConfig = {
  slug: 'tenants',
  admin: { useAsTitle: 'name' },
  fields: [
    { name: 'name', type: 'text', required: true, label: 'Nome da ONG' },
    { name: 'slug', type: 'text', required: true, unique: true, label: 'Slug' },
    { name: 'domain', type: 'text', label: 'Domínio/Subdomínio' },
    { name: 'logo', type: 'upload', relationTo: 'media', label: 'Logo' },
    { name: 'primaryColor', type: 'text', label: 'Cor Primária' },
    { name: 'secondaryColor', type: 'text', label: 'Cor Secundária' },
    { name: 'fontFamily', type: 'text', label: 'Fonte' },
    { name: 'contactEmail', type: 'email', label: 'E-mail de contato' },
    { name: 'phone', type: 'text', label: 'Telefone' },
    { name: 'address', type: 'text', label: 'Endereço' },
    {
      name: 'features',
      type: 'array',
      fields: [{ name: 'feature', type: 'text', label: 'Recurso habilitado' }],
      label: 'Recursos habilitados',
    },
  ],
}
