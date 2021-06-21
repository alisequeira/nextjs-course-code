import classes from "./all-posts.module.css";
import PostsGrid from "../home/posts/posts-grid";

function AllPost(props) {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={props.posts} />
    </section>
  );
}

export default AllPost;
