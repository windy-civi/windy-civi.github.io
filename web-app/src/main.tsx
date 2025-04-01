import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { AppShell } from "./app/app-shell/element";
import { loader as navigatorLoader } from "./app/app-shell/loader";
import { Feed } from "./app/feed/element";
import { loader as feedLoader } from "./app/feed/loader";
import { action as preferencesAction } from "./app/preferences/action";
import { Preferences } from "./app/preferences/element";
import { loader as preferencesLoader } from "./app/preferences/loader";

/**
 * Load tailwind
 */
import "./tailwind-install.css";

const router = createHashRouter([
  {
    path: "/",
    loader: navigatorLoader,
    element: <AppShell />,
    children: [
      {
        path: "/preferences",
        loader: preferencesLoader,
        action: preferencesAction,
        element: <Preferences />,
      },
      {
        path: "/",
        loader: feedLoader,
        element: <Feed />,
      },
      // Catch all feed routes
      {
        path: "/:feedId",
        loader: feedLoader,
        element: <Feed />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
