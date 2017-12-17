import React, {Component} from 'react';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import MdIconLibraryBooks from 'material-ui/svg-icons/av/library-books';
import MdIconHome from 'material-ui/svg-icons/action/home';
import MdIconAccountCircle from 'material-ui/svg-icons/action/account-circle';
import './css/Bottom.css';


class Bottom extends Component {
	constructor() {
		super();

		this.state = {
			selectedIndex: 1
		};
	}

	select(i) {
		if (this.state.selectedIndex === i) {
			return;
		}

		this.setState({selectedIndex: i});
		this.props.mainApp.selectBottom(i);
	}

	render() {
		return (
			<Paper zDepth={1} className='Bottom'>
				<BottomNavigation selectedIndex={this.state.selectedIndex}>
					<BottomNavigationItem
						icon={<MdIconLibraryBooks />}
						onClick={() => this.select(0)}
					/>
					<BottomNavigationItem
						icon={<MdIconHome />}
						onClick={() => this.select(1)}
					/>
					<BottomNavigationItem
						icon={<MdIconAccountCircle />}
						onClick={() => this.select(2)}
					/>
				</BottomNavigation>
			</Paper>
		);
	}
}

export default Bottom;
