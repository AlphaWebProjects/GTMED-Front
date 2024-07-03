import clinicamedicabackground1 from "./assets/images/clinicamedica/inicioClinica.png";
import clinicamedicabackground2 from "./assets/images/clinicamedica/paraQuemClinica.png";
import backgroundAoFimDoCursoClinica from "./assets/images/clinicamedica/backgroundAoFimDoCursoClinica.png";
import backgroundParaQuemClinicaMobile from "./assets/images/clinicamedica/paraQuemClinicaMobile.png";
import depoimento1clinica from "./assets/images/clinicamedica/depoimento1.png";

import inicioOftalmo from './assets/images/oftalmo/inicioOftalmo.png'
import inicioAnestesio from './assets/images/anestesio/inicioAnestesio.png'
import inicioCardio from './assets/images/cardio/inicioCardio.png'
import inicioDermato from './assets/images/dermato/inicioDermato.png'
import inicioInfecto from './assets/images/infectologia/inicioInfecto.png'
import inicioNeuro from './assets/images/neuro/inicioNeuro.png'
import inicioObstetro from './assets/images/obstetro/inicioObstetricia.png'
import inicioOrtopedia from './assets/images/ortopedia/inicioOrtopedia.png'
import inicioOrtorrino from './assets/images/ortorrino/inicioOrtorrino.png'
import inicioPediatria from './assets/images/pediatria/inicioPediatria.png'
import inicioPsiquiatria from './assets/images/psiquiatria/inicioPsiquiatria.png'
import inicioRadio from './assets/images/radiologia/inicioRadiologia.png'

import topicosClinica from './assets/images/clinicamedica/topicosClinica.png'

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
import cardDermato from './assets/images/dermato/cardDermato.jpg'

