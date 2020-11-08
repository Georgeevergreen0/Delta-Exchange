import React, { useEffect, useState } from 'react';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Footer from "./Footer";
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Popover from '@material-ui/core/Popover';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Background from "../asset/images/jumbo-mask.png";
import Logo from "../asset/images/logo-light.png";

const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: "#19bced"
        },
        background: {
            paper: "#19222d"
        }
    },
});


const useStyles = makeStyles(theme => ({
    drawer: {
        backgroundColor: "#19222d",
    },
    root: {
        flexGrow: 1,
        width: "100vw",
        backgroundImage: `url(${Background})`,
        color: "#ffffff",
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
        backgroundRepeat: "no-repeat",
        overflowX: "hidden"
    },
    logo: {
        width: "135px",
        height: "auto",
    },
    toolbar: {
        padding: theme.spacing(1, 3),
        [theme.breakpoints.up("sm")]: {
            padding: theme.spacing(1, 5),
        }
    },
    image: {
        width: "100%"
    },
    title: {
        flexGrow: 1,
    },
    small: {
        display: "flex",
        [theme.breakpoints.up('md')]: {
            display: "none",
        }
    },
    large: {
        display: "none",
        [theme.breakpoints.up('md')]: {
            display: "flex",
        }
    },
    manuList: {
        margin: theme.spacing(0, 1)
    },
    hover: {
        cursor: "pointer",
        display: "flex",
        alignItems: "center"
    },
    tool: theme.mixins.toolbar
}));

