import React from 'react';
import NoteInput from './NoteInput';
import NoteList from './NoteList';
import {getInitialData, showFormattedDate} from '../utils/index.js';
import NoteListArchive from './NoteListArchive';
import autoBind from 'auto-bind';

class NoteApp extends React.Component {
      constructor(props) {
            super(props);
            autoBind(this);

            this.state = {
                  notes: getInitialData(),
                  archive : [],
                  queryFilter:""
            }

            //binding catatan aktif
            // this.onDeleteHandler = this.onDeleteHandler.bind(this);
            // this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
            // this.onArchiveHandler = this.onArchiveHandler.bind(this);

            //binding arsip
            // this.onDeleteArchive = this.onDeleteArchive.bind(this);
            // this.onAktifNotesHandler = this.onAktifNotesHandler.bind(this);
      }

      //handler button delete pada catatan aktif
      onDeleteHandler(id) {
            const notes = this.state.notes.filter(note => note.id !== id);
            this.setState({notes});
      }

      // handler button arsip pada catatan aktif
      onArchiveHandler(id) {
            this.setState((prevState) => {
                  this.state.notes.filter(note => {
                        if(note.id === id){
                              return this.state.archive.push({
                                    id: note.id,
                                    title:note.title,
                                    body: note.body,
                                    createdAt: note.createdAt,
                                    arsip:true
                              })
                        }
                        
                  });

                  return {
                        archive : [
                              ...prevState.archive
                        ]
                  }

            });
            // menghapus note pada catatan aktif
            const notes = this.state.notes.filter(note => note.id !== id);
            this.setState({notes});
      }

      //handler button create note
      onAddNoteHandler({title, body}) {
            this.setState((prevState) => {
                  return {
                        notes: [
                              ...prevState.notes, {
                                    id:+new Date() ,
                                    title,
                                    body,
                                    createdAt: showFormattedDate(+new Date()),
                                    arsip: false
                              }
                        ]
                  }
            } )
      }

      //button delete card archive
      onDeleteArchive(id) {
            const archive = this.state.archive.filter(archive => archive.id !== id);
            this.setState({archive});
      }

      onAktifNotesHandler(id) {
            // seleksi archive dan menambahkan ke note aktif
            this.setState((prevState) => {
                const a =  this.state.archive.filter(archive => {
                        if(archive.id === id){
                              return this.state.notes.push({
                                    id: archive.id,
                                    title:archive.title,
                                    body: archive.body,
                                    createdAt: archive.createdAt,
                                    arsip:false
                              });
                        }     
                  });

                  return {
                        notes: [
                              ...prevState.notes, 
                        ]
                  }
            });

            // menghapus archive
            const archive = this.state.archive.filter(archive => archive.id !== id);
            this.setState({archive});
      }     

      onSearchHandler(e) {
            this.setState({
                  queryFilter: e.target.value
            });
      }
                             
      render() { 

            const filterNote = this.state.notes.filter(note => 
                  note.title.toLowerCase().includes(this.state.queryFilter.toLowerCase())
            )

            return ( 
                  <div className="note-app">
                        <div className="note-app__header">
                              <h1>Notes</h1>
                        </div>
                        <div className="note-app__body">
                              <NoteInput addNotes={this.onAddNoteHandler}/>
                              <div className="note-app__header" >
                                    <h2>Catatan Aktif</h2>
                                    <input type="text" onChange={this.onSearchHandler} placeholder="Search.." />
                              </div>
                              <NoteList notes={filterNote}  onArchive={this.onArchiveHandler} onDelete={this.onDeleteHandler}/>
                              <h2>Asip</h2>
                              <NoteListArchive archive={this.state.archive} onDelete={this.onDeleteArchive} onAktif={this.onAktifNotesHandler} />
                        </div>
                  </div>
             );
      }
}
 
export default NoteApp;