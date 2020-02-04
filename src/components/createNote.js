import React from 'react';
import { connect } from 'react-redux';

import { createNote } from '../actions';
import NoteForm from './NoteForm/noteForm';


const CreateNotes = props => {
    const {history} = props;
    const onSubmit = notes => {
        props.createNote(notes, history);
    }
    return (
        <div>
            <NoteForm onSubmit={onSubmit} type='Add Notes' />
        </div>
    )
}

export default connect(null, { createNote })(CreateNotes);
