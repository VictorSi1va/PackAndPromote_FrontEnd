import InfoBanner from "components/InfoBanner";
import Banner from "components/Banner";

import "./Home.css";
import ComoFunciona from "pages/ComoFunciona";

export default function Home() {
    return (
        <div>
            <InfoBanner
                titulo="Parcerias que impulsionam,"
                subtitulo="entregas que sustentam"
                conteudo={[
                    "Encontre novos parceiros para atrair novos clientes,",
                    "de forma sustentável"
                ]}                
                imagemUrl="/images/icons/info-1.png"
                corFundo="#FFFFFF"
                corTexto="#5393f7"
                onSaibaMais={() => alert("Mais informações em breve!")}
            />
            <ComoFunciona />
        </div>
    );
}