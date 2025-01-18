import CampersSearchForm from "../../components/CampersSearchForm/CampersSearchForm";
import CampersList from "../../components/CampersList/CampersList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
import { fetchCampers } from "../../redux/campers/operations";
import { useSearchParams } from "react-router-dom";
import { changeSearchFilter } from "../../redux/campers/slice";
import { selectFilter } from "../../redux/campers/selectors";
import ToTopBtn from "../../components/ToTopBtn/ToToBtn";
import css from "./CatalogPage.module.css";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams("");
  const params = useMemo(
    () => Object.fromEntries(searchParams),
    [searchParams]
  );
  const filter = useSelector(selectFilter);
  useEffect(() => {
    dispatch(changeSearchFilter(params));
  }, [dispatch, params]);

  useEffect(() => {
    dispatch(fetchCampers({ ...params, ...filter }));
  }, [dispatch, params, filter]);

  const handleSearch = (values) => {
    if (values) setSearchParams(values);
  };

  return (
    <div className={css.wrap}>
      <CampersSearchForm onSubmit={handleSearch} />
      <CampersList />
      <ToTopBtn />
    </div>
  );
};

export default CatalogPage;
