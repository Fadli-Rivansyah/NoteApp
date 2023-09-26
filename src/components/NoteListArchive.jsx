import React from 'react';
import NoteItemArchive from './NoteItemArchive';

function NoteArchive({ archive, onDelete, onAktif}) {
      //mengecek nilai archive
      if(archive.length !== 0){
            return ( 
                  <div className="notes-list">
                        {
                              archive.map( archive => (
                                    <NoteItemArchive key={archive.id} id={archive.id} archive={archive} onDelete={onDelete} onAktif={onAktif} />
                              ))
                        }
                  </div>
            );
      } else {
            return <p className="notes-list__empty-message">Tidak ada yang diarsip!!</p>
      }
}

export default NoteArchive;