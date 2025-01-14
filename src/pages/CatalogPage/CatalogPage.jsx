import CampersSearchForm from "../../components/CampersSearchForm/CampersSearchForm";
import css from "./CatalogPage.module.css";
import CampersList from "../../components/CampersList/CampersList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCampers } from "../../redux/campers/operations";
import { useSearchParams } from "react-router-dom";
import { changeSearchFilter, incrementPage } from "../../redux/filters/slice";
import { selectPageFilter } from "../../redux/filters/selectors";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams("");
  const params = Object.fromEntries(searchParams);
  const paginate = useSelector(selectPageFilter);

  useEffect(() => {
    dispatch(changeSearchFilter(params));
    dispatch(fetchCampers({ ...params, ...paginate }));
  }, [dispatch, params, paginate]);

  const handleSearch = (values) => {
    if (values) setSearchParams(values);
  };

  return (
    <div className={css.wrap}>
      <CampersSearchForm onSubmit={handleSearch} />
      <CampersList />
      <LoadMoreBtn onClick={() => dispatch(incrementPage())} />
    </div>
  );
};

export default CatalogPage;
