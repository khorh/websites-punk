import "./_card.scss";
import beers from "../../data/beers";

const Card = () => {
    const beerCard = beers.map(beer => (
        <article className="card">
            <div>
                <img className="card__image" src={beer.image_url} alt={beer.name} />
                <h3 className="card__name">{beer.name.toUpperCase()}</h3>
            </div>
            <h4 className="card__tagline">{beer.tagline}</h4>
            <div>
                <p className="card__text">{beer.first_brewed}</p>
                <p className="card__text">{beer.abv}% | ph{beer.ph}</p>
            </div>
        </article>
    ));

    return (
        <>
            {beerCard}
        </>
    );
};

export default Card;
