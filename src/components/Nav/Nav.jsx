import "./Nav.scss";
import SearchBox from "../SearchBox/SearchBox";
import Filter from "../Filter/Filter";
import Sort from "../Sort/Sort";
import Records from "../Records/Records";
import View from "../View/View";

const Nav = (props) => {
    const {searchInput, filterByAbvAbove6, filterByPhLowerThan4, sortByProductNameAZ, sortByAbvLowHigh, sortByPhLowHigh, showingCurrentBeers, setToggleView} = props;

    return (
        <nav className="nav">
            <div className="nav__searchFilterSort">
                <SearchBox searchInput={searchInput} />
                <Filter filterByAbvAbove6={filterByAbvAbove6} filterByPhLowerThan4={filterByPhLowerThan4}/>
                <Sort sortByProductNameAZ={sortByProductNameAZ} sortByAbvLowHigh={sortByAbvLowHigh} sortByPhLowHigh={sortByPhLowHigh} />
            </div>
            <div className="nav__recordsView">
                <Records showingCurrentBeers={showingCurrentBeers} />
                <View setToggleView={setToggleView} />
            </div>
        </nav>
    );
};

export default Nav;
