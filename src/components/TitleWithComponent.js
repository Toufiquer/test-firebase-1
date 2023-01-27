import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const TitleWithComponent = ({ title, children }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>
      {children}
    </HelmetProvider>
  );
};

export default TitleWithComponent;
