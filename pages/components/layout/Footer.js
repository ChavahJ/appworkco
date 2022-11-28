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
  return (
    <footer className="flex w-full flex-col bg-forest-500 font-light text-green-200">
      <div className="container mx-auto flex w-screen flex-wrap justify-between pt-6 pb-4">
        <div className="flex flex-col items-center gap-4">
          <Link href="/">
            <Image
              className="p-2"
              src="/logo-appwork-light.png"
              alt="AppWork Logo"
              width={162}
              height={70}
            />
          </Link>
          <div className="hidden sm:block">
            <p>111 West Lewis Street,</p>
            <p>Suite 111</p>
            <p>Greensboro, NC 27406</p>
          </div>
        </div>
        <div className="flex justify-around align-bottom">
          <div>
            <p className="mb-3 text-lg font-normal text-white">Company</p>
            <ul className="flex list-none flex-col">
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
          <div>
            <p className="mb-3 text-lg font-normal text-white">Follow Us On</p>
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
          <div>
            <p className="mb-3 text-lg font-normal text-white">Available On</p>
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
      </div>
      <div className="container mx-auto pt-8 pb-4 text-sm">
        © 2022 AppWork. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
