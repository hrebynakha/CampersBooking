import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import { selectCamper } from "../../redux/campers/selectors";
import css from "./CamperDetail.module.css";
import CamperGallery from "../CamperGallery/CamperGallery";
import EquimentsList from "../EquimentsList/EquimentsList";
import { useState } from "react";

const CamperDetail = () => {
  const camper = useSelector(selectCamper);

  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return camper ? (
    <div>
      <h1>{camper.name}</h1>
      <div className={css.secondaryInfo}>
        <span>
          {camper.rating}({camper.reviews.length} Reviews)
        </span>
        <span>{camper.location}</span>
      </div>
      <span>{camper.price}</span>
      <CamperGallery gallery={camper.gallery} name={camper.name} />
      <p className={css.desc}> {camper.description}</p>
      <div>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Features" value="1" />
                <Tab label="Rewiews" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <EquimentsList camper={camper} />
            </TabPanel>
            <TabPanel value="2">Item Two</TabPanel>
          </TabContext>
        </Box>
      </div>
    </div>
  ) : (
    <h1> Not found</h1>
  );
};

export default CamperDetail;
