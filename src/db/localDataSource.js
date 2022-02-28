function nextId(arr) {

    let lastId = 0

    for(const item of arr) {

        if(item.id > lastId)
            lastId = item.id

    }

    return lastId + 1

}

function loadNotes() {

    try {

        const notesJson = localStorage.getItem('notes')

        return !notesJson ? [] : JSON.parse(notesJson)

    } catch(error) {

        console.error('Failed to parse notes.')

        localStorage.removeItem('notes')

        return []

    }
}

function saveNotes(arr) {

    localStorage.setItem('notes', JSON.stringify(arr))

}

export function addNote(markdown) {

    const notes = loadNotes()
    const id = nextId(notes)

    notes.unshift({
        id, 
        markdown,
        createdAt: Date.now()
    })

    saveNotes(notes)

    return notes

}

export function getNote(id) {

    id = Number.parseInt(id)

    const notes = loadNotes()
        
    return notes[notes.findIndex(note => note.id === id)]
    
}

export function getNotes() {

    const notes = loadNotes()

    return notes

}

export function deleteNote(id) {

    id = Number.parseInt(id)

    const notes = loadNotes()

    const filtered = notes.filter(note => note.id !== id)

    saveNotes(filtered)

    return filtered

}