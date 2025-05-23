import Link from "next/link";
import { useQuery } from "react-query";
import { getInformation } from "../../fetchers";
import { SocialIcons } from "../elements";

const Footer = () => {
  const { data } = useQuery("information", getInformation);

  if (!data) return null;

  return (
    <footer className="footer relative z-20 border-t border-white border-opacity-10 bg-grey bg-opacity-95 backdrop-blur backdrop-filter">
      <div className="container mx-auto">
        <div className="footer-content flex flex-wrap items-center justify-between gap-y-5 gap-x-7 py-5 text-center md:flex-nowrap">
          <p className="mb-0 w-full md:w-auto">
            &copy; {new Date().getFullYear()}, All right reserved
            <Link href="/">
              <a className="pl-1.5 font-medium text-heading no-underline hover:text-primary">
                Matt Burke
              </a>
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
