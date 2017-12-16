import React, {Component} from 'react';
import UserProfile from './UserProfile';
import Contest1v1 from './Contest1v1';
import Prepare from './Prepare';
import ProblemPanel from './ProblemPanel';
import Home from './Home'


class Content extends Component {
	static PROBLEM_PANEL = 'problem_panel';
	static HOME = 'home';
	static USER_PROFILE = 'user_profile';
	static PREPARE = 'prepare';
	static CONTEST1V1 = 'contest1v1';

	render() {
		var ctt;

		if (this.props.contentId === Content.PROBLEM_PANEL) {
			ctt = (
					<ProblemPanel mainApp={this.props.mainApp} />
				);
		} else if (this.props.contentId === Content.HOME) {
			ctt = (
					<Home mainApp={this.props.mainApp} />
				);
		} else if (this.props.contentId === Content.USER_PROFILE) {
			ctt = <UserProfile />;
		} else if (this.props.contentId === Content.PREPARE) {
			ctt = (<Prepare mainApp={this.props.mainApp} />);
		} else if (this.props.contentId === Content.CONTEST1V1) {
			ctt = <Contest1v1 />;
		} else {
			return;
		}

		return (
			<div>
				{ctt}
			</div>    
		);
	}
}

export default Content;
