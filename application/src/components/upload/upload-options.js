import React from "react";

import uploadOptionsMain from "../../resources/options.png"

// For optional extra options that user can use.
// Probably, have an option where the background, that includes the left, right, and main
//    display section, to change if the post is the focus.
// Also have an option to save the current setup as a preset option.
const UploadOptions = () => {

  return (
    <div className="upload-options-group">
      <div className="upload-dropdown-toggle">
        <img
          id="upload-dropdown-toggle-icon"
          src={uploadOptionsMain}
          alt="Base button for upload option"
        />
        <ul className="upload-dropdown-menu">
          <li className="upload-dropdown-item">
            <a href="/">
              <img
                className="upload-dropdown-item-icon"
                src={uploadOptionsMain}
                alt="Dropdown item 1"
              />
            </a>
          </li>
          <li className="upload-dropdown-item">
            <a href="/">
              <img
                className="upload-dropdown-item-icon"
                src={uploadOptionsMain}
                alt="Dropdown item 2"
              />
            </a>
          </li>
          <li className="upload-dropdown-item">
            <a href="/">
              <img
                className="upload-dropdown-item-icon"
                src={uploadOptionsMain}
                alt="Dropdown item 3"
              />
            </a>
          </li>
          <li className="upload-dropdown-item">
            <a href="/">
              <img
                className="upload-dropdown-item-icon"
                src={uploadOptionsMain}
                alt="Dropdown item 4"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UploadOptions;