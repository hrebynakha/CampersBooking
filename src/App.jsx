import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage"));
const CatalogDetailPage = lazy(() =>
  import("./pages/CatalogDetailPage/CatalogDetailPage")
);
const Header = lazy(() => import("./components/Header/Header"));
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
            <Route path="/catalog/:id" element={<CatalogDetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Container>
    </>
  );
}

export default App;
