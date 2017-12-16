import React, {Component} from 'react';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import MdIconClass from 'material-ui/svg-icons/action/class';
import MdIconAccessibility from 'material-ui/svg-icons/action/accessibility';
import MdIconAccountCircle from 'material-ui/svg-icons/action/account-circle';
import './css/Bottom.css'


class Bottom extends Component {
	render() {
		return (
			<Paper zDepth={1} className='Bottom'>
				<BottomNavigation selectedIndex={this.props.bottomIndex}>
					<BottomNavigationItem
						label="课内"
						icon={<MdIconClass />}
						onClick={() => this.props.select(0)}
					/>
					<BottomNavigationItem
						label="课外"
						icon={<MdIconAccessibility />}
						onClick={() => this.props.select(1)}
					/>
					<BottomNavigationItem
						label="我"
						icon={<MdIconAccountCircle />}
						onClick={() => this.props.select(2)}
					/>
				</BottomNavigation>
			</Paper>
		);
	}
}

export default Bottom;
