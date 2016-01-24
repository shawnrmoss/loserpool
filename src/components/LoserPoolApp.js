import React from 'react';
import { Router, Route, Link } from 'react-router'

import LeftNav from 'material-ui/lib/left-nav';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import NavigationMenu from 'material-ui/lib/svg-icons/navigation/menu';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/lib/menus/menu-item';

import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// Can go away when react 1.0 releaseimport AppBar from 'material-ui/lib/app-bar';
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

// Then we delete a bunch of code from App and
// add some <Link> elements...

class LoserPoolApp extends React.Component {

  constructor(props) {
        super(props);
        this.state = {open: false};

        this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({open: !this.state.open});
  }

  render(){
    return (
      <div>
        <AppBar
          title="Title"
          iconElementLeft={<IconButton onClick={this.handleToggle}><NavigationMenu /></IconButton>}
          iconElementRight={
            <IconMenu
              iconButtonElement={
                <IconButton><MoreVertIcon /></IconButton>
              }
              targetOrigin={{horizontal: 'right', vertical: 'top'}}
              anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            >
              <MenuItem primaryText="Refresh" />
              <MenuItem primaryText="Help" />
              <MenuItem primaryText="Sign out" />
            </IconMenu>
          }
        />
        <LeftNav
          ref="leftNav"
          docked={false}
          width={300}
          open={this.state.open}
          onRequestChange={open => this.setState({open})}
        >
          <MenuItem to="/about" >Abouts</MenuItem>
          <MenuItem >Inbox</MenuItem>
        </LeftNav>
        {this.props.children}
      </div>
    );
  }
}

export default LoserPoolApp;
