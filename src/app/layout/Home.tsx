
import Banner from "../home/banner/Banner";
import Education from "../home/education/Education";
import Experience from "../home/experience/Experience";
import ProfessionalSkills from "../home/skills/ProfessionalSkills";
import Recognitions from "../home/recognitions/Recognitions";
import Certifications from "../home/certification/Certifications";

export const Home = () => {
    return (
        <main className="App">
            <Banner/>
            <ProfessionalSkills />
            <Education />
            <Experience />
            <Recognitions />
            <Certifications/>
        </main>
    )
};

export default Home;