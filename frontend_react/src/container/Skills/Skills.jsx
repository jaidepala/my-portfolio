import React, { useState, useEffect } from "react";

// Motion
import { motion } from "framer-motion";
import { Tooltip as ReactTooltip } from "react-tooltip"

// App Wrap
import { AppWrap, MotionWrap } from "../../wrapper";

import { urlFor, client } from "../../client";

// SCSS
import "./Skills.scss";

const Skills = () => {
    const [experiences, setExperiences] = useState([]);
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        const query = '*[_type == "experiences" && !(_id in path("drafts.**"))] | order(year asc)';
        const skillsQuery = '*[_type == "skills" && !(_id in path("drafts.**"))] | order(_updatedAt asc)';

        client.fetch(query).then((data) => {
            setExperiences(data);
        });
        client.fetch(skillsQuery).then((skillsData) => {
            setSkills(skillsData);
        });
    }, []);

    return (
        <>
            <h2 className="head-text">Skills & Experience</h2>
            <div className="app__skills-container">
                <motion.div className="app__skills-list">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={`app-skill-item-${index}`}
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5 }}
                            className="app__skills-item app__flex"
                        >
                            <div
                                className="app__flex"
                                style={{ backgroundColor: skill.bgColor }}
                            >
                                <img
                                    src={urlFor(skill.icon)}
                                    alt={skill.name}
                                />
                            </div>
                            <p className="p-text">{skill.name}</p>
                        </motion.div>
                    ))}
                </motion.div>
                <motion.div className="app__skills-exp">
                    {experiences.map((experience, index) => (
                        <motion.div
                            className="app__skills-exp-item"
                            key={`app-experience-item-year-${index}`}
                        >
                            <div className="app__skills-exp-year">
                                <p className="bold-text">{experience.year}</p>
                            </div>
                            <motion.div className="app__skills-exp-works">
                                {experience?.works?.map((work, workIndex) => (
                                    <>
                                        <motion.div
                                            key={`app-experience-item-${workIndex}`}
                                            whileInView={{ opacity: [0, 1] }}
                                            transition={{ duration: 0.5 }}
                                            className="app__skills-exp-work app__flex"
                                            data-tip
                                            data-tooltip-id={`app-experience-${index}-work-${workIndex}`}
                                        >
                                            <h4 className="bold-text">
                                                {work.name}
                                            </h4>
                                            <p className="p-text">
                                                {work.company}
                                            </p>
                                        </motion.div>
                                        <ReactTooltip
                                            id={`app-experience-${index}-work-${workIndex}`}
                                            effect="solid"
                                            arrowColor="#fff"
                                            className="skills-tooltip"
                                        >
                                            {work.desc}
                                        </ReactTooltip>
                                    </>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </>
    );
};

export default AppWrap(MotionWrap(Skills, 'app__skills'), 'skills', 'app__whitebg');
