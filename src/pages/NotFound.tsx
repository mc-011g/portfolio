import { Container } from "../components/Container";

const NotFound = () => {

    return (
        <section aria-label='privacy-notice' className='scroll-mt-[112px] sm:scroll-mt-[96px] mt-[112px] sm:mt-[96px] w-full dark:bg-gray-800 h-[calc(100vh-96px)]' id='privacy-notice'>
            <Container dark={false}>
                <div className="flex flex-col items-center justify-center gap-4 text-center">
                    <h1 className='text-[36px]/[36px] md:text-[48px]/[48px] lg:text-[60px]/[60px] font-bold w-full'>Page Not Found</h1>

                    <a className='font-bold cursor-pointer rounded-full text-indigo-50 px-[24px] py-[16px] w-fit transition bg-indigo-600 hover:bg-indigo-800' href="/">
                        Go Back to Home
                    </a>
                </div>
            </Container>
        </section>
    )
}

export default NotFound;