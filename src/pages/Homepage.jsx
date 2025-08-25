import { ImagesPath } from "../assets/imagesPath";

import { useGetPostsQuery } from "../redux/service/nubloApi";

const Homepage = () => {
  const { data, error, isLoading } = useGetPostsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading posts</div>;

  if (error) {
    <h1>Error fetching offers</h1>;
  }

  if (isLoading) {
    <h1>Loading...</h1>;
  }

  console.log(data, "??data");

  return (
    <div>
      <img
        src={ImagesPath.BACKGROUND_IMG}
        alt="bg_img"
        className="w-full object-cover h-64"
      />
      <ul>
        {data.map((post) => (
          <li key={post.id}>Title: {post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Homepage;
