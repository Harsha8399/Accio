import './App.css';
import Editor from './components/Editor'
import React,{Component, useState ,useEffect} from 'react';
import { ReactDOM } from 'react-dom';
import useLocalStorage from './hooks/useLocalStorage';
import {FaCodepen} from "react-icons/fa"

function App() {
  const [html,setHtml] = useLocalStorage('html','')
  const [css,setCss] = useLocalStorage('css','')
  const [js,setJs] = useLocalStorage('js','')
  const [srcDoc,setSrcDoc] = useState('')

  useEffect(()=>{
    const timeout=setTimeout(()=>{
      setSrcDoc(`
      <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
      </html>`)
    },500)
    return()=>clearTimeout(timeout)
  },[html,css,js])
 
  return (
    <>
    <div className='title'>
      <div className='icon'><FaCodepen/></div>
      <div className='Heading'>Code Editor</div>
      </div>
      <div className='top'>
        <Editor 
                language='xml' 
                displayName='HTML'
                value={html}
                onChange={setHtml}
        />
        <Editor
          language='css' 
          displayName='CSS'
          value={css}
          onChange={setCss}
        />
        <Editor   
          language='javascript' 
          displayName='JS'
          value={js}
          onChange={setJs}
        /> 
      </div>
      <div className='bottom'>
        <iframe srcDoc={srcDoc}
                title='output'
                sandbox='allow-scripts'
                frameBorder='0'
                width="100%"
                height="100%"
        />
      </div>
    </>
    
  );
}

export default App;
