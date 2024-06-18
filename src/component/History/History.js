import React from 'react'
import '../History/history.css'
import learnimg from '../../assets/learnimg.svg'

const History = () => {
  return (
    <div>
      <div class="history-box">
            <div class="learn-image">
                <img src={learnimg} alt="..."></img>
            </div>
            <div class="learn-des">
                <div class="topic">The unseen of spending three years <br></br>at Proxima</div>
                <div class="description">Trusted by leading organizations and innovative startups alike, our client base spans <br></br>various industries, reflecting our commitment to delivering tailored solutions and<br></br> exceptional service.</div>
                <div class ="learn-btn">
                <button class="btn btn-success">Learn More</button>
                </div>
            </div>
      </div>
    </div>
  )
}

export default History
