import { useState } from "react"
import ReactMarkdown from "react-markdown"
import { useNavigate, useParams } from "react-router-dom"
import { deleteNote, getNote } from "../../../db/localDataSource"
import { formatDate } from "../../../lib/formatDate"
import NotFound from "../NotFound/NotFound"
import "./Note.css"


export default function Note() {

    const { id } = useParams()
    const navigate = useNavigate()

    const [note] = useState(getNote(id))

    function handleGoBack() {
        navigate(-1)
    }

    function handleDelete(id) {
        deleteNote(id)
        navigate('/', { replace: true })
    }

    return note ? 
        <div className="note container"> 
            <div className="buttons-container">
                <button className="go-back-button" onClick={handleGoBack}>Go back</button>
                <button className="delete-button" onClick={() => handleDelete(note.id)}>Delete note</button>
            </div>
            <div className="markdown">
                <ReactMarkdown>{note.markdown}</ReactMarkdown>
                <div className="date">
                    {formatDate(note.createdAt)}
                </div>
            </div>
            

        </div>
        : <NotFound />

}