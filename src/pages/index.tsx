import { Box } from "@mui/material";
import MainLayout from "../layouts/main";
import { HeroSection } from "../components/home";

export default function Home() {
  return (
    <Box>
      <HeroSection />
    </Box>
  );
}

Home.getLayout = function getLayout(home: React.ReactElement) {
  return <MainLayout>{home}</MainLayout>;
};
