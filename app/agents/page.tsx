import Header from '@/components/sections/Header'
import Footer from '@/components/sections/Footer'

export default function AgentsPage() {
  return (
    <div className="min-h-screen w-full text-slate-100 visithome-bg visithome-font">
      <Header />
      
      {/* Hero Section */}
      <section className="w-full mx-auto max-w-7xl px-6 md:px-10 pt-20 md:pt-16 pb-20">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-black leading-tight">
            Per <span className="text-transparent bg-clip-text hero-gradient-text">Agenzie Immobiliari</span>
          </h1>
          <p className="text-slate-200 text-lg max-w-3xl mx-auto">
            Trasforma i tuoi Open House in esperienze digitali coinvolgenti. Gestisci eventi, raccogli lead qualificati e aumenta le tue vendite con VisitHome.
          </p>
          <div className="pt-4">
            <a 
              href="https://agency.visithome.it/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-[#007EA7] hover:bg-[#003249] text-white px-8 py-4 text-lg font-semibold shadow-lg transition-colors"
            >
              Accedi al Portale Agenti
            </a>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full mx-auto max-w-7xl px-6 md:px-10 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Come Funziona</h2>
          <p className="text-slate-200 text-lg max-w-2xl mx-auto">
            Tre semplici passaggi per digitalizzare i tuoi Open House e massimizzare i risultati
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-[#007EA7] rounded-full flex items-center justify-center mx-auto text-2xl font-bold text-white">
              1
            </div>
            <h3 className="text-xl font-bold">Crea il tuo Evento</h3>
            <p className="text-slate-200">
              Inserisci i dettagli dell'immobile, seleziona data e orario, e personalizza la tua presentazione in pochi minuti.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-[#007EA7] rounded-full flex items-center justify-center mx-auto text-2xl font-bold text-white">
              2
            </div>
            <h3 className="text-xl font-bold">Condividi e Promuovi</h3>
            <p className="text-slate-200">
              Il tuo evento viene automaticamente pubblicato e i potenziali acquirenti possono prenotare il loro slot preferito.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-[#007EA7] rounded-full flex items-center justify-center mx-auto text-2xl font-bold text-white">
              3
            </div>
            <h3 className="text-xl font-bold">Gestisci e Converti</h3>
            <p className="text-slate-200">
              Ricevi lead qualificati nel tuo CRM, gestisci le prenotazioni e concentrati sulla vendita invece che sulla burocrazia.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full mx-auto max-w-7xl px-6 md:px-10 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Tutto quello che ti serve in un unico posto</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#7DCED7] rounded-full flex items-center justify-center mt-1">
                  <span className="text-[#003249] text-sm font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Dashboard Completa</h3>
                  <p className="text-slate-200">Monitora tutti i tuoi eventi, prenotazioni e performance in tempo reale</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#7DCED7] rounded-full flex items-center justify-center mt-1">
                  <span className="text-[#003249] text-sm font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Lead Qualificati</h3>
                  <p className="text-slate-200">Ricevi solo contatti interessati e prequalificati per i tuoi immobili</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#7DCED7] rounded-full flex items-center justify-center mt-1">
                  <span className="text-[#003249] text-sm font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Integrazione CRM</h3>
                  <p className="text-slate-200">I contatti vengono automaticamente importati nel tuo sistema di gestione</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#7DCED7] rounded-full flex items-center justify-center mt-1">
                  <span className="text-[#003249] text-sm font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Report Avanzati</h3>
                  <p className="text-slate-200">Analizza le performance dei tuoi eventi e ottimizza la tua strategia</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-2xl rounded-xl border border-white/10 bg-gradient-to-b from-[#1f2a2e] to-[#0b1113] p-4 shadow-2xl">
            <div className="rounded-lg bg-[#0b1113] p-4">
              <div className="flex items-center justify-between text-slate-300 text-xs mb-4">
                <span>Dashboard Agente</span>
                <span>Oggi · 25 Set</span>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="rounded-xl bg-white/10 p-3">
                  <div className="text-xs text-slate-300">Eventi Attivi</div>
                  <div className="text-xl font-bold text-white">3</div>
                </div>
                <div className="rounded-xl bg-white/10 p-3">
                  <div className="text-xs text-slate-300">Prenotazioni</div>
                  <div className="text-xl font-bold text-white">12</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="rounded-lg bg-white/10 p-2 text-xs text-slate-200">
                  <div className="flex justify-between items-center">
                    <span>Villa Moderna - Milano</span>
                    <span className="text-[#7DCED7]">5 prenotazioni</span>
                  </div>
                </div>
                <div className="rounded-lg bg-white/10 p-2 text-xs text-slate-200">
                  <div className="flex justify-between items-center">
                    <span>Appartamento Centro - Roma</span>
                    <span className="text-[#7DCED7]">3 prenotazioni</span>
                  </div>
                </div>
                <div className="rounded-lg bg-white/10 p-2 text-xs text-slate-200">
                  <div className="flex justify-between items-center">
                    <span>Loft Design - Firenze</span>
                    <span className="text-[#7DCED7]">4 prenotazioni</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 -z-10 rounded-xl dashboard-glow"/>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full mx-auto max-w-7xl px-6 md:px-10 py-20 text-center">
        <div className="mx-auto max-w-3xl space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold">Pronto a rivoluzionare i tuoi Open House?</h2>
          <p className="text-slate-200">Inizia subito a gestire i tuoi eventi immobiliari in modo più efficiente e professionale.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://agency.visithome.it/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-[#007EA7] hover:bg-[#003249] text-white px-8 py-4 text-lg font-semibold shadow-lg transition-colors"
            >
              Accedi al Portale
            </a>
            <a 
              href="/#features" 
              className="inline-flex items-center gap-2 rounded-2xl bg-white/90 hover:bg-white text-[#003249] px-8 py-4 text-lg font-semibold ring-1 ring-[#007EA7]/20 shadow-sm transition-colors"
            >
              Scopri le Funzionalità
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
