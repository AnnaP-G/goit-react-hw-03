import css from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => {
  return (
    <div className={css.searchBox}>
      <h2 className={css.searchBoxTitle}>Find contacts by name</h2>
      <input
        className={css.searchBoxInput}
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBox;