const Layout = (props) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [background, setbackground] = useState(null);
    const [isOpen, setOpen] = useState(null);
    const [drawer, setDrawer] = useState(false);
    const [expanded, setExpanded] = useState(false);

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const toggleDrawer = (drawerState) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawer(drawerState)
    }


    useEffect(() => {
        document.addEventListener("scroll", () => {
            if (window.pageYOffset > "50") {
                setbackground("#19222d")
            } else {
                setbackground("transparent")
            }

        })
    }, [background])

    const handleClick = element => event => {
        setAnchorEl(event.currentTarget);
        setOpen(element)
    };

    const handleClose = () => {
        setAnchorEl(null);
        setOpen(null)
    };


    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <Drawer anchor="top" open={drawer} onClose={toggleDrawer(false)}>
                    <div className={classes.drawer}>
                        <AppBar color="transparent" position="static">
                            <Toolbar className={classes.toolbar}>
                                <a href="/" className={classes.logo}>
                                    <img src={Logo} className={classes.image} alt="Logo" />
                                </a>

                                <div className={classes.title}></div>

                                <div>
                                    <IconButton onClick={toggleDrawer(false)} edge="start" color="inherit" aria-label="Close">
                                        <CloseIcon fontSize="large" />
                                    </IconButton>
                                </div>
                            </Toolbar>
                        </AppBar>

                        <div className={classes.tool}></div>

                        <ExpansionPanel expanded={expanded === "products"} onChange={handleChange("products")}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content">
                                <Typography variant="button" align="center" >Products </Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <List style={{ width: "100%" }}>
                                    <ListItem button disableGutters>
                                        <ListItemText primaryTypographyProps={{ align: "center", display: "block", variant: "button" }} primary="Futures" />
                                    </ListItem>
                                    <ListItem button disableGutters>
                                        <ListItemText primaryTypographyProps={{ align: "center", display: "block", variant: "button" }} primary="Mock Trading Platform" />
                                    </ListItem>
                                </List>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>

                        <ExpansionPanel expanded={expanded === "competitions"} onChange={handleChange("competitions")}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content">
                                <Typography variant="button" align="center" >Competitions</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <List style={{ width: "100%" }}>
                                    <ListItem button disableGutters>
                                        <ListItemText primaryTypographyProps={{ align: "center", display: "block", variant: "button" }} primary="KNC" />
                                    </ListItem>
                                    <ListItem button disableGutters>
                                        <ListItemText primaryTypographyProps={{ align: "center", display: "block", variant: "button" }} primary="Crypto Trading" />
                                    </ListItem>
                                    <ListItem button disableGutters>
                                        <ListItemText primaryTypographyProps={{ align: "center", display: "block", variant: "button" }} primary="Tomo Chain" />
                                    </ListItem>
                                </List>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>

                        <ExpansionPanel expanded={expanded === "company"} onChange={handleChange("company")}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content">
                                <Typography variant="button" align="center" >Company</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <List style={{ width: "100%" }}>
                                    <ListItem button disableGutters>
                                        <ListItemText primaryTypographyProps={{ align: "center", display: "block", variant: "button" }} primary="About Us" />
                                    </ListItem>
                                    <ListItem button disableGutters>
                                        <ListItemText primaryTypographyProps={{ align: "center", display: "block", variant: "button" }} primary="Careers" />
                                    </ListItem>
                                    <ListItem button disableGutters>
                                        <ListItemText primaryTypographyProps={{ align: "center", display: "block", variant: "button" }} primary="Press" />
                                    </ListItem>
                                </List>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>

                        <ExpansionPanel expanded={expanded === "languages"} onChange={handleChange("languages")}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content">
                                <Typography variant="button" align="center" >Languages</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <List style={{ width: "100%" }}>
                                    <ListItem button disableGutters>
                                        <ListItemText primaryTypographyProps={{ align: "center", display: "block", variant: "button" }} primary="English (en)" />
                                    </ListItem>
                                    <ListItem button disableGutters>
                                        <ListItemText primaryTypographyProps={{ align: "center", display: "block", variant: "button" }} primary="German (de)" />
                                    </ListItem>
                                </List>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <div className={classes.tool}></div>
                    </div>
                </Drawer>
            </ThemeProvider>

            <div className={classes.root}>
                <AppBar style={{ backgroundColor: background }} color="transparent" position="fixed">
                    <Toolbar className={classes.toolbar}>
                        <a href="/" className={classes.logo}>
                            <img src={Logo} className={classes.image} alt="Logo" />
                        </a>

                        <div className={classes.title}></div>

                        <div className={classes.small}>
                            <IconButton onClick={toggleDrawer(true)} edge="start" color="inherit" aria-label="Open">
                                <MenuIcon fontSize="large" />
                            </IconButton>
                        </div>

                        <div className={classes.large}>
                            <div className={classes.manuList}>
                                <Typography className={classes.hover} variant="subtitle1" aria-controls="Products" aria-haspopup="true" color="inherit" onClick={handleClick("Products")}>
                                    Products <ArrowDropDownIcon />
                                </Typography>
                                <Popover anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    open={isOpen === "Products"}
                                    onClose={handleClose}
                                >
                                    <MenuList>
                                        <MenuItem onClick={handleClose}> Futures</MenuItem>
                                        <MenuItem onClick={handleClose}> Mock Trading Platform</MenuItem>
                                    </MenuList>
                                </Popover>
                            </div>
                            <div className={classes.manuList}>
                                <Typography className={classes.hover} variant="subtitle1" aria-controls="Competitions" aria-haspopup="true" color="inherit" onClick={handleClick("Competitions")}>
                                    Competitions <ArrowDropDownIcon />
                                </Typography>
                                <Popover anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'center',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'center',
                                    }}
                                    open={isOpen === "Competitions"}
                                    onClose={handleClose}>
                                    <MenuList>
                                        <MenuItem onClick={handleClose}> KNC</MenuItem>
                                        <MenuItem onClick={handleClose}> Crypto Trading</MenuItem>
                                        <MenuItem onClick={handleClose}> Tomo Chain</MenuItem>
                                    </MenuList>
                                </Popover>
                            </div>
                            <div className={classes.manuList}>
                                <Typography className={classes.hover} variant="subtitle1" aria-controls="Company" aria-haspopup="true" color="inherit" onClick={handleClick("Company")}>
                                    Company <ArrowDropDownIcon />
                                </Typography>
                                <Popover anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'center',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'center',
                                    }}
                                    open={isOpen === "Company"}
                                    onClose={handleClose}>
                                    <MenuList>
                                        <MenuItem onClick={handleClose}> About</MenuItem>
                                        <MenuItem onClick={handleClose}> Careers</MenuItem>
                                        <MenuItem onClick={handleClose}> Press</MenuItem>
                                    </MenuList>
                                </Popover>
                            </div>
                            <div className={classes.manuList}>
                                <Typography className={classes.hover} variant="subtitle1" aria-controls="Languages" aria-haspopup="true" color="inherit" onClick={handleClick("Languages")}>
                                    Languages <ArrowDropDownIcon />
                                </Typography>
                                <Popover anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    open={isOpen === "Languages"}
                                    onClose={handleClose}>

                                    <MenuList>
                                        <MenuItem onClick={handleClose}> English (en)</MenuItem>
                                        <MenuItem onClick={handleClose}> German (de)</MenuItem>
                                    </MenuList>
                                </Popover>
                            </div>
                        </div>
                    </Toolbar>
                </AppBar>
                <div className={classes.tool}></div>
                {props.main}
            </div >
            {props.children}
            <ThemeProvider theme={darkTheme}>
                <Footer />
            </ThemeProvider>
        </>
    );
}

export default Layout
