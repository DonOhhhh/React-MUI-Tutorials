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
import { MuiAutocomplete } from "./components/MuiAutocomplete.tsx";
import { MuiLayout } from "./components/MuiLayout.tsx";
import { MuiCard } from "./components/MuiCard.tsx";
import { MuiAccordion } from "./components/MuiAccordion.tsx";
import { MuiImageList } from "./components/MuiImageList.tsx";
import { MuiNavbar } from "./components/MuiNavbar.tsx";
import { MuiLink } from "./components/MuiLink.tsx";
import { MuiBreadcrumbs } from "./components/MuiBreadcrumbs.tsx";
import { MuiDrawer } from "./components/MuiDrawer.tsx";
import { MuiSpeedDial } from "./components/MuiSpeedDial.tsx";
import { MuiBottomNavigation } from "./components/MuiBottomNavigation.tsx";
import { MuiAvatar } from "./components/MuiAvatar.tsx";
import { MuiBadge } from "./components/MuiBadge.tsx";
import { MuiList } from "./components/MuiList.tsx";
import { MuiChip } from "./components/MuiChip.tsx";
import { MuiTooltip } from "./components/MuiTooltip.tsx";
import { MuiTable } from "./components/MuiTable.tsx";
import { MuiAlert } from "./components/MuiAlert.tsx";
import { MuiSnackbar } from "./components/MuiSnackbar.tsx";
import { MuiDialog } from "./components/MuiDialog.tsx";
import { MuiProgress } from "./components/MuiProgress.tsx";
import { MuiSkeleton } from "./components/MuiSkeleton.tsx";
import { MuiLoadingButton } from "./components/MuiLoadingButton.tsx";
import { MuiTabs } from "./components/MuiTabs.tsx";
import { MuiTimeline } from "./components/MuiTimeline.tsx";
import { MuiMasonry } from "./components/MuiMasonry.tsx";
import { MuiResponsiveness } from "./components/MuiResponsiveness.tsx";

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
            {
                path: "/autocomplete",
                element: <MuiAutocomplete />,
            },
            {
                path: "/layout",
                element: <MuiLayout />,
            },
            {
                path: "/card",
                element: <MuiCard />,
            },
            {
                path: "/accordion",
                element: <MuiAccordion />,
            },
            {
                path: "/imagelist",
                element: <MuiImageList />,
            },
            {
                path: "/navbar",
                element: <MuiNavbar />,
            },
            {
                path: "/link",
                element: <MuiLink />,
            },
            {
                path: "/breadcrumbs",
                element: <MuiBreadcrumbs />,
            },
            {
                path: "/drawer",
                element: <MuiDrawer />,
            },
            {
                path: "/speeddial",
                element: <MuiSpeedDial />,
            },
            {
                path: "/bottom-navigation",
                element: <MuiBottomNavigation />,
            },
            {
                path: "/avatar",
                element: <MuiAvatar />,
            },
            {
                path: "/badge",
                element: <MuiBadge />,
            },
            {
                path: "/list",
                element: <MuiList />,
            },
            {
                path: "/chip",
                element: <MuiChip />,
            },
            {
                path: "/tooltip",
                element: <MuiTooltip />,
            },
            {
                path: "/table",
                element: <MuiTable />,
            },
            {
                path: "/alert",
                element: <MuiAlert />,
            },
            {
                path: "/snackbar",
                element: <MuiSnackbar />,
            },
            {
                path: "/dialog",
                element: <MuiDialog />,
            },
            {
                path: "/progress",
                element: <MuiProgress />,
            },
            {
                path: "/skeleton",
                element: <MuiSkeleton />,
            },
            {
                path: "/loading-button",
                element: <MuiLoadingButton />,
            },
            {
                path: "/tabs",
                element: <MuiTabs />,
            },
            {
                path: "/timeline",
                element: <MuiTimeline />,
            },
            {
                path: "/masonry",
                element: <MuiMasonry />,
            },
            {
                path: "/responsiveness",
                element: <MuiResponsiveness />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <RouterProvider router={router} />
);
