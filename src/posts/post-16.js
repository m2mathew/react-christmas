import marked from 'marked';
export default {
  title: 'Functional vs class components',
  lead: `
In React, there are two types of components - functional ones and class based ones. What's the
difference and when should you use which one?
  `,
  body: marked(`
React is all about components. These little nuggets of UI compose together to create your application. Some are really
versatile and reusable (like \`<Button />\` or \`<InputField />\` components), while other are one-off containers
that provides functions to fetch or send data to APIs, as well as orchestrating that data for use by other components
(like \`<CommentsSection />\` or \`<ArticlePage />\` components). In other words - components can be pretty different!

To deal with this difference, React provides two different types of components - we'll call them functional and class
based. This article will describe the upsides and downsides of both, and then provide you with a suggestion of when
you should use which approach.

## Functional components: A great place to start!

A functional component is a regular pure JavaScript function that accepts props as its argument, and returns some JSX.
Here are two simple examples:

\`\`\`javascript
function Heading(props) {
  return <h1>{props.children}</h1>
}

const Button = (props) => <button className="button" {...props} />;
\`\`\`

They look so innocent! And that's the beauty of functional components - they are simple to both read and understand,
and there is next to no boiler plate to make them!

Actually, most of the components I write are functional components, and close to every single on of them start out that
way. It's a great way to make sure you're making each part of your application as simple and reusable as possible!

## Class based components: When you need a little bit more oomph!

A class based component is - surprise, surprise - a JavaScript class. It extends \`React.Component\`, and its only
required method is \`render()\`. Here's an example of one of those:

\`\`\`javascript
class Heading extends React.Component {
  render() {
    return <h1>{this.props.children}</h1>
  }
}
\`\`\`

This component is - as far as React is concerned - functionally equal to the first functional component example above.
But this guy has some pretty neat super powers underneath the surface.

### You get lifecycle hooks!

React provides a bunch of so-called lifecycle hooks - or methods that are called at certain points in the component's
lifecycle. You can read about them in detail [here](https://reactjs.org/docs/react-component.html), but basically
there are methods for when the component is rendered and removed to and from the DOM, as well as whenever it's updated
with new state or props.

### You get internal state!

Although most state can be passed down as props from containing components or a central state management library like
Redux, some state is internal to a component and doesn't need to be anywhere else. This could be whether or not an
accordion component is open or closed, or perhaps the currently selected item in a dropdown.

Class based components gives you a property called \`this.state\` to read state from and a method \`this.setState\`
that lets you update it. There's actually tons of stuff you can do with internal state, and I
[wrote about it here](https://react.christmas/4).

### You (can) get performance increases!

Another great aspect of class based components is that you can decide whether or not they should update. This might or
might not be important to your application - but when it is, there's some pretty simple things you can do to boost
performance with this kind of component.

One way to improve performance (i.e. the amount of re-renders your component does) is to implement a
\`shouldComponentUpdate\` method. This method gives you the next and current props and state, and lets you implement
a boolean expression that triggers a re-render or not.

A much simpler way which is good enough for most cases, is to extend the \`React.PureComponent\` class instead of
\`React.Component\`. This one comes with a simple implementation of the \`shouldComponentUpdate\` method, that just
checks whether the current and next state and props are equal. Turns out, this little trick alone can make huge and slow
application quicker in a matter of four characters!

## So which ones should you choose to use?

Well, it depends on your usecase. The incredible simplicity of functional components make them a great place to start
out, and if you need some of the cool features you get with class based components you can simply "upgrade" your
component whenever those needs come around. At least, that's what I do.
`),
  resources: [
    {
      title: 'State and lifecycle',
      link: 'https://reactjs.org/docs/state-and-lifecycle.html',
      body: 'The React docs does a great job of explaining the differences between functional and class based components',
    },
    {
      title: 'Stateful vs stateless components',
      link: 'https://code.tutsplus.com/tutorials/stateful-vs-stateless-functional-components-in-react--cms-29541',
      body: 'A very detailed article that explains the differences between stateful and stateless components',
    },
    {
      title: '45x faster functional components',
      link: 'https://medium.com/missive-app/45-faster-react-functional-components-now-3509a668e69f',
      body: 'A cool little hack to improve the performance of functional components - make sure to read the comments!',
    },
  ],
};
