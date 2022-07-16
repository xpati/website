import React, { useEffect, useContext } from "react";
import { useAnimation } from "framer-motion";
import loaderContext from "../../contexts/loaderContext";

const Background3d = () => {
    const { isLoading } = useContext(loaderContext);
    const controls = useAnimation();

    useEffect(() => {
        if (!isLoading) {
            controls.start({
                y: 0,
                opacity: 1,
                transition: {
                    delay: 3,
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                },
            });
        } else {
            controls.start({ opacity: 0, y: -50 });
        }
    }, [isLoading, controls]);

    return (
  <></>
    );
};


export default Background3d;
