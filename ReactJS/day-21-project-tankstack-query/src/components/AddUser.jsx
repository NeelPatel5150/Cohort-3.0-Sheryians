import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addUser } from "../api/usersApi";

function AddUser() {

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: addUser,

    onSuccess: () => {
      console.log("✅ User Added");

      setName("");
      setEmail("");

      queryClient.invalidateQueries({
        queryKey: ["users"]
      })
      
    }
  });
  console.log(mutation);
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div
      style={{
        marginTop: "30px",
        border: "1px solid gray",
        padding: "20px",
      }}
    >
      <h2>Add User</h2>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />
      <br />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />
      <br />

      <button
        onClick={() =>
          mutation.mutate({
            name,
            email,
          })
        }
        disabled={mutation.isPending}
      >
        {mutation.isPending ? "Adding..." : "Add User"}
      </button>
    </div>
  );
}

export default AddUser;
