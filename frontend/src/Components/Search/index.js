import SearchIcon from "@material-ui/icons/Search";
import './index.scss';

 const Search = (prop) => {

    return (
        <div className="search-component">
            <div className="search-icon-container">
                <SearchIcon />
            </div>
            <div className="search-component-container">
                <input
                    onChange={(e) => prop.onChange(e.target.value)}
                    id="searchValue"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                />
            </div>
        </div>
    );
}
export default Search;
