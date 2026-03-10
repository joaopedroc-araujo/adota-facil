import Link from 'next/link';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-gray-50">
      <aside className="w-64 bg-white border-r border-gray-200 p-6 flex flex-col">
        <h1 className="text-xl font-bold text-indigo-600 mb-8">Adota Fácil</h1>
        <nav className="flex flex-col gap-1 flex-1">
          <Link
            href="/dashboard"
            className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
          >
            Painel
          </Link>
          <Link
            href="/dashboard/animals"
            className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
          >
            Animais
          </Link>
          <Link
            href="/dashboard/adoptions"
            className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
          >
            Adoções
          </Link>
          <Link
            href="/dashboard/follow-ups"
            className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
          >
            Acompanhamentos
          </Link>
          <Link
            href="/dashboard/cms"
            className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
          >
            Configurar Página
          </Link>
        </nav>
        <div className="mt-auto pt-4 border-t border-gray-200">
          <Link
            href="/auth/login"
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            Sair
          </Link>
        </div>
      </aside>
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
