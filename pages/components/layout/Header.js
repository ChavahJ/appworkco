import Link from "next/link";
import Image from "next/image";
import PrimaryButton from "../ui/PrimaryButton";

function Header() {
  return (
    <header className="flex w-full border-b border-green-500 bg-green-50">
      <div className="container flex justify-around">
        <div>
          <Link href="/">
            <Image
              className="p-2"
              src="/logo-appwork.png"
              alt="AppWork Logo"
              width={162}
              height={70}
            />
          </Link>
        </div>
        <nav className="flex items-center gap-4">
          <ul className="flex list-none gap-4">
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
            <li>
              <Link href="/advantages">Our Advantages</Link>
            </li>
            <li>
              <Link href="/blog">AppWork Blog</Link>
            </li>
          </ul>
          <PrimaryButton link="/contact-us">Contact Us</PrimaryButton>
        </nav>
      </div>
    </header>
  );
}

export default Header;
