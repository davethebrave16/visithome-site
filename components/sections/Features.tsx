import { Calendar, Users, CheckCircle2 } from 'lucide-react'

export default function Features() {
  return (
    <section id="features" className="w-full mx-auto max-w-7xl px-6 md:px-10 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Dimentica burocrazia e caos di agenda</h2>
          <p className="text-slate-200">Organizzare un Open House richiede tempo, chiamate infinite e mille fogli. Con VisitHome basta un click: calendario smart, check-in digitali, contatti già pronti nel tuo CRM.</p>
          <div className="grid sm:grid-cols-3 gap-3 pt-2">
            {[
              {icon: <Calendar className="h-4 w-4"/>, t:"Agenda automatizzata"},
              {icon: <Users className="h-4 w-4"/>, t:"Buyer prequalificati"},
              {icon: <CheckCircle2 className="h-4 w-4"/>, t:"Gestione fluida"}
            ].map((f,i)=> (
              <div key={i} className="rounded-xl bg-[#003249]/60 p-3 text-sm text-white/90 flex items-center gap-2 ring-1 ring-white/5">
                {f.icon} {f.t}
              </div>
            ))}
          </div>
        </div>
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
                <div className="flex items-center gap-2 text-white/80 text-xs mb-2"><Calendar className="h-4 w-4"/> Calendario</div>
                <div className="grid grid-cols-7 gap-1 text-[10px] text-center">
                  {Array.from({length: 28}).map((_, i)=> (
                    <div key={i} className={`aspect-square rounded ${i%5===0? 'bg-[#007EA7] text-white':'bg-[#181A1A] text-white/70'}`}>{i+1}</div>
                  ))}
                </div>
              </div>
              <div className="rounded-xl bg-[#003249]/60 p-4">
                <div className="flex items-center gap-2 text-white/80 text-xs mb-3"><Users className="h-4 w-4"/> Ultime prenotazioni</div>
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
      </div>
    </section>
  )
}
