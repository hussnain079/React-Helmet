import HtmlHead from "../../Components/ReactHelmet";

const Home = () => {

  const title = "Home";
  const description = "Home Page";

  return (
    <div>
    <HtmlHead title={title} description={description} />
      Home:
      This is a home page
    </div>
  )
}

export default Home
