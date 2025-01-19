import { useState } from "react";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import toast from "react-hot-toast";
import { formatDistanceToNow } from "date-fns";
import { selectCamper } from "../../redux/campers/selectors";
import { selectLoading } from "../../redux/root/selectors";
import { trasnformToCurrencyText } from "../../utils/helpers/helpers";
import { feedbackForm } from "../../utils/feedback/feedback";
import BookingForm from "../BookingForm/BookingForm";
import CamperGallery from "../CamperGallery/CamperGallery";
import CamperReviews from "../CamperReviews/CamperReviews";
import CamperFeatures from "../CamperFeatures/CamperFeatures";
import CamperSecondaryInfo from "../CamperSecondaryInfo/CamperSecondaryInfo";
import NotFoundError from "../NotFoundError/NotFoundError";
import css from "./CamperDetail.module.css";

const CamperDetail = () => {
  const camper = useSelector(selectCamper);
  const loading = useSelector(selectLoading);
  const [tabOpened, setTabOpened] = useState("1");
  const handleChange = (e, newValue) => {
    setTabOpened(newValue);
  };
  const handleBookingSubmit = (contact) => {
    toast.success(
      `Hi, ${contact.name}, we wait for you in ${formatDistanceToNow(
        contact.bookingDate
      )}`
    );
    feedbackForm({ contact: contact, camper: camper });
    // just for user can write owns form logic
  };
  return camper ? (
    <>
      <h1 className={css.mainInfo}>{camper.name}</h1>
      <CamperSecondaryInfo
        rating={camper.rating}
        reviewsCount={camper.reviews.length}
        location={camper.location}
      />
      <h4 className={css.price}>{trasnformToCurrencyText(camper.price)}</h4>
      <CamperGallery gallery={camper.gallery} name={camper.name} />
      <p className={css.desc}> {camper.description}</p>
      <Box sx={{ width: "100%", mb: "80px" }}>
        <TabContext value={tabOpened}>
          <Box sx={{ borderBottom: 1, borderColor: "#dadde1" }}>
            <TabList
              onChange={handleChange}
              aria-label="Camper tab"
              TabIndicatorProps={{
                style: {
                  background: "#E44848",
                  height: "3px",
                },
              }}
            >
              <Tab label="Features" value="1" className={css.tab} />
              <Tab label="Rewiews" value="2" className={css.tab} />
            </TabList>
          </Box>
          <Box display="flex" flexDirection="row" marginTop="44px" gap="40px">
            <Box flex={1}>
              <TabPanel
                value="1"
                className={css.features}
                sx={{ p: "44px 52px" }}
              >
                <CamperFeatures camper={camper} />
              </TabPanel>
              <TabPanel value="2">
                <CamperReviews reviews={camper.reviews} />
              </TabPanel>
            </Box>
            <Box flex={1} className={css.form} sx={{ p: "44px 57px" }}>
              <h4 className={css.formTitle}>Book your campervan now</h4>
              <p className={css.formDesc}>
                Stay connected! We are always ready to help you.
              </p>
              <BookingForm onSubmit={handleBookingSubmit} />
            </Box>
          </Box>
        </TabContext>
      </Box>
    </>
  ) : (
    !loading && <NotFoundError />
  );
};

export default CamperDetail;
