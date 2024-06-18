import React from 'react'
import '../Services/services.css'
import Icon1 from '../../assets/Icon1.svg'
import Icon2 from '../../assets/Icon2.svg'
import Icon3 from '../../assets/Icon3.svg'

const Services = () => {
  return (
    <div>
      <div class="services-box">
        <div class="topic">Unify projects seamlessly with <br></br>Proxima's integrated system</div>
        <div class="functions-boxes">
        <div class="card">
            <img src={Icon1} class="card-img-top" alt="..."></img>
            <div class="card-body">
            <p class="card-topic">Efficient Project<br></br> Tracking</p>
                <p class="card-text">Monitor and manage project progress <br/>seamlessly within Proxima's intuitive<br/> platform, ensuring deadlines are met <br/>and goals achieved.</p>
            </div>
        </div>
        <div class="card">
            <img src={Icon2} class="card-img-top" alt="..."></img>
            <div class="card-body">
                <p class="card-topic">Collaboration Tools</p>
                <p class="card-text">Foster teamwork and <br></br>communication with integrated<br></br> collaboration tools, facilitating real-time interactions and alignment <br></br>among team members.</p>
            </div>
        </div>
        <div class="card">
            <img src={Icon3} class="card-img-top" alt="..."></img>
            <div class="card-body">
            <p class="card-topic">Custom<br></br>Reporting</p>
                <p class="card-text">Generate tailored reports and insights <br></br>using Proxima's customizable<br></br> reporting features, enabling informed<br></br> decision-making and strategic<br></br> planning for your projects.</p>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Services
