import { useSelector } from "react-redux";
import { selectCamper } from "../../redux/campers/selectors";
import css from "./CamperDetail.module.css";
import CamperGallery from "../CamperGallery/CamperGallery";
import EquimentsList from "../EquimentsList/EquimentsList";
const CamperDetail = () => {
  const camper = useSelector(selectCamper);
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
        <h2>Features</h2>
        <EquimentsList camper={camper} />
      </div>
    </div>
  ) : (
    <h1> Not found</h1>
  );
};

export default CamperDetail;
