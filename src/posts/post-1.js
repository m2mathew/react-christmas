import marked from 'marked';
export default {
  title: 'Get started with create-react-app',
  lead: `
    Creating your first React app usually starts off with a 30 minute crash course with
    Webpack, Babel and a whole lot of stuff not remotely related to React. That all changed
    with create-react-app.
  `,
  body: marked(`
There has been many attempts at making starter-packs for your next
React project. There was
[react-starter-pack](https://github.com/kriasoft/react-starter-kit),
[react-boilerplate](https://github.com/react-boilerplate/react-boilerplate),
[react-redux-universal-hot-example](https://github.com/erikras/react-redux-universal-hot-example)
and a whole [list of others](https://www.javascriptstuff.com/react-starter-projects/).

Unfortunately, a lot of them were too complete, too complex and definitely too complex for the
average project starter.

That all changed when [Dan Abramov](https://twitter.com/dan_abramov) and some of his amazing
colleagues at Facebook came out with [\`create-react-app\`](https://github.com/facebookincubator/create-react-app/)
project.

## No configuration

The main difference between this starter pack and most of the others is that the entire
Webpack and Babel configuration (as well as most other config-related stuff) had been
pulled out into its own maintained package -
[\`react-scripts\`](https://github.com/facebookincubator/create-react-app/tree/master/packages/react-scripts).
This allows the maintainers to keep every dependency up to date, and release updates as
non-breaking patch or minor releases.

In addition, \`create-react-app\` only sets up a very basic React app - no routing, state management or
fancy server side rendering. You get the setup, testing and a service worker - that's it.

## What if my app grows?

Hiding configuration might sound scary to projects that aims to grow to a certain size. If you're going to add features
to your application for the foreseeable future, chances are that you might reach a point where you need some
webpack configuration tweak that \`create-react-app\` doesn't provide. Luckily, there's an eject button!

Whenever you run \`create-react-app\` in your CLI, the \`package.json\`-file already has an \`eject\` task. Whenever you
run this, \`react-scripts\` are removed, and instead replaced with the barebones webpack- and babel config files. This
will let you expand on whatever \`create-react-app\` already set up for you, so you don't have to start from scratch
just to add hot reloading for example.

One caveat of the eject task though - once you eject from \`create-react-app\`, you can't go back - so think thoroughly
about whether that's what you want or not. Chances are, you'd be better off by forking the project on GitHub, changing
whatever you need there, and switch out your \`react-scripts\` dependency with your own package. This way you can still
sync your branch with the current master branch, and you'll get updates as they come along.

## That's it for day one!

I hope you enjoyed today's little introduction to \`create-react-app\` and how to get started with your next project.
Hopefully you'll give it a try! And I hope to see you back tomorrow, for yet another article on something cool React.
`),
  resources: [
    {
      title: 'Official site of create-react-app',
      link: 'https://github.com/facebookincubator/create-react-app/',
      body: 'The offical web site of create-react-app'
    },
    {
      title: 'Learning React with create-react-app',
      link: 'https://medium.com/in-the-weeds/learning-react-with-create-react-app-part-1-a12e1833fdc',
      body: 'A 4-part series introducing the basics of React, based on create-react-app'
    },
    {
      title: 'Automation without config',
      link: 'https://blog.kentcdodds.com/automation-without-config-412ab5e47229',
      body: 'A great article discussing how to create your own create-react-app to suit your own needs',
    },
  ],
};
