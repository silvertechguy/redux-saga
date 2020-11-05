import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Post } from "../components/Post";
import { getPosts } from "../redux/actions/postsActions";

const PostsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const { posts, loading, hasErrors } = useSelector((state) => state.posts);

  const renderPosts = () => {
    if (loading) return <p>Loading posts...</p>;
    if (hasErrors) return <p>Unable to display posts.</p>;
    return posts.map((post) => <Post key={post.id} post={post} />);
  };

  return (
    <section>
      <h1>Posts</h1>
      {renderPosts()}
    </section>
  );
};

export default PostsPage;
