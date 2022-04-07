import React from 'react'
import Navbar from './Navbar.js';
import Contact from './Contact.js';

export default function About() {
  return (
    <div>
        <Navbar />
        <div className='about'>
            <img src={require('./james.jpg')} alt="James" className="picture"/>
            <p className="about-body">
            Hi! My name is <b>James Kim</b>, and I'm a sophomore at Northwestern University. I am currently building an app that allows people to donate to homeless people and those in need simply by scanning a QR code! According to my team's research, <b>the majority of people, especially those of the younger generation, rarely carry around cash anymore</b>. Although going cashless may be convenient for you or me, homeless people are facing increasing difficulty in receiving donations. We hope that our project can help those in need and encourage people in our generation to start giving!
            <br></br><br></br>
    Although the app isn't ready yet, you can still give through Venmo @givernorthwestern. 100% of the money you donate will be liquidated and donated to the receiver you intended it for. Thank you so much, and feel free to contact me if you want to know more or want to join the team!
            </p>
        </div>
        <div className="contact">
            Thanks for your interest in Giver. If you want more information or are interested in joining our team, feel free to contact me and I'll get back to you soon!
            <br></br><br></br>
            <b>giverproject2021@gmail.com</b><br></br>
            <b>571-532-8260.</b>
        </div>
    </div>
  )
}
