import { DiCss3, DiDebian, DiGit, DiHtml5, DiJavascript1, DiMongodb, DiMysql, DiNodejs, DiPhp, DiPython, DiReact, DiSass, DiUbuntu, DiWindows } from "react-icons/di";
import { SiExpress, SiKalilinux, SiMariadbfoundation, SiPostman, SiSqlite, SiVisualstudiocode } from "react-icons/si";
import SkillContainer from "../../components/SkillContainer";
import Github from "../../components/Github";

export default function Skills() {

    return (
        <>
        <div className="skillSection">
            <SkillContainer datas={{title:"Systèmes %D'exploitation%", skills: [<DiWindows/>, <DiDebian/>, <DiUbuntu/>, <SiKalilinux/>]}}/>
            <SkillContainer datas={{title:"Outils de %Développement%", skills: [<SiVisualstudiocode/>, <DiGit/>, <SiPostman/>]}}/>
            <SkillContainer datas={{title:"Bases de %Données%", skills: [<DiMysql/>, <SiMariadbfoundation/>, <DiMongodb/>, <SiSqlite/>]}}/>
            <SkillContainer datas={{title:"Langage %Back-end%", skills: [<DiPython/>, <DiPhp/>, <DiNodejs/>, <SiExpress/>]}}/>
            <SkillContainer datas={{title:"Langage %Front-end%", skills: [<DiHtml5/>, <DiCss3/>, <DiJavascript1/>]}}/>
            <SkillContainer datas={{title:"Préprocesseurs et %Framework%", skills: [<DiSass/>, <DiReact/>]}}/>
        </div>
        <Github user={"BryanB-Dev"}/>
        </>
    );
}
