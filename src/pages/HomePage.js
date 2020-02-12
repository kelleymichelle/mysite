import React from 'react'

import Hero from '../components/Hero'
import CardDisplay from '../components/CardDisplay'

export default function HomePage(props) {
    return (
        <div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
            <CardDisplay />
        </div>
    )
}
