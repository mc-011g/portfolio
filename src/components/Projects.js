import LiveProjectButton from "./LiveProjectButton";
import Project from "./Project";
import SourceCodeButton from "./SourceCodeButton";
import Container from "react-bootstrap/Container";

const Projects = () => {
    return (
        <div id="projects">
            <h1 className="section-title">Projects</h1>

            <Container>
                <Project title="Stampede Security Inc. Website"
                    imageAlt="Stampede Security Inc. website landing page hero image"
                    liveProjectLink="https://www.stampedesecurity.com/"
                    id="stampedeSecurityIncWebsite">
                    <b>Summary: </b>
                    <hr />
                    <p>This is a Next.js website I created for my family's security system installation business.</p>
                    <p>The project is deployed and hosted using Vercel, and the contact form submission emails are sent using Resend.</p>
                    <b>Technologies used:</b>
                    <hr></hr>
                    <ul className="text-start">
                        <li>Next.js</li>
                        <li>TypeScript</li>
                        <li>React JS</li>
                        <li>Tailwind CSS</li>
                        <li>Vercel</li>
                        <li>Resend</li>
                        <li>GitHub</li>
                    </ul>
                    <div className="project-btns">
                        <LiveProjectButton liveProjectLink='https://www.stampedesecurity.com/' />
                    </div>
                </Project>

                <Project title="Real Time Chat App"
                    imageAlt="Real-time chat app image"
                    liveProjectLink="https://real-time-chat-app-4c9c5.web.app/"
                    id="chatApp">
                    <b>Summary: </b>
                    <hr />
                    <p>
                        This real time chat application allows users to create an account,
                        create a group, and then send an invitation link to let other users join their
                        group.
                    </p>
                    <p>
                        Chat messaging is in real time as well as notifications by using Socket.IO. Firebase Auth is used for authentication.
                    </p>
                    <p>
                        Testing includes unit and integration tests using Vitest. Cypress was used for end-to-end tests that cover main user flows.
                    </p>
                    <p>
                        The project uses GitHub Actions for running all the tests, as well as building and deploying the front and back-end.
                    </p>
                    <p>
                        The back-end is deployed using Google's Cloud Run platform and the front-end uses Firebase Hosting.
                    </p>
                    <b>Technologies used:</b>
                    <hr></hr>
                    <ul className="text-start">
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>Socket.IO</li>
                        <li>Express JS</li>
                        <li>React JS</li>
                        <li>Redux</li>
                        <li>Tailwind CSS</li>
                        <li>MongoDB Atlas</li>
                        <li>Firebase Hosting</li>
                        <li>Firebase Auth</li>
                        <li>Google Cloud</li>
                        <li>GitHub</li>
                        <li>GitHub Actions</li>
                        <li>Vitest</li>
                        <li>Cypress</li>
                    </ul>
                    <div className="project-btns">
                        <SourceCodeButton sourceCodeLink='https://github.com/mc-011g/real-time-chat-app/tree/nodejs-backend' />
                        <LiveProjectButton liveProjectLink='https://real-time-chat-app-4c9c5.web.app/' />
                    </div>
                </Project>

                <Project title="NextJS Ecommerce Website"
                    id="ecommerceApp">
                    <b>Summary: </b>
                    <hr />
                    <p>This is an ecommerce website that sells shoes and boots.
                        It features product browsing, filtering, cart functionality, user account, email verification,
                        password resets, authentication and authorization, and integration with Stripe as the payment processor to simulate payments.
                    </p>
                    <p>
                        Testing includes unit and integration tests using Jest. Cypress was used for end-to-end tests that cover main user flows.
                    </p>
                    <p>
                        Github Actions is used for only running the tests, while the project is deployed with Vercel.
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
                                Emails will be sent from 'no-reply@matthewcarmichael.pro', they may end up in your spam folder.
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
                    <p>Users can create and manage products, categories, orders, and view key metrics.</p>
                    <p>Spring Security is used for authentication and authorization. </p>
                    <p>GitHub Actions is used to build and deploy the project to Azure.</p>
                    <b>Technologies used:</b>
                    <hr />
                    <ul className="text-start">
                        <li>Java</li>
                        <li>Spring Boot</li>
                        <li>Thymeleaf</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Bootstrap</li>
                        <li>JavaScript</li>
                        <li>MongoDB Atlas</li>
                        <li>Microsoft Azure</li>
                        <li>GitHub</li>
                        <li>GitHub Actions</li>
                    </ul>
                    <div className="project-btns">
                        <SourceCodeButton sourceCodeLink='https://github.com/mc-011g/Inventory-Management-App' />
                        <LiveProjectButton liveProjectLink='https://inventory-management-app-frhqd8ebcecug0hz.westus2-01.azurewebsites.net/login' />
                    </div>
                </Project>
            </Container>
        </div >
    );
};

export default Projects;