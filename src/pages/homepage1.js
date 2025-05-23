import Head from "next/head";
import { HeroSection } from "../components/containers";
import { Layout2 } from "../components/layout";

const Homepage1 = () => {
  return (
    <Layout2>
      <Head>
        <title>Matt Burke Portfolio</title>
      </Head>

      {/* Start Hero Section */}
      <HeroSection scroll={false} />
      {/* End Hero Section */}
    </Layout2>
  );
};

export default Homepage1;
