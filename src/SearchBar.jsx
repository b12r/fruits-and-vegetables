

export default function SearchBar({searchText, filterInStock, onSearchTextChange, onFilterInStockChange}) {

  return (
    <form>
      <div>
        <input type="text" placeholder="Search..." value={searchText} onChange={(event) => onSearchTextChange(event.target.value)} />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={filterInStock}
            onChange={(event) => {
              console.log(event.target.value);
              onFilterInStockChange(event.target.checked)
            }}
          /> Only show products in stock
        </label>
      </div>
    </form>
  );

}
