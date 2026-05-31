export const Button = ({ children, type }: { children: React.ReactNode, type: string }) => {

    const typeOutline = 'border border-indigo-600 dark:border-indigo-400 hover:bg-indigo-800 hover:border-indigo-800 text-indigo-600 dark:text-indigo-400 hover:text-white dark:hover:bg-indigo-500 dark:hover:border-indigo-600';
    const typePrimary = 'bg-indigo-600 hover:bg-indigo-800 dark:bg-indigo-500 dark:hover:bg-indigo-600 dark:text-white';
    let typeSelected;

    switch (type) {
        case 'primary':
            typeSelected = typePrimary;
            break;
        case 'outline':
            typeSelected = typeOutline;
            break;
        default:
            typeSelected = typePrimary;
            break;
    }

    return (
        <>
            <button className={`${typeSelected} font-bold cursor-pointer rounded-full
             text-indigo-50 px-[24px]
              py-[16px] w-fit transition`}>
                {children}
            </button>
        </>
    )
}