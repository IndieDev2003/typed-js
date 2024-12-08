import React from "react";
import Page1 from "../components/NewYear/Page1";
import Loader from "../components/NewYear/Loader";

function NewYear() {
  return (
    <div className="outfit relative">
      <Loader />
      <Page1 />
    </div>
  );
}

export default NewYear;
