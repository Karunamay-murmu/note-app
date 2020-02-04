import React, { Component } from 'react';

import NoteForm from './NoteForm/noteForm';
import { noteLists, editNote } from '../actions';
import { connect } from 'react-redux';

class EditNote extends Component {

    componentDidMount() {
        this.props.noteLists(this.props.match.params.id);
    }
    onEdit = newNotes => {
        const { history } = this.props;
        this.props.editNote(this.props.match.params.id, newNotes, history);
    }
    render() {
        if (!this.props.editedNote) {
            return <div>loading</div>
        }
        return (
            <div>
                <NoteForm 
                    type='Save'
                    isEdit={true} 
                    onEdit={this.onEdit} 
                    title={this.props.editedNote.title} 
                    note={this.props.editedNote.note} 
                />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { editedNote: state.notes[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { editNote, noteLists })(EditNote);