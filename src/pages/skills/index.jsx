import { DiCss3, DiDebian, DiGit, DiHtml5, DiJavascript1, DiMongodb, DiMysql, DiNodejs, DiPhp, DiPython, DiReact, DiSass, DiUbuntu, DiWindows } from "react-icons/di";
import { SiExpress, SiKalilinux, SiMariadbfoundation, SiPostman, SiSqlite, SiVisualstudiocode } from "react-icons/si";
import SkillContainer from "../../components/SkillContainer";
import Github from "../../components/Github";
import Text from "../../components/Text";
import Title from "../../components/Title";
import './style.scss';

export default function Skills() {

    return (
        <>
            <div className="skillSection">
                <div className="skillSection__text">
                    <Title text="Mes %Compétences%" size={2.4} />
                    <Text text="En constante évolution, je me forme régulièrement à de nouvelles %technologies% pour faire face aux changements du domaine. Par nature %curieux%, j'aime explorer de nouveaux langages et outils. Mon but est de progresser sans cesse afin d'offrir le meilleur de mes %compétences%." size={1.25} />
                </div>
                <div className="skillSection__skills">
                    <SkillContainer datas={{ title: "Systèmes %D'exploitation%", skills: [<DiWindows />, <DiDebian />, <DiUbuntu />, <SiKalilinux />] }} />
                    <SkillContainer datas={{ title: "Outils de %Développement%", skills: [<SiVisualstudiocode />, <DiGit />, <SiPostman />] }} />
                    <SkillContainer datas={{ title: "Bases de %Données%", skills: [<DiMysql />, <SiMariadbfoundation />, <DiMongodb />, <SiSqlite />] }} />
                    <SkillContainer datas={{ title: "Langage %Back-end%", skills: [<DiPython />, <DiPhp />, <DiNodejs />, <SiExpress />] }} />
                    <SkillContainer datas={{ title: "Langage %Front-end%", skills: [<DiHtml5 />, <DiCss3 />, <DiJavascript1 />] }} />
                    <SkillContainer datas={{ title: "Préprocesseurs et %Framework%", skills: [<DiSass />, <DiReact />] }} />
                </div>
                <Github user={"BryanB-Dev"} />
            </div>
        </>
    );
}
