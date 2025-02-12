import { Col, Row } from "react-bootstrap";
import ProjectCarousel from "./ProjectCarousel";

const Project = ({ title, children, id }) => {
    return (
        <div id={id} className="project-container mt-3">
            <h3 className="mt-3 mb-5 project-title">{title}</h3>
            <Row>
                <Col xl={9} lg={12} >
                    <ProjectCarousel id={id} />
                </Col>
                <Col xl={3} lg={0} >
                    <div>
                        {children}
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Project;