import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

/** DOCS { https://github.com/ankeetmaini/react-infinite-scroll-component#readme } */

function InfiniteScrollWrapper({
  isInfiniteScrollOn,
  lengthData,
  functionNext,
  children,
}) {
  if (!isInfiniteScrollOn) return <>{children}</>;

  return (
    <InfiniteScroll
      dataLength={lengthData} //This is important field to render the next data
      next={functionNext}
      hasMore={true}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      {children} {/** !!! DO NOT TOUCH !!! => It wraps the table */}
    </InfiniteScroll>
  );
}

export default InfiniteScrollWrapper;
