import { WindowIcon } from '@heroicons/react/24/solid'
import { Container } from './components/Container'
import { SkillCard } from './components/SkillCard'
import { CircleStackIcon, ClipboardDocumentCheckIcon, QueueListIcon } from '@heroicons/react/24/outline'
import { CircleStackIcon as CircleStackIconSolid } from '@heroicons/react/24/solid'
import { CloudIcon } from '@heroicons/react/24/outline'
import { Project } from './components/Project'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { BackToTopButton } from './components/BackToTopButton'

function App() {

  return (

    <main className='overflow-hidden text-gray-950' id='main-content'>
      <Navbar />

      <header className='scroll-mt-[112px] sm:scroll-mt-[96px] mt-[112px] sm:mt-[96px]' id='about-me'>
        <Container>
          <div className='flex flex-col md:flex-row gap-[32px] py-[32px] items-center'>
            <div className='flex flex-col gap-6 lg:gap-[32px] flex-1'>

              <h1 className='text-[36px]/[36px] md:text-[48px]/[48px] lg:text-[60px]/[60px] font-bold w-full'>Matthew Carmichael</h1>
              <p className='text-[20px]/[24px] md:text-[24px]/[32px] lg:text-[30px]/[40px] text-gray-800'>I am a full-stack <span className='font-bold'>web developer</span> with a focus in developing
                <span className='font-bold'> React.js</span> and <span className='font-bold'>NextJS</span> projects.</p>

              <a className='font-bold cursor-pointer rounded-full text-indigo-50 px-[24px] py-[16px] w-fit transition bg-indigo-600 hover:bg-indigo-800' href="#projects">
                See my Projects
              </a>
            </div>

            <div className='flex flex-1 justify-center overflow-scroll sm:overflow-hidden rounded-[8px] p-2'>
              <div className='min-w-[512px] md:min-w-fit aspect-square relative size-full rounded-[8px]'>
                <div className='
                rounded-[8px] absolute
                w-110 sm:w-110 md:w-70 lg:w-100 xl:w-125
                bottom-0 shadow-md/65
                left-[10%] xl:left-[10%]
                '>
                  <img src='https://reactecommerceapp.blob.core.windows.net/images/real-time-chat-app-chat-page.png' className='object-contain w-full h-full' alt='Stampede Security Inc. Website' />
                </div>

                <div className='
                absolute rounded-[8px]
                w-110 sm:w-110 md:w-70 lg:w-100 xl:w-125
                right-0
                top-[30%] xl:top-[30%] shadow-md/65
                '>
                  <img
                    src='https://reactecommerceapp.blob.core.windows.net/images/stampede-security-website-home-page.png'
                    className='object-cover rounded-[8px]' alt='Stampede Security Inc. Website' />
                </div>

                <div className='
                absolute rounded-[8px]
                w-110 sm:w-110 md:w-70 lg:w-100 xl:w-125 shadow-md/65
                '>
                  <img src='https://reactecommerceapp.blob.core.windows.net/images/nextjs-inventory-app-dashboard.png'
                    className='object-cover rounded-[8px]' alt='NextJS Inventory App Dashboard'
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </header>

      <section aria-labelledby='technical-skills-heading' className='bg-gray-50 scroll-mt-[112px] sm:scroll-mt-[96px]' id='skills'>
        <Container>
          <div className='flex flex-col gap-[32px] flex-1'>
            <h2 id="technical-skills-heading" className='
            text-[30px]/[30px] md:text-[36px]/[36px] lg:text-[48px]/[48px] 
            mb-[16px] font-bold w-full text-gray-950
            '>Technical Skills</h2>

            <div className='grid grid sm:grid-cols-2 md:grid-cols-3 gap-[32px]'>
              <SkillCard>
                <WindowIcon className='size-[64px] min-w-[32px] min-h-[32px]' />
                <div className='flex flex-col gap-[24px]'>
                  <h3 className='text-[24px]/[24px] md:text-[30px]/[30px] lg:text-[36px]/[36px] '>Front-End</h3>
                  <ul className='list-disc ml-[20px]'>
                    <li>NextJS</li>
                    <li>React.js</li>
                    <li>TypeScript</li>
                    <li>Redux</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Tailwind CSS</li>
                  </ul>
                </div>
              </SkillCard>

              <SkillCard>
                <CircleStackIcon className='size-[64px] min-w-[32px]' />
                <div className='flex flex-col gap-[24px]'>
                  <h3 className='text-[24px]/[24px] md:text-[30px]/[30px] lg:text-[36px]/[36px] '>Back-End</h3>
                  <ul className='list-disc ml-[20px]'>
                    <li>Express.js</li>
                    <li>Node.js</li>
                    <li>Java</li>
                    <li>Spring Boot</li>
                    <li>Firebase Auth</li>
                    <li>JWT</li>
                  </ul>
                </div>
              </SkillCard>

              <SkillCard>
                <CircleStackIconSolid className='size-[64px] min-w-[32px]' />
                <div className='flex flex-col gap-[24px]'>
                  <h3 className='text-[24px]/[24px] md:text-[30px]/[30px] lg:text-[36px]/[36px]'>Database</h3>
                  <ul className='list-disc ml-[20px]'>
                    <li>MongoDB Atlas</li>
                    <li>MongoDB</li>
                  </ul>
                </div>
              </SkillCard>

              <SkillCard>
                <CloudIcon className='size-[64px] min-w-[32px]' />
                <div className='flex flex-col gap-[24px]'>
                  <h3 className='text-[24px]/[24px] md:text-[30px]/[30px] lg:text-[36px]/[36px] '>DevOps</h3>
                  <ul className='list-disc ml-[20px]'>
                    <li>Docker</li>
                    <li>Vercel</li>
                    <li>Microsoft Azure</li>
                    <li>Firebase Hosting</li>
                    <li>Google Cloud</li>
                    <li>GitHub Actions</li>
                  </ul>
                </div>
              </SkillCard>

              <SkillCard>
                <ClipboardDocumentCheckIcon className='size-[64px] min-w-[32px]' />
                <div className='flex flex-col gap-[24px]'>
                  <h3 className='text-[24px]/[24px] md:text-[30px]/[30px] lg:text-[36px]/[36px] '>Testing</h3>
                  <ul className='list-disc ml-[20px]'>
                    <li>Jest</li>
                    <li>Vitest</li>
                    <li>Cypress</li>
                  </ul>
                </div>
              </SkillCard>

              <SkillCard>
                <QueueListIcon className='size-[64px] min-w-[32px]' />
                <div className='flex flex-col gap-[24px]'>
                  <h3 className='text-[24px]/[24px] md:text-[30px]/[30px] lg:text-[36px]/[36px] '>Version Control</h3>
                  <ul className='list-disc ml-[20px]'>
                    <li>Git</li>
                    <li>GitHub</li>
                  </ul>
                </div>
              </SkillCard>
            </div>
          </div >
        </Container >
      </section>

      <section aria-labelledby='projects-section-heading' className='scroll-mt-[112px] sm:scroll-mt-[96px]' id='projects'>
        <Container>
          <h2 id="projects-section-heading" className='text-[30px]/[30px] md:text-[36px]/[36px] lg:text-[48px]/[48px] mb-[16px] font-bold'>Projects</h2>

          <Project
            id='nextjs-inventory-app'
            liveProjectLink="https://nextjs-inventory-app-rose.vercel.app/"
            imageLinks={[
              "https://reactecommerceapp.blob.core.windows.net/images/nextjs-inventory-app-dashboard.png",
              "https://reactecommerceapp.blob.core.windows.net/images/nextjs-inventory-app-create-product.png",
              "https://reactecommerceapp.blob.core.windows.net/images/nextjs-inventory-app-products-page.png",
              "https://reactecommerceapp.blob.core.windows.net/images/nextjs-inventory-app-create-order.png",
              "https://reactecommerceapp.blob.core.windows.net/images/nextjs-inventory-app-orders-page.png",
              "https://reactecommerceapp.blob.core.windows.net/images/nextjs-inventory-app-edit-order.png",
              "https://reactecommerceapp.blob.core.windows.net/images/nextjs-inventory-app-login-page.png",
              "https://reactecommerceapp.blob.core.windows.net/images/nextjs-inventory-app-profile-page.png"
            ]}
            sourceCodeLink="https://github.com/mc-011g/nextjs-inventory-app"
            summary={[
              "This is an inventory management app built with Next.js. It allows users to view key metrics, create, edit, and delete products, categories, and orders, as well as manage their account. Google sign in is also included."
            ]}
            title="NextJS Inventory App"
            skills={[
              "Next.js",
              "TypeScript",
              "React.js",
              "Tailwind CSS",
              "Vercel",
              "Firebase Auth",
              "GitHub",
              "MongoDB Atlas"
            ]}>
          </Project>

          <Project
            id='stampede-security-inc-website'
            liveProjectLink="https://www.stampedesecurity.com/"
            imageLinks={[
              "https://reactecommerceapp.blob.core.windows.net/images/stampede-security-website-home-page.png",
              "https://reactecommerceapp.blob.core.windows.net/images/stampede-security-website-about-us-page.png",
              "https://reactecommerceapp.blob.core.windows.net/images/stampede-security-website-home-security-cameras-section.png",
              "https://reactecommerceapp.blob.core.windows.net/images/stampede-security-website-resources-page.png",
              "https://reactecommerceapp.blob.core.windows.net/images/stampede-security-website-faqs-section.png",
              "https://reactecommerceapp.blob.core.windows.net/images/stampede-security-website-contact-us-page.png"
            ]}
            summary={[
              "This is a Next.js website I created for my family's security system installation business.",
              "The project is deployed and hosted using Vercel, and the contact form submission emails are sent using Resend."
            ]}
            title="Stampede Security Inc. Website"
            skills={[
              "Next.js",
              "TypeScript",
              "React.js",
              "Tailwind CSS",
              "Vercel",
              "Resend",
              "GitHub"
            ]}>
          </Project>

          <Project
            id='real-time-chat-app'
            liveProjectLink='https://real-time-chat-app-4c9c5.web.app/'
            sourceCodeLink='https://github.com/mc-011g/real-time-chat-app/tree/nodejs-backend'
            imageLinks={[
              'https://reactecommerceapp.blob.core.windows.net/images/real-time-chat-app-chat-page.png',
              'https://reactecommerceapp.blob.core.windows.net/images/real-time-chat-app-group-participants.png'
            ]}
            summary={[
              "This real time chat application allows users to create an account, create a group, and then send an invitation link to let other users join their group.",
              "Chat messaging is in real time as well as notifications by using Socket.IO. Firebase Auth is used for authentication.",
              "Testing for this app currently includes working unit and integration tests using Vitest.",
              "The project uses GitHub Actions for running all the tests, as well as building and deploying the front and back-end.",
              "The back-end is deployed using Google's Cloud Run platform and the front-end uses Firebase Hosting"
            ]}
            title='Real Time Chat App'
            usage={["To join a group, get an invitation link from another user and append the link to the end of the chat app link, then click join."]}
            skills={[
              "TypeScript",
              "JavaScript",
              "React.js",
              "Express.js",
              "Socket.io",
              "Redux",
              "Tailwind CSS",
              "MongoDB Atlas",
              "Firebase Hosting",
              "Firebase Auth",
              "Google Cloud",
              "GitHub",
              "GitHub Actions",
              "Vitest"
            ]}
          >
          </Project>

          <Project
            id='nextjs-ecommerce-website'
            imageLinks={[
              'https://reactecommerceapp.blob.core.windows.net/images/nextjs-ecommerce-website-home-page.png',
              'https://reactecommerceapp.blob.core.windows.net/images/nextjs-ecommerce-website-all-products-page.png',
              'https://reactecommerceapp.blob.core.windows.net/images/nextjs-ecommerce-website-shoes-page.png',
              'https://reactecommerceapp.blob.core.windows.net/images/nextjs-ecommerce-website-product-page.png',
              'https://reactecommerceapp.blob.core.windows.net/images/nextjs-ecommerce-website-add-product-to-cart.png',
              'https://reactecommerceapp.blob.core.windows.net/images/nextjs-ecommerce-website-cart-page.png',
              'https://reactecommerceapp.blob.core.windows.net/images/nextjs-ecommerce-website-login-page.png',
              'https://reactecommerceapp.blob.core.windows.net/images/nextjs-ecommerce-website-register-account-page.png',
              'https://reactecommerceapp.blob.core.windows.net/images/nextjs-ecommerce-website-search-results-dropdown.png',
              'https://reactecommerceapp.blob.core.windows.net/images/nextjs-ecommerce-website-forgot-password-page.png'
            ]}
            liveProjectLink='https://react-ecommerce-website-navy-ten.vercel.app/'
            sourceCodeLink='https://github.com/mc-011g/nextjs-ecommerce-website'
            summary={[
              "This is an ecommerce website that sells shoes and boots.",
              "It features product browsing and filtering, a shopping cart, user account, email verification, password resets, authentication and authorization, and integration with Stripe as the payment processor to simulate payments.",
              "Testing currently includes working unit and integration tests using Jest.",
              "GitHub Actions is used for only running the tests, while the project is deployed with Vercel."
            ]}
            title="NextJS Ecommerce Website"
            skills={[
              "Next.js",
              "TypeScript",
              "React.js",
              "Redux",
              "Tailwind CSS",
              "Resend",
              "GitHub",
              "MongoDB Atlas",
              "JWT",
              "Jest",
              "Vercel"
            ]}
            usage={[
              "Can add, remove and update products of different sizes and quantities to the cart.",
              "To use an account, you will need to sign up with an email you have access to, to retrieve the email verification, and password reset links.",
              "Emails will be sent from 'no-reply@matthewcarmichael.pro', they may end up in your spam folder.",
              "The checkout will not submit a real payment, so use any data for the form fields. You can use the card numbers listed below to give a different result:"
            ]}>
            <p className='font-bold text-[18px]/[24px] md:text-[20px]/[24px] lg:text-[24px]/[24px]'>Test Card Numbers</p>
            <ul>
              <li>Successful: <span className='font-bold'>4242424242424242</span></li>
              <li>Authorization required: <span className='font-bold'>4000002500003155</span></li>
              <li>Declined: <span className='font-bold'>4000000000009995</span></li>
            </ul>
          </Project>

          <Project
            id='inventory-management-app-java'
            imageLinks={[
              'https://reactecommerceapp.blob.core.windows.net/images/inventory-dashboard.png',
              'https://reactecommerceapp.blob.core.windows.net/images/inventory-create-product.png',
              'https://reactecommerceapp.blob.core.windows.net/images/inventory-products.png',
              'https://reactecommerceapp.blob.core.windows.net/images/inventory-categories.png',
              'https://reactecommerceapp.blob.core.windows.net/images/inventory-orders.png',
              'https://reactecommerceapp.blob.core.windows.net/images/inventory-edit-order.png',
              'https://reactecommerceapp.blob.core.windows.net/images/inventory-profile.png',
              'https://reactecommerceapp.blob.core.windows.net/images/inventory-register.png',
              'https://reactecommerceapp.blob.core.windows.net/images/inventory-login.png'
            ]}
            liveProjectLink='https://inventory-management-app-frhqd8ebcecug0hz.westus2-01.azurewebsites.net/'
            sourceCodeLink='https://github.com/mc-011g/Inventory-Management-App'
            summary={[
              "Users can create and manage their products, categories, orders, and view key metrics.",
              "Spring Security is used for authentication and authorization.",
              "GitHub Actions is used to build and deploy the project to Azure."
            ]}
            title="Inventory Management App (Spring Boot/Java)"
            skills={[
              "Java",
              "Spring Boot",
              "Thymeleaf",
              "HTML",
              "CSS",
              "Bootstrap",
              "JavaScript",
              "MongoDB Atlas",
              "Microsoft Azure",
              "GitHub"
            ]}
          >
          </Project>
        </Container>
      </section>

      <section aria-labelledby='contact-me-heading' className='bg-gray-100' id='contact-me'>
        <Container>
          <div className='mx-auto text-center flex flex-col gap-[32px] lg:gap-[48px]'>
            <h2 id="contact-me-heading" className='font-bold text-[30px]/[30px] md:text-[36px]/[36px] lg:text-[48px]/[48px] mb-[16px]'>Contact Me</h2>
            <p className='text-[18px]/[18px] md:text-[20px]/[20px] lg:text-[24px]/[24px]'>m.carmichael235@gmail.com</p>
          </div>
        </Container>
      </section>

      <Footer />

      <BackToTopButton />

    </main>
  )
}

export default App