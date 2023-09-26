import React from 'react';
import NoteItem from './NoteItem';

function NoteList({notes, onDelete, onArchive}) {
//  mengecek apakah ada nilai notes
  if(notes.length !== 0) {
    return (
      <div className="notes-list">
        {
          notes.map((note) => (
            <NoteItem key={note.id} id={note.id} {...note} onDelete={onDelete} onArchive={onArchive}/>
          ))
        }
      </div>
    );      
  } else {
    return <p className="notes-list__empty-message">Tidak ada notes!!</p>
  }
}

export default NoteList;     