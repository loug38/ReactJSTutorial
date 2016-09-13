
var CommentBox = React.createClass({
	// Initialize states
	getInitialState: function() {
		return { data: [] };
	},

	// Pulls the data from json file, and checks for errors
	loadCommentsFromServer: function() {
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({data: data});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	},

	// Calls for getting the data pulled in from json once the component
	// is ready to mount.
	componentDidMount: function() {
		this.loadCommentsFromServer();
		setInterval(this.loadCommentsFromServer, this.props.pollInterval);
	},

	// Simply the interface
	render: function(){
		return(
			<div className="commentBox">
				<h1> Comments </h1>
				<CommentList data={this.state.data} />
				<CommentForm />
			</div>
		);
	}
});

// The actual "structure" of the comments. Name + Comment.
var CommentList = React.createClass({
	render: function(){
		var commentNodes = this.props.data.map(function(comment) {
			return(
				<Comment author={comment.author} key={comment.id}>
					{comment.text}
				</Comment>
			);
		});

		return(
			<div className="commentList">
				{commentNodes}
			</div>
		);
	}
});

// The box to fill in to post a comment.
var CommentForm = React.createClass({
	getInitialState: function() {
		return {
			author: '',
			text: '',
		}
	},

	// These are automatically called from render if there's a change
	// in the input, and the state gets automatically updated! Neat!
	handleAuthorChange: function(e) {
		this.setState({author: e.target.value});
	},

	handleTextChnage: function(e) {
		this.setState({text: e.target.value});
	},

	render: function(){
		return(
			<form className="commentForm">
				<input 	type="text" 
								placeholder="Your name" 
								value={this.state.author}
								onChange={this.handleAuthorChange}
				/>
				<input 	type="text" 
								placeholder="Your comment here..."
								value={this.state.author}
								onChange={this.handleTextChnage}
				/>
				<input type="submit" value="Post" />
			</form>
		);
	}
});

// The body of the comment. Prints a Name in h2 and the comment passed
// this.props.children is:
// <Comment author='Fox Moulder', id='123456'> {THIS_IS_THE_CHILDREN} </Comment>
var Comment = React.createClass({
	render: function(){
		return(
			<div className="comment">
				<h2 className="commentAuthor">
					{this.props.author}
				</h2>
				<h5>
					{this.props.children}
				</h5>
			</div>
		);
	}
});

// Called on initial render. This is kinda like the constructor.
ReactDOM.render(
	<CommentBox url="api/comments" pollInterval={2000} />,
	document.getElementById('content')
);