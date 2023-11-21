import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns,userRows } from "../../dataTableSource";
import { Link } from "react-router-dom";
import { useState } from "react";

const Datatable = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Azione",
      width: 200,
      renderCell: (parameters) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">Vedi</div>
            </Link>
            <div className="deleteButton" onClick={() => handleDelete(parameters.row.id)} >
              Elimina
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Aggiungi un nuovo utente
        <Link to="/users/new" className="link">
          Aggiungi nuovo
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;