import "./Card.scss";

const Card = (props) => {
    const {beer} = props;

    return (
        <article className="card" key={beer.id}>
            <img className="card__image" src={beer.image_url} alt={beer.name} />
            <h3 className="card__name">{beer.name}</h3>
            <h4 className="card__tagline">{beer.tagline}</h4>
            <p className="card__text">{beer.first_brewed}</p>
            <p className="card__text">abv {beer.abv}% | ph{beer.ph}</p>
        </article>
    );
};

export default Card;
