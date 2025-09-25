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
              <h2 className="text-2xl font-bold text-white mb-4">1. Informazioni che Raccogliamo</h2>
              <p className="text-slate-200 mb-4">
                Raccogliamo le informazioni che ci fornisci direttamente, ad esempio quando crei un account, 
                ti registri alla nostra lista d'attesa o ci contatti per supporto.
              </p>
              <ul className="list-disc pl-6 text-slate-200 space-y-2">
                <li>Nome e informazioni di contatto (indirizzo email, numero di telefono)</li>
                <li>Informazioni aziendali e ruolo professionale</li>
                <li>Preferenze di comunicazione e feedback</li>
                <li>Dati di utilizzo e analisi</li>
              </ul>
            </section>

            <section className="rounded-xl bg-white/5 p-6 ring-1 ring-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">2. Come Utilizziamo le Tue Informazioni</h2>
              <p className="text-slate-200 mb-4">
                Utilizziamo le informazioni raccolte per:
              </p>
              <ul className="list-disc pl-6 text-slate-200 space-y-2">
                <li>Fornire, mantenere e migliorare i nostri servizi</li>
                <li>Processare la tua registrazione e fornire accesso anticipato</li>
                <li>Inviarti notifiche tecniche, aggiornamenti e messaggi di supporto</li>
                <li>Rispondere ai tuoi commenti e domande</li>
                <li>Sviluppare nuovi prodotti e funzionalità</li>
              </ul>
            </section>

            <section className="rounded-xl bg-white/5 p-6 ring-1 ring-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">3. Condivisione delle Informazioni</h2>
              <p className="text-slate-200">
                Non vendiamo, scambiamo o trasferiamo le tue informazioni personali a terze parti 
                senza il tuo consenso, eccetto come descritto in questa informativa.
              </p>
            </section>

            <section className="rounded-xl bg-white/5 p-6 ring-1 ring-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">4. Sicurezza dei Dati</h2>
              <p className="text-slate-200">
                Implementiamo misure di sicurezza appropriate per proteggere le tue informazioni personali 
                contro accessi non autorizzati, alterazioni, divulgazioni o distruzioni.
              </p>
            </section>

            <section className="rounded-xl bg-white/5 p-6 ring-1 ring-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">5. I Tuoi Diritti</h2>
              <p className="text-slate-200 mb-4">
                Hai il diritto di:
              </p>
              <ul className="list-disc pl-6 text-slate-200 space-y-2">
                <li>Accedere e aggiornare le tue informazioni personali</li>
                <li>Richiedere la cancellazione delle tue informazioni personali</li>
                <li>Rinunciare alle comunicazioni di marketing</li>
                <li>Ritirare il consenso per il trattamento dei dati</li>
              </ul>
            </section>

            <section className="rounded-xl bg-white/5 p-6 ring-1 ring-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">6. Contattaci</h2>
              <p className="text-slate-200 mb-4">
                Se hai domande su questa Informativa sulla Privacy, contattaci:
              </p>
              <div className="text-slate-200 space-y-2">
                <p>Email: privacy@visithome.it</p>
                <p>Indirizzo: VisitHome Privacy Team, Italia</p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
