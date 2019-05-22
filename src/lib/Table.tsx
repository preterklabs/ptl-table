import React from "react";
import PropTypes from "prop-types";
import "./Table.scss";

interface TableColumnProps {
  title: string;
  dataIndex: string;
  key: string;
}
interface TableDataProps {
  key: string | number;
  [propName: string]: any;
}
interface TableProps {
  data: Array<TableDataProps>;
  columns: Array<TableColumnProps>;
}

interface TableState {}

class Table extends React.Component<TableProps, TableState> {
  constructor(props: TableProps) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    data: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired
  };

  static defaultProps = {
    data: [],
    columns: []
  };

  render() {
    const { data, columns } = this.props;

    return (
      <table>
        {columns.length > 0 && (
          <thead>
            <tr>
              {columns.map(column => (
                <th key={column.key}>{column.title}</th>
              ))}
            </tr>
          </thead>
        )}
        {columns.length > 0 && data.length > 0 && (
          <tbody>
            {data.map((dt, dataIdx) => (
              <tr key={dt.key}>
                {columns.map((col, colIdx) => (
                  <td key={colIdx}>{dt[col.dataIndex]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        )}
      </table>
    );
  }
}

export default Table;
