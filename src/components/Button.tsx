export const Button = ({ children, type }: { children: React.ReactNode, type: string }) => {

    const typeOutline = 'border border-indigo-600 hover:bg-indigo-800 hover:border-indigo-800 text-indigo-600 hover:text-indigo-50';
    const typePrimary = 'bg-indigo-600 hover:bg-indigo-800';
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