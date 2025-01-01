import { program } from "commander";
import chalk from "chalk";
import inquirer from "inquirer";
import { RequestAndSave } from "./RequestAndSave.js";

program.version("1.0.0").description("My Node CLI");

program.action(() => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What's your name?",
            },
        ])
        .then((answers) => {
            RequestAndSave(answers.name);
            console.log(chalk.green(`Hey there, ${answers.name}!`));
        });
});

program.parse(process.argv);