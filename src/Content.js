import React, {Component} from 'react';
import UserProfile from './UserProfile'
import Contest1v1 from './Contest1v1'
import ProblemListView from './ProblemListView'
import Prepare from './Prepare'


class Content extends Component {
	static INCLASS = 'in-class';
	static OUTCLASS = 'out-class';
	static USER_PROFILE = 'user_profile';
	static PREPARE = 'prepare';
	static CONTEST1V1 = 'contest1v1';

	render() {
		var ctt;

		if (this.props.contentId === Content.INCLASS) {
			ctt = (
					<ProblemListView
						problemList={[
							{
								type: ProblemListView.PROBLEM_TYPE_SIGN,
								title: '签到题'
							}
						]}
						mainApp = {this.props.mainApp}
					/>
				);
		} else if (this.props.contentId === Content.OUTCLASS) {
			ctt = (
					<ProblemListView
						problemList={[
							{
								type: ProblemListView.PROBLEM_TYPE_REVIEW,
								title: '复习题'
							}
						]}
						mainApp = {this.props.mainApp}
					/>
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
