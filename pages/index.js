import Hero from "../components/home/Hero";
import FeaturedPosts from "../components/home/featured-posts";
import { getFeaturedPost } from "../lib/posts-util";

function HomePage(props) {
  return (
    <>
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
