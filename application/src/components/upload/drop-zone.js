import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import MediaDisplay from "../media-display";
import "./styles/drop-zone.css";

const Dropzone = ({ className, onMediaChange }) => {
  const [files, setFiles] = useState([]);
  const [rawFiles, setRawFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    setRawFiles((prevFiles) => [...prevFiles, ...acceptedFiles].slice(-4));
    setFiles((prevFiles) =>
      [
        ...prevFiles,
        ...acceptedFiles.map((file) => ({
          ...file,
          preview: URL.createObjectURL(file),
        })),
      ].slice(-4)
    );
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <form
      className={className}
      action="/posts"
      method="POST"
      encType="multipart/form-data"
    >
      <div {...getRootProps({ className: className })}>
        <input {...getInputProps()} />
        <div className="upload-display">
          <MediaDisplay
            media={files}
            rawFiles={rawFiles}
            onMediaChange={onMediaChange}
          />
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
    </form>
  );
};

export default Dropzone;
