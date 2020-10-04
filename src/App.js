import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import "./assets/Main.css";

import { GistsService } from "./services/gists.service";

import GistsList from "./components/GistsList";
import PaginationRounded from "./components/Pagination";
import Loading from "./components/Loading";

function App() {
  const pageNum = useSelector((store) => store.pageNum);

  const [isLoading, setIsLoading] = useState(false);
  const [gists, setGists] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    GistsService.instance
      .getGistsData("2019-12-31", 30, pageNum)
      .then((data) => {
        setGists(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [pageNum]);

  return (
    <div className="pageContainer">
      <div className="header">Gists</div>
      <div className="gistsContainer">
        {isLoading && <Loading />}
        <GistsList gistsList={gists} />
      </div>
      <div className="paginationPan">
        <PaginationRounded count={37} />
      </div>
    </div>
  );
}

export default App;
