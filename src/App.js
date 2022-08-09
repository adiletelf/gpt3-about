import React from 'react'

import { Blog, Features, Header, Footer, Possibility, WhatGPT3 } from './containers'
import { CTA, Brand, Navbar } from './components'
import './App.css'

const App = () => {
  return (
    <React.StrictMode>
      <div className='App'>
        <div className='gradient__bg'>
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
      </div>
    </React.StrictMode>
  )
}

export default App
