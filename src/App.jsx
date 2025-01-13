import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage"));
const CatalogDetailPage = lazy(() =>
  import("./pages/CatalogDetailPage/CatalogDetailPage")
);
const CamperFeatures = lazy(() =>
  import("./components/CamperFeatures/CamperFeatures")
);
const CamperReviews = lazy(() =>
  import("./components/CamperReviews/CamperReviews")
);
const Header = lazy(() => import("./components/Header/Header"));
// const Navigation = lazy(() => import("./components/Navigation/Navigation"));
const Container = lazy(() => import("./components/Container/Container"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Suspense fallback={"loading...."}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/catalog/:id" element={<CatalogDetailPage />}>
              <Route path="features" element={<CamperFeatures />} />
              <Route path="reviews" element={<CamperReviews />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Container>
    </>
  );
}

export default App;
