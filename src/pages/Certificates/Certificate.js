import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { Button, Modal } from "react-bootstrap";
import ApiService from "../../components/Services/ApiService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";
import "./Certificate.css";

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

const Certificate = () => {
  const [data, setData] = useState([]);
  const [showCertificateModel, setShowCertificateModel] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

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

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const halfWidthstyles = {
    valueContainer: (base) => ({
      ...base,
      paddingLeft: 24,
      width: "49%",
      display: "contents",
    }),
    control: (base) => ({
      ...base,
      width: "49%",
    }),
    menu: (base) => ({
      ...base,
      width: "49%",
    }),
  };

  const handleCertificateModel = () => {
    setShowCertificateModel(true);
  };

  const handleClosePropery = () => setShowCertificateModel(false);

  return (
    <section className="section_property_table">
      <div className="upper_content">
        <h2>CERTIFICATES</h2>
        <button className="add_property" onClick={handleCertificateModel}>
          <FontAwesomeIcon icon={faPlus} /> Add Certificate
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
      {/* Certificate Model Start  */}
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={showCertificateModel}
        onHide={handleClosePropery}
      >
        <Modal.Header style={{ background: "#007bff" }}>
          <Modal.Title style={{ color: "#fff" }}> Add Certificate</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            style={{
              marginBottom: "1rem",
              borderBottom: "1px solid gray",
            }}
          >
            <div className="search_property">
              <label>
                Search for a Property or Unit to relate this Certificate *
              </label>
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
                styles={halfWidthstyles}
              />
            </div>
            <div className="search_property">
              <label>Certificate Type</label>
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
                styles={halfWidthstyles}
              />
            </div>

            <div className="search_property">
              <label>Expiry Date</label>
              <div className="date_input">
                <input type="date" />
              </div>
            </div>

            <div className="search_property">
              <label>File (up to 128mb)</label>
              <div className="date_input">
                <input type="file" />
              </div>
            </div>

            <div className="search_property">
              <label>Share With</label>
              <span>
                Please ensure you tick the appropriate person/s to whom this
                file should be shared with
              </span>
              <div className="parent_checkboxes">
                <div>
                  <input type="checkbox" />
                  <span>Property Owners</span>
                </div>
                <div>
                  <input type="checkbox" />
                  <span>Letting Agents</span>
                </div>
                <div>
                  <input type="checkbox" />
                  <span>All Tenants</span>
                </div>
              </div>
            </div>

            <div className="search_property">
              <textarea rows="4" cols="50" name="comment">
                Notes
              </textarea>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosePropery}>
            Cancel
          </Button>
          {/* <Button variant="primary" onClick={handleAddProperty}>
      Save Certificate
    </Button> */}
        </Modal.Footer>
      </Modal>
      ;
      {/* 
// Certificate Model Ends // */}
    </section>
  );
};

export default Certificate;
