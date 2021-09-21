import "./Nav.scss";
import SearchBox from "../SearchBox/SearchBox";
import Filter from "../Filter/Filter";
import Sort from "../Sort/Sort";

const Nav = (props) => {
    const {searchInput, filterByAbvAbove6, filterByPhLowerThan4, sortByProductNameAZ, sortByAbvLowHigh, sortByPhLowHigh} = props;

    return (
        <nav className="nav">
            <SearchBox searchInput={searchInput} />
            <Filter filterByAbvAbove6={filterByAbvAbove6} filterByPhLowerThan4={filterByPhLowerThan4}/>
            <Sort sortByProductNameAZ={sortByProductNameAZ} sortByAbvLowHigh={sortByAbvLowHigh} sortByPhLowHigh={sortByPhLowHigh} />
        </nav>
    );
};

export default Nav;
