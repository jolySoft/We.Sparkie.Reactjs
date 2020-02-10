import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from "@material-ui/core/ListItemText";
import Drawer from '@material-ui/core/Drawer';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

export default function NavBar() {
    const classes = useStyles();

    const [state, setState] = React.useState({
        open: false,
    });


    const toggleDrawer = (open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, ["open"]: open });
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon onClick={toggleDrawer(true)}/>
                    </IconButton>
                    <Drawer open={state.open} onClose={toggleDrawer(false)}>
                        <List>
                            <ListItem button key="Home">
                                <ListItemLink href="/">
                                    <ListItemText primary="Home" />
                                </ListItemLink>
                            </ListItem>
                            <ListItem button key="tracks">
                                <ListItemLink href="/tracks">
                                    <ListItemText primary="Tracks" />
                                </ListItemLink>
                            </ListItem>
                        </List>
                    </Drawer>
                    <Typography variant="h6" className={classes.title}>
                        Sparkie Audio
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};