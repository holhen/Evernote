import React, { Component } from 'react';
import './App.css';
import SidebarComponent from "./sidebar/sidebar"
import EditorComponent from "./editor/editor"

const firebase = require("firebase")

class App extends Component {
  constructor(){
    super()
    this.state = {
      selectedNodeIndex: null,
      selectedNote: null,
      notes: null
    }
  }

  render(){
    return(
      <div className="app-container">
        <SidebarComponent 
            selectedNodeIndex={this.state.selectedNodeIndex}
            notes={this.state.notes}
            deleteNote={this.deleteNote}
            selectNote={this.selectNote}
            newNote={this.newNote}/>
        {
          this.state.selectedNote ? 
          <EditorComponent selectedNote = {this.state.selectedNote}
          selectedNodeIndex = {this.state.selectedNodeIndex}
          notes={this.state.notes}
          noteUpdate={this.noteUpdate}/> :
          null
        }
      </div>
    )
  }

  componentDidMount = () => {
      firebase
          .firestore()
          .collection('notes')
          .onSnapshot(serverUpdate => {
            const notes = serverUpdate.docs.map(_doc => {
              const data = _doc.data()
              data['id'] = _doc.id
              return data
            }) 
            console.log(notes)
            this.setState({
              notes: notes
            })
          })
  }

  selectNote = (note, index) => this.setState({
    selectedNoteIndex: index,
    selectedNote: note
  })

  noteUpdate = (id, noteObj) => {
      firebase
          .firestore()
          .collection('notes')
          .doc(id)
          .update({
            title: noteObj.title,
            body: noteObj.body,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
          })
  }

  newNote = async (title) => {
    const note = {
      title: title,
      body: ''
    }
    const newFromDB = await firebase
        .firestore()
        .collection('notes')
        .add({
          title: note.title,
          body: note.body,
          timestamp: firebase.firestore.FieldValue.serverTimestamp() 
        })
    const newID = newFromDB.id
    await this.setState({
      notes: [...this.state.notes, note]
    })  
    const newNoteIndex = this.state.notes.indexOf(this.state.notes.filter(_note => _note.id = newID)[0])
    this.setState({selectedNote: this.state.notes[newNoteIndex], selectedNodeIndex: newNoteIndex})
  }
  deleteNote = async (note) => {
      const noteIndex = this.state.nodes.indexOf(note)
      await this.setState({notes: this.state.notes.filter(_note => _note !== note)})
      if (this.state.selectedNodeIndex === noteIndex) {
        this.setState({selectedNodeIndex: null, selectedNote: null})
      }
      else {
        this.state.notes.length > 1 ?
          this.selectNote(this.state.notes[this.state.selectedNodeIndex - 1], this.state.selectedNodeIndex - 1) :
          this.setState({selectedNodeIndex: null, selectedNote: null})
      }

      firebase
        .firestore()
        .collection('notes')
        .doc(note.id)
        .delete()
  }
}

export default App;
