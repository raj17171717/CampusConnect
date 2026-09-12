/* ==========================================================================
   CAMPUS CONNECT - ALUMNI DIRECTORY DATA & LOGIC
   ========================================================================== */

const ALUMNI_DATA = [
  {
    id: "alum-1",
    name: "Snehangshu Das",
    degree: "B.Tech CSE - AIT Pune '21",
    currentJob: "Senior ML Engineer at Google DeepMind",
    company: "Google DeepMind",
    location: "London, UK",
    bio: "Building multimodal foundation models and sparse MoE architectures. Previously research engineer at Microsoft. Passionate about open-source AI and mentoring.",
    accentColor: "#8b5cf6", // Purple top border
    pastClubs: ["OSS", "GDG", "CP", "Robotics"],
    skills: ["PyTorch", "LLMs", "Distributed Systems", "Python"],
    postsCount: 18,
    likesCount: 520,
    isLiked: false,
    followers: 1420,
    isFollowing: false,
    domain: "AI & ML",
    batch: 2021,
    careerTimeline: [
      { role: "Senior Machine Learning Engineer", company: "Google DeepMind", period: "2023 - Present", desc: "Optimizing large-scale LLM training and multimodal reasoning pipelines." },
      { role: "Research Engineer II", company: "Microsoft Research", period: "2021 - 2023", desc: "Developed NLP models for cross-lingual enterprise search." },
      { role: "Core Lead", company: "AIT Open Source Society (OSS)", period: "2019 - 2021", desc: "Led campus open-source hackathons with 600+ student participants." }
    ]
  },
  {
    id: "alum-2",
    name: "Priya Sharma",
    degree: "B.Tech IT - AIT Pune '20",
    currentJob: "Staff Software Architect at Stripe",
    company: "Stripe",
    location: "San Francisco, CA",
    bio: "Designing resilient payment infrastructure processing billions in global transactions. Avid competitive programmer and distributed systems speaker.",
    accentColor: "#f97316", // Orange top border
    pastClubs: ["GDG", "CP", "Coding Ninjas"],
    skills: ["Go", "Kafka", "Kubernetes", "System Design"],
    postsCount: 14,
    likesCount: 390,
    isLiked: true,
    followers: 2150,
    isFollowing: false,
    domain: "Software Eng",
    batch: 2020,
    careerTimeline: [
      { role: "Staff Software Architect", company: "Stripe", period: "2022 - Present", desc: "Architected fault-tolerant cross-border payment settlement systems." },
      { role: "Senior Backend Engineer", company: "Uber", period: "2020 - 2022", desc: "Scaled real-time dispatch and driver geospatial indexing." },
      { role: "Competitive Programming Lead", company: "AIT CP Club", period: "2018 - 2020", desc: "ICPC Regionalist and Codeforces Master." }
    ]
  },
  {
    id: "alum-3",
    name: "Arjun Mehta",
    degree: "B.Tech ECE - AIT Pune '22",
    currentJob: "Robotics Firmware Lead at Tesla",
    company: "Tesla Autopilot",
    location: "Austin, TX",
    bio: "Embedded systems and real-time control for autonomous robotics. College robotics lead who built smart campus IoT solutions and race telemetry.",
    accentColor: "#06b6d4", // Cyan top border
    pastClubs: ["OSS", "Robotics", "Formula Student"],
    skills: ["C++20", "ROS2", "Embedded C", "RTOS"],
    postsCount: 9,
    likesCount: 245,
    isLiked: false,
    followers: 980,
    isFollowing: false,
    domain: "Hardware & Robotics",
    batch: 2022,
    careerTimeline: [
      { role: "Robotics Firmware Lead", company: "Tesla", period: "2023 - Present", desc: "Low-latency CAN-bus sensor fusion and motor controllers." },
      { role: "Embedded Software Engineer", company: "Qualcomm", period: "2022 - 2023", desc: "Developed Snapdragon modem firmware and DSP drivers." },
      { role: "Captain", company: "AIT Robotics Club", period: "2020 - 2022", desc: "Won National Robocon championship 2021." }
    ]
  },
  {
    id: "alum-4",
    name: "Ananya Kulkarni",
    degree: "B.Tech Mech - AIT Pune '21",
    currentJob: "Lead Product Designer at Airbnb",
    company: "Airbnb",
    location: "Bengaluru, India",
    bio: "Crafting human-centered spatial UX and global design systems. Former founder of campus Design & Media club. Mentoring aspiring student product designers.",
    accentColor: "#ec4899", // Pink top border
    pastClubs: ["Design & Media", "Fine Arts", "Cultural Club"],
    skills: ["Figma", "Design Systems", "UX Research", "Micro-Interactions"],
    postsCount: 16,
    likesCount: 480,
    isLiked: false,
    followers: 1350,
    isFollowing: false,
    domain: "Product & Design",
    batch: 2021,
    careerTimeline: [
      { role: "Lead Product Designer", company: "Airbnb", period: "2023 - Present", desc: "Leading global checkout and guest booking experience UX." },
      { role: "Senior UX Designer", company: "Swiggy", period: "2021 - 2023", desc: "Designed Swiggy Instamart delivery tracking and discovery." },
      { role: "Design Lead", company: "AIT Design Guild", period: "2019 - 2021", desc: "Created branding guidelines and merchandise for college fests." }
    ]
  },
  {
    id: "alum-5",
    name: "Rohan Patil",
    degree: "B.Tech CSE - AIT Pune '19",
    currentJob: "Quantitative Researcher at Citadel",
    company: "Citadel Securities",
    location: "New York, NY",
    bio: "Algorithmic high-frequency trading and statistical microstructure arbitrage. Math Olympiad medallist and founding member of campus quant society.",
    accentColor: "#3b82f6", // Blue top border
    pastClubs: ["Quant Club", "CP", "Math Society"],
    skills: ["C++", "Python", "Stochastic Calculus", "Time Series ML"],
    postsCount: 11,
    likesCount: 310,
    isLiked: false,
    followers: 1820,
    isFollowing: false,
    domain: "Finance & Quant",
    batch: 2019,
    careerTimeline: [
      { role: "Quantitative Researcher", company: "Citadel Securities", period: "2022 - Present", desc: "Microsecond order book signal research and execution algorithms." },
      { role: "Quantitative Trading Analyst", company: "Tower Research", period: "2019 - 2022", desc: "Built statistical arbitrage models for global equities." },
      { role: "Secretary", company: "AIT Mathematics Society", period: "2017 - 2019", desc: "Organized inter-college math olympiads." }
    ]
  },
  {
    id: "alum-6",
    name: "Ishita Desai",
    degree: "B.Tech IT - AIT Pune '23",
    currentJob: "Security Researcher at Cisco Talos",
    company: "Cisco Talos",
    location: "Singapore",
    bio: "Zero-knowledge cryptography, malware analysis, and smart contract vulnerability auditing. DEFCON CTF finalist and active cybersecurity speaker.",
    accentColor: "#10b981", // Emerald green top border
    pastClubs: ["Cybersecurity", "OSS", "ACM"],
    skills: ["Rust", "Reverse Eng", "Zero Knowledge", "Penetration Testing"],
    postsCount: 7,
    likesCount: 195,
    isLiked: false,
    followers: 760,
    isFollowing: false,
    domain: "Cybersecurity",
    batch: 2023,
    careerTimeline: [
      { role: "Security Researcher", company: "Cisco Talos", period: "2023 - Present", desc: "Discovered critical CVE vulnerabilities in core networking firmware." },
      { role: "Security Intern", company: "Trail of Bits", period: "2022", desc: "Audited cryptographic verification engines." },
      { role: "President", company: "AIT CyberSec CTF Club", period: "2021 - 2023", desc: "Ranked Top 10 in National Student CTFs." }
    ]
  }
];

