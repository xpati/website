import React, {useContext} from "react";
import { makeStyles } from "@material-ui/core";
import { motion } from "framer-motion";
import LoaderContext from "../contexts/loaderContext";

const LoaderContainer = ({ children }) => {
    const {setIsLoading} = useContext(LoaderContext)
    const classes = useStyles();
    return (
        <motion.div
            initial={{
                y:0
            }}
            animate={{
                y:"-100vh"
            }}
            transition={{
                delay:0.1,
                duration:0.1
            }}
            onAnimationComplete={definition => {
                setIsLoading(false)
              }}
            className={classes.container}
            >
            <div className={classes.content}>{children}</div>
        </motion.div>
    );
};

const useStyles = makeStyles((theme) => ({
    container: {
        position:"fixed",
        top:0,
        left:0,
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'black',
        zIndex: 10000,
    },
    content: {
        margin: "0 auto",
    },
}));

export default LoaderContainer;
