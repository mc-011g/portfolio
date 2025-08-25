import Container from "react-bootstrap/Container";

const Skills = () => {
    return (
        <div id="skills">
            <Container>
                <h1 className="section-title">Technical Skills</h1>

                <div className="d-flex flex-wrap flex-row gap-4 justify-content-center">

                    <div className="skills-container shadow">
                        <div className="d-flex flex-row gap-5">
                            <i className="bi bi-window fs-1" />
                            <div>
                                <h2 className="mb-4">Front-End</h2>
                                <ul className="ps-3 ms-0">
                                    <li>
                                        Next.js
                                    </li>
                                    <li>
                                        React JS
                                    </li>
                                    <li>
                                        TypeScript
                                    </li>
                                    <li>
                                        Redux
                                    </li>
                                    <li>
                                        HTML
                                    </li>
                                    <li>
                                        CSS
                                    </li>
                                    <li>
                                        JavaScript
                                    </li>
                                    <li>
                                        Bootstrap
                                    </li>
                                    <li>
                                        Tailwind CSS
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="skills-container shadow">
                        <div className="d-flex flex-row gap-5">
                            <i class="bi bi-server fs-1"></i>
                            <div>
                                <h2 className="mb-4">Back-End</h2>
                                <ul className="ps-3 ms-0">
                                    <li>
                                        Express.js
                                    </li>
                                    <li>
                                        Node.js
                                    </li>
                                    <li>
                                        Java
                                    </li>
                                    <li>
                                        Spring Boot
                                    </li>
                                    <li>
                                        Firebase Auth
                                    </li>
                                    <li>
                                        JWT
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="skills-container shadow">
                        <div className="d-flex flex-row gap-5">
                            <i class="bi bi-database fs-1"></i>
                            <div>
                                <h2 className="mb-4">Database</h2>
                                <ul className="ps-3 ms-0">
                                    <li>
                                        MongoDB Atlas
                                    </li>
                                    <li>
                                        MongoDB
                                    </li>
                                    <li>
                                        SQL
                                    </li>
                                    <li>
                                        MySQL
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="skills-container shadow">
                        <div className="d-flex flex-row gap-5">
                            <i class="bi bi-cloud-fill fs-1"></i>
                            <div>
                                <h2 className="mb-4">DevOps</h2>
                                <ul className="ps-3 ms-0">
                                    <li>
                                        Docker
                                    </li>
                                    <li>
                                        Vercel
                                    </li>
                                    <li>
                                        Azure
                                    </li>
                                    <li>
                                        Firebase Hosting
                                    </li>
                                    <li>
                                        Google Cloud
                                    </li>
                                    <li>
                                        GitHub Actions
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="skills-container shadow">
                        <div className="d-flex flex-row gap-5">
                            <i class="bi bi-clipboard2-check fs-1"></i>
                            <div>
                                <h2 className="mb-4">Testing</h2>
                                <ul className="ps-3 ms-0">
                                    <li>
                                        Jest
                                    </li>
                                    <li>
                                        Vitest
                                    </li>
                                    <li>
                                        Cypress
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="skills-container shadow">
                        <div className="d-flex flex-row gap-5">
                            <i class="bi bi-git fs-1"></i>
                            <div>
                                <h2 className="mb-4">Version Control</h2>
                                <ul className="ps-3 ms-0">
                                    <li>
                                        Git
                                    </li>
                                    <li>
                                        GitHub
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Skills;