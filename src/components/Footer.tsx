export const Footer = () => {

    return (
        <footer className="bg-white">
            <div className="mx-auto px-[16px] py-[48px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] flex flex-row justify-between items-center flex-wrap gap-[24px]">

                <div className="flex flex-col gap-[24px]">
                    <a href="#about-me" className="text-[36px]/[36px] font-bold">Matthew Carmichael</a>

                    <div className="flex md:hidden flex-row gap-[24px] items-center">
                        <a href="https://www.linkedin.com/in/matthew-carmichael/" rel="noopener" target="_blank">
                            <img src="/LI-In-Bug.png" alt="LinkedIn Icon logo" className="h-[32px] aspect-auto" />
                        </a>
                        <a href="https://github.com/mc-011g" rel="noopener" target="_blank">
                            <img src="/github-mark.svg" alt="GitHub Icon logo" className="size-[32px]" />
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-2 flex-row gap-[24px] items-center">
                    <a href="#about-me" className="h-[32px] hover:border-b-2 hover:font-bold hover:text-indigo-600 transition duration-300">About Me</a>
                    <a href="#skills" className="h-[32px]  hover:border-b-2 hover:font-bold hover:text-indigo-600 transition">Skills</a>
                    <a href="#projects" className="h-[32px] hover:border-b-2 hover:font-bold hover:text-indigo-600 transition">Projects</a>
                    <a href="#contact-me" className=" h-[32px]  hover:border-b-2 hover:font-bold hover:text-indigo-600 transition">Contact Me</a>
                </div>

                <div className="hidden md:flex flex-row gap-[24px] items-center">
                    <a href="https://www.linkedin.com/in/matthew-carmichael/" rel="noopener" target="_blank">
                        <img src="/LI-In-Bug.png" alt="LinkedIn Icon logo" className="h-[32px] aspect-auto" />
                    </a>
                    <a href="https://github.com/mc-011g" rel="noopener" target="_blank">
                        <img src="/github-mark.svg" alt="GitHub Icon logo" className="size-[32px]" />
                    </a>
                </div>
            </div>
        </footer>
    )
}