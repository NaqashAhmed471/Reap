import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import ApiService from "../Services/ApiService";

const customStyles = {
  rows: {
    style: {
      minHeight: "62px", // override the row height
    },
  },
  headCells: {
    style: {
      paddingLeft: "8px", // override the cell padding for head cells
      paddingRight: "8px",
      fontWeight: "500",
      fontSize: "18px",
    },
  },
  cells: {
    style: {
      paddingLeft: "8px", // override the cell padding for data cells
      paddingRight: "8px",
      fontSize: "17px",
    },
  },
};

const Queries = () => {
  const [respData, setrespData] = useState([]);
  const [expandRow, setexpandRow] = useState(false);

  useEffect(() => {
    GetEmailResults();
  }, []);

  const GetEmailResults = async () => {
    const resp = await ApiService.get("/emails/email-list/");
    setrespData(resp.data);
  };

  const handleExpend = () => {
    setexpandRow(!expandRow);
  };

  const columns = [
    {
      name: "Email Content",
      selector: (row) => row.email_content,
      sortable: true,
      width: "450px",
      //   wrap: expandRow,
    },
    {
      name: "Pdf Content",
      selector: (row) => row.pdf_content,
      sortable: true,
    },
    {
      name: "Subject",
      selector: (row) => row.subject,
      sortable: true,
    },
    {
      name: "Email From",
      selector: (row) => row.email_from,
      sortable: true,
    },
    {
      name: "Pdf Included",
      selector: (row) => (row.has_pdf ? "Contains Pdf" : "Not attachements"),
      sortable: true,
    },
    // {
    //   name: "Actions",
    //   selector: (row) => "Asadas",
    //   // <div className="icons-sty">
    //   //   <span>
    //   //     <AiOutlineEye
    //   //       style={{ cursor: "pointer", fontSize: "25px" }}
    //   //       onClick={() => handleView(row)}
    //   //     />
    //   //   </span>
    //   //   <span style={{ margin: "0 1rem" }}>
    //   //     <FiEdit2
    //   //       style={{ cursor: "pointer", fontSize: "25px" }}
    //   //       onClick={() => handleEdit(row)}
    //   //     />
    //   //   </span>
    //   //   <span>
    //   //     <AiOutlineDelete
    //   //       style={{ cursor: "pointer", fontSize: "25px" }}
    //   //       onClick={() => handleDelete(row)}
    //   //     />
    //   //   </span>
    //   // </div>
    //   sortable: true,
    // },
  ];

  const ExpandedComponent = ({ data }) => (
    <pre>{JSON.stringify(data, null, 2)}</pre>
  );
  return (
    <>
      {/* <div class="content-wrapper"> */}
      <section class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1>Queries Table</h1>
            </div>
            <div class="col-sm-6">
              <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li class="breadcrumb-item active">DataTables</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="content">
        <DataTable
          //   theme="dark"
          columns={columns}
          fixedHeader
          persistTableHead
          data={respData}
          pagination
          expandableRows
          expandableRowsComponent={ExpandedComponent}
          //   onRowClicked={handleExpend}
          //   paginationResetDefaultPage={resetPaginationToggle}
          pointerOnHover
          highlightOnHover
          customStyles={customStyles}
        />
      </section>
    </>
  );
};

export default Queries;
