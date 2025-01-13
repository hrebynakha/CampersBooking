import CampersFilters from "../../components/CampersFilters/CampersFilters";

import css from "./CatalogPage.module.css";
import CampersList from "../../components/CampersList/CampersList";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCampers } from "../../redux/campers/operations";

const CatalogPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <div className={css.wrap}>
      <CampersFilters />
      <CampersList />
    </div>
  );
};

export default CatalogPage;
