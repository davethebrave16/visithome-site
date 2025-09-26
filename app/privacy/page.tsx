import Header from '@/components/sections/Header'
import Footer from '@/components/sections/Footer'

export default function Privacy() {
  return (
    <div className="min-h-screen w-full text-slate-100 visithome-bg visithome-font">
      <Header />
      
      <div className="w-full mx-auto max-w-4xl px-6 md:px-10 pt-20 md:pt-16 pb-20">
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-black mb-4">
              Informativa sulla <span className="text-transparent bg-clip-text hero-gradient-text">Privacy</span>
            </h1>
            <p className="text-slate-300 text-lg">
              <strong>Ultimo aggiornamento:</strong> {new Date().toLocaleDateString('it-IT')}
            </p>
          </div>

          <div className="space-y-8">
            <section className="rounded-xl bg-white/5 p-6 ring-1 ring-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Titolare del trattamento</h2>
              <p className="text-slate-200">
                Il titolare del trattamento dei dati è VISITHOME, contattabile all'indirizzo email: privacy@visithome.it
              </p>
            </section>

            <section className="rounded-xl bg-white/5 p-6 ring-1 ring-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Tipologie di dati raccolti</h2>
              <p className="text-slate-200 mb-4">
                Durante la navigazione e l'utilizzo del sito/app vengono raccolti:
              </p>
              <ul className="list-disc pl-6 text-slate-200 space-y-2">
                <li>Dati identificativi (nome, cognome)</li>
                <li>Dati di contatto (email, telefono)</li>
                <li>Dati relativi a prenotazioni e utilizzo dei servizi (es. partecipazione a un Open House)</li>
                <li>Dati tecnici di navigazione (IP, cookie, log di sistema)</li>
              </ul>
            </section>

            <section className="rounded-xl bg-white/5 p-6 ring-1 ring-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Finalità del trattamento</h2>
              <p className="text-slate-200 mb-4">
                I dati vengono utilizzati per:
              </p>
              <ul className="list-disc pl-6 text-slate-200 space-y-2">
                <li>Consentire l'utilizzo delle funzionalità della piattaforma (prenotazioni, gestione eventi, check-in digitale).</li>
                <li>Fornire supporto e assistenza all'utente.</li>
                <li>Adempiere ad obblighi di legge e di sicurezza.</li>
                <li>Attività di comunicazione e marketing (solo previo consenso).</li>
              </ul>
            </section>

            <section className="rounded-xl bg-white/5 p-6 ring-1 ring-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Base giuridica</h2>
              <ul className="list-disc pl-6 text-slate-200 space-y-2">
                <li>Esecuzione di un contratto/servizio richiesto dall'utente.</li>
                <li>Obblighi legali.</li>
                <li>Consenso (per finalità promozionali e uso di cookie non tecnici).</li>
              </ul>
            </section>

            <section className="rounded-xl bg-white/5 p-6 ring-1 ring-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Conservazione dei dati</h2>
              <p className="text-slate-200">
                I dati vengono conservati per il tempo necessario a fornire i servizi e adempiere ad obblighi legali. I dati raccolti per finalità di marketing sono conservati fino a revoca del consenso.
              </p>
            </section>

            <section className="rounded-xl bg-white/5 p-6 ring-1 ring-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Diritti dell'utente</h2>
              <p className="text-slate-200 mb-4">
                In qualunque momento l'utente può esercitare i diritti previsti dal GDPR (accesso, rettifica, cancellazione, limitazione, portabilità, opposizione) scrivendo a privacy@visithome.it.
              </p>
              <p className="text-slate-200">
                L'utente ha inoltre diritto a proporre reclamo all'Autorità Garante per la protezione dei dati personali.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
