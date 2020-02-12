import React, { Component } from 'react'

import Card from '../components/Card'

import moonlight from '../assets/images/moonlight.png';
import tagsale from '../assets/images/tagsale.png';
import rubikstimetracker from '../assets/images/rubikstimetracker.png';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


export class CardDisplay extends Component {
    constructor(props) {
        super()
        this.state ={
            items: [
                {
                    id: 0,
                    title: 'Moonlight',
                    subTitle: 'Explore our Solar System',
                    imgSrc: moonlight,
                    link: 'https://github.com/jamievullo/Moonlight',
                    selected: false
                },
                {
                    id: 1,
                    title: 'TagSale',
                    subTitle: 'Buy or Sell Your New or Used Items',
                    imgSrc: tagsale,
                    link: 'https://github.com/jamievullo/Tag-Sale',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Rubiks Time Tracker',
                    subTitle: 'Keep Track of Your Speedcubing Times',
                    imgSrc: rubikstimetracker,
                    link: 'https://github.com/jamievullo/Rubiks_Time_Tracker',
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        })

        this.setState({
            items
        })
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return (
            <div>
                <Container fluid={true}>
                    <Row className="justify-content-around">
                        {this.makeItems(this.state.items)}
                    </Row>
                </Container>
            </div>
        )
    }
}

export default CardDisplay
