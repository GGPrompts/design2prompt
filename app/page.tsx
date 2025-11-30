export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-white">
          design2prompt
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl">
          Visual Component Builder → Perfect AI Prompts
        </p>
        <div className="flex gap-4 justify-center mt-8">
          <a
            href="/studio"
            className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
          >
            Open Studio
          </a>
          <a
            href="/collections"
            className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
          >
            View Collections
          </a>
        </div>
      </div>
    </main>
  );
}
