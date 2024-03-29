import React from "react";

import uploadOptionsMain from "../resources/options.png"

function UploadOptions() {

  return (
    <div className="upload-options-group">
      <div className="dropdown-toggle">
        <img id="dropdown-toggle-icon" src={uploadOptionsMain} alt="Base button for upload option" />
        <ul className="upload-dropdown-menu">
          <li className="upload-dropdown-item"><a href="/"><img className="dropdown-item-icon" src={uploadOptionsMain} alt="Dropdown item 1" /></a></li>
          <li className="upload-dropdown-item"><a href="/"><img className="dropdown-item-icon" src={uploadOptionsMain} alt="Dropdown item 2" /></a></li>
          <li className="upload-dropdown-item"><a href="/"><img className="dropdown-item-icon" src={uploadOptionsMain} alt="Dropdown item 3" /></a></li>
          <li className="upload-dropdown-item"><a href="/"><img className="dropdown-item-icon" src={uploadOptionsMain} alt="Dropdown item 4" /></a></li>
        </ul>
      </div>
    </div>
  );
}

export default UploadOptions;