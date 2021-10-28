import React from 'react';
import BandInfoBlock from './components/BandInfoBlock';
import TourDatesBlock from './components/TourDatesBlock';
import TagsBlock from './components/TagsBlock';
import NavBarBlock from './components/NavBarBlock';

const title = 'The Band';
const description = 'We Love Music';
const paragraph = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa itaque
explicabo, fugiat officia ratione quia velit consequatur odit
exercitationem vel? Voluptatum autem ad adipisci commodi porro
reprehenderit eos qui nemo Lorem ipsum dolor sit amet consectetur
adipisicing elit. Ipsa itaque explicabo, fugiat officia ratione quia
velit consequatur odit exercitationem vel? Voluptatum autem ad
adipisci commodi porro reprehenderit eos qui nemo!`;

const bandData = [
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
const toursData = [
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

const links = [
    {
        id: 1,
        href: 'index.html',
        text: 'Home'
    },
    {
        id: 2,
        href: 'about.html',
        text: 'About'
    },
    {
        id: 3,
        href: 'contact.html',
        text: 'Contact'
    },
];

export default function App() {
    return (
        <main>
            <NavBarBlock links={links}/>
            <BandInfoBlock title={title} description={description} paragraph={paragraph} bandData={bandData} />
            <TourDatesBlock toursData={toursData} />
            <TagsBlock selectedTags={['News', 'Clothing']} />
        </main>
    );
}
