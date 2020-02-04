import { add_Notes, show_Notes, edit_note, delete_note } from '../localStorage';

export const noteLists = () => async dispatch => {
    const allNotes = show_Notes();
    dispatch({
        type: 'SHOW_NOTES',
        payload: allNotes
    })
}
export const createNote = (notes, history) => async dispatch => {
    const notesData = add_Notes(notes)
    dispatch({
        type: 'CREATE_NOTE',
        payload: notesData
    })
    history.push('/')
}
export const editNote = (id, notes, history) => async dispatch => {
    const editedNote = await edit_note(id, notes);
    dispatch({
        type: 'EDIT_NOTE',
        payload: editedNote
    })
    history.push('/')
}
export const deleteNote = id => async dispatch => {
    await delete_note(id)
    dispatch({
        type: 'DELETE_NOTE',
        payload: id
    })
}