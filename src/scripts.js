import clinicamedicabackground1 from "./assets/images/clinicamedica/inicio.png"
import clinicamedicabackground2 from "./assets/images/clinicamedica/paraQuem.png"


const scripts = {
    Curso: {
        Gasometria: {
            pagina1: {
                titulo: "Gasometria",
                corTitulo: "#d82121",
                subtitulo: "Descomplicada",
                descricao: "Você tranquilo e seguro para interpretar qualquer gasometria arterial",
                botao: "Quero dominar gasometria",
                corBotao: "#f74242"
            },
            pagina2: {
                descricao1: "A verdade é que, para grande maioria dos médicos, gasometria é um bicho de sete cabeças invencível. Envolve Nefrologia, Matemática, fórmulas 'decoradas', ventilação mecânica e cálculos para prescrição.",
                descricao2: "Mas não é fácil admitir isso, certo? Imagina só assumir para alguém que você não saber ler uma gasometria arterial.",
                descricao3: "São “só” diversos números e letras (diga-se de passagem, corriqueiramente com uma fonte bem pequena) impressos em um papel que, a grande maioria dos médicos, passa os olhos rapidamente e finge normalidade… Como eu posso não saber?",
                descricao4: "A compreensão da gasometria não é um conhecimento solto, reservado apenas para os privilegiados intelectualmente, ou para os raros colegas que, após compreenderem e decifrarem como se estuda gasometria, fazem questão de manter seu conhecimento guardado, sem a menor chance de compartilhá-lo."
            },
            pagina3: {
                titulo: "Conclusão",
                conteudo: "Parabéns, você concluiu o curso! Esperamos que tenha sido útil e informativo."
            }
        },
        Oftamologia: {
            intro: {
                titulo: "Oftamologia de Plantão",
                corTitulo: "#475DDB",
                subTitulo: "de plantão",
                botao: "Quero dominar oftamologia",
                descricao: "Você CONFIANTE para enfrentar os desafios nos plantões de oftalmologia",
                cores: [
                    {
                        corTitulo: "#475DDB", 
                        backgroundImageBotao: "linear-gradient(45deg, #7B8CE9, #576DE7, #7B8CE9, #576DE7)",
                        backgroundImageBotaoHover: "linear-gradient(45deg, #8E9CEB, #6C7FE9, #919EE7, #6E81E9)",
                        backgroundColorBotao: "#8593E7"
                    }
                ]
            },
            pontuacoes: {
                descricao1: "É fato que, para muitos médicos, oftalmologia em plantões é um desafio intimidante. Envolve uma série de aspectos complexos, desde diagnósticos diferenciais até tratamentos emergenciais, lidando com uma variedade de condições oculares que podem ser desconcertantes.",
                descricao2: "Acreditamos que pode ser difícil reconhecer isso. Imagina só ter que admitir para alguém que você não sabe diagnosticar uma condição ocular durante um plantão.",
                descricao3: "São 'apenas' uma série de sinais e sintomas oculares (muitas vezes, apresentados em letras miúdas) que, para a maioria dos médicos, são rapidamente examinados e tratados como algo comum... Seria tão difícil identificar algo tão básico?",
                descricao4: "O entendimento de questões oculares em plantões não é um conhecimento isolado, reservado apenas para os privilegiados intelectualmente, ou para os raros colegas que, após dominarem e interpretarem os casos mais específicos, optam por não compartilhar o conhecimento com mais ninguém."
            },
            sobreOCurso: {
                descricao1: "A interpretação de sinais oculares é como seguir um roteiro meticuloso e bem definido. Cada passo é crucial, e quando compreendido e estudado minuciosamente, dissipa todas as dúvidas que possam surgir ao diagnosticar uma ampla variedade de distúrbios oftalmológicos.É como se fosse um guia claro que nos conduz através das complexidades do mundo ocular, revelando os segredos por trás de cada condição.",
                descricao2: "Exploramos minuciosamente e nos empenhamos em estruturar e apresentar nosso método de raciocínio para análises oculares em plantões, focando especialmente no Oftamologia de Plantão.",
                imagensAulas: []
            },
            paraQuem: {
                titulo: "Oftalmologia de Plantão",
                topico1: "Para aqueles que se sentem completamente perdidos ao lidar com questões oftalmológicas durante plantões, sem saber por onde começar o diagnóstico em situações de emergência ocular;",
                topico2: "Para quem já possui conecimento acerca de questões básicas, mas se sentem confusos e perdidos ao lidar com distúrbios secundários, mesmo que mínimos, durante o processo de raciocínio."
            },
            aoFimDoCurso: {
                topicos: [
                    "Identificar e manejar eficazmente os diagnósticos diferenciais de dor ocular;", 
                    "Reconhecer os diagnósticos diferenciais e os critérios para tratamento imediato e encaminhamento.", 
                    "Analisar e identificar os diagnósticos diferenciais e intervenções terapêuticas oportunas.", 
                    "Diagnosticar e tratar de diferentes tipos de trauma ocular.", 
                    "Reconhecer as causas principais e identificar os diagnósticos diferenciais para orientar o tratamento adequado para lacrimejos."
                ]
            },
            pagina3: {
                titulo: "Conclusão",
                conteudo: "Parabéns, você concluiu o curso! Esperamos que tenha sido útil e informativo."
            }
        },
        Clinica: {
            intro: {
                titulo: "Clínica Médica",
                corTitulo: "#007eff",
                subTitulo: "de plantão",
                botao: "Quero dominar clínica médica",
                descricao: "Você MAIS PREPARADO para enfrentar os desafios nos plantões de clínica médica",
                backgroundImage: clinicamedicabackground1,
                cores: [
                    {
                        corTitulo: "#475DDB", 
                        backgroundImageBotao: "linear-gradient(45deg, #7B8CE9, #576DE7, #7B8CE9, #576DE7)",
                        backgroundImageBotaoHover: "linear-gradient(45deg, #8E9CEB, #6C7FE9, #919EE7, #6E81E9)",
                        backgroundColorBotao: "#8593E7"
                    }
                ]
            },
            pontuacoes: {
                descricao1: "Para muitos médicos que trabalham em plantões de clínica médica, lidar com emergências médicas representa um desafio significativo. Isso implica compreender uma variedade de condições e procedimentos específicos, desde a diferenciação de diagnósticos até a implementação de tratamentos, o que pode ser desconcertante devido à sua complexidade.",
                descricao2: "Cremos que pode ser difícil reconhecer isso. Imagina só ter que admitir para alguém que você não sabe diagnosticar uma condição específica durante um plantão.",
                descricao3: "Para muitos médicos em plantões de clínica médica, os sinais e sintomas apresentados pelos pacientes são considerados rotineiros e muitas vezes são rapidamente avaliados e tratados como algo trivial. No entanto, será que é realmente tão difícil identificar algo que parece tão básico?",
                descricao4: "O conhecimento sobre questões clínicas em plantões não é exclusivo de alguns poucos privilegiados intelectualmente ou de colegas que optam por não compartilhar o que aprenderam. É uma habilidade acessível a todos, que pode ser adquirida e compartilhada para benefício de todos os profissionais da área médica."
            },
            sobreOCurso: {
                descricao1: "A interpretação dos sinais clínicos durante plantões segue um processo meticuloso e bem definido. Cada passo é essencial e, ao ser compreendido e estudado minuciosamente, resolve todas as dúvidas que possam surgir ao diagnosticar uma ampla gama de condições médicas. É como seguir um guia claro que nos conduz pelas complexidades da prática médica, revelando os detalhes de cada situação.",
                descricao2: "Exploramos minuciosamente e nos dedicamos a estruturar e apresentar nosso método de raciocínio para análises médicas em plantões de clínica, com foco especial na resolução de questões clínicas.",
                imagensAulas: []
            },
            paraQuem: {
                titulo: "Clínica Médica de Plantão",
                topico1: "Para aqueles que se sentem completamente perdidos ao lidar com questões clínicas durante plantões, sem saber por onde começar o diagnóstico em situações de emergência;",
                topico2: "Para quem já possui conecimento acerca de questões básicas, mas se sentem confusos e perdidos ao lidar com distúrbios secundários, mesmo que mínimos, durante o processo de raciocínio.",
                backgroundImage: clinicamedicabackground2
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
                    "Estabilizar e tratar complicações agudas da cirrose hepática"
                ]
            },
            pagina3: {
                titulo: "Conclusão",
                conteudo: "Parabéns, você concluiu o curso! Esperamos que tenha sido útil e informativo."
            }
        }
    }
            }

export default scripts