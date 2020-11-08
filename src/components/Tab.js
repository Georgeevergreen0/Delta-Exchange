import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Background from "../asset/images/jumbo-mask.png";
import Down from "../asset/images/line-down.png";
import Up from "../asset/images/line-up.png";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && children}
        </Typography>
    );
}

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: "#f4f7fb",
        padding: theme.spacing(3),
        overflowX: "hidden",
        [theme.breakpoints.up("sm")]: {
            padding: theme.spacing(5),
        },
    },
    tabs: {
        marginBottom: theme.spacing(3)
    },
    textColor: {
        color: "#09182c",
        fontWeight: 300
    },
    lastDiv: {
        backgroundImage: `url(${Background})`,
        color: "#ffffff",
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
        backgroundRepeat: "no-repeat",
        overflowX: "hidden",
        padding: theme.spacing(3),
        [theme.breakpoints.up("sm")]: {
            padding: theme.spacing(5),
        }
    },
    lastSpan: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "96px",
        height: "96px",
        margin: "16px auto 32px",
        border: "1px solid #fff",
        borderRadius: "50%",
    },
    lastImageLeft: {
        position: "absolute",
        width: "60%",
        top: "50%",
        left: "75%",
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block"
        }
    },
    lastImageRight: {
        position: "absolute",
        width: "60%",
        bottom: "50%",
        right: "75%",
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block"
        }
    },
    lastItem: {
        padding: "0 16px",
        marginBottom: "18px"
    },
    lastButtonDiv: {
        padding: "48px 0"
    },
    lastButton: {
        display: "block",
        margin: "0 auto",
        color: "#fff",
        background: "#19bced",
        padding: "18px 24px"
    }
}));

