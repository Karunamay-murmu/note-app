import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import CreateNote from '../components/createNote';
import ShowNotes from './ShowNotes/showNotes';
import EditNote from '../components/editNote';
import DeleteNote from '../components/deleteNote';
import Header from './Header/Header';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header />
                <Route path='/' exact component={ShowNotes} />
                <Route path='/create-notes' exact component={CreateNote} />
                <Route path='/edit-note/:id' exact component={EditNote} />
                <Route path='/delete-note/:id' exact component={DeleteNote} />
            </BrowserRouter>
        )
    }
}