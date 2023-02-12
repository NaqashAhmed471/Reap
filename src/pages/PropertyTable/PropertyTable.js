import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import ApiService from "../../components/Services/ApiService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./PropertyTable.css";

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

const PropertyTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    GetPropertiesResults();
  }, []);

  const GetPropertiesResults = async () => {
    const resp = await ApiService.get("/emails/Details/");
    setData(resp.data);
  };

  const columns = [
    {
      name: "Property Name",
      selector: (row) => row.property_name,
      sortable: true,
      //   width: "450px",
      //   wrap: expandRow,
    },
    {
      name: "Address",
      selector: (row) => row.address,
      sortable: true,
    },
    {
      name: "PostCode",
      selector: (row) => row.postcode,
      sortable: true,
    },
    {
      name: "City",
      selector: (row) => row.city,
      sortable: true,
    },
    {
      name: "Country",
      selector: (row) => row.country,
      sortable: true,
    },
    {
      name: "County",
      selector: (row) => row.county,
      sortable: true,
    },
    {
      name: "Property Owner",
      selector: (row) => row.property_owner,
      sortable: true,
    },
    {
      name: "Property Area",
      selector: (row) => row.property_area,
      sortable: true,
    },
    {
      name: "Property Type",
      selector: (row) => row.property_type,
      sortable: true,
    },
  ];

  return (
    <section className="section_property_table">
      <div className="upper_content">
        <h2>PROPERTIES</h2>
        <button className="add_property">
          <Link to="/propertiesform">
            <FontAwesomeIcon icon={faPlus} /> Add Property
          </Link>
        </button>
      </div>
      <div className="data_table">
        <DataTable
          //   theme="dark"
          columns={columns}
          fixedHeader
          persistTableHead
          data={data}
          pagination
          //   expandableRows
          //   onRowClicked={handleExpend}
          //   paginationResetDefaultPage={resetPaginationToggle}
          pointerOnHover
          highlightOnHover
          customStyles={customStyles}
        />
      </div>
    </section>
  );
};

export default PropertyTable;
