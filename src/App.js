import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import { GistsService } from "./services/gists.service";

import GistsList from "./components/GistsList";
import PaginationRounded from "./components/Pagination";
import Loading from "./components/Loading";

const useStyles = makeStyles(() => ({
  pageContainer: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    height: 40,
    display: "flex",
    alignItems: "center",
    paddingLeft: "20px",
    fontWeight: 600,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    background: "#F3F3F3",
  },
  gistsContainer: {
    height: "calc(100% - 150px)",
    paddingLeft: 20,
    position: "relative",
  },
  paginationPan: {
    height: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingRight: 30,
  },
}));

function App() {
  const classes = useStyles();
  const pageNum = useSelector((store) => store.pageNum);

  const [isLoading, setIsLoading] = useState(false);
  const [gists, setGists] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    GistsService.instance
      .getGistsData("2019-12-31", 30, pageNum)
      .then((data) => {
        setGists(data);
        console.log(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [pageNum]);

  return (
    <div className={classes.pageContainer}>
      <div className={classes.header}>Gists</div>
      <div className={classes.gistsContainer}>
        {isLoading && <Loading />}
        <GistsList gistsList={gists} />
      </div>
      <div className={classes.paginationPan}>
        <PaginationRounded count={37} />
      </div>
    </div>
  );
}

export default App;
