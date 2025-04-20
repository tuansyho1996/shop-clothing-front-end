
import Link from 'next/link';

const CustomLink = ({ href, children, fs = 'text-base', textTransform = 'uppercase', fontWeight = 'font-bold', setIsDrawerOpen }) => {
    const handleClick = ()=>{
        if(setIsDrawerOpen){
            setIsDrawerOpen(false)
        }
    }
    return (
        <Link href={href} className={`${fs} ${textTransform} ${fontWeight} hover:text-accent-color underline`} onClick={handleClick} >
            {children}
        </Link>
    );
};


export default CustomLink;
