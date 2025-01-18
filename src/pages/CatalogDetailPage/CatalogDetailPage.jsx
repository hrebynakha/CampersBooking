import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCamperDetail } from "../../redux/campers/operations";
import CamperDetail from "../../components/CamperDetail/CamperDetail";

const CatalogDetailPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchCamperDetail(id));
  }, [dispatch, id]);

  return <CamperDetail />;
};

export default CatalogDetailPage;
