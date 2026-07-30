import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../api/usersApi";

function UserDetails({ id }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["user", id],
    queryFn: () => getUsers(id),
    staleTime: 60000,
  });

  if (isLoading) {
    return <h3>Loading User...</h3>;
  }

  if (error) {
    return <h3>Error</h3>;
  }

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "15px",
        marginTop: "20px",
      }}
    >
      <h2>{data.name}</h2>

      <p>Email : {data.email}</p>

      <p>Phone : {data.phone}</p>

      <p>Website : {data.website}</p>
    </div>
  );
}

export default UserDetails;
