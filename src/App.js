import React, { useState } from "react";
import OffTable from "./components/OffTable";
import makeData from "./makeData";

import "./styles.css";

export default function App() {
  const [items, setItems] = useState(makeData(40));

  const col = [
    {
      title: "firstName",
      dataIndex: "firstName",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "progress",
      dataIndex: "progress",
      key: "address",
    },
  ];

  const data = React.useMemo(() => items, [items]);

  const fetchMoreData = () => {
    setTimeout(() => {
      setItems(items.concat(makeData(4)));
    }, 1000);
  };

  return (
    <>
      <OffTable testData={data} column={col} update={fetchMoreData} />
    </>
  );
}
