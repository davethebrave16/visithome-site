import type { Metadata } from 'next'
import { Mail, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Supporto VisitHome - Assistenza | App Immobiliare',
  description: 'Centro di supporto VisitHome. Contatta il nostro team di assistenza per qualsiasi domanda o problema con la nostra app immobiliare.',
  keywords: 'supporto VisitHome, assistenza app immobiliare, contatto supporto, help desk',
  robots: {
    index: true,
    follow: true,
  },
}

export default function SupportPage() {
  return (
    <div className="min-h-screen w-full text-slate-100 visithome-bg visithome-font">
      <div className="w-full mx-auto max-w-7xl px-6 md:px-10 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-black leading-tight mb-6">
              Centro di <span className="text-transparent bg-clip-text hero-gradient-text">Supporto</span>
            </h1>
            <p className="text-slate-200 text-lg max-w-2xl mx-auto">
              Siamo qui per aiutarti a sfruttare al meglio la tua esperienza con VisitHome.
            </p>
          </div>

          {/* Contact Method */}
          <div className="mb-16">
            <div className="bg-gradient-to-tr from-[#7DCED7]/10 to-[#007EA7]/10 rounded-2xl p-8 ring-1 ring-white/10 text-center">
              <Mail className="w-16 h-16 text-[#7DCED7] mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Contattaci via Email</h2>
              <p className="text-slate-200 mb-6 max-w-2xl mx-auto">
                Invia la tua richiesta via email e riceverai una risposta entro 24 ore nei giorni lavorativi.
              </p>
              <a 
                href="mailto:support@visithome.it" 
                className="inline-flex items-center gap-2 rounded-2xl bg-[#007EA7] hover:bg-[#003249] text-white px-6 py-4 text-lg font-semibold shadow-lg transition-colors"
              >
                <Mail className="w-5 h-5" />
                support@visithome.it
              </a>
            </div>
          </div>

          {/* Terms Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8">
              <FileText className="w-8 h-8 inline-block mr-3 text-[#7DCED7]" />
              Termini e Condizioni
            </h2>
            
            <div className="bg-gradient-to-tr from-[#7DCED7]/10 to-[#007EA7]/10 rounded-2xl p-8 ring-1 ring-white/10">
              <h3 className="text-xl font-semibold mb-4 text-[#7DCED7]">
                Documentazione Legale
              </h3>
              <p className="text-slate-200 mb-6">
                Leggi i termini di utilizzo e la privacy policy per comprendere 
                come VisitHome gestisce i tuoi dati e il servizio.
              </p>
              <a 
                href="/terms" 
                className="inline-flex items-center gap-2 rounded-2xl bg-white/90 hover:bg-white text-[#003249] px-6 py-3 text-sm font-semibold ring-1 ring-[#007EA7]/20 shadow-sm transition-colors"
              >
                Leggi Termini e Condizioni →
              </a>
            </div>
          </div>

          {/* Support Hours */}
          <div className="bg-gradient-to-r from-[#003249]/20 to-[#007EA7]/20 rounded-2xl p-8 ring-1 ring-white/10 text-center">
            <h3 className="text-2xl font-bold mb-6 text-[#7DCED7]">
              Orari di Supporto
            </h3>
            <div className="text-slate-200 space-y-2">
              <p className="text-lg font-semibold">Supporto Email</p>
              <p>Lunedì - Venerdì: 9:00 - 18:00</p>
              <p className="text-sm text-slate-300 mt-4">
                Risposta entro 24 ore nei giorni lavorativi
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
