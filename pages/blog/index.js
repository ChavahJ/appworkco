import styles from "../../styles/Home.module.css";
import Link from "next/link";

function BlogPostsPage(props) {
  const { blogs } = props;

  return (
    <main className={styles.main}>
      <h1>AppWork Blog Posts -- Category Page</h1>
      {blogs.map((blog) => (
        <li key={blog.id}>
          <Link href={`/blog/${encodeURIComponent(blog.attributes.slug)}`}>
            {blog.attributes.title}
          </Link>
        </li>
      ))}
    </main>
  );
}

export async function getStaticProps(context) {
  const myRequest = new Request("http://localhost:1337/api/blogs");
  const resp = await fetch(myRequest)
    .then((response) => response.json())
    .catch(console.error);

  if (!resp) {
    return {
      redirect: {
        destination: "/",
      },
    };
  }
  if (resp.data.length === 0) {
    return { notFound: true };
  }

  return {
    props: {
      blogs: resp.data,
    },
    revalidate: 60,
  };
}

export default BlogPostsPage;
