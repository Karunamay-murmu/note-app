import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './noteForm.css';

export default class createNote extends Component {

    state = {
        title: '',
        note: '',
        date: new Date().toString().slice(0, 15)
    }
    onSubmit = e => {
        e.preventDefault();
        if (this.props.isEdit) {
            this.props.onEdit(this.state);
        }
        else this.props.onSubmit(this.state);
    }
    onCreateTitle = e => {
        this.setState({
            title: e.target.value
        })
    }
    onCreateNote = e => {
        this.setState({
            note: e.target.value
        })
    }
    componentDidMount(){
        if(this.props.isEdit){
            this.setState({
                title: this.props.title,
                note: this.props.note
            })
        }
    }
    render() {
        console.log(this.state)
        return (
            <div className='form-container'>
                <form onSubmit={this.onSubmit} className='flex-coloumn'>
                    <label>Title</label>
                    <input
                        onChange={this.onCreateTitle}
                        type='text'
                        name='title'
                        required
                        placeholder='Write Title...'
                        defaultValue={this.props.title}
                    />
                    <label>Write your note</label>
                    <textarea
                        onChange={this.onCreateNote}
                        rows="20"
                        cols="20"
                        required
                        placeholder='Write your note...'
                        defaultValue={this.props.note}
                    >
                    </textarea>
                    <div className='form-buttons flex-row'>
                        <button className='buttons add-note-button' type='submit' >{this.props.type}</button>
                        <button className='buttons cancel-button' type='button' >
                            <Link className='buttons cancel-link-button' to='/'>Cancel</Link>
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}
