// init.js
const inquirer = require("inquirer");
const chalk = require("chalk");
const { exec } = require("child_process");
chalk.level = 3; // 设置chalk等级为3

module.exports = () => {
  console.log(chalk.green("开始初始化文件"));
  console.log(chalk.gray("初始化中..."));
  console.log(chalk.green("初始化完成"));
  inquirer
    .prompt([
      {
        type: "input", // 问题类型为填空题
        message: "your  projectName:", // 问题描述
        name: "projectName", // 问题对应的属性
        validate: (val) => {
          // 对输入的值做判断
          if (val === "") {
            return chalk.red("项目名不能为空，请重新输入");
          }
          return true;
        },
      },
    ])
    .then((answer) => {
      // 通过用户的输入进行各种操作
      console.log(chalk.green("开始初始化文件\n"));
      console.log(chalk.gray("初始化中..."));
      const gitUrl = "https://github.com/liyue326/going.git";
      exec(
        `git clone ${gitUrl} ${answer.projectName}`,
        (error, stdout, stderr) => {
          if (error) {
            // 当有错误时打印出错误并退出操作
            console.log(chalk.red(error));
            process.exit();
          }
          console.log(chalk.green("初始化完成"));
          process.exit(); // 退出这次命令行操作
        }
      );
    });
};
