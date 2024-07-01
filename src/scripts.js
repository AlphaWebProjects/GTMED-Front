import clinicamedicabackground1 from "./assets/images/clinicamedica/inicioClinica.png";
import clinicamedicabackground2 from "./assets/images/clinicamedica/paraQuemClinica.png";
import logoClinica from "./assets/images/clinicamedica/logoClinica.png";
import inicioClinicaMobile from "./assets/images/clinicamedica/inicioClinicaMobile.png";
import backgroundAoFimDoCursoClinica from "./assets/images/clinicamedica/backgroundAoFimDoCursoClinica.png";
import backgroundParaQuemClinicaMobile from "./assets/images/clinicamedica/paraQuemClinicaMobile.png";
import depoimento1clinica from "./assets/images/clinicamedica/depoimento1.png";

import inicioOftalmo from './assets/images/oftalmo/inicioOftalmo.png'

import cardClinica from './assets/images/clinicamedica/cardClinica.jpg'
import cardOftalmo from './assets/images/oftalmo/cardOftalmo.jpg'
import cardOrtopedia from './assets/images/ortopedia/cardOrtopedia.jpg'
import cardPediatria from "./assets/images/pediatria/cardPediatria.jpg"
import cardRadiologia from './assets/images/radiologia/cardRadio.jpg'
import cardAnestesio from "./assets/images/anestesio/cardAnestesio.jpg"
import cardCardio from './assets/images/cardio/cardCardio.jpg'
import cardInfecto from './assets/images/infectologia/cardInfectologia.jpg'
import cardNeuro from './assets/images/neuro/cardNeuro.jpg'
import cardObstetro from './assets/images/obstetro/cardObstetricia.jpg'
import cardOrtorrino from './assets/images/ortorrino/cardOrtorrino.jpg'
import cardPsiquiatria from './assets/images/psiquiatria/cardPsiquiatria.jpg'

