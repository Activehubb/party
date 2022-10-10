import React from "react";
import { Helmet } from "react-helmet";

export const MetaData = ({ title, content }) => {
  return (
    <Helmet>
      <title itemProp="title" lang="en">{`PartyMode - ${title}`}</title>
      <html lang="en" amp />
      <meta name="description" content={`PartyMode - ${content}`} />
    </Helmet>
  );
};
