import LiveProjectButton from "./LiveProjectButton";
import Project from "./Project";
import SourceCodeButton from "./SourceCodeButton";
import ecommerceImage from '../images/ecommerce-store.png';
import inventoryImage from '../images/inventory-app.png';
import realTimeChatAppImage from '../images/real-time-chat-app.png';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Projects = () => {
    return (
        <div id="projects">
            <h1 className="section-title">Projects</h1>
            <Container>
                <Row>
                    <Col md={6} lg={4}>
                        <Project title="React Ecommerce Application"
                            imageLink={ecommerceImage}
                            imageAlt="Ecommerce store image"
                            liveProjectLink="https://reactecommercewebsite-g3emhzfae3dkcnfj.westus2-01.azurewebsites.net/"
                            id="ecommerceApp">
                            <p>This is an ecommerce website that focuses on selling shoes.
                                It uses Stripe as the payment processer. Fake payment data can be used to
                                create a payment as a demo. Password reset links are sent to a user's email
                                when requested.
                            </p>
                            <p>Test data: </p>
                            <p>Use one of the card numbers below to make a payment with any valid information
                                for the rest of the fields. Each card number will have a different result.</p>
                            <ul>
                                <li>Successful: 4242424242424242</li>
                                <li>Authorization required: 4000002500003155</li>
                                <li>Declined: 4000000000009995</li>
                            </ul>
                            <b>Technologies used</b>
                            <hr />
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>Express JS</li>
                                <li>React JS</li>
                                <li>MongoDB Atlas</li>
                                <li>Azure</li>
                                <li>GitHub</li>
                                <li>GitHub Actions</li>
                            </ul>
                            <div className="project-btns">
                                <SourceCodeButton sourceCodeLink='https://github.com/mc-011g/react-ecommerce-website' />
                                <LiveProjectButton liveProjectLink='https://reactecommercewebsite-g3emhzfae3dkcnfj.westus2-01.azurewebsites.net/' />
                            </div>
                        </Project>
                    </Col>

                    <Col md={6} lg={4}>
                        <Project title="Inventory Management App"
                            imageLink={inventoryImage}
                            imageAlt="Inventory management app image"
                            liveProjectLink="https://inventory-management-app-frhqd8ebcecug0hz.westus2-01.azurewebsites.net/login"
                            id="inventoryApp"
                        >
                            <p>Users can add, edit, remove, and search
                                for products. </p>
                            <b>Technologies used</b>
                            <hr />
                            <ul className="text-start">
                                <li>Java</li>
                                <li>Spring Boot</li>
                                <li>Thymeleaf</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>MongoDB Atlas</li>
                                <li>Azure</li>
                                <li>GitHub</li>
                                <li>GitHub Actions</li>
                            </ul>
                            <div className="project-btns">
                                <SourceCodeButton sourceCodeLink='https://github.com/mc-011g/Inventory-Management-App' />
                                <LiveProjectButton liveProjectLink='https://inventory-management-app-frhqd8ebcecug0hz.westus2-01.azurewebsites.net/login' />
                            </div>
                        </Project>
                    </Col>

                    <Col md={12} lg={4}>
                        <Project title="Real Time Chat App"
                            imageLink={realTimeChatAppImage}
                            imageAlt="Real-time chat app image"
                            liveProjectLink="https://chatapp-hqh3fhbhcqetfgd2.westus2-01.azurewebsites.net/"
                            id="chatApp"
                        >
                            <p>In this real time chat application, users can create an account,
                                create a room, and then send an invitation link to let other users join their
                                room. Chat messaging is in real time as well as notifications. In addition to Spring security, a JWT token is also used for
                                authentication for the web socket connection and API.
                            </p>
                            <b>Technologies used</b>
                            <hr></hr>
                            <ul className="text-start">
                                <li>Java</li>
                                <li>Web sockets</li>
                                <li>Spring Boot</li>
                                <li>React JS</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>MongoDB Atlas</li>
                                <li>Azure</li>
                                <li>GitHub</li>
                                <li>GitHub Actions</li>
                            </ul>
                            <div className="project-btns">
                                <SourceCodeButton sourceCodeLink='https://github.com/mc-011g/real-time-chat-app' />
                                <LiveProjectButton liveProjectLink='https://chatapp-hqh3fhbhcqetfgd2.westus2-01.azurewebsites.net/' />
                            </div>
                        </Project>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Projects;