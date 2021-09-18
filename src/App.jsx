import './App.scss';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";

const App = () => {
    return (
        <div className="App">
            <Header />
            <Nav />
            <Main />
        </div>
    );
};

export default App;
