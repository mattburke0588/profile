import Head from "next/head";
import { Element as Section } from "react-scroll";
import {
  AboutSection,
  ContactSection,
  HeroSection,
  PortfoliosSection,
  ResumeSection,
  ReviewsSection,
  ServicesSection,
  SkillsSection,
} from "../components/containers";
import { Layout } from "../components/layout";
import { SectionHeading } from "../components/utils";

const index = ({ pages }) => {
  return (
    <Layout blurred>
      <Head>
        <title>Matt Burke Portfolio</title>
      </Head>

      {/* Start Hero Section */}
      <Section name="section-home">
        <HeroSection blurred />
      </Section>
      {/* End Hero Section */}

      {/* Start About Section */}
      <Section
        name="section-about"
        className="about-section pt-24 lg:pt-28 xl:pt-32"
      >
        <div className="container mx-auto">
          <SectionHeading animated={false} title="About Me" watermark="About" />
          <AboutSection />
        </div>
      </Section>
      {/* End About Section */}

      {/* Start Skills Section */}
      <Section
        name="section-skills"
        className="skills-section pt-24 lg:pt-28 xl:pt-32"
      >
        <div className="container mx-auto">
          <SectionHeading
            animated={false}
            title="My Skills"
            watermark="Skills"
          />
          <SkillsSection />
        </div>
      </Section>
      {/* End Skills Section */}

      {/* Start Service Section */}
      <Section
        name="section-service"
        className="services-section pt-24 lg:pt-28 xl:pt-32"
      >
        <div className="container mx-auto">
          <SectionHeading
            animated={false}
            title="My Services"
            watermark="Services"
          />
          <ServicesSection />
        </div>
      </Section>
      {/* End Service Section */}

      {/* Start Portfolios Section */}
      <Section
        name="section-portfolios"
        className="portfolios-section pt-24 lg:pt-28 xl:pt-32"
      >
        <div className="container mx-auto">
          <SectionHeading animated={false} title="My Works" watermark="Works" />
          <PortfoliosSection />
        </div>
      </Section>
      {/* End Portfolios Section */}

      {/* Start Reviews Section */}
      <Section
        name="section-reviews"
        className="reviews-section pt-24 lg:pt-28 xl:pt-32"
      >
        <div className="container mx-auto">
          <SectionHeading
            animated={false}
            title="Client Reviews"
            watermark="Reviews"
          />
          <ReviewsSection />
        </div>
      </Section>
      {/* End Reviews Section */}

      {/* Start Contact Section */}
      <Section
        name="section-contact"
        className="contact-section pt-24 lg:pt-28 xl:pt-32"
      >
        <div className="container mx-auto">
          <SectionHeading
            animated={false}
            title="Contact Us"
            watermark="Contact"
          />
          <ContactSection />
        </div>
      </Section>
      {/* End Contact Section */}

      <span className="block pb-24 lg:pb-28 xl:pb-32"></span>
    </Layout>
  );
};

export default index;
