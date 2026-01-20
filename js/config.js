// Configuration du portfolio
export const config = {
    name: "Antoine Berteloot",
    title: "Développeur Back-End",
    email: "antoine.berteloot@etu.unilim.fr",
    github: "https://github.com/AntoineB0",
    linkedin: "https://linkedin.com/in/antoine-berteloot",
    location: "Limoges, France"
};

// Données du portfolio
export const portfolioData = {
    about: `[[;#ff8903;]Antoine Berteloot - Développeur Back-End]

    Actuellement en BUT Informatique en alternance, je développe mes compétences en tant que Développeur Back-End
chez Lacaux Frères.
Au cours de mon parcours, j'ai effectué un stage à l'institut de recherche XLIM, où j'ai conçu une interface web
pour visualiser l'utilisation de la forge logicielle GitLab. J'ai également participé à un projet académique en partenariat
avec l'entreprise Legrand, en développant une application d'atelier selon les méthodologies AGILE, renforçant ainsi ma capacité à
travailler en équipe et à livrer des solutions adaptées aux besoins industriels.

📍 Localisation: ${config.location}
📧 Email: ${config.email}
🔗 GitHub: ${config.github}
💼 LinkedIn: ${config.linkedin}`,

    skills: {
        "Langages": ["Java", "Kotlin", "Python", "C++", "JavaScript", "PHP", "HTML/CSS", "SQL"],
        "Frontend": ["Vue.js", "JavaFX", "Chart.js", "Figma"],
        "Backend": ["Node.js", "Express"],
        "Base de données": ["SQL Server", "PostgreSQL", "MongoDB"],
        "Outils": ["Git", "GitLab", "Docker", "VS Code", "Postman", "Agile/Scrum"]
    },

    projects: [
        {
            name: "CrabKV",
            description: "CrabKv est un moteur clé-valeur Rust léger inspiré de LevelDB. mise en cache, un TTL et un interface TCP.",
            tech: ["Rust", "TCP", "Key-Value Store"],
            link: "https://github.com/AntoineB0/CrabKV"
        },
        {
            name: "RsHash",
            description: "RsHash est une librairie de hachage écrite en Rust, utilisable depuis Python, qui fournit les algorithmes SHA-256 et SHA-512 selon la spécification FIPS 180-4.",
            tech: ["Rust", "Python", "Cryptography"],
            link: "https://github.com/AntoineB0/RsHash"
        },
        {
            name: "Projet - Visualisation GitLab XLIM",
            description: "Développement d'une interface web open source d'analyse statistique de l'utilisation de la forge logicielle GitLab du laboratoire XLIM.",
            tech: ["Python", "JavaScript", "Chart.js", "GitLab"]
        },
        {
            name: "Projet Universitaire - Application POC Legrand",
            description: "Conception d'une application d'atelier POC pour l'entreprise Legrand en méthode Agile.",
            tech: ["Vue.js", "Node.js", "SQL Server", "Figma"]
        },
        {
            name: "Jeu de Scrabble en Java",
            description: "Développement d'un jeu de Scrabble complet en Java avec interface graphique JavaFX.",
            tech: ["Java", "JavaFX"]
        },
        {
            name: "Simulation Réseau CHU",
            description: "Simulation d'un déploiement réseau avec configuration de pare-feux et routage.",
            tech: ["Katara", "Réseaux", "Sécurité"]
        },
        {
            name: "Portfolio Terminal",
            description: "Portfolio interactif en style terminal web.",
            tech: ["jQuery Terminal", "JavaScript", "CSS"]
        }
    ],

    experience: [
        {
            title: "Developpeur Full-Stack ",
            company: "Lacaux Frères",
            period: "2025-2026",
            description: "Développement full-stack de fonctionnalités web au sein de l’ERP interne de la Papeterie Cartonnerie Lacaux (React / Node.js). L’alternance s’inscrit dans un contexte de proximité forte avec les utilisateurs métiers, avec un recueil direct des besoins, l’analyse des processus existants et la traduction de ces demandes en applications et outils concrets."
        },
        {
            title: "Développeur Stagiaire",
            company: "Institut de Recherche XLIM",
            period: "2025 (12 semaines)",
            description: "Conception et développement d'une interface web d'analyse statistique de l'activité de la forge logicielle GitLab utilisée par 900+ dépôts du laboratoire. L'outil répondait au besoin critique de visualiser l'évolution des métriques (commits, projets, utilisateurs) pour optimiser l'accompagnement des chercheurs."
        }
    ],

    education: [
        {
            degree: "Bachelor Universitaire de Technologie (BUT) Informatique",
            school: "IUT de Limoges, France",
            year: "2023 - 2026"
        },
        {
            degree: "Diplôme Étudiant Entrepreneur (D2E)",
            school: "Université de Limoges, France",
            year: "2023 - 2024"
        },
        {
            degree: "Baccalauréat Général - Spécialités Mathématiques et NSI",
            school: "Lycée à Limoges, France",
            year: "2020 - 2023"
        }
    ]
};

