import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="flex w-full flex-col items-center justify-center border-t bg-forest-500 py-6 font-light text-green-200">
      <div>
        <div>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo-appwork-light.png"
              alt="AppWork Logo"
              width={162}
              height={70}
            />
          </Link>
          <div>
            111 West Lewis Street, Suite 111 Greensboro, NC 27406 United States
          </div>
        </div>
      </div>
      <div>© 2022 AppWork. All rights reserved.</div>
    </footer>
  );
}

export default Footer;
