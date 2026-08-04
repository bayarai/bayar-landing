export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-black text-white font-sans">
      <div className="max-w-2xl text-center space-y-6">
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
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 rounded-lg border border-gray-800 bg-zinc-900 text-gray-300 font-medium hover:bg-zinc-800 transition"
          >
            View Docs
          </a>
        </div>
      </div>
    </main>
  );
}