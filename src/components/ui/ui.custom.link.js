
import Link from 'next/link';

const CustomLink = ({ href, children, fs = 'text-base', textTransform = 'uppercase', fontWeight = 'font-bold' }) => {
    return (
        <Link href={href} className={`${fs} ${textTransform} ${fontWeight} hover:text-accent-color w-full`}>
            {children}
        </Link>
    );
};


export default CustomLink;
