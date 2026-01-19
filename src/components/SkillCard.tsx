export const SkillCard = ({ children }: { children: React.ReactNode }) => {

    return (
        <div className='text-gray-950 shadow-md w-full h-full bg-white flex flex-row p-[32px] rounded-[8px] gap-[16px]'>
            {children}
        </div>
    )
}