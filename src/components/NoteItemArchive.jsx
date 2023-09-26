import React from 'react';

function NoteItemArchive({archive, onDelete, onAktif}) {
    return ( 
        <div className="note-item" >
            <div className="note-item__content">
                <h2 className="note-item__title">{archive.title}</h2>
                <span className="note-item__date">{archive.createdAt}</span>
                <p className="note-item__body">{archive.body}</p>
            </div>
            <div className="note-item__action">
                <button className="note-item__delete-button" onClick={() => onDelete(archive.id) }>Delete</button>
                <button className="note-item__archive-button" onClick={() => onAktif(archive.id)}>Aktif</button>
            </div>
        </div>
    );
}

export default NoteItemArchive;