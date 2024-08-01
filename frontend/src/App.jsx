import React from 'react'
import Header from './components/Header'
import {BrowserRouter} from 'react-router-dom'
import Footer from './components/Footer'

function App() {
  return (
    <div>
<BrowserRouter>
<div className="flex flex-col min-h-screen">
      <Header />
      <main className='container py-3 mx-auto flex-grow'>
        hii
      </main>
      <Footer />
    </div>
</BrowserRouter>
   
    </div>
  )
}

export default App
