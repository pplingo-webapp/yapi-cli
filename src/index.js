const fs = require('fs-extra');
const path = require('path');
const yargs = require('yargs');
const utils = require('./utils');
const commandsDir = path.resolve(__dirname, 'commands');
var commands = [];
var commandsFile = fs.readdirSync(commandsDir);
commandsFile.forEach(function (file) {
  // 过滤不是 .js 文件
  if (path.extname(file) !== '.js') return null;
  // 将相对路径解析为绝对路径，被导入该模块
  // 如何该模块，没有导出 module.exports
  // 直接报错
  let commandModule = require(path.resolve(commandsDir, file));
  if (!commandModule) {
    throw new Error('找不到 module 在 ' + file + '文件');
  }
  let commandName = path.basename(file, '.js');
  // 装置对应的命令模块
  yargs.command(commandName, commandModule.desc, commandModule.setOptions, commandModule.run);
})

try {
 
  yargs.argv;
  if (yargs.argv._.length === 0 && !process.argv[2]) {
    const root = process.cwd();
    let configFilepath = path.resolve(root, 'config.json');
    if (!utils.fileExist(configFilepath)) {
      return console.log('在项目目录找不到配置文件 config.json,请确认是否安装项目到此目录');
    }
    let packageJson = require(path.resolve(root, './vendors/package.json'));
    console.log(`当前项目版本是：${packageJson.version}`)
  }

} catch (e) {
  console.error(e);
}


