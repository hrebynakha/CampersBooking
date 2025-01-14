import CampersSearchForm from "../../components/CampersSearchForm/CampersSearchForm";
import css from "./CatalogPage.module.css";
import CampersList from "../../components/CampersList/CampersList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
import { fetchCampers } from "../../redux/campers/operations";
import { useSearchParams } from "react-router-dom";
import { changeSearchFilter } from "../../redux/campers/slice";
import { selectFilter } from "../../redux/campers/selectors";

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
    dispatch(fetchCampers({ ...filter, ...params }));
  }, [dispatch, filter, params]);

  const handleSearch = (values) => {
    if (values) setSearchParams(values);
  };

  return (
    <div className={css.wrap}>
      <CampersSearchForm onSubmit={handleSearch} />
      <CampersList />
    </div>
  );
};

export default CatalogPage;
