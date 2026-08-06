import CodeTerminal from './CodeTerminal'; // Make sure CodeTerminal.tsx is in the same folder

export default function Home() {
  return (
    <main className="bg-black text-white font-sans min-h-screen flex flex-col items-center justify-between p-8">
      
      {/* Main Content Wrapper */}
      <div className="w-full max-w-4xl mx-auto pt-12 pb-12 text-center flex-grow">
        
        {/* Hero Copy */}
        <div className="space-y-6">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-emerald-400 bg-emerald-950/80 rounded-full border border-emerald-800">
            EARLY ACCESS
          </span>
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl text-white">
            bayar.dev
          </h1>
          <p className="text-xl text-gray-400">
            The developer platform for Generative AI workflows.
          </p>
        </div>

        {/* Waitlist CTA */}
        <div className="pt-8 flex justify-center">
          <a
            href="mailto:contact@bayar.dev?subject=Waitlist%20Request"
            className="px-8 py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition shadow-[0_0_15px_rgba(255,255,255,0.1)]"
          >
            Join the Waitlist
          </a>
        </div>

        {/* The Animated Terminal replacing the old features grid */}
        <CodeTerminal />

      </div>

      {/* Footer */}
      <footer className="max-w-4xl w-full border-t border-gray-900 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-2 mt-12">
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
