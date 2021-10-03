import "./Main.scss";
import Card from "../Card/Card";

const Main = (props) => {
    const {beersArr, toggleView} = props;

    const beerCard = beersArr.map(beer => <Card beer={beer} toggleView={toggleView} />);

    return (
        <main className={`main main${toggleView}`}>
            {beerCard}
        </main>
    );
};

export default Main;
