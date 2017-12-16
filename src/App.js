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
			contentIndex:-1,
		};
	}

	selectBottom = (index) => {
		this.setState({bottomIndex: index, contentIndex: -1});
	}

	selectContent = (index) => {
		this.setState({contentIndex: index});
	}

	render() {
		return (
			<MuiThemeProvider>
				<div>
					<Header />
					<div style={{maxHeight: window.innerHeight - 120, overflow: 'auto'}}>
						<Content bottomIndex={this.state.bottomIndex} contentIndex={this.state.contentIndex} select={this.selectContent.bind(this)}/>
					</div>
					<Bottom select={this.selectBottom.bind(this)} bottomIndex={this.state.bottomIndex}/>
				</div>
			</MuiThemeProvider>
		);
	}
}

export default App;
