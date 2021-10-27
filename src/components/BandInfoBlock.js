function BandImages({ name, imageLink }) {
    return (
        <div className="smallCard">
            <p>{name}</p>
            <img src={imageLink} referrerPolicy="no-referrer" alt="cardimg"></img>
        </div>
    );
}

export default function BandInfoBlock({ title, description, paragraph, bandData }) {
    return (
        <div className="container">
            <div className="spacing container">
                <h1>{title}</h1>
                <h3>{description}</h3>
                <p>{paragraph}</p>

                <div className="smallCardsList">
                    {bandData.map((card, index) => (
                        <BandImages key={index} imageLink={card.image} name={card.name} />
                    ))}
                </div>
            </div>
        </div>
    );
}
