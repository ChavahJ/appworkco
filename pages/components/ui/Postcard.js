import { format, parseISO } from "date-fns";
import Link from "next/link";

function PostCard(props) {
  return (
    <div className="mb-6">
      <time dateTime={props.date} className="block text-sm text-forest-600">
        {format(parseISO(props.date), "LLLL d, yyyy")}
      </time>
      <h2 className="text-lg">
        <Link href={props.url} className="text-green-700 hover:text-green-900">
          {props.title}
        </Link>
      </h2>
    </div>
  );
}

export default PostCard;
