import React from "react";

import UploadOptions from "../components/upload/upload-options";
import LeftSection from "../components/upload/left-section";
import RightSection from "../components/upload/right-section";
import MainSection from "../components/upload/main-section";

function Upload() {
  return (
    <div id="body">
      <div className="display-sections-group flex h-full w-full">
        <LeftSection />
        <MainSection />
        <RightSection />
      </div>
      <UploadOptions />
    </div>
  );
}

export default Upload;