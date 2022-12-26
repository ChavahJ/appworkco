import { useRouter } from "next/router";
import { Fragment } from "react";

function BlogPostPage(props) {
  //const router = useRouter();

  // console.log(router.pathname);
  // console.log(router.query.slug);

  // send a request to backend server
  // fetch piece of data with slug of router.query.slug

  const { blog } = props;

  return (
    <Fragment>
      <main>
        <h1>{blog.attributes.title}</h1>
        <p>{blog.attributes.description}</p>
      </main>
    </Fragment>
  );
}

async function getData() {
  const myRequest = new Request("http://localhost:1337/api/blogs");
  const resp = await fetch(myRequest)
    .then((response) => response.json())
    .catch(console.error);

  return resp;
}
export async function getStaticProps(context) {
  const { params } = context;
  const blogSlug = params.slug;

  const resp = await getData();

  if (!resp) {
    return {
      redirect: {
        destination: "/",
      },
    };
  }
  const blog = resp.data.find((blog) => blog.attributes.slug === blogSlug);

  if (!blog) {
    return { notFound: true };
  }

  return {
    props: {
      blog,
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const resp = await getData();
  const attributes = resp.data.map((blog) => blog.attributes);
  const attributeArray = Object.values(attributes);
  const slugs = attributeArray.map((attribute) => attribute.slug);
  const pathsWithParams = slugs.map((slug) => ({ params: { slug: slug } }));
  return {
    paths: pathsWithParams,
    fallback: true,
  };
}
export default BlogPostPage;
