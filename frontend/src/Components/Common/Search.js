import SearchIcon from "@material-ui/icons/Search";
import Input from "@material-ui/core/Input";

export function Search(prop) {
  return (
    <>
      <SearchIcon />
      <Input
        onChange={(e) => prop.onChange(e.target.value)}
        id="searchValue"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
    </>
  );
}
