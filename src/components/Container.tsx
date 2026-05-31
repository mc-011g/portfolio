export const Container = ({ dark, children }: { dark: boolean, children: React.ReactNode }) => {

    return (
        <div className={`${dark ? 'dark:bg-gray-900 bg-gray-100 dark:text-gray-100' : ''} dark:text-gray-100 w-full`}>
            <div className={`${dark ? 'dark:bg-gray-900 bg-gray-100 dark:text-gray-100' : ''} dark:text-gray-100 mx-auto py-[64px] px-[16px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] `}>
            {children}
            </div>       
        </div>
    )
}