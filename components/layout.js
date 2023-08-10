import HeaderComponent from "../components/common/Header/header";
import FooterComponent from "../components/common/Footer/footer";

export default function Layout({ children }) {
    return (
        <>
            <HeaderComponent></HeaderComponent>   
            <main>{children}</main>
            <FooterComponent></FooterComponent>
        </>
    );
}