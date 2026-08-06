export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-between p-6 md:p-12 font-sans">
      
      {/* Hero Section Wrapper */}
      <div className="flex-grow flex flex-col items-center justify-center max-w-4xl w-full text-center space-y-6 my-16">
        
        {/* Badge */}
        <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 rounded-full mb-2">
          Early Access
        </span>
        
        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
          bayar.dev
        </h1>
        
        {/* Tagline */}
        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          The developer platform for Generative AI workflows. Orchestrate multi-agent systems, evaluate performance, and deploy secure LLM infrastructure.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 w-full sm:w-auto">
          <a
            href="mailto:contact@bayar.dev?subject=Waitlist%20Request"
            className="w-full sm:w-auto px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-zinc-200 transition"
          >
            Join the Waitlist
          </a>
          <a
            href="#features"
            className="w-full sm:w-auto bg-zinc-900 text-white border border-zinc-800 px-6 py-3 rounded-lg font-medium hover:bg-zinc-800 transition"
          >
            View Features
          </a>
        </div>
      </div>

      {/* Features Grid */}
      <div id="features" className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-16">
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

      {/* Footer */}
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
