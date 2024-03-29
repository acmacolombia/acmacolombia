import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    // {
    //   text: 'Homes',
    //   links: [
    //     {
    //       text: 'SaaS',
    //       href: getPermalink('/homes/saas'),
    //     },
    //     {
    //       text: 'Startup',
    //       href: getPermalink('/homes/startup'),
    //     },
    //     {
    //       text: 'Mobile App',
    //       href: getPermalink('/homes/mobile-app'),
    //     },
    //     {
    //       text: 'Personal',
    //       href: getPermalink('/homes/personal'),
    //     },
    //   ],
    // },
    {
      text: 'Sobre ACMA',
      href: getPermalink('/about'),
    },
    {
      text: 'Noticias',
      href: getPermalink('noticias', 'category'),
    },
    {
      text: 'Oportunidades',
      links: [
        {
          text: 'Proyectos',
          href: getPermalink('proyectos', 'category'),
        },
        {
          text: 'Eventos',
          href: getPermalink('eventos', 'category'),
        },
        {
          text: 'Becas',
          href: getPermalink('becas', 'category'),
        },
      ],
    },

    // {
    //   text: 'Landing',
    //   links: [
    //     {
    //       text: 'Lead Generation',
    //       href: getPermalink('/landing/lead-generation'),
    //     },
    //     {
    //       text: 'Long-form Sales',
    //       href: getPermalink('/landing/sales'),
    //     },
    //     {
    //       text: 'Click-Through',
    //       href: getPermalink('/landing/click-through'),
    //     },
    //     {
    //       text: 'Product Details (or Services)',
    //       href: getPermalink('/landing/product'),
    //     },
    //     {
    //       text: 'Coming Soon or Pre-Launch',
    //       href: getPermalink('/landing/pre-launch'),
    //     },
    //     {
    //       text: 'Subscription',
    //       href: getPermalink('/landing/subscription'),
    //     },
    //   ],
    // },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
        // {
        //   text: 'Article',
        //   href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        // },
        // {
        //   text: 'Article (with MDX)',
        //   href: getPermalink('markdown-elements-demo-post', 'post'),
        // },
        // {
        //   text: 'Category Page',
        //   href: getPermalink('tutorials', 'category'),
        // },
        // {
        //   text: 'Tag Page',
        //   href: getPermalink('astro', 'tag'),
        // },
    //   ],
    // },
    // {
    //   text: 'Widgets',
    //   href: '#',
    // },
  {
    text: 'Contáctanos',
    href: getPermalink('/contact'),
  },
  ],
  actions: [{ text: 'Únete', href: getPermalink('/about#joinus') }],
};

