import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid"
import { Button } from "./Button"
import { useState } from "react";

export const Project = ({ title, skills, summary, usage, liveProjectLink, sourceCodeLink, imageLinks, id, children }:
    {
        liveProjectLink: string,
        sourceCodeLink?: string,
        title: string,
        skills: string[],
        summary: string[],
        usage?: string[],
        imageLinks: string[],
        id: string,
        children?: React.ReactNode
    }) => {

    const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

    const handleChangeSelectedImage = (newIndex: number) => {
        if (newIndex > imageLinks.length - 1) {
            newIndex = 0;
        }

        if (newIndex < 0) {
            newIndex = imageLinks.length - 1;
        }

        setSelectedImageIndex(newIndex);
    }

    return (
        <section aria-labelledby={id + '-heading'} className='flex flex-col lg:flex-row py-[64px] gap-[32px] md:gap-[48px] lg:gap-[64px]'>

            <h3 id={id + '-heading'} className='lg:hidden font-bold text-[24px]/[24px] md:text-[30px]/[30px] lg:text-[36px]/[36px] mb-[24px]'>{title}</h3>

            <div className="flex flex-col lg:w-6/10 gap-4 items-center">
                <img src={imageLinks[selectedImageIndex]} alt={title}
                    className='transition duration-600 bg-gray-600 aspect-19/9 object-cover shadow-md rounded-md w-full'>
                </img>

                <div className="flex flex-row gap-6 items-center">

                    <button aria-label="Select previous image button" type="button" className="cursor-pointer hover:bg-gray-300 rounded-full p-1" onClick={() => handleChangeSelectedImage(selectedImageIndex - 1)}>
                        <ArrowLeftIcon className="size-6" />
                    </button>

                    <div className="flex flex-row gap-1">
                        {imageLinks.map((link, index) =>
                            <button aria-label={`Select image ${index + 1} button`} key={link} type="button" className={`border-1 transition ${index === selectedImageIndex ? 'bg-black' : 'bg-white'} size-4 bg-black rounded-full cursor-pointer`} onClick={() => handleChangeSelectedImage(index)} />
                        )}
                    </div>

                    <button aria-label="Select next image button" type="button" className="cursor-pointer hover:bg-gray-300 rounded-full p-1" onClick={() => handleChangeSelectedImage(selectedImageIndex + 1)}>
                        <ArrowRightIcon className="size-6" />
                    </button>

                </div>
            </div>

            <div className='flex lg:w-4/10 flex-col gap-[16px]'>
                <h3 className='hidden lg:block font-bold text-[36px]/[36px] mb-4'>{title}</h3>

                <h4 className="font-bold text-[20px]/[24px] md:text-[24px]/[24px] lg:text-[30px]/[30px] mb-2">Summary</h4>

                <div>
                    {summary.map((paragraph, index) => <p className="mb-[8px]" key={index}>{paragraph}</p>)}
                </div>

                <h4 className="font-bold text-[20px]/[24px] md:text-[24px]/[24px] lg:text-[30px]/[30px] mb-2">Technologies Used</h4>
                <ul className="grid grid-cols-2 list-disc ml-[20px] w-fit gap-x-8">
                    {skills.map((skill, index) =>
                        <li className="mb-[4px]" key={index}>{skill}</li>
                    )}
                </ul>

                {usage &&
                    <>
                        <h4 className="font-bold text-[20px]/[24px] md:text-[24px]/[24px] lg:text-[30px]/[30px]">Usage</h4>
                        <ul className="list-disc ml-[20px]">
                            {usage.map((note, index) =>
                                <li key={index}>{note}</li>
                            )}
                        </ul>
                    </>
                }

                {children && children}

                <div className="flex flex-row gap-[16px]">
                    <a href={liveProjectLink} rel="noopener" target="_blank">
                        <Button type="primary">Live Project</Button>
                    </a>

                    {sourceCodeLink &&
                        <a href={sourceCodeLink} rel="noopener" target="_blank">
                            <Button type="outline">Source Code</Button>
                        </a>
                    }
                </div>
            </div>
        </section>
    )
}