/* ===================================================================
   CAMPUS CONNECT — STUDENT DIRECTORY JS
   Real-time search, filters, modal popups, posts panel, collaborate
   =================================================================== */

/* ──────────────────────────────────────
   DATA
────────────────────────────────────── */
const students = [
  {
    id: "s1",
    name: "Snehangshu Das",
    year: "B.Tech CSE · AIT Pune '27",
    yearNum: "1st",
    branch: "Computer Science",
    accent: "linear-gradient(90deg,#6366f1,#8b5cf6)",
    online: true,
    postCount: 12, likeCount: 340, followers: 128,
    bio: "Conducting reinforcement learning benchmarking for multilingual models. Collaborating with the NLP lab to publish results at a national conference. Always on the lookout for the next big idea to prototype.",
    achievements: "🏆 Best Paper Award, AIT Tech Fest 2024 · 🥈 Runner-up, Smart India Hackathon 2023",
    hobbies: "♟ Chess · 🎨 Sketching · 📚 Sci-fi novels · 🎵 Lo-fi music",
    projects: "Multilingual chatbot · Campus event predictor · AI code reviewer",
    skills: ["HTML", "CSS", "JavaScript", "Python", "PyTorch"],
    clubs: ["OSS Club", "GDG", "CP Club"],
    email: "snehangshu.d@ait.edu",
    github: "github.com/snehangshu",
    linkedin: "linkedin.com/in/snehangshu",
    instagram: "instagram.com/snehangshu.dev",
    x: "x.com/snehangshu_d",
    posts: [
      { id:"p1", tag:"🏆 Achievement", image:"https://picsum.photos/seed/nlp2024/600/400", text:"Just submitted our ML paper to the NLP national conference! 🎉 Months of late nights finally paid off. Huge thanks to the lab team.", time:"2h ago", likes:48, liked:false, shares:5, collabRequested:false, comments:[{user:"Priya S.",text:"Congrats!! You deserve this 🔥",time:"1h ago"},{user:"Rohan P.",text:"Incredible work bro. Let me know if you need reviewers!",time:"45m ago"}] },
      { id:"p2", tag:"💻 Recent Work", image:"https://picsum.photos/seed/predict42/600/400", text:"Built a campus event predictor using LSTM + historical data. Predicts footfall for events with 87% accuracy. Open sourcing it soon!", time:"3 days ago", likes:92, liked:false, shares:18, collabRequested:false, comments:[{user:"Arjun M.",text:"This is so cool! Can I contribute?",time:"2 days ago"},{user:"Ananya K.",text:"87% is insane. Post the repo link!",time:"2 days ago"}] },
      { id:"p3", tag:"🏆 Achievement", image:null, text:"Won a chess tournament at the college fest today ♟ Nothing like a good game to reset after a week of debugging.", time:"1 week ago", likes:75, liked:false, shares:3, collabRequested:false, comments:[{user:"Ishita D.",text:"King energy only 👑",time:"6 days ago"}] }
    ]
  },
  {
    id: "s2",
    name: "Priya Sharma",
    year: "B.Tech IT · AIT Pune '26",
    yearNum: "2nd",
    branch: "Information Technology",
    accent: "linear-gradient(90deg,#ec4899,#f43f5e)",
    online: false,
    postCount: 8, likeCount: 215, followers: 94,
    bio: "Passionate about full-stack web development and open-source software. Organising workshops for freshers to help them break into tech. Loves clean code, good coffee, and dark mode everything.",
    achievements: "🥇 1st Place, Web-a-Thon AIT 2024 · 🌟 Open Source Contributor of the Month",
    hobbies: "☕ Coffee brewing · 📸 Photography · 🧗 Bouldering · 🎧 Podcasts",
    projects: "Hostel management portal · Notes-sharing platform · Event ticketing PWA",
    skills: ["React", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL"],
    clubs: ["OSS Club", "GDG"],
    email: "priya.s@ait.edu",
    github: "github.com/priyasharma",
    linkedin: "linkedin.com/in/priyasharma",
    instagram: "instagram.com/priya.codes",
    telegram: "t.me/priya_dev",
    posts: [
      { id:"p4", tag:"💻 Recent Work", image:"https://picsum.photos/seed/webhack2024/600/400", text:"Our hostel management portal just crossed 1,000 daily active users! Built with React + Supabase. Thank you to everyone who tested early alphas.", time:"1 day ago", likes:110, liked:false, shares:22, collabRequested:false, comments:[{user:"Snehangshu D.",text:"Huge milestone Priya! UI is so clean.",time:"20h ago"}] },
      { id:"p5", tag:"🎪 Club Event", image:"https://picsum.photos/seed/workshopait/600/400", text:"Conducted a Web Dev 101 workshop for 80+ freshers today! The energy in the room was unbelievable. Next up: React fundamentals.", time:"4 days ago", likes:85, liked:false, shares:14, collabRequested:false, comments:[{user:"Arjun M.",text:"Freshers loved it, great job!",time:"3 days ago"}] }
    ]
  },
  {
    id: "s3",
    name: "Arjun Mehta",
    year: "B.Tech E&TC · AIT Pune '25",
    yearNum: "3rd",
    branch: "Electronics & Comm.",
    accent: "linear-gradient(90deg,#10b981,#06b6d4)",
    online: true,
    postCount: 5, likeCount: 160, followers: 76,
    bio: "Hardware tinkerer by day, embedded systems enthusiast by night. Working on IoT solutions for campus sustainability. You can usually find me in the robotics lab surrounded by wires and soldering irons.",
    achievements: "🤖 Best IoT Project, Techfest 2025 · 🎵 Performed at AIT Cultural Fest",
    hobbies: "🎵 Music production · 🤖 Robotics · 🏃 Running",
    projects: "Smart Campus Energy Monitor · Gesture-controlled robot · Weather station IoT",
    skills: ["C++", "Arduino", "Python", "Raspberry Pi", "MQTT"],
    clubs: ["OSS Club", "Robotics Club", "CEAR"],
    email: "arjun.m@ait.edu",
    github: "github.com/arjunmehta",
    linkedin: "linkedin.com/in/arjunmehta",
    posts: [
      { id:"p6", tag:"💻 Recent Work", image:"https://picsum.photos/seed/iot2025/600/400", text:"Our Smart Campus Energy Monitor went live today in Lab Block A! 🔌 Reduces energy waste by detecting idle equipment automatically. Built with Raspberry Pi + MQTT.", time:"5 days ago", likes:62, liked:false, shares:11, collabRequested:false, comments:[{user:"Snehangshu D.",text:"This is so practical. Props! 🙌",time:"4 days ago"},{user:"Priya S.",text:"Open source it!!!",time:"4 days ago"}] }
    ]
  },
  {
    id: "s4",
    name: "Ananya Kulkarni",
    year: "B.Tech Mech · AIT Pune '27",
    yearNum: "1st",
    branch: "Mechanical Eng.",
    accent: "linear-gradient(90deg,#f59e0b,#ef4444)",
    online: false,
    postCount: 15, likeCount: 520, followers: 210,
    bio: "Design thinking advocate bridging engineering and human experience. Working on sustainable mechanical designs that are as beautiful as they are functional. Photography and art keep me sane.",
    achievements: "🎨 Best Design Award, Techfest 2024 · 🏅 National Level Robotics Finalist",
    hobbies: "📷 Photography · 🎨 Watercolour painting · 🌿 Sustainability projects",
    projects: "Eco-bot (solar-powered campus cleanup robot) · Ergonomic campus chair redesign",
    skills: ["SolidWorks", "MATLAB", "Figma", "AutoCAD", "Fusion 360"],
    clubs: ["Design Club", "Robotics Club"],
    email: "ananya.k@ait.edu",
    github: "github.com/ananyak",
    linkedin: "linkedin.com/in/ananyakulkarni",
    posts: [
      { id:"p7", tag:"💻 Recent Work", image:"https://picsum.photos/seed/ecobot99/600/400", text:"Eco-bot picked up 3kg of litter from the campus garden today! 🌱🤖 Our solar-powered little hero. Phase 2 coming soon — autonomous path planning!", time:"2 days ago", likes:187, liked:false, shares:34, collabRequested:false, comments:[{user:"Rohan P.",text:"This is genuinely impactful work 🌍",time:"1 day ago"},{user:"Arjun M.",text:"Love the sustainability angle! Let me know if you need help with path planning algo.",time:"22h ago"}] },
      { id:"p8", tag:"🏆 Achievement", image:"https://picsum.photos/seed/thesis55/600/400", text:"Submitted my design thesis today — 'Human-Centred Engineering for Campus Spaces.' Three months of research, interviews, and prototyping. Feels surreal. 🎓", time:"1 week ago", likes:220, liked:false, shares:19, collabRequested:false, comments:[{user:"Snehangshu D.",text:"Proud of you! 🎉",time:"6 days ago"},{user:"Ishita D.",text:"Can't wait to read it!",time:"6 days ago"}] }
    ]
  },
  {
    id: "s5",
    name: "Rohan Patil",
    year: "B.Tech CSE · AIT Pune '26",
    yearNum: "2nd",
    branch: "Computer Science",
    accent: "linear-gradient(90deg,#0ea5e9,#6366f1)",
    online: true,
    postCount: 20, likeCount: 870, followers: 345,
    bio: "ML researcher focused on NLP and vision models. Contributing to open-source AI tools and mentoring juniors in the AI Club. Training models, chasing gradients, occasionally sleeping before deadlines.",
    achievements: "🥇 Google Hack4Change Winner 2024 · 📜 Research paper accepted at ICML Workshop",
    hobbies: "🎮 Gaming · 🏸 Badminton · 🍕 Amateur chef",
    projects: "CampusGPT — AIT-specific chatbot · Vision-based attendance system",
    skills: ["PyTorch", "TensorFlow", "Python", "Hugging Face", "FastAPI"],
    clubs: ["GDG", "AI Club", "CP Club"],
    email: "rohan.p@ait.edu",
    github: "github.com/rohanpatil",
    linkedin: "linkedin.com/in/rohanpatil",
    posts: [
      { id:"p9", tag:"🏆 Achievement", image:"https://picsum.photos/seed/icml2024/600/400", text:"Our paper got accepted at the ICML Workshop! 🎉 'Efficient Fine-tuning of LLMs for Low-Resource Indian Languages.' Thanks to everyone who reviewed drafts at 2am 😅", time:"6h ago", likes:312, liked:false, shares:67, collabRequested:false, comments:[{user:"Snehangshu D.",text:"ICML!! You're insane bro 🔥🔥🔥",time:"5h ago"},{user:"Priya S.",text:"Absolutely deserved. 🏆",time:"4h ago"},{user:"Ananya K.",text:"I'm so proud of you!! 🎉",time:"3h ago"}] },
      { id:"p10", tag:"💻 Recent Work", image:"https://picsum.photos/seed/gpt500/600/400", text:"CampusGPT now has 500 active users! 🤯 It's been 3 months since I released it as a side project. Crazy how far this has come. Next up — adding faculty Q&A mode.", time:"3 days ago", likes:298, liked:false, shares:45, collabRequested:false, comments:[{user:"Arjun M.",text:"Daily user here. It's genuinely useful!",time:"2 days ago"},{user:"Ishita D.",text:"Adding faculty Q&A is going to be 🔥",time:"2 days ago"}] },
      { id:"p11", tag:"💻 Recent Work", image:null, text:"Vision-based attendance marking went live for 3 classes today. Zero manual roll-calls. The professors love it 😄 Will open-source once we finish the privacy audit.", time:"1 week ago", likes:183, liked:false, shares:28, collabRequested:false, comments:[{user:"Priya S.",text:"Future of edtech right here!",time:"6 days ago"}] }
    ]
  },
  {
    id: "s6",
    name: "Ishita Desai",
    year: "B.Tech IT · AIT Pune '28",
    yearNum: "1st",
    branch: "Information Technology",
    accent: "linear-gradient(90deg,#a855f7,#ec4899)",
    online: false,
    postCount: 7, likeCount: 188, followers: 89,
    bio: "Cybersecurity nerd and CTF competitor. Believes in ethical hacking, open standards, and that every wall has a door. Linux from scratch is my hobby. If you break it, you better fix it.",
    achievements: "🏴‍☠️ Top 10, National CTF Championship 2024 · 🔐 CVE contributor",
    hobbies: "🔐 CTF competitions · 🎸 Guitar · 🍜 Ramen connoisseur",
    projects: "PatchWatch — CVE monitoring tool · Secure campus Wi-Fi audit",
    skills: ["Linux", "Kali Linux", "Python", "Wireshark", "Burp Suite"],
    clubs: ["OSS Club", "CyberSec Club"],
    email: "ishita.d@ait.edu",
    github: "github.com/ishitadesai",
    linkedin: "linkedin.com/in/ishitadesai",
    posts: [
      { id:"p12", tag:"🏆 Achievement", image:"https://picsum.photos/seed/ctf2024/600/400", text:"Finished a 36-hour CTF marathon and landed Top 10 nationally! 🏴‍☠️ Solved 12/15 challenges solo. Tired but absolutely buzzing.", time:"3 days ago", likes:98, liked:false, shares:14, collabRequested:false, comments:[{user:"Rohan P.",text:"Top 10 nationally is INSANE. Congrats!! 🔥",time:"2 days ago"},{user:"Snehangshu D.",text:"Absolute beast mode 💪",time:"2 days ago"}] }
    ]
  }
];

/* ──────────────────────────────────────
   STATE
────────────────────────────────────── */
let activeStudent = null;
let activePostId = null;
let postsPanelOpen = false;
let currentSearchQuery = "";
let selectedBranch = "all";
let selectedYear = "all";
let selectedClubs = [];
let selectedSort = "name-asc";

/* ──────────────────────────────────────
   DOM READY
────────────────────────────────────── */
window.addEventListener("DOMContentLoaded", () => {
  renderCardsGrid();
  setupSearchAndFilters();
  setupStickyScrollListener();
});

/* ──────────────────────────────────────
   DYNAMIC CARDS RENDERER WITH FILTERING
────────────────────────────────────── */
function renderCardsGrid() {
  const container = document.getElementById("cardsGrid");
  if (!container) return;

  let filtered = students.filter(s => {
    // Search query match
    if (currentSearchQuery) {
      const q = currentSearchQuery.toLowerCase();
      const matchName = s.name.toLowerCase().includes(q);
      const matchBranch = s.branch.toLowerCase().includes(q) || s.year.toLowerCase().includes(q);
      const matchBio = s.bio.toLowerCase().includes(q);
      const matchSkills = s.skills.some(sk => sk.toLowerCase().includes(q));
      const matchClubs = s.clubs.some(cl => cl.toLowerCase().includes(q));
      if (!matchName && !matchBranch && !matchBio && !matchSkills && !matchClubs) return false;
    }

    // Branch filter
    if (selectedBranch !== "all" && s.branch !== selectedBranch) {
      return false;
    }

    // Year filter
    if (selectedYear !== "all" && s.yearNum !== selectedYear) {
      return false;
    }

    // Club filter
    if (selectedClubs.length > 0) {
      const hasClub = selectedClubs.some(c => s.clubs.includes(c));
      if (!hasClub) return false;
    }

    return true;
  });

  // Sorting
  if (selectedSort === "name-asc") {
    filtered.sort((a,b) => a.name.localeCompare(b.name));
  } else if (selectedSort === "name-desc") {
    filtered.sort((a,b) => b.name.localeCompare(a.name));
  }

  // Update count in header
  const countEl = document.querySelector(".stu-count");
  if (countEl) countEl.textContent = `🎓 Students (${filtered.length} found)`;

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: rgba(255,255,255,0.6); backdrop-filter: blur(14px); border-radius: 20px; border: 1px solid rgba(255,255,255,0.8);">
        <span style="font-size: 40px; display: block; margin-bottom: 12px;">🔍</span>
        <h3 style="font-size: 18px; font-weight: 800; color: #1e1b4b; margin-bottom: 6px;">No matching students found</h3>
        <p style="font-size: 13.5px; color: #6b7280; margin-bottom: 16px;">Try adjusting your search query or reset the active filters.</p>
        <button onclick="resetAllFilters()" style="font-family: inherit; font-size: 13px; font-weight: 700; background: var(--primary); color: #fff; border: none; border-radius: 99px; padding: 8px 22px; cursor: pointer;">Reset All Filters</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(s => `
    <div class="student-card" tabindex="0"
      style="--accent-gradient: ${s.accent}"
      onclick="openModalById('${s.id}')"
      onkeydown="if(event.key==='Enter')openModalById('${s.id}')">
      <div class="card-avatar-wrap">
        <img class="s-img" src="user.png" alt="${s.name}" />
        ${s.online ? '<span class="online-dot"></span>' : ''}
      </div>
      <div class="card-body">
        <div class="s-name">${s.name}</div>
        <div class="s-year">${s.year}</div>
        <p class="s-bio">${s.bio}</p>
        <p class="s-label">Club Affiliations</p>
        <div class="s-tags">
          ${s.clubs.map(c => `<span class="tag-club">${c}</span>`).join("")}
        </div>
      </div>
    </div>
  `).join("");
}

function openModalById(id) {
  const s = students.find(x => x.id === id);
  if (s) openModal(s);
}

/* ──────────────────────────────────────
   SEARCH & FILTERS EVENT WIRING
────────────────────────────────────── */
function setupSearchAndFilters() {
  const searchInput = document.getElementById("studentSearch");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearchQuery = e.target.value.trim();
      renderCardsGrid();
    });
  }

  // Branch Radios
  document.querySelectorAll("input[name='branch']").forEach(radio => {
    radio.addEventListener("change", (e) => {
      selectedBranch = e.target.value;
      renderCardsGrid();
    });
  });

  // Year Chips
  document.querySelectorAll(".year-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      document.querySelectorAll(".year-chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      selectedYear = chip.getAttribute("data-year") || chip.textContent.trim();
      renderCardsGrid();
    });
  });

  // Club Checkboxes
  document.querySelectorAll(".club-checkbox").forEach(cb => {
    cb.addEventListener("change", () => {
      selectedClubs = Array.from(document.querySelectorAll(".club-checkbox:checked")).map(c => c.value);
      renderCardsGrid();
    });
  });

  // Sort dropdown
  const sortSelect = document.getElementById("sortBy");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      selectedSort = e.target.value;
      renderCardsGrid();
    });
  }
}

