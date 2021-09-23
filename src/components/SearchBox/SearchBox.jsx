import "./SearchBox.scss";
import {MdSearch} from "react-icons/md";

const SearchBox = (props) => {
    const {searchInput} = props;

    return (
        <div className="search">
            <label htmlFor="search" className="search__label">Search</label>
            <div>
                <input
                    onInput={searchInput}
                    id="search"
                    className="search__input"
                    placeholder="ENTER BEER NAME"
                    type="text"
                />
                <button><MdSearch /></button>
            </div>
        </div>
    );
};

export default SearchBox;
