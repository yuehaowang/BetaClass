import React, {Component} from 'react';
import UserProfile from './UserProfile';
import Contest1v1 from './Contest1v1';
import Prepare from './Prepare';
import ProblemPanel from './ProblemPanel';
import NotificationListView from './NotificationListView';
import NotificationContent from './NotificationContent';
import Home from './Home';
import DiscussionRoom from './DiscussionRoom';
import SchoolManagePanel from './SchoolManagePanel'


class Content extends Component {
	static PROBLEM_PANEL = 'problem_panel';
	static HOME = 'home';
	static USER_PROFILE = 'user_profile';
	static PREPARE = 'prepare';
	static CONTEST1V1 = 'contest1v1';
	static NOTIFICATION_LIST = 'notification_list';
	static NOTIFICATION_CONTENT = 'notification_content';
	static DISCUSSION_ROOM = 'discussion_room';
	static SCHOOL_MANAGE_PANEL = 'school_manage_panel';

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
		} else if (this.props.contentId === Content.NOTIFICATION_LIST) {
			ctt = <NotificationListView mainApp={this.props.mainApp} />
		} else if (this.props.contentId === Content.NOTIFICATION_CONTENT) {
			ctt = <NotificationContent mainApp={this.props.mainApp} />
		} else if (this.props.contentId === Content.DISCUSSION_ROOM) {
			ctt = <DiscussionRoom mainApp={this.props.mainApp} />
		} else if (this.props.contentId === Content.SCHOOL_MANAGE_PANEL) {
			ctt = <SchoolManagePanel />
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
