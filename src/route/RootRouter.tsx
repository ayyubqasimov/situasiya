// RootRouter.tsx
import { createBrowserRouter, RouteObject, RouterProvider } from "react-router-dom";
import { RootLayout } from "./Layout.tsx";
import { Button, Result } from "antd";
import Content from "../components/layout/Content.tsx";
import Conflicts from "../components/conflicts/Conflicts.tsx";

const Router: RouteObject = {
  path: "",
  children: [
    {
      path: "/",
      element: (
        <RootLayout>
          <div></div>
        </RootLayout>
      ),
    },
    {
      path: "/objections",
      element: (
        <RootLayout>
          <Content />
        </RootLayout>
      ),
    },
    {
      path: "/reviewables",
      element: (
        <RootLayout>
          <Content type="reviewables" />
        </RootLayout>
      ),
    },
    {
      path: "/rejections",
      element: (
        <RootLayout>
          <Content />
        </RootLayout>
      ),
    },
    {
      path: "/curator-comments",
      element: (
        <RootLayout>
          <Content />
        </RootLayout>
      ),
    },
    {
      path: "/invisibles",
      element: (
        <RootLayout>
          <Content />
        </RootLayout>
      ),
    },
    {
      path: "/questions",
      element: (
        <RootLayout>
          <Content />
        </RootLayout>
      ),
    },
    {
      path: "/archive",
      element: (
        <RootLayout>
          <Content />
        </RootLayout>
      ),
    },
    {
      path: "/all",
      element: (
        <RootLayout>
          <Content type="all" />
        </RootLayout>
      ),
    },
    {
      path: "/conflicts/:id", 
      element: (
        <RootLayout>
          <Conflicts />
        </RootLayout>
      ),
    },
    {
      path: "/unauthorized",
      element: <Result title="Unauthorized" status="403" subTitle="You are not authorized to access this page." extra={<Button href="/">Geri qayıt</Button>} />,
    },
  ],
};

const routes = createBrowserRouter([Router]);

export const RootRouter = () => {
  return <RouterProvider router={routes} />;
};
