import {useState} from 'react';
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'
import './App.css'

function App() {

  const products = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
  ];

  const [searchText, setSearchText] = useState('');
  const [filterInStock, setFilterInStock] = useState(false);

  return (
    <>
      <SearchBar searchText={searchText} filterInStock={filterInStock} onSearchTextChange={setSearchText} onFilterInStockChange={setFilterInStock} />
      <ProductTable products={products} searchText={searchText} filterInStock={filterInStock} />
    </>
  );
}

export default App
