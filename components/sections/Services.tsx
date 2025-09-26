import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'

// Phone mockup component for buyers section
const PhoneMock = () => (
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
)

// Laptop mockup component for agents section
const LaptopMock = () => (
  <div className="relative mx-auto w-full max-w-2xl rounded-xl border border-white/10 bg-gradient-to-b from-[#003249] to-[#181A1A] p-4 shadow-2xl">
    <div className="rounded-lg bg-[#181A1A] p-4">
      <div className="flex items-center justify-between text-white/80 text-xs">
        <span>Dashboard · Agenzia</span>
        <span>Oggi · 25 Set</span>
      </div>
      <div className="grid grid-cols-3 gap-3 mt-3">
        {[
          {k:"Eventi", v:"8"},
          {k:"Prenotazioni", v:"64"},
          {k:"Lead qualificati", v:"29"}
        ].map((c,i)=> (
          <div key={i} className="rounded-xl bg-[#003249]/60 p-4">
            <div className="text-xs text-white/70">{c.k}</div>
            <div className="text-2xl font-bold text-white">{c.v}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 grid md:grid-cols-2 gap-4">
        <div className="rounded-xl bg-[#003249]/60 p-4">
          <div className="text-white/80 text-xs mb-2">Calendario</div>
          <div className="grid grid-cols-7 gap-1 text-[10px] text-center">
            {Array.from({length: 28}).map((_, i)=> (
              <div key={i} className={`aspect-square rounded ${i%5===0? 'bg-[#007EA7] text-white':'bg-[#181A1A] text-white/70'}`}>{i+1}</div>
            ))}
          </div>
        </div>
        <div className="rounded-xl bg-[#003249]/60 p-4">
          <div className="text-white/80 text-xs mb-3">Ultime prenotazioni</div>
          <div className="space-y-2">
            {["Marco", "Sara", "Giulia", "Luca"].map((n,i)=> (
              <div key={i} className="flex items-center justify-between rounded-lg bg-[#181A1A] p-2 text-xs text-white/90">
                <span className="truncate">{n} · Trilocale Pisa · 17:30</span>
                <span className="inline-flex items-center gap-1 text-[#7DCED7]"><CheckCircle2 className="h-3 w-3"/> confermato</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-tr from-[#7DCED7]/10 to-[#007EA7]/10 blur-xl"/>
  </div>
)

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
              <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5" color="#7DCED7"/> Eventi aggiornati vicino a te</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5" color="#7DCED7"/> Prenotazione rapida senza telefonate</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5" color="#7DCED7"/> Check-in digitale e niente code</li>
            </ul>
            <div className="pt-2">
              <Link href="/download" className="inline-flex items-center gap-2 rounded-2xl bg-[#007EA7] hover:bg-[#003249] text-white px-5 py-3 text-sm font-semibold shadow-lg transition-colors">Scarica l'app</Link>
            </div>
          </div>
          <div className="order-1 md:order-2 grid place-items-center">
            <PhoneMock/>
          </div>
        </div>
      </section>

      {/* AGENTS Section */}
      <section id="agents" className="w-full mx-auto max-w-7xl px-6 md:px-10 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="grid place-items-center">
            <LaptopMock/>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold">Per agenzie e venditori</h3>
            <p className="text-slate-200">L'alleato dell'agente moderno: automatizza inviti e prenotazioni, raccoglie contatti profilati in tempo reale e aumenta la visibilità dei tuoi immobili.</p>
            <ul className="space-y-2 text-slate-100">
              <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5" color="#7DCED7"/> Agenda integrata & reminder automatici</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5" color="#7DCED7"/> Lead qualificati pronti nel CRM</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5" color="#7DCED7"/> Report eventi e performance</li>
            </ul>
            <div className="pt-2">
              <Link href="/agents" className="inline-flex items-center gap-2 rounded-2xl bg-white/90 hover:bg-white text-[#003249] px-5 py-3 text-sm font-semibold ring-1 ring-[#007EA7]/20 shadow-sm transition-colors">Scopri come funziona</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}