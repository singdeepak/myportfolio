import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Projects from './components/Projects';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>}/>
        <Route path="/about" element={<Layout><About /></Layout>}/>
        <Route path="/skills" element={<Layout><Skills /></Layout>}/>
        <Route path="/projects" element={<Layout><Projects /></Layout>}/>
        <Route path="/contact" element={<Layout><Contact /></Layout>}/>
      </Routes>
    </Router>
  )
}

export default App
