import firebase from "@firebase/app";
import "@firebase/firestore";
import axios from "axios";

firebase.initializeApp({
  apiKey: "AIzaSyCvD8XPXnxivwsjzBqxBHpVTL296gLB3RY",
  authDomain: "spacejam-61083.firebaseapp.com",
  projectId: "spacejam-61083"
});

var db = firebase.firestore();

export default {
  isAuthenticated() {
    return !!localStorage.getItem("username");
  },
  login(username) {
    localStorage.setItem("username", username);
  },
  logout() {
    localStorage.removeItem("username");
  },
  getImages(query) {
    return axios.get(
      "https://images-api.nasa.gov/search?q=" + query + "&media_type=image"
    );
  },
  getSingleImage(nasa_id) {
    return axios.get("https://images-api.nasa.gov/search?q=" + nasa_id);
  },
  getVote(nasa_id) {
    return db
      .collection("voti")
      .where("foto", "==", nasa_id)
      .get()
      .then((data) => {
        let sum = 0;
        let username = localStorage.getItem("username");
        let userVote = null;
        data.forEach((doc) => {
          sum += doc.data().voto;
          if (doc.data().username === username) {
            userVote = doc.data().voto;
          }
        });
        return {
          total: data.size,
          average: data.size === 0 ? null : sum / data.size,
          userVote: userVote
        };
      });
  },
  setVote(nasa_id, valore) {
    return db
      .collection("voti")
      .doc()
      .set({
        voto: valore,
        foto: nasa_id,
        username: localStorage.getItem("username")
      });
  },
  getAsteroids() {
    return axios.get(
      "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DBGGaFzVosNwYrIIO7rrOPUDs3cUHdvVINAgZ30L"
    );
  },
  contactus(name, lastname, email, text) {
    return db.collection("contacts").doc().set({
      name: name,
      lastname: lastname,
      email: email,
      text: text
    });
  }
};
