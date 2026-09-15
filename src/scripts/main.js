const projects = {
  atlas: { name: 'Atlas', number: '01', description: 'A calmer command centre for ambitious teams.', image: '../../public/images/project-01/atlas.svg', overview: 'Atlas brings scattered project information into one considered workspace, helping teams move from context-switching to focused progress.', problem: 'Teams were spending more time looking for the right information than acting on it. Existing tools were powerful, but noisy and fragmented.', solution: 'I designed a flexible workspace that gives every project a clear pulse: what matters now, what is blocked, and where the team is heading next.', process: 'Research → Mapping → Prototyping → Testing', technology: 'Figma · React · TypeScript · Node', challenges: 'The hardest part was reducing a dense system into a calm hierarchy without hiding the nuance power users rely on.', outcome: 'A shared operating layer that cut status meetings and gave the team more time for the work itself.' },
  fieldnotes: { name: 'Vehicle Identification System', number: '02', description: 'QR-powered vehicle identification and scan traceability.', image: '../../public/images/project-02/fieldnotes.svg', overview: 'A web-based vehicle identification system that lets users scan a vehicle QR code, retrieve its information and generation details, and maintain a history of scans for traceability.', problem: 'Manual vehicle identification was time-consuming and made it difficult to reliably retrieve vehicle information or review previous scans in a manufacturing environment.', solution: 'The system uses QR codes as an identification mechanism. A React frontend sends scanned data to ASP.NET Core REST APIs, which use Entity Framework Core and SQL Server to identify the vehicle, distinguish old and new generations, return the relevant details, and store scan history.', process: 'Requirements → React scanning workflow → ASP.NET Core REST API → Entity Framework Core → SQL Server integration → Authentication and navigation → Scan-history workflow → Debugging and IIS deployment', technology: 'C# · .NET 8 · ASP.NET Core · Entity Framework Core · React.js · SQL Server · REST APIs · QR Code · IIS', challenges: 'The project required coordinating multiple application components and deployment folders while keeping the QR scanning, vehicle lookup, generation display, authentication, navigation, and history workflows consistent and reliable.', outcome: 'A practical enterprise-style workflow that speeds up vehicle identification, provides clear old- versus new-generation details, and gives teams a traceable record of QR scans. The project also provided hands-on experience with full-stack development, database integration, debugging, publishing, and IIS-based deployment.' },
  orbit: { name: 'Home Security System — IoT + AI', number: '03', description: 'AI-powered home monitoring with ESP32, facial recognition, and mobile alerts.', image: '../../public/images/project-03/orbit.svg', overview: 'The Home Security System is an IoT and AI-based security solution designed to monitor a home environment, detect suspicious activity, identify people using facial recognition, and notify users through a mobile application. The project combines IoT sensors, computer vision, facial recognition, backend APIs, and a mobile application into a single security ecosystem.', problem: 'Traditional home security systems may rely primarily on alarms or basic motion detection. However, a motion sensor can tell us that someone is present — but not necessarily who is present. The objective of this project was to introduce AI-based identification into an IoT security system so that motion or a door event can lead to meaningful recognition rather than a generic alarm.', solution: 'The system combines an ESP32-CAM for image capture, an ESP32 board for sensor handling, a PIR sensor for motion detection, a reed switch for door monitoring, and a buzzer for local alerts. It uses InsightFace with the ArcFace model for facial recognition, a Django REST API for backend communication, and a Flutter app for mobile monitoring, JWT authentication, and alert notifications.', process: 'Hardware setup → Sensor integration → AI and facial-recognition pipeline → Backend API development → Mobile app integration → Alert and notification workflow → Testing and debugging', technology: 'Python · Django REST Framework · InsightFace · ArcFace · ESP32-CAM · ESP32 · PIR Sensor · Reed Switch · Flutter · SQLite · JWT · Computer Vision · IoT · AI', challenges: 'The project required integrating hardware, backend services, and AI-based recognition while maintaining responsive alerting. Aligning sensor events, face embedding comparisons, and mobile notifications into one system required careful debugging and validation across components.', outcome: 'A practical smart-home security prototype that can detect motion, door activity, and known or unknown faces, then inform users through mobile alerts and local buzzer signals for immediate awareness.' },
  paintshop: { name: 'Paint Shop', number: '04', description: 'Production planning, flow monitoring, and process insights.', image: '../../public/images/project-04/paintshop.svg', overview: 'Paint Shop is a production dashboard focused on understanding the paint process, tracking workflow status, and highlighting where delays or quality risks are developing.', problem: 'Paint operations rely on multiple moving parts, from work-in-progress flow to process quality checks. Without a clear view, it becomes difficult to spot bottlenecks before they affect output.', solution: 'I designed a compact operational dashboard that surfaces the key process states, delivery flow, and quality signals without overwhelming the user with noisy metrics.', process: 'Requirements → Process mapping → Dashboard framing → UI refinement → Validation', technology: 'Figma · Product Design · Dashboard Design · UX Research · Data Storytelling', challenges: 'The main challenge was keeping the interface useful and readable while removing nonessential visual clutter such as heavy charts that distracted from the operational story.', outcome: 'A cleaner, more focused product snapshot that keeps the project visible and the process insights readable without overloading the card or the dashboard.' },
};

