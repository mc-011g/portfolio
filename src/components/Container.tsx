export const Container = ({ children }: { children: React.ReactNode }) => {

    return (
        <div className='mx-auto py-[64px] px-[16px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px]'>
            {children}
        </div>
    )
}