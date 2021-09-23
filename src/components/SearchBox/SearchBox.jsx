import "./SearchBox.scss";

const SearchBox = (props) => {
    const {searchInput} = props;

    return (
        <div className="search">
            <label htmlFor="search" className="search__label">Search</label>
            <input
                onInput={searchInput}
                id="search"
                className="search__input"
                placeholder="ENTER BEER NAME"
                type="text"
            />
        </div>
    );
};

export default SearchBox;
