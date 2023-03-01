import React, { useState, useEffect } from "react";

// Framer Motion
import { motion } from "framer-motion";

// SCSS
import "./About.scss";

import { client, urlFor } from '../../client';

// Higher Order Components
import { MotionWrap, AppWrap} from "../../wrapper";

const About = () => {

    const [abouts, setAbouts] = useState([]);

    useEffect(() => {
        const query = '*[_type=="abouts"]';

        client.fetch(query)
        .then((data) => setAbouts(data));
    }, []);

    return (<>
        <h2 className="head-text">
            I Know That <span> Good Dev </span><br /> Means<span> Good Business </span>
        </h2>
        <div className="app__profiles">
            {
                abouts.map((about, index) => (
                    <motion.div
                        key={`about-${index}`}
                        className="app__profile-item"
                        whileInView={{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5, type: 'tween' }}>

                        <img src={urlFor(about.imgUrl)} alt={about.title} />
                        <h2 className="bold-text" style={{ marginTop: 20 }}>
                            { about.title }
                        </h2>
                        <p className="p-text" style={{ marginTop: 10 }}>
                            { about.description }
                        </p>
                    </motion.div>
                ))
            }
        </div>
    </>);
};
export default AppWrap(MotionWrap(About, 'app__about'), 'about', 'app__whitebg');
