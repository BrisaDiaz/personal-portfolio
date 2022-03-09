export const TECHS = [
  {
    name: "Javascript",
    logoName: "javascript",
    category: "language",
    image: "/techs/javascript.svg",
    resource_url: "https://developer.mozilla.org/es/docs/Web/JavaScript",
  },
  {
    name: "Typescript",
    logoName: "typescript",
    category: "language",
    image: "/techs/typescript.svg",
    resource_url: "https://www.typescriptlang.org",
  },
  {
    name: "HTML",
    logoName: "html",
    category: "frontend",
    image: "/techs/html.svg",
    resource_url: "https://developer.mozilla.org/es/docs/Web/HTML",
  },
  {
    name: "CSS",
    logoName: "css",
    category: "frontend",
    image: "/techs/css.svg",
    resource_url: "https://developer.mozilla.org/es/docs/Web/CSS",
  },

  {
    name: "React",
    logoName: "react",
    category: "frontend",
    image: "/techs/react.svg",
    resource_url: "https://es.reactjs.org/docs/getting-started.html",
  },

  {
    name: "Next.js",
    logoName: "next-js",
    category: "frontend",
    image: "/techs/next-js.svg",
    resource_url: "https://nextjs.org/docs/getting-started",
  },

  {
    name: "Material-UI",
    logoName: "material-ui",
    category: "frontend",
    image: "/techs/material-ui.svg",
    resource_url: "https://mui.com/",
  },
  {
    name: "Styled Components",
    logoName: "styled-components",
    category: "frontend",
    image: "/techs/styled-components.svg",
    resource_url: "https://styled-components.com/",
  },
  {
    name: "Tailwind",
    logoName: "tailwind",
    category: "frontend",
    image: "/techs/tailwind.svg",
    resource_url: "https://tailwindcss.com",
  },

  {
    name: "Apollo GraphQL",
    logoName: "apollo",
    category: "backend",
    image: "/techs/graphql.svg",
    resource_url: "https://www.apollographql.com/docs/react",
  },
  {
    name: "Node.js",
    logoName: "node",
    category: "backend",
    image: "/techs/nodejs.svg",
    resource_url: "https://nodejs.org/es/docs",
  },
  {
    name: "Express",
    logoName: "express",
    category: "backend",
    image: "/techs/express.svg",
    resource_url: "https://expressjs.com/",
  },
  {
    name: "MongoDB",
    logoName: "mongodb",
    category: "backend",
    image: "/techs/mongodb.svg",
    resource_url: "https://docs.mongodb.com",
  },
  {
    name: "Mongoose",
    logoName: "mongoose",
    category: "backend",
    image: "/techs/mongoose.svg",
    resource_url: "https://mongoosejs.com/",
  },
  {
    name: "PostgreSQL",
    logoName: "postgresql",
    category: "backend",
    image: "/techs/postgresql.svg",
    resource_url: "https://www.postgresql.org/docs",
  },
  {
    name: "Prisma",
    logoName: "prisma",
    category: "backend",
    image: "/techs/prisma-3.svg",
    resource_url: "https://www.prisma.io/docs",
  },

  {
    name: "React Testing",
    logoName: "react-testing-library",
    category: "testing",
    image: "/techs/react-testing-library.svg",
    resource_url:
      "https://testing-library.com/docs/react-testing-library/intro/",
  },
  {
    name: "Jest",
    logoName: "jest",
    category: "testing",
    image: "/techs/jest.svg",
    resource_url: "https://jestjs.io/docs/getting-started",
  },
  {
    name: "Cypress",
    logoName: "cypress",
    category: "testing",
    image: "/techs/cypress.svg",
    resource_url: "https://docs.cypress.io",
  },
  {
    name: "Socket.io",
    logoName: "socket-io",
    category: "other",
    image: "/techs/socket-io.svg",
    resource_url: "https://socket.io/docs/v4",
  },
  {
    name: "Next Auth",
    logoName: "next-auth",
    category: "other",
    image: "/techs/next-auth.svg",
    resource_url: "https://next-auth.js.org/",
  },

  {
    name: "Cloudinary",
    logoName: "cloudinary",
    category: "other",
    image: "/techs/cloudinary.svg",
    resource_url: "https://cloudinary.com/documentation",
  },
  {
    name: "Nodemailer ",
    logoName: "nodemailer",
    category: "other",
    image: "/techs/nodemailer.svg",
    resource_url: "https://nodemailer.com/about",
  },

  {
    name: "Git",
    logoName: "git",
    category: "other",
    image: "/techs/git.svg",
    resource_url: "https://git-scm.com/doc",
  },
];
export const PROJECTS = [
  {
    id: 5,
    slug: "ORTEX_login",
    title: "ORTEX login",
    subtitle: "ORTEX Technical task",
    captions: [
      {
        src: "https://res.cloudinary.com/myproyects/image/upload/v1645665799/proyects/ortex_1_ishhld.png",

        alt: "portfolio logo",
      },
      {
        src: "https://res.cloudinary.com/myproyects/image/upload/v1645412601/proyects/gif_myouif.gif",

        alt: "screens resolutions",
      },
    ],
    summary:
      "Login page with automated unit tests, integration tests and performance audits.",
    features: [
      "Lighthouse pipeline.",
      "Integration tests pipeline.",
      "Unit tests pipeline.",
      "Customizable form with validation.",
      "Accessible components.",
      "Push notification.",
      "Loading indicators.",
      "Websocket connection.",
    ],
    language: "Typescript",
    technologies: {
      frontend: ["next.js", "css"],
      backend: ["tradingeconomics websocket API"],
      testing: ["react-testing-library", "jest", "cypress", "lighthouse CL"],
      hosting: "Vercel",
    },

    source_code: "https://github.com/BrisaDiaz/ORTEX_technical_task.git",
    demo: "https://ortex-login-task.vercel.app",
  },

  {
    id: 4,
    slug: "booking_app",
    title: "booking app",
    subtitle: "End-to-end type safety SPA",
    captions: [
      {
        src: "https://res.cloudinary.com/myproyects/image/upload/v1642998067/proyects/target_2_aqjj3g.webp",

        alt: "hotel booking app logo",
      },
      {
        src: "https://res.cloudinary.com/myproyects/image/upload/c_fill,h_500,w_1200/v1642707470/proyects/screencapture-localhost-3000-search-2022-01-15-16_48_25-min_1_gedd9m.webp",
        original:
          "https://res.cloudinary.com/myproyects/image/upload/v1642707470/proyects/screencapture-localhost-3000-search-2022-01-15-16_48_25-min_1_gedd9m.webp",
        alt: "search and filter hotels screen",
      },
      {
        src: "https://res.cloudinary.com/myproyects/image/upload/v1642707488/proyects/Captura_de_pantalla_2022-01-20_155932-min_y0xpcg.webp",
        original:
          "https://res.cloudinary.com/myproyects/image/upload/v1645838092/proyects/screencapture-hotel-booker-app-vercel-app-hotel-1-2022-02-25-22_13_31_ckbnxb.webp",
        alt: "hotel image gallery",
      },
      {
        src: "https://res.cloudinary.com/myproyects/image/upload/v1642707501/proyects/screencapture-localhost-3000-room-1-2022-01-16-15_57_18-min_1_pq2is5.webp",

        alt: "hotel room details and reservation form",
      },
      {
        src: "https://res.cloudinary.com/myproyects/image/upload/v1642707491/proyects/screencapture-localhost-3000-admin-hotel-2022-01-16-16_00_02-min_1_g7qilp.webp",

        alt: "hotel rooms management admin screen",
      },
      {
        src: "https://res.cloudinary.com/myproyects/image/upload/v1642707462/proyects/screencapture-localhost-3000-admin-hotel-bookings-2022-01-16-16_03_29-min_1_e1pbmy.webp",
        alt: "hotel bookings management admin screen",
      },
    ],
    summary:
      "Application for the administration and request of hotel rooms with updated information on the availability of rooms.",
    features: [
      "Search by hotel name or location with real-time suggestions.",
      "Hotel filtering by category, facilities, services, activities, spoken languages and restrictions.",
      "Pagination.",
      "Push notifications.",
      "Ability to check availability and reserve hotel rooms.",
      "Authentication.",
      "Multi hotels and admins support.",
      "Ability to customize hotel and room thumbnails.",
      "Ability to edit hotel and rooms genetic information and booking logistics.",
      "Ability to categorize, assign available quota and unique identifier to each hotel room.",
      "Ability to visualize, search, filter, accept or reject booking requests.",
      "Possibility of uploading and managing reservations made by external methods.",
      "Ability to visualize information, search, filter guests.",
      "Ability to view the calendar of active, canceled or completed reservations, to be able to view details and cancel reservations.",
      "Ability to manage through a folder system and upload media files to cloudinary.",
    ],
    language: "Typescript",
    technologies: {
      frontend: ["next.js", "apollo client", "material-IU", "react-hook-form"],
      backend: [
        "apollo server",
        "postgreSQL",
        "nexus",
        "prisma",
        "cloudinary",
        "json JWT",
      ],

      hosting: "vercel",
    },
    testingUser: {
      email: "admin@hotelBooker.com",
      password: "admin",
    },
    source_code: "https://github.com/BrisaDiaz/hotel_booker_app",
    demo: "https://hotel-booker-app.vercel.app/signin",
  },
  {
    id: 3,
    slug: "wikifit_app",
    title: "wikifit app",
    subtitle: "Progressive web App",
    captions: [
      {
        src: "https://res.cloudinary.com/myproyects/image/upload/v1642998067/proyects/target_r60diw.webp",
        alt: "wikifit app logo",
      },
      {
        src: "https://res.cloudinary.com/myproyects/image/upload/c_thumb,g_west,h_400,w_600/v1644361152/proyects/wki-2-min_x0zsph.webp",
        original:
          "https://res.cloudinary.com/myproyects/image/upload/v1644361152/proyects/wki-2-min_x0zsph.webp",
        alt: "login screen",
      },
      {
        src: "https://res.cloudinary.com/myproyects/image/upload/c_thumb,h_400,w_600/v1646099043/proyects/screencapture-localhost-3000-search-2022-02-28-19_07_13-min_gj3fmb.webp",
        original:
          "https://res.cloudinary.com/myproyects/image/upload/v1646099043/proyects/screencapture-localhost-3000-search-2022-02-28-19_07_13-min_gj3fmb.webp",
        alt: "search recipe and store in collection screen",
      },
      {
        src: "https://res.cloudinary.com/myproyects/image/upload/c_thumb,g_north,h_400,w_600/v1646099044/proyects/screencapture-localhost-3000-calories-calculator-2022-02-28-20_21_10-min_c0shab.webp",
        original:
          "https://res.cloudinary.com/myproyects/image/upload/v1646099044/proyects/screencapture-localhost-3000-calories-calculator-2022-02-28-20_21_10-min_c0shab.webp",
        alt: "ideal caloric and nutrients intake calculator",
      },
      {
        src: "https://res.cloudinary.com/myproyects/image/upload/c_thumb,g_west,h_400,w_600/v1646099044/proyects/screencapture-localhost-3000-collections-2022-02-28-19_08_43-min_jgucje.webp",
        original:
          "https://res.cloudinary.com/myproyects/image/upload/v1646099044/proyects/screencapture-localhost-3000-collections-2022-02-28-19_08_43-min_jgucje.webp",
        alt: "menu bar and recipe collection screen",
      },
    ],

    summary:
      "Application created to search for recipes and calculate nutritional requirements adjusted to the profile and diet of users.",
    features: [
      "Progressive web app.",
      "Unit Tests.",
      "End to end tests.",
      "Ability to display the collection tag on recipes already stored by the user.",
      "Full tested ARM, macros and meal size calculators.",
      "Recipe details page.",
      "User recipes collections pages.",
      "Ability to create, rename and delete collections.",
      "Ability to store, move and delete recipes.",
      "Real time form validation.",
      "Loading indicators.",
      "Protected routes.",
      "Conditional content.",
      "Social sign in.",
    ],
    language: "javascript",
    technologies: {
      frontend: [
        "next.js",
        "next auth",
        "next-pwa",
        "tailwind",
        "react-hook-form",
      ],
      backend: ["postgreSQL", "prisma"],
      testing: ["react testing library", "jest", "cypress"],
      hosting: "vercel",
    },
    testingUser: {
      email: "admin@email.com",
      password: "admin",
    },
    source_code: "https://github.com/BrisaDiaz/fitness-wiki-nextjs-app",
    demo: "https://fitness-wiki-nextjs-app.vercel.app",
  },
  {
    id: 2,
    slug: "delivery_app",
    title: "delivery app",
    subtitle: "With real time notifications SPA",

    captions: [
      {
        src: "https://res.cloudinary.com/myproyects/image/upload/v1643991147/burger_rgepyv.webp",
        alt: "delivery app logo",
      },
      {
        src: "https://res.cloudinary.com/myproyects/image/upload/v1644361165/proyects/burger-2-min_oatxvw.webp",
        original:
          "https://res.cloudinary.com/myproyects/image/upload/v1645735028/proyects/screencapture-fast-food-delivery-app-herokuapp-2022-01-20-16_57_33_og3iul.png",
        alt: "call to action hero slider",
      },
      {
        src: "https://res.cloudinary.com/myproyects/image/upload/v1644361146/proyects/burger-1-min_qu6v2e.webp",
        original:
          "https://res.cloudinary.com/myproyects/image/upload/v1642716738/proyects/screencapture-fast-food-delivery-app-herokuapp-2022-01-20-16_58_45-min_yid3wi.png",
        alt: "search on menu and add to cart screen",
      },
      {
        src: "https://res.cloudinary.com/myproyects/image/upload/v1642716729/proyects/screencapture-fast-food-delivery-app-herokuapp-2022-01-20-16_59_51-min_rdnaaz.webp",
        original:
          "https://res.cloudinary.com/myproyects/image/upload/v1642716729/proyects/screencapture-fast-food-delivery-app-herokuapp-2022-01-20-16_59_51-min_rdnaaz.png",
        alt: "orders management  admin screen",
      },
      {
        src: "https://res.cloudinary.com/myproyects/image/upload/v1644361139/proyects/burger-3-min_y4eorf.webp",
        original:
          "https://res.cloudinary.com/myproyects/image/upload/v1642716732/proyects/screencapture-fast-food-delivery-app-herokuapp-2022-01-20-17_01_06-min_gwnomp.png",
        alt: "load a new product admin screen",
      },
    ],
    summary:
      "Application created for the management of food menus in restaurants and real-time monitoring of the status of orders.",
    language: "javascript",
    features: [
      "Email account validation via email",
      "Functional newsletter and  contact form.",
      "Form fields validation",
      "Media storage using multer library and cloudinary service.",
      "Real time new orders and order actualization notifications",
      "Some unit test.",
      "Lazy Load components and code splitting",
      "Products and orders section skeletons.",
      "Pagination.",
      "Products and orders section with sorter, filter and search bar.",
      "URL able to storage the user search.",
      "Custom Auto-played sliders with dot indicators and controls.",
      "Latest products carrousel using swiper.js library.",
      "Complete authentication system width forgot password support.",
      "Access to Public and Private routes base on roles.",
      "Functional contact section with form validation.",
      "Loading modal and loading form indicators.",
      "Ability to add, set desired units and remove products from the cart.",
      "Ability to edit profile.",
      "Ability to view the history of orders with their status.",
      "Ability of placing an order and being able to cancel it easily in case it has not yet been accepted.",
      "Ability to add new products, edit, delete or hide them.",
      "Ability of adding new categories, renaming them or eliminating them together with the products that belong to them.",
      "Ability of updating the current status of the order.",
    ],
    technologies: {
      frontend: [
        "react",
        "react-router-dom",
        "styled-components",
        "react-hook-form",
        "socket.io-client",
        "swiper",
      ],
      backend: [
        "node.js",
        "express",
        "mongodDB",
        "mongoose",
        "cloudinary",
        "oAuth2",
        "nodemailer",
        "socket.io",
        "jsonJWT",
      ],
      hosting: "heroku",
    },

    testingUser: {
      email: " moderator@localhost.com",
      password: "moderator",
    },
    source_code: "https://github.com/BrisaDiaz/Mern-stack-delivery-app",
    demo: "https://fast-food-delivery-app.herokuapp.com",
  },
  {
    id: 1,
    slug: "photographer_portfolio",
    title: "photographer portfolio",
    subtitle: "Modern and interactive website",

    captions: [
      {
        src: "https://res.cloudinary.com/myproyects/image/upload/v1642998071/proyects/target_3_jhisbz.webp",
        alt: "photographer portfolio logo",
      },
      {
        src: "https://res.cloudinary.com/myproyects/image/upload/v1645834038/proyects/screencapture-photographer-portfolio-vercel-app-2022-02-25-20_36_50_nchzqb.webp",
        original:
          "https://res.cloudinary.com/myproyects/image/upload/v1645834038/proyects/screencapture-photographer-portfolio-vercel-app-2022-02-25-20_36_50_nchzqb.webp",
        alt: "website home page",
      },
      {
        src: "https://res.cloudinary.com/myproyects/image/upload/c_thumb,g_custom,h_400,w_600,y_508,x_0/v1645834002/proyects/screencapture-photographer-portfolio-vercel-app-contacto-contact-html-2022-02-25-20_37_27_w5yciq.webp",
        original:
          "https://res.cloudinary.com/myproyects/image/upload/v1645834002/proyects/screencapture-photographer-portfolio-vercel-app-contacto-contact-html-2022-02-25-20_37_27_w5yciq.webp",
        alt: "contact screen",
      },
      {
        src: "https://res.cloudinary.com/myproyects/image/upload/c_thumb,h_400,w_600/v1645833951/proyects/Captura_de_pantalla_2022-02-25_204752_yiw3fh.webp",
        original:
          "https://res.cloudinary.com/myproyects/image/upload/v1645833951/proyects/Captura_de_pantalla_2022-02-25_204752_yiw3fh.webp",
        alt: "dispositive resolutions",
      },
    ],

    summary: "Modern and interactive web portfolio of photographic services.",
    language: "javascript",
    technologies: {
      frontend: ["vanilla javascript", "css", "html"],
      hosting: "vercel",
    },
    features: [
      `Modularized javaScript code.`,
      `Projects gallery with hover effect and animated zoom modal.`,
      `On scroll animations.`,
      `Auto-played slider with clients testimonials.`,
      `Skill progress bars.`,
      `Counters of Achievements.`,
      `Drop-down FAQ list.`,
      `Animated menu nav.`,
      `Form validation.`,
      `Smooth scroll to top button.`,
    ],
    source_code: "https://github.com/BrisaDiaz/Photographer_web_page",
    demo: "https://photographer-portfolio.vercel.app",
  },
];
export const SKILLS = [
  "Strong proficiency in JavaScript and DOM manipulation.",
  "Experience in creating responsive and user friendly UI implementations.",
  "Experience integrating Typescript in a medium size project.",
  "Experience consuming and creating RESTful/GraphQL API's.",
  "Experience with Unit Testing and End to End testing.",
  "Experience implementing rendering techniques like SSG, SSR and ISR.",
  "Experience implementing Github pipelines.",
  "Experience  applying SEO optimization and accessibility.",

  "Ability to translate business logic into code.",
];
