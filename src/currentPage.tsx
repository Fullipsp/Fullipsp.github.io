import { useMatch } from "@solidjs/router";
import { createMemo, lazy } from "solid-js";
import AboutMeContent from "./content/AboutMe";

const PinsContent = lazy(() => import("./content/Pins"));
const SalePinsContent = lazy(() => import("./content/SalePins"));
const DrawingsContent = lazy(() => import("./content/Drawings"));
const FiguresContent = lazy(() => import("./content/Figures"));
const PinDisplaysContent = lazy(() => import("./content/PinDisplays"));



const usePathMatch = (path: string) => {
    const match = useMatch(() => path);

    return createMemo(() => !!match()?.path);
};

export const useCurrentPage = () => {
    const isPinsPage = usePathMatch("/pins");
    const isSalePinsPage = usePathMatch("/sale");
    const isDrawingsPage = usePathMatch("/drawings");
    const isFiguresPage = usePathMatch("/figures");
    const isPinDisplaysPage = usePathMatch("/pin-displays");
    const isAboutMePage = usePathMatch("/");

    return () => {
        switch (true) {
        case isPinsPage():
            return {name: "Pins", component: PinsContent} as const;
        case isSalePinsPage():
            return {name: "Pins 4 Sale", component: SalePinsContent} as const;
        case isDrawingsPage():
            return {name: "Drawings", component: DrawingsContent} as const;
        case isFiguresPage():
            return {name: "Figures", component: FiguresContent} as const;
        case isPinDisplaysPage():
            return {name: "Pin Displays", component: PinDisplaysContent} as const;
        case isAboutMePage():
            return {name: "About Me", component: AboutMeContent} as const

    }
    }

}