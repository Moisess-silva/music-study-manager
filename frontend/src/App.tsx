export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center text-white p-6">
      <div className="bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-700 text-center max-w-md">
        <span className="text-4xl">🎵</span>
        <h1 className="text-3xl font-bold text-emerald-400 mt-4 mb-2">
          Music Study Manager
        </h1>
        <p className="text-slate-400 text-sm">
          Se você estiver vendo este fundo escuro, um título verde e este card bonito, o Tailwind CSS está funcionando 100%!
        </p>
        <button className="mt-6 px-6 py-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold rounded-lg transition-colors">
          Vamos Começar?
        </button>
      </div>
    </div>
  )
}