import axios from "axios";
export default function testapi() {
  let data = axios
    .post(
      `https://radiant-cove-69650.herokuapp.com/car/api/token/`,
      {
        username: "admin",
        password: "admin",
      }
      // headers: {
      //   Authorization: "Bearer my-token",
      // },
    )
    .then((res) => {
      return res;
    });
  // .catch((err) => console.log(err));

  return console.log(data);
}
