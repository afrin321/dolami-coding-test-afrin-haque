import React from "react";
import "./../styles/market.css";

function Filter(props) {
  const [contents] = React.useState(["VRChat(Quest)", "VRChat(PCVR)", "Other"]);
  const [toggleFullAvater, setToggleFullAvater] = React.useState(false);
  const [toggleHumanBased, setToggleHumanBased] = React.useState(false);
  const [price] = React.useState([
    "Under $10",
    "$10 to $20",
    "$20 to $30",
    "$30 to $40",
    "$40 to $50",
    "$50 to $70",
    "$70 & above",
  ]);
  const [polygon] = React.useState([
    "Under △7,500",
    "△7,500 to △10,000",
    "△10,000 to △15,000",
    "△15,000 to △20,000",
    "△20,000 to △32,000",
    "△32,000 to △70,000",
    "△70,000 & Above",
  ]);
  const [autoUploadSupport] = React.useState(["Supported", "Unsupported"]);
  const stylesDisplayAvatar = {
    display: toggleFullAvater ? "block" : "none",
  };

  const stylesDisplayHuman = {
    display: toggleHumanBased ? "block" : "none",
  };

  const stylesUnderline = {
    textDecoration: toggleFullAvater ? "underline" : "none",
  };

  return (
    <div className="filter-container">
      <h4>Category</h4>
      <div className="indented">
        <span
          onClick={() => {
            setToggleFullAvater((prev) => !prev);
            props.updateFilters((prev) => ({
              ...prev,
              title: toggleFullAvater ? "All Items" : "Full Avatar",
            }));
          }}
          style={stylesUnderline}
        >
          Full avatar
        </span>
        <div style={stylesDisplayAvatar}>
          <div className="indented">
            <span
              onClick={() => {
                setToggleHumanBased((prev) => !prev);
                props.updateFilters((prev) => ({
                  ...prev,
                  humanBased: "",
                  title: toggleFullAvater ? "Full Avatar  >  Human Based" : "",
                }));
              }}
            >
              Human Based
            </span>
            <div style={stylesDisplayHuman}>
              <p
                className="indented"
                onClick={() =>
                  props.updateFilters((prev) => ({
                    ...prev,
                    humanBased: "M",
                    title: "Full Avatar  >  Human Based  >  Male",
                  }))
                }
              >
                Male
              </p>
              <p
                className="indented"
                onClick={() =>
                  props.updateFilters((prev) => ({
                    ...prev,
                    humanBased: "F",
                    title: "Full Avatar  >  Human Based  >  Female",
                  }))
                }
              >
                Female
              </p>
              <p
                className="indented"
                onClick={() =>
                  props.updateFilters((prev) => ({
                    ...prev,
                    humanBased: null,
                    title: "Full Avatar  >  Human Based  >  Unisex",
                  }))
                }
              >
                Unisex
              </p>
            </div>
          </div>
          <p className="indented">Animal and mystical creature Based</p>
          <p className="indented">Robot Based</p>
          <p className="indented">Other</p>
        </div>
      </div>
      <label className="indented">Other</label>
      <br />
      <h4>Contents</h4>
      {contents.map((content) => (
        <label id={content} className="indented">
          <input type="checkbox" for={content} name="content" /> {content}
        </label>
      ))}

      <h4>Price</h4>
      {price.map((price) => (
        <label id={price} className="indented">
          <input type="checkbox" for={price} name="price" /> {price}
        </label>
      ))}

      <h4>Polygon Amount</h4>
      {polygon.map((polygon) => (
        <label id={polygon} className="indented">
          <input type="checkbox" for={polygon} name="polygon" /> {polygon}
        </label>
      ))}

      <h4>Auto upload support</h4>
      {autoUploadSupport.map((autoUploadSupport) => (
        <label id={autoUploadSupport} className="indented">
          <input
            type="checkbox"
            for={autoUploadSupport}
            name="autoUploadSupport"
          />{" "}
          {autoUploadSupport}
        </label>
      ))}
      <div className="spacer"></div>
    </div>
  );
}

export default Filter;
