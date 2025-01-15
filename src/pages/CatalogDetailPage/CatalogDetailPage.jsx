import { useParams } from "react-router-dom";
import CamperDetail from "../../components/CamperDetail/CamperDetail";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
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
