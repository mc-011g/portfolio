export const SkillCard = ({ children }: { children: React.ReactNode }) => {

    return (
        <div className='dark:bg-gray-800 dark:text-gray-100 text-gray-950 dark:shadow-gray-300/15 shadow-md w-full h-full bg-white flex flex-row p-[32px] rounded-[8px] gap-[16px]'>
            {children}
        </div>
    )
}