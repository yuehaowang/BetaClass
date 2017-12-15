import React, {Component} from 'react';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import MdIconClass from 'material-ui/svg-icons/action/class';
import MdIconAccessibility from 'material-ui/svg-icons/action/accessibility';
import MdIconAccountCircle from 'material-ui/svg-icons/action/account-circle';
import './css/Bottom.css'


class Bottom extends Component {
	state = {
		selectedIndex: 0,
	};

	select = (index) => this.setState({selectedIndex: index});

	render() {
		return (
			<Paper zDepth={1} className='Bottom'>
				<BottomNavigation selectedIndex={this.state.selectedIndex}>
					<BottomNavigationItem
						label="课内"
						icon={<MdIconClass />}
						onClick={() => this.select(0)}
					/>
					<BottomNavigationItem
						label="课外"
						icon={<MdIconAccessibility />}
						onClick={() => this.select(1)}
					/>
					<BottomNavigationItem
						label="我"
						icon={<MdIconAccountCircle />}
						onClick={() => this.select(2)}
					/>
				</BottomNavigation>
			</Paper>
		);
	}
}

export default Bottom;
