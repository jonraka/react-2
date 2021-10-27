import './App.css';
import React from 'react';

function SmallCard({ name, imageLink }) {
    return (
        <div className="smallCard">
            <p>{name}</p>
            <img src={imageLink} referrerPolicy="no-referrer" alt="cardimg"></img>
        </div>
    );
}

function BigCard({ city, imageLink, date, info }) {
    return (
        <div className="bigCard">
            <img src={imageLink} referrerPolicy="no-referrer" alt="cardimg" />
            <p>{city}</p>
            <p>{date}</p>
            <p>{info}</p>
            <button>Buy Tickets</button>
        </div>
    );
}

export default function App() {
    const title = 'The Band';
    const description = 'We Love Music';
    const paragraph = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa itaque
explicabo, fugiat officia ratione quia velit consequatur odit
exercitationem vel? Voluptatum autem ad adipisci commodi porro
reprehenderit eos qui nemo Lorem ipsum dolor sit amet consectetur
adipisicing elit. Ipsa itaque explicabo, fugiat officia ratione quia
velit consequatur odit exercitationem vel? Voluptatum autem ad
adipisci commodi porro reprehenderit eos qui nemo!`;

    const smallCards = [
        {
            name: 'Marley',
            image: 'https://i.imgur.com/dxlKLxQb.jpg',
        },
        {
            name: 'Bob',
            image: 'https://i.imgur.com/dMcckjkb.jpg',
        },
        {
            name: 'Cena',
            image: 'https://i.imgur.com/Bf89HcNb.jpg',
        },
    ];
    const bigCards = [
        {
            image: 'https://i.imgur.com/O7QbvcWb.jpg',
            city: 'New York',
            date: 'Fri 27 Nov 2016',
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Etullam molestiae fugiat pariatur dolorum reprehenderit',
        },
        {
            image: 'https://i.imgur.com/PfAHioEb.jpg',
            city: 'Los Angeles',
            date: 'Fri 27 Nov 2016',
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Etullam molestiae fugiat pariatur dolorum reprehenderit',
        },
        {
            image: 'https://i.imgur.com/8TZ8LzCb.jpg',
            city: 'Toronto',
            date: 'Fri 27 Nov 2016',
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Etullam molestiae fugiat pariatur dolorum reprehenderit',
        },
    ];

    return (
        <div>
            <div className="container">
                <div className="spacing">
                    <h1>{title}</h1>
                    <h3>{description}</h3>
                    <p>{paragraph}</p>

                    <div className="smallCardsList">
                        {smallCards.map((card, index) => (
                            <SmallCard key={index} imageLink={card.image} name={card.name} />
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-something py-100">
                <div className="container">
                    <h1>TOUR DATES</h1>
                    <div className="biggerCardsList">
                        {bigCards.map((card, index) => (
                            <BigCard key={index} imageLink={card.image} city={card.city} date={card.date} info={card.info} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
