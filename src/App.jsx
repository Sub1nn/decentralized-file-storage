import { Download, Share2, UploadIcon, X } from "lucide-react"
import { useState } from "react"

function App() {
  const [files, setFiles] = useState([])

  const onFileDrop = (event) => {
    const newFile = event.target.files[0]
    setFiles((prev) => [...prev, newFile])
  }

  const removeFile = (name) => {
    setFiles((prev) => prev.filter((file) => file.name !== name))
  }

  return (
    <main className="min-h-screen grid place-content-center">
      <div className="h-52 w-96 border-4 border-dashed border-gray-300 rounded-lg relative grid gap-y-4 content-center justify-items-center">
        <UploadIcon color="#0095ff" size={70} />

        <h2 className="text-3xl font-bold">Drag your file here</h2>

        <input
          type="file"
          className="w-full h-full absolute left-0 top-0 opacity-0 cursor-pointer"
          onChange={onFileDrop}
        />
      </div>

      <div className="text-lg mt-7 space-y-3">
        {files.map((file) => (
          <div
            key={file.name}
            className="flex justify-between items-center border-b-2 border-gray-200 pb-4 font-medium"
          >
            <p>{file.name}</p>

            <div className="flex gap-x-3 items-center">
              <button>
                <Share2 />
              </button>
              <button>
                <Download />
              </button>
              <button onClick={() => removeFile(file.name)}>
                <X />
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default App
