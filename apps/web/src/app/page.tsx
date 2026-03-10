import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-indigo-600">Adota Fácil</h1>
          <Link
            href="/auth/login"
            className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors"
          >
            Entrar
          </Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Plataforma para ONGs de Proteção Animal
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
          Crie a página web da sua ONG, gerencie animais para adoção e
          acompanhe o pós-adoção com facilidade.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white rounded-lg shadow p-6 text-left">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              🌐 CMS para sua ONG
            </h3>
            <p className="text-gray-600 text-sm">
              Gere e customize sua própria página web com cores, logo e
              informações da sua ONG de forma gratuita.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-left">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              🐾 Vitrine de Animais
            </h3>
            <p className="text-gray-600 text-sm">
              Cadastre animais disponíveis para adoção com fotos, descrição e
              estado de saúde. Publique automaticamente na sua página.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-left">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              📋 Pós-Adoção
            </h3>
            <p className="text-gray-600 text-sm">
              Acompanhe cada adoção com follow-ups automáticos em 7 dias, 30
              dias e 6 meses. Nunca perca um acompanhamento.
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-gray-400 py-8 px-4 text-center text-sm">
        <p>Adota Fácil — Plataforma de adoção animal para ONGs</p>
      </footer>
    </div>
  );
}
