const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
inquirer
.prompt({
    message: "Enter your GitHub username",
    name: "username"
  })
  .then(function({ username }) {
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
    axios.get(queryUrl)
    .then(function(res){
      let arr = res.data.map(repo => {
      return repo.name
      });
      //console.log(arr)
      let str = arr.join("\n")
      console.log(str)
      fs.writeFile("log.txt", str, function(err){
        if (err) {
        return console.log(err);
        }
        console.log(arr.length + "repos saved")
      })
    })
  });