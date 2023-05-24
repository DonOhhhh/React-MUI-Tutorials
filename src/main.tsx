import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MultiTypography } from "./components/MultiTypography.tsx";
import { MuiButton } from "./components/MuiButton.tsx";
import { MuiTextField } from "./components/MuiTextField.tsx";
import { MuiSelect } from "./components/MuiSelect.tsx";
import { MuiRadioButton } from "./components/MuiRadioButton.tsx";
import { MuiCheckbox } from "./components/MuiCheckbox.tsx";
import { Links } from "./components/Links.tsx";
import { MuiSwitch } from "./components/MuiSwitch.tsx";
import { MuiRating } from "./components/MuiRating.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Links />,
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
            {
                path: "/checkbox",
                element: <MuiCheckbox />,
            },
            {
                path: "/switch",
                element: <MuiSwitch />,
            },
            {
                path: "/rating",
                element: <MuiRating />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <RouterProvider router={router} />
);
