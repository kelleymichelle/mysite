import React from 'react'

import CardInfo from '../components/CardInfo'

export default function Card(props) {
    return (
        <div className="d-inline-block j-card" onClick={(e) => props.click(props.item)} style={{color: '#212850'}}>
            { props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} gitLink={props.item.gitLink}/> }
            <img className="j-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
            
        </div>
    )
}
