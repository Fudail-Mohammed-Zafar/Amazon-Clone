import ImageKit from "imagekit";

// Initialisation

var imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

// Test ImageKit connection
export const connectImageKit = () => {
  try {
    if (
      !process.env.IMAGEKIT_PUBLIC_KEY ||
      !process.env.IMAGEKIT_PRIVATE_KEY ||
      !process.env.IMAGEKIT_URL_ENDPOINT
    ) {
      throw new Error("ImageKit credentials are not set");
    }
    // ImageKit doesn't have a direct connection test, but we can verify credentials
    imagekit.getAuthenticationParameters();
    console.log("ImageKit is connected.");
    return true;
  } catch (error) {
    console.log("ImageKit connection failed:", error.message);
    return false;
  }
};

export default imagekit;
