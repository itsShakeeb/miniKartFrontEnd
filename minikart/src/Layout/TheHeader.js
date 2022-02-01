import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { logoutAction } from "../redux/actions";

const TheHeader = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="header mb-3">
      <div className="d-flex justify-content-between w-100">
        <h3>Header</h3>
        <Button
          className="shadow-none"
          variant="danger"
          onClick={() => {
            dispatch(logoutAction());
          }}
        >
          Sign out
        </Button>
      </div>
    </div>
  );
};

export default React.memo(TheHeader);
