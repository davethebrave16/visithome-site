import Link from 'next/link'

export default function Hero() {
  return (
    <section className="w-full mx-auto max-w-7xl px-6 md:px-10 pt-16 pb-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-5">
          <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ring-1 ring-[#007EA7]/30 bg-[#007EA7]/10 text-[#7DCED7]">Open House Experience 3.0</span>
          <h1 className="text-4xl md:text-6xl font-black leading-tight">
            L'Open House <span className="text-transparent bg-clip-text hero-gradient-text">come non l'hai mai vissuto</span>
          </h1>
              <p className="text-slate-200 text-lg max-w-xl">
                VisitHome è l'app che digitalizza e semplifica ogni Open House: più tempo per i clienti, meno caos da gestire.
              </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link href="/download" className="inline-flex items-center gap-2 rounded-2xl bg-[#007EA7] hover:bg-[#003249] text-white px-5 py-3 text-sm font-semibold shadow-lg transition-colors">Scarica l'app</Link>
            <Link href="#features" className="inline-flex items-center gap-2 rounded-2xl bg-white/90 hover:bg-white text-[#003249] px-5 py-3 text-sm font-semibold ring-1 ring-[#007EA7]/20 shadow-sm transition-colors">Scopri come funziona</Link>
          </div>
          <div className="flex flex-wrap items-center gap-4 pt-4 text-xs text-slate-300">
            <span className="inline-flex items-center gap-2">✓ Check-in digitale</span>
            <span className="inline-flex items-center gap-2">✓ Prenotazioni smart</span>
            <span className="inline-flex items-center gap-2">✓ Lead nel tuo CRM</span>
          </div>
        </div>
        <div className="grid place-items-center">
          {/* Enhanced Phone mockup */}
          <div className="relative mx-auto h-96 w-52 rounded-[2.2rem] border border-white/20 bg-gradient-to-b from-[#003249] to-[#181A1A] p-3 shadow-2xl">
            <div className="h-full w-full rounded-[1.8rem] bg-[#181A1A] p-3 flex flex-col gap-2">
              <div className="rounded-xl bg-[#003249]/80 h-8 flex items-center px-3 text-xs text-white">VisitHome · Eventi vicini a te</div>
              <div className="flex-1 space-y-2 overflow-hidden">
                {[1,2,3,4].map(i => (
                  <div key={i} className="rounded-xl bg-[#003249]/60 p-3 flex gap-3 hover:bg-[#003249]/80 transition">
                    <div className="h-14 w-16 rounded-lg bg-gradient-to-tr from-[#7DCED7]/40 to-[#007EA7]/40" />
                    <div className="flex-1">
                      <div className="h-3 w-28 rounded bg-white/20 mb-2" />
                      <div className="flex items-center gap-2 text-[10px] text-white/80">
                        <span>Oggi · 17:30</span>
                        <span className="ml-2">posti liberi: 4</span>
                      </div>
                    </div>
                    <button className="text-[10px] px-2 py-1 rounded-md bg-[#007EA7]/80 text-white hover:bg-[#007EA7]">Prenota</button>
                  </div>
                ))}
              </div>
              <div className="h-8 rounded-xl bg-[#003249]/80 flex items-center justify-center text-xs text-white/70">Tab · Cerca · Profilo</div>
            </div>
            <div className="absolute -left-3 -right-3 -top-3 -bottom-3 rounded-[2.6rem] bg-gradient-to-tr from-[#7DCED7]/10 to-[#007EA7]/10 -z-10 blur-xl"/>
          </div>
        </div>
      </div>
    </section>
  )
}
