export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-between p-6 md:p-12">
      <div className="max-w-4xl w-full flex flex-col items-center text-center">
        
        {/* Hero Section */}
        <div className="mt-16 mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 rounded-full mb-6">
            Early Access
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
            bayar.dev
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            The developer platform for Generative AI workflows. Orchestrate multi-agent systems, evaluate performance, and deploy secure LLM infrastructure.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="#waitlist"
              className="bg-white text-black px-6 py-3 rounded-lg font-semibold text-sm hover:bg-zinc-200 transition"
            >
              Join the Waitlist
            </a>
            <a
              href="#docs"
              className="bg-zinc-900 text-white border border-zinc-800 px-6 py-3 rounded-lg font-medium text-sm hover:bg-zinc-800 transition"
            >
              View Docs
            </a>
          </div>
        </div>

        {/* Features Section (For Google Approval) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left w-full mb-16">
          <div className="bg-zinc-950 border border-zinc-800/80 rounded-xl p-6">
            <h3 className="text-white font-semibold text-lg mb-2">
              Workflow Orchestration
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Design, chain, and execute multi-agent LLM pipelines with low latency and flexible deployment options.
            </p>
          </div>
          <div className="bg-zinc-950 border border-zinc-800/80 rounded-xl p-6">
            <h3 className="text-white font-semibold text-lg mb-2">
              Observability & Analytics
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Real-time tracking of token usage, latency, and agent decision outputs in a unified developer console.
            </p>
          </div>
          <div className="bg-zinc-950 border border-zinc-800/80 rounded-xl p-6">
            <h3 className="text-white font-semibold text-lg mb-2">
              Governance & Control
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Enforce strict access rules, secure tool execution, and complete audit logging across all production pipelines.
            </p>
          </div>
        </div>
      </div>

      {/* Footer with Verified Email */}
      <footer className="w-full max-w-4xl border-t border-zinc-900 pt-6 flex flex-col md:flex-row justify-between items-center text-zinc-500 text-sm gap-4">
        <div>&copy; 2026 bayar.dev. All rights reserved.</div>
        <div>
          Contact:{' '}
          <a
            href="mailto:contact@bayar.dev"
            className="text-zinc-400 hover:text-white transition"
          >
            contact@bayar.dev
          </a>
        </div>
      </footer>
    </main>
  );
}