export const footerData = {
  links: [
    // {
    //   title: 'Product',
    //   links: [
    //     { text: 'Features', href: '#' },
    //     { text: 'Security', href: '#' },
    //     { text: 'Team', href: '#' },
    //     { text: 'Enterprise', href: '#' },
    //     { text: 'Customer stories', href: '#' },
    //     { text: 'Pricing', href: '#' },
    //     { text: 'Resources', href: '#' },
    //   ],
    // },
    // {
    //   title: 'Platform',
    //   links: [
    //     { text: 'Developer API', href: '#' },
    //     { text: 'Partners', href: '#' },
    //     { text: 'Atom', href: '#' },
    //     { text: 'Electron', href: '#' },
    //     { text: 'AstroWind Desktop', href: '#' },
    //   ],
    // },
    // {
    //   title: 'Support',
    //   links: [
    //     { text: 'Docs', href: '#' },
    //     { text: 'Community Forum', href: '#' },
    //     { text: 'Professional Services', href: '#' },
    //     { text: 'Skills', href: '#' },
    //     { text: 'Status', href: '#' },
    //   ],
    // },
    {
      title: '',
      links: [
        { text: 'Sobre ACMA',
        href: getPermalink('/about') },
        { text: 'Blog',
        href: getBlogPermalink()},
        { text: 'Noticias',
        href: getPermalink('noticias', 'category')},
      ],

    
    },
    {
      title: '',
      links: [
        { text: 'Proyectos',
        href: getPermalink('proyectos', 'category')},
        { text: 'Eventos',
        href: getPermalink('eventos', 'category')},
        { text: 'Becas',
        href: getPermalink('becas', 'category')},
      ],
    
    },
    {
      title: '',
      links: [
        { text: 'Contáctanos',
        href: getPermalink('/contact')},
        { text: 'Únete', 
        href: getPermalink('/about#joinus') },
      ],
    
    },
  ],
  secondaryLinks: [
    { text: 'Términos', href: getPermalink('/terms') },
    { text: 'Política de privacidad', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/acmacolombia', target: '_blank' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/acmacolombia', target: '_blank' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/acmacolombia', target: '_blank' },
    { ariaLabel: 'Linkedin', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/acmacolombia', target: '_blank', },
    { ariaLabel: 'Youtube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/c/ACMAColombia', target: '_blank' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml'), target: '_blank' },
    // { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    Hecho por ACMA con <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://onwidget.com/"> onWidget</a> · Todos los derechos reservados.
  `,
};


// import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

// export const headerData = {
//   links: [
//     {
//       text: 'ACMA',
//       href: getPermalink('/homes/startup'),
//     }
//         // {
//         //   text: 'Mobile App',
//         //   href: getPermalink('/homes/mobile-app'),
//         // },
//         // {
//         //   text: 'Personal',
//         //   href: getPermalink('/homes/personal'),
//         // },
//     // },
//     {
//       text: 'Pages',
//       links: [
//         {
//           text: 'Proyectos',
//           href: getPermalink('/#features'),
//         },
//         {
//           text: 'Oportunidades',
//           href: getPermalink('/services'),
//         },
//         // {
//         //   text: 'Pricing',
//         //   href: getPermalink('/pricing'),
//         // },
//         {
//           text: 'Sobre nosotras',
//           href: getPermalink('/about'),
//         },
//         {
//           text: 'Contacto',
//           href: getPermalink('/contact'),
//         },
//         {
//           text: 'Terms',
//           href: getPermalink('/terms'),
//         },
//         {
//           text: 'Privacy policy',
//           href: getPermalink('/privacy'),
//         },
//       ],
//     },
//     // {
//       // text: 'Landing',
//       // links: [
//       //   {
//       //     text: 'Lead Generation',
//       //     href: getPermalink('/landing/lead-generation'),
//       //   },
//       //   {
//       //     text: 'Long-form Sales',
//       //     href: getPermalink('/landing/sales'),
//       //   },
//       //   {
//       //     text: 'Click-Through',
//       //     href: getPermalink('/landing/click-through'),
//       //   },
//       //   {
//       //     text: 'Product Details (or Services)',
//       //     href: getPermalink('/landing/product'),
//       //   },
//       //   {
//       //     text: 'Coming Soon or Pre-Launch',
//       //     href: getPermalink('/landing/pre-launch'),
//       //   },
//       //   {
//       //     text: 'Subscription',
//       //     href: getPermalink('/landing/subscription'),
//       //   },
//       // ],
//     // },
//     {
//       text: 'Blog',
//       links: [
//         {
//           text: 'Blog List',
//           href: getBlogPermalink(),
//         },
//         {
//           text: 'Artículos',
//           href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
//         },
//         // {
//         //   text: 'Article (with MDX)',
//         //   href: getPermalink('markdown-elements-demo-post', 'post'),
//         // },
//         {
//           text: 'Categorías',
//           href: getPermalink('tutorials', 'category'),
//         },
//         {
//           text: 'Etiquetas',
//           href: getPermalink('astro', 'tag'),
//         },
//       ],
//     },
//     {
//       text: 'Widgets',
//       href: '#',
//     },
//   ],
//   actions: [{ text: 'Únete', href: 'https://forms.gle/BVzbFWKxKjwiaxJx9', target: '_blank' }],
// };

// export const footerData = {
//   links: [
//     {
//       title: 'Product',
//       links: [
//         { text: 'Features', href: '#' },
//         { text: 'Security', href: '#' },
//         { text: 'Team', href: '#' },
//         { text: 'Enterprise', href: '#' },
//         { text: 'Customer stories', href: '#' },
//         { text: 'Pricing', href: '#' },
//         { text: 'Resources', href: '#' },
//       ],
//     },
//     {
//       title: 'Platform',
//       links: [
//         { text: 'Developer API', href: '#' },
//         { text: 'Partners', href: '#' },
//         { text: 'Atom', href: '#' },
//         { text: 'Electron', href: '#' },
//         { text: 'AstroWind Desktop', href: '#' },
//       ],
//     },
//     {
//       title: 'Support',
//       links: [
//         { text: 'Docs', href: '#' },
//         { text: 'Community Forum', href: '#' },
//         { text: 'Professional Services', href: '#' },
//         { text: 'Skills', href: '#' },
//         { text: 'Status', href: '#' },
//       ],
//     },
//     {
//       title: 'ACMA',
//       links: [
//         { text: 'About', href: '#' },
//         { text: 'Blog', href: '#' },
//         { text: 'Careers', href: '#' },
//         { text: 'Press', href: '#' },
//         { text: 'Inclusion', href: '#' },
//         { text: 'Social Impact', href: '#' },
//         { text: 'Shop', href: '#' },
//       ],
//     },
//   ],
//   secondaryLinks: [
//     { text: 'Terms', href: getPermalink('/terms') },
//     { text: 'Privacy Policy', href: getPermalink('/privacy') },
//   ],
//   socialLinks: [
//     { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://twitter.com/acmacolombia' },
//     { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/acmacolombia' },
//     { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/acmacolombia' },
//     { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
//     // { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
//   ],
//   footNote: `
//     <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
//     Hecho por Asociación Colombiana de Mujeres en Aeroespacial y <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
//   `,
// };
