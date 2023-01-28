import React, { useState, useEffect } from "react";
import Select, { components } from "react-select";
import { Button, Modal } from "react-bootstrap";
import { RiAddLine } from "react-icons/ri";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faBoxesPacking } from "@fortawesome/free-solid-svg-icons";
import "./Properties.css";

const influencers = [
  { value: "abc", label: "abc" },
  { value: "def", label: "def" },
];

const areaOptions = [
  { value: "abc", label: "xyz" },
  { value: "def", label: "def" },
];

const customUnitOptions = [
  { value: "abc", label: "123" },
  { value: "def", label: "def" },
];

const Properties = () => {
  const [modalID, setmodalID] = useState("");
  const [showArea, setshowArea] = useState(false);
  const [showProperty, setshowProperty] = useState(false);
  const [showCustomUnit, setshowCustomUnit] = useState(false);
  const [AreaModalState, setAreaModalState] = useState({
    areaName: "",
  });
  const [PropertyModalState, setPropertyModalState] = useState({
    companyName: "",
    primaryEmail: "",
    contactFirstName: "",
    contactLastName: "",
    phoneNo: "",
  });
  const [CustomUnitModalState, setCustomUnitModalState] = useState({
    Name: "",
    propertyAll: "",
    propertyResedent: "",
    propertyCommercial: "",
    propertyMixed: "",
    propertyIndustrial: "",
    propertyHMO: "",
    propertyLand: "",
    propertyWater: "",
    propertyFormland: "",
    propertyResedentBlock: "",
  });
  const [FormState, setFormState] = useState({
    formName: "",
    formOwner: "",
    formAddress: "",
    formPostCode: "",
    formCity: "",
    formCountry: "",
    formArea: "",
    formUnitRef: "",
    formUnitType: "",
    formManager: "",
    formLettingAgent: "",
  });

  const handleInfluencerName = (event) => {
    event === "abc"
      ? setshowProperty(true)
      : event === "xyz"
      ? setshowArea(true)
      : setshowCustomUnit(true);
  };

  const handlePropertyOwner = (e) => {
    console.log(e);
    setmodalID("proppertyowner");
  };

  const handleCloseArea = () => setshowArea(false);
  const handleClosePropery = () => setshowProperty(false);
  const handleCloseCustomUnit = () => setshowCustomUnit(false);
  const handleShowArea = () => setshowArea(true);
  const handleShowProperty = () => setshowProperty(true);

  console.log("modalIDmodalID ", modalID);

  const ValueContainer = ({ children, ...props }) => {
    console.log(">>>>>>>>", props.options[0].label);

    return (
      components.ValueContainer && (
        <components.ValueContainer {...props}>
          {!!children && (
            <FontAwesomeIcon
              data-toggle="modal"
              data-target="#exampleModalCenter"
              onClick={
                () => handleInfluencerName(props.options[0].label)
                //   handlePropertyOwner("proppertyowner")
              }
              style={{ margin: "0 1rem", cursor: "pointer" }}
              icon={faPlus}
            />
          )}
          {children}
          {/* <span>Add</span> */}
        </components.ValueContainer>
      )
    );
  };

  const styles = {
    valueContainer: (base) => ({
      ...base,
      paddingLeft: 24,
      display: "contents",
    }),
  };

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

  return (
    <>
      <div>
        <div className="row" style={{ borderBottom: "1px solid gray" }}>
          {/* <div className="col-6"> */}
          <h2 className="px-4">ADD PROPERTY AND UNIT</h2>
          {/* </div> */}
        </div>
        <div
          className="row"
          style={{ flexDirection: "column", borderBottom: "1px solid gray" }}
        >
          <div className="px-4 py-2" style={{}}>
            <h5>Select your listing type</h5>
            <span>Choose what best describe your property</span>
          </div>
          <div
            className="card mx-4 py-2"
            style={{ width: "15%", border: "1px solid blue" }}
          >
            <div className="card-body">
              <i style={{ color: "blue" }} className="nav-icon fas fa-home" />
              <h5 style={{ color: "blue" }} className="card-title mx-2">
                To let
              </h5>
            </div>
          </div>
        </div>
        <div className="row" style={{ borderBottom: "1px solid gray" }}>
          <div className="col-md-6" style={{ padding: "0" }}>
            <div className="px-4 py-2">
              <h5>How your property looks like</h5>
              <span>Choose what best describe your property</span>
            </div>
            <div
              className="card mx-4 py-2"
              style={{ border: "1px solid blue", height: "12vh" }}
            >
              <div
                className="card-body"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <FontAwesomeIcon icon={faBox} />
                <h5 style={{ color: "blue" }} className="card-title mx-2">
                  Property with single rentable unit
                </h5>
              </div>
            </div>
          </div>
          <div
            className="col-md-6"
            style={{
              display: "flex",
              justifyContent: "end",
              alignItems: "end",
            }}
          >
            <div
              className="card mx-4 py-2"
              style={{
                width: "100%",
                border: "1px solid blue",
                height: "12vh",
              }}
            >
              <div
                className="card-body"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <FontAwesomeIcon icon={faBoxesPacking} />
                <h5 style={{ color: "blue" }} className="card-title mx-2">
                  Property with multiple rentable unit
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="row" style={{ borderBottom: "1px solid gray" }}>
          {/* <div className="col-md-6" style={{ padding: "0" }}> */}
          <div className="px-4 py-2">
            <h5>Property Type</h5>
            <span>Choose what best describe your property you are renting</span>
            <div style={{ display: "flex" }}>
              <div
                className="card m-2 py-2"
                style={{ border: "1px solid blue" }}
              >
                <div
                  className="card-body"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <FontAwesomeIcon icon={faBox} />
                  <h5 style={{ color: "blue" }} className="card-title mx-2">
                    To let
                  </h5>
                </div>
              </div>
              <div
                className="card m-2 py-2"
                style={{ border: "1px solid blue" }}
              >
                <div
                  className="card-body"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <i
                    style={{ color: "blue" }}
                    className="nav-icon fas fa-home"
                  />
                  <h5 style={{ color: "blue" }} className="card-title mx-2">
                    To let
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row" style={{ borderBottom: "1px solid gray" }}>
          <div className="px-4 py-2" style={{ width: "80%" }}>
            <h5>Property Details (single Unit)</h5>
            <div
              style={{
                display: "flex",
                marginBottom: "1rem",
                paddingBottom: "0.5rem",
                //   borderBottom: "1px solid gray",
              }}
            >
              <div className="col">
                <label>Property name or Ref *</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  //placeholder="First Name"
                />
              </div>
              <div className="col">
                <label>Property Owner *</label>
                <Select
                  options={influencers}
                  isMulti={false}
                  onChange={handleInfluencerName}
                  //   menuIsOpen={openMenu}
                  //   onMenuOpen={() => setopenMenu(true)}
                  //   onMenuClose={() => setopenMenu(false)}
                  // isSearchable={true}
                  // placeholder="Add property"
                  components={{ ValueContainer }}
                  classNamePrefix="vyrill"
                  styles={styles}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row" style={{ borderBottom: "1px solid gray" }}>
          <div className="px-4 py-2" style={{ width: "80%" }}>
            <div
              style={{
                display: "flex",
                marginBottom: "1rem",
                paddingBottom: "0.5rem",
                //   borderBottom: "1px solid gray",
              }}
            >
              <div className="col">
                <label>Address *</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  //placeholder="First Name"
                />
              </div>
              <div className="col">
                <label>Post Code *</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  //placeholder="Last Name"
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                marginBottom: "1rem",
                paddingBottom: "0.5rem",
              }}
            >
              <div className="col">
                <label>City *</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  //   placeholder="First Name"
                />
              </div>
              <div className="col">
                <label>Country *</label>
                <select
                  className="form-control"
                  //   style={{ width: "49%" }}
                  name="area"
                  id="area"
                >
                  <option value="">---</option>
                  <option value="saab">Pakistan</option>
                  <option value="opel">India</option>
                  <option value="audi">US</option>
                  <option value="audi">UK</option>
                </select>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                marginBottom: "1rem",
                paddingBottom: "0.5rem",
              }}
            >
              <div className="col">
                <label>Area *</label>{" "}
                {/* <select
                  className="form-control"
                  style={{ width: "49%" }}
                  name="area"
                  id="area"
                >
                  <option value="volvo">Volvo</option>
                  <option value="saab" data-icon="glyphicon-glass">
                    Saab
                  </option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                </select> */}
                <Select
                  options={areaOptions}
                  isMulti={false}
                  onChange={handleInfluencerName}
                  // isSearchable={true}
                  placeholder="Add Area"
                  components={{ ValueContainer }}
                  classNamePrefix="vyrill"
                  styles={halfWidthstyles}
                />
                {/* <input
                  style={{ width: "49%" }}
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="First Name"
                /> */}
              </div>
            </div>
          </div>
        </div>
        <div className="row" style={{ borderBottom: "1px solid gray" }}>
          <div className="px-4 py-2" style={{ width: "80%" }}>
            <h5>User Details </h5>
            <div
              style={{
                display: "flex",
                marginBottom: "1rem",
                paddingBottom: "0.5rem",
                //   borderBottom: "1px solid gray",
              }}
            >
              <div className="col">
                <label>Unit Reference</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  //placeholder="First Name"
                />
              </div>
              <div className="col">
                <label>Unit Type</label>
                <select
                  className="form-control"
                  //   style={{ width: "49%" }}
                  name="area"
                  id="area"
                >
                  <option value="">---</option>
                  <option value="saab">Unit 1</option>
                  <option value="opel">Unit 2</option>
                  <option value="audi">Unit 3</option>
                </select>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                marginBottom: "1rem",
                paddingBottom: "0.5rem",
                //   borderBottom: "1px solid gray",
              }}
            >
              <div className="col">
                <label>Unit Owner *</label>

                <Select
                  options={customUnitOptions}
                  isMulti={false}
                  onChange={handleInfluencerName}
                  // isSearchable={true}
                  // placeholder="Add property"
                  components={{ ValueContainer }}
                  classNamePrefix="vyrill"
                  styles={styles}
                />
              </div>
              <div className="col">
                <label>Manager</label>
                <select
                  className="form-control"
                  //   style={{ width: "49%" }}
                  name="area"
                  id="area"
                >
                  <option value="volvo">---</option>
                  <option value="volvo">Manager 1</option>
                  <option value="saab">Manager 2</option>
                </select>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                marginBottom: "1rem",
                paddingBottom: "0.5rem",
                //   borderBottom: "1px solid gray",
              }}
            >
              <div className="col">
                <label>Letting Agent</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  //placeholder="First Name"
                />
              </div>
              <div className="col">
                {/* <label>Manager</label> */}
                {/* <Select
                options={influencers}
                isMulti={false}
                onChange={handleInfluencerName}
                // isSearchable={true}
                // placeholder="Add property"
                components={{ ValueContainer }}
                classNamePrefix="vyrill"
                styles={styles}
              /> */}
              </div>
            </div>
          </div>
        </div>
        <div className="row" style={{ borderBottom: "1px solid gray" }}>
          <div className="px-4 py-2" style={{ width: "80%" }}>
            <h5>Required Certificates </h5>
            <div
              style={{
                display: "flex",
                marginBottom: "1rem",
                paddingBottom: "0.5rem",
                //   borderBottom: "1px solid gray",
              }}
            >
              <div className="col">
                <label>Certificate Types</label>
                <input
                  style={{ width: "49%" }}
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="certifates Name"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row" style={{ borderBottom: "1px solid gray" }}>
          <div className="px-4 py-2" style={{ width: "90%" }}>
            <div
              style={{
                display: "flex",
                marginBottom: "1rem",
                justifyContent: "end",
              }}
            >
              <button className="btn btn-seconday">Cancel</button>
              <button className="btn btn-primary">Add Property</button>
            </div>
          </div>
        </div>
      </div>
      {/************************ Add Property Owner Modal **********************/}

      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={showProperty}
        onHide={handleClosePropery}
      >
        <Modal.Header style={{ background: "#1E3583" }}>
          <Modal.Title> Add Property Owner</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            style={{
              marginBottom: "1rem",
              borderBottom: "1px solid gray",
            }}
          >
            <div className="d-flex">
              <label style={{ width: "25%" }}>
                Company / partnership Name *
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
              />
            </div>
            <div className="d-flex" style={{ marginBottom: "1rem" }}>
              <label style={{ width: "25%" }}>Primary Email</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
              />
            </div>
            <div className="d-flex" style={{ marginBottom: "1rem" }}>
              <label style={{ width: "27%" }}>Primary Contact *</label>
              <input
                style={{ width: "50%", marginRight: "1rem" }}
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="First Name"
              />
              <input
                style={{ width: "50%" }}
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Last Name"
              />
            </div>
            <div className="d-flex" style={{ marginBottom: "1rem" }}>
              <label style={{ width: "25%" }}>Primary Phone No.</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                // placeholder="First Name"
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosePropery}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClosePropery}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/**************** Add Area Modal  ******************/}

      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={showArea}
        onHide={handleCloseArea}
      >
        <Modal.Header style={{ background: "#1E3583" }}>
          <Modal.Title>ADD AREA</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <div
            style={{
              marginBottom: "1rem",
              borderBottom: "1px solid gray",
            }}
          >
            <div className="d-flex" style={{ marginBottom: "1rem" }}>
              <label style={{ width: "25%" }}>Area Name</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseArea}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseArea}>
            Save Area
          </Button>
        </Modal.Footer>
      </Modal>

      {/*************** Add Custom Unit type *****************/}

      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={showCustomUnit}
        onHide={handleCloseCustomUnit}
      >
        <Modal.Header style={{ background: "#1E3583" }}>
          <Modal.Title>ADD CUSTOM UNIT TYPE</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            style={{
              marginBottom: "1rem",
              borderBottom: "1px solid gray",
            }}
          >
            <div className="d-flex" style={{ marginBottom: "1rem" }}>
              <label style={{ width: "25%" }}> Name</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
              />
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <label style={{ width: "25%" }}>Related Property Type</label>
              <div className="checkboxLebel">
                <input
                  style={{ marginRight: "0.5rem" }}
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <label className="checkboxLebel" for="vehicle1">
                  All
                </label>
                <input
                  style={{ margin: "0.5rem" }}
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <label for="vehicle1">Resedential</label>
                <input
                  style={{ margin: "0.5rem" }}
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />

                <label for="vehicle1">Commercial</label>
                <input
                  style={{ margin: "0.5rem" }}
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <label for="vehicle1">Mixed</label>
                <input
                  style={{ margin: "0.5rem" }}
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <label for="vehicle1">Industrial</label>
                <input
                  style={{ margin: "0.5rem" }}
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <label for="vehicle1">HMO</label>
                <input
                  style={{ margin: "0.5rem" }}
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <label for="vehicle1">Land</label>
                <input
                  style={{ margin: "0.5rem" }}
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <label for="vehicle1">Water</label>
                <input
                  style={{ margin: "0.5rem" }}
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <label for="vehicle1">Formland</label>
                <input
                  style={{ margin: "0.5rem" }}
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <label for="vehicle1">Resedential Block</label>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseArea}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseArea}>
            Save Area
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Properties;
