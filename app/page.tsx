// A reusable component for your features to keep the main code clean
function FeatureCard({ title, description }) {
  return (
    <article className="bg-zinc-950 border border-zinc-800/80 rounded-xl p-6 hover:border-zinc-700 hover:bg-zinc-900/50 transition-all duration-300">
      <h3 className="text-white font-semibold text-lg mb-2">
        {title}
      </h3>
      <p className="text-zinc-400 text-sm leading-relaxed">
        {description}
      </p>
    </article>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-between p-6 md:p-12 font-sans selection:bg-emerald-500/30">
      
      {/* Hero Section */}
      <section className="flex-grow flex flex-col items-center justify-center max-w-4xl w-full text-center space-y-6 my-16">
        
        {/* Badge */}
        <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 rounded-full mb-2">
          Early Access
        </span>
        
        {/* Title with subtle gradient */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-400 pb-2">
          bayar.dev
        </h1>
        
        {/* Tagline */}
        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          The developer platform for Generative AI workflows. Orchestrate multi-agent systems, evaluate performance, and deploy secure LLM infrastructure.
        </p>
        
        {/* CTA Buttons with focus states for accessibility */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 w-full sm:w-auto">
          <a
            href="mailto:contact@bayar.dev?subject=Waitlist%20Request"
            className="w-full sm:w-auto px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-zinc-200 focus:ring-4 focus:ring-zinc-500/50 focus:outline-none transition-all"
          >
            Join the Waitlist
          </a>
          <a
            href="#features"
            className="w-full sm:w-auto bg-zinc-900 text-white border border-zinc-800 px-6 py-3 rounded-lg font-medium hover:bg-zinc-800 focus:ring-4 focus:ring-zinc-700/50 focus:outline-none transition-all"
          >
            View Features
          </a>
        </div>
      </section>

      {/* Features Section - Added scroll-margin so the anchor link doesn't cut off the top */}
      <section id="features" aria-label="Platform Features" className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-16 scroll-mt-24">
        <FeatureCard 
          title="Workflow Orchestration" 
          description="Design, chain, and execute multi-agent LLM pipelines with low latency and flexible deployment options." 
        />
        <FeatureCard 
          title="Observability & Analytics" 
          description="Real-time tracking of token usage, latency, and agent decision outputs in a unified developer console." 
        />
        <FeatureCard 
          title="Governance & Control" 
          description="Enforce strict access rules, secure tool execution, and complete audit logging across all production pipelines." 
        />
      </section>

      {/* Footer */}
      <footer className="w-full max-w-4xl border-t border-zinc-900 pt-6 flex flex-col md:flex-row justify-between items-center text-zinc-500 text-sm gap-4">
        <p>&copy; {new Date().getFullYear()} bayar.dev. All rights reserved.</p>
        <p>
          Contact:{' '}
          <a
            href="mailto:contact@bayar.dev"
            className="text-zinc-400 hover:text-white transition-colors focus:outline-none focus:underline"
          >
            contact@bayar.dev
          </a>
        </p>
      </footer>

    </main>
  );
}
