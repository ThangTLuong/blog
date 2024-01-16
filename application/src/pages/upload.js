import React from "react";

import UploadOptions from "../components/upload-options";
import LeftOptions from "../components/upload-left-options";

function Upload() {
  return (
    <div id="body">
      <div className="flex h-full">
        <div className="w-1/4">
          <LeftOptions />
        </div>
        <div className="w-1/2"></div>
        <div className="w-1/4"></div>
      </div>
      <UploadOptions />
    </div>
  );
}

export default Upload;