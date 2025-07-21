
import Link from 'next/link';

const CustomLink = ({ href, children, fs = 'text-base', textTransform = 'uppercase', fontWeight = 'font-bold', setIsDrawerOpen, underline = true, bgHover = '', border = '' }) => {
    const handleClick = () => {
        if (setIsDrawerOpen) {
            setIsDrawerOpen(false)
        }
    }
    return (
        <Link href={href} className={`${fs} ${textTransform} ${fontWeight} hover:text-accent-color ${underline ? 'underline' : ''} hover:${bgHover} ${border} hover:border-[var(--accent-color)]`} onClick={handleClick} >
            {children}
        </Link>
    );
};


export default CustomLink;
