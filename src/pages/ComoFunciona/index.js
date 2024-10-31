import Banner from "components/Banner";

import "./ComoFunciona.css";

export default function ComoFunciona() {
    return (
        <div className="como-funciona-page">
            <Banner
                titulo="Está em busca de novos clientes?"
                subtitulo="Então, essa opção é perfeita para sua loja!"
                conteudo={[
                    "Esse tipo de cadastro é destinado a lojas que buscam crescer seu negócio de forma alinhada aos seus valores, utilizando parcerias estratégicas para aumentar sua visibilidade. Interessadas em parcerias com empresas maiores que possam ajudar a promover sua marca.",
                    "Ao estabelecer a parceria com uma grande loja que realiza entregas com frequência, incluirá anúncios nas embalagens sustentáveis de entrega."
                ]}
                imagemUrlPrincipal="/images/icons/como-funciona-1.png"
                imagemUrlSecundaria="/images/icons/como-funciona-1-1.png"
                corFundo="#5393f7"
                corTexto="#FFFFFF"
            />
            <Banner
                titulo="Precisa de parceiros e embalagens para suas entregas?"
                subtitulo="Então, essa opção é perfeita para sua loja!"
                conteudo={[
                    "Esse tipo de cadastro é destinado a lojas que realizam entregas com frequência.  Podem se conectar com fornecedores de embalagens sustentáveis que ofereçam descontos ou vantagens por meio de parcerias com pequenos negócios, como a inclusão de anúncios de lojas locais nas embalagens.",
                    "Essa parceria não apenas reduz os custos de embalagens para a rede de supermercados, mas também agrega valor ao serviço de delivery, oferecendo aos clientes a possibilidade de conhecerem novos produtos e serviços locais.",
                    "O uso de embalagens sustentáveis melhora a imagem da rede, atendendo à crescente demanda dos consumidores por práticas mais ecológicas e responsáveis."
                ]}
                imagemUrlPrincipal="/images/icons/como-funciona-2.png"
                imagemUrlSecundaria="/images/icons/como-funciona-2-1.png"
                corFundo="#FFFFFF"
                corTexto="#5393f7"
            />
            <Banner
                titulo="Precisa expandir a base de clientes da fábrica?"
                subtitulo="Então, essa opção é perfeita para sua loja!"
                conteudo={[
                    "Esse tipo de cadastro é destinado a fábricas de embalagens sustentáveis, interessadas em parcerias que possam ampliar a visibilidade da fábrica e aumentar a demanda por seus produtos, especialmente em empresas que realizam grandes volumes de pedidos.",
                    "Além do interesse em educar o mercado sobre a importância da sustentabilidade e em fortalecer a marca da fábrica como líder em soluções ecológicas.",
                ]}
                imagemUrlPrincipal="/images/icons/como-funciona-3.png"
                imagemUrlSecundaria="/images/icons/como-funciona-3-1.png"
                corFundo="#5393f7"
                corTexto="#FFFFFF"
            />
        </div>
    );
}