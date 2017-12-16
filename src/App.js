import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './Header'
import Bottom from './Bottom'
import Content from './Content'


class App extends React.Component {
	constructor() {
		super();

		this.state = {
			bottomIndex: 0,
			contentId: Content.INCLASS,
			contentParam: {}
		};

		this.history = [];
	}

	selectBottom(index) {
		var contentId;

		if (index === 0) {
			contentId = Content.INCLASS;
		} else if (index === 1) {
			contentId = Content.OUTCLASS;
		} else if (index === 2) {
			contentId = Content.USER_PROFILE;
		}

		this.setState({contentId: contentId, contentParam: {}});
		this.history.push(this.state);
	}

	back() {
		if (this.state.length <= 0) {
			return;
		}

		this.setState(this.history.pop());
	}

	selectQuestion(id, d) {
		this.setState({contentId: Content.PREPARE, contentParam: {qid: id, data: d}});
		this.history.push(this.state);
	}

	enterChallenge() {
		this.setState({contentId: Content.CONTEST1V1});
		this.history.push(this.state);
	}

	render() {
		return (
			<MuiThemeProvider>
				<div>
					<Header />
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
