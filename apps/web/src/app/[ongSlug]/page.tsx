import { apiFetch } from '@/lib/api';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface Tenant {
  id: string;
  name: string;
  subdomain: string;
  config?: {
    primaryColor?: string;
    logo?: string;
    description?: string;
    socialLinks?: {
      instagram?: string;
      facebook?: string;
      whatsapp?: string;
    };
  };
}

interface Animal {
  id: string;
  name: string;
  description: string;
  species?: string;
  breed?: string;
  age?: string;
  gender?: string;
  status: string;
  photos: string[];
}

async function getTenantBySlug(slug: string): Promise<Tenant | null> {
  try {
    return await apiFetch<Tenant>(`/tenants/slug/${slug}`);
  } catch {
    return null;
  }
}

async function getAnimals(tenantId: string): Promise<Animal[]> {
  try {
    return await apiFetch<Animal[]>(`/animals/public/${tenantId}`);
  } catch {
    return [];
  }
}

export default async function OngPage({
  params,
}: {
  params: Promise<{ ongSlug: string }>;
}) {
  const { ongSlug } = await params;
  const tenant = await getTenantBySlug(ongSlug);

  if (!tenant) {
    notFound();
  }

  const animals = await getAnimals(tenant.id);
  const primaryColor = tenant.config?.primaryColor || '#4F46E5';

  return (
    <div className="min-h-screen bg-gray-50">
      <header
        className="text-white py-8 px-4"
        style={{ backgroundColor: primaryColor }}
      >
        <div className="max-w-6xl mx-auto text-center">
          {tenant.config?.logo && (
            <Image
              src={tenant.config.logo}
              alt={`${tenant.name} logo`}
              width={200}
              height={64}
              className="h-16 w-auto mx-auto mb-4"
            />
          )}
          <h1 className="text-3xl font-bold">{tenant.name}</h1>
          {tenant.config?.description && (
            <p className="mt-2 text-lg opacity-90">{tenant.config.description}</p>
          )}
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Animais para Adoção
        </h2>

        {animals.length === 0 ? (
          <p className="text-center text-gray-500">
            Nenhum animal disponível para adoção no momento.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {animals
              .filter((a) => a.status === 'AVAILABLE')
              .map((animal) => (
                <div
                  key={animal.id}
                  className="bg-white rounded-lg shadow overflow-hidden"
                >
                  {animal.photos.length > 0 && animal.photos[0] && (
                    <Image
                      src={animal.photos[0]}
                      alt={animal.name}
                      width={400}
                      height={192}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {animal.name}
                    </h3>
                    {(animal.species || animal.breed) && (
                      <p className="text-sm text-gray-500">
                        {[animal.species, animal.breed].filter(Boolean).join(' • ')}
                      </p>
                    )}
                    {animal.age && (
                      <p className="text-sm text-gray-500">{animal.age}</p>
                    )}
                    <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                      {animal.description}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        )}
      </main>

      {tenant.config?.socialLinks && (
        <footer className="bg-gray-800 text-white py-8 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-sm text-gray-400 mb-4">{tenant.name}</p>
            <div className="flex justify-center gap-6">
              {tenant.config.socialLinks.instagram && (
                <a
                  href={tenant.config.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Instagram
                </a>
              )}
              {tenant.config.socialLinks.facebook && (
                <a
                  href={tenant.config.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Facebook
                </a>
              )}
              {tenant.config.socialLinks.whatsapp && (
                <a
                  href={tenant.config.socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              )}
            </div>
            <p className="text-xs text-gray-500 mt-6">
              Powered by Adota Fácil
            </p>
          </div>
        </footer>
      )}
    </div>
  );
}
