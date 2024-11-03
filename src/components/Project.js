const Project = ({ title, imageLink, imageAlt, children, id, liveProjectLink }) => {
    return (
        <div>
            <div id={id} className="project-container mt-3">
                <h3 className="mb-5 text-center">{title}</h3>
                <a href={liveProjectLink} target="_blank"
                    rel="noopener noreferrer">
                    <img className="project-image img-fluid" src={imageLink} alt={imageAlt} />
                </a>
                <div className="mt-3">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Project;