import React from 'react'
import Hero from '../components/Hero'
import Content from '../components/Content'

export default function AboutPage(props) {
    return (
        <div className='hero-about' style={{color: '#212850'}}>
            <Hero title={props.title} />
                <Content>

                    <p>I'm a full-stack web developer based in Scranton, Pennsylvania. I love coding 
                    and am completely driven to create awe-inspiring, attention-getting, unique, 
                    and ingenious interactive web applications from scratch.</p>

                    
                    <p>As a software engineer, I get to create anything I can dream up and 
                    I do so almost every day. From an interactive augmented reality application
                    down to the simplest of informational websites. While also being sure to maintain 
                    the best practices and affording the utmost care and attention. I love to 
                    push the envelope of innovation and strive to surpass ever evolving industry standards. </p>
                    <div style={{height: "70px"}}></div>
                </Content>
        </div>
    )
}
