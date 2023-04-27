import React from "react";
import Overlay from "react-bootstrap/Overlay";
import Copylink from "../images/icons/copy-link.png";
import { useSelector } from "react-redux";

function CopyLink(props) {
  const target = React.useRef(null);
  const productName = props.productName.substring(
    0,
    props.productName.length - 4
  );
  const currentProduct = useSelector((state) => state.reducer.currentProduct);

  return (
    <>
      <span className="upload-icon first" ref={target} id="ic-first">
        🠕
      </span>
      <span
        className="upload-icon second"
        ref={target}
        onClick={() => props.setShow(!props.show)}
        id="ic-second"
      >
        ▢
      </span>
      <Overlay
        target={target.current}
        show={props.show && currentProduct == props.productName}
        placement="right"
      >
        {({
          placement: _placement,
          arrowProps: _arrowProps,
          show: _show,
          popper: _popper,
          hasDoneInitialMeasure: _hasDoneInitialMeasure,
          ...props
        }) => (
          <div
            {...props}
            style={{
              position: "absolute",
              backgroundColor: "#D9D9D9",
              padding: "2px 10px",
              color: "#6A6A6A",
              border: "solid 1px #6A6A6A",
              borderRadius: 3,
              zIndex: 3,
              ...props.style,
            }}
            onClick={() => {
              navigator.clipboard.writeText(
                "localhost:3000/dolami-coding-test-afrin-haque/products/" +
                  productName
              );
              console.log(props.productName, props.currentProduct);
            }}
            id="copy-link-tooltip"
          >
            <img src={Copylink} />
            Copy Link
          </div>
        )}
      </Overlay>
    </>
  );
}

export default CopyLink;
