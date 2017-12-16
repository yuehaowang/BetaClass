import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './Header'
import Bottom from './Bottom'
import Content from './Content'

class App extends React.Component {
	state = {
		bottomIndex: 0,
		contentIndex:0,
	};

	selectBottom = (index) => this.setState({bottomIndex: index});	
	selectContent = (index) => {this.setState({contentIndex: index});	console.log(this.state)}

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
