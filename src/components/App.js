import React from 'react'
import '../styles/App.css';
const App = () => {
  const [text, setText] = useState(");
  const [wordCount, setCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [charLimit, setCharLimit] = useState(50);
  const [fontSize, setFontSize] = useState(16);
  
  const handleChange = (e) => {
  const value = e.target.value;
  if(value.length <= charLimit){
  setText(value);
  }
  }
  return (
    <div id="main">
    </div>
  )
}


export default App;
