import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Header from './Header';
import Bottom from './Bottom';
import Content from './Content';
import myTheme from './myTheme';


class App extends React.Component {
	constructor() {
		super();

		this.state = {
			bottomIndex: 0,
			contentId: Content.HOME,
			contentParams: {}
		};

		this.history = [this.state];
	}

	selectBottom(index) {
		let contentId, contentParams = {};

		if (index === 0) {
			contentId = Content.PROBLEM_PANEL;
			contentParams = {
				selectedTag: 0
			};
		} else if (index === 1) {
			contentId = Content.HOME;
		} else if (index === 2) {
			contentId = Content.USER_PROFILE;
			// contentId = Content.SCHOOL_MANAGE_PANEL;
		}

		this.setState({contentId: contentId, contentParams: contentParams});
		this.history.push(this.state);
	}

	back() {
		if (this.state.length <= 0) {
			return;
		}

		this.setState(this.history.pop());
	}

	selectNotificationList() {
		this.setState({contentId: Content.NOTIFICATION_LIST})
		this.history.push(this.state);
	}

	selectQuestion(d) {
		this.setState({contentId: Content.PREPARE, contentParams: {questionData: d}});
		this.history.push(this.state);
	}

	enterChallenge() {
		this.setState({contentId: Content.CONTEST1V1});
		this.history.push(this.state);
	}

	enterNotification() {
		this.setState({contentId: Content.NOTIFICATION_CONTENT});
	}

	enterDiscussionRoom() {
		this.setState({contentId: Content.DISCUSSION_ROOM});
	}

	render() {
		return (
			<MuiThemeProvider muiTheme={getMuiTheme(myTheme)}>
				<div>
					<Header mainApp={this} />
					<div style={{maxHeight: window.innerHeight - 120, overflow: 'auto'}}>
						<Content
							contentId={this.state.contentId}
							contentParams={this.state.contentParams}
							mainApp={this}
						/>
					</div>
					<Bottom mainApp={this} />
				</div>
			</MuiThemeProvider>
		);
	}
}

export default App;
