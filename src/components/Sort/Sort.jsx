import "./Sort.scss";

const Sort = (props) => {
    const {sortByProductNameAZ, sortByAbvLowHigh, sortByPhLowHigh} = props;

    return (
        <div>
            <p className="sort__label">Sort</p>
            <div>
                <input onClick={sortByProductNameAZ} id="productName" name="filterSortOption"  type="radio" />
                <label htmlFor="productName">Product Name - A-Z</label>
            </div>
            <div>
                <input onClick={sortByAbvLowHigh} id="abv" name="filterSortOption"  type="radio" />
                <label htmlFor="abv">ABV - LOW TO HIGH</label>
            </div>
            <div>
                <input onClick={sortByPhLowHigh} id="whatsNew" name="filterSortOption" type="radio" />
                <label htmlFor="whatsNew">PH - LOW TO HIGH</label>
            </div>
        </div>
    );
};

export default Sort;
