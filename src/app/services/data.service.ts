import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class DataService {
  public dsBiografia= `Giani Paganotti, natural de Pedra Azul - ES, formada em Administração e MBA em gestão,  esposa e mãe de 3. 
  Me tornei mãe integral há quase 6 anos e comecei com a técnica de fio de malha há 3 anos. Apesar de fazer crochê desde a infância, me apaixonei pela técnica com fio de malha e a possibilidade de confeccionar inúmeras peças diferentes. 
  Comecei com as aulas presenciais início de 2018 em Cachoeiro de Itapemirim - ES e desde então tenho partilhado os conhecimentos que adquiri ao longo desse tempo que faço crochê, especificamente os desafios em trabalhar com fio de malha.`;
  public objLinks:any = {
    instagram: "https://www.instagram.com/feitoamaobygiani/",
    youtube: "https://www.youtube.com/channel/UC4ICiAldmC3u3K2Vys_yOGg",
    whatsapp: "https://api.whatsapp.com/send?phone=5528981148868&text=Oi, conheci seu trabalho pelo site.",
    curso: "https://www.hotmart.com/product/curso-croche-do-zero-com-fio-de-malha-fundamentos/I28918445B"
  };
  public arrTestimonials: Array<any> = [
    { collapsed: true, ownner: "Kamila Rodrigues", description: "Conheci o trabalho da Giani através de uma peça que ganhei e me apaixonei. Logo entrei em contato para fazer as aulas e fiquei fascinada pelo crochê com fio de malha. Giani tem excelente didática e muita paciência como professora. Tive algumas dificuldades e ela sempre me assessorou muito bem, esclarecendo todas as minhas dúvidas, tanto sobre fios e agulhas, quanto sobre pontos e arremates. Já faço cachepos, sousplat, tapetes, chaveiros, corações, flores e quero continuar aprendendo muito mais. Meus próximos objetivos são as clutchs e bolsas." },
    { collapsed: true, ownner: "Beatriz Passabom", description: "Aulas maravilhosas com um professora maravilhosa, atenciosa e muito, muito paciente. Obrigada por dividir todo seu conhecimento sem se importar de ensinar os \"macetes\" e técnicas. MARAVILHOSA é o resumo de tudo!" },
    { collapsed: true, ownner: "Raquel Prett", description:"Conheci a Gi através do Instagram e fui sua aluna desde as primeiras turmas presenciais. De lá pra cá já são mais de dois anos de muito aprendizado! A Gi é uma professora completa, repassa tudo que sabe com muito amor e dedicação. Não guarda para si segredos ou qualquer \"pulo do gato\", ao contrário, tudo que aprende ensina com toda paciência do mundo! Eu que amo artesanato, encontrei tudo que precisava quando quis aprender a crochetar! Hoje, tendo a oportunidade de ser aluna \"online\" vejo que a dedicação e comprometimento são os mesmos! As aulas gravadas são completas e muito detalhadas, sem contar com o suporte sempre disponível em caso de dúvidas. As peças da Gi têm o melhor acabamento que eu já vi e quem é aluna consegue alcançar resultados incríveis! A satisfação de aprender com quem ama ensinar, vale cada centavo! Gi, continue brilhando e iluminando o mundo! Vamos espalhar o que é bom!!" },
    { collapsed: true, ownner: "Viviane Romanelli", description:"Professora Giani é otima. Super paciente e atenciosa. To aprendendo muito com ela, sempre tirando nossas dúvidas. Só não aprende com ela quem não quer. Super recomendo.❤" },
    { collapsed: true, ownner: "Lais Nery", description:"Conheci o trabalho da Giani através de conhecidos há quase 4 anos e me encantei de primeira. As peças maravilhosamente bem trabalhadas, entregadas com muito carinho e capricho!  Porém, comecei também a admirar a pessoa que ela é há 1 ano, quando resolvi também me dedicar ao crochê para incrementar minha renda. Ela ofereceu o curso dela, onde mostraria desde o início da confecção até o acabamento. E foi aí que eu vi a pessoa incrível que ela é. Muito atenciosa em passar todo o conhecimento que tem e não somente durante o curso (também enchi o saco por whatsapp haha), sem se importar se sou uma \"concorrente\"ou não, pois como ela mesmo diz: \"Há espaço para todo mundo\'. Admiro muito a mulher que é, conciliando esse trabalho artesanal incrível com sua família. Que Deus continue abençoando e que cresce casa vez mais, pois é mais que merecedoras! ❤️❤️" },
    { collapsed: true, ownner: "Arelise Scaramussa", description:"Fiz uma aula com a Giani, amei!! Muito atenciosa, educada, tem muuuuita didadica, valeu muito a pena!! Eu não fiz mais aulas pois me mudei para Vitória.. Fazer croche é maravilhoso!! Obrigada Giani!!" },
    { collapsed: true, ownner: "Larissa Menon", description:"Fiz aula com a Giane e fiquei apaixonada, tem muita didática pra ensinar, atenciosa, prestativa, e o principal pra qualquer instrutor tem muita paciência em ensinar, explica quantas vezes for necessário pra a compreensão do aluno!! Ela é maravilhosa!!! Super indico!!❤❤👏👏🙏😘😘"},
    { collapsed: true, ownner: "Cátia Dalfior", description:"Giani é uma excelente instrutora! Ela é calma e transmite segurança para as alunas. Muito atenciosa! ♥️ Super recomendo ❤💐 " },
    { collapsed: true, ownner: "Priscila Cezanhoch", description:"Comprei as aulas da mochila e bolsa redonda. Fiquei admirada com a maravilhosa explicação e a quantidade de dicas durante as aulas.. conseguir fazer as peças sem dificuldades e ficaram lindas!!! Obrigada por compartilhar esse talento!" },
  ];
  public arrCourses: Array<any> = [
    {
      id: "aula-1",
      collapsed: true, 
      img: "/assets/fmbg/cursos/1.jpeg",
      title: "Crochê com fio de malha - Aula 1",
      description: `O curso aborda de forma bem detalhada como iniciar os trabalhos com
    fio de malha para quem nunca nem pegou numa agulha de crochê. Além
    de ensinar os pontos de crochê, o curso também tem a parte teórica
    das particularidades do fio de malha e seus desafios.`,
      price: "por apenas R$ 29",
      link: "https://www.hotmart.com/product/curso-croche-do-zero-com-fio-de-malha-fundamentos/I28918445B"
    },
    {
      id: "aula-2",
      collapsed: true, 
      img: "/assets/fmbg/cursos/4.jpeg",
      title: "Crochê com fio de malha - Aula 2",
      description: `O curso aborda os fundamentos de trabalhos redondos (círculo mágico) através da produção do cachepô redondo. Um modelo para iniciantes e outro modelo mais avançado.
      aborda troca de cor e dois bônus: base para cestos retangulares e como fazer chaveiro de coração, ideal para lembrancinhas.`,
      price: "por apenas R$ 19",
      link: "https://www.hotmart.com/product/croche-com-fio-de-malha-aula-2-cachepo/Y30927359F"
    },
    
    {
      id: "bolsa-redonda",
      collapsed: true, 
      img: "/assets/fmbg/cursos/2.jpg",
      title: "Bolsa Redonda",
      description: `Vídeo aula em 5 partes do passo a passo da confecção da bolsa
      redonda de crochê com fio de malha. Existem muitos vídeos que
      ensinam a fazer essa bolsa, nessa vídeo aula eu explico a técnica
      que eu uso nas minhas bolsas. A vantagem é que está bem detalhado e
      dividido em partes para facilitar a produção. Também explico como
      faço para trocar de cor para confecção da bolsa colorida.`,
      price: "por apenas R$ 29",
      link: "https://www.hotmart.com/product/video-aula-bolsa-redonda-de-croche/R21044535I"
      
    },
    {
      id: "mochila",
      collapsed: true, 
      img: "/assets/fmbg/cursos/3.jpg",
      title: "Mochila by Giani",
      description: `Esse modelo foi criado por mim e tive inspiração de mochilas das
      artesãs russas. Ela fez muito sucesso na minha página, foi uma peça
      que atraiu e ainda atrai muitas encomendas.`,
      price: "por apenas R$ 49",
      link: "https://www.hotmart.com/product/video-aula-mochila-by-giani-croche-com-fio-de-malha/D16232628O"
    }
  ];

  constructor() {}
}
