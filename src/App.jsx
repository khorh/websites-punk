import {useEffect, useState} from "react";
import './App.scss';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import drinks from "./data/beers";
import Nav from "./components/Nav/Nav";

const App = () => {
    const [beers, setBeers] = useState([]);

    useEffect(() => {
        setBeers(drinks)
    }, []);

    // Search
    const searchInput = (event) => {
        const sanitisedInput = event.target.value.toLowerCase();
        const searchBeers = drinks.filter(beer => {
            const sanitisedBeerName = beer.name.toLowerCase();
            return sanitisedBeerName.includes(sanitisedInput);
        })
        setBeers(searchBeers);
    };

    // FILTER
    // Filter by ABV above 6%
    const filterByAbvAbove6 = () => {
        const beersFilteredByAbv = drinks.filter(beer => beer.abv > 6);
        setBeers(beersFilteredByAbv);
    };

    // Filter by PH lower than 4
    const filterByPhLowerThan4 = () => {
        const beersFilteredByPh = drinks.filter(beer => beer.ph < 4);
        setBeers(beersFilteredByPh);
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
        setBeers(beersSortedByName);
    }

    // Sort by ABV (ascending order by key 'abv')
    const sortByAbvLowHigh = () => {
        const beersSortedByAbv = drinks.filter(beer => beer).sort((a, b) => a.abv - b.abv);
        setBeers(beersSortedByAbv);
    };

    // Sort by PH (ascending order by key 'ph')
    const sortByPhLowHigh = () => {
        const beersSortedByPh = drinks.filter(beer => beer).sort((a, b) => a.ph - b.ph);
        setBeers(beersSortedByPh);
    };

    return (
        <div className="App">
            <Header />
            <Nav
                searchInput={searchInput}
                filterByAbvAbove6={filterByAbvAbove6}
                filterByPhLowerThan4={filterByPhLowerThan4}
                sortByProductNameAZ={sortByProductNameAZ}
                sortByAbvLowHigh={sortByAbvLowHigh}
                sortByPhLowHigh={sortByPhLowHigh}
            />
            <Main beersArr={beers} />
        </div>
    );
};

export default App;
