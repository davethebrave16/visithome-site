export default function ProductFeatures() {
  return (
    <>
      {/* BUYERS Section */}
      <section id="buyers" className="w-full mx-auto max-w-7xl px-6 md:px-10 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1 space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold">Per chi cerca casa</h3>
            <p className="text-slate-200">Niente più giri a vuoto. Scopri gli immobili in Open House nella tua zona, prenota in un istante e vivi l'evento senza code.</p>
            <ul className="space-y-2 text-slate-100">
              <li>✓ Eventi aggiornati vicino a te</li>
              <li>✓ Prenotazione rapida senza telefonate</li>
              <li>✓ Check-in digitale e niente code</li>
            </ul>
            <div className="pt-2">
              <a href="#download" className="inline-flex items-center gap-2 rounded-2xl bg-[#007EA7] hover:bg-[#003249] text-white px-5 py-3 text-sm font-semibold shadow-lg transition-colors">Scarica l'app</a>
            </div>
          </div>
          <div className="order-1 md:order-2 grid place-items-center">
            <div className="relative mx-auto h-96 w-52 rounded-[2.2rem] border border-white/20 bg-gradient-to-b from-[#1f2a2e] to-[#0b1113] p-3 shadow-2xl"/>
          </div>
        </div>
      </section>

      {/* AGENTS Section */}
      <section id="agents" className="w-full mx-auto max-w-7xl px-6 md:px-10 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative mx-auto w-full max-w-2xl rounded-xl border border-white/10 bg-gradient-to-b from-[#1f2a2e] to-[#0b1113] p-10 shadow-2xl"/>
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold">Per agenzie e venditori</h3>
            <p className="text-slate-200">L'alleato dell'agente moderno: automatizza inviti e prenotazioni, raccoglie contatti profilati in tempo reale e aumenta la visibilità dei tuoi immobili.</p>
            <ul className="space-y-2 text-slate-100">
              <li>✓ Agenda integrata & reminder automatici</li>
              <li>✓ Lead qualificati pronti nel CRM</li>
              <li>✓ Report eventi e performance</li>
            </ul>
            <div className="pt-2">
              <a href="#features" className="inline-flex items-center gap-2 rounded-2xl bg-white/90 hover:bg-white text-[#003249] px-5 py-3 text-sm font-semibold ring-1 ring-[#007EA7]/20 shadow-sm transition-colors">Scopri come funziona</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
