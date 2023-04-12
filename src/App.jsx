import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";

const api = JSON.stringify(import.meta.env.VITE_API_KEY)

const uploader = Uploader({ apiKey:  api.slice(1, 36)});
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
