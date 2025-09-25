export default function Contact() {
  return (
    <section id="download" className="w-full mx-auto max-w-7xl px-6 md:px-10 py-20 text-center">
      <div className="mx-auto max-w-3xl space-y-6">
        <h5 className="text-3xl md:text-4xl font-extrabold">Pronto a vivere l'esperienza Open House 3.0?</h5>
            <p className="text-slate-200">Che tu stia cercando casa o voglia venderla, con VisitHome è tutto più semplice.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="/download" className="inline-flex items-center gap-2 rounded-2xl bg-[#007EA7] hover:bg-[#003249] text-white px-5 py-3 text-sm font-semibold shadow-lg transition-colors">Scarica l'app</a>
          <a href="#agents" className="inline-flex items-center gap-2 rounded-2xl bg-white/90 hover:bg-white text-[#003249] px-5 py-3 text-sm font-semibold ring-1 ring-[#007EA7]/20 shadow-sm transition-colors">Inizia a gestire i tuoi Open House</a>
        </div>
      </div>
    </section>
  )
}

