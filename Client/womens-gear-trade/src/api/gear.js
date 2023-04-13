const BASE_API = `https://womens-gear-trade.herokuapp.com/api`;

//need to make an api call to pull the posts and return them back
export const fetchGear = async () => {
  console.log('fetching all gear posts');
  try {
    const response = await fetch(`${BASE_API}/gearPosts`);
    //add a method to pass token

    const data = await response.json();

    console.log('this is the gear in API call', data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const makeGearPost = async (
  token,
  title,
  location,
  description,
  price,
  condition,
  category,
  size,
  createdAt,
  updatedAt
) => {
  console.log('creating gearPost..');
  try {
    const response = await fetch(`${BASE_API}/gearPosts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title,
        location,
        description,
        price,
        condition,
        category,
        size,
        createdAt,
        updatedAt,
      }),
    });

    console.log('this is the response', response);
    //we want to target the token of the returning user, we can destructure the
    //response object to be just the token, and then return the token
    const data = await response.json();
    console.log('this is my gearPost', data);
    return data;
  } catch (error) {
    console.error(error);
  }
};
