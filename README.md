**Personal Portfolio Website**

---

The Personal Portfolio Website is a professional, high-performance web platform designed from scratch using foundational front-end technologies (HTML, CSS, and JavaScript). It aims to highlight my academic success, project work, technical skillset, and career goals.

The project features a responsive split-layout design, custom card containers, interactive project category filtering, form verification, and a dark/light mode toggle. This document serves as the web design documentation for the architecture, design choices, and user experience paradigms used throughout the site.

## **TARGET AUDIENCE**

The primary audience consists of Technical recruiters, engineering hiring managers, and cybersecurity experts looking for software development talent. The secondary audience consists of Academic advisors, university peers, and open-source project collaborators. The design layout assumes these visitors have minimal time; therefore, the platform is optimized for deep information scannability. This allows technical decision-makers to rapidly review my technical skills, inspect clean source code repositories, and verify my academic performance within seconds of arriving on the site.

## **CONTENT**

1. What is your full name as you want it displayed professionally?
   --> Samin Easar

2. What is the purpose of your portfolio website?
   --> To professionally present my engineering identity, showcase my academic achievements, highlight complex full-stack/system development projects, and act as a gateway for job opportunities.

3. Who is the target audience?
   --> Technical recruiters, engineering hiring managers, tech organizations, university faculty, and industry peers.

4. What skills do you want to highlight?
   --> Core Object-Oriented Programming (Java, Python, C/C++), web infrastructure components (HTML, CSS, JavaScript, SQL), data architectures (Firebase, MySQL), database design, and software security fundamentals.

5. What projects or work will you showcase?
   -->

- TeleHeal 24/7 Health Care Application: An Android healthcare application built with Java, Android Studio, and Firebase, featuring secure user authentication and real-time consulting data channels.

- Street Challenges: A 2D racing game constructed in C++ utilizing basic graphics libraries (iGraphics) alongside programmatic object collision detection algorithms.

- Personal Portfolio Website: This modern front-end engineering site built from scratch using clean HTML, CSS, and vanilla JavaScript.

- Upcoming Project: A future responsive web application designed to expand my engineering capabilities.

6. How will you describe yourself in a short professional bio?
   --> am a Computer Science student at Queens College, CUNY, with a strong academic record and a passion for building impactful software solutions. I maintain a high GPA reflecting dedication to learning and excellence. I enjoy turning ideas into real-world applications through clean code, thoughtful design, and efficient problem-solving. My interests span software engineering, database systems, cybersecurity, and emerging technologies.

7. What pages will your site include (Home, About, Projects, Contact, etc.)?
   --> The site includes eight distinct pages: Home (index.html), About (about.html), Projects (projects.html), Project Details (project-details.html), Skills (skills.html), Experience (experience.html), Resume (resume.html), and Contact (contact.html).

8. What is your career goal or desired role?
   --> To start as a Software Engineer and transition into cybersecurity engineering to build robust, secure computing systems.

9. What technologies or tools do you have experience with?
   --> - Development Tools & Ecosystems: Git/GitHub, Android Studio, Visual Studio, MS Office, Eclipse, Firebase, VS Code, Wireshark etc.

-Programming Languages: Java, Python, C, C++, HTML, CSS, JavaScript, SQL.

10. What achievements or experiences are worth highlighting?
    -->

- Selected as a National Science Foundation (NSF) S-STEM Scholar

- Regular placement on the Dean's List and recipient of the Provost Award for Academic Excellence

- Professional experience as a College Assistant in the Financial Aid Office and Data Entry Assistant in the Registrar's Office at Queens College

- Good academic GPA at Queens College (CUNY)

11. What call-to-action should visitors take (contact you, view projects, download resume)?
    --> View active engineering projects ("View My Work"), download the official document copy ("Download Resume"), view code repositories ("View Code"), and submit direct communications via the interface ("Send Message").

12. Will you include a resume? In what format?
    --> Yes, included directly on the site via an interactive print-style sheet preview card, alongside direct action triggers to view online or download in standard PDF format.

