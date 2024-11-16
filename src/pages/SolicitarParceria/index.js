import { useState } from 'react';
import Title from 'components/Title';
import Button from 'components/Button';

import './SolicitarParceria.css';
import { Link } from 'react-router-dom';

const SolicitarParceria = () => {
    // Dados fixos como exemplo
    const loja = {
        imagemUrl: "/images/lojas/burger-king.png",
        nome: "Burguer King",
        endereco: "Rua Exemplo, 123 - Centro",
        telefone: "(11) 98765-4321",
        email: "contato@lojaexemplo.com",
        descricao: "Uma loja especializada em produtos de qualidade.",
        publicoAlvo: "Adolescentes, Adultos",
        idade: "18 a 35 anos",
        regiao: "Sudeste, Sul",
        preferenciaParcerias: "Cultura e Lazer, Tecnologia",
    };

    const handleSolicitarParceria = () => {
        alert("Parceria solicitada com sucesso!");
    };

    return (
        <div className="solicitar-parceria-container">
            <Title titulo="Solicitar Parceria" />

            <div className="loja-detalhes">
                <img src={loja.imagemUrl} alt={loja.nome} className="loja-imagem" />
                <h2><strong>{loja.nome}</strong></h2>
                <p><strong>Endereço:</strong> {loja.endereco}</p>
                <p><strong>Telefone:</strong> {loja.telefone}</p>
                <p><strong>Email:</strong> {loja.email}</p>
                <p><strong>Descrição:</strong> {loja.descricao}</p>
                <p><strong>Público-Alvo:</strong> {loja.publicoAlvo}</p>
                <p><strong>Idade:</strong> {loja.idade}</p>
                <p><strong>Região:</strong> {loja.regiao}</p>
                <p><strong>Preferências de Parcerias:</strong> {loja.preferenciaParcerias}</p>
            </div>

            <Button
                label="Solicitar Parceria"
                onClick={handleSolicitarParceria}
            />

            <Link to="/parcerias">
                <button className="btn-voltar">Voltar para Parcerias</button>
            </Link>
        </div>
    );
};

export default SolicitarParceria;