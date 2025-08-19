import Button from "react-bootstrap/Button";

const AboutMe = () => {
    return (
        <div id="about-me">
            <div className="about-me-name">Matthew Carmichael</div>
            <p className="py-3 fs-3">I am a full-stack web developer that creates dynamic and responsive web applications.
            </p>
            <div>
                <a href="#projects">
                    <Button variant="dark" className="mt-3 project-btn rounded-pill" id="navigate-to-projects">
                        See My Projects
                    </Button>
                </a>
            </div>
        </div>
    );
}

export default AboutMe;