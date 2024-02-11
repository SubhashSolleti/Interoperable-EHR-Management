import React, { useState } from 'react'
import axios from 'axios'
import process from 'process';


function App() {
  const [file, setFile] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      const data = new FormData()
      data.append('file', file)

      const res = await axios({
        method: 'POST',
        url: 'https://api.pinata.cloud/pinning/pinFileToIPFS',
        data: data,
        headers: {
          // pinata_api_key: process.env.VITE_PINATA_API_KEY,
          // pinata_secret_api_key: process.env.VITE_PINATA_SECRET_KEY,
          pinata_api_key: "7786d283277463ea96a9",
          pinata_secret_api_key: "613d83b66b6baec0fd92f983772626e0fd081936e441e30b10c4ec9ec74248bf",
          "Content-Type": "multipart/form-data",

        },
      });
      const url = "https://gateway.pinata.cloud/ipfs/" + res.data.IpfsHash;
      console.log(url);
      alert(`Your File has been uploaded to IPFS! \nClick the text field below to copy the link to your clipboard \n${url}`);
    }
    catch(err){
      console.log(err);
    }
  }

  return (
  <div>
    <h1>Ipfs File Upload - Upload your files</h1>
    <form>
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <button type="submit" onClick={handleSubmit}>Upload</button>
    </form>
  </div>
  )
}

export default App
