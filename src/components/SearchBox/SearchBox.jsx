import "./SearchBox.scss";

const SearchBox = (props) => {
    const {searchInput} = props;

    return (
        <div className="search">
            <p className="search__label">Search</p>
            <input
                onInput={searchInput}
                className="search__input"
                placeholder="START TYPING NAME TO SEARCH"
                type="text"
            />
        </div>
    );
};

export default SearchBox;
