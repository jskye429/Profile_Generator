const lint = require("lint")
const fs = require("fs");
const axios = require("axios");
const pdf = require('pdfkit');
const inquirer = require("inquirer");
const util = require("util");
const blobStream = require("blob-stream");

inquirer
.prompt({
  
    type: "input",
    message: "What is your git username?",
    name: "git"
},
{
    type: "list",
    message: "What is your favorite color?",
    name: "color",
    choices: colors
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
      console.log(str);


      fs.writeFile("log.txt", "profile.pdf", str, function(err){
        if (err) {
        return console.log(err);
        }
        else  {
  const stream = doc.pipe(blobStream());

  const print = new pdf;
      // pdf formating stuff
    doc.rect(0,0,600,700)
    .fillColor("grey")
    .fillAndStroke(res.choices)
  
    doc.pipe(fs.createWriteStream("profile.pdf"));

    doc.fontSize(24)
    .fillColor("black")
    .text("It's me" + res.data.name),{
      width: 500,
      align: "center"

      };
    doc.fontSize(10)
.fillColor("black")
.text("Find my face at" + JSON.stringify(results.data.avatar_url),{
    align: "center"
})

doc.font("Times-Roman")
.moveDown(5)
.fontSize(18)
.text("Followers" + JSON.stringify(results.data.followers),{
    align: "left",
    continued:true
})

doc.font("Times-Roman")
.moveDown(3)
.fontSize(18)
 .text("Location" + JSON.stringify(results.data.location),{
    align: "left",
    continued:true
        }
.text("GitHub:" + JSON.stringify(results.data.data.html_url),{
    align: "right",

 },



 print.end()
 
 ,stream.on("finish",function(){


const blob = stream.toBlob("application/pdf");

 })
      ));                
      } });
    })});
    









                                              

