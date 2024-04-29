import React from "react";

function Links(props) {
  return (
    <div>
      <h3>Links</h3>
      {/* Display Github link */}
      <a href={props.github}>{props.github}</a>
      {/* Display LinkedIn link */}
      <a href={props.linkedin}>{props.linkedin}</a>
    </div>
  );
}

export default Links;
