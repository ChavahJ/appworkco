import styles from "../../styles/Home.module.css";
import Link from "next/link";

function BlogPostsPage() {
  const blogs = [
    { id: "launch", name: "AppWork Launches" },
    { id: "bert", name: "Meet Bert" },
  ];
  return (
    <main className={styles.main}>
      <h1>AppWork Blog Posts -- Category Page</h1>
      {blogs.map((blog) => (
        <li key={blogs.id}>
          <Link href={{ pathname: "/blog/[slug]", query: { slug: blog.id } }}>
            {blog.name}
          </Link>
        </li>
      ))}
    </main>
  );
}

export default BlogPostsPage;
