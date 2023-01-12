import axios from 'axios';
import React from 'react'

type Props = {}

const Upload = (props: Props) => {
    const [uploadedImage, setUploadedImage] = React.useState("");
    const [name, setName] = React.useState("")
    const fileSelectedHandler = (event: any) => {
        console.log(event.target.files[0]);
        setUploadedImage(event.target.files[0]);
        setName(event.target.files[0].name)
    }
    console.log(name);
    
    const fileUploadHandler = () => {
        const fd = new FormData();
        fd.append('image', uploadedImage, name)
        axios.post('https://image-uploader-anhhtus.herokuapp.com/api/upload', fd)
            .then(res => {
                console.log(res);
            });
    }
  return (
    <div>
        <input type="file" onChange={fileSelectedHandler} />
        <button onClick={fileUploadHandler}>Upload</button>
    </div>
  )
}

export default Upload