import React from 'react';
import TabComponent from "./Tab"
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';

import Bulb from "../asset/images/bulb.svg";
import Dollar from "../asset/images/dollar.svg";
import Headset from "../asset/images/headset.svg";
import Security from "../asset/images/security.svg";

import Macbook from "../asset/images/15_-Macbook-Pro.png";
import Mobile from "../asset/images/mobileDark3.png";
import Gic from "../asset/images/gic.png";
import Ethlend from "../asset/images/ethlend.png";
import Ubs from "../asset/images/ubs.png";
import Uclaanderson from "../asset/images/uclaanderson.png";
import Payumoney from "../asset/images/payumoney.png";
import Max from "../asset/images/max.png";
import Stellar from "../asset/images/stellar.png";
import GotRekt from "../asset/images/got-rekt.png";




const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#19bced"
        }
    }
})

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(3, 0),
        [theme.breakpoints.up("sm")]: {
            padding: theme.spacing(5, 0),
        }
    },
    tabs: {
        borderBottom: "solid #dcdfe6 1px",
        width: "80%",
        margin: "0 auto"
    },
    tapLeft: {
        border: "solid #dcdfe6 1px",
        borderRight: "none",
        borderBottom: "none",
        borderRadius: "4px 0 0 0",
        color: "black"
    },
    tapRight: {
        border: "solid #dcdfe6 1px",
        borderBottom: "none",
        borderRadius: "0 4px 0 0 !important",
        color: "black"
    },
    selected: {
        color: "#22a7f0"
    },
    div1: {
        padding: theme.spacing(3),
        backgroundColor: "#f7fbff",
        [theme.breakpoints.up("sm")]: {
            padding: theme.spacing(5),
        }
    },
    blueText: {
        color: "#22a7f0"
    },
    span1: {
        padding: "14px 24px ",
        display: "inline-block",
        borderRadius: "30px",
        backgroundColor: "#19bced",
    },
    span2: {
        padding: "8px 13px",
        display: "inline-block",
        borderRadius: "30px",
        backgroundColor: "#19bced",
    },
    span3: {
        padding: "13px 22px",
        display: "inline-block",
        borderRadius: "30px",
        backgroundColor: "#19bced",
    },
    span4: {
        padding: "16px 22px",
        display: "inline-block",
        borderRadius: "30px",
        backgroundColor: "#19bced",
    },
    padding: {
        padding: theme.spacing(0, 0, 3, 0)
    },
    img1: {
        width: "100%",
        maxWidth: "400px",
        height: "auto"
    },
    img2: {
        width: "50%",
        maxWidth: "200px",
        height: "auto",
        transform: "translateY(-40%) translateX(15%) "
    },
    paper: {
        padding: theme.spacing(3),
        [theme.breakpoints.up("sm")]: {
            padding: theme.spacing(5),
        }
    },
    paperDiv: {
        backgroundColor: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 10px 50px 0 rgba(0, 0, 0, 0.05)",
        width: "46%",
        margin: "2%",
        [theme.breakpoints.up("sm")]: {
            width: "29%",
            margin: "2%"
        },
        [theme.breakpoints.up("md")]: {
            width: "21%",
            margin: "2%"
        }
    },
    paperImg: {
        width: "120px"
    },
    expand: {
        backgroundColor: "#f3f7fb",
        padding: theme.spacing(3),
        [theme.breakpoints.up("sm")]: {
            padding: theme.spacing(5),
        }
    },
    expandPanel: {
        marginBottom: "12px"
    },
    expandSummary: {
        padding: "18px",
    },
    expandDetail: {
        backgroundColor: "#f3f7fb",
    },
    expandPanelIcon: {
        color: "black"
    },
    learning: {
        boxShadow: "0 10px 50px 0 rgba(0, 0, 0, 0.05)",
        marginBottom: theme.spacing(3),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: "32%"
        }
    },
    learningImg: {
        display: "inline-block",
        marginBottom: "18px",
        width: "100%",
        height: "auto"
    },
    learningTypo: {
        padding: "0 18px 18px 18px"
    }
}));

