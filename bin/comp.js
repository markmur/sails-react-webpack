'use strict';

var inquirer = require('inquirer');
var fs = require('fs');
var fsPath = require('fs-path');

var stateful = fs.readFileSync('./bin/templates/stateful-template.js', 'utf8');
var statefulTest = fs.readFileSync('./bin/templates/stateful-test-template.js', 'utf8');

var stateless = fs.readFileSync('./bin/templates/stateless-template.js', 'utf8');
var statelessTest = fs.readFileSync('./bin/templates/stateless-test-template.js', 'utf8');

/**
 * Generate the component/test template
 * @method generateTemplate
 * @param  {String} template - the file contents
 * @param  {String} name - the component name
 * @return {String} the generated template contents
 */
function generateTemplate(template, name) {
  return template.replace(/\$NAME/g, name);
}

/**
 * Create a file
 * @method createFile
 * @param  {String} path
 * @param  {String} template - the file contents
 */
function createFile(path, template) {
  fsPath.writeFile(path, template, err => {
    if (err) throw err;
    else console.log('Generating file:', path);
  });
}

inquirer.prompt([
  {
    type: 'list',
    name: 'type',
    message: 'What type of component do you want to generate?',
    choices: ['Stateful', 'Stateless']
  },
  {
    type: 'input',
    name: 'name',
    message: 'What would you like to name it?'
  },
  {
    type: 'input',
    name: 'path',
    message: 'Where would you like to generate it? /assets/components/'
  },
  {
    type: 'confirm',
    name: 'test',
    message: 'Would you like to generate a test file?'
  }
]).then(function (answers) {

  var type = answers.type,
      name = answers.name,
      path = answers.path,
      test = answers.test;

  var template, testTemplate;

  // DETERMINE COMPONENT TYPE
  if (type === 'Stateful') {
    template = stateful;
    testTemplate = statefulTest;
  } else {
    template = stateless;
    testTemplate = statelessTest;
  }

  // REMOVE TRAILING SLASH FROM PATH
  if (path.lastIndexOf('/') > -1) {
    path = path.substring(0, path.lastIndexOf('/'));
  }

  // FORMAT THE PATH
  if (path) {
    path = `./assets/components/${path}/${name}`;
  } else {
    path = `./assets/components/${name}`;
  }

  // GENERATE THE COMPONENT
  createFile(`${path}/${name}.jsx`, generateTemplate(template, name));

  // GENERATE THE TEST FILE
  if (answers.test) {
    createFile(
      `${path}/${name}.test.jsx`,
      generateTemplate(testTemplate, name)
    );
  }
});
