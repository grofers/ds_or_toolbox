import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@atlas/core";

const Page404 = (props) => {
  const currentPath = props.location.pathname;

  return (
    <main>
      <Typography.Title>Page {currentPath} does not exist</Typography.Title>
      <Typography.Text>
        Go back <Link to="/">Home</Link>
      </Typography.Text>
    </main>
  );
};

export default Page404;
