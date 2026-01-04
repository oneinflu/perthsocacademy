import { HomeHero } from "@/app/home-hero";
import { HomeWhy } from "@/app/home-why";
import { HomeThreat } from "@/app/home-threat";
import { HomeRoles } from "@/app/home-roles";
import { HomeWhyNow } from "@/app/home-why-now";
import { HomeFeatures } from "./home-features";
import { HomePaths } from "./home-paths";

export const HomeScreen = () => {
    return (
        <>
            <HomeHero />
         
            <HomeFeatures />
            <HomeThreat />
            <HomeRoles />
            <HomeWhyNow />
            <HomePaths />
        </>
    );
};
