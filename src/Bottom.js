import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import Class from 'material-ui-icons/Class';
import Accessibility from 'material-ui-icons/Accessibility';
import AccountCircle from 'material-ui-icons/AccountCircle';

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
class Bottom extends Component {
  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({selectedIndex: index});

  render() {
    return (
      <Paper zDepth={1}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="课内"
            icon={<Class />}
            onClick={() => this.select(0)}
          />
          <BottomNavigationItem
            label="课外"
            icon={<Accessibility />}
            onClick={() => this.select(1)}
          />
          <BottomNavigationItem
            label="我"
            icon={<AccountCircle />}
            onClick={() => this.select(2)}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default Bottom;