function resetAllFilters() {
  currentSearchQuery = "";
  selectedBranch = "all";
  selectedYear = "all";
  selectedClubs = [];
  selectedSort = "name-asc";

  const searchInput = document.getElementById("studentSearch");
  if (searchInput) searchInput.value = "";

  document.querySelectorAll("input[name='branch']").forEach(r => r.checked = false);
  const allRadio = document.querySelector("input[name='branch'][value='all']");
  if (allRadio) allRadio.checked = true;

  document.querySelectorAll(".year-chip").forEach(c => c.classList.remove("active"));
  const firstYearChip = document.querySelector(".year-chip[data-year='all']") || document.querySelector(".year-chip");
  if (firstYearChip) firstYearChip.classList.add("active");

  document.querySelectorAll(".club-checkbox").forEach(cb => cb.checked = false);

  const sortSelect = document.getElementById("sortBy");
  if (sortSelect) sortSelect.value = "name-asc";

  renderCardsGrid();
  showToast("All filters have been reset.", "🔄");
}

/* ──────────────────────────────────────
   SMOOTH SCROLL FIXED CONTROLS LISTENER
────────────────────────────────────── */
function setupStickyScrollListener() {
  const controls = document.getElementById("stickyControls");
  if (!controls) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 90) {
      controls.classList.add("scrolled-fixed");
    } else {
      controls.classList.remove("scrolled-fixed");
    }
  }, { passive: true });
}

