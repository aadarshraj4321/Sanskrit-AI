import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Header Section */}
      <header className="bg-blue-600 text-white text-4xl font-bold text-center py-6">
        Grammar Concepts in Sanskrit
      </header>

      {/* Main Content: Cards for Grammar Concepts */}
      <main className="flex flex-wrap justify-center gap-6 mt-12">
        <Link href="/noun">
          <a>
            <div className="w-72 h-48 bg-cover bg-center rounded-lg shadow-lg transition-transform transform hover:scale-105" style={{ backgroundImage: 'url(https://via.placeholder.com/300x200?text=Noun)' }}>
              <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
                <span className="text-white text-2xl font-bold">संज्ञा (Noun)</span>
              </div>
            </div>
          </a>
        </Link>

        <Link href="/pronoun">
          <a>
            <div className="w-72 h-48 bg-cover bg-center rounded-lg shadow-lg transition-transform transform hover:scale-105" style={{ backgroundImage: 'url(https://via.placeholder.com/300x200?text=Pronoun)' }}>
              <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
                <span className="text-white text-2xl font-bold">सर्वनाम (Pronoun)</span>
              </div>
            </div>
          </a>
        </Link>

        <Link href="/verb">
          <a>
            <div className="w-72 h-48 bg-cover bg-center rounded-lg shadow-lg transition-transform transform hover:scale-105" style={{ backgroundImage: 'url(https://via.placeholder.com/300x200?text=Verb)' }}>
              <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
                <span className="text-white text-2xl font-bold">क्रिया (Verb)</span>
              </div>
            </div>
          </a>
        </Link>

        <Link href="/adverb">
          <a>
            <div className="w-72 h-48 bg-cover bg-center rounded-lg shadow-lg transition-transform transform hover:scale-105" style={{ backgroundImage: 'url(https://via.placeholder.com/300x200?text=Adverb)' }}>
              <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
                <span className="text-white text-2xl font-bold">क्रिया विशेषण (Adverb)</span>
              </div>
            </div>
          </a>
        </Link>

        <Link href="/adjective">
          <a>
            <div className="w-72 h-48 bg-cover bg-center rounded-lg shadow-lg transition-transform transform hover:scale-105" style={{ backgroundImage: 'url(https://via.placeholder.com/300x200?text=Adjective)' }}>
              <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
                <span className="text-white text-2xl font-bold">विशेषण (Adjective)</span>
              </div>
            </div>
          </a>
        </Link>

        <Link href="/preposition">
          <a>
            <div className="w-72 h-48 bg-cover bg-center rounded-lg shadow-lg transition-transform transform hover:scale-105" style={{ backgroundImage: 'url(https://via.placeholder.com/300x200?text=Preposition)' }}>
              <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
                <span className="text-white text-2xl font-bold">पूर्वसर्ग (Preposition)</span>
              </div>
            </div>
          </a>
        </Link>

        <Link href="/conjunction">
          <a>
            <div className="w-72 h-48 bg-cover bg-center rounded-lg shadow-lg transition-transform transform hover:scale-105" style={{ backgroundImage: 'url(https://via.placeholder.com/300x200?text=Conjunction)' }}>
              <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
                <span className="text-white text-2xl font-bold">संयोजक (Conjunction)</span>
              </div>
            </div>
          </a>
        </Link>

        <Link href="/interjection">
          <a>
            <div className="w-72 h-48 bg-cover bg-center rounded-lg shadow-lg transition-transform transform hover:scale-105" style={{ backgroundImage: 'url(https://via.placeholder.com/300x200?text=Interjection)' }}>
              <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
                <span className="text-white text-2xl font-bold">विस्मयादिबोधक (Interjection)</span>
              </div>
            </div>
          </a>
        </Link>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white text-center py-4 mt-12">
        © 2024 Grammar Concepts in Sanskrit
      </footer>
    </>
  );
}
