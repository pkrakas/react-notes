import { Link } from "react-router-dom"
import { deleteNote } from "../../db/localDataSource"
import ReactMarkdown from "react-markdown"
import "./NoteCardSmall.css"
import { formatDate } from "../../lib/formatDate"

export default function NoteCardSmall({ id, markdown, createdAt, setNotes }) {

    function handleDelete(id) {
        setNotes(deleteNote(id))
    }

    return (
        <div className="note-card-small">
            <div className="content-container">
                <div className="markdown">
                    <ReactMarkdown>{markdown}</ReactMarkdown>
                </div>
                <div className="date">
                    <Link to={`/note/${id}`}>{formatDate(createdAt)}</Link>
                </div>
            </div>
            <div className="delete-button-container">
                <button className="delete-button" onClick={() => handleDelete(id)}>Delete note</button>
            </div>
        </div>
    )

}