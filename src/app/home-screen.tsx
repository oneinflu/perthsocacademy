import { HomeHero } from "@/app/home-hero";
import { HomeWhy } from "@/app/home-why";
import { HomeThreat } from "@/app/home-threat";
import { HomeRoles } from "@/app/home-roles";
import { HomeWhyNow } from "@/app/home-why-now";
import { HomeFeatures } from "./home-features";
import { HomePaths } from "./home-paths";
import { BannerStrip } from "@/components/application/banner-strip";
import { PopularPrograms } from "./popular-programs";
import { PopularCourses } from "./popular-courses";
import { PathSelector } from "./path-selector";
import { FAQBlock } from "./faq-block";
import { HomeStats } from "@/components/application/home-stats";
import { WhyAtlantaSOC } from "./why-atlantasoc";

export const HomeScreen = () => {
    return (
        <>
            <HomeHero />
            <HomeStats />
         <BannerStrip />
        
         <PopularPrograms />
         <PopularCourses />
          <WhyAtlantaSOC />
         <PathSelector />
            {/* <HomeFeatures />
            <HomeThreat />
            <HomeRoles />
            <HomeWhyNow />
            <HomePaths /> */}
            <FAQBlock />
        </>
    );
};
