import axios from 'axios';
import React, { useState } from 'react'
type Props = {}

const Upload = (props: Props) => {
    const [image, setImage] = useState("") 
    const changData = (event: any) => {
        setImage(event.target.files[0])
    }
    const onSubmit = async (data: any) => {
        const CLOUDINARY_PRESET = "jkbdphzy";
        const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/ecommercer2021/image/upload";
        if (image) {
            const formData = new FormData();
            formData.append('file', image);
            formData.append('upload_preset', CLOUDINARY_PRESET);
            const img = await axios.post(CLOUDINARY_API_URL, formData, {
                headers: {
                    "Content-Type": "application/form-data"
                },
            });
            data.image = img.data.url;
        }
        console.log(data.image);
    }
    return (
        <div>
            <img src="" alt="" />
            <input type="file" onChange={changData} />
            <button onClick={onSubmit}>Save</button>
        </div>
    )
}

export default Upload