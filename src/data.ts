const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export const navLinks = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Certificados', href: '#certificados' },
  { label: 'Contato', href: '#contato' },
];

export const heroText =
  'Construo soluções práticas com Python, Java, C++, machine learning e bancos de dados relacionais.';

export const about = {
  subtitle: 'Perfil técnico com olhar de produto',
  paragraphs: [
    'Sou Patrick, desenvolvedor interessado em criar sistemas que simplificam rotinas, organizam dados e entregam uma experiência agradável para quem usa. Gosto de unir lógica, automação e interfaces bem resolvidas para tirar ideias do papel.',
    'Tenho base em Python, desenvolvimento web, Java, C++, machine learning e bancos relacionais, além de inglês avançado para estudar documentação, acompanhar conteúdos técnicos e colaborar em contextos internacionais.',
  ],
};

export const skills = [
  { name: 'Python', description: 'Scripts, automações, análise de dados e lógica de aplicações.' },
  { name: 'Desenvolvimento web', description: 'Interfaces responsivas, páginas institucionais e aplicações para navegador.' },
  { name: 'Automação', description: 'Fluxos que reduzem tarefas repetitivas e tornam processos mais eficientes.' },
  { name: 'C++', description: 'Fundamentos sólidos de programação, desempenho e estrutura de dados.' },
  { name: 'Machine learning', description: 'Modelos, classificação, recomendação e experimentos com dados.' },
  { name: 'Bancos relacionais', description: 'SQL, modelagem, consultas e organização consistente de informações.' },
  { name: 'ChatBots', description: 'ChatBots para atendimento automatizado e interação com usuários.' },
  { name: 'Inglês avançado', description: 'Leitura técnica, comunicação profissional e aprendizado por documentação.' },
];

export type Project = {
  tag: string;
  name: string;
  description: string;
  image: string;
  alt: string;
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    tag: 'Chatbot',
    name: 'Chatbot para WhatsApp',
    description: 'Chatbot para WhatsApp que automatiza atendimentos e pode ser utilizado por qualquer pessoa ou empresa.',
    image: asset('Projetos/ChatBot.jpg'),
    alt: 'Prévia visual do chatbot para WhatsApp',
    links: [],
  },
  {
    tag: 'Automacao',
    name: 'Automação Estágio',
    description: 'Script Tampermonkey em JavaScript que captura dados de atendimentos em um sistema web e preenche automaticamente um formulário de ocorrencia em outro portal.',
    image: asset('Projetos/Automacao.jpg'),
    alt: 'Previa visual do projeto Automacao Estagio',
    links: [{ label: 'Ver no GitHub', href: 'https://github.com/patrickvca/AutomacaoEstagio' }],
  },
  {
    tag: 'Desenvolvimento web',
    name: 'Site para psicóloga',
    description: 'Site usando HTML, CSS E JavaScript para uma psicóloga com links para redes sociais e faqs',
    image: asset('Projetos/SitePsicologia.jpg'),
    alt: 'Previa visual do projeto Site Psicologia',
    links: [
      { label: 'Ir ao site', href: 'https://psithaisecristinne.com.br' },
      { label: 'Ver no GitHub', href: 'https://github.com/patrickvca/SitePsicologia' },
    ],
  },
  {
    tag: 'Produtividade',
    name: 'Rotina Pessoal',
    description: 'Aplicação para organizar hábitos, atividades e prioridades do dia a dia com uma experiência direta e amigável.',
    image: asset('Projetos/RotinaPessoal.jpg'),
    alt: 'Previa visual do projeto Rotina Pessoal',
    links: [{ label: 'Ver no GitHub', href: 'https://github.com/patrickvca/app-RotinaPessoal' }],
  },
  {
    tag: 'Dados',
    name: 'App Finanças',
    description: 'Aplicação para controle financeiro pessoal, com organização de dados e leitura clara de entradas e despesas.',
    image: asset('Projetos/AppFinancas.jpg'),
    alt: 'Previa visual do projeto App Financas',
    links: [{ label: 'Ver no GitHub', href: 'https://github.com/patrickvca/app-PlanejamentoFinanceiro' }],
  },
  {
    tag: 'Web',
    name: 'Site Pizzaria',
    description: 'Site para delivery de pizzaria, com apresentação de produtos, vinculação a banco de dados local e processo de pedido simplificado.',
    image: asset('Projetos/SitePizzaria.jpg'),
    alt: 'Previa visual do projeto Site Pizzaria',
    links: [{ label: 'Ver no GitHub', href: 'https://github.com/patrickvca/DeliveryPizzaria' }],
  },
];

export const certificateFilters = [
  { id: 'todos', label: 'Todos' },
  { id: 'programacao', label: 'Programação' },
  { id: 'dados', label: 'Dados' },
  { id: 'redes', label: 'Redes' },
  { id: 'idiomas', label: 'Idiomas' },
];

export const certificates = [
  { name: 'Python', category: 'programacao', image: asset('Certificados/CertificadoPython.jpg'), alt: 'Certificado de Python' },
  { name: 'Machine Learning', category: 'dados', image: asset('Certificados/CertificadoMachineLearning.jpg'), alt: 'Certificado de Machine Learning' },
  { name: 'Inglês avançado', category: 'idiomas', image: asset('Certificados/CertificadoIngles.jpg'), alt: 'Certificado de Inglês' },
  { name: 'C/C++', category: 'programacao', image: asset('Certificados/CertificadoC.jpg'), alt: 'Certificado de C' },
  { name: 'Chatbot', category: 'programacao', image: asset('Certificados/ChatBot.jpg'), alt: 'Certificado de Chatbot' },
  { name: 'Banco de dados', category: 'dados', image: asset('Certificados/CertificadoBD.jpg'), alt: 'Certificado de banco de dados' },
  { name: 'Redes de computadores', category: 'redes', image: asset('Certificados/CertificadoRedes.jpg'), alt: 'Certificado de redes de computadores' },
];

export const contact = {
  heading: 'Vamos conversar sobre tecnologia, dados e automação.',
  linkedin: 'https://www.linkedin.com/in/patrick-oliveirag/',
  github: 'https://github.com/patrickvca',
  email: 'mailto:paatrickolv19@gmail.com',
  whatsapp: 'https://wa.me/5577988559768',
};

export const images = {
  portrait: asset('images/caricatura.webp'),
  objects: {
    code: asset('images/objeto-codigo.webp'),
    terminal: asset('images/objeto-terminal.webp'),
    database: asset('images/objeto-banco.webp'),
    robot: asset('images/objeto-robo.svg'),
  },
};
