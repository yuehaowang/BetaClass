import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './Header'


class App extends React.Component {
  render() {
	return (
		<MuiThemeProvider>
			<Header />
		</MuiThemeProvider>
	);
  }
}


export default App;
