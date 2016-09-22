 
class MessageCenter extends React.Component{
	render(){
		return(
			<span>
				<messagingContainer> 
					<claimsContainer>
						Claims
					</claimsContainer>
					<contactsContainer>
						Contacts 
					</contactsContainer>
					<messagesContainer>
						<Messages />
					</messagesContainer>
				</messagingContainer>
			</span>
		);
	}
}

class Messages extends React.Component{
	render(){
		return(
			<message>
				<text> this is a sample message. </text>
			</message>
		);
	}
}

ReactDOM.render(
	<MessageCenter />,
	document.getElementById('content')
);
