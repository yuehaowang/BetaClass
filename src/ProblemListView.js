import React from 'react';
import {List, ListItem} from 'material-ui/List';
import MdIconStarBorder from 'material-ui/svg-icons/toggle/star-border';
import MdIconStar from 'material-ui/svg-icons/toggle/star';
import MdIconSupervisorAccount from 'material-ui/svg-icons/action/supervisor-account';
import MdIconBook from 'material-ui/svg-icons/action/book';
import MdIconBookMark from 'material-ui/svg-icons/action/bookmark';
import MdIconPermIdentity from 'material-ui/svg-icons/action/perm-identity'
import {yellow500} from 'material-ui/styles/colors';


class ProblemListView extends React.Component {
	static PROBLEM_TYPE_SIGN = 'problem_type_sign';
	static PROBLEM_TYPE_REVIEW = 'problem_type_review';
	static PROBLEM_TYPE_CONTEST_5V5 = 'problem_type_contest_5v5';
	static PROBLEM_TYPE_CONTEST_1V1 = 'problem_type_contest_1v1';

	render() {
		var res = [];

		for (let i = 0, l = this.props.problemList.length; i < l; i++) {
			let item = this.props.problemList[i];
			let primaryText, secondaryText, leftIcon, rightAvatar;

			if (item.type === ProblemListView.PROBLEM_TYPE_SIGN) {
				primaryText = '打卡题';
				secondaryText = item.title;
				leftIcon = <MdIconBook />;
				rightAvatar = <div><MdIconStar  color={yellow500}/><MdIconStarBorder /><MdIconStarBorder /></div>;
			} else if (item.type === ProblemListView.PROBLEM_TYPE_REVIEW) {
				primaryText = '复习题';
				secondaryText = item.title;
				leftIcon = <MdIconBookMark />;
				rightAvatar = <div><MdIconStar  color={yellow500}/><MdIconStarBorder /><MdIconStarBorder /></div>;				
			} else if (item.type === ProblemListView.PROBLEM_TYPE_CONTEST_1V1) {
				primaryText = '1v1 单挑赛';
				secondaryText = item.date;
				leftIcon = <MdIconSupervisorAccount />;
				rightAvatar = <div></div>;
			} else if (item.type === ProblemListView.PROBLEM_TYPE_CONTEST_1V1) {
				primaryText = '5v5 团队赛';
				secondaryText = item.date;
				leftIcon = <MdIconPermIdentity />;
				rightAvatar = <div></div>;
			}

			if (typeof primaryText !== 'undefined' && typeof secondaryText !== 'undefined' && typeof leftIcon !== 'undefined' && typeof rightAvatar !== 'undefined') {
				res.push((
					<ListItem
						key={i}
						primaryText = {primaryText}
						secondaryText = {secondaryText}
						leftIcon = {leftIcon}
						rightAvatar = {rightAvatar}
						onClick = {() => {
							this.props.mainApp.selectQuestion(item);
						}}
					/>
				));
			}
		}

		return (
			<List>{res}</List>
		);
	}
}

export default ProblemListView;
