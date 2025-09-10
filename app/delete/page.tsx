import Header from '@/components/sections/Header'
import Footer from '@/components/sections/Footer'

export default function Delete() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Data Deletion Request</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Delete Your Data</h2>
              <p className="text-gray-600 mb-4">
                We respect your privacy and provide you with the ability to delete your personal data from our systems. 
                To request data deletion, please follow the steps below:
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Step-by-Step Instructions</h2>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.725-1.36 3.49 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-blue-700">
                      <strong>Important:</strong> Data deletion is permanent and cannot be undone. Please ensure you have backed up any important data before proceeding.
                    </p>
                  </div>
                </div>
              </div>

              <ol className="list-decimal pl-6 text-gray-600 space-y-4">
                <li>
                  <strong>Send an email to our data protection team:</strong>
                  <div className="mt-2 p-4 bg-gray-100 rounded-lg">
                    <p className="font-mono text-sm">
                      <strong>To:</strong> privacy@visithome.it<br />
                      <strong>Subject:</strong> Data Deletion Request<br />
                      <strong>Body:</strong> Please delete all my personal data from your systems.
                    </p>
                  </div>
                </li>
                <li>
                  <strong>Include the following information in your email:</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Your full name</li>
                    <li>Email address associated with your account</li>
                    <li>Phone number (if provided during registration)</li>
                    <li>Company name (if applicable)</li>
                    <li>Confirmation that you want to permanently delete your data</li>
                  </ul>
                </li>
                <li>
                  <strong>Wait for confirmation:</strong> We will process your request within 30 days and send you a confirmation email once your data has been deleted.
                </li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">What Data Will Be Deleted</h2>
              <p className="text-gray-600 mb-4">
                When you request data deletion, we will remove the following information from our systems:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Personal information (name, email, phone number)</li>
                <li>Account credentials and authentication data</li>
                <li>Company and professional information</li>
                <li>App usage data and analytics</li>
                <li>Communication history and support tickets</li>
                <li>Any uploaded content or files</li>
                <li>Preferences and settings</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Retention Exceptions</h2>
              <p className="text-gray-600 mb-4">
                Please note that we may retain certain data for legal or regulatory purposes, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Financial records required for tax or accounting purposes</li>
                <li>Data necessary to resolve ongoing disputes</li>
                <li>Information required by law enforcement or regulatory authorities</li>
                <li>Anonymized data that cannot be linked back to you</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Questions or Concerns</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about the data deletion process or need assistance with your request, 
                please don't hesitate to contact our privacy team at:
              </p>
              <div className="bg-blue-50 rounded-lg p-6">
                <p className="text-blue-800">
                  <strong>Email:</strong> privacy@visithome.it<br />
                  <strong>Response Time:</strong> Within 48 hours
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
