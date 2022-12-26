import Link from "next/link";

function FacebookIcon() {
  return (
    <Link
      href="https://www.facebook.com/AppWorkMaintenance/"
      target="_blank"
      rel="noopener"
    >
      <svg viewBox="0 0 24 24">
        <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09.0 2.23.19 2.23.19V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18v1.88h2.78L15.89 14.96H13.56v7A10 10 0 0022 12.06C22 6.53 17.5 2.04 12 2.04z"></path>
      </svg>
    </Link>
  );
}
export default FacebookIcon;
