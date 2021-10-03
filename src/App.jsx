import {useEffect, useState} from "react";
import './App.scss';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";

const App = () => {
    const [beers, setBeers] = useState([]);
    const [toggleView, setToggleView] = useState("--state--list");

    // FETCH API
    const fetchBeers = () =>{
        fetch("https://api.punkapi.com/v2/beers")
            .then(response => response.json())
            .then(jsonResponse => setBeers(jsonResponse))
            .catch(err => console.log("error"))
    };

    // INITIAL STATE
    useEffect(() => {
        fetchBeers();
    }, []);

    // SEARCH
    const searchInput = (event) => {
        const sanitisedInput = event.target.value.toLowerCase();
        const searchBeers = beers.filter(beer => {
            const sanitisedBeerName = beer.name.toLowerCase();
            return sanitisedBeerName.includes(sanitisedInput);
        })
        setBeers(searchBeers);
    };

    // FILTER
    // Filter by ABV above 6%
    const filterByAbvAbove6 = () => {
        const beersFilteredByAbv = beers.filter(beer => beer.abv > 6);
        setBeers(beersFilteredByAbv);
    };

    // Filter by PH lower than 4
    const filterByPhLowerThan4 = () => {
        const beersFilteredByPh = beers.filter(beer => beer.ph < 4);
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
        const beersSortedByName = beers.filter(beer => beer).sort(sortAscendingAZ);
        setBeers(beersSortedByName);
    }

    // Sort by ABV (ascending order by key 'abv')
    const sortByAbvLowHigh = () => {
        const beersSortedByAbv = beers.filter(beer => beer).sort((a, b) => a.abv - b.abv);
        setBeers(beersSortedByAbv);
    };

    // Sort by PH (ascending order by key 'ph')
    const sortByPhLowHigh = () => {
        const beersSortedByPh = beers.filter(beer => beer).sort((a, b) => a.ph - b.ph);
        setBeers(beersSortedByPh);
    };

    // RECORDS
    // Showing X beers
    const showingCurrentBeers = beers.length;

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
                showingCurrentBeers={showingCurrentBeers}
                setToggleView={setToggleView}
            />
            <Main beersArr={beers} toggleView={toggleView} />
        </div>
    );
};

export default App;
