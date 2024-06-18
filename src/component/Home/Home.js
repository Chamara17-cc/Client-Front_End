import React from 'react'
import Header from '../Header/Header'
import '../Home/home.css'
import HomeImage from '../../assets/Illustration.svg'
import BottomLine from '../Line/Line'
import ClientData from '../Clientdata/ClientData'
import Services from '../Services/Services'
import History from '../History/History'
import Footer from '../Footer/Footer'
import Customers  from '../Customers/Customers'

const Home = () => {
  return (
    <div>
      <div class="body-box">
        <div class="body-text">
          <div class="theme">
            <p class="theme-des">Discover a smarter way to manage <br/>your projects with</p>
            <p class="brand-name"> Proxima</p>
          </div>
          <div class="register-btn">
          <button class="btn btn-success">Register</button>
          </div>
        </div>
        <div class="body-img">
            <img src={HomeImage} alt=' not found'></img>
        </div>
      </div>
      <BottomLine/>
      <ClientData/>
      <BottomLine/>
      <Services/>
      <BottomLine/>
      <History/>
      <BottomLine/>
      <Customers/>
      <Footer/>
    </div>
  )
}

export default Home
