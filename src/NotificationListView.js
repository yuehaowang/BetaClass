import React from 'react';
import {List, ListItem} from 'material-ui/List';
import MdIconMailOutline from 'material-ui/svg-icons/communication/mail-outline';


class NotificationListView extends React.Component {
	select() {
		this.props.mainApp.enterNotification();
	}

	render() {
		return (
			<List>
				<ListItem onClick={() => {this.select()}} primaryText={<b>今日学习汇报</b>} leftIcon={<MdIconMailOutline />} />
				<ListItem primaryText="夏小寅同学关注了你" leftIcon={<MdIconMailOutline />} />
			</List>
		);
	}
}

export default NotificationListView;