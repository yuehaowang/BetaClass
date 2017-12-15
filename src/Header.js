import React from 'react'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import AccountCircle from 'material-ui-icons/AccountCircle';


class Header extends React.Component {
	render() {
		return (
			<AppBar
				title="Betaclass"
				iconElementRight={
					<IconMenu
						iconButtonElement={
							<IconButton><AccountCircle /></IconButton>
						}
						targetOrigin={{horizontal: 'right', vertical: 'top'}}
						anchorOrigin={{horizontal: 'right', vertical: 'top'}}
					>
						<MenuItem primaryText="Profile" />
						<MenuItem primaryText="Messages" />
						<MenuItem primaryText="Sign out" />
					</IconMenu>

				}
			/>
		);
	}
}

export default Header;
