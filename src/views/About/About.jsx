import HtmlHead from "../../Components/ReactHelmet";

const About = () => {
  const title = "About";
  const description = "About Page";

  return (
    <div>
      <HtmlHead title={title} description={description} />
      About: This is a about page
    </div>
  );
};

export default About;