const LandingMain = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <ThemeProvider theme={theme}>
            <Paper square className={classes.root}>
                <Tabs
                    className={classes.tabs}
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab classes={{ root: classes.tapLeft }} label="Futures" />
                    <Tab classes={{ root: classes.tapRight }} label="Move" />
                </Tabs>
            </Paper>
            <div className={classes.div1}>
                <Grid container direction="row-reverse">
                    <Grid xs={12} item> <Typography variant="h4" align="center" display="block">Why choose Delta Exchange?</Typography> </Grid>

                    <Grid xs={12} item className={classes.padding}>
                        <Typography variant="subtitle1" align="center" display="block" paragraph>Delta Exchange is the best place to trade altcoins with leverage</Typography>
                    </Grid>

                    <Grid container justify="center" alignItems="flex-start" alignContent="flex-start" item xs={12} sm={5} md={7} >
                        <img src={Macbook} alt="Macbook" className={classes.img1} />
                        <Grid item xs={12} />
                        <img src={Mobile} alt="Mobile" className={classes.img2} />
                    </Grid>

                    <Grid container item xs={12} sm={7} md={5}>
                        <Grid container item xs={12} className={classes.padding}>
                            <Grid container justify="center" alignItems="center" item xs={4}>
                                <span className={classes.span1}>
                                    <img src={Bulb} alt="bulb" />
                                </span>
                            </Grid>
                            <Grid item xs={8}>
                                <Typography className={classes.blueText} variant="h6">
                                    Innovative products
                                </Typography>
                                <Typography variant="body1">
                                    Trade derivatives on exclusive altcoins and bitcoin, with up to 100x leverage. Settle in BTC or USDC.
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container item xs={12} className={classes.padding}>
                            <Grid container justify="center" alignItems="center" item xs={4}>
                                <span className={classes.span2}>
                                    <img src={Dollar} alt="Dollar" />
                                </span>
                            </Grid>
                            <Grid item xs={8}>
                                <Typography className={classes.blueText} variant="h6">
                                    Institutional-grade exchange
                                </Typography>
                                <Typography variant="body1">
                                    Powerful matching engine complemented by intuitive interface, advanced order types and lightening-fast APIs.
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container item xs={12} className={classes.padding}>
                            <Grid container justify="center" alignItems="center" item xs={4}>
                                <span className={classes.span3}>
                                    <img src={Security} alt="Security" />
                                </span>
                            </Grid>
                            <Grid item xs={8}>
                                <Typography className={classes.blueText} variant="h6">
                                    Safe & Secure
                                </Typography>
                                <Typography variant="body1">
                                    Enterprise-grade multi-factor security for digital assets. All withdrawals are processed with manual review.
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container item xs={12} className={classes.padding}>
                            <Grid container justify="center" alignItems="center" item xs={4}>
                                <span className={classes.span4}>
                                    <img src={Headset} alt="Headset" />
                                </span>
                            </Grid>
                            <Grid item xs={8}>
                                <Typography className={classes.blueText} variant="h6">
                                    24/7 Support
                                </Typography>
                                <Typography variant="body1">
                                    Dedicated trader-tested support team that's available 24/7/365 across multiple channels
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>

            <Paper square={true} elevation={0} className={classes.paper}>
                <Grid container>
                    <Grid className={classes.padding} xs={12} item>
                        <Typography variant="h4" align="center" display="block" paragraph>Built and backed by a world class team</Typography>
                    </Grid>
                    <Grid container justify="space-around" xs={12} item>
                        <div className={classes.paperDiv}>
                            <img src={Gic} className={classes.paperImg} alt="Gic" />
                        </div>
                        <div className={classes.paperDiv}>
                            <img src={Ethlend} className={classes.paperImg} alt="Ethlend" />
                        </div>
                        <div className={classes.paperDiv}>
                            <img src={Ubs} className={classes.paperImg} alt="Ubs" />
                        </div>
                        <div className={classes.paperDiv}>
                            <img src={Uclaanderson} className={classes.paperImg} alt="Uclaaderson" />

                        </div>
                        <div className={classes.paperDiv}>
                            <img src={Uclaanderson} className={classes.paperImg} alt="uclaanderson" />
                        </div>
                        <div className={classes.paperDiv}>
                            <img src={Payumoney} className={classes.paperImg} alt="Payumoney" />
                        </div>
                        <div className={classes.paperDiv}>
                            <img src={Max} className={classes.paperImg} alt="Max" />
                        </div>
                        <div className={classes.paperDiv}>
                            <img src={Gic} className={classes.paperImg} alt="Gic" />
                        </div>
                        <div className={classes.paperDiv}>
                            <img src={Uclaanderson} className={classes.paperImg} alt="Uclaanderson" />
                        </div>
                        <div className={classes.paperDiv}>
                            <img src={Stellar} className={classes.paperImg} alt="Stellar" />
                        </div>
                        <div className={classes.paperDiv}>
                            <img src={Gic} className={classes.paperImg} alt="Gic" />
                        </div>
                        <div className={classes.paperDiv}>
                            <img src={Payumoney} className={classes.paperImg} alt="Payumoney" />
                        </div>
                    </Grid>
                </Grid>
            </Paper>

            <div className={classes.expand}>
                <Typography className={classes.padding} variant="h4" align="center" >Have a question about Delta Exchange?</Typography>

                <ExpansionPanel className={classes.expandPanel}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon className={classes.expandPanelIcon} />} aria-controls="panel1a-content" className={classes.expandSummary}>
                        <Typography variant="h5" >How does Delta Exchange ensure safety of crypto in its custody?</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.expandDetail}>
                        <Typography variant="body1">
                            Delta Exchange has enterprise-grade security and stores crypto in multi-sig wallets. For additional security,
                            withdrawals are processed only once a day with manual review.
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                <ExpansionPanel className={classes.expandPanel}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon className={classes.expandPanelIcon} />} aria-controls="panel1a-content" className={classes.expandSummary}>
                        <Typography variant="h5" >What trading fees does Delta Exchange charge?</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.expandDetail}>
                        <Typography variant="body1">
                            Delta Exchange charges trading fees only for taker orders (0.075% for BTC contracts) and
                             offers a trading fee rebate for maker order (-0.025% for BTC contracts). For our complete fee schedule, see our <Button size="small" color="primary">fees page.</Button>
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                <ExpansionPanel className={classes.expandPanel}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon className={classes.expandPanelIcon} />} aria-controls="panel1a-content" className={classes.expandSummary}>
                        <Typography variant="h5" >Which cryptocurrencies can I trade on Delta Exchange?</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.expandDetail}>
                        <Typography variant="body1">
                            Delta Exchange is a derivatives exchange. You can trade futures on cryptocurrencies,
                            but not cryptocurrencies directly. The complete list of futures listed on delta is available <Button size="small" color="primary">here.</Button>
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                <ExpansionPanel className={classes.expandPanel}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon className={classes.expandPanelIcon} />} aria-controls="panel1a-content" className={classes.expandSummary}>
                        <Typography variant="h5" >Does Delta Exchange support margin trading?</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.expandDetail}>
                        <Typography variant="body1">
                            Delta exchanges offers trading in cryptocurrency futures. These futures offer: (a) up to 100x leverage and (b) ability to go both long or short.
                             Crypto futures not only have the same features as margin trading, but also higher liquidity and lower trading fees.
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

            </div>

            <Paper square elevation={0} className={classes.paper}>
                <Grid container justify="space-around" >
                    <Grid xs={12} item> <Typography variant="h4" align="center" display="block">Learning is Earning</Typography> </Grid>
                    <Grid xs={12} item className={classes.padding}>
                        <Typography variant="subtitle1" align="center" display="block" paragraph>
                            Read our blog to learn about leveraged trading, crypto derivatives and trading strategies
                        </Typography>
                    </Grid>

                    <div className={classes.learning}>
                        <img src={GotRekt} className={classes.learningImg} alt="Gotrekt" />
                        <Typography className={classes.learningTypo} variant="h6">
                            Digital Derivatives – Bitcoin Recovers, but will it last?
                        </Typography>
                        <Typography className={classes.learningTypo}>
                            Digital derivatives is a weekly newsletter bringing you the latest research, information and analytics from the cryptocurrency derivatives space brought to you by Delta Exchange. For last week’s edition, click here.     Market Moves Bitcoin (BTC) – $6,629.76 (-1.07%) Ethereum (ETH) – $135.87 (-2.20%) Ripple (XRP) –...
                            <br />
                            <Button style={{ float: "right" }} size="small" color="primary" endIcon={<ArrowForwardIosOutlinedIcon fontSize="small" />}>Read More</Button>
                        </Typography>
                    </div>
                    <div className={classes.learning}>
                        <img src={GotRekt} className={classes.learningImg} alt="Gotrekt" />
                        <Typography className={classes.learningTypo} variant="h6">
                            Digital Derivatives – Uncertainty
                        </Typography>
                        <Typography className={classes.learningTypo}>
                            Digital Derivatives – March 20th, 2020 Digital derivatives is a weekly newsletter bringing you the latest research, information and analytics from the cryptocurrency derivatives space brought to you by Delta Exchange. For last week’s edition, click here. Market Commentary From Delta CEO, Pankaj Balani Bitcoin crash last week was partly ...
                            <br />
                            <Button style={{ float: "right" }} size="small" color="primary" endIcon={<ArrowForwardIosOutlinedIcon fontSize="small" />}>Read More</Button>
                        </Typography>
                    </div>
                    <div className={classes.learning}>
                        <img src={GotRekt} className={classes.learningImg} alt="Gotrekt" />
                        <Typography className={classes.learningTypo} variant="h6">
                            Introducing ‘Digital Derivatives’
                        </Typography>
                        <Typography className={classes.learningTypo}>
                            What's in this post Introducing ‘Digital Derivatives’Market Sentiment Plummets As Bitcoin Drops 48% In 24 HoursDerivatives InsightsDelta Exchange Developments Introducing ‘Digital Derivatives’ Digital Derivatives is a weekly newsletter bringing you the latest research, information and analytics from the cryptocurrency d...
                            <br />
                            <Button style={{ float: "right" }} size="small" color="primary" endIcon={<ArrowForwardIosOutlinedIcon fontSize="small" />}>Read More</Button>
                        </Typography>
                    </div>
                </Grid>
            </Paper>

            <TabComponent />
        </ThemeProvider >
    );
}

export default LandingMain;
