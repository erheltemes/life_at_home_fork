/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
  //Site 
  getSite: function () {
    return axios.get("/api/site");
  },
  postSite: function (newSite) {
    return axios.post("/api/site", newSite);
  },
  updateSite: function (id, newData) {
    return axios.put("/api/site/"+ id, newData);
  },
  updateLogin: function (id, newData) {
    return axios.put("/api/site/auth/" + id, newData)
  },
  authLogin: function (id, input) {
    return axios.post("/api/site/auth/" + id, input)
  },

  //Post
  getPosts: function () {
    return axios.get("/api/post");
  },
  getPost: function (id) {
    return axios.get("/api/post/" + id);
  },
  postPost: function (newPost) {
    return axios.post("/api/post", newPost);
  },
  updatePost: function (id, newPost) {
    return axios.put("/api/post/" + id, newPost);
  },
  deletePost: function (id) {
    return axios.delete("/api/post/" + id);
  },

  //Comment
  getComments: function (query) {
    return axios.get("/api/comment?" + query);
  },
  getComment: function (id) {
    return axios.get("/api/comment/" + id);
  },
  postComment: function (newComment) {
    return axios.post("/api/comment", newComment);
  },
  updateComment: function (id, newComment) {
    return axios.put("/api/comment/" + id, newComment);
  },
  deleteComment: function (id) {
    return axios.delete("/api/comment/" + id);
  },

  //Email
  getEmails: function () {
    return axios.get("/api/email");
  },
  getEmail: function (id) {
    return axios.get("/api/email/" + id);
  },
  postEmail: function (newEmail) {
    return axios.post("/api/email", newEmail);
  },
  updateEmail: function (id, newEmail) {
    return axios.put("/api/email/" + id, newEmail);
  },
  deleteEmail: function (id) {
    return axios.delete("/api/email/" + id);
  },

  //Service
  getServices: function () {
    return axios.get("/api/service");
  },
  getService: function (id) {
    return axios.get("/api/service/" + id);
  },
  postService: function (newService) {
    return axios.post("/api/service", newService);
  },
  updateService: function (id, newService) {
    return axios.put("/api/service/" + id, newService);
  },
  deleteService: function (id) {
    return axios.delete("/api/service/" + id);
  },

  //Featured
  getAllFeatured: function () {
    return axios.get("/api/featured");
  },
  getFeatured: function (id) {
    return axios.get("/api/featured/" + id);
  },
  postFeatured: function (newFeatured) {
    return axios.post("/api/featured", newFeatured);
  },
  updateFeatured: function (id, newFeatured) {
    return axios.put("/api/featured/" + id, newFeatured);
  },
  deleteFeatured: function (id) {
    return axios.delete("/api/featured/" + id);
  }
}