// Soft Skills avec explications basées sur l'expérience
export const softSkillsData = [
    {
        name: "Initiative",
        description: "Durant mon stage et actuellement mon alternance chez Lacaux Frères, je propose régulièrement des améliorations aux processus existants et n'hésite pas à suggérer de nouvelles fonctionnalités qui pourraient bénéficier aux utilisateurs métiers."
    },
    {
        name: "Collaboration",
        description: "Durant le projet Legrand, j'ai collaboré efficacement avec mes pairs en méthode Agile, participant activement aux stand-ups, rétrospectives et code reviews. Mon expérience en alternance renforce quotidiennement ma capacité à communiquer avec des profils variés (développeurs, utilisateurs métiers, managers)."
    },
    {
        name: "Créativité",
        description: "Ma créativité transparaît dans ma façon d'aborder les problèmes techniques.Mes projets personnels comme CrabKV montrent ma volonté d'explorer de nouvelles technologies (Rust) et d'implémenter des solutions originales."
    },
    {
        name: "Adaptabilité",
        description: "Mon parcours témoigne d'une grande capacité d'adaptation : je jongle entre différentes technologies (Java, Python, Rust, JavaScript) et différents domaines (frontend, backend, infrastructure). Durant mon alternance, je m'adapte rapidement aux besoins changeants des utilisateurs et aux contraintes techniques de l'ERP."
    },
    {
        name: "Résilience",
        description: "Face aux défis techniques complexes, je fais preuve de persévérance. Que ce soit lors du développement de RsHash (intégration Rust/Python) ou de la résolution de bugs critiques en production chez Lacaux."
    },
    {
        name: "Analyse et Résolution de Problèmes",
        description: "Ma formation a aiguisé ma capacité d'analyse. Chez Lacaux , je collecte les besoins métiers, j'analyse les processus existants et je traduis ces informations en solutions techniques cohérentes. Cette approche méthodique me permet de décomposer des problèmes complexes en étapes réalisables."
    }
];

// ASCII Art pour le banner
export const banner = `
 ____               __       ___       ___                  
/\\  _\`\\            /\\ \\__  /'\___\\     /\\_ \\    __           
\\ \\ \\L\\ \\___   _ __\\ \\ ,_\\/\\ \\__/  ___\\//\\ \\  /\\_\\    ___   
 \\ \\ ,__/ __\`\\/\\\`'__\\ \\ \\/\\ \\ ,__\\/ __\`\\\\ \\ \\ \\/\\ \\  / __\`\\ 
  \\ \\ \\/\\ \\L\\ \\ \\ \\/ \\ \\ \\_\\ \\ \\_/\\ \\L\\ \\\\_\\ \\_\\ \\ \\/\\ \\L\\ \\
   \\ \\_\\ \\____/\\ \\_\\  \\ \\__\\\\ \\_\\\\ \\____//\\____\\\\ \\_\\ \\____/
    \\/_/\\/___/  \\/_/   \\/__/ \\/_/ \\/___/ \\/____/ \\/_/\\/___/ 

Bienvenue sur le portfolio d'Antoine Berteloot
Tapez 'help' pour voir les commandes disponibles.
`;

