import FaqItem from "components/FaqItem";

import "./Faq.css";

export default function Faq() {
    const faqs = [
        {
            question: "Como posso cadastrar minha loja para parcerias?",
            answer: "Para cadastrar sua loja, acesse a página de cadastro e preencha as informações solicitadas."
        },
        {
            question: "Quais são os benefícios das parcerias?",
            answer: "As parcerias permitem aumentar a visibilidade da sua marca, reduzir custos de embalagem com opções sustentáveis e alcançar novos clientes por meio de anúncios personalizados."
        },
        {
            question: "Quais tipos de empresas podem se cadastrar?",
            answer: "Empresas que realizam entregas com frequência, fornecedores de embalagens sustentáveis e lojas que desejam ampliar sua base de clientes são bem-vindas para se cadastrar."
        },
        {
            question: "Existe algum custo para estabelecer uma parceria?",
            answer: "Atualmente, o cadastro e a parceria são gratuitos para todas as empresas participantes."
        },
        {
            question: "Como funciona a publicidade nas embalagens?",
            answer: "A publicidade é inserida nas embalagens sustentáveis de entrega, e ela pode incluir anúncios de pequenas empresas locais. Isso permite que sua marca seja conhecida por mais pessoas de forma ecológica e estratégica."
        },
        {
            question: "Posso personalizar o tipo de parceria?",
            answer: "Sim, trabalhamos com parcerias personalizadas para melhor atender às necessidades de cada empresa, permitindo escolhas sobre os tipos de embalagens, publicidade e até mesmo regiões de atuação."
        },
        {
            question: "Como as embalagens sustentáveis são fornecidas?",
            answer: "As embalagens sustentáveis são oferecidas por nossos parceiros especializados e podem ser adquiridas com condições especiais, dependendo da frequência e do volume de pedidos."
        },
        {
            question: "Minha empresa não faz entregas. Posso participar de outra forma?",
            answer: "Sim, empresas que não realizam entregas podem participar como anunciantes, ajudando a promover sua marca e apoiando o uso de embalagens ecológicas."
        },
    ];

    return (
        <div className="faq-page">
            <h1 className="faq-title">Perguntas Frequentes</h1>
            <p className="faq-subtitle">
                Aqui estão algumas respostas para dúvidas comuns sobre nossas parcerias e serviços.
            </p>
            <div className="faq-content">
                {faqs.map((faq, index) => (
                    <FaqItem key={index} question={faq.question} answer={faq.answer} />
                ))}
            </div>
        </div>
    );
}