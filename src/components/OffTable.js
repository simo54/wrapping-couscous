import React from "react";
import { Table } from "antd";
import Wrapper from "./Wrapper";

export default function OffTable({ testData, column, update }) {
  return (
    <>
      <Wrapper
        isInfiniteScrollOn={true}
        lengthData={testData.length}
        functionNext={update}
      >
        <Table dataSource={testData} columns={column} pagination={false} />
      </Wrapper>
    </>
  );
}
