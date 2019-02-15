import axios from "axios";

const KEY = "0eedfb2bec31ae9d210e61fee2c1182f";
// NOTE: https://cors-anywhere.herokuapp.com/ is a proxy and is needed to avoid a CORS error when request is made from the browser.
export default axios.create({
  baseURL: `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${KEY}`
});
