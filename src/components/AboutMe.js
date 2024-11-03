import Button from "react-bootstrap/Button";

const AboutMe = () => {
    return (
        <div id="about-me">
            <div className="about-me-name">Matthew Carmichael</div>
            <h3 className="py-3">I am a full-stack web developer that creates dynamic and responsive web applications
            </h3>
            <div>
                <a href="#projects">
                    <Button variant="outline-dark" className="mt-3" id="navigate-to-projects">
                        See my projects
                    </Button>
                </a>
            </div>
        </div>
    );
}

export default AboutMe;