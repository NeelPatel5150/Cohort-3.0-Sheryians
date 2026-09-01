import { useState } from "react";
import axios from "axios";

const App = () => {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please select an image");
      return;
    }

    const formData = new FormData();

    formData.append("image", file);

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:3000/user/create",
        formData,
      );

      console.log(response.data);

      setImageUrl(response.data.imageUrl);
    } catch (error) {
      console.error(error);

      alert("Image upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Image Upload</h1>

      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={handleFileChange} />

        <button type="submit">
          {loading ? "Uploading..." : "Upload Image"}
        </button>
      </form>

      {imageUrl && (
        <div>
          <h2>Uploaded Image</h2>

          <img src={imageUrl} alt="Uploaded" width="300" />

          <p>{imageUrl}</p>
        </div>
      )}
    </div>
  );
};

export default App;