const scripts = {
  Cards: [
    { nome: 'anestesio', background: cardAnestesio},
    { nome: 'radiologia', background: cardRadiologia },
    { nome: 'cardio', background: cardCardio },
    { nome: 'ortopedia', background: cardOrtopedia },
    { nome: 'obstetro', background: cardObstetro },
    { nome: 'infecto', background: cardInfecto },
    //{ nome: 'radiologia', background: cardRadiologia },
    { nome: 'neuro', background: cardNeuro },
    { nome: 'oftalmo', background: cardOftalmo },
    { nome: 'clinica', background: cardClinica },
    { nome: 'psiquiatria', background: cardPsiquiatria },
    //{ nome: 'anestesio', background: cardAnestesio},
    { nome: 'ortorrino', background: cardOrtorrino },
    { nome: 'pediatria', background: cardPediatria },
  ],
  LandingPages: {
    clinica: {
      themeColor: '#166a6c',
      intro: {
        titulo: "Clínica Médica",
        botao: "Quero dominar clínica médica",
        descricao: "CLÍNICA MÉDICA",
        backgroundImage: clinicamedicabackground1,
      },
      paraQuem: {
        titulo: "Clínica Médica de Plantão",
        topicos: [
          "Para aqueles que se sentem completamente perdidos ao lidar com questões clínicas durante plantões, sem saber por onde começar o diagnóstico em situações de emergência;",
          "Para quem já possui conecimento acerca de questões básicas, mas se sentem confusos e perdidos ao lidar com distúrbios secundários, mesmo que mínimos, durante o processo de raciocínio.",
        ],
        backgroundImage: clinicamedicabackground2,
        backgroundImageMobile: backgroundParaQuemClinicaMobile,
      },
      aoFimDoCurso: {
        topicos: [
          "Identificar e manejar tipos de Lesão Renal Aguda, compreender seu diagnóstico e manejo inicial",
          "Reconhecer anafilaxia e usar Adrenalina como tratamento principal",
          "Diagnosticar e tratar rapidamente sepse, incluindo uso de Noradrenalina",
          "Utilizar ferramentas diagnósticas do TEP, investigar casos graves",
          "Integrar insuficiência adrenal aguda ao raciocínio diagnóstico",
          "Manejar Cetoacidose Diabética e outras urgências hiperglicêmicas",
          "Abordar broncoespasmo em diferentes contextos clínicos",
          "Manejar complicações agudas das neoplasias no Pronto Atendimento",
          "Estabilizar e tratar complicações agudas da cirrose hepática",
        ],
        backgroundImage: backgroundAoFimDoCursoClinica,
      },
      depoimentos: {
        cores: {
          corTitulo: "#166a6c",
        },
        prints: [
          depoimento1clinica,
          depoimento1clinica,
          depoimento1clinica,
          depoimento1clinica,
        ],
      },
      oferta: {
        title: "CLÍNICA MÉDICA",
        subTitulo: "DE PLANTÃO",
        price: "1247,00",
        discountedprice: "R$59,58",
        fullpricediscount: "R$597",
        buttontext: "DOMINAR CLÍNICA MÉDICA",
        topics: [
          {
              details: "10 módulos"
          },
          {
              details: "Casos clínicos reais"
          },
          {
              details: "Prescrição na Prática"
          },
          {
              details: `O “Como fazer“ da Especialidade`
          },
          {
              details: `Aulas Bônus`
          },
          {
              details: `1 ano de acesso`
          },
          {
              details: `Certificado de Conclusão do Módulo`
          },
      ]
      },
    },
    oftalmo: {
      themeColor: '#194771',
      intro: {
        titulo: "OFTALMO",
        botao: "Quero dominar oftalmo",
        descricao:
          "OFTALMO",
        backgroundImage: inicioOftalmo,
      },
      paraQuem: {
        titulo: "Oftalmo de Plantão",
        topicos: [
          "Para aqueles que se sentem completamente perdidos ao lidar com questões oftalmológicas durante plantões, sem saber por onde começar o diagnóstico em situações de emergência;",
          "Para quem já possui conecimento acerca de questões básicas, mas se sentem confusos e perdidos ao lidar com distúrbios secundários, mesmo que mínimos, durante o processo de raciocínio.",
        ],
        backgroundImage: clinicamedicabackground2,
        backgroundImageMobile: backgroundParaQuemClinicaMobile,
      },
      aoFimDoCurso: {
        topicos: [
          "Identificar e manejar eficazmente os diagnósticos diferenciais de dor ocular;",
          "Reconhecer os diagnósticos diferenciais e os critérios para tratamento imediato e encaminhamento.",
          "Analisar e identificar os diagnósticos diferenciais e intervenções terapêuticas oportunas.",
          "Diagnosticar e tratar de diferentes tipos de trauma ocular.",
          "Reconhecer as causas principais e identificar os diagnósticos diferenciais para orientar o tratamento adequado para lacrimejos."
        ],
        backgroundImage: backgroundAoFimDoCursoClinica,
      },
      depoimentos: {
        cores: {
          corTitulo: "#194771",
        },
        prints: [
          depoimento1clinica,
          depoimento1clinica,
          depoimento1clinica,
          depoimento1clinica,
        ],
      },
      oferta: {
        title: "OFTALMO",
        subTitulo: "DE PLANTÃO",
        price: "1247,00",
        discountedprice: "R$59,58",
        fullpricediscount: "R$597",
        buttontext: "DOMINAR OFTALMO",
        topics: [
          {
              details: "10 módulos"
          },
          {
              details: "Casos clínicos reais"
          },
          {
              details: "Prescrição na Prática"
          },
          {
              details: `O “Como fazer“ da Especialidade`
          },
          {
              details: `Aulas Bônus`
          },
          {
              details: `1 ano de acesso`
          },
          {
              details: `Certificado de Conclusão do Módulo`
          },
      ]
      },
    },
  },
};

export default scripts;
