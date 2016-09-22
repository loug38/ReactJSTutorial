 
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
						Messages 
					</messagesContainer>
				</messagingContainer>
			</span>
		);
	}
}

ReactDOM.render(
	<MessageCenter />,
	document.getElementById('content')
);
