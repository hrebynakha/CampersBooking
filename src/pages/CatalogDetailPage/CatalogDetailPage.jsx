import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import CamperDetail from "../../components/CamperDetail/CamperDetail";
import { fetchCamperDetail } from "../../redux/campers/operations";

const CatalogDetailPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchCamperDetail(id));
  }, [dispatch, id]);

  return (
    <div>
      <CamperDetail />
    </div>
  );
};

export default CatalogDetailPage;
