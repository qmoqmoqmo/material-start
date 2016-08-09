import React from 'react';
import {
  Route,
  Redirect,
  IndexRoute,
} from 'react-router';

// Here we define all our material-ui ReactComponents.
import Master from './Master';
import Home from './Home';
/*
import Prerequisites from './components/pages/get-started/Prerequisites';
import Installation from './components/pages/get-started/Installation';
import Usage from './components/pages/get-started/Usage';
import Examples from './components/pages/get-started/Examples';
import ServerRendering from './components/pages/get-started/ServerRendering';

import Colors from './components/pages/customization/Colors';
import Themes from './components/pages/customization/Themes';
import InlineStyles from './components/pages/customization/InlineStyles';

import AppBarPage from './components/pages/components/AppBar/Page';
import AutoCompletePage from './components/pages/components/AutoComplete/Page';
import AvatarPage from './components/pages/components/Avatar/Page';
import BadgePage from './components/pages/components/Badge/Page';
import CardPage from './components/pages/components/Card/Page';
import ChipPage from './components/pages/components/Chip/Page';
import CircularProgressPage from './components/pages/components/CircularProgress/Page';
import CheckboxPage from './components/pages/components/Checkbox/Page';
import DatePicker from './components/pages/components/DatePicker/Page';
import DialogPage from './components/pages/components/Dialog/Page';
import DividerPage from './components/pages/components/Divider/Page';
import DrawerPage from './components/pages/components/Drawer/Page';
import DropDownMenuPage from './components/pages/components/DropDownMenu/Page';
import FlatButtonPage from './components/pages/components/FlatButton/Page';
import FloatingActionButtonPage from './components/pages/components/FloatingActionButton/Page';
import FontIconPage from './components/pages/components/FontIcon/Page';
import GridListPage from './components/pages/components/GridList/Page';
import IconButtonPage from './components/pages/components/IconButton/Page';
import IconMenuPage from './components/pages/components/IconMenu/Page';
import ListPage from './components/pages/components/List/Page';
import LinearProgressPage from './components/pages/components/LinearProgress/Page';
import PaperPage from './components/pages/components/Paper/Page';
import MenuPage from './components/pages/components/Menu/Page';
import PopoverPage from './components/pages/components/Popover/Page';
import RaisedButtonPage from './components/pages/components/RaisedButton/Page';
import RefreshIndicatorPage from './components/pages/components/RefreshIndicator/Page';
import RadioButtonPage from './components/pages/components/RadioButton/Page';
import SelectField from './components/pages/components/SelectField/Page';
import SliderPage from './components/pages/components/Slider/Page';
import SnackbarPage from './components/pages/components/Snackbar/Page';
import SvgIconPage from './components/pages/components/SvgIcon/Page';
import SubheaderPage from './components/pages/components/Subheader/Page';
import TablePage from './components/pages/components/Table/Page';
import TabsPage from './components/pages/components/Tabs/Page';
import TextFieldPage from './components/pages/components/TextField/Page';
import TimePickerPage from './components/pages/components/TimePicker/Page';
import TogglePage from './components/pages/components/Toggle/Page';
import ToolbarPage from './components/pages/components/Toolbar/Page';

import Community from './components/pages/discover-more/Community';
import Contributing from './components/pages/discover-more/Contributing';
import Showcase from './components/pages/discover-more/Showcase';
import RelatedProjects from './components/pages/discover-more/RelatedProjects';

import StepperPage from './components/pages/components/Stepper/Page';
*/
/**
 * Routes: https://github.com/rackt/react-router/blob/master/docs/api/components/Route.md
 *
 * Routes are used to declare your view hierarchy.
 *
 * Say you go to http://material-ui.com/#/components/paper
 * The react router will search for a route named 'paper' and will recursively render its
 * handler and its parent handler like so: Paper > Components > Master
 */
const AppRoutes = (
  <Route path="/" component={Master}>
    <IndexRoute component={Home} />
    <Route path="home" component={Home} />
  </Route>
);

export default AppRoutes;
