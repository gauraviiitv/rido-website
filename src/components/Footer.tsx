import Link from "next/link";

const Footer = () => (
  <footer className="text-center w-full">
    <div className="flex justify-center space-x-4">
      <Link href="/privacy-policy" className="hover:underline mx-2">
        Privacy Policy
      </Link>
      <Link href="/terms-and-conditions" className="hover:underline mx-2">
        Terms and Conditions
      </Link>
    </div>
    <p className="mt-2">Copyright &copy; 2024 Rido SP Services Private Limited. All rights reserved.</p>
  </footer>
);

export default Footer;
