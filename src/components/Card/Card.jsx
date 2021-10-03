import "./Card.scss";

const Card = (props) => {
    const {beer, toggleView} = props;

    return (
        <article className={`card card${toggleView}`} key={beer.id}>
            <div className="card__image">
                <img src={beer.image_url} alt={beer.name} />
            </div>
            <div className={`card__nameTagline${toggleView}`}>
                <h3 className="card__name">{beer.name}</h3>
                <h4 className="card__tagline">{beer.tagline}</h4>
            </div>
            <div className={`card__addText${toggleView}`}>
                <p className="card__text">{beer.first_brewed}</p>
                <p className="card__text">abv {beer.abv}% | ph{beer.ph}</p>
            </div>
        </article>
    );
};

export default Card;
