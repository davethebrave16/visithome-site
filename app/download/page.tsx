import Header from '@/components/sections/Header'
import Footer from '@/components/sections/Footer'

export default function DownloadPage() {
  return (
    <div className="min-h-screen w-full text-slate-100 visithome-bg visithome-font">
      <Header />
      
      {/* Hero Section */}
      <section className="w-full mx-auto max-w-7xl px-6 md:px-10 pt-16 pb-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-black leading-tight">
              Trova la casa <span className="text-transparent bg-clip-text hero-gradient-text">dei tuoi sogni</span>
            </h1>
            <p className="text-slate-200 text-lg max-w-xl">
              Scopri gli Open House nella tua zona, prenota visite senza code e vivi un'esperienza immobiliare completamente nuova.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://play.google.com/store/apps/details?id=it.visithome.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                  alt="Disponibile su Google Play" 
                  className="h-14 hover:opacity-80 transition-opacity"
                />
              </a>
              <a 
                href="https://apps.apple.com/app/visithome/id123456789" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                  alt="Scarica su App Store" 
                  className="h-14 hover:opacity-80 transition-opacity"
                />
              </a>
            </div>
            <div className="pt-2">
              <a 
                href="https://app.visithome.it/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-white/90 hover:bg-white text-[#003249] px-6 py-3 text-sm font-semibold ring-1 ring-[#007EA7]/20 shadow-sm transition-colors"
              >
                🌐 Accedi da Web
              </a>
            </div>
          </div>
          <div className="grid place-items-center">
            {/* Phone mockup */}
            <div className="relative mx-auto h-96 w-52 rounded-[2.2rem] border border-white/20 bg-gradient-to-b from-[#1f2a2e] to-[#0b1113] p-3 shadow-2xl">
              <div className="h-full w-full rounded-[1.8rem] bg-[#0b1113] p-3 flex flex-col gap-2">
                <div className="rounded-xl bg-white/10 h-8 flex items-center px-3 text-xs text-slate-200">visithome · Eventi vicini a te</div>
                <div className="flex-1 space-y-2 overflow-hidden">
                  {[
                    { title: "Villa Moderna", location: "Milano Centro", time: "Oggi 15:00", spots: "2 posti liberi" },
                    { title: "Appartamento Design", location: "Roma Trastevere", time: "Domani 10:30", spots: "1 posto libero" },
                    { title: "Loft Industriale", location: "Firenze Oltrarno", time: "Domani 16:00", spots: "3 posti liberi" },
                    { title: "Casa con Giardino", location: "Bologna Centro", time: "Sabato 11:00", spots: "4 posti liberi" }
                  ].map((event, i) => (
                    <div key={i} className="rounded-xl bg-white/10 p-3 flex gap-3 hover:bg-white/15 transition">
                      <div className="h-14 w-16 rounded-lg phone-mockup-gradient" />
                      <div className="flex-1">
                        <div className="h-3 w-28 rounded bg-white/20 mb-1" />
                        <div className="h-2 w-20 rounded bg-white/10 mb-1" />
                        <div className="flex items-center gap-2 text-[10px] text-slate-300">
                          <span>{event.time}</span>
                          <span>•</span>
                          <span>{event.spots}</span>
                        </div>
                      </div>
                      <button className="text-[10px] px-2 py-1 rounded-md bg-[#007EA7] text-white hover:bg-[#003249]">Prenota</button>
                    </div>
                  ))}
                </div>
                <div className="h-8 rounded-xl bg-white/10 flex items-center justify-center text-xs text-slate-300">Tab · Cerca · Profilo</div>
              </div>
              <div className="absolute -left-3 -right-3 -top-3 -bottom-3 rounded-[2.6rem] phone-mockup-glow"/>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full mx-auto max-w-7xl px-6 md:px-10 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Perché scegliere visithome?</h2>
          <p className="text-slate-200 text-lg max-w-2xl mx-auto">
            L'app che rivoluziona la ricerca casa, rendendo gli Open House più semplici e accessibili
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-[#007EA7] rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl">🔍</span>
            </div>
            <h3 className="text-xl font-bold">Scopri Eventi Vicini</h3>
            <p className="text-slate-200">
              Trova tutti gli Open House nella tua zona con filtri per prezzo, zona e tipo di immobile.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-[#007EA7] rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl">📱</span>
            </div>
            <h3 className="text-xl font-bold">Prenotazione Istantanea</h3>
            <p className="text-slate-200">
              Prenota il tuo slot preferito in pochi secondi, senza telefonate o attese infinite.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-[#007EA7] rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-bold">Check-in Digitale</h3>
            <p className="text-slate-200">
              Arriva all'evento e fai il check-in con un semplice QR code, niente code o registrazioni.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full mx-auto max-w-7xl px-6 md:px-10 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Come funziona</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#7DCED7] rounded-full flex items-center justify-center text-[#003249] font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Scarica l'app</h3>
                  <p className="text-slate-200">Disponibile su iOS, Android e accessibile da browser web</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#7DCED7] rounded-full flex items-center justify-center text-[#003249] font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Cerca nella tua zona</h3>
                  <p className="text-slate-200">Filtra per zona, prezzo e caratteristiche per trovare l'immobile perfetto</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#7DCED7] rounded-full flex items-center justify-center text-[#003249] font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Prenota e visita</h3>
                  <p className="text-slate-200">Scegli il tuo orario preferito e vivi un'esperienza di visita unica</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-2xl rounded-xl border border-white/10 bg-gradient-to-b from-[#1f2a2e] to-[#0b1113] p-4 shadow-2xl">
            <div className="rounded-lg bg-[#0b1113] p-4">
              <div className="text-center mb-4">
                <h3 className="text-lg font-semibold text-white mb-2">I tuoi eventi prenotati</h3>
                <p className="text-slate-300 text-sm">Gestisci le tue prenotazioni in un colpo d'occhio</p>
              </div>
              <div className="space-y-3">
                {[
                  { property: "Villa Moderna - Milano", date: "Oggi, 15:00", status: "Confermato" },
                  { property: "Appartamento Design - Roma", date: "Domani, 10:30", status: "In attesa" },
                  { property: "Loft Industriale - Firenze", date: "Sabato, 16:00", status: "Confermato" }
                ].map((booking, i) => (
                  <div key={i} className="rounded-lg bg-white/10 p-3">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-white">{booking.property}</h4>
                        <p className="text-xs text-slate-300">{booking.date}</p>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        booking.status === 'Confermato' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {booking.status}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <button className="text-xs px-3 py-1 rounded-md bg-[#007EA7] text-white hover:bg-[#003249] transition-colors">
                        Dettagli
                      </button>
                      <button className="text-xs px-3 py-1 rounded-md bg-white/10 text-slate-200 hover:bg-white/20 transition-colors">
                        Annulla
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute inset-0 -z-10 rounded-xl dashboard-glow"/>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full mx-auto max-w-7xl px-6 md:px-10 py-20 text-center">
        <div className="mx-auto max-w-3xl space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold">Inizia la tua ricerca casa oggi</h2>
          <p className="text-slate-200">Scarica l'app e scopri gli Open House più interessanti nella tua zona</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://play.google.com/store/apps/details?id=it.visithome.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                alt="Disponibile su Google Play" 
                className="h-16 hover:opacity-80 transition-opacity"
              />
            </a>
            <a 
              href="https://apps.apple.com/app/visithome/id123456789" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                alt="Scarica su App Store" 
                className="h-16 hover:opacity-80 transition-opacity"
              />
            </a>
            <a 
              href="https://app.visithome.it/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white/90 hover:bg-white text-[#003249] px-6 py-4 text-lg font-semibold ring-1 ring-[#007EA7]/20 shadow-sm transition-colors"
            >
              🌐 Accedi da Web
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
