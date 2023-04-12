import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";


const uploader = Uploader({ apiKey:  process.env.VITE_REACT_APP_API_KEY});
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
