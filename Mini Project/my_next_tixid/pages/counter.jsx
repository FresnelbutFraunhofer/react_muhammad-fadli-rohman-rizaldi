// import React, { useState } from "react";
// import axios from "axios";
// import cloudinary from "cloudinary";

// // Konfigurasi Cloudinary
// cloudinary.config({
//   cloud_name: "dinkt3eoc",
//   api_key: "267123129231881",
//   api_secret: "jgGvAAdxpB-JndDHJ2n2exDYfFA",
// });

// const CounterApp = () => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleImageUpload = async () => {
//     try {
//       if (selectedImage) {
//         const uploadResponse = await cloudinary.v2.uploader.upload(
//           selectedImage,
//           {
//             folder: "movieimage", // Opsional: Folder di Cloudinary
//           }
//         );
//         const imageUrl = uploadResponse.secure_url;
//         console.log("Image uploaded to Cloudinary:", imageUrl);

//         // Kirim URL gambar ke API
//         await postImageToApi(imageUrl);
//         console.log("Image URL sent to API");
//       } else {
//         console.error("No image selected.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   const postImageToApi = async (imageUrl) => {
//     try {
//       const response = await axios.post(
//         "https://api.cloudinary.com/v1_1/dinkt3eoc/image/upload",
//         { imageUrl }
//       );
//       console.log("Response from API:", response.data);
//     } catch (error) {
//       console.error("Error posting image to API:", error);
//     }
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.readAsDataURL(file);
//       reader.onload = () => {
//         setSelectedImage(reader.result);
//       };
//     }
//   };

//   return (
//     <div>
//       <input type="file" accept="image/*" onChange={handleFileChange} />
//       {selectedImage && (
//         <img src={selectedImage} alt="Selected" style={{ maxWidth: "200px" }} />
//       )}
//       <button onClick={handleImageUpload}>Upload and Send to API</button>
//     </div>
//   );
// };

// export default CounterApp;

import React, { useState } from "react";

export default function counter() {
  const [image, setImage] = useState("");

  const handleSubmit = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "marvi_12true");
    data.append("clound_name", "dinkt3eoc");

    fetch("https://api.cloudinary.com/v1_1/dinkt3eoc/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.secure_url);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div>
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </>
  );
}
