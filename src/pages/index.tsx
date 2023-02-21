import { Box } from "@mui/material";

import { Seo } from "../components/common";
import { FeaturedWork, HeroSection, RecentPost } from "../components/home";
import MainLayout from "../layouts/main";

export default function Home() {
  return (
    <Box>
      <Seo
        data={{
          title: "NextJs",
          description: "Step by step",
          url: "",
          thumbnail: "",
        }}
      />
      <HeroSection />
      <RecentPost />
      <FeaturedWork />
    </Box>
  );
}

Home.getLayout = function getLayout(home: React.ReactElement) {
  return <MainLayout>{home}</MainLayout>;
};
