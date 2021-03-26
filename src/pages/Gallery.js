import { useState, useEffect } from 'react'
import firebase from '../config'
import { v4 as uuidv4 } from 'uuid';


const Gallery = () => {
    const [file, setFile] = useState(null);
  const [url, setURL] = useState("");
  let storage = firebase.storage()

  function handleChange(e) {
    setFile(e.target.files[0]);
  }

  function handleUpload(e) {
    e.preventDefault();
    const uploadTask = storage.ref(`/images/${file.name}`).put(file);
    uploadTask.on("state_changed", console.log, console.error, () => {
      storage
        .ref("images")
        .child(file.name)
        .getDownloadURL()
        .then((url) => {
          setFile(null);
          setURL(url);
          writeData(url)
        });
    });
  }
  const writeData = (url)=>{
    if(url!=''){
        firebase.database().ref('image/'+uuidv4()).update({
            url:url
           }).then(()=>{
              alert("image uploaded");
              setFile('')
              setURL('')
              setFile(null);
           })
           
    }
        
    
}
    return ( <>
        <h1>Gallery</h1>
        <div>
      <form onSubmit={handleUpload}>
        <input type="file" onChange={handleChange} />
        <button disabled={!file}>upload to firebase</button>
      </form>
      <div className="container mt-5 ml-3" >
      <img src={url} alt="" style={{width:100}} />
      </div>
    </div>
     </> );
}
 
export default Gallery;