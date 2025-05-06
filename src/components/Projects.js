import LiveProjectButton from "./LiveProjectButton";
import Project from "./Project";
import SourceCodeButton from "./SourceCodeButton";
import Container from "react-bootstrap/Container";

const Projects = () => {
    return (
        <div id="projects">
            <h1 className="section-title">Projects</h1>

            <Container>
                <Project title="NextJS Ecommerce Application"
                    id="ecommerceApp">
                    <b>Summary: </b>
                    <hr />
                    <p>This is an ecommerce website that sells shoes and boots.
                        It features product browsing, filtering, cart functionality, user account, email verification,
                        password resets, authentication and authorization, and integration with Stripe as the payment processor to simulate payments.
                    </p>
                    <b>Technologies used: </b>
                    <hr />
                    <ul>
                        <li>Next.js</li>
                        <li>React</li>
                        <li>Redux</li>
                        <li>TypeScript</li>
                        <li>Tailwind CSS</li>
                        <li>MongoDB Atlas</li>
                        <li>JWT</li>
                        <li>Vercel</li>
                        <li>GitHub</li>
                        <li>GitHub Actions</li>
                        <li>Resend</li>
                        <li>Jest</li>
                        <li>Cypress</li>
                    </ul>
                    <b>Usage: </b>
                    <hr />
                    <ul>
                        <li>
                            <p>
                                Can add, remove and update products of different sizes and quantities to the cart.
                            </p>
                        </li>
                        <li>
                            <p>
                                To use an account, you will need to sign up with an email you have access to, to retrieve the email verification and password reset links.
                            </p>
                        </li>
                        <li>
                            <p>
                                Emails will be sent from 'matthew@matthewcarmichael.pro', they may end up in your spam folder.
                            </p>
                        </li>
                        <li>
                            <p>
                                The checkout will not submit a real payment so use any data for the form fields. You can use the card numbers listed below to give a different result:
                            </p>
                            <ul>
                                <li>
                                    <span>Successful: 4242424242424242</span>
                                </li>
                                <li>
                                    <span>Authorization required: 4000002500003155</span>
                                </li>
                                <li>
                                    <span>Declined: 4000000000009995</span>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div className="project-btns">
                        <SourceCodeButton sourceCodeLink='https://github.com/mc-011g/nextjs-ecommerce-website' />
                        <LiveProjectButton liveProjectLink='https://react-ecommerce-website-navy-ten.vercel.app/' />
                    </div>
                </Project>

                <Project title="Inventory Management App"
                    imageAlt="Inventory management app image"
                    liveProjectLink="https://inventory-management-app-frhqd8ebcecug0hz.westus2-01.azurewebsites.net/login"
                    id="inventoryApp">
                    <b>Summary: </b>
                    <hr />
                    <p>Users can create and manage products, categories, orders, and view key metrics. </p>
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

                <Project title="Real Time Chat App"
                    imageAlt="Real-time chat app image"
                    liveProjectLink="https://chatapp-hqh3fhbhcqetfgd2.westus2-01.azurewebsites.net/"
                    id="chatApp">
                    <b>Summary: </b>
                    <hr />
                    <p>This real time chat application allows users to create an account,
                        create a room, and then send an invitation link to let other users join their
                        room.
                    </p>
                    <p> Chat messaging is in real time as well as notifications. In addition to Spring security, a JWT token is also used for
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
            </Container>
        </div >
    );
};

export default Projects;