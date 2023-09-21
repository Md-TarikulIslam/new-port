import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

const Homepage = () => {
    return (
        <div>
            <Header />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
    )
}

export default Homepage