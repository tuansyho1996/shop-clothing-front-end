// components/Footer.js
import { Container, Grid, Typography } from '@mui/material';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 border-t">
      <Container maxWidth="lg">
        <Grid container spacing={4} className="text-center sm:text-left">
          {/* Help Column */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" component="h2" className="mb-4 text-gray-800 font-semibold">
              Help
            </Typography>
            <ul className="space-y-2">
              <li>
                <a href="/help/shipping" className="text-gray-600 hover:text-gray-800">
                  Shipping
                </a>
              </li>
              <li>
                <a href="/help/returns" className="text-gray-600 hover:text-gray-800">
                  Returns
                </a>
              </li>
              <li>
                <a href="/help/faqs" className="text-gray-600 hover:text-gray-800">
                  FAQs
                </a>
              </li>
            </ul>
          </Grid>

          {/* About Column */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" component="h2" className="mb-4 text-gray-800 font-semibold">
              About
            </Typography>
            <ul className="space-y-2">
              <li>
                <a href="/about/company" className="text-gray-600 hover:text-gray-800">
                  Our Company
                </a>
              </li>
              <li>
                <a href="/about/careers" className="text-gray-600 hover:text-gray-800">
                  Careers
                </a>
              </li>
              <li>
                <a href="/about/sustainability" className="text-gray-600 hover:text-gray-800">
                  Sustainability
                </a>
              </li>
            </ul>
          </Grid>

          {/* More Information Column */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" component="h2" className="mb-4 text-gray-800 font-semibold">
              More Information
            </Typography>
            <ul className="space-y-2">
              <li>
                <a href="/info/contact" className="text-gray-600 hover:text-gray-800">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/info/privacy" className="text-gray-600 hover:text-gray-800">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/info/terms" className="text-gray-600 hover:text-gray-800">
                  Terms of Service
                </a>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
