
var CommentBox = React.createClass({
	render: function(){
		return(
			<div className="commentBox">
				<h1> Comments </h1>
				<CommentList />
				<CommentForm />
				This is in comment box
			</div>
		);
	}
});

var CommentList = React.createClass({
	render: function(){
		return(
			<div className="commentList">
				This is in comment list 
			</div>
		);
	}
});

var CommentForm = React.createClass({
	render: function(){
		return(
			<div className="commentForm">
				This is a comment form
			</div>
		);
	}
});

ReactDOM.render(
	<CommentBox />,
	document.getElementById('content')
);