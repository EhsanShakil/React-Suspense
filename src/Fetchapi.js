const Fetchapi = async () => {
  try {
    const posts = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const postsData = await posts.json();
    console.log(postsData);

    return postsData;
  } catch (error) {
    console.log(error);
  }
};

export default Fetchapi;
