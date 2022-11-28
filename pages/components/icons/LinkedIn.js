import Link from "next/link";

function LinkedInIcon() {
  return (
    <Link
      href="https://www.linkedin.com/company/appworkco/"
      target="_blank"
      rel="noopener"
    >
      <svg viewBox="0 0 24 24">
        <path d="M19 3a2 2 0 012 2V19a2 2 0 01-2 2H5A2 2 0 013 19V5A2 2 0 015 3H19m-.5 15.5V13.2A3.26 3.26.0 0015.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5h2.79V13.57C12.92 12.8 13.54 12.17 14.31 12.17a1.4 1.4.0 011.4 1.4V18.5H18.5M6.88 8.56A1.68 1.68.0 008.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69.0 005.19 6.88c0 .93.76 1.68 1.69 1.68M8.27 18.5V10.13H5.5V18.5H8.27z"></path>
      </svg>
    </Link>
  );
}

export default LinkedInIcon;
