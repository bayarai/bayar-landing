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
    <main className="flex min-h-screen flex-col items-center justify-between p-8 bg-black text-white font-sans">
      
      {/* Hero Section */}
      <div className="max-w-2xl text-center space-y-6 my-auto pt-12 pb-12">
        {/* Badge */}
        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-emerald-400 bg-emerald-950/80 rounded-full border border-emerald-800">
          EARLY ACCESS
        </span>

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
        {/* Title */}
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl text-white">
          bayar.dev
        </h1>

        {/* Tagline */}
        <p className="text-xl text-gray-400">
          The developer platform for Generative AI workflows.
        </p>

      {/* Footer with Verified Email */}
      <footer className="w-full max-w-4xl border-t border-zinc-900 pt-6 flex flex-col md:flex-row justify-between items-center text-zinc-500 text-sm gap-4">
        <div>&copy; 2026 bayar.dev. All rights reserved.</div>
        <div>
          Contact:{' '}
        {/* CTA Section */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="mailto:contact@bayar.dev"
            className="text-zinc-400 hover:text-white transition"
            href="mailto:contact@bayar.dev?subject=Waitlist%20Request"
            className="w-full sm:w-auto px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition"
          >
            contact@bayar.dev
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
