import React, { useState, useEffect } from "react";

function GistItem(props) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(false);
  }, [props.gist]);

  return (
    <div className="gistWrapper" onClick={() => setActive(!active)}>
      <img className="gistAvatar" src={props.gist.avatar_url} alt="avatar" />
      <div className={active ? "activeGistFileName" : "gistFileName"}>
        {props.gist.fileName}
      </div>
    </div>
  );
}

export default function GistsList(props) {
  return (
    <div className="gistListWrapper">
      {props.gistsList.map((gist, index) => {
        return <GistItem key={index} gist={gist} />;
      })}
    </div>
  );
}