/* ──────────────────────────────────────
   MODAL OPEN / CLOSE
────────────────────────────────────── */
function openModal(student) {
  activeStudent = student;
  const modal   = document.getElementById("profileModal");
  const overlay = document.getElementById("modalOverlay");

  // Set accent gradient on modal header
  document.getElementById("modalHeader").style.setProperty("--modal-accent", student.accent);

  // Avatar & online
  document.getElementById("modalAvatar").src = "user.png";
  document.getElementById("modalAvatar").alt = student.name;
  const onlineDot = document.getElementById("modalOnline");
  onlineDot.hidden = !student.online;

  // Info
  const nameEl = document.getElementById("modalName");
  if (nameEl) nameEl.textContent = student.name;

  const yearEl = document.getElementById("modalYear");
  if (yearEl) yearEl.textContent = student.year;

  const postEl = document.getElementById("modalPostCount") || document.getElementById("statPosts");
  if (postEl) postEl.textContent = student.posts.length;

  const likeEl = document.getElementById("modalLikeCount") || document.getElementById("statLikes");
  if (likeEl) likeEl.textContent = fmtCount(student.likeCount);

  const followEl = document.getElementById("modalFollowers") || document.getElementById("statFollowers");
  if (followEl) followEl.textContent = fmtCount(student.followers);

  // About tab fields
  const bioEl = document.getElementById("modalBio");
  if (bioEl) bioEl.textContent = student.bio;

  const achEl = document.getElementById("modalAchievements");
  if (achEl) achEl.textContent = student.achievements;

  const hobEl = document.getElementById("modalHobbies");
  if (hobEl) hobEl.textContent = student.hobbies;

  const projEl = document.getElementById("modalProjects");
  if (projEl) projEl.textContent = student.projects;

  // Tags
  renderTags("modalSkills", student.skills, "modal-tag");
  renderTags("modalClubs",  student.clubs,  "tag-club");

  // Contact & Social Channels (Unhidden links only)
  const socialGrid = document.getElementById("modalSocialLinksGrid");
  if (socialGrid) {
    const list = [];
    if (student.email) list.push({ icon: "✉️", label: "Email", href: "mailto:" + student.email });
    if (student.github) list.push({ icon: "🐙", label: "GitHub", href: "https://" + student.github });
    if (student.linkedin) list.push({ icon: "💼", label: "LinkedIn", href: "https://" + student.linkedin });
    if (student.instagram) list.push({ icon: "📸", label: "Instagram", href: "https://" + student.instagram });
    if (student.telegram) list.push({ icon: "✈️", label: "Telegram", href: "https://t.me/" + student.telegram.replace(/^@/, "") });
    if (student.x) list.push({ icon: "🐦", label: "X", href: "https://" + student.x });
    if (student.whatsapp) list.push({ icon: "💬", label: "WhatsApp", href: "https://wa.me/" + student.whatsapp.replace(/[^0-9]/g, "") });
    if (student.portfolio) list.push({ icon: "🌐", label: "Portfolio", href: "https://" + student.portfolio });

    socialGrid.innerHTML = list.map(item => `
      <a href="${item.href}" target="_blank" rel="noopener noreferrer" class="student-social-chip">
        <span>${item.icon}</span>
        <span>${item.label}</span>
      </a>
    `).join("");
  }

  // Reset to about tab
  resetModalToAbout();

  // Populate posts panel header
  const panelAvatar = document.getElementById("postsPanelAvatar");
  if (panelAvatar) panelAvatar.src = "user.png";
  const panelName = document.getElementById("postsPanelName");
  if (panelName) panelName.textContent = student.name;
  const panelSub = document.getElementById("postsPanelSub");
  if (panelSub) panelSub.textContent = student.year + " · " + student.posts.length + " Posts";

  // Render posts inside the posts panel
  renderPostsFeed("postsPanelFeed", student.posts);

  // Show modal & overlay
  modal.classList.add("open");
  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function resetModalToAbout() {
  document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
  document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
  document.getElementById("tabBtnAbout").classList.add("active");
  document.getElementById("tab-about").classList.add("active");
}

function closeModal() {
  document.getElementById("profileModal").classList.remove("open");
  document.getElementById("modalOverlay").classList.remove("open");
  document.body.style.overflow = "";
  closePostsPanel(false);
  activeStudent = null;
}

/* ──────────────────────────────────────
   POSTS PANEL
────────────────────────────────────── */
function openPostsPanel() {
  const panel = document.getElementById("postsPanel");
  panel.classList.add("open");
  document.getElementById("profileModal").classList.add("posts-open");
  postsPanelOpen = true;
}

function closePostsPanel(resetTab = true) {
  const panel = document.getElementById("postsPanel");
  panel.classList.remove("open");
  document.getElementById("profileModal").classList.remove("posts-open");
  postsPanelOpen = false;
  if (resetTab) resetModalToAbout();
  closeComments();
}

/* ──────────────────────────────────────
   HELPERS
────────────────────────────────────── */
function fmtCount(n) {
  return n >= 1000 ? (n/1000).toFixed(1)+"k" : n;
}

function renderTags(containerId, items, cls) {
  document.getElementById(containerId).innerHTML =
    items.map(t => `<span class="${cls}">${t}</span>`).join("");
}

function switchTab(tabId, btnEl) {
  document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
  document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
  if (btnEl) btnEl.classList.add("active");
  document.getElementById("tab-" + tabId).classList.add("active");
}

/* ──────────────────────────────────────
   POSTS FEED RENDERER
────────────────────────────────────── */
function renderPostsFeed(containerId, posts) {
  const feed = document.getElementById(containerId);
  if (!posts || posts.length === 0) {
    feed.innerHTML = `<p class="no-posts">No posts yet.</p>`;
    return;
  }
  feed.innerHTML = posts.map(post => buildPostHTML(post)).join("");
  // Fill author names
  feed.querySelectorAll("[data-author-slot]").forEach(el => {
    el.textContent = activeStudent ? activeStudent.name : "";
  });
}

function buildPostHTML(post) {
  const imgHTML = post.image
    ? `<img class="post-img" src="${post.image}" alt="Post image" loading="lazy" />`
    : "";
  const tagHTML = post.tag
    ? `<span class="post-category-tag">${post.tag}</span>`
    : `<span class="post-category-tag">💻 Recent Work</span>`;
  return `
    <article class="post-card" id="post-${post.id}">
      ${imgHTML}
      <div class="post-card-body">
        <div class="post-header">
          <div class="post-header-left">
            <img class="post-avatar" src="user.png" alt="" />
            <div>
              <div class="post-author" data-author-slot></div>
              <div class="post-time">${post.time}</div>
            </div>
          </div>
          ${tagHTML}
        </div>
        <p class="post-text">${post.text}</p>
      </div>
      <div class="post-actions">
        <button class="action-btn like-btn ${post.liked ? 'liked' : ''}"
          onclick="toggleLike('${post.id}',this)" id="likeBtn-${post.id}">
          <span class="action-icon" id="likeIcon-${post.id}">${post.liked ? '❤️' : '🤍'}</span>
          <span class="action-count" id="likeCount-${post.id}">${post.likes}</span>
          <span class="action-label">Like</span>
        </button>
        <button class="action-btn comment-btn" onclick="openComments('${post.id}')">
          <span class="action-icon">💬</span>
          <span class="action-count" id="cmtCount-${post.id}">${post.comments.length}</span>
          <span class="action-label">Comment</span>
        </button>
        <button class="action-btn share-btn" onclick="sharePost('${post.id}',this)">
          <span class="action-icon">↗️</span>
          <span class="action-count" id="shareCount-${post.id}">${post.shares}</span>
          <span class="action-label">Share</span>
        </button>
        <button class="action-btn collab-btn ${post.collabRequested ? 'requested' : ''}"
          onclick="requestCollab('${post.id}',this)" id="collabBtn-${post.id}" title="Send collaboration request">
          <span class="action-icon">🤝</span>
          <span class="action-label">${post.collabRequested ? 'Requested' : 'Collaborate'}</span>
        </button>
      </div>
    </article>`;
}

/* ──────────────────────────────────────
   LIKE
────────────────────────────────────── */
function toggleLike(postId, btn) {
  const post = findPost(postId);
  if (!post) return;
  post.liked = !post.liked;
  post.likes += post.liked ? 1 : -1;

  btn.classList.toggle("liked", post.liked);
  document.getElementById("likeIcon-"  + postId).textContent = post.liked ? "❤️" : "🤍";
  document.getElementById("likeCount-" + postId).textContent = post.likes;

  btn.classList.add("pop");
  setTimeout(() => btn.classList.remove("pop"), 320);
}

/* ──────────────────────────────────────
   SHARE
────────────────────────────────────── */
function sharePost(postId, btn) {
  const post = findPost(postId);
  if (!post) return;
  post.shares++;
  document.getElementById("shareCount-" + postId).textContent = post.shares;
  btn.classList.add("shared");
  setTimeout(() => btn.classList.remove("shared"), 900);
  if (navigator.share) navigator.share({ title:"Campus Connect Post", text: post.text }).catch(()=>{});
  else showToast("Post link copied to clipboard! 📋", "🔗");
}

/* ──────────────────────────────────────
   COMMENTS
────────────────────────────────────── */
function openComments(postId) {
  activePostId = postId;
  const post = findPost(postId);
  if (!post) return;
  renderCommentList(post.comments);
  document.getElementById("commentPopup").classList.add("open");
  document.getElementById("commentOverlay").classList.add("open");
}

function closeComments() {
  activePostId = null;
  document.getElementById("commentPopup").classList.remove("open");
  document.getElementById("commentOverlay").classList.remove("open");
  document.getElementById("newCommentInput").value = "";
}

function renderCommentList(comments) {
  const list = document.getElementById("commentList");
  if (!comments.length) {
    list.innerHTML = `<p class="no-comments">No comments yet. Be the first!</p>`;
    return;
  }
  list.innerHTML = comments.map(c => `
    <div class="comment-item">
      <div class="comment-user-avatar">${c.user.charAt(0)}</div>
      <div class="comment-body">
        <span class="comment-user">${c.user}</span>
        <p class="comment-text">${c.text}</p>
        <span class="comment-time">${c.time}</span>
      </div>
    </div>`).join("");
  list.scrollTop = list.scrollHeight;
}

function submitComment() {
  if (!activePostId) return;
  const input = document.getElementById("newCommentInput");
  const text  = input.value.trim();
  if (!text) return;
  const post = findPost(activePostId);
  if (!post) return;
  post.comments.push({ user:"You", text, time:"Just now" });
  renderCommentList(post.comments);
  const cntEl = document.getElementById("cmtCount-" + activePostId);
  if (cntEl) cntEl.textContent = post.comments.length;
  input.value = "";
}

const commentInput = document.getElementById("newCommentInput");
if (commentInput) {
  commentInput.addEventListener("keydown", e => {
    if (e.key === "Enter") submitComment();
  });
}

/* ──────────────────────────────────────
   FOLLOW
────────────────────────────────────── */
function toggleFollow(btn) {
  const following = btn.classList.toggle("following");
  btn.textContent = following ? "✓ Following" : "Follow";
}

/* ──────────────────────────────────────
   FILTER PANEL TOGGLE & DISMISS
────────────────────────────────────── */
function toggleFilters(e) {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  const panel = document.getElementById("filtersPanel");
  if (panel) {
    panel.classList.toggle("open");
  }
}

document.addEventListener("click", function(e) {
  const panel = document.getElementById("filtersPanel");
  const btn   = document.getElementById("filterToggleBtn");
  if (panel && panel.classList.contains("open")) {
    if (!panel.contains(e.target) && !btn.contains(e.target)) {
      panel.classList.remove("open");
    }
  }
});

/* ──────────────────────────────────────
   COLLABORATE & NOTIFICATION TOAST
────────────────────────────────────── */
function showToast(msg, icon = "🤝") {
  let t = document.getElementById("toastNotify");
  if (!t) return;
  document.getElementById("toastIcon").textContent = icon;
  document.getElementById("toastMsg").textContent = msg;
  t.classList.add("show");
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => t.classList.remove("show"), 3200);
}

function requestCollab(postId, btn) {
  const post = findPost(postId);
  if (!post) return;
  post.collabRequested = !post.collabRequested;
  btn.classList.toggle("requested", post.collabRequested);
  const label = btn.querySelector(".action-label");
  const authorName = activeStudent ? activeStudent.name : "Student";
  if (post.collabRequested) {
    label.textContent = "Requested";
    showToast(`Collaboration invite sent to ${authorName}! Notification queued.`, "🤝");
  } else {
    label.textContent = "Collaborate";
    showToast(`Collaboration request withdrawn.`, "ℹ️");
  }
}

/* ──────────────────────────────────────
   UTILITY
────────────────────────────────────── */
function findPost(postId) {
  for (const s of students) {
    const p = s.posts.find(p => p.id === postId);
    if (p) return p;
  }
  return null;
}
