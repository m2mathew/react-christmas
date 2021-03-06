import marked from 'marked';
export default {
  title: 'Component libraries',
  lead: `
If you're in a rush to get something production ready, you might not have the time or resources to create your own
component library. Luckily, there are several pre-made ones to choose from!
  `,
  body: marked(`
Business is business. And sometimes, you don't have the time to create tons of components, style them and make them
animate like it's no big deal. That stuff is tedious and time-consuming! So sometimes, a ready-made component library
is the right tool for the job.

## Material design

If you want to create an app that follows the [Material Design pattern outlined by Google](https://material.io/), there
are actually several different implementations to choose from. The one I have the most experience with is [Material
UI](http://www.material-ui.com/#/) - a pretty complete toolbox that let's you spit out clever-looking apps in no-time.

Two other implementations of the same design are [MUICSS](https://www.muicss.com/docs/v1/react/introduction) and
[react-toolbox](https://github.com/react-toolbox/react-toolbox). I haven't used them personally, but they both get good
grades in social media and around the web. Consider them all, and use the API you like the best.

## Bootstrap

Bootstrap has been battle tested like few other libraries ever has, and of course there is a React component library
implementing it. The [react-bootstrap](https://react-bootstrap.github.io/) package contains pretty much all of
Bootstrap, and even though it's still in a pre 1.0.0 release, it's being used by tons of projects online.

## Semantic UI

A third approach, and one of the best looking ones in my mind, is the [React port of the Semantic UI
library](https://react.semantic-ui.com). It looks really good, has most of the components you'll ever need, and has
some really nice documentation.

## Tons of others!

If there is a design system that you really like, there is probably a React implementation of it somewhere. And although
creating your own design system probably is what you'd like to do in the long run, using one of these to create a
proof of concept or a simple one-off implementation is probably what you want.
`),
  resources: [
    {
      title: 'Best UI frameworks',
      link: 'https://hackernoon.com/the-coolest-react-ui-frameworks-for-your-new-react-app-ad699fffd651',
      body: 'A pretty complete list of React component libraries out there'
    },
    {
      title: 'Material UI',
      link: 'http://www.material-ui.com',
      body: 'My go-to component toolkit for simple mock-ups and PoCs'
    },
    {
      title: 'Semantic UI',
      link: 'https://react.semantic-ui.com',
      body: 'Another great choice for your component library needs',
    },
  ],
};
