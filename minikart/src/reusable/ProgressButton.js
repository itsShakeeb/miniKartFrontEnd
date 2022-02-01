import React from "react";
import { Button } from "react-bootstrap";

const ProgressButton = (props) => {
  const { message, variant, css } = props;
  return (
    <div>
      <Button variant={variant} className={css}>
        {message}
      </Button>
    </div>
  );
};

export default ProgressButton;
