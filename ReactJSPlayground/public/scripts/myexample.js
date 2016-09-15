
class FilterableProductTable extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			stock: []
		};
	}

	componentDidMount(){
		this.loadStockFromServer();
		setInterval(this.loadStockFromServer, this.props.pollInterval);
	}

	loadStockFromServer(){
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			cache: false,
			success: function (stock) {
				this.setState({stock: stock});
			}.bind(this),
			error: function (xhr, status, err){
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	}

	render(){
		return(
			<div>
				<box>
					<title> Products </title>
					<SearchBar />
					<underline />
					<ProductList products={this.state.stock} />
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
				{` Only show products in stock`}
			</form>
		);
	}
}

class ProductList extends React.Component{
	render(){
		var rows = [];
		var lastCategory = null;
		this.props.products.forEach(function(product){
			if (product.category !== lastCategory)
				rows.push(<CategoryDivider category={product.category} />);
			lastCategory = product.category;
			rows.push(<ProductRow product={product} />);
		});
		return(
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Price</th>
						<th>Stocked</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</table>
		);
	}
}

class CategoryDivider extends React.Component{
	render(){
		return(
			<th colSpan="2"> {this.props.category} </th>
		);
	}
}

class ProductRow extends React.Component{
	render(){
		var color;
		var stock;
		if (this.props.product.stocked) {
			stock = 'yes'; color = 'green';
		} else { 
			stock = 'no'; color = 'red';
		}
		return(
			<tr>
				<td> {this.props.product.name} </td>
				<td> {this.props.product.price} </td>
				<td style={{color: color}}> {stock} </td>
			</tr>
		);
	}
}

ReactDOM.render(
	<FilterableProductTable url="api/stock" pollInterval={2000}/>,
	document.getElementById('content')
);