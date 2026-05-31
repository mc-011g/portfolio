import { Container } from "../components/Container";

const PrivacyNotice = () => {

    return (
        <div className="dark:bg-gray-800 h-[calc(100vh-96px)]">
            <header className='scroll-mt-[112px] sm:scroll-mt-[96px] mt-[112px] sm:mt-[96px] dark:bg-gray-800'>
                <Container dark={false}>
                    <h1 className='text-[36px]/[36px] md:text-[48px]/[48px] lg:text-[60px]/[60px] font-bold w-full'>Privacy Notice</h1>
                </Container>
            </header>

            <section aria-label='privacy-notice' className='dark:bg-gray-800 scroll-mt-[112px] sm:scroll-mt-[96px]' id='privacy-notice'>
                <Container dark={false}>
                    <p className="mb-[24px]">
                        This website uses privacy-friendly analytics provided by Vercel Web Analytics to understand how visitors use the site.
                    </p>

                    <p className="mb-[24px]">
                        The data collected may include page views, referring websites, approximate geographic location (country level), device type, and browser information. This information is collected in an aggregated and anonymous form and is not used to identify individual visitors.
                    </p>

                    <p className="mb-[24px]">
                        This site does not use cookies for analytics purposes.
                    </p>

                    <p className="mb-[24px]">
                        The data is used to evaluate and improve the website, understand its reach, and inform decisions about its content and projects.
                    </p>
                </Container>
            </section>

        </div>
    )
}

export default PrivacyNotice;