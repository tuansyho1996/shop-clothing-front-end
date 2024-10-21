
import { Button } from '@mui/material';
import Link from 'next/link';

const CustomLink = ({ href, children, className, variant = 'text', ...props }) => {
  return (
    <Link href={href} passHref legacyBehavior>
      <Button
        variant={variant}
        className='rounded-md font-bold'
        sx={{ '&:hover': { backgroundColor: '#fff', color: '#000', textDecoration: 'underline', }, color: 'var(--header-color)', width: '100%' }}
        {...props}

      >
        {children}
      </Button>
    </Link>
  );
};


export default CustomLink;
