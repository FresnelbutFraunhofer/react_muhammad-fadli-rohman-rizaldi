import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dinkt3eoc",
  api_key: "267123129231881",
  api_secret: "jgGvAAdxpB-JndDHJ2n2exDYfFA",
});

const cdUpload = (file) => {
  let link = "";
  cloudinary.v2.uploader.upload(file).then((result) => {
    console.log(result.secure_url);
    link = result.secure_url;
  });
  return link;
};

export default cdUpload;
