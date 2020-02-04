

export const add_Notes = notes => {

    let fetchNotes = window.localStorage.allNotes;

    if (!fetchNotes)
        fetchNotes = window.localStorage.setItem('allNotes', JSON.stringify([]));

    fetchNotes = JSON.parse(window.localStorage.allNotes)
    fetchNotes.push(notes);
    fetchNotes.forEach((note, i) => {
        note.id = i + 1;
    })

    window.localStorage.setItem('allNotes', JSON.stringify(fetchNotes));
    return fetchNotes[fetchNotes.length - 1]

}

export const show_Notes = () => {
    return JSON.parse(window.localStorage.getItem('allNotes'));
}

export const edit_note = (id, notes) => {

    let allNotes = JSON.parse(window.localStorage.allNotes);
    let updatesExistingNote = {...allNotes[id -1], title: notes.title, note: notes.note, id: Number(id)};
    let updatedAllnotes = [...allNotes.slice(0, id - 1), updatesExistingNote, ...allNotes.slice(id)]
    window.localStorage.setItem('allNotes', JSON.stringify(updatedAllnotes))

    return updatesExistingNote;

}

export const delete_note = id => {

    let allNotes = JSON.parse(window.localStorage.allNotes);
    let newNoteList = [...allNotes.slice(0, id - 1), ...allNotes.slice(id)];
    newNoteList.forEach((note, i) => {
        note.id = i + 1;
    })
    window.localStorage.setItem('allNotes', JSON.stringify(newNoteList))
}