import axios from "axios";
import {APP_API} from "../constants/appConstants.js";
const API_KEY = "964bd344c1b241ce97db1bb5f24a2518"
const API_KEY_GOOGLE = "AIzaSyAuh7y0MjR61nvHQjHTHEPisBIHzKSRSfM"
export async function findALlBlogs({keyword}) {
  const date = Date.now()
  let response = null;
  await axios({
    url: `${APP_API}everything?q=${keyword}&language=en&from=${date}&sortBy=publishedAt&apiKey=${API_KEY}`,
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
export async function findTopHeadlines({country}) {
  let response = null;
  await axios({
    url: `${APP_API}top-headlines?country=${country}&apiKey=${API_KEY}`,
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
