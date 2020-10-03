import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  gistWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "15px 0",
    width: "100%",
    borderBottom: "1px solid lightgray",
  },
  gistAvatar: {
    width: 50,
    marginRight: 10,
  },
  gistFileName: {
    fontFamily: "Roboto, sans-self",
  },
  gistListWrapper: {
    height: "100%",
    overflowY: "auto",
    position: "relative",
  },
  activeGistFileName: {
    fontFamily: "Roboto, sans-self",
    color: "blue",
  },
}));

function GistItem(props) {
  const classes = useStyles();

  const [active, setActive] = useState(false);

  return (
    <div className={classes.gistWrapper} onClick={() => setActive(!active)}>
      <img
        className={classes.gistAvatar}
        src={props.gist.avatar_url}
        alt="avatar"
      />
      <div
        className={active ? classes.activeGistFileName : classes.gistFileName}
      >
        {props.gist.fileName}
      </div>
    </div>
  );
}

export default function GistsList(props) {
  const classes = useStyles();

  return (
    <div className={classes.gistListWrapper}>
      {props.gistsList.map((gist, index) => {
        return <GistItem key={index} gist={gist} />;
      })}
    </div>
  );
}
