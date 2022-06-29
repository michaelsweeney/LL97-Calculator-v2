import React, { useEffect } from "react";
import { conn } from "../store/connect";

const Resizer = (props) => {
  const { dims } = props;
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  const handleResize = () => {
    props.actions.setDimensions({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  };

  useEffect(() => {
    if (dims.width < 800 || dims.height < 600) {
      props.actions.setIsSmallScreen(true);
    } else {
      props.actions.setIsSmallScreen(false);
    }
  }, [dims, props.actions]);
  return <></>;
};

const mapStateToProps = (state) => {
  return {
    dims: state.ui.dims,
  };
};

export default conn(mapStateToProps)(Resizer);
