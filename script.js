// Mobile Navigation Toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = menuBtn.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = menuBtn.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Sticky Navbar Background on Scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Experience Expand/Collapse Functionality
function toggleExp(header) {
    const card = header.parentElement;

    // Close other expanded cards
    document.querySelectorAll('.exp-card.active').forEach(c => {
        if (c !== card) {
            c.classList.remove('active');
        }
    });

    // Toggle current card
    card.classList.toggle('active');
}

// Project Details Modal Data
const projectData = {
    '3d-printer': {
        title: '3D Printer',
        img: 'PHOTOS/3d printer.png',
        github: '#',
        problem: 'Need for an affordable, high-precision prototyping tool locally.',
        design: 'Designed a rigid aluminum extrusion frame. Integrated Marlin firmware with custom stepper motor drivers for precise filament deposition.',
        challenges: 'Achieving bed leveling consistency and calibrating PID settings for the hotend to prevent stringing.'
    },
    'wms': {
        title: 'Warehouse Management System',
        img: 'PHOTOS/warehouse.png',
        github: '#',
        problem: 'Inefficient manual tracking of inventory across multi-level racks.',
        design: 'Built a sensor-integrated network that communicates with a Python backend to dynamically update inventory locations.',
        challenges: 'Handling concurrent sensor data without dropping packets and building an intuitive UI for warehouse staff.'
    },
    'scara': {
        title: 'Sorting SCARA Robotic Arm',
        img: 'PHOTOS/scara.png',
        github: '#',
        problem: 'Slow manual sorting of variable-sized components on a conveyor line.',
        design: 'Engineered a 4-axis SCARA robot using C++ kinematics logic to quickly sort items based on visual camera inputs.',
        challenges: 'Minimizing end-effector vibration during rapid deceleration phases and tuning the inverse kinematics calculations.'
    },
    'humanoid': {
        title: 'Humanoid Robot',
        img: 'PHOTOS/humanoid.png',
        github: '#',
        problem: 'Developing a stable bipedal walking gait for navigating uneven terrain.',
        design: 'Modeled complex joint assemblies in SolidWorks, then applied zero-moment point (ZMP) control algorithms in Python.',
        challenges: 'Managing power draw during continuous motion and ensuring mechanical rigidity without adding excessive weight.'
    },
    'agro-bot': {
        title: 'Agriculture Spraying Robot',
        img: 'PHOTOS/agribot.png',
        github: '#',
        problem: 'Excessive pesticide use and labor costs in row-crop farming.',
        design: 'Created a ROS-based mobile platform equipped with IoT sensors to detect plant health and spray specific targets autonomously.',
        challenges: 'Terrain traversability in muddy conditions and optimizing battery life while running heavy vision processing.'
    },
    'quadcopter': {
        title: 'Quadcopter',
        img: 'PHOTOS/drone.png',
        github: '#',
        problem: 'Requirement for a stable aerial platform to test custom payloads.',
        design: 'Performed CFD analysis on propeller shapes. Built custom carbon fiber frame to maximize strength-to-weight ratio.',
        challenges: 'PID tuning the flight controller to handle sudden wind gusts and asymmetric payload weight distribution.'
    },
    // DRAIC
    'draic-line': {
        title: 'Line Follower Bot',
        img: 'PHOTOS/B2.jpg',
        github: '#',
        description: ''
    },
    'draic-obs': {
        title: 'Obstacle Avoidance Bot',
        img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&auto=format&fit=crop&q=60',
        github: '#',
        description: ''
    },
    'draic-spider': {
        title: 'Spider Bot',
        img: 'https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?w=500&auto=format&fit=crop&q=60',
        github: '#',
        description: ''
    },
    'draic-chassis': {
        title: 'Competition Bot Chassis Design',
        img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&auto=format&fit=crop&q=60',
        github: '#',
        description: ''
    },
    // 3D Wizard
    '3d-lf3d': {
        title: "LF3D (India's Largest 3D Printer)",
        img: 'PHOTOS/wiz05.jpg',
        images: ['PHOTOS/wiz01.jpeg', 'PHOTOS/wiz02.jpeg', 'PHOTOS/wiz03.jpeg', 'PHOTOS/wiz04.jpg', 'PHOTOS/wiz06.jpg'],
        github: '#',
        description: 'Performed calibration of motors in x, y, z axes and R&D on extruder nozzle, upgrading from 3mm to 5mm. The printer volume is massive: 2 x 2 x 1.5 meters.\n\nRoles included designing casing for the material filler, tuning the extruder mechanism, and performing precise PID temperature calibration.\n\nProducts Manufactured:\n- Chairs\n- Large missile parts (nose & tail sections)\n- Lamps\n- Decorative walls'
    },
    '3d-adani': {
        title: 'Adani Defence & Aerospace Prototyping',
        img: '  PHOTOS/adani%20missiles.jpg',
        github: '#',
        highlight: 'Worked on real defence systems used for exhibition and prototyping',
        tools: ['SolidWorks', '3D Printing', 'FRP Fabrication', 'Surface Finishing', 'Laser Cutting'],
        description: `Adani Defence & Aerospace – Design & Prototyping Contribution\n\nContributed to the design and manufacturing of high-fidelity scaled prototypes of advanced defence systems, including ARKA, ARKA Launcher, Crosshair System, Gaurav, NASM, Rudram-1, Rudram-2, TARA, ULMER, ULPGM, UUV platforms, and VSHORADS.\n\nWorked on precision CAD modeling using SolidWorks, followed by fabrication through additive manufacturing (3D printing) and FRP processes to achieve complex geometries. Performed advanced surface finishing and applied matte grey coatings to ensure defence-grade visual accuracy and presentation quality.\n\nAdditionally, supported the team at Aero Show as part of the design and prototyping group, contributing to the exhibition and demonstration of these systems.`
    },
    '3d-mil': {
        title: 'MIL Khadki Prototyping',
        img: 'PHOTOS/mil.jpg',
        github: '#',
        highlight: 'Developed Pinaka Launcher prototypes using FDM 3D printing and created 9mm & 7mm calibre bullet models via SLA manufacturing. Prototypes showcased at Aero India 2025, Yelahanka Air Base.',
        tools: ['FDM 3D Printing', 'SLA (Stereolithography)', 'CAD Modeling (SolidWorks)', 'Surface Finishing & Post-processing'],
        description: 'Worked on prototyping projects for Munitions India Limited, focusing on the development of high-precision defence models for exhibition purposes. Responsibilities included CAD-based design support, fabrication using additive manufacturing techniques, and applying finishing processes to achieve accurate geometry and presentation-quality output. These models were part of the defence showcase at Aero India 2025.'
    },
    '3d-metabo': {
        title: 'Metabo Drill Casing',
        img: 'PHOTOS/M01.jpg',
        github: '#',
        images: ['PHOTOS/M02.jpg', 'PHOTOS/M03.jpg'],
        description: ''
    },
    '3d-godrej': {
        title: 'Godrej Furniture Prototyping',
        img: 'PHOTOS/wiz04 .jpg',
        description: ''
    },
    // ORO
    'oro-pranav': {
        title: 'Pranav Vikas (Radiator Gauges & Workstation)',
        img: 'PHOTOS/wiz04 .jpg',
        github: '#',
        description: ''
    },
    'oro-wadhokar': {
        title: 'Wadhokar Group Fixtures',
        img: 'PHOTOS/wiz04 .jpg',
        github: '#',
        description: ''
    },
    'oro-dana': {
        title: 'DANA Differential Gearbox Tray',
        img: 'https://images.unsplash.com/photo-1534035652614-2eaf4e0281b3?w=500&auto=format&fit=crop&q=60',
        github: '#',
        description: ''
    },
    'oro-inoxpa': {
        title: 'INOXPA Robotic Cell & SPM',
        img: 'https://images.unsplash.com/photo-1563242093-ae13768fb3a0?w=500&auto=format&fit=crop&q=60',
        github: '#',
        description: ''
    },
    // Volunteering
    'bits-volunteering': {
        title: 'BITS Pilani APOGEE Tech Event',
        img: 'PHOTOS/B1.jpg',
        images: ['PHOTOS/B2.jpg', 'PHOTOS/B3.jpg', 'PHOTOS/B4.jpg', 'PHOTOS/B5.jpg', 'PHOTOS/B6.jpg', 'PHOTOS/B7.jpg'],
        github: '#',
        description: 'We are members of BotMakers Private Limited, a Pune company, for the tech event of APOGEE event of BITS Pilani.'
    }
};

