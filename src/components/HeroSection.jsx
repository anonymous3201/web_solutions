import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import code1 from "../assets/code1.png";
import code2 from "../assets/code2.png";
import recu1 from "../assets/recu1.png";
import recu2 from "../assets/recu2.png";


const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        WEB SOLUTIONS
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          Creer votre propre site de restauration moderne sans techniques requises et proposez aux restaurants !
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Imaginez un monde où vous êtes le leader d'une révolution technologique,
        aidant les restaurants à optimiser leurs services et à augmenter leurs
        profits. Avec notre solution clé en main, vous pouvez transformer chaque
        défi en opportunité et chaque restaurant en une machine à succès.
      </p>
      <div className="flex justify-center my-10">
        <a
          href="https://6f16cdf0-c3da-469e-8ca4-285896c6ae5d.netlify.app/"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Decouvrir le site
        </a>
        <a
          href="https://drive.google.com/file/d/1lOADjkVdn0Jqzb6OUt8lxoZAIZbpsRjh/view?usp=sharing"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Demo et configuration
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        En investissant seulement 45 000 francs CFA, vous avez accès à une
        licence exclusive qui vous permettra de proposer des sites web
        performants pour la gestion des commandes en ligne. Aucune compétence
        technique n’est requise, juste votre motivation et votre
        désir de réussir. Cette licence vous offre la possibilité de vendre des
        sites web personnalisés pour les restaurants, sans aucun développement
        technique nécessaire, tout en générant des revenus immédiatement
      </p>
      <div className="flex mt-10 justify-center">
        <img
          src={code1}
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        />
        <img
          src={code2}
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        />
      </div>
    </div>
  );
};

export default HeroSection;
