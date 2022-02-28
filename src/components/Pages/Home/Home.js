import { useState } from "react"
import { addNote, getNotes } from '../../../db/localDataSource'
import NoteCardSmall from "../../NoteCard/NoteCardSmall"
import "./Home.css"

export default function Home() {

    const [markdown, setMarkdown] = useState('')
    const [notes, setNotes] = useState(getNotes())
    
    function handleSubmit() {
        if(!markdown) return;

        setNotes(addNote(markdown))
        setMarkdown('')
    }

    return (
        <div className='home container'>

            <h3>Note</h3>

            <textarea 
                placeholder='Note text' 
                value={markdown} 
                onChange={e => setMarkdown(e.target.value)}>
            </textarea>

            <div className='button-container'>
                <button onClick={handleSubmit}>Add note</button>
            </div>

            <div className='latest-notes'>
                <h1>Latest notes</h1>

                {
                    notes && notes.map((note, index) => 
                        <NoteCardSmall key={index} setNotes={setNotes} {...note} />
                    )
                }

            </div>

        </div>
    )
}