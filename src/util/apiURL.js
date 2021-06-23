export const apiURL = () => {
  const env = process.env.NODE_ENV;
  if (env === "production") {
    return "https://tranquil-badlands-09117.herokuapp.com";
  } else {
    return "http://localhost:8888";
  }
};
