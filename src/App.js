import './App.css';
import React from 'react';
// import ReactDOM from 'react-dom/client';
import {marked} from 'marked';


marked.setOptions({
  breaks: true,
});

function App() {
  return (
    <div className="App">
        <MarkupEditor />
    </div>
  );
}

class MarkupEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: placeholder,
      placeholder: "Monkey ass"
    }

    this.textChange = this.textChange.bind(this)
  }

  textChange(e) {
    this.setState({
      input: e.target.value
    })
  }

  render() {
    return (
      <div className="Body-content">
          <Preview input={this.state.input} />
        <div id="spacer"></div>
          <Editor textChange={this.textChange} input={this.state.input} />
      </div>
    )
  }
}

class Editor extends React.Component {
  render() {
    return (
      <div className="TextBoxes" id="editorBay">
      <div id="decalBar">
        Editor
      </div>
      <textarea value={this.props.input} onChange={this.props.textChange} id="editor" />
    </div>
    )
  }
}

class Preview extends React.Component {
  render() {
    return (
      <div className="TextBoxes" id="previewBox">
        <div id="decalBar">
            Preview
          </div>
        <div id="preview" dangerouslySetInnerHTML={{__html: marked.parse(this.props.input)}} />
      </div>
    )
  }
}

const placeholder = `# This took too long
## the marked documentation is pretty scary
I think I might've [tweeted](https://twitter.com) about it.

the \`marked()\` method needs to be output through a method like \`dangerouslySetInnerHTML\`. 
That part sort of _stumped_ me.

Oh btw, you can code in this \`<div></div>\`.

\`\`\`
// Look at this cool function 
function getCoffee(cup) {
  if (machine >= 1) {
    cupFill(cup);
  } else {
    return cup;
  }
  return cup + 1
}
\`\`\`

Wow, I'm hungry. Guess I should:
- Eat
  - Read
    - Workout
      - Sleep

In the order of
1. Eat
1. Eat
1. more eat

> **I've returned**

 said batman. Probably.

In case you're not sure
![batman](https://www.freepnglogos.com/uploads/batman-png/batman-background-clipart-32.png)

**THIS IS BATMAN**
probably
`

export default App;