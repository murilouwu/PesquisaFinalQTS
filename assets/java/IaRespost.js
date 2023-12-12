let pesquisas = {
    'dev': {
        'name': 'Murilo Gimenez',
        'class': '3DES'
    },
    'Tema' : '',
    'ChoiceUser':'',
    'search':{
        'quantidade':'4',
        'tops':[
            'a',
            'a',
            'a',
            'a',
            'a',
            'a',
        ]
    },
    'questSearch':[
        'prazer em conhecelo',
        ', A pesquisa foi dividida em',
        ', qual quer saber primeiro'
    ],
    'choises':[
        ["a"]
    ],
    'pesquisa':{
        'web':'',
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
                this.nameUser = this.nameUser == ''? text:this.nameUser;
                let textEnv = pesquisas['questSearch'][0]+' '+this.nameUser+pesquisas['questSearch'][1]+' '+pesquisas['search']['quantidade']+' tópicos '+pesquisas['questSearch'][2]+' '+this.nameUser+'?';
                this.topico = 'choice';
                return textEnv;
            
            case 'choice':            
                let minText = text.toLowerCase();
                return minText;

            case 'PesquisaA':
                return 'okA..';

            case 'PesquisaB':
                return 'okB..';
        };
    }
}