// App State
let alumniList = JSON.parse(localStorage.getItem('campus_alumni_data_v3')) || ALUMNI_DATA;
let activeSearchQuery = "";
let activeDomainFilter = "all";
let activeBatchFilter = "all";
let activeClubFilter = "all";
let activeSortFilter = "followers";

// DOM Elements
const searchHeroInput = document.getElementById("searchHeroInput");
const clearSearchBtn = document.getElementById("clearSearchBtn");
const heroFilterBtn = document.getElementById("heroFilterBtn");
const filterDropdownPanel = document.getElementById("filterDropdownPanel");
const heroFilterBadgeDot = document.getElementById("heroFilterBadgeDot");

const dockedFloatingBar = document.getElementById("dockedFloatingBar");
const dockedSearchInput = document.getElementById("dockedSearchInput");
const dockedFilterTrigger = document.getElementById("dockedFilterTrigger");
const dockedFilterMenu = document.getElementById("dockedFilterMenu");
const searchFilterSection = document.getElementById("searchFilterSection");

const alumniCardsGrid = document.getElementById("alumniCardsGrid");
const batchSelect = document.getElementById("batchSelect");
const clubSelect = document.getElementById("clubSelect");
const sortSelect = document.getElementById("sortSelect");
const resetFiltersBtn = document.getElementById("resetFiltersBtn");

