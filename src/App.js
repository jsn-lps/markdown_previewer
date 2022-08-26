import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Body-content">


        <div className="TextBoxes" id="preview">
          <div id="decalBar">
            Preview
          </div>
          <div id="boxcontent">
            preview text box with placeholder
          </div>
        </div>



        <div id="spacer"></div>
        


        <div className="TextBoxes" id="editor">
          <div id="decalBar">
            Editor
          </div>
          <textarea id="boxcontent">
            editor text box also with placeholder
          </textarea>
        </div>


      </div>
    </div>
  );
}

export default App;



