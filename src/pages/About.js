import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";

function About() {
  return (
    <div className="grid-container">
      <div className="item1">
        <Hero hero="carsHero2">
          {/* <Banner
            title="à propos"
            subtitle="Découvrez en plus sur Drive Automobiles"
          ></Banner> */}
        </Hero>
      </div>
      <div className="item2">
        <h2>DRIVE AUTOMOBILES</h2>
        <p className="white-text">
          DRIVE Automobiles est l’aboutissement d’un jeune passionné de 24 ans.
          C’est aussi la revanche d’un petit garçon qui a toujours rêvé
          d’automobiles d’exception, sans pouvoir les approcher de près avant sa
          majorité.<br></br>
          <br></br>
          Diplômé d’école de commerce, Mattéo débute le métier en Angleterre, à
          Lodge Motor Company, prestigieux garage dans le Surrey. Il apprend les
          valeurs du service premium pour ses clients comme pour ses voitures en
          accompagnant le tout par un showroom ordonné et un service de
          préparation automobile perfectionniste, digne des anglais. <br></br>
          <br></br>
          Frustré de sa position de stagiaire, il commence à importer des
          véhicules en jouant avec son prêt étudiant. Grâce à ces expériences,
          il rentre facilement chez le leader de l'import RHD, Gocarz.<br></br>{" "}
          <br></br>
          Pour parfaire sa formation de vendeur, il va se faire la main chez
          Citroën, puis faute de passion, il rejoint Icon Motors, spécialiste
          Porsche et Ferrari sur Bordeaux. Enfin, l’attrait naturel pour
          l’entrepreneuriat lui fait ouvrir son propre garage: DRIVE
          Automobiles.<br></br>
          <br></br> Le projet est de construire petit à petit un temple de la
          passion. Un endroit où on va chercher des conseils, visiter une
          occasion intéressante, discuter de projet automobiles, ou encore
          repartir le sourire aux lèvres à bord d’une belle voiture.
          <br></br>
          <br></br>La philosophie du garage se veut très ouverte, et en aucun
          cas élitiste. Il est important de souligner qu’aujourd’hui il est
          possible de se faire plaisir, ou encore réaliser ses rêves à tout
          budget. C’est pour cela que la société s’engage à avoir un stock de
          qualité, avec un choix varié tout en respectant le critère du plaisir
          de conduite.
          <br></br> <br></br>L’équipe commerciale est prête à vous accueillir au
          sein de son showroom afin de vous présenter son univers, ses voitures
          et de répondre à toutes vos demandes.
        </p>
      </div>
    </div>
  );
}

export default About;
