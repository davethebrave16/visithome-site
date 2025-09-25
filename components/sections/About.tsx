export default function About() {
  return (
    <section id="about" className="w-full mx-auto max-w-7xl px-6 md:px-10 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <h4 className="text-2xl md:text-3xl font-bold">Perché è nata VisitHome</h4>
              <p className="text-slate-200">Gli Open House hanno un potenziale enorme, ma venivano gestiti con strumenti vecchi. VisitHome nasce per digitalizzare l'esperienza, creando un ponte diretto tra chi cerca e chi offre casa.</p>
          <p className="text-slate-200">Un nuovo modo di vivere l'immobiliare: più umano, più smart.</p>
        </div>
        <div className="rounded-2xl p-6 ring-1 ring-white/10 about-gradient-bg">
          <ol className="space-y-4 text-slate-100">
            <li>1 · Dall'idea sul campo alle prime versioni testate con agenti veri.</li>
            <li>2 · Focus su usabilità, velocità e integrazione con strumenti esistenti.</li>
            <li>3 · Community e feedback continui per migliorare ogni rilascio.</li>
          </ol>
        </div>
      </div>
    </section>
  )
}
