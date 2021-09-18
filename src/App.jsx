import './App.scss';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";

const App = () => {
    const getBeers = () => (
        fetch("https://api.punkapi.com/v2/beers")
            .then(response => response.json())
            .then(beerData => beerData)
            .catch((err) => console.log(err))
    );

    return (
        <div className="App">
            <Header />
            <Nav />
            <Main />
        </div>
    );
};

export default App;
