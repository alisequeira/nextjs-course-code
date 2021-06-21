import AllPost from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

function AllPostPage(props) {
  return <AllPost posts={props.posts} />;
}

export async function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
    revalidate: 60,
  };
}

export default AllPostPage;
