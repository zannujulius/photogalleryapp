import axios from "axios";
export const postLogin = () => async (dispatch, getState) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    console.log(response.data, "the response data");
    dispatch({
      type: "FETCH_POST",
      payload: response.data,
    });
  } catch (err) {
    console.log(err);
  }
};
