// component.jsx
exports.component = name => {
  name.toLowerCase();
  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
  return (
`import React from 'react';
import style from './${name}.module.scss';
  
export function ${capitalizedName}() {

  return (
    <div className={style.${name}}></div>
  );
}`)
};

// component.stories.jsx
// exports.story = name => `import React from 'react';
// import ${name} from './${name}';
// export default {
//   title: '${name}',
//   component: ${name},
// };
// export const Default = () => <${name} />;
// `;

// component.test.jsx
exports.test = name => {
  name.toLowerCase();
  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);

  return (
`import React from 'react';
import { render } from '@testing-library/react';
import ${capitalizedName} from './${name}';\n
describe('${capitalizedName} Component', () => {\n
  // Matching Snapshots
  test('it should match the snapshot', () => {
    const { asFragment } = render(<${capitalizedName} />);
    expect(asFragment()).toMatchSnapshot();
  });\n
  // Unit tests\n
});`
  );
};

// index.js
exports.barrel = name => {
  name.toLowerCase();
  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
  return (
    `export { ${capitalizedName} } from './${name}';`
  );
};

//style.module.scss

exports.style = name => {
  name.toLowerCase();

  return (`.${name} {\n\n}`
  );
};