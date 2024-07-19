import Footer from "../components/footer/Footer";
import Navbar from "../components/header/Navbar";
import RecruitmentSection2 from "../components/RecruitmentSection2/RecruitmentSection";
import AnimatedComponent from "../components/recruitment/sec1"
export default function Contact(){
    return(
        <>
              <Navbar />
              <AnimatedComponent/>
              <RecruitmentSection2/>
              <Footer />
        </>
    )
}