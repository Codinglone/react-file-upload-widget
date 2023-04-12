require('dotenv').config()
import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";


const uploader = Uploader({ apiKey:  process.env.API_KEY});
function App() {
  return (
    <div>
      <UploadButton
        uploader={uploader}
        options={{ multi: false }}
        onComplete={(files) => alert(files.map((x) => x.fileUrl).join("\n"))}
      >
        {
          ({onClick}) => <button onClick={onClick}>Upload a file...</button>
        }
      </UploadButton>
    </div>
  );
}

export default App;
