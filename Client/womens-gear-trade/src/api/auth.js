const BASE_API = `https://womens-gear-trade.herokuapp.com/api`;

export const authenticateUser = async (
  username,
  password,
  method,
  name,
  email,
  address
) => {
  console.log('authenticating user! methode type: ', username, 'and', password);

  if (method === 'login') {
    try {
      const response = await fetch(`${BASE_API}/users/${method}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          username,
          password,
        }),
      });
      const result = await response.json();
      console.log('THIS IS THE RESULT FROM LOGIN', result);
      if (!result.token) {
        return;
      } else {
        console.log('this is result.token', result.token);
        window.localStorage.setItem(`womensgear-token`, result.token);
        // window.localStorage.setItem(`womensgear-user`, result.user);
        return await me();
      }
    } catch (error) {
      console.error(error);
    }
  } else {
    try {
      const response = await fetch(`${BASE_API}/users/${method}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          name,
          email,
          address,
          username,
          password,
        }),
      });
      const result = await response.json();
      console.log(result);
      if (!result.token) {
        return;
      } else {
        console.log('this is result.token', result.token);
        window.localStorage.setItem('womensgear-token', result.token);
        return await me();
      }
    } catch (error) {
      console.error(error);
    }
  }
};

export const me = async () => {
  try {
    const token = localStorage.getItem('womensgear-token');

    if (token) {
      const response = await fetch(`${BASE_API}/users/me`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      console.log('hey look it is me: ', data);
      return data;
    }
    return;
  } catch (error) {
    console.error(error);
  }
};

export const getAllUsers = async () => {
  try {
    const response = await fetch(`${BASE_API}/users`);
    const results = await response.json();
    // console.log('THESE ARE ALL THE USERS IN THE API CALL', results.users);
    return results.users;
  } catch (error) {
    console.error(error);
  }
};
