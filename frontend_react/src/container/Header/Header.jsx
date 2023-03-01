import React from "react";

import { motion } from "framer-motion";

// Images
import { images } from "../../constants";

// Higher Order Component
import { AppWrap } from "../../wrapper";

// SCSS
import "./Header.scss";

const scaleVariance = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1]
    },
    transition: {
        duration: 1,
        ease: 'easeInOut'
    }
};

const Header = () => {
    return (
        <div className="app__header app__flex">
            <motion.div
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__header-info">

                    <div className="app__header-badge">
                        <div className="badge-cmp app__flex">
                            <span> 👋 </span>
                            <div style={{ marginLeft: 20 }}>
                                <p className="p-text"> Hello, I am </p>
                                <h1 className="head-text"> Jay </h1>
                            </div>
                        </div>
                        <div className="tag-cmp app__flex">
                            <p className="p-text">Web Developer</p>
                            <p className="p-text">UI/UX Developer</p>
                            <p className="p-text">Freelancer</p>
                        </div>
                    </div>
            </motion.div>

            <motion.div
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className="app__header-img">
                
                <img src={images.profile} alt="profile_bg" />
                <motion.img
                    whileInView={{ scale: [0, 1] }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    className="overlay_circle"
                    src={images.circle}
                    alt="profile_circle"
                />
            </motion.div>
            <motion.div
                variant={scaleVariance}
                whileInView={scaleVariance.whileInView}
                className="app__header-circles">

                {
                    [images.react, images.redux, images.javascript].map((circle, index) => (
                        <div key={`circle-${index}`} className="circle-cmp app__flex">
                            <img src={circle} alt="circle" />
                        </div>
                    ))
                }
            </motion.div>
        </div>
    );
};

export default AppWrap(Header, 'home', '');
