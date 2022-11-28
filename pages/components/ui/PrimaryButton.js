import Link from "next/link";

function PrimaryButton(props) {
  return (
    <Link
      className="btn-primary transition-all duration-150 ease-linear"
      href={props.link}
    >
      {props.children}
    </Link>
  );
}

export default PrimaryButton;