//infos do script

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
    { nome: 'dermato', background: cardDermato },
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
        backgroundImage: topicosClinica,
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
              details: "5 módulos"
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
    anestesio: {
      themeColor: '#166c24',
      intro: {
        titulo: "ANESTESIO",
        botao: "Quero dominar anestesio",
        descricao:
          "ANESTESIO",
        backgroundImage: inicioAnestesio,
      },
      paraQuem: {
        titulo: "Anestesio de Plantão",
        topicos: [
          "Para aqueles que se sentem completamente perdidos ao lidar com questões relacionadas à anestesiologia durante plantões, sem saber por onde começar o diagnóstico em situações de emergência;",
          "Para quem já possui conecimento acerca de questões básicas, mas se sentem confusos e perdidos ao lidar com distúrbios secundários, mesmo que mínimos, durante o processo de raciocínio.",
        ],
        backgroundImage: clinicamedicabackground2,
        backgroundImageMobile: backgroundParaQuemClinicaMobile,
      },
      aoFimDoCurso: {
        topicos: [
          "Identificar a anatomia da via aérea e as indicações de intubação orotraqueal em cenários de urgência/emergência.",
          "Organizar sistematicamente os materiais necessários para o manejo seguro da via aérea.",
          "Manejar eficazmente as medicações para intubação orotraqueal, incluindo indicações, contraindicações e dosagens adequadas.",
          "Aplicar técnicas de diluição e administração de drogas para intubação em pacientes pediátricos, com base em casos reais.",
          "Realizar a intubação orotraqueal com precisão, reconhecendo os principais erros e aplicando conhecimentos de casos clínicos e vídeos reais.",
          "Utilizar dispositivos de resgate em casos de via aérea difícil, abordando estratégias para situações em que a intubação inicial falha.",
          "Compreender os princípios básicos da ventilação mecânica para otimizar o manejo inicial do paciente intubado.",
          "Implementar protocolos de sedação após a intubação orotraqueal para prevenir complicações e garantir a segurança do paciente.",
          "Gerenciar drogas vasoativas em casos de instabilidade hemodinâmica pós-intubação, garantindo intervenções rápidas e eficazes.",
          "Analisar e discutir casos especiais de intubação orotraqueal, destacando detalhes práticos e aprendizados clínicos."
        ]
        ,
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
        title: "ANESTESIO",
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
    cardio: {
      themeColor: '#731818',
      intro: {
        titulo: "CARDIO",
        botao: "Quero dominar CARDIO",
        descricao:
          "CARDIO",
        backgroundImage: inicioCardio,
      },
      paraQuem: {
        titulo: "Cardio de Plantão",
        topicos: [
          "Para aqueles que se sentem completamente perdidos ao lidar com questões relacionadas à cardiologia durante plantões, sem saber por onde começar o diagnóstico em situações de emergência;",
          "Para quem já possui conecimento acerca de questões básicas, mas se sentem confusos e perdidos ao lidar com distúrbios secundários, mesmo que mínimos, durante o processo de raciocínio.",
        ],
        backgroundImage: clinicamedicabackground2,
        backgroundImageMobile: backgroundParaQuemClinicaMobile,
      },
      aoFimDoCurso: {
        topicos: [
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry;",
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry;",,
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry;",,
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry;",,
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry;",
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
        title: "CARDIO",
        subTitulo: "DE PLANTÃO",
        price: "1247,00",
        discountedprice: "R$59,58",
        fullpricediscount: "R$597",
        buttontext: "DOMINAR CARDIO",
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
    dermato: {
      themeColor: '#194771',
      intro: {
        titulo: "Dermato",
        botao: "Quero dominar Dermato",
        descricao:
          "OFTALMO",
        backgroundImage: inicioDermato,
      },
      paraQuem: {
        titulo: "Dermato de Plantão",
        topicos: [
          "Para aqueles que se sentem completamente perdidos ao lidar com questões relacionadas à dermatologia durante plantões, sem saber por onde começar o diagnóstico em situações de emergência;",
          "Para quem já possui conecimento acerca de questões básicas, mas se sentem confusos e perdidos ao lidar com distúrbios secundários, mesmo que mínimos, durante o processo de raciocínio.",
        ],
        backgroundImage: clinicamedicabackground2,
        backgroundImageMobile: backgroundParaQuemClinicaMobile,
      },
      aoFimDoCurso: {
        topicos: [
          "Reconhecer e manejar reações alérgicas a medicamentos, incluindo urticárias, anafilaxia, eczema, Síndrome de Steven Johnson e NET, identificando quando internar e os medicamentos mais comuns que causam farmacodermia.",
          "Diagnosticar e tratar infecções virais da pele, como herpes zoster, HPV e molusco contagioso, reconhecendo seus diagnósticos diferenciais.",
          "Identificar e tratar infecções bacterianas e fúngicas superficiais, como impetigo, tineas, candidíase e pitiríase.",
          "Diagnosticar e tratar infecções parasitárias da pele, incluindo escabiose, sarna, tungíase, miíase e larva migrans.",
          "Reconhecer lesões de pele preocupantes, determinar quando encaminhar com urgência e quando tranquilizar o paciente, focando no câncer de pele."
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
        title: "DERMATO",
        subTitulo: "DE PLANTÃO",
        price: "1247,00",
        discountedprice: "R$59,58",
        fullpricediscount: "R$597",
        buttontext: "DOMINAR DERMATO",
        topics: [
          {
              details: "5 módulos"
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
    infecto: {
      themeColor: '#731932',
      intro: {
        titulo: "INFECTO",
        botao: "Quero dominar infecto",
        descricao:
          "INFECTO",
        backgroundImage: inicioInfecto,
      },
      paraQuem: {
        titulo: "Oftalmo de Plantão",
        topicos: [
          "Para aqueles que se sentem completamente perdidos ao lidar com questões infectológicas durante plantões, sem saber por onde começar o diagnóstico em situações de emergência;",
          "Para quem já possui conecimento acerca de questões básicas, mas se sentem confusos e perdidos ao lidar com distúrbios secundários, mesmo que mínimos, durante o processo de raciocínio.",
        ],
        backgroundImage: clinicamedicabackground2,
        backgroundImageMobile: backgroundParaQuemClinicaMobile,
      },
      aoFimDoCurso: {
        topicos: [
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry;",
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry;",,
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry;",,
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry;",,
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry;",
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
        title: "INFECTOLOGIA",
        subTitulo: "DE PLANTÃO",
        price: "1247,00",
        discountedprice: "R$59,58",
        fullpricediscount: "R$597",
        buttontext: "DOMINAR INFECTOLOGIA",
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
    neuro: {
      themeColor: '#1d166c',
      intro: {
        titulo: "NEUROLOGIA",
        botao: "Quero dominar neuro",
        descricao:
          "NEURO",
        backgroundImage: inicioNeuro,
      },
      paraQuem: {
        titulo: "Neuro de Plantão",
        topicos: [
          "Para aqueles que se sentem completamente perdidos ao lidar com questões neurológicas durante plantões, sem saber por onde começar o diagnóstico em situações de emergência;",
          "Para quem já possui conecimento acerca de questões básicas, mas se sentem confusos e perdidos ao lidar com distúrbios secundários, mesmo que mínimos, durante o processo de raciocínio.",
        ],
        backgroundImage: clinicamedicabackground2,
        backgroundImageMobile: backgroundParaQuemClinicaMobile,
      },
      aoFimDoCurso: {
        topicos: [
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry;",
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry;",,
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry;",,
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry;",,
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry;",
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
        title: "NEURO",
        subTitulo: "DE PLANTÃO",
        price: "1247,00",
        discountedprice: "R$59,58",
        fullpricediscount: "R$597",
        buttontext: "DOMINAR NEURO",
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
    obstetro: {
      themeColor: '#753719',
      intro: {
        titulo: "OBSTETRO",
        botao: "Quero dominar OBSTETRO",
        descricao:
          "OBSTETRO",
        backgroundImage: inicioObstetro,
      },
      paraQuem: {
        titulo: "Obstetro de Plantão",
        topicos: [
          "Para aqueles que se sentem completamente perdidos ao lidar com questões relacionadas à obstetricia durante plantões, sem saber por onde começar o diagnóstico em situações de emergência;",
          "Para quem já possui conecimento acerca de questões básicas, mas se sentem confusos e perdidos ao lidar com distúrbios secundários, mesmo que mínimos, durante o processo de raciocínio.",
        ],
        backgroundImage: clinicamedicabackground2,
        backgroundImageMobile: backgroundParaQuemClinicaMobile,
      },
      aoFimDoCurso: {
        topicos: [
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry;",
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry;",
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry;",
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry;",
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry;",
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
        title: "OBSTETRO",
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
    ortopedia: {
      themeColor: '#6c2616',
      intro: {
        titulo: "ORTOPEDIA",
        botao: "Quero dominar ortopedia",
        descricao:
          "ORTOPEDIA",
        backgroundImage: inicioOrtopedia,
      },
      paraQuem: {
        titulo: "Ortopedia de Plantão",
        topicos: [
          "Para aqueles que se sentem completamente perdidos ao lidar com questões ortopédicas durante plantões, sem saber por onde começar o diagnóstico em situações de emergência;",
          "Para quem já possui conecimento acerca de questões básicas, mas se sentem confusos e perdidos ao lidar com distúrbios secundários, mesmo que mínimos, durante o processo de raciocínio.",
        ],
        backgroundImage: clinicamedicabackground2,
        backgroundImageMobile: backgroundParaQuemClinicaMobile,
      },
      aoFimDoCurso: {
        topicos: [
          "Conduzir um paciente ortopédico desde a anamnese inicial até o encaminhamento para casa ou serviço especializado.",
          "Avaliar radiografias com ênfase na importância de duas incidências e facilitar a avaliação de fraturas em pacientes com fise aberta.",
          "Discutir os tipos de imobilizações, suas confecções e indicações específicas para cada tipo.",
          "Realizar a propedêutica de avaliação e condução de uma fratura fechada desde a prescrição até o encaminhamento ao ortopedista.",
          "Conduzir com segurança um caso de artrite séptica, para encaminhamento objetivo e minimização de erros.",
          "Manejar suspeitas de síndrome compartimental, evitando erros comuns no pronto-socorro.",
          "Abordar o manejo ortopédico no politrauma, incluindo uso do colar cervical, cinta pélvica e avaliação de lesões periféricas.",
          "Realizar a abordagem completa de fraturas expostas de forma sucinta e direta.",
          "Conduzir casos de trauma raquimedular (TRM) com foco na importância de um exame físico bem feito e detalhado.",
          "Conduzir casos de ferimento corto contuso em diversos cenários, desde feridas no subcutâneo até feridas com sangramento arterial importante."
        ]
        ,
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
        title: "ORTOPEDIA",
        subTitulo: "DE PLANTÃO",
        price: "1247,00",
        discountedprice: "R$59,58",
        fullpricediscount: "R$597",
        buttontext: "DOMINAR ORTOPEDIA",
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
    ortorrino: {
      themeColor: '#6c6616',
      intro: {
        titulo: "ORTORRINO",
        botao: "Quero dominar ortorrino",
        descricao:
          "ORTORRINO",
        backgroundImage: inicioOrtorrino,
      },
      paraQuem: {
        titulo: "Ortorrino de Plantão",
        topicos: [
          "Para aqueles que se sentem completamente perdidos ao lidar com questões relacionadas à ortorrinolaringologia durante plantões, sem saber por onde começar o diagnóstico em situações de emergência;",
          "Para quem já possui conecimento acerca de questões básicas, mas se sentem confusos e perdidos ao lidar com distúrbios secundários, mesmo que mínimos, durante o processo de raciocínio.",
        ],
        backgroundImage: clinicamedicabackground2,
        backgroundImageMobile: backgroundParaQuemClinicaMobile,
      },
      aoFimDoCurso: {
        topicos: [
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry;",
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry;",
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry;",
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry;",
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry;",
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
        title: "ORTORRINO",
        subTitulo: "DE PLANTÃO",
        price: "1247,00",
        discountedprice: "R$59,58",
        fullpricediscount: "R$597",
        buttontext: "DOMINAR ORTORRINO",
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
    psiquiatria: {
      themeColor: '#1a7a63',
      intro: {
        titulo: "PSIQUIATRIA",
        botao: "Quero dominar psiquiatria",
        descricao:
          "PSIQUIATRIA",
        backgroundImage: inicioPsiquiatria,
      },
      paraQuem: {
        titulo: "Psiquiatra de Plantão",
        topicos: [
          "Para aqueles que se sentem completamente perdidos ao lidar com questões psiquiátricas durante plantões, sem saber por onde começar o diagnóstico em situações de emergência;",
          "Para quem já possui conecimento acerca de questões básicas, mas se sentem confusos e perdidos ao lidar com distúrbios secundários, mesmo que mínimos, durante o processo de raciocínio.",
        ],
        backgroundImage: clinicamedicabackground2,
        backgroundImageMobile: backgroundParaQuemClinicaMobile,
      },
      aoFimDoCurso: {
        topicos: [
          "Discutir o conceito e as etapas da abordagem de um paciente com agitação psicomotora, focando no manejo verbal e contenção física.",
          "Manejar farmacologicamente o paciente agitado, discutindo opções de medicação, combinações medicamentosas e cuidados a serem tomados.",
          "Realizar a avaliação sistematizada de um paciente com ideação suicida, desmistificando o passo-a-passo no pronto atendimento.",
          "Discutir o conceito de crise de ansiedade, explicando a definição correta, diagnóstico diferencial e tratamento desta condição.",
          "Compreender as manifestações clínicas, fatores de risco e proteção, escalas e tratamentos farmacológicos e não-farmacológicos do delirium.",
          "Definir e classificar o transtorno por uso de substância, abordando sintomas e condutas para intoxicação e abstinência das principais substâncias.",
          "Avaliar e manejar a síndrome de abstinência alcoólica, considerando suas particularidades.",
          "Identificar efeitos colaterais de antipsicóticos e manejar complicações no plantão, focando no que o plantonista precisa saber.",
          "Reconhecer efeitos colaterais de estabilizadores de humor e antidepressivos, abordando o manejo de complicações relevantes para o plantonista.",
          "Esclarecer aspectos de internações psiquiátricas, incluindo internação voluntária, involuntária e compulsória, com exemplos de casos clínicos."
        ]
        ,
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
        title: "PSIQUIATRA",
        subTitulo: "DE PLANTÃO",
        price: "1247,00",
        discountedprice: "R$59,58",
        fullpricediscount: "R$597",
        buttontext: "DOMINAR PSIQUIATRIA",
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
    radiologia: {
      themeColor: '#4f1976',
      intro: {
        titulo: "RADIOLOGIA",
        botao: "Quero dominar radiologia",
        descricao:
          "RADIOLOGIA",
        backgroundImage: inicioRadio,
      },
      paraQuem: {
        titulo: "Radiologia de Plantão",
        topicos: [
          "Para aqueles que se sentem completamente perdidos ao lidar com questões relacionadas à radiologia durante plantões, sem saber por onde começar o diagnóstico em situações de emergência;",
          "Para quem já possui conecimento acerca de questões básicas, mas se sentem confusos e perdidos ao lidar com distúrbios secundários, mesmo que mínimos, durante o processo de raciocínio.",
        ],
        backgroundImage: clinicamedicabackground2,
        backgroundImageMobile: backgroundParaQuemClinicaMobile,
      },
      aoFimDoCurso: {
        topicos: [
          "Identificar os achados de imagem em traumas de crânio, face e coluna, incluindo hematomas extra-axiais e fraturas.",
          "Reconhecer os achados de imagem em traumas de tórax e abdome, como pneumotórax, hemotórax, hemoperitônio e lesões traumáticas de vísceras sólidas.",
          "Analisar os achados de imagem em AVCs isquêmicos e hemorrágicos, além de tromboses venosas centrais e suas complicações.",
          "Identificar os aspectos de imagem em neuroinfecções, incluindo meningites, encefalites e neurocisticercose.",
          "Reconhecer as indicações e achados de imagem em infecções da cabeça e pescoço, como sinusites, celulites peri-orbitárias, amigdalites e otomastoidites.",
          "Compreender os diferentes aspectos radiológicos das pneumonias, insuficiência cardíaca e tromboembolismo pulmonar (TEP).",
          "Identificar os achados de imagem em condições inflamatórias abdominais, como pielonefrites, colecistites, pancreatites, diverticulites e apendicites.",
          "Analisar as condições hemorrágicas e isquêmicas abdominais, incluindo gravidez ectópica, cisto ovariano roto, aneurisma de aorta roto, isquemia mesentérica e dissecção de aorta.",
          "Distinguir os achados de imagem entre obstrução alta e obstrução baixa no abdome agudo obstrutivo.",
          "Reconhecer as diferentes apresentações de imagem do pneumoperitônio e retropneumoperitônio no abdome agudo perfurativo."
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
        title: "RADIOLOGIA",
        subTitulo: "DE PLANTÃO",
        price: "1247,00",
        discountedprice: "R$59,58",
        fullpricediscount: "R$597",
        buttontext: "DOMINAR RADIOLOGIA",
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
