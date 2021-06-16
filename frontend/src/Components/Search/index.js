import SearchIcon from "@material-ui/icons/Search";
import { useTranslation  } from 'react-i18next';
import './index.scss';

 const Search = (prop) => {

     const { t } = useTranslation();

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
                    placeholder={t("search")}
                    aria-label="Search"
                />
            </div>
        </div>
    );
}
export default Search;
