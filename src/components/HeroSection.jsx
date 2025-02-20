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
          La solution web clé en main pour vos restaurants !
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Chez WEB SOLUTIONS, nous mettons à votre disposition des applications
        web prêtes à l’emploi, conçues pour faciliter la gestion de votre
        restaurant, qu’il s’agisse d’un fast-food, d’un restaurant gastronomique
        ou d’une franchise. Nos solutions permettent une gestion fluide des
        commandes, des réservations, des stocks et bien plus, tout en offrant
        une expérience utilisateur optimale pour vos clients et vos équipes.
      </p>
      <div className="flex justify-center my-10">
        <a
          href="https://6f16cdf0-c3da-469e-8ca4-285896c6ae5d.netlify.app/"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Decouvrir le site du restaurant
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
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
