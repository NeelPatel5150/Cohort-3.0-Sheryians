import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../api/postsApi";

function Posts() {
  console.log("Posts Component Rendered");

  const { data, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    staleTime: 1000 * 60,
  });

  if (isLoading) {
    return <h2>Loading Posts...</h2>;
  }

  if (error) {
    return <h2>Error Loading Posts</h2>;
  }

  return (
    <div>
      <h2>Posts</h2>

      {data.slice(0, 10).map((post) => (
        <div key={post.id}>
          <h4>{post.title}</h4>
        </div>
      ))}
    </div>
  );
}

export default Posts;
