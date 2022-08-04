export interface Skill {
    text: string
    icon: string
    skill: string
    description: string
    level: number
}
export const skills: Skill[] = [
    {
        text: 'h',
        icon: 'html5',
        skill: 'HTML 5',
        description:
            'Maquetación eficiente empleando buenas prácticas, respetando el uso semántico de HTML para cumplir con lineamientos en la SEOptimización.',
        level: 7,
    },
    {
        text: 'c',
        icon: 'css3',
        skill: 'CSS 3',
        description:
            'Creando estilos que cumplen con las especificaciones de los mockups para la web, excelente uso de flex-box y grid.',
        level: 7,
    },
    {
        text: 'j',
        icon: 'javascript',
        skill: 'Javascript',
        description:
            'Profundos conocimientos en el lenguaje de programación que se encuentra dentro de los más usados en el mundo, haciendo uso de ECMAScript 6.',
        level: 6,
    },
    {
        text: 'r',
        icon: 'react',
        skill: 'React JS',
        description:
            'Desarrollo componetizado a través de React JS para tener un proyecto más organizado.',
        level: 6,
    },
    {
        text: 'n',
        icon: 'next',
        skill: 'Next JS',
        description:
            'Framework de React que nos facilita el Render Side Rendering logrando mejor compatibilidad con el SEO.',
        level: 6,
    },
    {
        text: 'g',
        icon: 'git',
        skill: 'Git',
        description:
            'Manejo de proyectos en controladores de versiones facilitando el mantenimiento y organización de los proyectos.',
        level: 6,
    },
    {
        text: 's',
        icon: 'sass',
        skill: 'Sass',
        description:
            'El uso de preprocesadores para reducir el tiempo en el mantenimiento del CSS además de proporcionarnos la ventaja de utilizar variables y funciones.',
        level: 5,
    },
    {
        text: 'b',
        icon: 'bootstrap',
        skill: 'Bootrstrap',
        description:
            'Manejo de uno de los frameworks de CSS más usados en el mundo con su sistema de grillas y componentes',
        level: 5,
    },
    {
        text: 't',
        icon: 'tailwind',
        skill: 'Tailwind',
        description:
            'Mi Framework de CSS favorito en proyectos con React por su versatilidad de estilizar el proyecto a través de clases que pueden ser completamente personalizadas.',
        level: 6,
    },
    {
        text: 'm',
        icon: 'materialize',
        skill: 'Materialize',
        description:
            'Framework de CSS que permite el uso de diversos componentes, facilitando la maquetación y manejo de estilos.',
        level: 4,
    },
    {
        text: 'f',
        icon: 'figma',
        skill: 'Figma',
        description:
            'Poderosa herramienta para el desarrollo de interfaces y manejo de prototipado, facilitando el desarrollo y maquetado de una web.',
        level: 6,
    },
    {
        text: 'w',
        icon: 'wordpress',
        skill: 'Wordpress',
        description:
            'CMS más usado que facilita el desarrollo y mantenimiento de páginas web, gracias a su plataforma intuitiva.',
        level: 5,
    },
    {
        text: 'a',
        icon: 'illustrator',
        skill: 'Adobe Illustrator',
        description:
            'Poderosa herramienta para el diseño de gráficas vectorizadas.',
        level: 4,
    },
    {
        text: 'p',
        icon: 'photoshop',
        skill: 'Adobe Photoshop',
        description:
            'Excelente herramienta para la edición de fotos en alto nivel.',
        level: 3,
    },
]
