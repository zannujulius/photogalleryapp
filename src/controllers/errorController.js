export const errorFunc = (err) => {
  if (err.response) {
    alert(JSON.stringify(err.response.data));
  } else {
    console.log(err.message);
  }
};
