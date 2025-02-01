import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import { Home, Blogs, NotFound } from "./pages/index";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<RootLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/blogs" element={<Blogs />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </>
    )
);

const App = () => {
    return <RouterProvider router={router}></RouterProvider>;
};

export default App;
