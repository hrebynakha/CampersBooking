import { Link, Outlet } from "react-router-dom";

const CatalogDetailPage = () => {
  return (
    <div>
      CatalogDetailPage
      <li>
        <Link to="features">Features</Link>
      </li>
      <li>
        <Link to="reviews">Reviews</Link>
      </li>
      <Outlet />
    </div>
  );
};

export default CatalogDetailPage;
