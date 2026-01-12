export default async function dummyData(category) {
  let res = null;
  try {
    let data = await fetch(
      `https://dummyjson.com/products/category/${category}`
    );

    if (data.ok) {
      res = await data.json();
    } else {
      console.log("Request failed with status: ", data.status);
    }
  } catch (error) {
    console.log("an error occured!", error);
  }
  return res;
}
