import { ArrowUpCircleIcon } from "@heroicons/react/24/solid"

export const BackToTopButton = () => {

    return (
        <a href="#about-me" className="hover:cursor-pointer bottom-[16px] right-[16px] rounded-full bg-white absolute fixed" aria-label="Back to top button">
            <ArrowUpCircleIcon className="size-[48px]" />
        </a>
    )
}