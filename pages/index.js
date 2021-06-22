import Head from "next/head";
import Hero from "../components/home/Hero";
import FeaturedPosts from "../components/home/featured-posts";
import { getFeaturedPost } from "../lib/posts-util";

function HomePage(props) {
  return (
    <>
      <Head>
        <title>Ali' Blog</title>
        <meta
          name="description"
          content="I post about programing and web development."
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
}

export async function getStaticProps() {
  const featuredPosts = getFeaturedPost();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 60,
  };
}

export default HomePage;
