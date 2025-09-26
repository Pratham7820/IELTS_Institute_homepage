import './App.css'
import Featurecard from './components/featurecard'
import Reviewcard from './components/reviewcard'
function App() {
  return (
    <>
      {/* Navbar */}
      <header className="flex justify-between px-10 py-5 items-center shadow-md bg-white fixed top-0 left-0 right-0">
        <h2 className="text-2xl font-bold text-blue-800">Excel Academy</h2>
        <nav className="hidden md:flex gap-8 items-center text-gray-700">
          <a href="#about" className="hover:text-blue-800">About</a>
          <a href="#resources" className="hover:text-blue-800">Resources</a>
          <a href="#platform" className="hover:text-blue-800">Platform</a>
          <a href="#pricing" className="hover:text-blue-800">Pricing</a>
          <a href="#footer" className="hover:text-blue-800">Contact</a>
          <button className="bg-blue-800 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out hover:translate-y-0 hover:scale-110">
            Get Started
          </button>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-[url('./assets/oynO57.jpg')] bg-cover bg-center bg-no-repeat h-screen flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Empower Your IELTS Journey
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl mb-10">
            Learn with expert tutors and our advanced online platform. Personalized practice, real-time feedback, and everything you need to ace the IELTS exam.
          </p>
          <button className="text-lg md:text-xl bg-blue-800 px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out hover:translate-y-0 hover:scale-110 ">
            Get Started
          </button>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Features & Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-10">
            <Featurecard
              logo="🎤"
              title="Speaking Practice"
              description="Real-time guided speaking drills with instant feedback. Perfect for daily warm-ups and fluency."
            />
            <Featurecard
              logo="📝"
              title="Mock Tests"
              description="Simulate real exam conditions with full-length practice tests, timers, and detailed scoring reports."
            />
            <Featurecard
              logo="🤖"
              title="AI Band Score"
              description="Get instant AI-predicted band scores with feedback on fluency, vocabulary, and pronunciation."
            />
            <Featurecard
              logo="📚"
              title="Writing Correction"
              description="Submit essays and get grammar corrections, coherence tips, and model high-scoring answers."
            />
          </div>
        </section>

        {/*Review Section */}
        <section className="py-20">
          <h2 className="text-3xl font-semibold text-center mb-12">
            What Our Students Say
          </h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center px-10">
            <Reviewcard
              name='Sarah'
              review='“Excel Academy helped me jump from Band 6.5 to Band 8 in just 3 months. The speaking practice is a game-changer!”'
            />
            <Reviewcard
              name='Lina'
              review='“The mock tests and AI feedback felt just like the real exam. I went in confident and scored Band 7.5.”'
            />
            <Reviewcard
              name='Arjun'
              review='“Personalized writing corrections gave me clarity on exactly what examiners look for. Highly recommended!”'
            />
          </div>
        </section >

        {/* Footer */}
        <footer id="footer" className="bg-blue-900 text-white py-10 px-10" >
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold">Excel Academy</h3>
              <p className="text-gray-300 mt-2">Achieve your IELTS goals with expert guidance.</p>
            </div>
            <div>
              <h4 className="font-semibold">Contact</h4>
              <p>Email: support@excelacademy.com</p>
              <p>Phone: +91 987XXXXXXX</p>
            </div>
          </div>
          <p className="text-center text-gray-400 mt-8">© 2025 Excel Academy. All rights reserved.</p>
        </footer>
      </main >
    </>
  )
}

export default App