const profileModal = document.getElementById("profileModal");
const modalContentInner = document.getElementById("modalContentInner");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const toastBar = document.getElementById("toastBar");

// ==========================================================================
// SCROLL DETECTION: DOCK SEARCH BAR & FILTERS TO TOP-RIGHT
// ==========================================================================
function initScrollDocking() {
  window.addEventListener("scroll", () => {
    if (!searchFilterSection || !dockedFloatingBar) return;
    const rect = searchFilterSection.getBoundingClientRect();
    
    // When the hero search bar scrolls up past top threshold
    if (rect.bottom < 30) {
      dockedFloatingBar.classList.add("is-visible");
    } else {
      dockedFloatingBar.classList.remove("is-visible");
      if (dockedFilterMenu) dockedFilterMenu.classList.remove("show");
    }
  });

  // Docked Filter Trigger
  if (dockedFilterTrigger) {
    dockedFilterTrigger.addEventListener("click", (e) => {
      e.stopPropagation();
      dockedFilterMenu.classList.toggle("show");
    });
  }

  document.addEventListener("click", (e) => {
    if (dockedFilterMenu && !dockedFilterMenu.contains(e.target) && e.target !== dockedFilterTrigger) {
      dockedFilterMenu.classList.remove("show");
    }
    if (filterDropdownPanel && !filterDropdownPanel.contains(e.target) && e.target !== heroFilterBtn && !heroFilterBtn.contains(e.target)) {
      filterDropdownPanel.classList.remove("show");
      if (heroFilterBtn) heroFilterBtn.classList.remove("active");
    }
  });

  const scrollTopBtn = document.getElementById("scrollTopBtn");
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

// ==========================================================================
// SEARCH & FILTER HANDLING
// ==========================================================================
function syncSearch(query) {
  activeSearchQuery = query.trim().toLowerCase();
  if (searchHeroInput) searchHeroInput.value = query;
  if (dockedSearchInput) dockedSearchInput.value = query;
  
  if (clearSearchBtn) {
    clearSearchBtn.style.display = query ? "inline-flex" : "none";
  }

  renderCards();
}

function setDomainFilter(domain) {
  activeDomainFilter = domain;
  document.querySelectorAll(".domain-chip").forEach(chip => {
    if (chip.dataset.domain === domain) chip.classList.add("active");
    else chip.classList.remove("active");
  });

  const dDomain = document.getElementById("dockedDomainSelect");
  if (dDomain) dDomain.value = domain;

  updateFilterIndicators();
  renderCards();
}

function updateFilterIndicators() {
  const isFiltered = activeDomainFilter !== "all" || activeBatchFilter !== "all" || activeClubFilter !== "all";
  if (heroFilterBadgeDot) {
    heroFilterBadgeDot.style.display = isFiltered ? "inline-block" : "none";
  }
}

function resetAll() {
  activeSearchQuery = "";
  activeDomainFilter = "all";
  activeBatchFilter = "all";
  activeClubFilter = "all";
  activeSortFilter = "followers";

  if (searchHeroInput) searchHeroInput.value = "";
  if (dockedSearchInput) dockedSearchInput.value = "";
  if (clearSearchBtn) clearSearchBtn.style.display = "none";
  if (batchSelect) batchSelect.value = "all";
  if (clubSelect) clubSelect.value = "all";
  if (sortSelect) sortSelect.value = "followers";

  const dDomain = document.getElementById("dockedDomainSelect");
  const dBatch = document.getElementById("dockedBatch");
  const dClub = document.getElementById("dockedClub");
  const dSort = document.getElementById("dockedSort");
  if (dDomain) dDomain.value = "all";
  if (dBatch) dBatch.value = "all";
  if (dClub) dClub.value = "all";
  if (dSort) dSort.value = "followers";

  document.querySelectorAll(".domain-chip").forEach(chip => {
    if (chip.dataset.domain === "all") chip.classList.add("active");
    else chip.classList.remove("active");
  });

  updateFilterIndicators();
  showToast("Filters reset to default.");
  renderCards();
}

function getFilteredList() {
  return alumniList.filter(alumni => {
    if (activeSearchQuery) {
      const matchName = alumni.name.toLowerCase().includes(activeSearchQuery);
      const matchDegree = alumni.degree.toLowerCase().includes(activeSearchQuery);
      const matchJob = alumni.currentJob.toLowerCase().includes(activeSearchQuery);
      const matchBio = alumni.bio.toLowerCase().includes(activeSearchQuery);
      const matchClubs = alumni.pastClubs.some(c => c.toLowerCase().includes(activeSearchQuery));
      const matchSkills = alumni.skills.some(s => s.toLowerCase().includes(activeSearchQuery));

      if (!matchName && !matchDegree && !matchJob && !matchBio && !matchClubs && !matchSkills) {
        return false;
      }
    }

    if (activeDomainFilter !== "all" && alumni.domain !== activeDomainFilter) {
      return false;
    }

    if (activeBatchFilter !== "all" && alumni.batch.toString() !== activeBatchFilter) {
      return false;
    }

    if (activeClubFilter !== "all") {
      const matchClub = alumni.pastClubs.some(c => c.toLowerCase().includes(activeClubFilter.toLowerCase()));
      if (!matchClub) return false;
    }

    return true;
  }).sort((a, b) => {
    if (activeSortFilter === "followers") return b.followers - a.followers;
    if (activeSortFilter === "batch-new") return b.batch - a.batch;
    if (activeSortFilter === "batch-old") return a.batch - b.batch;
    if (activeSortFilter === "name") return a.name.localeCompare(b.name);
    return 0;
  });
}

// ==========================================================================
// RENDER COMPACT CARDS (Click anywhere on card to open detailed profile)
// ==========================================================================
function renderCards() {
  if (!alumniCardsGrid) return;
  const list = getFilteredList();

  const counterEl = document.getElementById("alumniCountBadge");
  if (counterEl) {
    counterEl.innerHTML = `<i class="fas fa-graduation-cap"></i> Alumni (${list.length * 333 || 2000})`;
  }

  if (list.length === 0) {
    alumniCardsGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: #fff; border-radius: 18px; border: 1px dashed #e2e8f0;">
        <i class="fas fa-search" style="font-size: 2.2rem; color: #94a3b8; margin-bottom: 12px; display: block;"></i>
        <h3 style="font-family: var(--font-heading); color: #1e1b4b; font-size: 1.3rem; margin-bottom: 6px;">No Alumni Found</h3>
        <p style="color: #64748b; font-size: 0.9rem; margin-bottom: 16px;">Try adjusting your search keywords or resetting filters.</p>
        <button class="search-submit-btn" style="margin: 0 auto;" onclick="resetAll()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  alumniCardsGrid.innerHTML = list.map(alumni => {
    return `
      <div class="alumni-card" style="--card-accent: ${alumni.accentColor || '#6d28d9'};" onclick="openProfile('${alumni.id}')" title="Tap to view full profile of ${alumni.name}">
        <div>
          <!-- Top Avatar Row with Green Indicator Dot -->
          <div class="card-avatar-row">
            <div class="avatar-container">
              <div class="avatar-circle">
                <i class="fas fa-user"></i>
              </div>
              <div class="status-indicator-dot" title="Active on Campus Connect"></div>
            </div>
          </div>

          <!-- Alumni Name & Degree Info -->
          <h3 class="alumni-name-text">${alumni.name}</h3>
          <div class="alumni-dept-text">${alumni.degree}</div>
          <div class="alumni-job-text">
            <i class="fas fa-briefcase"></i> ${alumni.currentJob}
          </div>

          <!-- PAST CLUB AFFILIATIONS (Soft Purple Badges) -->
          <div class="section-heading-caps">Past Club Affiliations</div>
          <div class="pill-group">
            ${alumni.pastClubs.map(club => `<span class="club-pill">${club}</span>`).join('')}
          </div>

          <!-- SKILLS (Soft Pink/Red Badges) -->
          <div class="section-heading-caps">Skills</div>
          <div class="pill-group">
            ${alumni.skills.map(skill => `<span class="skill-pill">${skill}</span>`).join('')}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// ==========================================================================
// PROFILE MODAL (FULL BIO, STATS, FOLLOW, TIMELINE)
// ==========================================================================
function openProfile(alumniId) {
  const alumni = alumniList.find(a => a.id === alumniId);
  if (!alumni || !profileModal || !modalContentInner) return;

  const isFollowing = alumni.isFollowing;
  const isLiked = alumni.isLiked;

  modalContentInner.innerHTML = `
    <!-- Header: Avatar + Identity -->
    <div class="modal-header-row">
      <div style="display: flex; align-items: center; gap: 16px;">
        <div class="avatar-circle" style="width: 58px; height: 58px; font-size: 1.7rem;">
          <i class="fas fa-user"></i>
        </div>
        <div>
          <h2 style="font-family: var(--font-heading); color: #1e1b4b; font-size: 1.4rem; font-weight: 800;">${alumni.name}</h2>
          <div style="color: #64748b; font-size: 0.88rem; font-weight: 600;">${alumni.degree} &bull; ${alumni.location}</div>
          <div style="color: var(--brand-purple); font-size: 0.92rem; font-weight: 700; margin-top: 2px;">
            <i class="fas fa-briefcase"></i> ${alumni.currentJob}
          </div>
        </div>
      </div>
    </div>

    <!-- Full Bio of the person -->
    <p style="color: #334155; font-size: 0.93rem; line-height: 1.6; margin-top: 12px; margin-bottom: 14px;">${alumni.bio}</p>

    <!-- Modal Stats Bar & Follow Button (Posts, Likes, Followers) -->
    <div class="modal-stats-bar">
      <span class="modal-stat-item" title="Alumni Posts">
        <i class="fas fa-file-alt"></i> ${alumni.postsCount} posts
      </span>
      <span class="modal-stat-item" onclick="toggleLikeInModal('${alumni.id}')" title="Click to Like">
        <i class="${isLiked ? 'fas' : 'far'} fa-heart"></i> ${alumni.likesCount} likes
      </span>
      <span class="modal-stat-item" title="Followers">
        <i class="fas fa-users"></i> ${formatFollowers(alumni.followers)} followers
      </span>

      <button class="modal-follow-btn ${isFollowing ? 'following' : ''}" onclick="toggleFollowInModal('${alumni.id}')">
        ${isFollowing ? '✓ Following' : '+ Follow'}
      </button>
    </div>

    <!-- Career Journey -->
    <div class="section-heading-caps" style="margin-top: 16px;">Post-College Career Journey</div>
    <div class="modal-career-timeline">
      ${alumni.careerTimeline ? alumni.careerTimeline.map(step => `
        <div>
          <div class="timeline-step-role">${step.role}</div>
          <div class="timeline-step-company">${step.company} &bull; ${step.period}</div>
          <div class="timeline-step-desc">${step.desc}</div>
        </div>
      `).join('') : '<p>Journey details coming soon.</p>'}
    </div>

    <!-- Past Club Affiliations -->
    <div class="section-heading-caps" style="margin-top: 18px;">Past College Club Affiliations</div>
    <div class="pill-group">
      ${alumni.pastClubs.map(c => `<span class="club-pill" style="font-size: 0.82rem; padding: 5px 10px;">${c}</span>`).join('')}
    </div>

    <!-- Domain Skills & Expertise -->
    <div class="section-heading-caps" style="margin-top: 14px;">Domain Skills & Expertise</div>
    <div class="pill-group">
      ${alumni.skills.map(s => `<span class="skill-pill" style="font-size: 0.82rem; padding: 5px 10px;">${s}</span>`).join('')}
    </div>

    <!-- Connect Action -->
    <div style="display: flex; justify-content: flex-end; margin-top: 20px; padding-top: 16px; border-top: 1px solid #e2e8f0;">
      <button class="search-submit-btn" onclick="showToast('Connection request sent to ${alumni.name}!'); closeProfile();">
        <i class="fas fa-paper-plane"></i> Connect
      </button>
    </div>
  `;

  profileModal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeProfile() {
  if (profileModal) {
    profileModal.classList.remove("open");
    document.body.style.overflow = "";
  }
}

function toggleFollowInModal(alumniId) {
  const item = alumniList.find(a => a.id === alumniId);
  if (!item) return;

  item.isFollowing = !item.isFollowing;
  if (item.isFollowing) {
    item.followers += 1;
    showToast(`You are now following ${item.name}!`);
  } else {
    item.followers -= 1;
    showToast(`Unfollowed ${item.name}.`);
  }

  saveData();
  openProfile(alumniId); // re-render modal with updated follow state
}

function toggleLikeInModal(alumniId) {
  const item = alumniList.find(a => a.id === alumniId);
  if (!item) return;

  item.isLiked = !item.isLiked;
  if (item.isLiked) {
    item.likesCount += 1;
    showToast(`Liked ${item.name}'s profile!`);
  } else {
    item.likesCount -= 1;
  }

  saveData();
  openProfile(alumniId); // re-render modal with updated likes
}

function formatFollowers(num) {
  if (num >= 1000) return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
  return num;
}

function saveData() {
  localStorage.setItem('campus_alumni_data_v3', JSON.stringify(alumniList));
}

// ==========================================================================
// TOAST NOTIFICATIONS
// ==========================================================================
function showToast(msg) {
  if (!toastBar) return;
  toastBar.textContent = msg;
  toastBar.style.display = "block";
  setTimeout(() => {
    toastBar.style.display = "none";
  }, 2600);
}

// ==========================================================================
// INITIALIZATION
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  // Hero Search Input
  if (searchHeroInput) {
    searchHeroInput.addEventListener("input", (e) => syncSearch(e.target.value));
  }
  if (clearSearchBtn) {
    clearSearchBtn.addEventListener("click", () => syncSearch(""));
  }

  // Hero Filters Button
  if (heroFilterBtn && filterDropdownPanel) {
    heroFilterBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      filterDropdownPanel.classList.toggle("show");
      heroFilterBtn.classList.toggle("active");
    });
  }

  // Docked Search Input
  if (dockedSearchInput) {
    dockedSearchInput.addEventListener("input", (e) => syncSearch(e.target.value));
  }

  // Domain Filter Chips
  document.querySelectorAll(".domain-chip").forEach(chip => {
    chip.addEventListener("click", () => setDomainFilter(chip.dataset.domain));
  });

  // Docked Domain Select
  const dDomain = document.getElementById("dockedDomainSelect");
  if (dDomain) {
    dDomain.addEventListener("change", (e) => setDomainFilter(e.target.value));
  }

  // Select Filters in Hero Filter Panel
  if (batchSelect) {
    batchSelect.addEventListener("change", (e) => {
      activeBatchFilter = e.target.value;
      const dBatch = document.getElementById("dockedBatch");
      if (dBatch) dBatch.value = e.target.value;
      updateFilterIndicators();
      renderCards();
    });
  }

  if (clubSelect) {
    clubSelect.addEventListener("change", (e) => {
      activeClubFilter = e.target.value;
      const dClub = document.getElementById("dockedClub");
      if (dClub) dClub.value = e.target.value;
      updateFilterIndicators();
      renderCards();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      activeSortFilter = e.target.value;
      const dSort = document.getElementById("dockedSort");
      if (dSort) dSort.value = e.target.value;
      renderCards();
    });
  }

  // Docked Select Filters
  const dBatch = document.getElementById("dockedBatch");
  if (dBatch) {
    dBatch.addEventListener("change", (e) => {
      activeBatchFilter = e.target.value;
      if (batchSelect) batchSelect.value = e.target.value;
      updateFilterIndicators();
      renderCards();
    });
  }

  const dClub = document.getElementById("dockedClub");
  if (dClub) {
    dClub.addEventListener("change", (e) => {
      activeClubFilter = e.target.value;
      if (clubSelect) clubSelect.value = e.target.value;
      updateFilterIndicators();
      renderCards();
    });
  }

  const dSort = document.getElementById("dockedSort");
  if (dSort) {
    dSort.addEventListener("change", (e) => {
      activeSortFilter = e.target.value;
      if (sortSelect) sortSelect.value = e.target.value;
      renderCards();
    });
  }

  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener("click", resetAll);
  }

  // Modal Close
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", closeProfile);
  }
  if (profileModal) {
    profileModal.addEventListener("click", (e) => {
      if (e.target === profileModal) closeProfile();
    });
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeProfile();
  });

  // Scroll listener for top-right docking
  initScrollDocking();

  // Initial Card Render
  renderCards();
});
