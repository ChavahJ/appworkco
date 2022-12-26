import Image from "next/image";
import Link from "next/link";
import AppleIcon from "../icons/Apple";
import FacebookIcon from "../icons/Facebook";
import InstagramIcon from "../icons/Instagram";
import LinkedInIcon from "../icons/LinkedIn";
import PlayStoreIcon from "../icons/PlayStore";
import TwitterIcon from "../icons/Twitter";
import YouTubeIcon from "../icons/YouTube";

function Footer() {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer className="flex w-full flex-col bg-forest-500 font-light  text-green-200">
      <div className="container mx-auto flex flex-wrap justify-between px-6 pt-6 pb-4 md:gap-4 xl:gap-12">
        <hr className="border-b-1 my-5 w-screen border-green-700 opacity-25 lg:hidden" />
        <div className="flex w-2/5 flex-col items-center md:w-auto lg:mr-auto">
          <Link href="/">
            <Image
              className="p-2"
              src="/logo-appwork-light.png"
              alt="AppWork Logo"
              width={120}
              height={52}
            />
          </Link>
          <div className="hidden sm:block">
            <p>111 West Lewis Street,</p>
            <p>Suite 111</p>
            <p>Greensboro, NC 27406</p>
          </div>
        </div>
        <div className="order-2 mr-auto mt-6 md:order-1 md:mr-0 md:mt-0 md:w-auto">
          <p className="mb-3 hidden text-lg font-normal text-white sm:block">
            Company
          </p>
          <ul className="flex list-none flex-col text-sm md:text-base">
            <li>
              <Link href="/features">Product Features</Link>
            </li>
            <li>
              <Link href="/about-us">Our Company</Link>
            </li>
            <li>
              <Link href="/advantages">Our Advantages</Link>
            </li>
            <li>
              <Link href="/meet-the-team">Meet the Team</Link>
            </li>
            <li>
              <Link href="/proptech-news">PropTech News</Link>
            </li>
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div className="order-1 w-3/5 pl-2 md:order-2 md:w-auto">
          <p className="mb-3 hidden text-lg font-normal text-white sm:block">
            Contact Us
          </p>
          <ul className="flex list-none flex-col text-sm md:text-base">
            <li>
              <Link href="tel:18888581449">+1 888-858-1449</Link>
            </li>
            <li>
              <Link href="mailto:sales@appworkco.com">sales@appworkco.com</Link>
            </li>
            <li>
              <Link href="mailto:support@appworkco.com">
                support@appworkco.com
              </Link>
            </li>
          </ul>
        </div>
        <div className="order-first lg:order-last">
          <p className="mb-3 hidden text-lg font-normal text-white sm:block">
            Follow Us On
          </p>
          <ul className="flex list-none">
            <li className="footer-icon">
              <LinkedInIcon />
            </li>
            <li className="footer-icon">
              <InstagramIcon />
            </li>
            <li className="footer-icon">
              <FacebookIcon />
            </li>
            <li className="footer-icon">
              <TwitterIcon />
            </li>
            <li className="footer-icon">
              <YouTubeIcon />
            </li>
          </ul>
        </div>
        <div className="order-first lg:order-last">
          <p className="mb-3 hidden text-lg font-normal text-white sm:block">
            Available On
          </p>
          <ul className="flex list-none">
            <li className="footer-icon">
              <AppleIcon />
            </li>
            <li className="footer-icon">
              <PlayStoreIcon />
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-6 py-4 text-sm">
        © {year} AppWork. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
