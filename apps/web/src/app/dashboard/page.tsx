export default function DashboardPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Painel de Controle</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-sm font-medium text-gray-500">Animais Disponíveis</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">—</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-sm font-medium text-gray-500">Adoções Realizadas</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">—</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-sm font-medium text-gray-500">Follow-ups Pendentes</p>
          <p className="text-3xl font-bold text-yellow-600 mt-2">—</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-sm font-medium text-gray-500">Follow-ups Atrasados</p>
          <p className="text-3xl font-bold text-red-600 mt-2">—</p>
        </div>
      </div>
    </div>
  );
}
