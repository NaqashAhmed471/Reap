import React, { useState, useEffect } from "react";
import Select, { components } from "react-select";
import { Button, Modal } from "react-bootstrap";
import ApiService from "../Services/ApiService";
// import { RiAddLine } from "react-icons/ri";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faBoxesPacking } from "@fortawesome/free-solid-svg-icons";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
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
  const [PropertyTyes, setPropertyTyes] = useState([]);
  const [PropertyOwner, setPropertyOwner] = useState([]);
  const [PropertyArea, setPropertyArea] = useState([]);
  const [PropertyDetails, setPropertyDetails] = useState([]);
  const [CustomUnit, setCustomUnit] = useState([]);
  const [AreaModalState, setAreaModalState] = useState({
    area: "",
  });
  const [PropertyModalState, setPropertyModalState] = useState({
    partner_name: "",
    primary_email: "",
    first_name: "",
    last_name: "",
    primary_phone: "",
  });
  const [CustomUnitModalState, setCustomUnitModalState] = useState({
    Name: "",
    type: "",
  });
  const [FormState, setFormState] = useState({
    property_name: "",
    property_owner: "",
    address: "",
    postcode: "",
    city: "",
    country: "",
    property_area: "",
    formUnitRef: "",
    formUnitType: "",
    formManager: "",
    formLettingAgent: "",
    formCertificateName: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    getPropertyTypeList();
    getPropertyOwnerList();
    getPropertyAreaList();
    getPropertyDetailsList();
    getPropertyUnitList();
  }, []);

  const getPropertyTypeList = async () => {
    const resp = await ApiService.get("/emails/Type/");
    setPropertyTyes(resp.data);
  };

  const getPropertyOwnerList = async () => {
    const resp = await ApiService.get("/emails/Owner/");
    setPropertyOwner(resp.data);
  };

  const getPropertyAreaList = async () => {
    const resp = await ApiService.get("/emails/Area/");
    setPropertyArea(resp.data);
  };

  const getPropertyDetailsList = async () => {
    const resp = await ApiService.get("/emails/Details/");
    setPropertyDetails(resp.data);
  };

  const getPropertyUnitList = async () => {
    const resp = await ApiService.get("/emails/Unit/");
    setCustomUnit(resp.data);
  };

  //   console.log(
  //     "PropertyTyes",
  //     PropertyTyes,
  //     "PropertyArea",
  //     PropertyArea,
  //     "PropertyDetails",
  //     PropertyDetails,
  //     "PropertyOwner",
  //     PropertyOwner
  //   );

  const updateState = (prop) => {
    // setFormState({
    //   ...FormState,
    //   property_owner: prop.partner_name,
    // });
    setshowProperty(true);
  };

  const updateState1 = (prop) => {
    // setFormState({
    //   ...FormState,
    //   property_area: prop.area,
    // });
    setshowArea(true);
  };

  const changeOptions = (e) => {
    setFormState({
      ...FormState,
      property_owner: e.uuid,
    });
  };

  const changeOptionsArea = (e) => {
    setFormState({
      ...FormState,
      property_area: e.uuid,
    });
  };

  const changeUnitOwner = (e) => {
    // setFormState({
    //   ...FormState,
    //   property_area: e.area,
    // });
    console.log(">>>>>>>");
  };

  const handleInfluencerName = (event) => {
    Object.keys(event).includes("partner_name")
      ? updateState(event)
      : Object.keys(event).includes("area")
      ? updateState1(event)
      : setshowCustomUnit(true);
  };

  const handleAddProperty = async () => {
    const resp = await ApiService.post("/emails/Owner/", PropertyModalState);
    if (resp.statusText === "Created") {
      setPropertyOwner([...PropertyOwner, resp.data]);
      setshowProperty(false);
      swal(`Property Owner has been Added`, {
        icon: "success",
      });
    }
  };

  const handleSubmitArea = async () => {
    const resp = await ApiService.post("/emails/Area/", AreaModalState);
    if (resp.statusText === "Created") {
      setPropertyArea([...PropertyArea, resp.data]);
      setshowArea(false);
      swal(`Area has been Added`, {
        icon: "success",
      });
    }
  };

  const handleSubmitCustomUnit = async () => {
    const resp = await ApiService.post("/emails/Unit/", CustomUnitModalState);
    if (resp.statusText === "Created") {
      setCustomUnit([...CustomUnit, resp.data]);
      setshowCustomUnit(false);
      swal(`Custom Unit has been Added`, {
        icon: "success",
      });
      setCustomUnitModalState({
        Name: "",
        type: "",
      });
    }
  };
  const handleMainForm = async () => {
    const resp = await ApiService.post("/emails/Details/", FormState);
    if (resp.statusText === "Created") {
      setFormState({
        property_name: "",
        property_owner: "",
        address: "",
        postcode: "",
        city: "",
        country: "",
        property_area: "",
        formUnitRef: "",
        formUnitType: "",
        formManager: "",
        formLettingAgent: "",
        formCertificateName: "",
      });
      swal(`Form has been submitted`, {
        icon: "success",
      });
      navigate("/properties");
    }
  };

  const handleAreaChange = (e) => {
    const { id, value } = e.target;
    setAreaModalState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleCustomUnitChange = (e) => {
    const { id, value } = e.target;
    setCustomUnitModalState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  const handleCustomUnitCheck = (e) => {
    const { id, checked, value } = e.target;
    setCustomUnitModalState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setPropertyModalState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleFormChange = (e) => {
    const { id, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleCloseArea = () => setshowArea(false);
  const handleClosePropery = () => setshowProperty(false);
  const handleCloseCustomUnit = () => setshowCustomUnit(false);
  const handleShowArea = () => setshowArea(true);
  const handleShowProperty = () => setshowProperty(true);

  const ValueContainer = ({ children, ...props }) => {
    console.log("propssssssss", props.options);
    return (
      components.ValueContainer && (
        <components.ValueContainer {...props}>
          {!!children && (
            <FontAwesomeIcon
              data-toggle="modal"
              data-target="#exampleModalCenter"
              onClick={
                () => handleInfluencerName(props.options[0])
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
              {PropertyTyes?.map((ite) => (
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
                      {ite.category_name}
                    </h5>
                  </div>
                </div>
              ))}
              {/* <div
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
              </div> */}
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
                  id="property_name"
                  value={FormState.property_name}
                  onChange={handleFormChange}
                  //placeholder="First Name"
                />
              </div>
              <div className="col">
                <label>Property Owner *</label>
                <Select
                  options={PropertyOwner}
                  isMulti={false}
                  onChange={changeOptions}
                  //   value={{
                  //     label: FormState?.property_owner,
                  //     value: FormState?.property_owner,
                  //   }}
                  getOptionLabel={(options) => options.partner_name}
                  getOptionValue={(options) => options.uuid}
                  //   placeholder="Add property"
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
                  id="address"
                  value={FormState.address}
                  onChange={handleFormChange}
                />
              </div>
              <div className="col">
                <label>Post Code *</label>
                <input
                  type="text"
                  className="form-control"
                  id="postcode"
                  value={FormState.postcode}
                  onChange={handleFormChange}
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
                  id="city"
                  value={FormState.city}
                  onChange={handleFormChange}
                />
              </div>
              <div className="col">
                <label>Country *</label>
                <select
                  className="form-control"
                  onChange={handleFormChange}
                  //   style={{ width: "49%" }}
                  name="country"
                  id="country"
                >
                  <option value="">---</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="India">India</option>
                  <option value="US">US</option>
                  <option value="UK">UK</option>
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
                <label>Area *</label>
                <Select
                  options={PropertyArea}
                  getOptionLabel={(options) => (
                    <span>
                      {options.address} {options.area}
                    </span>
                  )}
                  getOptionValue={(options) => options.uuid}
                  isMulti={false}
                  onChange={changeOptionsArea}
                  // isSearchable={true}
                  placeholder="Add Area"
                  components={{ ValueContainer }}
                  classNamePrefix="vyrill"
                  styles={halfWidthstyles}
                />
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
                  id="formUnitRef"
                  value={FormState.formUnitRef}
                  onChange={handleFormChange}
                />
              </div>
              <div className="col">
                <label>Unit Type</label>
                <select
                  className="form-control"
                  onChange={handleFormChange}
                  name="formUnitType"
                  id="formUnitType"
                >
                  <option value="">---</option>
                  <option value="Unit 1">Unit 1</option>
                  <option value="Unit 2">Unit 2</option>
                  <option value="Unit 3">Unit 3</option>
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
                  options={CustomUnit}
                  getOptionLabel={(options) => options.Name}
                  getOptionValue={(options) => options.uuid}
                  isMulti={false}
                  onChange={changeUnitOwner}
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
                  onChange={handleFormChange}
                  name="formManager"
                  id="formManager"
                >
                  <option value="">---</option>
                  <option value="Manager 1">Manager 1</option>
                  <option value="Manager 2">Manager 2</option>
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
                  id="formLettingAgent"
                  value={FormState.formLettingAgent}
                  onChange={handleFormChange}
                />
              </div>
              <div className="col"></div>
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
                  id="formCertificateName"
                  value={FormState.formCertificateName}
                  onChange={handleFormChange}
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
              <button className="btn btn-primary" onClick={handleMainForm}>
                Add Property
              </button>
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
                id="partner_name"
                value={PropertyModalState.partner_name}
                onChange={handleChange}
              />
            </div>
            <div className="d-flex" style={{ marginBottom: "1rem" }}>
              <label style={{ width: "25%" }}>Primary Email</label>
              <input
                type="text"
                className="form-control"
                id="primary_email"
                value={PropertyModalState.primary_email}
                onChange={handleChange}
              />
            </div>
            <div className="d-flex" style={{ marginBottom: "1rem" }}>
              <label style={{ width: "27%" }}>Primary Contact *</label>
              <input
                style={{ width: "50%", marginRight: "1rem" }}
                type="text"
                className="form-control"
                id="first_name"
                placeholder="First Name"
                value={PropertyModalState.first_name}
                onChange={handleChange}
              />
              <input
                style={{ width: "50%" }}
                type="text"
                className="form-control"
                id="last_name"
                placeholder="Last Name"
                value={PropertyModalState.last_name}
                onChange={handleChange}
              />
            </div>
            <div className="d-flex" style={{ marginBottom: "1rem" }}>
              <label style={{ width: "25%" }}>Primary Phone No.</label>
              <input
                type="text"
                className="form-control"
                id="primary_phone"
                value={PropertyModalState.primary_phone}
                onChange={handleChange}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosePropery}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddProperty}>
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
                id="area"
                value={AreaModalState.area}
                onChange={handleAreaChange}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseArea}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmitArea}>
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
                id="Name"
                value={CustomUnitModalState.Name}
                onChange={handleCustomUnitChange}
              />
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <label style={{ width: "25%" }}>Related Property Type</label>
              <div className="checkboxLebel">
                {/* <input
                  style={{ marginRight: "0.5rem" }}
                  type="checkbox"
                  id="type"
                  value="All"
                  //   value={CustomUnitModalState.type}
                  onChange={handleCustomUnitCheck}
                />
                <label className="checkboxLebel" for="type">
                  All
                </label> */}
                <div className="boxes">
                  <input
                    className="checkboxStyle"
                    type="radio"
                    name="type"
                    // defaultChecked
                    id="type"
                    value="All"
                    onChange={handleCustomUnitCheck}
                  />
                  <span>All</span>
                </div>
                <div className="boxes">
                  <input
                    className="checkboxStyle"
                    type="radio"
                    name="type"
                    id="type"
                    value="Resedential"
                    onChange={handleCustomUnitCheck}
                  />
                  <span>Resedential</span>
                </div>
                <div className="boxes">
                  <input
                    className="checkboxStyle"
                    type="radio"
                    name="type"
                    id="type"
                    value="Commercial"
                    onChange={handleCustomUnitCheck}
                  />
                  <span>Commercial</span>
                </div>
                <div className="boxes">
                  <input
                    className="checkboxStyle"
                    type="radio"
                    name="type"
                    id="type"
                    value="Mixed"
                    onChange={handleCustomUnitCheck}
                  />
                  <span>Mixed</span>
                </div>
                <div className="boxes">
                  <input
                    className="checkboxStyle"
                    type="radio"
                    name="type"
                    id="type"
                    value="Industrial"
                    onChange={handleCustomUnitCheck}
                  />
                  <span>Industrial</span>
                </div>
                <div className="boxes">
                  <input
                    className="checkboxStyle"
                    type="radio"
                    name="type"
                    id="type"
                    value="HMO"
                    onChange={handleCustomUnitCheck}
                  />
                  <span>HMO</span>
                </div>
                <div className="boxes">
                  <input
                    className="checkboxStyle"
                    type="radio"
                    name="type"
                    id="type"
                    value="Land"
                    onChange={handleCustomUnitCheck}
                  />
                  <span>Land</span>
                </div>
                <div className="boxes">
                  <input
                    className="checkboxStyle"
                    type="radio"
                    name="type"
                    id="type"
                    value="Water"
                    onChange={handleCustomUnitCheck}
                  />
                  <span>Water</span>
                </div>
                <div className="boxes">
                  <input
                    className="checkboxStyle"
                    type="radio"
                    name="type"
                    id="type"
                    value="Formland"
                    onChange={handleCustomUnitCheck}
                  />
                  <span>Formland</span>
                </div>
                <div className="boxes">
                  <input
                    className="checkboxStyle"
                    type="radio"
                    name="type"
                    id="type"
                    value="Resedential Block"
                    onChange={handleCustomUnitCheck}
                  />
                  <span>Resedential Block</span>
                </div>
                {/* <input
                <input
                  style={{ margin: "0.5rem" }}
                  type="checkbox"
                  id="Water"
                  value={CustomUnitModalState.type}
                  onChange={handleCustomUnitChange}
                />
                <label for="Water"></label>
                <input
                  style={{ margin: "0.5rem" }}
                  type="checkbox"
                  id="Formland"
                  value={CustomUnitModalState.type}
                  onChange={handleCustomUnitChange}
                />
                <label for="Formland"></label>
                <input
                  style={{ margin: "0.5rem" }}
                  type="checkbox"
                  id="Resedential_Block"
                  value={CustomUnitModalState.type}
                  onChange={handleCustomUnitChange}
                />
                <label for="Resedential_Block">Resedential Block</label> */}
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCustomUnit}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmitCustomUnit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Properties;
