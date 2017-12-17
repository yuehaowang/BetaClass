import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MdIconNotifications from 'material-ui/svg-icons/social/notifications';
import MdIconMenu from 'material-ui/svg-icons/navigation/menu';


class Header extends React.Component {
	render() {
		return (
			<AppBar
				title='Betaclass'
				iconElementLeft={
					<IconMenu
						iconButtonElement={
							<IconButton><MdIconMenu color='white' /></IconButton>
						}
						targetOrigin={{horizontal: 'right', vertical: 'top'}}
						anchorOrigin={{horizontal: 'right', vertical: 'top'}}
					>
						<MenuItem primaryText='设置' />
						<MenuItem primaryText='关于' />
						<MenuItem primaryText='常见问题' />
					</IconMenu>

				}
				iconElementRight={
					<IconMenu
						iconButtonElement={
							<IconButton><MdIconNotifications color='white' /></IconButton>
						}
						targetOrigin={{horizontal: 'right', vertical: 'top'}}
						anchorOrigin={{horizontal: 'right', vertical: 'top'}}
					>
						<MenuItem primaryText='私信' />
						<MenuItem onClick={() => this.props.mainApp.selectNotificationList()} primaryText='通知' />
					</IconMenu>
				}
			/>
		);
	}
}

export default Header;
