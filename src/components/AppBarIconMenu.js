import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import NavigationMenu from 'material-ui/lib/svg-icons/navigation/menu';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/lib/menus/menu-item';

class AppBarIconMenu extends React.Component {

  constructor(props) {
        super(props);
        this.state = {open: false};

        this.menuIconClicked = this.menuIconClicked.bind(this);
  }

  menuIconClicked() {
    console.log("menuIconClicked");
  }

  render() {
    return (
      <AppBar
        title="Title"
        iconElementLeft={<IconButton onClick={this.menuIconClicked}><NavigationMenu /></IconButton>}
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
    );
  }
}

export default AppBarIconMenu;
