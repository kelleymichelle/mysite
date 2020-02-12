import React from 'react'
import Hero from '../components/Hero'
import Content from '../components/Content'

export default function AboutPage(props) {
    return (
        <div>
            <Hero title={props.title} />

            <Content>
                Add content about me here.
            </Content>
        </div>
    )
}
