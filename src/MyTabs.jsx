import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Avatar, Chip, Divider, Typography } from "@mui/material";

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

export default function MyTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{
            "& .MuiTab-root": {
              p: 0,
              textTransform: "none",
              //   width:"75px",
              fontSize: "10.5px",
              width: "fit-content",
              fontWeight: "500!important",
              minWidth: "75px",
            },
            minHeight: "33px",
          }}
        >
          <Tab label="Vendor " {...a11yProps(0)} />
          <Tab label="PR" {...a11yProps(1)} />
          <Tab label="Quotation" {...a11yProps(2)} />
          <Tab label="History" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Typography variant="h6" fontWeight="bolder" fontSize={"12px"} color="#344054" mb={1}>
          Vendor Contact information:
        </Typography>

        <table style={{ width: "100%" }} cellSpacing={10}>
          <tbody>
            <tr>
              <td>
                <Typography fontSize={"10.5px"} color="#667085">
                  Name
                </Typography>
              </td>
              <td align="right">
                <Chip
                  size="small"
                  variant="filled"
                  color="primary"
                  avatar={
                    <Avatar
                      alt="Natacha"
                      src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"
                    />
                  }
                  label="Dell technology"
                />
              </td>
            </tr>
            <tr>
              <td>
                <Typography fontSize={"10.5px"} color="#667085">
                  ID
                </Typography>
              </td>
              <td align="right">
                <Typography fontSize={"10.5px"} fontWeight={500}>
                  #VEN2013197
                </Typography>
              </td>
            </tr>
            <tr>
              <td>
                <Typography fontSize={"10.5px"} color="#667085">
                  Email
                </Typography>
              </td>
              <td align="right">
                <Typography fontSize={"10.5px"} fontWeight={500}>
                  Troy_Lehner98@gmail.com
                </Typography>
              </td>
            </tr>
            <tr>
              <td>
                <Typography fontSize={"10.5px"} color="#667085">
                  Phone number
                </Typography>
              </td>
              <td align="right">
                <Typography fontSize={"10.5px"} fontWeight={500}>
                  +71 931-465-6838
                </Typography>
              </td>
            </tr>
          </tbody>
        </table>

        <Divider />

        <Typography variant="h6" fontWeight="bolder" fontSize={"12px"} color="#344054" mb={1} mt={2}>
          Billing details:
        </Typography>

        <table style={{ width: "100%" }} cellSpacing={10}>
          <tbody>
            <tr>
              <td>
                <Typography fontSize={"10.5px"} color="#667085">
                  Street
                </Typography>
              </td>
              <td align="right">
                <Typography fontSize={"10.5px"} fontWeight={500}>
                  10934 Botsford Lakes,<br /> Lillianafield 13198-0174
                </Typography>
              </td>
            </tr>
            <tr>
              <td>
                <Typography fontSize={"10.5px"} color="#667085">
                  Country
                </Typography>
              </td>
              <td align="right">
                <Typography fontSize={"10.5px"} fontWeight={500}>
                  Mexico
                </Typography>
              </td>
            </tr>
            <tr>
              <td>
                <Typography fontSize={"10.5px"} color="#667085">
                  State
                </Typography>
              </td>
              <td align="right">
                <Typography fontSize={"10.5px"} fontWeight={500}>
                  Botsford Lakes
                </Typography>
              </td>
            </tr>
            <tr>
              <td>
                <Typography fontSize={"10.5px"} color="#667085">
                  City
                </Typography>
              </td>
              <td align="right">
                <Typography fontSize={"10.5px"} fontWeight={500}>
                  Lillianafield
                </Typography>
              </td>
            </tr>{" "}
            <tr>
              <td>
                <Typography fontSize={"10.5px"} color="#667085" noWrap>
                  ZIP/PIN code
                </Typography>
              </td>
              <td align="right">
                <Typography fontSize={"10.5px"} fontWeight={500}>
                  13198-0174
                </Typography>
              </td>
            </tr>
          </tbody>
        </table>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Typography variant="h6" fontWeight="bolder" fontSize={"12px"} color="#344054">
          PR information:
        </Typography>
        Aliquip esse occaecat duis exercitation consectetur officia Lorem. Et anim amet ea fugiat ullamco ad deserunt nostrud dolore commodo. Ullamco non ea
        duis exercitation esse magna enim ipsum nisi. Ex ullamco anim aliqua deserunt. Culpa commodo ex sit et. Fugiat laboris do ad veniam commodo cupidatat eu
        irure est sunt ipsum qui Lorem nulla. Ipsum ex Lorem magna commodo cupidatat. Deserunt est sint ipsum ipsum aliqua. Velit reprehenderit laborum aliqua
        exercitation anim voluptate ut officia amet ipsum tempor qui. Magna tempor aliqua consectetur veniam id enim. Commodo duis nulla sint esse ad qui
        occaecat id occaecat commodo id dolor.
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Typography variant="h6" fontWeight="bolder" fontSize={"12px"} color="#344054">
          Quotation information:
        </Typography>
        Aliquip esse occaecat duis exercitation consectetur officia Lorem. Et anim amet ea fugiat ullamco ad deserunt nostrud dolore commodo. Ullamco non ea
        duis exercitation esse magna enim ipsum nisi. Ex ullamco anim aliqua deserunt. Culpa commodo ex sit et. Fugiat laboris do ad veniam commodo cupidatat eu
        irure est sunt ipsum qui Lorem nulla. Ipsum ex Lorem magna commodo cupidatat. Deserunt est sint ipsum ipsum aliqua. Velit reprehenderit laborum aliqua
        exercitation anim voluptate ut officia amet ipsum tempor qui. Magna tempor aliqua consectetur veniam id enim. Commodo duis nulla sint esse ad qui
        occaecat id occaecat commodo id dolor.
      </CustomTabPanel>{" "}
      <CustomTabPanel value={value} index={3}>
        <Typography variant="h6" fontWeight="bolder" fontSize={"12px"} color="#344054">
          History information:
        </Typography>
        Aliquip esse occaecat duis exercitation consectetur officia Lorem. Et anim amet ea fugiat ullamco ad deserunt nostrud dolore commodo. Ullamco non ea
        duis exercitation esse magna enim ipsum nisi. Ex ullamco anim aliqua deserunt. Culpa commodo ex sit et. Fugiat laboris do ad veniam commodo cupidatat eu
        irure est sunt ipsum qui Lorem nulla. Ipsum ex Lorem magna commodo cupidatat. Deserunt est sint ipsum ipsum aliqua. Velit reprehenderit laborum aliqua
        exercitation anim voluptate ut officia amet ipsum tempor qui. Magna tempor aliqua consectetur veniam id enim. Commodo duis nulla sint esse ad qui
        occaecat id occaecat commodo id dolor.
      </CustomTabPanel>
    </Box>
  );
}
