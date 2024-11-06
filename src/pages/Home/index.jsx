import React from 'react'
import RootLayout from '../../layouts/RootLayout'
import Hero from '../../components/Hero'
import Features from '../../components/Features'
import Steps from '../../components/Steps'
import About from '../../components/About'

const Home = () => {
  return (
    <div>
        <RootLayout>    
        </RootLayout>
        <Hero/>
        <Features/>
        <Steps/>
        <About/>
    </div>
  )
}

export default Home