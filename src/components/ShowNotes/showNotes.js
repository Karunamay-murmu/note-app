import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import { noteLists, deleteNote } from '../../actions';
import LandingPage from '../LandingPage/landingPage';
import './showNotes.css';

class showNotes extends Component {
    componentDidMount() {
        this.props.noteLists()
    }
    render() {
        if (this.props.notes.length === 0) {
            return (
                <LandingPage />
            )
        } else {
            return (
                <div className='showNotes-container'>
                    {this.props.notes.map(note => {
                        return (
                            <div className='main-note-container' key={note.id}>
                                <div className='note-container'>
                                    <h1>{note.title}</h1>
                                        <p className='creating-date'>created on: {note.date}</p>
                                    <p>{note.note}</p>
                                </div>
                                <div className='flex-coloumn icons'>
                                    <Link className='icon edit-icon' to={`/edit-note/${note.id}`}><i className='fa fa-edit fa-2x'></i></Link>
                                    <Link to='' className='icon delete-icon' onClick={() => { this.props.deleteNote(note.id) }}>
                                        {/* <Link to={`/delete-note/${note.id}`}> */}
                                        <i className='fa fa-trash fa-2x'></i>
                                        {/* </Link> */}
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                    <div>
                        <button className='create-btn buttons add-note-button'>
                            <Link className='buttons' to='/create-notes'>Create new notes</Link>
                        </button>
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        notes: Object.values(state.notes)
    }
}
export default connect(mapStateToProps, { noteLists, deleteNote })(showNotes);
