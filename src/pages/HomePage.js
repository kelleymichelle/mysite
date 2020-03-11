import React from 'react'

import Hero from '../components/Hero'
import CardDisplay from '../components/CardDisplay'
// import SocialMediaIcons from '../components/SocialMediaIcons'

export default function HomePage(props) {
    return (
        <div className='hero-home' style={{color: '#212850'}} >
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />

            <CardDisplay />
        </div>
    )
}
