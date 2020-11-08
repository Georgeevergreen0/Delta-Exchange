import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Image1 from "../asset/images/12_8.png"
import Image2 from "../asset/images/24.png"
import Image3 from "../asset/images/5_10.png"



const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        position: "relative",
        minHeight: "70vh",
        overflowX: "hidden",
        display: "flex",
        alignItems: "center",
        flexWrap: "nowrap",
        padding: "8px 0",
        width: "100%",
    },
    typographyBold: {
        fontWeight: "800"
    },
    typographyBlue: {
        color: "#22a7f0",
        fontWeight: "800"
    },
    typographythin: {
        fontWeight: "lighter"
    },
    button: {
        whiteSpace: "nowrap",
        backgroundColor: "#19bced"
    },
    text: {
        paddingLeft: theme.spacing(3),
        [theme.breakpoints.up("sm")]: {
            paddingLeft: theme.spacing(5),
        },
        minWidth: "60%",
        transition: "all 1s"
    },
    imageDiv: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "nowrap",
        minWidth: "100%",
        transition: "all 2s"
    },
    image: {
        width: "25%",
        maxWidth: "300px",
    },
    float: {
        color: "#fff",
        borderColor: "#fff",
        position: "absolute",
        bottom: "20px",
        right: "20px",
        zIndex: "1000",
        height: "50px",
    }
}));

const Landing = (props) => {
    const classes = useStyles();
    const [move, setMove] = useState(false)

    const handleMove = () => {
        setMove(!move)
    }


    return (
        <div className={classes.root}>
            <div className={classes.text} style={{ transform: move ? "translateX(-200%)" : "translateX(0%)" }} >
                <Typography className={classes.typographyBold} variant="h4">Crypto</Typography>
                <Typography className={classes.typographyBlue} variant="h4">Derivatives</Typography>
                <Typography className={classes.typographythin} variant="h4" paragraph>Exchange </Typography>
                <br />

                <Typography variant="body1" paragraph>Altcoin and Bitcoin Futures Trading. </Typography>
                <Typography variant="body1" paragraph>MOVE Options. Up to 100x Leverage.</Typography>
                <br />

                <Button className={classes.button} variant="contained" color="primary" size="large" >sign up 30 Seconds </Button>

            </div>
            <div className={classes.imageDiv} style={{ transform: move ? "translateX(-60%)" : "translateX(0%)" }}>
                <img className={classes.image} src={Image2} alt="card" />
                <img className={classes.image} src={Image1} alt="card" />
                <img className={classes.image} src={Image3} alt="card" />
            </div>
            <Button className={classes.float} size="small" variant="outlined" onClick={handleMove}  >{move ? <ArrowForwardIosIcon fontSize="small" /> : <ArrowBackIosIcon fontSize="small" />}  </Button>
        </div >

    );
}

export default Landing;