// CV formaté pour le terminal
export const cvData = `
[[b;#ffaa00;]╔════════════════════════════════════════════════════════════════════════════════════════════════╗]
[[b;#ffaa00;]║][[b;#ffffff;] Antoine Berteloot]
[[b;#ffaa00;]╟────────────────────────────────────────────────────────────────────────────────────────────────╢]
[[b;#ffaa00;]║][[;#cccccc;] 90 route des lieux dits, Chateaux l'éveque ][[;#ffaa00;]|][[;#cccccc;] antoine.berteloot@etu.unilim.fr][[;#ffaa00;]|][[;#cccccc;] 06 59 33 58 98]
[[b;#ffaa00;]║][[;#cccccc;] [[!;;;;https://github.com/AntoineB0]github.com/AntoineB0] ][[;#ffaa00;]|][[;#cccccc;] [[!;;;;https://www.linkedin.com/in/antoine-berteloot/]linkedin.com/in/antoine-berteloot]
[[b;#ffaa00;]╟────────────────────────────────────────────────────────────────────────────────────────────────╢]
[[b;#ffaa00;]║][[b;#ffaa00;] FORMATIONS]
[[b;#ffaa00;]║][[b;#00aaff;] Bachelor Universitaire de Technologie Informatique][[;#cccccc;] | Limoges, France | 2023-2026]
[[b;#ffaa00;]║][[;#cccccc;]  – Java, Kotlin, Python, C++, JS, PHP, HTML, CSS, JavaScript]
[[b;#ffaa00;]║][[;#cccccc;]  – Gestion de projets : AGILE, SCRUM]
[[b;#ffaa00;]║][[;#cccccc;]  – Analyse des besoins, conception d'applications]
[[b;#ffaa00;]║][[;#cccccc;]  – Projets collaboratifs, communication technique]
[[b;#ffaa00;]║][[b;#00aaff;] Diplôme Universitaire : Diplôme Etudiant Entrepreneur][[;#cccccc;] | Limoges, France | 2023-2024]
[[b;#ffaa00;]║][[;#cccccc;]  – Création et gestion d'entreprise, business plan]
[[b;#ffaa00;]║][[;#cccccc;]  – Gestion financière, marketing ]
[[b;#ffaa00;]║][[;#cccccc;]  – Innovation, gestion des risques, leadership]
[[b;#ffaa00;]║][[b;#00aaff;] Baccalauréat Général - Maths, NSI][[;#cccccc;] | Limoges, France | 2020-2023]
[[b;#ffaa00;]╟────────────────────────────────────────────────────────────────────────────────────────────────╢]
[[b;#ffaa00;]║][[b;#ffaa00;] EXPÉRIENCE PROFESSIONNELLE]
[[b;#ffaa00;]║][[b;#00aaff;] Lacaux Frères][[;#cccccc;] | Limoges, France | 2025-2026 (alternance)]
[[b;#ffaa00;]║][[;#cccccc;]  – Développement full-stack de fonctionnalités web au sein de l’ERP interne]
[[b;#ffaa00;]║][[;#cccccc;]  – React.js, Node.js, SQL server]
[[b;#ffaa00;]║][[b;#00aaff;] Laboratoire de recherche XLIM][[;#cccccc;] | Limoges, France | 12 semaines (stage)]
[[b;#ffaa00;]║][[;#cccccc;]  – Développement d'un code open source pour l'analyse de la forge GitLab]
[[b;#ffaa00;]║][[;#cccccc;]  – Python, JavaScript, Chart.js, GitLab]
[[b;#ffaa00;]╟────────────────────────────────────────────────────────────────────────────────────────────────╢]
[[b;#ffaa00;]║][[b;#ffaa00;] PROJET PERSONNEL ET ACADEMIQUE]
[[b;#ffaa00;]║][[;#cccccc;]  – CrabKV: Moteur clé-valeur Rust léger inspiré de LevelDB avec cache, TTL et interface TCP]
[[b;#ffaa00;]║][[;#cccccc;]  – RsHash: Librairie de hachage Rust (SHA-256, SHA-512) utilisable depuis Python]
[[b;#ffaa00;]║][[;#cccccc;]  – Application d'atelier POC (Legrand): JS, VueJS, Node.js, SQL Server, Figma, AGILE]
[[b;#ffaa00;]║][[;#cccccc;]  – Jeu de Scrabble en Java, JavaFX]
[[b;#ffaa00;]║][[;#cccccc;]  – Simulation réseau CHU, configuration pare-feu]
[[b;#ffaa00;]╟────────────────────────────────────────────────────────────────────────────────────────────────╢]
[[b;#ffaa00;]║][[b;#ffaa00;] COMPÉTENCES ET INTÉRÊTS]
[[b;#ffaa00;]║][[b;#00aaff;] Passions:][[;#cccccc;] Automobile (sportif/mécanique), horlogerie, randonnée]
[[b;#ffaa00;]║][[b;#00aaff;] Langues:][[;#cccccc;] Français (natif), Anglais (B2/C1), Espagnol (A2)]
[[b;#ffaa00;]║][[b;#00aaff;] Soft skills:][[;#cccccc;] Créativité, résilience, initiative, collaboration, adaptabilité]
[[b;#ffaa00;]╚════════════════════════════════════════════════════════════════════════════════════════════════╝]
`;

// Thèmes disponibles
export const themes = {
    matrix: { bg: '#0c0c0c', fg: '#00ff00', border: '#00ff00' },
    hacker: { bg: '#000000', fg: '#00ff00', border: '#00ff00' },
    ocean: { bg: '#001f3f', fg: '#7fdbff', border: '#7fdbff' },
    sunset: { bg: '#1a0a00', fg: '#ff6b35', border: '#ff6b35' },
    purple: { bg: '#1a0033', fg: '#cc00ff', border: '#cc00ff' },
    classic: { bg: '#000000', fg: '#ffffff', border: '#ffffff' }
};
