import React, { Component } from 'react'

import Card from '../components/Card'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

export default class CardDisplay extends Component {
    constructor(props) {
        super()
        this.state ={
            items: [
                {
                    id: 0,
                    title: 'Moonlight',
                    subTitle: 'JavaScript SPA/Rails API',
                    imgSrc: 'https://res.cloudinary.com/brickcodebanger/image/upload/v1584293872/moonlight2_kxxnk5.png',
                    link: 'https://projectmoonlight.herokuapp.com/',
                    gitLink: 'https://github.com/jamievullo/Moonlight',
                    selected: false
                },
                {
                    id: 1,
                    title: 'TagSale',
                    subTitle: 'Ruby on Rails, Active Record, SQL',
                    imgSrc: 'https://res.cloudinary.com/brickcodebanger/image/upload/v1584293905/tagsale2_hluysp.png',
                    link: 'https://github.com/jamievullo/Tag-Sale',
                    gitLink: 'https://github.com/jamievullo/Tag-Sale',
                    selected: false
                },
                {
                    id: 2,
                    title: 'TravelSaver',
                    subTitle: 'React, JavaScript, Rails API',
                    imgSrc: 'https://res.cloudinary.com/brickcodebanger/image/upload/v1584293861/travelsaver2_punwtc.png',
                    link: 'https://github.com/jamievullo/TravelSaver',
                    gitLink: 'https://github.com/jamievullo/TravelSaver',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Rubiks Time Tracker',
                    subTitle: 'Sinatra, HTML, CSS, OOP, MVC',
                    imgSrc: 'https://res.cloudinary.com/brickcodebanger/image/upload/v1584293894/rtt_nwlfct.png',
                    link: 'https://github.com/jamievullo/Rubiks_Time_Tracker',
                    gitLink: 'https://github.com/jamievullo/Rubiks_Time_Tracker',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Weather Hack',
                    subTitle: 'JavaScript SPA, API Integration',
                    imgSrc: 'https://res.cloudinary.com/brickcodebanger/image/upload/v1584293856/wh_kmlfvm.png',
                    link: 'https://github.com/jamievullo/WeatherApp',
                    gitLink: 'https://github.com/jamievullo/WeatherApp',
                    selected: false
                },
                {
                    id: 5,
                    title: 'Screen Kingdom',
                    subTitle: 'React SPA, YouTube API Integration',
                    imgSrc: 'https://res.cloudinary.com/brickcodebanger/image/upload/v1584659440/ScreenKingdom_blojbb.png',
                    link: 'https://github.com/jamievullo/screenkingdom',
                    gitLink: 'https://github.com/jamievullo/screenkingdom',
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
