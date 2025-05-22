import Head from "next/head";
import { ResumeSection, SkillsSection } from "../components/containers";
import { Layout2 } from "../components/layout";
import { SectionHeading } from "../components/utils";

const resume = () => {
  return (
    <Layout2>
      <Head>
        <title>Resume - Oleksandr Solovei Portfolio</title>
      </Head>

      {/* Start Skills Section */}
      <section
        name="section-skills"
        className="skills-section pt-24 lg:pt-28 xl:pt-32"
      >
        <div className="container mx-auto">
          <SectionHeading
            title="My Skills"
            watermark="Skills"
            animated={false}
          />
          <SkillsSection />
        </div>
      </section>
      {/* End Skills Section */}
    </Layout2>
  );
};

export default resume;
