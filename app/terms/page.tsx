import Header from '@/components/sections/Header'
import Footer from '@/components/sections/Footer'

export default function Terms() {
  return (
    <div className="min-h-screen w-full text-slate-100 visithome-bg visithome-font">
      <Header />
      
      <div className="w-full mx-auto max-w-4xl px-6 md:px-10 pt-20 md:pt-16 pb-20">
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-black mb-4">
              Termini e <span className="text-transparent bg-clip-text hero-gradient-text">Condizioni</span>
            </h1>
            <p className="text-slate-300 text-lg">
              <strong>Ultimo aggiornamento:</strong> {new Date().toLocaleDateString('it-IT')}
            </p>
          </div>

          <div className="space-y-8">
            <section className="rounded-xl bg-white/5 p-6 ring-1 ring-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Oggetto</h2>
              <p className="text-slate-200">
                VISITHOME è una piattaforma digitale che consente di organizzare, gestire e partecipare a eventi di tipo Open House immobiliare.
              </p>
            </section>

            <section className="rounded-xl bg-white/5 p-6 ring-1 ring-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Utilizzo della piattaforma</h2>
              <ul className="list-disc pl-6 text-slate-200 space-y-2">
                <li>L'utente si impegna a fornire dati veritieri e aggiornati.</li>
                <li>È vietato utilizzare la piattaforma per finalità illecite, fraudolente o dannose.</li>
                <li>VISITHOME non garantisce la disponibilità continua del servizio e non è responsabile di interruzioni, malfunzionamenti o danni indiretti derivanti dall'uso del sito/app.</li>
              </ul>
            </section>

            <section className="rounded-xl bg-white/5 p-6 ring-1 ring-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Contenuti e proprietà intellettuale</h2>
              <ul className="list-disc pl-6 text-slate-200 space-y-2">
                <li>Tutti i contenuti, loghi, testi, immagini e software presenti su VISITHOME sono protetti da copyright e non possono essere copiati, riprodotti o distribuiti senza autorizzazione.</li>
                <li>I marchi e i loghi di terze parti restano di proprietà dei rispettivi titolari.</li>
              </ul>
            </section>

            <section className="rounded-xl bg-white/5 p-6 ring-1 ring-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Limitazione di responsabilità</h2>
              <p className="text-slate-200 mb-4">
                VISITHOME non è responsabile di:
              </p>
              <ul className="list-disc pl-6 text-slate-200 space-y-2">
                <li>Eventuali errori nei contenuti caricati da utenti o terze parti.</li>
                <li>Danni diretti o indiretti derivanti dall'utilizzo del sito/app.</li>
                <li>Eventuali problematiche legate a immobili, eventi o transazioni organizzate attraverso la piattaforma (che restano di esclusiva responsabilità delle parti coinvolte).</li>
              </ul>
            </section>

            <section className="rounded-xl bg-white/5 p-6 ring-1 ring-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Modifiche ai termini</h2>
              <p className="text-slate-200">
                VISITHOME si riserva il diritto di modificare in qualsiasi momento i presenti Termini e Condizioni. Le modifiche saranno pubblicate sul sito e diverranno efficaci dalla data di pubblicazione.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
