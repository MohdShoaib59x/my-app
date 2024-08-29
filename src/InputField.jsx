import { Typography } from "@mui/material";
import React, { Fragment } from "react";

export default function InputField({ name, label, placeholder, ...props }) {
  return (
    <Fragment>
      <Typography component={"label"} htmlFor={name} color="#344054" fontSize={"10.5px"} fontWeight={500} display="block" mb={0.5}>
        {label}
      </Typography>
      <input
        {...{
          id: name,
          name,
          label,
          placeholder,
          style: { height: "33px", padding: "7.5px 10.5px", borderRadius: "6px", width: "100%", outline: "none", border: "1px solid #D0D5DD" },
        }}
      />
    </Fragment>
  );
}
