import React from 'react'
import AppBar from 'material-ui/AppBar';
import AccountCircle from 'material-ui-icons/AccountCircle';
import FontIcon from 'material-ui/FontIcon';


class Header extends React.Component {
	render() {
		return (
			<AppBar
				title="Betaclass"
				iconClassNameRight="muidocs-icon-action-home"
			/>
		);
	}
}

export default Header;
