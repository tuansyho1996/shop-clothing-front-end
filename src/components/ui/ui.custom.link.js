
import Link from 'next/link';

const CustomLink = ({ href, children, fs = 'text-base', textTransform = 'uppercase', fontWeight = 'font-bold', setIsDrawerOpen }) => {
    return (
        <Link href={href} className={`${fs} ${textTransform} ${fontWeight} hover:text-accent-color underline`} onClick={() => setIsDrawerOpen(false)} >
            {children}
        </Link>
    );
};


export default CustomLink;
