import React from 'react'
import Navbar from '../Components/CityToCIty/Navbar'
import Hero from '../Components/CityToCIty/Hero'
import Download from '../Components/CityToCIty/Download'
import LongDistance from '../Components/CityToCIty/LongDistance'
import Routes from '../Components/CityToCIty/Routes'
import Faq from '../Components/CityToCIty/Faq'
import Signature from '../Components/CityToCIty/Signature'
import SignatureDownload from '../Components/CityToCIty/SignatureDownload'
import Footer from '../Components/CityToCIty/Footer'

const CityToCity = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        {/* <Download /> */}
        <LongDistance />
        <Routes />
        <Faq />
        <Signature />
        {/* <SignatureDownload /> */}
        <Footer />
    </div>
  )
}

export default CityToCity