import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold text-blue-600">MyPortfolio</h1>
          <nav className="space-x-6">
            <a href="#home" className="hover:text-blue-600">Home</a>
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#projects" className="hover:text-blue-600">Projects</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="flex-1 bg-blue-50 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-4xl md:text-6xl font-extrabold text-blue-700 mb-4">
          Welcome to My Portfolio
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          I’m a Full-Stack Developer passionate about building web applications.
        </p>
        <a href="#projects" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
          View My Work
        </a>
      </section>

      {/* Features / Projects */}
      <section id="projects" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-10">My Projects</h3>
          <div className="grid gap-8 md:grid-cols-3">
            {["Project 1", "Project 2", "Project 3"].map((title, idx) => (
              <div key={idx} className="p-6 border rounded-lg shadow hover:shadow-lg transition">
                <h4 className="text-xl font-semibold mb-2">{title}</h4>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <a href="#" className="text-blue-600 mt-3 inline-block hover:underline">
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-200 py-4 text-center">
        © {new Date().getFullYear()} MyPortfolio. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
