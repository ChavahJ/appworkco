import Link from "next/link";

function PlayStoreIcon() {
  return (
    <Link
      href="https://play.google.com/store/apps/details?id=com.apprent.apprent"
      target="_blank"
      rel="noopener"
    >
      <svg viewBox="0 0 24 24">
        <path d="M3 20.5V3.5c0-.59.34-1.11.84-1.35L13.69 12 3.84 21.85C3.34 21.6 3 21.09 3 20.5m13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27m3.35-4.31c.34.27.59.69.59 1.19S20.53 12.9 20.18 13.18L17.89 14.5 15.39 12l2.5-2.5 2.27 1.31M6.05 2.66 16.81 8.88l-2.27 2.27L6.05 2.66z"></path>
      </svg>
    </Link>
  );
}
export default PlayStoreIcon;
