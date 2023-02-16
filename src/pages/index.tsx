import { Box } from "@mui/material";
import MainLayout from "../layouts/main";
import { FeaturedWork, HeroSection, RecentPost } from "../components/home";

export default function Home() {
  return (
    <Box>
      <HeroSection />
      <RecentPost />
      <FeaturedWork />
    </Box>
  );
}

Home.getLayout = function getLayout(home: React.ReactElement) {
  return <MainLayout>{home}</MainLayout>;
};
