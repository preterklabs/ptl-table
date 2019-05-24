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
  style?: React.CSSProperties;
  className?: string;
  bordered?: boolean;
  responsive?: boolean;
  striped?: boolean;
}

interface TableState {}

class Table extends React.Component<TableProps, TableState> {
  constructor(props: TableProps) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    data: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired,
    bordered: PropTypes.bool,
    striped: PropTypes.bool,
    style: PropTypes.object,
    responsive: PropTypes.bool
  };

  static defaultProps = {
    data: [],
    columns: [],
    bordered: false,
    striped: false,
    responsive: false
  };

  render() {
    const {
      data,
      columns,
      bordered,
      striped,
      style,
      responsive,
      className
    } = this.props;

    const classNames = [
      "ptl-table",
      bordered ? "ptl-table-bordered" : null,
      striped ? "ptl-table-striped" : null,
      responsive ? "ptl-table-responsive" : null,
      className
    ];
    return (
      <table className={classNames.join(" ")} style={style}>
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
