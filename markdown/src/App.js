import './App.css';
import ReactMarkdown from 'react-markdown'
import React from 'react'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      markdown :'# Hello\n'
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e){
    this.setState({
      markdown: e.target.value
    })
  }
  render(){
    return(
      <div className='App'>
        <textarea onChange={this.handleChange}/>
        <ReactMarkdown className="preview" children={this.state.markdown}/>
      </div>
    )
  }
}

export default App;
