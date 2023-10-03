import Customer from "./components/Customer"
import Dashboard from "./components/Dashboard"
import Documentation from "./components/Documentation"
import Header from "./components/Header"
import Services from "./components/Services"
import Interior from "./components/Interior"
import Compony from "./components/Compony"
import Comment from "./components/Comment"
import Qestions from "./components/Qestions"
import Profile from "./components/Profile"
import Footer from "./components/Footer"


export default function Home() {
    return (
        <>
            <Header />
            <Dashboard />
            <Services />
            <Documentation />
            <Customer/>
            <Interior/>
            <Compony/>
            <Comment/>
            <Qestions/>
            <Profile/>
            <Footer/>    
        </>
    )
}
