import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { useSelector } from "react-redux";

import { selectLoading } from "./redux/root/selectors";
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage"));
const CatalogDetailPage = lazy(() =>
  import("./pages/CatalogDetailPage/CatalogDetailPage")
);
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const LayoutBase = lazy(() => import("./components/LayoutBase/LayoutBase"));
const LayoutMain = lazy(() => import("./components/LayoutMain/LayoutMain"));
import Loader from "./components/Loader/Loader";

import "./App.css";

function App() {
  const loading = useSelector(selectLoading);
  return (
    <Suspense fallback={<Loader />}>
      {loading && <Loader />}
      <Routes>
        <Route path="/" element={<LayoutBase />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/catalog" element={<LayoutMain />}>
          <Route index element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CatalogDetailPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
