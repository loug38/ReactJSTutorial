
class FilterableProductTable extends React.Component {
	render(){
		return(
			<div>
				<box>
					<title> Products </title>
					<SearchBar />
					<ProductList products={this.props.products} />
				</box>
			</div>
		);
	}
}

class SearchBar extends React.Component{
	render(){
		return(
			<form>
				<searchBar>
					<input type="text" placeholder="Search" />
				</searchBar>
				<input type="checkbox" /> 
				Only show products in stock
			</form>
		);
	}
}

class ProductList extends React.Component{
	render(){
		var rows = [];
		var lastCategory = null;
		this.props.products.forEach(function(product){
			rows.push(<ProductRow product={product} />); 
		});
		return(
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</table>
		);
	}
}

class ProductRow extends React.Component{
	render(){
		return(
			<tr>
				<td> {this.props.product.name} </td>
				<td> {this.props.product.price} </td>
				<td> {this.props.product.stocked} </td>
			</tr>
		);
	}
}

var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];


ReactDOM.render(
	<FilterableProductTable products={PRODUCTS} />,
	document.getElementById('content')
);
