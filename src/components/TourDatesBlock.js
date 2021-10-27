function TourCard({ city, imageLink, date, info }) {
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

export default function TourDatesBlock({ toursData }) {
    return (
        <div className="bg-something py-100">
            <div className="container">
                <h1>TOUR DATES</h1>
                <div className="biggerCardsList">
                    {toursData.map((card, index) => (
                        <TourCard key={index} imageLink={card.image} city={card.city} date={card.date} info={card.info} />
                    ))}
                </div>
            </div>
        </div>
    );
}
