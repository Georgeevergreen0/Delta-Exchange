import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import TelegramIcon from '@material-ui/icons/Telegram';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';



const useStyles = makeStyles((theme) => ({
    root: {
        width: "100vw",
        overflowX: "hidden",
        flexGrow: 1,
        color: "#fff",
        padding: theme.spacing(3),
        [theme.breakpoints.up("sm")]: {
            padding: theme.spacing(5),
        },
        backgroundImage: "linear-gradient(176deg, #202934 60%, #213246 84%)"
    },
    rootDiv: {
        padding: theme.spacing(0, 0, 3, 0),
        margin: theme.spacing(0, 0, 3, 0),
        [theme.breakpoints.up("sm")]: {
            padding: theme.spacing(0, 0, 5, 0),
            margin: theme.spacing(0, 0, 5, 0),
        },
        borderBottom: "1px solid #384454",
    },
    gridItem: {
        padding: "16px"
    },
    heading: {
        position: "relative",
        padding: "0 0 10px 0",
        margin: "0 0 16px 0",
        "&:after": {
            content: '" "',
            position: "absolute",
            top: "100%",
            left: 0,
            width: "3rem",
            height: "3px",
            backgroundColor: "#22a7f0",

        }
    },
    href: {
        color: "#bac1c8",
        "&:hover": {
            color: "#fff"
        },
        textDecoration: "none",
        textTransform: "none",
        fontSize: "14px"
    },
    footer: {
        color: "#fff",
        padding: theme.spacing(3),
        [theme.breakpoints.up("sm")]: {
            padding: theme.spacing(5),
        },
    },
    textField: {
        width: "100%",
        overflowX: "hidden",
        display: "flex"
    },
    textInput: {
        fontSize: "1rem",
        "minWidth": 0,
        fontWeight: 300,
        lineHeight: 1.5,
        flexGrow: 1,
        background: "transparent",
        borderRadius: "4px 0 0 4px",
        outline: "none",
        color: "#fff",
        border: "1px solid #717782",
        backgroundColor: "#717782",
        padding: "6px 12px",
        "&::placeholder": {
            color: "#fff"
        },
        "&:-ms-input-placeholder": {
            color: "#fff"
        },
        "&::-ms-input-placeholder": {
            color: "#fff"
        }
    },
    textButton: {
        borderRadius: "0 4px 4px 0",
        outline: "none",
        border: "none",
        color: "white",
        backgroundColor: "#19bced",
        fontSize: "16px",
        padding: "15px 16px",
        fontWeight: 400
    },
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid className={classes.rootDiv} justify="space-around" container>
                <Grid className={classes.gridItem} item xs={12} sm={6} md={4}>
                    <Typography className={classes.heading} variant="h6">Future Guides</Typography>

                    <Typography className={classes.href} href="/#" component="a" variant="overline" display="block">Bitcoin (BTC) Futures Guide</Typography>
                    <Typography className={classes.href} href="/#" component="a" variant="overline" display="block">BNB Futures Guide</Typography>
                    <Typography className={classes.href} href="/#" component="a" variant="overline" display="block">Litecoin (LTC) Futures Guide</Typography>
                    <Typography className={classes.href} href="/#" component="a" variant="overline" display="block">Ethereum (ETH) Futures Guide</Typography>
                    <Typography className={classes.href} href="/#" component="a" variant="overline" display="block">Ripple (XRP) Futures Guide</Typography>
                    <Typography className={classes.href} href="/#" component="a" variant="overline" display="block">Stellar (XLM) Futures Guide</Typography>
                    <Typography className={classes.href} href="/#" component="a" variant="overline" display="block">Tezos (XTZ) Futures Guide</Typography>
                    <Typography className={classes.href} href="/#" component="a" variant="overline" display="block">Basic Attention Token (BAT) Futures Guide</Typography>
                    <Typography className={classes.href} href="/#" component="a" variant="overline" display="block">Bitcoin Cash SV (BSV) Futures Guide</Typography>
                    <Typography className={classes.href} href="/#" component="a" variant="overline" display="block">ATOM Futures Guide</Typography>
                    <Typography className={classes.href} href="/#" component="a" variant="overline" display="block">UNUS SED LEO Futures Guide</Typography>
                    <Typography className={classes.href} href="/#" component="a" variant="overline" display="block">Ravencoin Futures Guide</Typography>
                    <Typography className={classes.href} href="/#" component="a" variant="overline" display="block">LINK Futures Guide</Typography>
                </Grid>

                <Grid className={classes.gridItem} item xs={12} sm={6} md={3}>
                    <Typography className={classes.heading} variant="h6">Markets</Typography>

                    <Typography className={classes.href} href="/#" component="a" variant="overline" display="block">BTC – USD Perpetual</Typography>
                    <Typography className={classes.href} href="/#" component="a" variant="overline" display="block">BTC – USD Futures</Typography>
                    <Typography className={classes.href} href="/#" component="a" variant="overline" display="block">BNB – BTC Perpetual</Typography>
                    <Typography className={classes.href} href="/#" component="a" variant="overline" display="block">BAT – BTC Perpetual</Typography>
                    <Typography className={classes.href} href="/#" component="a" variant="overline" display="block">XTZ – BTC Perpetual</Typography>
                    <Typography className={classes.href} href="/#" component="a" variant="overline" display="block">LEO – USD Quanto Perpetual</Typography>
                    <Typography className={classes.href} href="/#" component="a" variant="overline" display="block">XLM – BTC Perpetual</Typography>
                    <Typography className={classes.href} href="/#" component="a" variant="overline" display="block">ATOM – BTC Perpetual</Typography>
                    <Typography className={classes.href} href="/#" component="a" variant="overline" display="block">LINK – BTC Perpetual</Typography>
                    <Typography className={classes.href} href="/#" component="a" variant="overline" display="block">ATOM Futures Guide</Typography>
                </Grid>

                <Grid className={classes.gridItem} item xs={12} sm={6} md={2}>
                    <Typography className={classes.heading} variant="h6">Company</Typography>

                    <Typography className={classes.href} href="/#" component="a" variant="overline" display="block">About Us</Typography>
                    <Typography className={classes.href} href="/#" component="a" variant="overline" display="block">Support Center</Typography>
                    <Typography className={classes.href} href="/#" component="a" variant="overline" display="block">Fees</Typography>
                    <Typography className={classes.href} href="/#" component="a" variant="overline" display="block">FAQs</Typography>
                    <Typography className={classes.href} href="/#" component="a" variant="overline" display="block">Blog</Typography>
                    <Typography className={classes.href} href="/#" component="a" variant="overline" display="block">Press</Typography>
                    <Typography className={classes.href} href="/#" component="a" variant="overline" display="block">Careers</Typography>
                </Grid>

                <Grid className={classes.gridItem} item xs={12} sm={6} md={3}>
                    <Typography className={classes.heading} variant="h6">References</Typography>

                    <Typography className={classes.href} href="/#" component="a" variant="overline" display="block">Delta Research & Analytics</Typography>
                    <Typography className={classes.href} href="/#" component="a" variant="overline" display="block">Contract Specifications</Typography>
                    <Typography className={classes.href} href="/#" component="a" variant="overline" display="block">User Guide</Typography>
                    <Typography className={classes.href} href="/#" component="a" variant="overline" display="block">API Documentation</Typography>
                    <Typography className={classes.href} href="/#" component="a" variant="overline" display="block">Affiliate Program</Typography>
                    <Typography className={classes.href} href="/#" component="a" variant="overline" display="block">Terms of Service</Typography>
                    <Typography className={classes.href} href="/#" component="a" variant="overline" display="block">Privacy Policy</Typography>
                </Grid>
            </Grid>


            <Grid container direction="row-reverse">

                <Grid className={classes.gridItem} item xs={12} sm={6}>
                    <Typography style={{ fontWeight: 100 }} variant="h6" paragraph >Stay connected with Delta Exchange</Typography>

                    <div className={classes.textField}>
                        <input className={classes.textInput} placeholder="Enter Your e-mail ID" />
                        <Typography variant="button" component={ButtonBase} className={classes.textButton}>Subscribe</Typography>
                    </div>
                </Grid>

                <Grid className={classes.gridItem} container alignContent="space-between" item xs={12} sm={6}>

                    <Grid container justify="center" alignContent="center" item xs={12}>
                        <IconButton>
                            <TwitterIcon fontSize="large" />
                        </IconButton>

                        <IconButton>
                            <FacebookIcon fontSize="large" />
                        </IconButton>

                        <IconButton>
                            <GitHubIcon fontSize="large" />
                        </IconButton>

                        <IconButton>
                            <TelegramIcon fontSize="large" />
                        </IconButton>

                        <IconButton>
                            <Typography variant="h4">M</Typography>
                        </IconButton>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography style={{ color: "#bac1c8" }} variant="caption" align="center" display="block">Delta Exchange © 2020. All Rights Reserved</Typography>
                    </Grid>

                </Grid>
            </Grid>
        </div>
    );
}

export default Footer;