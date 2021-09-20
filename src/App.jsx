import {useEffect, useState} from "react";
import './App.scss';
import Header from "./components/Header/Header";
import drinks from "./data/beers";

const App = () => {
    const [beers, setBeers] = useState([]);

    useEffect(() => {
        setBeers(drinks)
    }, []);

    // Search
    const searchInput = (event) => {
        const sanitisedInput = event.target.value.toLowerCase();
        console.log(sanitisedInput);
        const searchBeers = drinks.filter(beer => {
            const sanitisedBeerName = beer.name.toLowerCase();
            return sanitisedBeerName.includes(sanitisedInput);
        })
        setBeers(searchBeers);
    };

    // SORT
    // Sort by Product Name (ascending order by key 'name')
    const sortAscendingAZ = (a, b) => {
        if (a.name < b.name) {
            return -1;
        } else if (a.name > b.name) {
            return 1;
        } else {
            return 0;
        }
    };

    const sortByProductNameAZ = () => {
        const beersSortedByName = drinks.filter(beer => beer).sort(sortAscendingAZ);
        console.log(beersSortedByName);
        setBeers(beersSortedByName);
    }

    // Sort by ABV (ascending order by key 'abv')
    const sortByAbvLowHigh = () => {
        const beersSortedByAbv = drinks.filter(beer => beer).sort((a, b) => a.abv - b.abv);
        console.log(beersSortedByAbv);
        setBeers(beersSortedByAbv);
    };

    // Sort by PH (ascending order by key 'ph')
    const sortByPhLowHigh = () => {
        const beersSortedByPh = drinks.filter(beer => beer).sort((a, b) => a.ph - b.ph);
        console.log(beersSortedByPh);
        setBeers(beersSortedByPh);
    };

    // FILTER
    // Filter by ABV above 6%
    const filterByAbvAbove6 = () => {
        const beersFilteredByAbv = drinks.filter(beer => beer.abv > 6);
        console.log(beersFilteredByAbv);
        setBeers(beersFilteredByAbv);
    };

    // Filter by PH lower than 4
    const filterByPhLowerThan4 = () => {
        const beersFilteredByPh = drinks.filter(beer => beer.ph < 4);
        console.log(beersFilteredByPh);
        setBeers(beersFilteredByPh);
    };

    // Output
    const beerCard = beers.map(beer => (
        <article className="card" key={beer.id}>

                <img className="card__image" src={beer.image_url} alt={beer.name} />
                <h3 className="card__name">{beer.name}</h3>

            <h4 className="card__tagline">{beer.tagline}</h4>

                <p className="card__text">{beer.first_brewed}</p>
                <p className="card__text">abv {beer.abv}% | ph{beer.ph}</p>

        </article>
    ));

    return (
        <div className="App">
            <Header />
            <nav className="nav">
                <div className="nav__search">
                    <p className="nav__search-label">Search</p>
                    <input
                        onInput={searchInput}
                        className="nav__search-input"
                        placeholder="START TYPING NAME TO SEARCH"
                        type="text"
                    />
                </div>
                <div>
                    <p className="nav__filter-label">Filter</p>
                    <div>
                        <input onClick={filterByAbvAbove6} id="abv" name="filterOption" type="radio" />
                        <label htmlFor="abv">ABV above 6%</label>
                    </div>
                    <div>
                        <input onClick={filterByPhLowerThan4} id="ph" name="filterOption" type="radio"/>
                        <label htmlFor="ph">PH lower than 4</label>
                    </div>
                </div>
                <div className="nav-sort">
                    <p className="nav__sort-label">Sort</p>
                    <div>
                        <input onClick={sortByProductNameAZ} id="productName" name="sortOption"  type="radio" />
                        <label htmlFor="productName">Product Name (A-Z)</label>
                    </div>
                    <div>
                        <input onClick={sortByAbvLowHigh} id="abv" name="sortOption"  type="radio" />
                        <label htmlFor="abv">ABV (LOW TO HIGH)</label>
                    </div>
                    <div>
                        <input onClick={sortByPhLowHigh} id="whatsNew" name="sortOption" type="radio" />
                        <label htmlFor="whatsNew">PH (LOW TO HIGH)</label>
                    </div>
                </div>
            </nav>
            <main className="main">
                <section className="card__list">
                    {beerCard}
                </section>
            </main>
        </div>
    );
};

export default App;
