import React from "react";
import ReactDOM from "react-dom";
import Table from "./lib";

ReactDOM.render(
  <Table
    data={[
      {
        key: 0,
        name: "Kofi Jahlom",
        age: 10,
        company: "Esoko"
      },
      {
        key: 1,
        name: "Priscilla Agboado",
        age: 20,
        company: "WTBTS"
      }
    ]}
    columns={[
      {
        key: "name",
        dataIndex: "name",
        title: "Name"
      },
      {
        key: "age",
        dataIndex: "age",
        title: "Age"
      },
      {
        key: "company",
        dataIndex: "company",
        title: "Company"
      }
    ]}
  />,
  document.getElementById("root")
);
