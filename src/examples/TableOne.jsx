import React, { Component } from "react";
import Table from "../lib";
import "./TableOne.scss";

export default class TableOne extends Component {
  componentDidMount() {
    this.onAdd(0);
  }
  state = {
    data: [],
    columns: [
      {
        title: "Name",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "Age",
        dataIndex: "age",
        key: "age"
      },
      {
        title: "School",
        dataIndex: "school",
        key: "school"
      },
      {
        title: "Company",
        dataIndex: "company",
        key: "company"
      },
      {
        title: "Operations",
        dataIndex: "operations",
        key: "operations",
        horizontalAlign: "center",
        render: (text, record) => (
          <button onClick={e => this.onDelete(record.key, e)}>Delete</button>
        )
      }
    ],
    bordered: true,
    responsive: false,
    striped: true
  };

  onAdd = index => {
    const { data } = this.state;
    const nextKey = index + 1;

    this.setState({
      data: [
        ...data,
        {
          key: data.length + 1,
          name: `Name ${nextKey}`,
          age: nextKey + 20,
          school: `School ${nextKey}`,
          company: `Company ${nextKey}`
        }
      ]
    });
  };

  onDelete(key, e) {
    e.preventDefault();
    const data = this.state.data.filter(item => item.key !== key);
    this.setState({ data });
  }

  onBorderedChannge = e => {
    this.setState({ bordered: !this.state.bordered });
  };
  onResponsiveChannge = e => {
    this.setState({ responsive: !this.state.responsive });
  };
  onStripedChannge = e => {
    this.setState({ striped: !this.state.striped });
  };

  render() {
    const { data, columns, bordered, responsive, striped } = this.state;
    return (
      <div>
        <div style={{ marginBottom: 10 }}>
          <button onClick={e => this.onAdd(data.length)}>Add new Row</button>{" "}
          Bordered:{" "}
          <label className="switch">
            <input
              checked={bordered}
              type="checkbox"
              onChange={this.onBorderedChannge}
              value={bordered}
            />
            <span className="slider round" />
          </label>{" "}
          Responseive:{" "}
          <label className="switch">
            <input
              checked={responsive}
              type="checkbox"
              onChange={this.onResponsiveChannge}
              value={responsive}
            />
            <span className="slider round" />
          </label>{" "}
          Striped:{" "}
          <label className="switch">
            <input
              checked={striped}
              type="checkbox"
              onChange={this.onStripedChannge}
              value={striped}
            />
            <span className="slider round" />
          </label>
        </div>
        <div style={{ width: "50%" }}>
          <Table
            data={data}
            columns={columns}
            bordered={bordered}
            responsive={responsive}
            striped={striped}
          />
        </div>
      </div>
    );
  }
}