const query = new URLSearchParams(window.location.search);
const projectKey = query.get('project') || 'atlas';
const project = projects[projectKey] || projects.atlas;
const projectOrder = Object.keys(projects);
const projectIndex = projectOrder.indexOf(projectKey);
const previousProjectKey = projectOrder[(projectIndex - 1 + projectOrder.length) % projectOrder.length];
const nextProjectKey = projectOrder[(projectIndex + 1) % projectOrder.length];
const caseStudy = document.querySelector('#case-study');

if (caseStudy) {
  caseStudy.innerHTML = `<section class="case-hero section-pad"><a class="back-link" href="../../index.html#work">← Back to work</a><div class="case-title"><span class="eyebrow">Project ${project.number}</span><h1>${project.name}</h1><p>${project.description}</p></div><div class="case-visual"><img src="${project.image}" alt="${project.name} project artwork"></div></section><section class="case-content section-pad"><div class="case-intro"><span class="eyebrow">The short version</span><p>${project.overview}</p></div><div class="case-sections"><article><span>01 — Overview</span><h2>What is this?</h2><p>${project.overview}</p></article><article><span>02 — Problem</span><h2>What needed to change?</h2><p>${project.problem}</p></article><article><span>03 — Solution</span><h2>How did we approach it?</h2><p>${project.solution}</p></article><article><span>04 — Process</span><h2>The path there.</h2><p>${project.process}</p></article><article><span>05 — Technology</span><h2>Made with.</h2><p>${project.technology}</p></article><article><span>06 — Challenges</span><h2>The tricky bit.</h2><p>${project.challenges}</p></article><article><span>07 — Outcome</span><h2>What changed?</h2><p>${project.outcome}</p></article></div><div class="case-actions"><a class="button button-dark" href="#">Live demo <span>↗</span></a><a class="button button-light" href="#">Github <span>↗</span></a></div></section><nav class="project-nav section-pad" aria-label="Project navigation"><a href="?project=${previousProjectKey}">← Previous project</a><a href="?project=${nextProjectKey}">Next project →</a></nav>`;
}

document.querySelectorAll('.menu-toggle').forEach((toggle) => toggle.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') === 'true'; toggle.setAttribute('aria-expanded', String(!open)); document.querySelector('.main-nav').classList.toggle('is-open', !open); }));
document.querySelectorAll('.main-nav a').forEach((link) => link.addEventListener('click', () => document.querySelector('.main-nav')?.classList.remove('is-open')));
const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const smokeLayer = document.createElement('div');
smokeLayer.className = 'cursor-smoke';
smokeLayer.setAttribute('aria-hidden', 'true');
document.body.append(smokeLayer);

let pointerX = window.innerWidth / 2;
let pointerY = window.innerHeight / 2;

let lastSmokeTime = 0;
document.addEventListener('pointermove', (event) => {
  pointerX = event.clientX;
  pointerY = event.clientY;

  const currentTime = performance.now();
  const emissionInterval = reducedMotion ? 100 : 24;
  if (currentTime - lastSmokeTime < emissionInterval) return;
  lastSmokeTime = currentTime;

  const burstCount = reducedMotion ? 1 : 4 + Math.floor(Math.random() * 3);

  for (let i = 0; i < burstCount; i += 1) {
    const smokeParticle = document.createElement('span');
    smokeParticle.className = 'smoke-particle';
    smokeParticle.style.left = `${pointerX + (Math.random() * 16 - 8)}px`;
    smokeParticle.style.top = `${pointerY + (Math.random() * 16 - 8)}px`;
    smokeParticle.style.setProperty('--smoke-size', `${30 + Math.random() * 50}px`);
    smokeParticle.style.setProperty('--smoke-drift-x', `${-80 + Math.random() * 160}px`);
    smokeParticle.style.setProperty('--smoke-drift-y', `${-100 - Math.random() * 110}px`);
    smokeParticle.style.setProperty('--smoke-duration', `${reducedMotion ? 500 : 900 + Math.random() * 1000}ms`);
    smokeLayer.append(smokeParticle);
    smokeParticle.addEventListener('animationend', () => smokeParticle.remove(), { once: true });
  }
});

document.addEventListener('pointerleave', () => {
  lastSmokeTime = 0;
});
