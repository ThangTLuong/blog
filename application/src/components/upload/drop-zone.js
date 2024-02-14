import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import MediaDisplay from "../media-display";
import "./styles/drop-zone.css";

const Dropzone = ({ className, onMediaChange }) => {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    setFiles((prevFiles) => [
      ...prevFiles,
      ...acceptedFiles.map((file) => ({
        ...file,
        preview: URL.createObjectURL(file),
      })),
    ]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps({ className: className })}>
      <input {...getInputProps()} />
      <div className="upload-display">
        <MediaDisplay media={files} onMediaChange={onMediaChange}/>
        {isDragActive ? (
          <div className="upload-media-upload">
            <span className="upload-media-upload-icon material-icons-outlined text-9xl">
              file_upload
            </span>
          </div>
        ) : (
          <div className="upload-media">
            <span className="upload-media-icon material-icons-outlined text-8xl">
              file_upload
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropzone;
