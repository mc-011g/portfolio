import { Carousel } from "react-bootstrap";
import ProjectImages from "../util/project-images";

const ProjectCarousel = ({ id }) => {

    const projectImages = ProjectImages(id);

    return (
        <Carousel data-bs-theme="dark">
            {projectImages.map((image, index) => (
                <Carousel.Item key={index}>
                    <img className="project-image img-fluid mb-5" src={image.imgLink} alt={image.alt} />
                </Carousel.Item>
            ))}
        </Carousel >
    );
}

export default ProjectCarousel;