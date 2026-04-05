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
        title: '🚀 3D Printer',
        img: 'PHOTOS/3d printer.png',
        github: '#',
        description: `Designed and developed a functional 3D printer system with focus on mechanical structure, motion control, and precision. Worked on frame design, axis movement mechanisms, and integration of components to achieve stable and accurate printing performance.

<strong style="color: var(--accent); font-size: 1.2em;">Design Iterations</strong>

🔹 <strong style="color: var(--accent); font-size: 1.1em;">Iteration 1</strong> – Basic Frame Using Square Aluminium Pipes
Approach:
Used plain square aluminium pipes as the main frame to keep the system cost-effective. Components were mounted using drilled connections between pipes.

<strong>⚠️ Challenges</strong>
- Poor fitting accuracy due to manual drilling
- Misalignment between mounting plates and frame
- Uneven drilling leading to structural inconsistency
- Resulted in low precision and poor print quality

<strong>✅ Solutions / Learnings</strong>
- Identified need for standardized mounting interfaces
- Understood importance of frame rigidity and alignment in printing accuracy

🔹 <strong style="color: var(--accent); font-size: 1.1em;">Iteration 2</strong> – Improved Frame with 3D Printed Brackets
Approach:
Introduced custom 3D printed brackets and proper mounting components to improve alignment and structural integrity of the frame.

<strong>✅ Improvements</strong>
- Achieved better alignment and fitting accuracy
- Improved frame stability and rigidity
- Enhanced print precision and surface quality
- Reduced dependency on manual drilling errors

<strong>🛠️ Key Upgrade</strong>
Custom-designed 3D printed joints and brackets for precise assembly`,
        tools: ['SolidWorks', '3D Printing Components', 'Stepper Motors & Motion Systems', 'Electronics like stepper driver, Arduino Mega']
    },
    'wms': {
        title: '🏭 Warehouse Management System',
        img: 'PHOTOS/warehouse.png',
        github: '#',
        description: `Developed a concept and prototype system for automated warehouse operations, focusing on material handling, sorting, and efficient storage flow. Emphasized system layout, mechanism design, and automation logic for improved operational efficiency.

<strong style="color: var(--accent); font-size: 1.2em;">Design Iterations</strong>

🔹 <strong style="color: var(--accent); font-size: 1.1em;">Iteration 1</strong> – Direct Drive Storage System
Approach:
Designed a cylindrical storage system directly mounted on a NEMA 17 stepper motor shaft, where the motor was responsible for handling both rotation and load.

<strong>⚠️ Challenges</strong>
- Excessive radial and thrust load on motor shaft
- Motor overheating during operation
- Insufficient torque to handle full load
- Reduced system reliability and performance

<strong>✅ Solutions / Learnings</strong>
- Identified need for load distribution instead of direct mounting
- Understood importance of torque amplification and mechanical support

🔹 <strong style="color: var(--accent); font-size: 1.1em;">Iteration 2</strong> – Gear-Assisted & Automated System
Approach:
Improved the system by integrating a planetary gearbox to handle load and increase torque. Additionally, introduced a Cartesian pick-and-place robot for efficient material handling.

<strong>✅ Improvements</strong>
- Torque increased using planetary gearbox → smoother operation
- Reduced load on motor shaft → improved durability
- Eliminated overheating issue
- Added automation with Cartesian robot for better efficiency
- Improved overall system performance and scalability

<strong>🛠️ Key Upgrades</strong>
- Planetary Gearbox Integration
- Cartesian Pick-and-Place Mechanism`,
        tools: ['CAD Design (SolidWorks)', 'Automation Concepts', 'Multi-Mechanism System']
    },
    'scara': {
        title: '🤖 Sorting SCARA Robotic Arm (Design & Development)',
        img: 'PHOTOS/scara.png',
        github: '#',
        images: ['PHOTOS/scara01.png', 'PHOTOS/scara02.jpg'],
        gallerySubtitle: 'Iteration 1 Photos',
        description: `Designed and developed a SCARA robotic arm for sorting applications with focus on precision, repeatability, and efficient motion planning. Iterated multiple design versions to optimize reach, payload handling, and smooth operation.

<strong style="color: var(--accent); font-size: 1.2em;">“From Heavy Inefficient System → Lightweight Optimized Mechanism”</strong>

🔹 <strong style="color: var(--accent); font-size: 1.1em;">Iteration 1</strong> – Initial Kinematic Design
Approach:
Designed the SCARA robot based on correct forward and inverse kinematics calculations. Integrated planetary gearbox, stepper motors, bearings, and prismatic joint mechanism (rack & pinion) for motion.

<strong>⚠️ Challenges</strong>
- Improper weight distribution due to heavy components on moving arm (planetary gearbox + bearings + motors + servo)
- Excessive moving mass → reduced efficiency and required high torque
- Motors mounted on arm increased load and inertia
- High friction in 3D printed gears due to lack of tolerance
- Tight gear fit → inefficient motion and energy loss
- Rack and pinion system lacked stability under load

<strong>✅ Learnings</strong>
- Importance of reducing moving mass
- Need for proper tolerance in gear design
- Understanding torque vs load relationship in robotic arms

🔹 <strong style="color: var(--accent); font-size: 1.1em;">Iteration 2</strong> – Optimized Lightweight & Efficient Design
Approach:
Redesigned the system focusing on lightweight structure, better power transmission, and improved stability. Replaced heavy mechanisms with efficient alternatives.

<strong>✅ Improvements</strong>
- Lightweight 3D printed links with optimized strength
- Replaced gearbox with GT2 pulley and belt system → reduced complexity & weight
- Motors fixed on base platform → minimized moving mass
- Strategic motor placement opposite to arm for counterbalancing
- Replaced rack & pinion with lead screw mechanism → improved precision and self-locking capability
- Reduced friction and improved motion efficiency

<strong>🛠️ Key Upgrades</strong>
- Belt Drive System (GT2 Pulley)
- Lead Screw for Prismatic Motion
- Structural Optimization of Links
- Static Motor Mounting`,
        tools: ['SolidWorks', 'Servo Motors as Actuators', 'Arduino Mega (control system)', 'Mechanism & Kinematics Design', 'Stepper Motors', 'Pulley Belt system']
    },
    'humanoid': {
        title: '🧠 Humanoid Robot (Human Assistance Bot)',
        img: 'PHOTOS/humanoid.png',
        github: '#',
        description: `Developed a humanoid robot capable of basic human assistance tasks with integrated vision and control systems. Designed the mechanical structure and implemented movement using DC motors, along with arm articulation using servo motors. Integrated vision using Raspberry Pi camera and HMI interface for interaction.

<strong style="color: var(--accent); font-size: 1.2em;">Design Iterations</strong>

🔹 <strong style="color: var(--accent); font-size: 1.1em;">Iteration 1</strong> – Integrated Functional Design
Approach:
Designed and developed a humanoid robot with focus on structural integration and functional movement. Custom joints were created using 3D printed parts, while the base platform was fabricated using CNC laser-cut acrylic for precise component mounting.

<strong>⚠️ Challenges</strong>
- Achieving proper alignment of joints after 3D printing
- Secure mounting of multiple components (motors, Raspberry Pi, display, sensors)
- Maintaining structural stability with mixed materials (acrylic + 3D printed parts)
- Space management for electronics and wiring

<strong>✅ Solutions</strong>
- Designed custom-fit joints for accurate motion and assembly
- Used CNC laser-cut acrylic base for precise and rigid mounting
- Optimized layout for clean component placement (Raspberry Pi, HMI display, sensors)
- Ensured proper integration of ultrasonic and IR sensors for functionality`,
        tools: ['Raspberry Pi 4', 'Raspberry Pi Camera', '4 DC Johnson Motors (Locomotion)', 'Ultrasonic Sensor', 'Servo Motors (Arms & Shoulder \u2013 2 per hand)', '7-inch Raspberry Pi HMI Display']
    },
    'agro-bot': {
        title: '🌱 AI Agriculture Spraying Bot',
        img: 'PHOTOS/agribot.png',
        github: '#',
        description: 'Designed an intelligent agriculture robot for automated spraying of fertilizers and insecticides. Integrated vision-based detection to identify target areas and optimize spraying, improving efficiency and reducing manual effort in farming operations.',
        tools: ['Vision Camera', 'Image Processing Basics (opencv)', 'Spraying Mechanism', 'Robotics Integration']
    },
    'quadcopter': {
        title: '🚁 Quadcopter',
        img: 'PHOTOS/drone.png',
        github: '#',
        description: `Designed and developed a quadcopter with focus on flight stability, control systems, and lightweight structure. Integrated sensors and microcontroller to manage flight dynamics and achieve controlled movement.

<strong style="color: var(--accent); font-size: 1.2em;">Design Evolution</strong>

🔹 <strong style="color: var(--accent); font-size: 1.1em;">Iteration 1</strong> – PCB-Based Chassis
Approach:
Used DZERO PCB as structural chassis with directly soldered components and 3D printed motor mounts.

✅ Advantages
- Very lightweight → better initial lift
- Compact design
- Simple and fast to build
- Good for quick prototyping and testing

❌ Limitations
- Fragile structure (PCB not meant for load-bearing)
- Difficult to repair (direct soldering)
- Poor vibration damping → affects stability
- Limited flexibility for component placement

🔹 <strong style="color: var(--accent); font-size: 1.1em;">Iteration 2</strong> – TPU 3D Printed Chassis
Approach:
Designed a custom TPU-based flexible chassis for improved dynamics, component placement, and mounting.

✅ Advantages
- Better vibration absorption → improved flight stability
- Flexible yet durable (TPU)
- Organized component layout
- Improved mounting for battery and motors
- Easier maintenance and upgrades

❌ Limitations
- Slightly heavier than PCB setup
- Longer design and fabrication time
- Requires tuning for optimal rigidity

<strong style="color: var(--accent); font-size: 1.2em;">Challenges & Solutions</strong>

⚠️ High vibration affecting flight stability
→ Solved by switching from rigid PCB chassis to flexible TPU frame

⚠️ Component failure due to direct soldering
→ Improved design with modular placement in iteration 2

⚠️ Poor weight distribution
→ Redesigned layout for balanced center of gravity`,
        tools: ['Solidworks custom chassis (petg)', 'ESP32', 'Coreless Motors', 'MPU6050 (IMU Sensor)', 'Flight Control Logic', 'Embedded Programming']
    },
    // DRAIC
    'draic-line': {
        title: 'Line Follower Bot',
        img: 'PHOTOS/B2.jpg',
        github: '#',
        description: 'Designed and developed a fully functional line follower robot capable of autonomously tracking a predefined path using sensor-based feedback. Implemented control logic to ensure smooth and accurate movement along the path.',
        tools: ['IR Sensors', 'Arduino', 'N20 DC Motors & Motor Driver', 'Embedded Programming']
    },
    'draic-obs': {
        title: 'Obstacle Avoidance Bot',
        img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&auto=format&fit=crop&q=60',
        github: '#',
        description: 'Built an autonomous robot capable of detecting and avoiding obstacles using ultrasonic sensing. The system dynamically adjusts its path in real-time, demonstrating basic decision-making and navigation capabilities.',
        tools: ['Ultrasonic Sensor', 'Arduino', 'Motor Driver (L298N)', 'DC Motors', 'Embedded Programming']
    },
    'draic-spider': {
        title: 'Spider Bot',
        img: 'https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?w=500&auto=format&fit=crop&q=60',
        github: '#',
        description: 'Designed and developed a six-legged spider robot with coordinated servo-based motion for walking. Focused on gait mechanism design, stability, and synchronized control of multiple actuators for terrain movement.',
        tools: ['Servo Motors (MG995 \u2013 12 units)', 'Arduino / Servo Shield', 'Mechanical Linkage Design', 'Embedded Programming']
    },
    'draic-chassis': {
        title: 'Competition Bot Chassis Design',
        img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&auto=format&fit=crop&q=60',
        github: '#',
        description: 'Designed and developed multiple robot chassis and mechanisms for various robotics competitions including line follower, rescue olympics, roborace, and robosoccer. Focused on creating robust, lightweight, and task-specific designs using different materials and fabrication methods.\n\nWorked on multi-material chassis development using MS, PLA+ (3D printing), and acrylic to suit different competition requirements. Additionally, designed and implemented various gripper mechanisms for object handling and task execution.',
        tools: ['CAD Design (SolidWorks)', 'MS Fabrication', '3D Printing (PLA+)', 'CNC Laser Cutting (Acrylic)', 'Mechanism Design (Grippers)', 'Robotics Integration']
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
        title: 'Metabo \u2013 Hand Drill Display Casing Design',
        img: 'PHOTOS/M01.jpg',
        github: '#',
        images: ['PHOTOS/M02.jpg', 'PHOTOS/M03.jpg'],
        tools: ['SolidWorks', 'FDM 3D Printing', 'Putty Finished', 'Paint Work'],
        description: 'Redesigned the casing of a hand drill to integrate a top-mounted display. Developed multiple iterations based on screen size and usability, ensuring proper fit and structural compatibility. Prototypes were manufactured and tested using rapid prototyping methods.'
    },
    '3d-godrej': {
        title: 'Godrej Furniture Prototyping',
        img: 'PHOTOS/wiz04 .jpg',
        description: ''
    },
    // ORO
    'oro-pranav': {
        title: '🏭 Industrial Automation & Fixture Design – Pranav Vikas / ORO Robotics',
        img: 'PHOTOS/ORO04.jpeg',
        github: '#',
        images: ['PHOTOS/ORO05.jpeg'],
        description: `Designed and developed precision gauges for dimensional inspection of automotive radiator components (Bajaj vehicles) using multiple manufacturing processes. The system integrated mechanical design with automation using proximity sensors, Mitsubishi PLC, and HMI for functional inspection workflows.

Additionally, worked on tray assembly and pick-and-place structures for handling radiators during nickel electroplating processes, ensuring efficient dipping and material flow. Also designed bobbin systems for aluminium wire winding, focusing on structural integrity and smooth operation.`,
        tools: ['CAD Design (SolidWorks)', 'VMC & CNC Machining', 'Milling, Grinding, Drilling, M1TR', 'Surface Treatments: Black Anodizing, Zinc Coating', 'Proximity Sensors', 'Automation & Fixture Design']
    },
    'oro-wadhokar': {
        title: 'Wadhokar Group Fixtures',
        img: 'PHOTOS/ORO12.jpeg',
        github: '#',
        description: 'Worked on the design and development of panel checkers, welding fixtures, and inspection fixtures for automotive body components manufactured for Tata and Mahindra. Ensured required tolerances and dimensional accuracy for quality inspection and assembly processes. Focused on robust fixture design using suitable materials for durability and precision in industrial applications.',
        tools: ['CAD Design (SolidEdge)', 'Fixture & Jig Design', 'MS (Mild Steel) & CIBA Materials', 'Welding Fixture Design', 'Inspection & Tolerance Analysis', 'Manufacturing Processes (Machining & Fabrication)', 'CMM Testing']
    },
    'oro-dana': {
        title: 'DANA Differential Gearbox Oil Tray',
        img: 'PHOTOS/ORO03.jpeg',
        github: '#',
        description: 'Designed and developed stainless steel oil tray systems for dipping differential gearboxes during processing. The design was adapted to accommodate different gearbox sizes, ensuring proper fit, handling, and efficient dipping operation. Focused on durability, corrosion resistance, and ease of use in an industrial environment.',
        tools: ['CAD Design (SolidEdge)', 'Sheet Metal Design', 'Stainless Steel (SS) Fabrication', 'Dimensional Adaptability & Fitment Design']
    },
    'oro-inoxpa': {
        title: 'INOXPA Robotic Cell & SPM',
        img: 'PHOTOS/INOXPA.png',
        github: '#',
        description: 'Designed a concept for an automated welding SPM integrated with a robotic cell for handling cylindrical MS components. The system performs rotational welding by holding the part in a motor-driven chuck while the welding gun remains fixed.\n\nA robotic arm is used for pick-and-place operations from the conveyor to the welding station and back. Post-welding, the heated components are transferred to an output section equipped with an industrial chiller system to ensure safe handling and cooling. The design focuses on automation, efficiency, and continuous production flow.',
        tools: ['CAD Design (SolidEdge)', 'SPM (Special Purpose Machine) Design', 'Robotic Cell Integration', 'Motor-Driven Chuck Mechanism', 'Conveyor System Design', 'Industrial Cooling System (Chiller Integration)']
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
                            ${data.gallerySubtitle ? `<p style="color: var(--accent); font-weight: 600; margin-bottom: 1rem; font-size: 1.1em;">🔹 ${data.gallerySubtitle}</p>` : ''}
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
