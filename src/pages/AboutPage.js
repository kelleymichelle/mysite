import React from 'react'
import Hero from '../components/Hero'
import Content from '../components/Content'

export default function AboutPage(props) {
    return (
        <div className='hero-about' >
            <Hero title={props.title} />
            <Content>
            <p>I'm a full-stack web developer based in Scranton, Pennsylvania. I love coding 
            and I am completely driven to create awe-inspiring, attention-getting, unique, 
            and ingenious interactive web applications from scratch.</p>

            <p>As a software engineer, I get to create almost anything I can dream up and 
            I do so every day. I want to make things that make a difference....(?) </p>

            </Content>
        </div>
    )
}
