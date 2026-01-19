import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import { useState } from "react";

export const Navbar = () => {

    const [dropdown, setDropdown] = useState<boolean>(false);

    const toggleDropdown = () => {
        setDropdown(!dropdown);
    }

    return (
        <div className={`fixed w-full top-0 shadow-md bg-white z-10 ${!dropdown && 'h-[112px] sm:h-[96px]'} flex justify-center`}>

            <nav className="w-full px-[16px] py-[24px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] flex flex-col lg:flex-row justify-between lg:items-center gap-[24px]">
                <a href="#about-me" className="hidden lg:block text-[36px]/[36px] font-bold">Matthew Carmichael</a>

                <div className="hidden lg:flex flex-row gap-[24px] items-center">
                    <a href="#about-me" className="h-[32px] hover:border-b-2 hover:font-bold hover:text-indigo-600 transition duration-300">About Me</a>
                    <a href="#skills" className="h-[32px] hover:border-b-2 hover:font-bold hover:text-indigo-600 transition">Skills</a>
                    <a href="#projects" className="h-[32px] hover:border-b-2 hover:font-bold hover:text-indigo-600 transition">Projects</a>
                    <a href="#contact-me" className=" h-[32px] hover:border-b-2 hover:font-bold hover:text-indigo-600 transition">Contact Me</a>
                    <a href="https://www.linkedin.com/in/matthew-carmichael/" rel="noopener" target="_blank">
                        <img src="/LI-In-Bug.png" alt="LinkedIn Icon logo" className="h-[32px] aspect-auto" />
                    </a>
                    <a href="https://github.com/mc-011g" rel="noopener" target="_blank">
                        <img src="/github-mark.svg" alt="GitHub Icon logo" className="size-[32px]" />
                    </a>
                </div>

                <div className="lg:hidden flex flex-row items-center justify-between gap-[24px]">
                    <a href="#about-me" className="text-[32px]/[32px] font-bold">Matthew Carmichael</a>
                    <button type="button" className="hover:cursor-pointer" onClick={toggleDropdown} aria-label="Toggle show header dropdown button">
                        {!dropdown ?
                            <Bars3Icon className="size-[48px]" />
                            :
                            <XMarkIcon className="size-[48px]" />
                        }
                    </button>
                </div>

                {dropdown &&
                    <div className="flex flex-col lg:hidden gap-[24px]">
                        <div className="flex flex-col gap-[8px]">
                            <a href="#about-me" onClick={toggleDropdown} className="h-[32px] hover:border-b-2 hover:font-bold hover:text-indigo-600 transition duration-300">About Me</a>
                            <a href="#skills" onClick={toggleDropdown} className="h-[32px]  hover:border-b-2 hover:font-bold hover:text-indigo-600 transition">Skills</a>
                            <a href="#projects" onClick={toggleDropdown} className="h-[32px] hover:border-b-2 hover:font-bold hover:text-indigo-600 transition">Projects</a>
                            <a href="#contact-me" onClick={toggleDropdown} className=" h-[32px]  hover:border-b-2 hover:font-bold hover:text-indigo-600 transition">Contact Me</a>
                        </div>

                        <div className="flex flex-row gap-[24px]" id="abc">
                            <a href="https://www.linkedin.com/in/matthew-carmichael/" rel="noopener" target="_blank">
                                <img src="/LI-In-Bug.png" alt="LinkedIn Icon logo" className="h-[32px] aspect-auto" />
                            </a>
                            <a href="https://github.com/mc-011g" rel="noopener" target="_blank">
                                <img src="/github-mark.svg" alt="GitHub Icon logo" className="size-[32px]" />
                            </a>
                        </div>
                    </div>
                }
            </nav>
        </div>
    )
}