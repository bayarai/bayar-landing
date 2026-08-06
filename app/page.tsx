export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 bg-black text-white font-sans">
      
      {/* Hero Section */}
      <div className="max-w-2xl text-center space-y-6 my-auto pt-12 pb-12">
        {/* Badge */}
        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-emerald-400 bg-emerald-950/80 rounded-full border border-emerald-800">
          EARLY ACCESS
        </span>

        {/* Title */}
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl text-white">
          bayar.dev
        </h1>

        {/* Tagline */}
        <p className="text-xl text-gray-400">
          The developer platform for Generative AI workflows.
        </p>

        {/* CTA Section */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="mailto:contact@bayar.dev?subject=Waitlist%20Request"
            className="w-full sm:w-auto px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition"
          >
            Join the Waitlist
          </a>
          <a
            href="#features"
            className="w-full sm:w-auto px-6 py-3 rounded-lg border border-gray-800 bg-zinc-900 text-gray-300 font-medium hover:bg-zinc-800 transition"
          >
            View Features
          </a>
        </div>
      </div>

      {/* Features Grid (Added for Google Approval) */}
      <div id="features" className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-3 gap-4 my-8 text-left">
        <div className="p-5 rounded-lg border border-gray-800 bg-zinc-950">
          <h3 className="font-semibold text-white mb-2">Workflow Orchestration</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Design, chain, and execute multi-agent LLM pipelines with low latency.
          </p>
        </div>
        <div className="p-5 rounded-lg border border-gray-800 bg-zinc-950">
          <h3 className="font-semibold text-white mb-2">Observability</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Track token usage, latency, and agent execution outputs in real time.
          </p>
        </div>
        <div className="p-5 rounded-lg border border-gray-800 bg-zinc-950">
          <h3 className="font-semibold text-white mb-2">Governance</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Enforce access controls and secure tool execution across production pipelines.
          </p>
        </div>
      </div>

      {/* Footer (Proves Domain Ownership) */}
      <footer className="max-w-4xl w-full border-t border-gray-900 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-2">
        <span>&copy; 2026 bayar.dev. All rights reserved.</span>
        <a 
          href="mailto:contact@bayar.dev" 
          className="hover:text-gray-300 transition"
        >
          contact@bayar.dev
        </a>
      </footer>

    </main>
  );
}