const TabComponent = (props) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <div className={classes.root}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="Tabs"
                >
                    <Tab label="Cryptocurrency derivatives" {...a11yProps(0)} />
                    <Tab label="Cryptocurrency futures vs. margin trading" {...a11yProps(1)} />
                    <Tab label="More about Delta Exchange" {...a11yProps(2)} />
                </Tabs>

                <Divider className={classes.tabs} />

                <TabPanel value={value} index={0}>
                    <Typography className={classes.textColor} paragraph>
                        <Typography component="span" variant="subtitle1" color="primary" display="inline" >Overview</Typography>: A derivative is a class of financial contracts that derive their value from the performance of an underlying entity. Derivatives where this underlying is a cryptocurrency or a cryptoasset, e.g. Bitcoin, Ether etc are known as cryptocurrency derivatives. Trading of crypto derivatives does not entail actual buying or selling of bitcoins or any other crypto. The value of the derivative contract changed with the change in price of the underlying cryptocurrency and thus, trading derivatives in an alternative way to get exposure to the underlying cryptoasset or cryptocurrency.
              </Typography>
                    <Typography className={classes.textColor} paragraph>
                        <Typography component="span" variant="subtitle1" color="primary" display="inline">Types</Typography>: The prominent types of derivative contracts include futures, options, contracts for difference (CFD), perpetual swaps and swaps. Derivative contracts are traded both on exchanges and over the counter (OTC). Exchange traded derivatives are standardised contracts and are typically very liquid. In contrast, OTC derivatives are bespoke contracts between two parties.
              </Typography>
                    <Typography className={classes.textColor} paragraph>
                        <Typography component="span" variant="subtitle1" color="primary" display="inline">Uses</Typography>: There are broadly, three categories for derivative use-cases. These are: (a) hedging: this is essentially getting insurance for adverse price movements of an asset you already own. For e.g. miners may want to lock-in the price of mined bitcoin without selling it, (b) speculation: traders employ derivatives to create leveraged pay-off profiles based on their market view, and (c) access: traders that are not able to buy bitcoin or cryptocurrencies directly could potentially gain exposure to them via derivatives.
              </Typography>
                    <Typography className={classes.textColor} paragraph>
                        <Typography component="span" variant="subtitle1" color="primary" display="inline">Benefits</Typography>: For traders/ investors, derivatives offer several benefits which are unavailable in spot trading. These include: (a) ability to go both long and short, i.e. profit from both rising and falling market, (b) leverage trading which enables a trader to take bigger positions and (c) strong liquidity which reduces the cost of trading.
              </Typography>
                </TabPanel>


                <TabPanel value={value} index={1}>
                    <Typography className={classes.textColor}>
                        Either Futures and margin trading can be used if a trader is looking for leverage and the ability to go both long and short. In margin trading these are achieved via two steps:
                </Typography>
                    <Typography className={classes.textColor} paragraph>
                        <Typography component="span" variant="subtitle1" color="primary" display="inline">Step 1</Typography>: borrow money or a cryptoasset
                    <br />
                        <Typography component="span" variant="subtitle1" color="primary" display="inline" >Step 2</Typography>: For going long: use the borrowed money to buy crypto. For going short: sell the borrowed cryptoasset. In contrast, futures contracts have both these features built in their design
                </Typography>

                    <Typography className={classes.textColor} paragraph>
                        Futures are superior to margin trading across all dimensions:
                 </Typography>

                    <Typography className={classes.textColor} paragraph>
                        <Typography component="span" variant="subtitle1" color="primary" display="inline">Higher leverage</Typography>: Maximum leverage allowed in futures contracts tends to be much higher than the leverage allowed in margin trading. For example, on Delta, one can trade bitcoin with up to 100x leverage. Whereas, in bitcoin margin trading, leverage is typically capped at 5x.
                </Typography>

                    <Typography className={classes.textColor} paragraph>
                        <Typography component="span" variant="subtitle1" color="primary" display="inline">Higher liquidity</Typography>: Borrow markets are inherently hard to build and tend to have limited liquidity. This in turn impacts the liquidity of margin trading. Futures markets being free of this limitation tend to be highly liquid and are usually bigger than spot markets.
                </Typography>

                    <Typography className={classes.textColor} paragraph>
                        <Typography component="span" variant="subtitle1" color="primary" display="inline">Higher flexibility</Typography>: Margin trading facility is available only on top 2-3 cryptocurrencies such as bitcoin and Ether. Whereas, liquid futures markets are available for a wide range of cryptocurrencies. For example, it is not possible to trade XLM on margin, but XLM can be traded via futures on Delta.
                </Typography>
                </TabPanel>

                <TabPanel value={value} index={2}>
                    <Typography variant="h6" className={classes.textColor} paragraph >
                        Bitcoin Futures and Futures on Other Cryptocurrencies
                </Typography>

                    <Typography className={classes.textColor} paragraph>
                        When two parties enter into a futures contract, they agree to buy/ sell an asset or security at a pre-fixed price on a selected date in the future. Crypto futures have bitcoin or altcoins (e.g. BNB, LEO, Stellar Lumens) as the underlying.
                </Typography>

                    <Typography className={classes.textColor} paragraph>
                        The price of a crypto futures changes linearly with the price of the underlying cryptocurrency. Consider trading of a bitcoin futures contract. If price of bitcoin moves up by 10%, ceteris paribus the price of bitcoin futures will also move by 10%. This feature makes trading the bitcoin futures a good alternative to trading bitcoin directly. The same applied to futures contracts which have other cryptos like Ether, XRP and Tezos. Moreover, crypto futures come up: (a) in-built leverage, (b) flexibility of going long or shorting and (c) low transaction costs.
                </Typography>

                    <Typography className={classes.textColor} paragraph>
                        <Typography component="span" variant="subtitle1" color="primary" display="inline">Futures trading on Delta</Typography>: Delta currently has futures on bitcoin (BTC) and 13 leading altcoins. Ether (ETH), Ripple (XRP), Stellar Lumens (XLM), Binance Coin (BNB), UNUS SED LEO (LEO), Litecoin (LTC), Tezos (XTZ), ATOM, Bitcoin Cash (BCH), Bitcoin Cash SV (BSV), NEO, Monero (XMR) and Basic Attention Token (BAT) are the altcoins that have futures on Delta Exchange. The maximum allowed leverage is 100x for the BTC and ETH futures contracts and 50x for XRP contracts. For the rest of the futures contracts, maximum allowed leverage is 20x.
                </Typography>

                    <Typography variant="h6" className={classes.textColor} paragraph>
                        Best and Fastest growing Cryptocurrency Derivatives Exchange
                 </Typography>

                    <Typography className={classes.textColor} paragraph>
                        Delta Exchange is the fastest growing cryptocurrency derivatives exchange. We offer high liquidity on Bitcoin and AltCoin futures, have a strong technology and strong customer and tech support. Our competition are BitMEX, DeriBit, Cryptofacilities and other futures trading exchanges. We continuously strive to beat our competition and offer the best quotes on futures for Bitcoin and other Altcoins. We also offer dedicated tech support. If you want any help with integrating with our APIs or setting up your trading bots please write to us on our support email mentioned in the footer. We have a strong focus on security and use best in class infrastructure to secure customer funds. It is these features that make Delta Exchange one of the best exchanges for cryptocurrency derivatives trading and the exchange of choice for margin trading and futures trading.
                    <br />
                        Please note that Delta Exchange is not a spot exchange like Binance, Coinbase, Huobi, OKEx. Please also note that we do not support any fiat deposits or trading against fiat currencies.
                </Typography>

                    <Typography variant="h6" className={classes.textColor} paragraph>
                        Most competitive prices on Bitcoin Futures and Altcoins Futures for margin trading
                </Typography>

                    <Typography className={classes.textColor} paragraph>
                        Delta Exchange is a premier destination for Bitcoin and Altcoin margin trading. We offer tight spreads and high liquidity on Bitcoin and other Altcoins for leveraged trading with margin. Our Bitcoin prices (for futures) and prices on other cryptocurrency (for futures) are highly competitive and best in the market. If you are interested in showing quotes on Bitcoin or other futures do check out our fee section. We offer standard maker rebates.
                 </Typography>

                    <Typography variant="h6" className={classes.textColor} paragraph>
                        Leveraged Trading – Futures Trading, Margin Trading is risky – Use Caution.
                 </Typography>

                    <Typography className={classes.textColor} paragraph>
                        Leveraged trading and margin trading involves risk. Trades can incur huge losses and can lose their entire invested capital. Delta Exchange advises users to be careful with margin trading and make sure that they fully understand margin trading before making any trades. You can use our guide to margin and futures trading and other resources on our blog to brush up your understanding of margin trading.
                </Typography>

                    <Typography variant="h6" className={classes.textColor} paragraph>
                        Trade Bitcoin, Ether, Ripple, Lumen with upto 100x Leverage
                </Typography>

                    <Typography className={classes.textColor} paragraph>
                        Delta Exchange is one of the best exchanges for trading Bitcoin, Ethereum, Ripple, Stellar Lumen and other top cryptocurrencies with leverage. Bitcoin futures available on Delta Exchange offer upto 100x leverage. Max leverage for every futures contract can be found under the contract details section on the trading terminal. Settlement currency for the margin used and quoting currency for any contract can also be found on the contract details page. You can also refer to Bitcoin futures guide, Ether Futures guide, Ripple futures guide and other futures guides listed in the footer to find details on the contracts available for trading.
                 </Typography>
                </TabPanel>

            </div>

            <Grid className={classes.lastDiv} container justify="space-around" >
                <Grid className={classes.tabs} item xs={12}><Typography align="center" variant="h4" paragraph> Claim your welcome bonus and start trading</Typography></Grid>

                <Grid className={classes.lastItem} container item xs={12} sm={4}>
                    <Grid style={{ position: "relative" }} item xs={12}>
                        <Typography variant="h2" paragraph><span className={classes.lastSpan}>1</span></Typography>
                        <img className={classes.lastImageLeft} src={Down} alt="down" />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography align="center" variant="h6" paragraph>Create Free Account</Typography>
                        <Typography align="center" paragraph>Sign up takes &lt; 1  min and requires only your name and email.</Typography>
                    </Grid>
                </Grid>

                <Grid className={classes.lastItem} container item xs={12} sm={4}>
                    <Grid item xs={12}>
                        <Typography variant="h2" paragraph><span className={classes.lastSpan}>2 </span></Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography align="center" variant="h6" paragraph>Get Your Bonus</Typography>
                        <Typography align="center" paragraph>Transfer BTC to your Delta wallet at no minimum deposit limit.</Typography>
                    </Grid>
                </Grid>

                <Grid className={classes.lastItem} container item xs={12} sm={4}>
                    <Grid style={{ position: "relative" }} item xs={12}>
                        <Typography variant="h2" paragraph><span className={classes.lastSpan}>3</span></Typography>
                        <img className={classes.lastImageRight} src={Up} alt="down" />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography align="center" variant="h6" paragraph>Make Your First Trade</Typography>
                        <Typography align="center" paragraph>Trade futures on BTC or leading altcoins with upto 100x leverage.</Typography>
                    </Grid>
                </Grid>

                <Grid className={classes.lastButtonDiv} item xs={12}><Button className={classes.lastButton}>Register Now</Button></Grid>

            </Grid>

        </>
    );
}

export default TabComponent