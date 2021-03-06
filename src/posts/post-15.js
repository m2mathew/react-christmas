import marked from 'marked';
export default {
  title: 'Documenting your components',
  lead: `
If you're writing components that's shared between different teams, or even different developers, documenting your
components is a must. And it's crazy simple!
  `,
  body: marked(`
When I'm not drinking wine and buying silly domain names, I'm working on a project in a pretty large corporation here in
Norway. We have a component library that's shared between a ton of teams, and making sure those components are
documented correctly saves a lot of time.

## Meet \`react-styleguidist\`

Now, there are tons of tools that basically do the same thing, but I've had tons of great experience with
\`react-styleguidist\`. This tool gives you two things at once - an isolated component development playground, and a
simple way to create great docs!

To get started, install it, and add the following tasks to your \`package.json\` file:

\`\`\`javascript
"scripts": {
  "styleguide": "styleguidist server",
  "styleguide:build": styleguidist build"
}
\`\`\`

The first command starts a local development server, which lets you develop your components without having to deal
with the rest of your application, and the second generates a static HTML styleguide that you can expose to your fellow
developers.

There's [some setup you might have to do](https://react-styleguidist.js.org/docs/components.html), but if you're using
[\`create-react-app\`](https://github.com/facebookincubator/create-react-app) you're pretty much good to go!

## So how do I document?

Great question! Actually, if you have been a good developer and added prop types to your components already, those will
automatically be made available in your generated docs. But you can do so much more!

### Comments

Styleguidist automatically picks up JSDoc style comments from your code, and displays them in your documentation. Here
is an example:

\`\`\`javascript
/**
 * General button component, use for anything that involves *user interaction*
 */
const Button = (props) => (
  <button className={\`button button--\${props.type}\`} onClick={props.onClick}>
    {props.children}
  </button>
);

Button.propTypes = {
  /** Primary is the most important ones, secondary is for when you already have a primary */
  type: oneOf(['primary', 'secondary']).isRequired,
  /** A function that's called whenever the button is clicked */
  onClick: func,
  /** Anything you want inside the button */
  children: node.isRequired
};
\`\`\`

This will create a beautiful table of properties and descriptions. Styleguidist also respects \`defaultProps\`, if
you've specified those.

### Examples

If you want a more immersive experience for your developer consumers, you can add a readme for a given component. Place
a file named \`<COMPONENT_NAME>.md\` in the folder you've placed your component ([I suggest you create each component
in it's own folder](/3)), and describe how your component should be used. You can even add examples that will render in
your documentation - and be fully interactive!

## There are other tools also

Of course there are. There's [\`react-docgen\`](https://github.com/reactjs/react-docgen), and
[\`react-storybook\`](https://storybook.js.org/), but in my mind - Styleguidist is in its league of its own. However,
test them all out, and find the one that works for you!
`),
  resources: [
    {
      title: 'Official site of Styleguidist',
      link: 'https://react-styleguidist.js.org/',
      body: 'The place to start when you want to document your code. Great docs and great tutorials!'
    },
    {
      title: 'Storybook vs Styleguidist',
      link: 'https://spectrum.chat/thread/d6c4e134-85ec-42be-80d2-a4ef3069ed3d',
      body: 'The final showoff between the two major players in the React documentation game. Who\' going to win?',
    },
    {
      title: 'Building living documentation with Storybook',
      link: 'https://medium.com/@mlthuret/building-a-react-components-living-documentation-using-react-storybook-5f11f0e7d23e',
      body: 'Storybook is another great tool to write living documentation for your components. Check it out!',
    },
  ],
};
