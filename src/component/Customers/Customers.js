import React from 'react'
import '../Customers/customers.css'
import Tesla from '../../assets/tesla.svg'
import Logo1 from '../../assets/Logo1.svg'
import Logo2 from '../../assets/Logo2.svg'
import Logo3 from '../../assets/Logo3.svg'
import Logo4 from '../../assets/Logo4.svg'
import Logo5 from '../../assets/Logo5.svg'
import Logo6 from '../../assets/Logo6.svg'
import { ArrowRight } from 'react-bootstrap-icons';

const Customers = () => {
  return (
    <div class="customer-box">
        <div class="cus-img">
            <img src={Tesla} alt="..."></img>
        </div>
        <div class="customer-data">
            <div class="cus-para">
            Since integrating Proxima into our operations, our project management has seen a transformative
            <br></br>shift. The platform's intuitive interface, coupled with its robust features, has significantly 
            <br></br>improved our team's collaboration and productivity. Proxima's customizable reporting tools have 
            <br></br>empowered us with actionable insights, enabling us to make informed decisions and drive our 
            <br></br>projects to success. It's more than just a tool; it's a game-changer for our business.<br></br>
            </div>
            <div class="cus-name">
                <p class="name">Till Smith</p>
                <p class="company">British Dragon Boat Racing Association</p>
            </div>
            <div class="more-details">
                <div class="logos">
                <img src={Logo1} alt='logo not found'></img>
                    <img src={Logo2} alt='logo not found'></img>
                    <img src={Logo3} alt='logo not found'></img>
                    <img src={Logo4} alt='logo not found'></img>
                    <img src={Logo5} alt='logo not found'></img>
                    <img src={Logo6} alt='logo not found'></img>
                </div>
                <div class="more-link">
                    <a href="#">Meet all customers<ArrowRight></ArrowRight></a>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Customers
