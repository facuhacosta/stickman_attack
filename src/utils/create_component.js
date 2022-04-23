const fs = require('fs');
const { component, test, barrel, style } = require('./components_templates');

// grab component name from terminal argument
const [name] = process.argv.slice(2);
if (!name) throw new Error('You must include a component name.');

const dir = `./src/app/components/${name}`;

// throw an error if the file already exists
if (fs.existsSync(dir)) throw new Error('A component with that name already exists.');

// create the folder
fs.mkdirSync(dir, { recursive: true }, err => { });

function writeFileErrorHandler(err) {
  if (err) throw err;
}

// component.tsx
fs.writeFile(`${dir}/${name}.jsx`, component(name), writeFileErrorHandler);
// component.module.scss
fs.writeFile(`${dir}/${name}.module.scss`, style(name), writeFileErrorHandler);
// storybook.jsx
// fs.writeFile(`${dir}/${name}.stories.jsx`, story(name), writeFileErrorHandler);
// test.jsx
fs.writeFile(`${dir}/${name}.test.jsx`, test(name), writeFileErrorHandler);
// index.tsx
fs.writeFile(`${dir}/index.ts`, barrel(name), writeFileErrorHandler);

////////////////
/// Optional ///
////////////////

// // insert new component into 'components/index.ts file
// fs.readFile('./src/components/index.ts', 'utf8', function (err, data) {
//   if (err) throw err;

//   // grab all components and combine them with new component
//   const currentComponents = data.match(/(?<=import )(.*?)(?= from)/g);
//   const newComponents = [name, ...currentComponents].sort();

//   // create the import and export statements
//   const importStatements = newComponents
//     .map(importName => `import ${importName} from './${importName}';\n`)
//     .join('');
//   const exportStatements = `export {\n${newComponents
//     .map(component => `  ${component},\n`)
//     .join('')}};\n`;

//   const fileContent = `${importStatements}\n${exportStatements}`;

//   fs.writeFile(`./src/components/index.ts`, fileContent, writeFileErrorHandler);
// });