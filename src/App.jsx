import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage"));
const CatalogDetailPage = lazy(() =>
  import("./pages/CatalogDetailPage/CatalogDetailPage")
);
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const LayoutBase = lazy(() => import("./components/LayoutBase/LayoutBase"));
const LayoutGray = lazy(() => import("./components/LayoutGray/LayoutGray"));
import "./App.css";

function App() {
  return (
    <Suspense fallback={"Loading..."}>
      <Routes>
        <Route path="/" element={<LayoutBase />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/catalog" element={<LayoutGray />}>
          <Route index element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CatalogDetailPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
