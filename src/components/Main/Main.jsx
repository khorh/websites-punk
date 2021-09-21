import "./Main.scss";
import Card from "../Card/Card";

const Main = (props) => {
    const {beersArr} = props;

    const beerCard = beersArr.map(beer => <Card beer={beer} />);

    return (
        <main className="main">
            <section className="card__list">
                {beerCard}
            </section>
        </main>
    );
};

export default Main;
