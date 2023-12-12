let pesquisas = {
    'dev': {
        'name': 'Murilo Gimenez',
        'class': '3DES'
    },
    'Tema' : '',
    'ChoiceUser':'',
    'search':{
        'quantidade': 2,
        'tops':[
            'Resumo',
            'Tipos',
        ]
    },
    'questSearch':[
        'prazer em conhecelo',
        ', A pesquisa foi dividida em',
        ', qual quer saber primeiro',
        ', como já dito A pesquisa foi dividida em'
    ],
    'choises':[
        ["Primeira Opção", "Resumo", "opção 1"],
        ["Segunda Opção", "tipos", "opção 2"]
    ],
    'pesquisa':{
        0:'Unit Testing, ou teste unitário, é uma prática fundamental no desenvolvimento de software. Um framework de teste unitário é uma ferramenta que oferece estrutura e suporte para a criação e execução desses testes de forma automatizada. Ele ajuda os desenvolvedores a garantir que partes específicas do código (unidades) funcionem conforme o esperado, identificando possíveis problemas o mais cedo possível no ciclo de desenvolvimento. A estrutura básica de um teste unitário envolve definir casos de teste que verificam se uma determinada funcionalidade ou método produz os resultados esperados. Isso ajuda a detectar regressões e a manter a confiança no código conforme ele evolui. A prática de testes unitários é essencial para o desenvolvimento ágil e a manutenção de software de alta qualidade. Ela não apenas ajuda a encontrar bugs precocemente, mas também facilita a refatoração do código sem introduzir problemas inadvertidos. Existem vários frameworks de teste unitário em diferentes linguagens de programação.',
        1:'1. JUnit (Java): Muito utilizado no ecossistema Java, o JUnit é uma estrutura de teste amplamente adotada para testes unitários e integração.                                                                                                                                                                                                                                                               2. pytest (Python): No mundo Python, o pytest é popular. Ele oferece simplicidade e flexibilidade, além de suportar testes unitários e de integração.                                                                                                                                                                                                                                                               3. NUnit (C#): Para desenvolvedores que utilizam C# no ambiente .NET, o NUnit é uma escolha comum para testes unitários.                                                                                                                                                                                                                                                               4. JUnit (JavaScript/Java): No contexto de JavaScript, há frameworks como o Jasmine para testes unitários e o Jest, que é usado em projetos baseados no React.'
    }
};

class IaRespost {
    constructor() {
        this.nameBOT = '';
        this.nameUser = '';
        this.topico = '';
    }
    Inicial(){
        pesquisas['Tema'] = this.topico;
        pesquisas['textInicial'] = 'Seja Bem Vindo, oh desconhecido, ao Sistema que mostrara a Pesquisa sobre a '+pesquisas['Tema']+', feito pelo '+pesquisas['dev']['name']+' da turma do '+pesquisas['dev']['class']+' agora aqui, para começarmos Qual é o seu nome?';
        this.topico = 'Nome';

        return pesquisas['textInicial'];
    }
    botResove(text){
        switch (this.topico){
            case 'Nome':
                let topsc = '';
                for(let i=0; i<pesquisas['search']['quantidade']; i++){
                    if(i==0){
                        topsc += pesquisas['search']['tops'][i];
                    }else if(i == (pesquisas['search']['quantidade'] - 1)){
                        topsc += ' e '+pesquisas['search']['tops'][i];
                    }else{
                        topsc += ', '+pesquisas['search']['tops'][i];
                    }
                }
                this.nameUser = this.nameUser == ''? text:this.nameUser;
                let textEnv = pesquisas['questSearch'][0]+' '+this.nameUser+pesquisas['questSearch'][1]+' '+pesquisas['search']['quantidade']+' tópicos '+topsc+'  '+pesquisas['questSearch'][2]+' '+this.nameUser+'?';
                this.topico = 'choice';
                return textEnv;
            
            case 'choice':            
                let minText = text.toLowerCase();
                if(pesquisas['choises'][0].some(pss => minText.includes(pss.toLowerCase()))){
                    this.topico = 'A';
                    return 'bom, então vamos falar sobre o '+pesquisas['search']['tops'][0]+' certo?';
                }else if(pesquisas['choises'][1].some(pss => minText.includes(pss.toLowerCase()))){
                    this.topico = 'B';
                    return 'bom, então vamos falar sobre o '+pesquisas['search']['tops'][1]+' certo?';
                }else{
                    this.topico = 'Nome';
                    return 'Responda algo comprenssivel, favor!'
                }

            case 'A':
                this.topico = 'choice2';
                return pesquisas['pesquisa'][0];

            case 'B':
                this.topico = 'choice2';
                return pesquisas['pesquisa'][1];
            
            case 'choice2':
                let topsc2 = '';
                for(let i=0; i<pesquisas['search']['quantidade']; i++){
                    if(i==0){
                        topsc += pesquisas['search']['tops'][i];
                    }else if(i == (pesquisas['search']['quantidade'] - 1)){
                        topsc += ' e '+pesquisas['search']['tops'][i];
                    }else{
                        topsc += ', '+pesquisas['search']['tops'][i];
                    }
                }
                this.nameUser = this.nameUser == ''? text:this.nameUser;
                let textEnv2 = this.nameUser+pesquisas['questSearch'][3]+' '+pesquisas['search']['quantidade']+' tópicos '+topsc2+'  '+pesquisas['questSearch'][2]+' dessa vez '+this.nameUser+'?';
                this.topico = 'choice';
                return textEnv2;
        };
    }
}