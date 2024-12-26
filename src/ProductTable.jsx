

export default function ProductTable({products, searchText, filterInStock}) {

  const rows = [];

  products.forEach((product) => {
    if (product.name.toLowerCase().indexOf(searchText.toLowerCase()) === -1) return;
    if (filterInStock && !product.stocked) return;

    rows.push(<tr key={product.name}><td>{product.name}</td><td>{product.price}</td><td>{product.stocked ? '✓' : ''}</td></tr>);
  });

  return (
    <table>
      <thead><tr><th>Name</th><th>Price</th><th>In Stock</th></tr></thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  );

}