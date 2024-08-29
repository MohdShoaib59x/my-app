import { Box, Paper, Tab, Tabs, Typography } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && <Box sx={{ px: 2, py: 2 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function MyTable() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper elevation={2} sx={{ borderRadius: "8px", mt: 2, border: "1px solid #D0D5DD" }}>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{
              "& .MuiTab-root": {
                width: "100%",
                p: 0,
                textTransform: "none",
                fontSize: "12px",
                fontWeight: "500!important",
                flex: 1,
              },
              minHeight: "33px",
            }}
          >
            <Tab label="Purchase Information " {...a11yProps(0)} />
            <Tab label="Attachments" {...a11yProps(1)} />
            <Tab label="Terms & Conditions" {...a11yProps(2)} />
            <Tab label="Additional Information" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <table
            style={{
              border: "1px solid #D0D5DD",
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "10.5px",
            }}
            border={1}
            cellPadding={10}
          >
            <thead style={{ background: "#EFF2F4" }}>
              <tr>
                <th align="left">Item Code</th>
                <th align="left">Item</th>
                <th align="left">Quantity</th>
                <th align="left">UOM</th>
                <th align="left">Price</th>
                <th align="left">Shipping method</th>
              </tr>
            </thead>

            <tbody>
              {[...new Array(5)].map(() => {
                return (
                  <tr>
                    <td>ITEM-23761</td>
                    <td>Apple MacBook Pro M1 </td>
                    <td>1</td>
                    <td>Each</td>
                    <td>₹ 1,200.00 </td>
                    <td>UPS</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Typography variant="h6" fontWeight="bolder" fontSize={"12px"} color="#344054">
            Attachments information:
          </Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum facere modi doloribus, veritatis similique sint dicta ad velit accusantium nulla
          dignissimos suscipit obcaecati, harum, numquam odio minima impedit illo quo.
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Typography variant="h6" fontWeight="bolder" fontSize={"12px"} color="#344054">
            Terms & Conditions information:
          </Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum facere modi doloribus, veritatis similique sint dicta ad velit accusantium nulla
          dignissimos suscipit obcaecati, harum, numquam odio minima impedit illo quo.
        </CustomTabPanel>{" "}
        <CustomTabPanel value={value} index={3}>
          <Typography variant="h6" fontWeight="bolder" fontSize={"12px"} color="#344054">
            Additional information:
          </Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum facere modi doloribus, veritatis similique sint dicta ad velit accusantium nulla
          dignissimos suscipit obcaecati, harum, numquam odio minima impedit illo quo.
        </CustomTabPanel>
      </Box>
    </Paper>
  );
}
