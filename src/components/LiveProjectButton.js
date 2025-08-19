import Button from "react-bootstrap/Button";

const LiveProjectButton = ({ liveProjectLink }) => {
    return (
        <>
            <a href={liveProjectLink}
                target="_blank" rel="noopener noreferrer">
                <Button variant="dark" className="project-btn rounded-pill">
                    Live Project
                </Button>
            </a>
        </>
    );
};

export default LiveProjectButton;