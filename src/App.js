import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Home from './Home'
import Comic from './Comic'

function App() {
  return (
    <div className="flex flex-row h-full">
      <header className="py-6 px-4 bg-red-700 h-screen flex-none">
        <Link to="/"><h1 className="text-white text-2xl mb-4">Marvel Comics</h1></Link>
        <nav className="flex flex-col text-white">
          <Link className="underline mb-1" to="/comic/61531">Hulk</Link>
          <Link className="underline mb-1" to="/comic/67002">Avengers</Link>
          <Link className="underline mb-1" to="/comic/61276">Hawkeye</Link>
        </nav>
      </header>
      <main className="p-10 h-full flex-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comic/:id" element={<Comic />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
