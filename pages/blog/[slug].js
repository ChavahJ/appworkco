import { useRouter } from "next/router";
import { Fragment } from "react";
import styles from "../../styles/Home.module.css";

function BlogPostPage() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query.slug);

  // send a request to backend server
  // fetch piece of data with slug of router.query.slug
  // if (!blog) {
  //   return <p>No blog post found!</p>;
  // }

  return (
    <main>
      <h1>AppWork Blog Post--Single Page</h1>
    </main>
  );
}

export default BlogPostPage;
