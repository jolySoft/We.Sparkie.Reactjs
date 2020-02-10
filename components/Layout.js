import NavBar from "./navbar";
import BlueGrey from '@material-ui/core/colors/BlueGrey';
import {createMuiTheme} from "@material-ui/core/styles";
import {ThemeProvider} from "@material-ui/styles";

const theme = createMuiTheme({
    palette: {
        primary: BlueGrey,
    },
});

const Layout = (props) => (
  <div>
      <ThemeProvider theme={theme}>
          <NavBar/>
          {props.children}
      </ThemeProvider>
  </div>

);

export default Layout;