import "./Filter.scss";
import {MdFilterList} from "react-icons/md";

const Filter = (props) => {
    const {filterByAbvAbove6, filterByPhLowerThan4} = props;

    return (
        <div>
            <p className="filter__label">Filter <MdFilterList /></p>
            <div>
                <input onClick={filterByAbvAbove6} id="abv" name="filterSortOption" type="radio" />
                <label htmlFor="abv">ABV above 6%</label>
            </div>
            <div>
                <input onClick={filterByPhLowerThan4} id="ph" name="filterSortOption" type="radio" />
                <label htmlFor="ph">PH lower than 4</label>
            </div>
        </div>
    );
};

export default Filter;
