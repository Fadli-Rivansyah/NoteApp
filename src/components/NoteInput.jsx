import React from 'react';
import autoBind from 'auto-bind';

class NoteInput extends React.Component {
      constructor(props) {
            super(props);
            autoBind(this);

            this.state = { 
                  title: "",
                  body: "",
                  jumKarakter: 50
            }
      }

      //menghandle value input ke title
      onTitleChangeEventHandler(e) {
            this.setState(() => {
                  const target = e.target.value;
                  // membuat fitur limit karakter
                  const limit = 50 - target.length 
                  if(limit < 0){
                        alert("Tidak boleh lebih dari 50 karakter!!")
                  }else{
                        return {title: target, jumKarakter: limit}
                  }
            });
      }

      //menghandle value dari textarea ke body
      onBodyChangeEventHandler(e) {
            this.setState(() => {
                  return {
                        body: e.target.value
                  }
            });
      }

      //handler form submit
      onSubmitHandler(e) {
            e.preventDefault();
            this.props.addNotes(this.state);
      }

      render() { 
            return ( 
                  <div className="note-input">
                        <div className="note-input__title">
                              <h2>Buat Catatan</h2>
                              <span className="note-input__title__char-limit">Sisa karakter {this.state.jumKarakter}</span>
                        </div>
                        <form onSubmit={this.onSubmitHandler}>
                              <input type="text" placeholder="title.." onChange={this.onTitleChangeEventHandler} required/>
                              <textarea name="body" id="note-input__textArea" cols="30" rows="10" placeholder="deskripsi..." onChange={this.onBodyChangeEventHandler} required></textarea>
                              <button type="submit">Buat</button>
                        </form>
                  </div>
             );
      }
}
 
export default NoteInput;