import React from 'react'
import '../Clientdata/clientdata.css'
import Logo1 from '../../assets/Logo1.svg'
import Logo2 from '../../assets/Logo2.svg'
import Logo3 from '../../assets/Logo3.svg'
import Logo4 from '../../assets/Logo4.svg'
import Logo5 from '../../assets/Logo5.svg'
import Logo6 from '../../assets/Logo6.svg'

const ClientData = () => {
  return (
    <div>
      <div class="data-box">
        <div class="client-text">
            <div class="topic">Our Clients</div>
            <div class="vision">"Trusted by diverse industries; valued partnerships and innovative collaborations."</div>
        </div>
        <div class="client-logos">
            <img src={Logo1} alt='logo not found'></img>
            <img src={Logo2} alt='logo not found'></img>
            <img src={Logo3} alt='logo not found'></img>
            <img src={Logo4} alt='logo not found'></img>
            <img src={Logo5} alt='logo not found'></img>
            <img src={Logo6} alt='logo not found'></img>
            <img src={Logo3} alt='logo not found'></img>
        </div>
      </div>
    </div>
  )
}

export default ClientData
