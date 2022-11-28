import Link from "next/link";

function InstagramIcon() {
  return (
    <Link
      href="https://www.instagram.com/app.workco/"
      target="_blank"
      rel="noopener"
    >
      <svg viewBox="0 0 24 24">
        <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4A5.8 5.8.0 0116.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8.0 017.8 2M7.6 4A3.6 3.6.0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8A3.6 3.6.0 0020 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5A1.25 1.25.0 0118.5 6.75 1.25 1.25.0 0117.25 8 1.25 1.25.0 0116 6.75 1.25 1.25.0 0117.25 5.5M12 7a5 5 0 015 5 5 5 0 01-5 5A5 5 0 017 12a5 5 0 015-5m0 2A3 3 0 009 12a3 3 0 003 3 3 3 0 003-3A3 3 0 0012 9z"></path>
      </svg>
    </Link>
  );
}
export default InstagramIcon;
