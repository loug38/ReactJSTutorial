
var CommentBox = React.createClass({
	render: function(){
		return(
			<div className="commentBox">
				This is a comment
			</div>
		);
	}
});

ReactDOM.render(
	<CommentBox />,
	document.getElementById('content')
);