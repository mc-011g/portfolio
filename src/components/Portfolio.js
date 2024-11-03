import ReturnToTopArrow from "./ReturnToTopArrow";
import { useRef } from "react";
import CustomNavbar from "./CustomNavbar";
import Projects from "./Projects";
import Skills from "./Skills";
import AboutMe from "./AboutMe";

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