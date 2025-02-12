import ReturnToTopArrow from "./ReturnToTopArrow.js";
import { useRef } from "react";
import CustomNavbar from "./CustomNavbar.js";
import Projects from "./Projects.js";
import Skills from "./Skills.js";
import AboutMe from "./AboutMe.js";

const Portfolio = () => {

    const pageTop = useRef(null);
    const returnToTop = () => {
        pageTop.current?.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <>
            <div ref={pageTop} />
            <CustomNavbar />
            <AboutMe />
            <Skills />
            <Projects />
            <ReturnToTopArrow returnToTop={returnToTop} ></ReturnToTopArrow>
        </>
    );
};

export default Portfolio;