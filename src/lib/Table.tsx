import React from "react";
import PropTypes from "prop-types";
import "./Table.scss";

export interface TableColumnProps {
  title: string;
  dataIndex: string;
  key: string;
  horizontalAlign: "left" | "center" | "right";
  verticalAlign: "top" | "center" | "bottom";

  render(text: any, record: object): React.ReactNode;
}
export interface TableDataProps {
  key: string | number;
  horizontalAlign: "left" | "center" | "right";
  verticalAlign: "top" | "center" | "bottom";
  [propName: string]: any;
}
export interface TableProps {
  data: Array<TableDataProps>;
  columns: Array<TableColumnProps>;
  style?: React.CSSProperties;
  className?: string;
  bordered?: boolean;
  responsive?: boolean;
  striped?: boolean;
  backgroundColor?:
    | "default"
    | "dark"
    | "light"
    | "info"
    | "warning"
    | "danger"
    | "success"
    | "secondary"
    | "primary";
  color?:
    | "default"
    | "dark"
    | "light"
    | "info"
    | "warning"
    | "danger"
    | "success"
    | "secondary"
    | "primary";
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
    responsive: PropTypes.bool,
    backgroundColor: PropTypes.string,
    color: PropTypes.string
  };

  static defaultProps = {
    data: [],
    columns: [],
    bordered: false,
    striped: false,
    responsive: false,
    backgroundColor: "default",
    color: "default"
  };

  render() {
    const {
      data,
      columns,
      bordered,
      striped,
      style,
      responsive,
      className,
      backgroundColor
    } = this.props;

    const classNames = [
      "ptl-table",
      bordered ? "ptl-table-bordered" : null,
      striped ? "ptl-table-striped" : null,
      responsive ? "ptl-table-responsive" : null,
      className,
      backgroundColor ? `ptl-table-bg-${backgroundColor}` : ""
    ];
    return (
      <table className={classNames.join(" ")} style={style}>
        {columns.length > 0 && (
          <thead>
            <tr>
              {columns.map(column => (
                <th
                  scope="col"
                  key={column.key}
                  align={column.horizontalAlign || "left"}
                >
                  {column.title}
                </th>
              ))}
            </tr>
          </thead>
        )}
        {columns.length > 0 && data.length > 0 && (
          <tbody>
            {data.map((dt, dataIdx) => (
              <tr key={dt.key}>
                {columns.map((col, colIdx) => (
                  <React.Fragment key={colIdx}>
                    {Object.keys(col).indexOf("render") > -1 ? (
                      <td>{col.render(dt[col.dataIndex], dt)}</td>
                    ) : (
                      <td>{dt[col.dataIndex]}</td>
                    )}
                  </React.Fragment>
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
