import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './Header'


class App extends React.Component {
	render() {
		return (
			<MuiThemeProvider>
				<div>
					<Header />
				</div>
			</MuiThemeProvider>
		);
	}
}

export default App;
