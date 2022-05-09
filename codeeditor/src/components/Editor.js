import React,{useState} from 'react'
import 'codemirror/lib/codemirror.css'//for styles in editor
import 'codemirror/theme/material.css'//css styles for material
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled as ControlledEditor} from 'react-codemirror2'
import {FaExpand} from "react-icons/fa"

function Editor(props) {
    const {
        language,
        displayName,value,
        onChange,
    } = props
    const [open,setOpen] = useState(true)
    function handleChange(editor,data,value){
        onChange(value)
    }
  return (
    <div className={`editor-container ${open ? '' :'collapsed'}`}>
        <div className='editor-title'>
            {displayName}
            <button type='button'
                    className='expand-collapse' 
            onClick={()=>setOpen(prevOpen => !prevOpen)}>
                <FaExpand />
            </button>
        </div>
        <ControlledEditor
         onBeforeChange={handleChange}
         value={value}
         className="code-mirror-wrapper"
         options={{
             lineWrapping : true,
             lint : true,
             mode : language,
             lineNumbers: true,
             theme: 'material',
         }}
        />
    </div>
  )
}

export default Editor