import React from 'react';

function NoteItem({title, createdAt, body, id, onDelete, onArchive}) {
      return ( 
            <div className="note-item">
                  <div className="note-item__content">
                        <h2 className="note-item__title">{title}</h2>
                        <span className="note-item__date">{createdAt}</span>
                        <p className="note-item__body">{body}</p>
                  </div>
                  <div className="note-item__action">
                        <button className="note-item__delete-button" onClick={() => onDelete(id) }>Delete</button>
                        <button className="note-item__archive-button" onClick={() => onArchive(id)}>Archive</button>
                  </div>
            </div>
       );
}


export default NoteItem;
