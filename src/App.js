import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './Header'
import Bottom from './Bottom'

class App extends React.Component {
	render() {
		return (
			<MuiThemeProvider>
				<div>
					<Header />
					
					<Bottom />
				</div>

			</MuiThemeProvider>
		);
	}
}

export default App;
