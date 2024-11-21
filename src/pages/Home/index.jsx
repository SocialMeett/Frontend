import React from 'react'
import RootLayout from '../../layouts/RootLayout'
import Hero from '../../components/Hero'
import Features from '../../components/Features'
import Steps from '../../components/Steps'
import About from '../../components/About'
import Footer from '../../components/Footer'
import AboutAndTestimonials from '../../components/About'

const Home = () => {
  return (
    <div>
        <RootLayout>    
        </RootLayout>
        <Hero/>
        <Features/>
        <Steps/>
        <AboutAndTestimonials/>
        <Footer/>
    </div>
  )
}

export default Home