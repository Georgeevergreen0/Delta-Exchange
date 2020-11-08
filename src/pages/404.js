import React from "react";
import Layout from "../components/Layout";
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3),
        [theme.breakpoints.up("sm")]: {
            padding: theme.spacing(5),
        },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        minHeight: "70vh",
        width: "100vw",
        overflowX: "hidden"
    },
    rootDark: {
        padding: theme.spacing(3),
        [theme.breakpoints.up("sm")]: {
            padding: theme.spacing(5),
        },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "black",
        minHeight: "50vh",
        width: "100%"
    }
}))

export default (props) => {
    const classes = useStyles()
    return (
        <Layout main={<div className={classes.root}> <h1>404</h1></div>}>
            <div className={classes.rootDark}><h1>Page Not Found</h1> </div>
        </Layout>
    )
};