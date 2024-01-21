import React from "react";

import UploadOptions from "../components/upload-options";
import LeftSection from "../components/left-section";
import RightSection from "../components/right-section";
import MainSection from "../components/main-section";

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