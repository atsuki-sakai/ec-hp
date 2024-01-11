import React from "react";

const NewsPageIndex = ({
  params: { index },
}: {
  params: { index: string };
}) => {
  return <div>NewsPages: {index}</div>;
};

export default NewsPageIndex;
