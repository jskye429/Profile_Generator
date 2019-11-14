const inquirer = require("inquirer");
const colors = ["blue", "red", "purple"];
​
inquirer.prompt([
    {
        type: "input",
        message: "What is your git username?",
        name: "git"
    },
    {
        type: "list",
        message: "What is your favorite color?",
        name: "color",
        choices: colors
    }
]).then(function(res){
    console.log(res)
})