import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { CoursesListPage } from "./pages/CoursesListPage";
import { CoursePage } from "./pages/CoursePage";
import { VideoPage } from "./pages/VideoPage";
import { TutorialPage } from "./pages/TutorialPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "courses",
        Component: CoursesListPage,
      },
      {
        path: "courses/:slug",
        Component: CoursePage,
      },
      {
        path: "videos/:slug",
        Component: VideoPage,
      },
      {
        path: "tutorials/:slug",
        Component: TutorialPage,
      },
    ],
  },
]);