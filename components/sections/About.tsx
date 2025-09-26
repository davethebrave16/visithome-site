export default function About() {
  return (
    <section id="about" className="w-full mx-auto max-w-7xl px-6 md:px-10 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <h4 className="text-2xl md:text-3xl font-bold">Perché è nata VisitHome</h4>
          <p className="text-slate-200">Gli Open House hanno un potenziale enorme, ma venivano gestiti con strumenti vecchi. VisitHome nasce per digitalizzare l'esperienza, creando un ponte diretto tra chi cerca e chi offre casa.</p>
          <p className="text-slate-200">Un nuovo modo di vivere l'immobiliare: più umano, più smart.</p>
        </div>
        <div className="rounded-2xl bg-gradient-to-tr from-[#7DCED7]/10 to-[#007EA7]/10 p-6 ring-1 ring-white/10">
          <ol className="space-y-4 text-white/90">
            <li className="flex items-start gap-3"><span className="mt-1 h-6 w-6 grid place-items-center rounded-full bg-white/15 text-[12px]">1</span> Dall'idea sul campo alle prime versioni testate con agenti veri.</li>
            <li className="flex items-start gap-3"><span className="mt-1 h-6 w-6 grid place-items-center rounded-full bg-white/15 text-[12px]">2</span> Focus su usabilità, velocità e integrazione con strumenti esistenti.</li>
            <li className="flex items-start gap-3"><span className="mt-1 h-6 w-6 grid place-items-center rounded-full bg-white/15 text-[12px]">3</span> Community e feedback continui per migliorare ogni rilascio.</li>
          </ol>
        </div>
      </div>
    </section>
  )
}
