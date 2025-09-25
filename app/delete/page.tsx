import Header from '@/components/sections/Header'
import Footer from '@/components/sections/Footer'

export default function Delete() {
  return (
    <div className="min-h-screen w-full text-slate-100 visithome-bg visithome-font">
      <Header />
      
      <div className="w-full mx-auto max-w-4xl px-6 md:px-10 pt-16 pb-20">
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-black mb-4">
              Richiesta di <span className="text-transparent bg-clip-text hero-gradient-text">Cancellazione Dati</span>
            </h1>
            <p className="text-slate-300 text-lg">
              <strong>Ultimo aggiornamento:</strong> {new Date().toLocaleDateString('it-IT')}
            </p>
          </div>

          <div className="space-y-8">
            <section className="rounded-xl bg-white/5 p-6 ring-1 ring-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Come Cancellare i Tuoi Dati</h2>
              <p className="text-slate-200 mb-4">
                Rispettiamo la tua privacy e ti forniamo la possibilità di cancellare i tuoi dati personali dai nostri sistemi. 
                Per richiedere la cancellazione dei dati, segui i passaggi indicati di seguito:
              </p>
            </section>

            <section className="rounded-xl bg-white/5 p-6 ring-1 ring-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Istruzioni Passo per Passo</h2>
              <div className="bg-[#007EA7]/20 border-l-4 border-[#007EA7] p-6 mb-6 rounded-r-lg">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-[#7DCED7]" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.725-1.36 3.49 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-[#7DCED7]">
                      <strong>Importante:</strong> La cancellazione dei dati è permanente e non può essere annullata. Assicurati di aver fatto un backup di eventuali dati importanti prima di procedere.
                    </p>
                  </div>
                </div>
              </div>

              <ol className="list-decimal pl-6 text-slate-200 space-y-4">
                <li>
                  <strong>Invia un'email al nostro team di protezione dati:</strong>
                  <div className="mt-2 p-4 bg-white/10 rounded-lg">
                    <p className="font-mono text-sm text-slate-200">
                      <strong>A:</strong> customersupport@visithome.it<br />
                      <strong>Oggetto:</strong> Richiesta Cancellazione Dati<br />
                      <strong>Corpo:</strong> Si prega di cancellare tutti i miei dati personali dai vostri sistemi.
                    </p>
                  </div>
                </li>
                <li>
                  <strong>Includi le seguenti informazioni nella tua email:</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-1 text-slate-200">
                    <li>Il tuo nome completo</li>
                    <li>Indirizzo email associato al tuo account</li>
                    <li>Numero di telefono (se fornito durante la registrazione)</li>
                    <li>Nome dell'azienda (se applicabile)</li>
                    <li>Conferma che vuoi cancellare permanentemente i tuoi dati</li>
                  </ul>
                </li>
                <li>
                  <strong>Aspetta la conferma:</strong> Elaboreremo la tua richiesta entro 30 giorni e ti invieremo un'email di conferma una volta che i tuoi dati saranno stati cancellati.
                </li>
              </ol>
            </section>

            <section className="rounded-xl bg-white/5 p-6 ring-1 ring-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Quali Dati Verranno Cancellati</h2>
              <p className="text-slate-200 mb-4">
                Quando richiedi la cancellazione dei dati, rimuoveremo le seguenti informazioni dai nostri sistemi:
              </p>
              <ul className="list-disc pl-6 text-slate-200 space-y-2">
                <li>Informazioni personali (nome, email, numero di telefono)</li>
                <li>Credenziali dell'account e dati di autenticazione</li>
                <li>Informazioni aziendali e professionali</li>
                <li>Dati di utilizzo dell'app e analisi</li>
                <li>Cronologia delle comunicazioni e ticket di supporto</li>
                <li>Eventuali contenuti o file caricati</li>
                <li>Preferenze e impostazioni</li>
              </ul>
            </section>

            <section className="rounded-xl bg-white/5 p-6 ring-1 ring-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Eccezioni alla Conservazione dei Dati</h2>
              <p className="text-slate-200 mb-4">
                Tieni presente che potremmo conservare alcuni dati per scopi legali o normativi, inclusi:
              </p>
              <ul className="list-disc pl-6 text-slate-200 space-y-2">
                <li>Registri finanziari richiesti per scopi fiscali o contabili</li>
                <li>Dati necessari per risolvere controversie in corso</li>
                <li>Informazioni richieste dalle autorità di polizia o normative</li>
                <li>Dati anonimizzati che non possono essere collegati a te</li>
              </ul>
            </section>

            <section className="rounded-xl bg-white/5 p-6 ring-1 ring-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Domande o Preoccupazioni</h2>
              <p className="text-slate-200 mb-4">
                Se hai domande sul processo di cancellazione dei dati o hai bisogno di assistenza con la tua richiesta, 
                non esitare a contattare il nostro team privacy:
              </p>
              <div className="bg-[#007EA7]/20 rounded-lg p-6">
                <p className="text-[#7DCED7]">
                  <strong>Email:</strong> customersupport@visithome.it<br />
                  <strong>Tempo di Risposta:</strong> Entro 48 ore
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
