import ProjectContainer from "../../components/ProjectContainer";
import Booki from "../../assets/projects/booki.png";
import Nina from "../../assets/projects/nina.png";
import Kasa from "../../assets/projects/kasa.png";

export default function Projects() {

    const projects = {
        title: "Mes %Projets%",
        text: "Voici quelques projets que j'ai réalisé durant ma formation de %Développeur Web% chez %OpenClassrooms%",
        projects: [
            {
                src: Booki,
                title: "Intégration de la maquette du site %Booki%",
                text: "Booki est un site de réservation d'hébergements et d'activités. Ma mission était d'intégrer une maquette %Figma% en utilisant %HTML% et %CSS%. Ce projet m'a appris à %découper% et %intégrer% une maquette.",
                github: "https://github.com/BryanB-Dev/Booki",
                demo: "https://bryanb-dev.github.io/Booki/ "
            },
            {
                src: Nina,
                title: "Optimisation du site de %Nina Carducci%",
                text: "Audit %SEO% du site d'une photographe avec %Lighthouse%, débogage du carrousel puis %optimisation% en agissant sur les images et le code. Ce projet m'a permis d'approfondir mes connaissances en référencement. Le débogage du carrousel a posé difficulté du à une modification d'une librairie. La %solution% fut de réimporter la librairie initiale.",
                github: "https://github.com/BryanB-Dev/Nina-Carducci",
                demo: "https://bryanb-dev.github.io/Nina-Carducci/"
            },
            {
                src: Kasa,
                title: "Kasa",
                text: "Kase est un site de location d'appartements entre particuliers en France. Ma mission était de réaliser le front-end du site en utilisant %React% et %Sass%. Ce projet m'a permis de découvrir %React%, %React Router DOM%, %Sass% et l'%Atomic Design%. La principal difficulté fut de réaliser une animation %CSS% d'ouverture et de fermeture sur le composant Collapse.",
                github: "https://github.com/BryanB-Dev/kasa",
                demo: "https://bryanb-dev.github.io/kasa/"
            }
        ]
    }

    return (
        <>
            <ProjectContainer datas={projects} />
        </>
    );
}
