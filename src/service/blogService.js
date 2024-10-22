import axios from "axios";
import {APP_API} from "../constants/appConstants.js";
const API_KEY = "964bd344c1b241ce97db1bb5f24a2518"
export async function findALlBlogs({page}) {

  let response = null;
  await axios({
    url: `${APP_API}?q=tesla&from=2024-09-22&sortBy=publishedAt&apiKey=${API_KEY}`,
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
  })
    .then((result) => {
      response = result;
    })
    .catch((e) => {
      response = e;
    });
  return response;
}

export async function findBlogById(id) {
  let response = null;
  await axios({
    url: `${APP_API}/blogs/${id}`,
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
  })
    .then((result) => {
      response = result;
    })
    .catch((e) => {
      response = e;
    });
  return response;
}