13. What social or professional links will you include (GitHub, LinkedIn, etc.)?
    -->

- GitHub (https://github.com/samin-easar)
- LinkedIn (https://www.linkedin.com/in/samin-easar)
- Email (zayed15243@gmail.com)

## **DESIGN**

1. What overall style will best represent you (minimalist, creative, professional, etc.)?
   --> A dark tech style blended with professional minimalism. It balances a clean corporate structure with subtle neon accents common in developer environments.

2. What color scheme will you use and why?
   -->

- Dark Theme: Main Background (#060913), Card Surface (#0e1326), Primary Accent (#8a46ff - Purple), Secondary Accent (#00d4ff - Neon Blue), Typography Core (#ffffff).

- Light Theme: Main Background (#f3f4f6), Card Surface (#ffffff), Primary Accent (#8a46ff - Purple), Typography Core (#111827 - deep midnight black for clean readability).

- Justification: Purple and neon blue create a modern software engineering look. The deep backgrounds reduce eye strain, while the automated light-theme switches colors to maintain high text contrast.

3. What fonts will you use for headings and body text?
   --> Clean, highly-readable sans-serif fonts are used for headings and body text across the pages to maintain a clean aesthetic. The embedded resume sheet uses a serif font to replicate standard paper print style.

4. How will your design reflect your personality or field?
   --> The user interface mimics modern code dashboards by using container borders, icon boxes, gradient code quotes, and neon progress monitors. This directly aligns with the software development and cybersecurity fields.

5. What layout will your homepage follow?
   --> A clean split hero section with content text and action triggers on the left side, and a professional portrait framed by a glowing halo ring on the right side. This sits above a wide four-column statistics bar highlighting academic and professional milestones.

6. How will you organize project sections visually?
   --> The main projects section displays a multi-column responsive grid containing uniform cards. Each card includes a project image, descriptive text, a tech-pill cloud, and an arrow link. The project details view uses a clean layout that pairs an interactive mockup window next to detailed feature lists.

7. Will the site be mobile-friendly? How will you ensure responsiveness?
   --> Yes. Responsiveness is achieved by using fluid CSS flexbox structures, CSS Grid adapters, and CSS media breakpoints. This scales down columns, wraps tags dynamically, and collapses the horizontal desktop navigation menu into a slide-down mobile overlay menu.

8. What visual hierarchy will guide visitors?
   --> Visitors are guided by careful size and weight changes in typography. Major titles use larger sizes (3.75rem for home titles), body segments use a balanced text scale, while accents use a purple color glow to lead the user's eye to call-to-action buttons.

9. How will consistency be maintained across pages?
   --> Consistency is maintained by linking every page to a shared style guide (style.css) and global script pipeline (script.js). This standardizes header menus, font sizes, glassmorphism cards, and interactive button hover transitions across the entire site.

10. How will accessibility be considered (contrast, font size, readability)?
    --> The light theme changes text to a dark slate color against clean light gray backgrounds to ensure optimal contrast ratios. All input forms use clean labels with matching for/id associations, and interactive buttons include explicit labels for screen readers.

11. Will you use icons, images, or illustrations? Why?
    --> FontAwesome icon fonts are used across the site to give instant visual cues for data values (e.g., mail icons for emails, shield icons for security fields). Genuine project screenshots and a professional portrait are included to build real-world credibility with recruiters.

12. What portfolio websites inspired your design?
    --> Modern developer portfolio sites, developer dashboards, and open-source documentation hubs that feature dark themes, glassmorphism card layouts, and clean sidebar widgets.

## **INTERACTIVITY**

1. What interactive elements will your site include (navigation menus, buttons, forms)?
   --> An interactive dark/light mode toggle widget, a fully responsive mobile layout navigation toggle, hover effects on buttons, tag category filter inputs, and a contact validation input form.

2. Will your site include a contact form? How will it work?
   --> Yes, an interactive client message panel is built into contact.html. It runs on a programmatic browser pipeline (id="contactFormPipeline") that captures user input, runs validation string checks, blocks empty submissions, resets form values, and triggers a clean confirmation popup message.

3. What JavaScript features will you implement?
   -->

- Instant Theme Switch: An optimization function that reads cached browser states to set the chosen theme before the DOM loads to prevent page flashing.

- Navigation Link Tracker: Automatically detects browser paths to add active class indicators to the corresponding header navigation links.

- Dynamic Category Filter Engine: Filters showcase elements based on selected attributes (data-project-category) without reloading the page.

- Skill Animation Interpolator: Triggers custom progress track animations based on data width attributes when a user opens the page.

4. How will users receive feedback from interactions?
   --> Navigation links highlight to indicate the active page, buttons scale upward on hover, and form submissions trigger popups using captured input names to confirm successful delivery.

5. How does interactivity improve the user experience?
   --> It transforms a static resume into an engaging experience. Interactivity lets users switch themes based on their preference and filter projects instantly, helping technical recruiters find relevant skills quickly without extra page reloads.

## **WIREFRAME DESIGN & REFERENCES**

The visual layouts are mapped out across computer-aided visual blueprints included within the project repository under the following file names:1-Home.jpg, 2-about.jpg, 3-project.jpg, 4-project-details.jpg, 5-skills.png, 6-experience.png, 7-resume.png, 8-contact.png

![Wireframe](assets/wireframs/Wireframe-in-one-page.png)

## **INTERACTION & FUNCTIONALITY**

The behavior engine is fully contained within script.js and provides the following behaviors:

- Dark/Light Cache Toggler: Listens for user clicks on the .theme-switch-widget button. It toggles the data theme attribute on the document element between "dark" and "light", and caches this selection in browser local memory (localStorage.setItem("portfolio-theme")).

- Mobile Overlay System: When users click the menu icon, a listener class toggles .mobile-open on the navigation menu container, switching the FontAwesome icon from a menu bar (fa-bars) to an close button (fa-times).

- Project Filtering Engine: Listens for clicks on category triggers. It checks the target category name via data-filter-target against the project cards' attributes (data-project-category). Matching items are displayed as flex elements, while mismatched cards are hidden.

- Input Validation Channel: Intercepts form submissions using event.preventDefault(). It performs safety checks, displays a structured success confirmation notification, and clears input nodes to keep the user experience seamless.

## **TECHNICAL OVERVIEW**

- Architecture: HTML elements for structure, custom layout components, and clean modular code structures.

- Style Layer: Built using CSS variables, adaptive color theme mappings, dynamic CSS flexbox rows, and responsive multi-column layouts.

- Behavior Engine: JavaScript built around DOM event listeners, conditional filters, and programmatic layout updates.

- External Dependencies: FontAwesome Core CSS via secure CDN integration for developer-focused icons. No third-party frameworks, libraries, or APIs are required.

## **TIMELINE & PROJECT MILESTONES**

- Milestone 1: Requirement Analysis & Content Structuring (Completed)
  Drafted structural outlines, compiled historical data points, and structured layout files.

- Milestone 2: Multi-Page Visual Layout Blueprint Design (Completed)
  Designed nine visual wireframes detailing components, dark-to-light theme changes, and mobile-friendly grids.

- Milestone 3: Base Structural Implementation (Completed)
  Coded the semantic HTML skeleton structures across all files.

- Milestone 4: Style Sheet & Responsive Layout Implementation (Completed)
  Built custom variables, structural alignments, animations, and responsive media query breakpoints.

- Milestone 5: JavaScript Behavior Integration (Completed)
  Built the local cache theme switch engine, filter modules, and form validation pipelines.

- Milestone 6: Quality Assurance, Accessibility Checks, & Deployment (Completed) Verified text contrast parameters, optimized mobile behavior, and deployed the repository live on GitHub Pages.

## **EXTERNAL RESOURCES**

- GitHub Pages Documentation: https://docs.github.com/en/pages

- FontAwesome Icon Library Portal: https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css

- MDN Web Docs Front-End Standards Guide: https://developer.mozilla.org/en-US/
