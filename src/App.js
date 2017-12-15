import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './Header'
import Bottom from './Bottom'
import Content from './Content'

class App extends React.Component {
	state = {
		selectedIndex: 0,
	};

	select = (index) => this.setState({selectedIndex: index});	

	render() {
		return (
			<MuiThemeProvider>
				<div>
					<Header />
					<div style={{maxHeight: window.innerHeight - 120, overflow: 'auto'}}>
						<Content selectedIndex={this.state.selectedIndex}/>
					</div>
					<Bottom select={this.select.bind(this)} selectedIndex={this.state.selectedIndex}/>
				</div>
			</MuiThemeProvider>
		);
	}
}

export default App;
