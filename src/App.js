import { Download, Feature, SectionWrapper } from "./components";
import assets from "./assets";
import styles from "./styles/Global";
const App = () => {
  return (
    <>
      <SectionWrapper
        title="Your own store of Nifty NFTs .
      Start Selling & Growing "
        description="Buy , Store , collect NFTs , exchange & earn crypto. join 25+ million people using ProNef Marketplace."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Smart User INterface Marketplace"
        description="Exprience a buttery UI of ProNft NFT Marketplace. Smooth constant color of a fluent UI design"
        mockupImg={assets.homeCards}
        reverse
      />
      <Feature />
      <SectionWrapper
        title="Deployment"
        description="ProNef is built using expo which run natively on all users"
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title="Creative way to showcase the store "
        description="The app contain two screens. The first screen list of all NFTs while the second one show the details of a specific NFT."
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />
      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Made with Love by{" "}
          <span className="bold">Javascript Mastery & NeoSalvatore</span>
        </p>
      </div>
    </>
  );
};

export default App;
