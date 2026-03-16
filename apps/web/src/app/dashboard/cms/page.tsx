export default function CmsConfigPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Configuração da Página
      </h2>
      <div className="bg-white rounded-lg shadow p-6 max-w-2xl">
        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Nome da ONG
            </label>
            <input
              id="name"
              type="text"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Ex: Patinhas Felizes"
            />
          </div>

          <div>
            <label
              htmlFor="slug"
              className="block text-sm font-medium text-gray-700"
            >
              Slug (URL pública)
            </label>
            <div className="mt-1 flex rounded-md shadow-sm">
              <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                adotafacil.com/
              </span>
              <input
                id="slug"
                type="text"
                className="block w-full rounded-none rounded-r-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="patinhas-felizes"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="primaryColor"
              className="block text-sm font-medium text-gray-700"
            >
              Cor Primária
            </label>
            <input
              id="primaryColor"
              type="color"
              defaultValue="#4F46E5"
              className="mt-1 h-10 w-20 rounded border border-gray-300"
            />
          </div>

          <div>
            <label
              htmlFor="logo"
              className="block text-sm font-medium text-gray-700"
            >
              URL do Logotipo
            </label>
            <input
              id="logo"
              type="url"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="https://..."
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Descrição da ONG
            </label>
            <textarea
              id="description"
              rows={3}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Breve descrição sobre a ONG..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Redes Sociais
            </label>
            <div className="space-y-3">
              <input
                type="url"
                className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Instagram URL"
              />
              <input
                type="url"
                className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Facebook URL"
              />
              <input
                type="url"
                className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="WhatsApp URL"
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors"
          >
            Salvar Configurações
          </button>
        </form>
      </div>
    </div>
  );
}
