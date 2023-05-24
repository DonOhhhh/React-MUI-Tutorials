import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MultiTypography } from "./components/MultiTypography.tsx";
import { MuiButton } from "./components/MuiButton.tsx";
import { MuiTextField } from "./components/MuiTextField.tsx";
import { MuiSelect } from "./components/MuiSelect.tsx";
import { MuiRadioButton } from "./components/MuiRadioButton.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/typography",
        element: <MultiTypography />,
    },
    {
        path: "/button",
        element: <MuiButton />,
    },
    {
        path: "/textfield",
        element: <MuiTextField />,
    },
    {
        path: "/select",
        element: <MuiSelect />,
    },
    {
        path: "/radiobutton",
        element: <MuiRadioButton />,
    },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <RouterProvider router={router} />
);
