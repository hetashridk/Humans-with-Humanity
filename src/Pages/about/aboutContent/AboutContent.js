import React from 'react'
import './aboutContent.css'
import MissionVision from '../../../assests/mission-vision.png'

function AboutContent() {
  return (
    <>
    <div className='aboutContent-container'>
        <div className="mission-vision">
            <div className="content-mission-vision">
                <p>"Our vision is to create a society where animals are safe and surrounded by the good environment. The core of Humans with Humanity is becoming the bridge between humans and animals. We want to create a future where all beings co-exist in harmony with nature. A world where we take a stand for the voiceless and for each other."</p>
            </div>
            <div className="img-mission-vision">
                <img src={MissionVision} alt="" />
            </div>
        </div>
        <div className="what-we-do">
            <div className="title-what-we-do">
                <h1>What We Do</h1>
            </div>
            <div className="content-what-we-do">
                <p>We rescue animals. We have rescued 3900+ animals till now. Besides that, we work towards treatment, rehabilitation, adoption and fostering of the rescues. There is a system in place for vetting those who are interested in adopting the animals. We run inquiries in order to understand the reasoning behind their interest. We counsel the family, ask them to fill forms and then we go for a house check. We ask them for photos and videos of the animal every day for a week after the adoption. We also conduct surprise checks every month. All of this is in place, to ensure that the animal is safe and properly taken care of. Moreover, we lead social campaigns, conduct talk shows and strive to spread awareness on social media and around the community.</p>
                </div>
        </div>
    </div>
    </>
  )
}

export default AboutContent