// Modal Logic
const modal = document.getElementById('project-modal');
const modalClose = document.getElementById('modal-close');
const modalBody = document.getElementById('modal-body');
const detailBtns = document.querySelectorAll('.details-btn');

detailBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const projectId = btn.getAttribute('data-project');
        const data = projectData[projectId];

        if (data) {
            modalBody.innerHTML = `
                <div class="full-page-modal-content">
                    <div class="modal-banner">
                        <img src="${data.img}" alt="${data.title}">
                    </div>
                    <div class="modal-text-content">
                        <h2>${data.title}</h2>
                        ${data.github && data.github !== '#' ? `<a href="${data.github}" class="btn btn-primary" target="_blank" style="margin-bottom: 2rem;"><i class="fab fa-github"></i> View Source Code on GitHub</a>` : ''}
                        
                        ${data.highlight ? `
                        <div class="modal-section highlight-box" style="background: rgba(59, 130, 246, 0.1); border-left: 4px solid var(--accent); padding: 1rem 1.5rem; border-radius: 0 8px 8px 0; margin-bottom: 2rem;">
                            <h4 style="margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;"><i class="fas fa-star accent"></i> Highlight</h4>
                            <p style="font-weight: 600; font-size: 1.05rem; color: var(--text-main); margin-bottom: 0;">"${data.highlight}"</p>
                        </div>` : ''}

                        ${data.tools ? `
                        <div class="modal-section" style="margin-bottom: 2rem;">
                            <h4 style="margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;"><i class="fas fa-tools accent"></i> Tools Used</h4>
                            <div class="tech-stack">
                                ${data.tools.map(t => `<span style="background: rgba(59, 130, 246, 0.1); color: var(--accent); padding: 0.4rem 0.8rem; border-radius: 4px; font-family: var(--ff-head); font-weight: 600; font-size: 0.9rem;">${t}</span>`).join('')}
                            </div>
                        </div>` : ''}

                        ${data.description ? `
                        <div class="modal-section" style="margin-bottom: 2rem;">
                            <h4 style="margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;"><i class="fas fa-align-left accent"></i> Description</h4>
                            <p style="white-space: pre-line; line-height: 1.8;">${data.description}</p>
                        </div>` : ''}

                        ${data.images ? `
                        <div class="modal-section" style="margin-bottom: 2rem;">
                            <h4 style="margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;"><i class="fas fa-images accent"></i> Gallery</h4>
                            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
                                ${data.images.map(src => `<img src="${src}" class="gallery-img-hover" alt="Gallery Image" style="width: 100%; border-radius: 8px; object-fit: cover; aspect-ratio: 4/3; border: 1px solid rgba(255,255,255,0.1);">`).join('')}
                            </div>
                        </div>` : ''}

                        ${data.problem ? `
                        <div class="modal-section">
                            <h4>Problem Statement</h4>
                            <p>${data.problem}</p>
                        </div>` : ''}
                        
                        ${data.design ? `
                        <div class="modal-section">
                            <h4>Design Approach</h4>
                            <p>${data.design}</p>
                        </div>` : ''}
                        
                        ${data.challenges ? `
                        <div class="modal-section">
                            <h4>Challenges</h4>
                            <p>${data.challenges}</p>
                        </div>` : ''}
                    </div>
                </div>
            `;
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        }
    });
});

modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto'; // Restore scrolling
});

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Form Submission Prevention (Placeholder)
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! This is a demo form, so no actual email was sent.');
});
