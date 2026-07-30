import { useQuery } from "@tanstack/react-query";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser } from "../api/usersApi";
import { getUsers } from "../api/usersApi";
import { useState } from "react";
import UserDetails from "./UserDetails";
import AddUser from "./AddUser";

function Users() {

  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: deleteUser,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
  });

  const [selectedUser, setSelectedUser] = useState(null);

  console.log("Users Component Rendered");

  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
    staleTime: 1000 * 60,
  });

  console.log("Users Query Data:", data);
  

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Something went wrong!</h2>;
  }

  return (
    <div>
      <h2>Users</h2>

      {data.map((user) => (
        <div
          key={user.id}
          style={{
            marginBottom: "15px",
          }}
        >
          {user.name}

          <button
            style={{ marginLeft: "10px" }}
            onClick={() => deleteMutation.mutate(user.id)}
          >
            Delete
          </button>
        </div>
      ))}

      <AddUser />
    </div>
  );
}

export default Users;
