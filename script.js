const DEFAULT_FETISHES = [
  { id: 1, name: "Bare dirty soles and feet", short: "dirty feet", ironic: "Keep your own bare feet on the cold floor the entire time.", search: "dirty_feet soles" },
  { id: 2, name: "Soft, heavy belly rolls", short: "belly rolls", ironic: "Poke and squeeze your own stomach while you stare.", search: "belly rolls chubby" },
  { id: 3, name: "Thick, hairy armpits", short: "hairy armpits", ironic: "Keep one of your own armpits exposed and unwashed for the session.", search: "armpit hairy" },
  { id: 4, name: "Long spit and drool trails", short: "spit & drool", ironic: "Let real spit run down your chin whenever instructed.", search: "spit drool" },
  { id: 5, name: "Underwear waistbands stretched tight into fat", short: "stretched waistbands", ironic: "Wear underwear one size too small for the rest of the day.", search: "tight_clothes belly" },
  { id: 6, name: "Double chin and soft folded neck", short: "double chin", ironic: "Keep your chin pressed down against your neck while staring.", search: "double_chin chubby" },
  { id: 7, name: "Veiny hands and thick forearms", short: "veiny hands", ironic: "Flex your own hands and forearms until the veins pop.", search: "veins hands" },
  { id: 8, name: "Fresh sweaty socks", short: "sweaty socks", ironic: "Wear the same socks all day after the session.", search: "socks sweaty feet" },
  { id: 9, name: "Large soft ass with deep panty lines", short: "soft ass & panty lines", ironic: "Sit on your hands so you feel your own ass the whole time.", search: "ass panties" },
  { id: 10, name: "Dense body hair (chest + stomach)", short: "body hair", ironic: "Run your fingers through your own body hair while looking.", search: "body_hair chest_hair" },
  { id: 11, name: "Messy cum-covered face", short: "cum face", ironic: "Rub any precum or spit on your own face at the end.", search: "cum_on_face facial" },
  { id: 12, name: "Clothes cutting tightly into soft flesh", short: "tight cutting clothes", ironic: "Put on something deliberately too tight before starting.", search: "tight_clothes chubby" },
  { id: 13, name: "Heavy armpit sweat stains", short: "sweat stains", ironic: "Don’t use deodorant today.", search: "armpit sweat" },
  { id: 14, name: "Chubby fingers and soft palms", short: "chubby fingers", ironic: "Suck on your own fingers during the pure stares.", search: "chubby hands" },
  { id: 15, name: "Thick thighs rubbing together", short: "thick thighs", ironic: "Keep your thighs pressed tightly together the entire session.", search: "thick_thighs" },
  { id: 16, name: "Open-mouth dumb panting face", short: "dumb panting face", ironic: "Keep your own mouth open and breathing heavily while you stare.", search: "ahegao open_mouth" },
  { id: 17, name: "Used, stained, smelly panties", short: "stained panties", ironic: "Sniff your own underwear before and after.", search: "panties used" },
  { id: 18, name: "Fat folds spread and inspected", short: "spread fat folds", ironic: "Spread and inspect one of your own soft folds while looking.", search: "belly folds chubby" },
  { id: 19, name: "Soft male chest / moobs", short: "soft moobs", ironic: "Squeeze your own chest whenever the timer hits zero.", search: "pecs male" },
  { id: 20, name: "Blank drooling vacant expression", short: "vacant drooling face", ironic: "Let your face go completely slack and drool for real.", search: "drool ahegao" },
  { id: 21, name: "Soft belly hanging out of clothes", short: "hanging belly", ironic: "Pull your shirt up and leave your own belly exposed.", search: "belly hanging chubby" },
  { id: 22, name: "Hairy legs in short shorts", short: "hairy legs", ironic: "Wear the shortest shorts you own for the contamination period.", search: "hairy_legs" },
  { id: 23, name: "Wet spit-slick skin", short: "spit-slick skin", ironic: "Spit on your own chest or thighs and leave it.", search: "spit body" },
  { id: 24, name: "Hands sinking deep into fat", short: "hands in fat", ironic: "Dig your own hands into any soft part of your body.", search: "grabbing_belly chubby" },
  { id: 25, name: "Full sensory focus (look + smell + imagined taste)", short: "full sensory", ironic: "Inhale deeply through your nose every time you look.", search: "close-up fetish" }
];

const METER_LABELS = [
  { max: 10, text: "Still clean…" },
  { max: 25, text: "Getting stained…" },
  { max: 45, text: "Properly marked…" },
  { max: 65, text: "Mind getting fucked…" },
  { max: 85, text: "Deeply corrupted…" },
  { max: 100, text: "Completely broken toy" }
];

let state = {
  corruption: 0,
  activeFetish: null,
  currentStage: 1,
  fails: 0,
  lastRating: 0,
  customFetishes: []
};

let settings = {
  showMedia: true,
  timerScale: 1,
  brutalMult: 1,
  gainMult: 1,
  r34UserId: "6721033",
  r34ApiKey: ""
};

let currentTimer = null;
const mediaMemory = { imageUrl: "", videoUrl: "", mode: "image" };

function load() {
  try {
    const saved = localStorage.getItem("corruptionProtocol");
    if (saved) state = { ...state, ...JSON.parse(saved) };
    const s = localStorage.getItem("corruptionSettings");
    if (s) settings = { ...settings, ...JSON.parse(s) };
  } catch (e) {}
  updateMeter();
  applySettingsUI();
}

function save() {
  localStorage.setItem("corruptionProtocol", JSON.stringify(state));
  localStorage.setItem("corruptionSettings", JSON.stringify(settings));
  updateMeter();
}

function getAllFetishes() {
  return [...DEFAULT_FETISHES, ...(state.customFetishes || [])];
}

function updateMeter() {
  const fill = document.getElementById("meterFill");
  const percent = document.getElementById("meterPercent");
  const label = document.getElementById("meterLabel");
  const status = document.getElementById("statusLine");
  if (!fill) return;
  fill.style.width = (state.corruption || 0) + "%";
  percent.textContent = (state.corruption || 0) + "%";
  const lab = METER_LABELS.find(l => state.corruption <= l.max) || METER_LABELS[METER_LABELS.length - 1];
  label.textContent = lab.text;
  status.textContent = state.activeFetish
    ? `Active: ${state.activeFetish.short} — Stage ${state.currentStage}/6`
    : "No active corruption track";
}

function scaleTime(base) {
  return Math.max(5, Math.round(base * (settings.timerScale || 1)));
}

function youtubeId(url) {
  if (!url) return null;
  const m = String(url).match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([A-Za-z0-9_-]{6,})/);
  return m ? m[1] : null;
}

function fetishToTags(fetish) {
  const raw = (fetish.search || fetish.short || fetish.name || "1girl").toLowerCase();
  return raw
    .replace(/[^\w\s+_:-]/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 5)
    .join(" ");
}

async function grabRule34Image(fetish) {
  const userId = (settings.r34UserId || "").trim();
  const apiKey = (settings.r34ApiKey || "").trim();
  if (!userId || !apiKey) {
    throw new Error("Open ⚙ Settings and enter both Rule34 User ID and API Key.");
  }

  const tags = fetishToTags(fetish);
  const pid = Math.floor(Math.random() * 15);
  const url =
    "https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&json=1" +
    "&limit=40&pid=" + pid +
    "&tags=" + encodeURIComponent(tags) +
    "&user_id=" + encodeURIComponent(userId) +
    "&api_key=" + encodeURIComponent(apiKey);

  const res = await fetch(url);
  const text = await res.text();
  let data;
  try {
    data = JSON.parse(text);
  } catch (e) {
    throw new Error("Rule34 returned non-JSON. Check API key / User ID.");
  }

  if (data && data.message) {
    throw new Error(String(data.message));
  }
  if (typeof data === "string" && /missing authentication/i.test(data)) {
    throw new Error("Missing authentication — API Key is wrong or empty.");
  }
  if (!Array.isArray(data) || data.length === 0) {
    throw new Error("No results for: " + tags + " — try different search tags in Settings / custom fetish.");
  }

  const pool = data
    .map(p => p.sample_url || p.file_url || p.preview_url)
    .filter(u => u && /\.(jpg|jpeg|png|gif|webp)(\?|$)/i.test(u));

  if (!pool.length) throw new Error("Posts found but no image URLs.");
  return pool[Math.floor(Math.random() * pool.length)];
}

function createMediaArea(fetish) {
  if (!settings.showMedia) return document.createElement("div");

  const wrap = document.createElement("div");
  wrap.className = "media-area";

  const tabs = document.createElement("div");
  tabs.className = "media-tabs";
  const imgTab = document.createElement("button");
  imgTab.type = "button";
  imgTab.textContent = "Image";
  const vidTab = document.createElement("button");
  vidTab.type = "button";
  vidTab.textContent = "Video";
  tabs.appendChild(imgTab);
  tabs.appendChild(vidTab);

  const stage = document.createElement("div");
  const controls = document.createElement("div");
  controls.className = "media-controls";

  const urlInput = document.createElement("input");
  urlInput.type = "url";
  urlInput.placeholder = "Or paste direct image / YouTube / .mp4 URL";

  const row = document.createElement("div");
  row.className = "row";

  const grabBtn = document.createElement("button");
  grabBtn.type = "button";
  grabBtn.textContent = "Grab image";

  const loadBtn = document.createElement("button");
  loadBtn.type = "button";
  loadBtn.textContent = "Load URL";

  const findBtn = document.createElement("button");
  findBtn.type = "button";
  findBtn.textContent = "Find online";

  const clearBtn = document.createElement("button");
  clearBtn.type = "button";
  clearBtn.textContent = "Clear";

  row.appendChild(grabBtn);
  row.appendChild(loadBtn);
  row.appendChild(findBtn);
  row.appendChild(clearBtn);

  const status = document.createElement("p");
  status.className = "media-hint";
  status.textContent = (settings.r34ApiKey || "").trim()
    ? "Grab = random Rule34 image for this fetish’s tags."
    : "Set Rule34 API Key in ⚙ (User ID can stay 6721033).";

  controls.appendChild(urlInput);
  controls.appendChild(row);
  controls.appendChild(status);

  function setMode(mode) {
    mediaMemory.mode = mode;
    imgTab.classList.toggle("active", mode === "image");
    vidTab.classList.toggle("active", mode === "video");
    grabBtn.style.display = mode === "image" ? "" : "none";
    renderStage();
  }

  function renderStage() {
    stage.innerHTML = "";
    if (mediaMemory.mode === "image") {
      if (mediaMemory.imageUrl) {
        const img = document.createElement("img");
        img.alt = fetish.short || "trigger";
        img.src = mediaMemory.imageUrl;
        img.referrerPolicy = "no-referrer";
        img.onerror = () => {
          status.textContent = "Image blocked or dead link — Grab again.";
        };
        stage.appendChild(img);
      }
    } else if (mediaMemory.videoUrl) {
      const yt = youtubeId(mediaMemory.videoUrl);
      if (yt) {
        const iframe = document.createElement("iframe");
        iframe.src = "https://www.youtube.com/embed/" + yt + "?rel=0";
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        iframe.allowFullscreen = true;
        stage.appendChild(iframe);
      } else {
        const video = document.createElement("video");
        video.controls = true;
        video.playsInline = true;
        video.src = mediaMemory.videoUrl;
        stage.appendChild(video);
      }
    }
  }

  grabBtn.onclick = async () => {
    grabBtn.disabled = true;
    status.textContent = "Grabbing…";
    try {
      const url = await grabRule34Image(fetish);
      mediaMemory.imageUrl = url;
      mediaMemory.mode = "image";
      setMode("image");
      status.textContent = "Loaded. Grab again for another.";
    } catch (e) {
      status.textContent = e.message || String(e);
    } finally {
      grabBtn.disabled = false;
    }
  };

  loadBtn.onclick = () => {
    const url = urlInput.value.trim();
    if (!url) return;
    if (mediaMemory.mode === "image") mediaMemory.imageUrl = url;
    else mediaMemory.videoUrl = url;
    renderStage();
  };

  findBtn.onclick = () => {
    const q = encodeURIComponent(fetishToTags(fetish));
    if (mediaMemory.mode === "image") {
      window.open("https://rule34.xxx/index.php?page=post&s=list&tags=" + q, "_blank", "noopener");
    } else {
      window.open("https://www.youtube.com/results?search_query=" + q, "_blank", "noopener");
    }
  };

  clearBtn.onclick = () => {
    if (mediaMemory.mode === "image") mediaMemory.imageUrl = "";
    else mediaMemory.videoUrl = "";
    urlInput.value = "";
    renderStage();
  };

  imgTab.onclick = () => setMode("image");
  vidTab.onclick = () => setMode("video");

  wrap.appendChild(tabs);
  wrap.appendChild(stage);
  wrap.appendChild(controls);
  setMode(mediaMemory.mode || "image");
  return wrap;
}

const screen = document.getElementById("screen");

function clearScreen() {
  if (currentTimer) {
    clearInterval(currentTimer);
    currentTimer = null;
  }
  screen.innerHTML = "";
}

function card(html) {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = html;
  screen.appendChild(div);
  return div;
}

function btn(text, onClick, secondary = false) {
  const b = document.createElement("button");
  b.type = "button";
  b.textContent = text;
  if (secondary) b.classList.add("secondary");
  b.onclick = onClick;
  return b;
}

function start() {
  load();
  if (state.activeFetish) showContinueOrNew();
  else showWelcome();
}

function showWelcome() {
  clearScreen();
  card(`
    <h1>Corruption Protocol</h1>
    <p class="big-text">You don’t choose what gets wired into you.<br>The system does.</p>
    <p>Random fetish. Placement test. Six stages. Brutal adaptation.</p>
    <p><strong>Images:</strong> ⚙ → paste Rule34 API Key → during a session hit <em>Grab image</em>.</p>
  `);
  const row = document.createElement("div");
  row.className = "btn-row";
  row.appendChild(btn("Begin / Roll New Fetish", rollNewFetish));
  screen.appendChild(row);
}

function showContinueOrNew() {
  clearScreen();
  card(`
    <h2>Active Track</h2>
    <div class="fetish-name">${state.activeFetish.name}</div>
    <div class="stage-badge">Stage ${state.currentStage} / 6</div>
    <p>Fails so far: <strong>${state.fails}</strong></p>
  `);
  const row = document.createElement("div");
  row.className = "btn-row";
  row.appendChild(btn(`Continue Stage ${state.currentStage}`, () => startSession(state.currentStage)));
  row.appendChild(btn("Abandon & Roll New", () => {
    if (confirm("Abandon this fetish? Progress will be lost.")) {
      state.activeFetish = null;
      state.currentStage = 1;
      state.fails = 0;
      save();
      rollNewFetish();
    }
  }, true));
  screen.appendChild(row);
}

function rollNewFetish() {
  const available = getAllFetishes();
  const pick = available[Math.floor(Math.random() * available.length)];
  state.activeFetish = pick;
  state.currentStage = 1;
  state.fails = 0;
  mediaMemory.imageUrl = "";
  mediaMemory.videoUrl = "";
  save();
  runPlacementTest(pick);
}

function runPlacementTest(fetish) {
  clearScreen();
  const c = card(`
    <h2>Placement Test</h2>
    <div class="fetish-name">${fetish.name}</div>
    <p>We need to know how much this already owns you.</p>
  `);
  c.appendChild(createMediaArea(fetish));

  let step = 0;
  const ratings = [];

  function next() {
    step++;
    if (step === 1) {
      clearScreen();
      const cardEl = card(`
        <h2>Test 1 / 3</h2>
        <p class="big-text">Look at the trigger for ${scaleTime(20)} seconds.<br>No touching.</p>
        <div class="timer" id="t">${scaleTime(20)}</div>
      `);
      cardEl.appendChild(createMediaArea(fetish));
      countdown(scaleTime(20), () => askRating("How strong was the physical response? (0–10)"));
    } else if (step === 2) {
      clearScreen();
      const cardEl = card(`
        <h2>Test 2 / 3</h2>
        <p class="big-text">Look again for ${scaleTime(40)} seconds.<br>Still no touching.</p>
        <div class="timer" id="t">${scaleTime(40)}</div>
        <p class="instruction">${fetish.ironic}</p>
      `);
      cardEl.appendChild(createMediaArea(fetish));
      countdown(scaleTime(40), () => askRating("Response strength this time?"));
    } else if (step === 3) {
      clearScreen();
      const cardEl = card(`
        <h2>Final Placement Stare</h2>
        <p class="big-text">${scaleTime(60)} seconds pure looking.</p>
        <div class="timer" id="t">${scaleTime(60)}</div>
      `);
      cardEl.appendChild(createMediaArea(fetish));
      countdown(scaleTime(60), () => askRating("Final pure response?"));
    } else {
      const avg = ratings.reduce((a, b) => a + b, 0) / ratings.length;
      let stage = 1;
      if (avg >= 8) stage = 4;
      else if (avg >= 6) stage = 3;
      else if (avg >= 4) stage = 2;
      state.currentStage = stage;
      save();
      clearScreen();
      card(`
        <h2>Placement Result</h2>
        <div class="fetish-name">${fetish.name}</div>
        <p>Average: <strong>${avg.toFixed(1)}/10</strong></p>
        <p class="big-text">Placed at <span style="color:var(--accent)">Stage ${stage}</span></p>
      `);
      const row = document.createElement("div");
      row.className = "btn-row";
      row.appendChild(btn(`Commit & Start Stage ${stage}`, () => startSession(stage)));
      row.appendChild(btn("Re-roll", () => {
        state.activeFetish = null;
        save();
        rollNewFetish();
      }, true));
      screen.appendChild(row);
    }
  }

  function askRating(q) {
    clearScreen();
    card(`<h2>${q}</h2>`);
    const row = document.createElement("div");
    row.className = "rating-row";
    for (let i = 0; i <= 10; i++) {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "rating-btn";
      b.textContent = i;
      b.onclick = () => { ratings.push(i); next(); };
      row.appendChild(b);
    }
    screen.appendChild(row);
  }

  next();
}

function startSession(stage) {
  const fetish = state.activeFetish;
  const brutalMod = Math.min(state.fails * 8 * (settings.brutalMult || 1), 50);
  clearScreen();
  const c = card(`
    <div class="stage-badge">Stage ${stage} / 6 — Brutal +${Math.round(brutalMod)}s</div>
    <div class="fetish-name">${fetish.name}</div>
    <p class="instruction">${fetish.ironic}</p>
  `);
  c.appendChild(createMediaArea(fetish));
  const row = document.createElement("div");
  row.className = "btn-row";
  row.appendChild(btn("I’m ready. Begin.", () => runStage(stage, brutalMod)));
  screen.appendChild(row);
}

function runStage(stage, brutalMod) {
  const fetish = state.activeFetish;
  const holdTime = scaleTime([25, 50, 90, 120, 180, 240][stage - 1] + brutalMod);
  const edgesNeeded = Math.min(2 + stage + Math.floor(state.fails / 2), 8);

  clearScreen();
  const c1 = card(`
    <h2>Phase 1 — Pairing</h2>
    <p class="big-text">Look at the trigger while you touch yourself slowly. No edge yet.</p>
    <div class="timer" id="t">${scaleTime(90)}</div>
    <p class="instruction">${getDegradingLine(stage, fetish)}</p>
  `);
  c1.appendChild(createMediaArea(fetish));
  countdown(scaleTime(90), phase2);

  function phase2() {
    clearScreen();
    card(`<h2>Phase 2 — Forced Edges</h2>
      <p>Take <strong>${edgesNeeded}</strong> edges. On each edge freeze and stare 15 s.</p>`);
    let edgesDone = 0;
    function doEdge() {
      edgesDone++;
      if (edgesDone > edgesNeeded) { pureTest(); return; }
      clearScreen();
      const ce = card(`
        <h2>Edge ${edgesDone} / ${edgesNeeded}</h2>
        <p class="big-text">Stroke to the edge, then stop and stare.</p>
        <div class="timer" id="t">15</div>
        <p class="instruction">${getDegradingLine(stage, fetish)}</p>
      `);
      ce.appendChild(createMediaArea(fetish));
      const row = document.createElement("div");
      row.className = "btn-row";
      row.appendChild(btn("I’m at the edge — start stare", () => countdown(15, doEdge)));
      screen.appendChild(row);
    }
    doEdge();
  }

  function pureTest() {
    clearScreen();
    const cp = card(`
      <h2>Pure Trigger Test</h2>
      <p class="big-text">Hands off. Only looking for <strong>${holdTime} s</strong>.</p>
      <div class="timer" id="t">${holdTime}</div>
      <p class="instruction">${fetish.ironic}</p>
      <p class="warning">If you touch, the test fails.</p>
    `);
    cp.appendChild(createMediaArea(fetish));
    countdown(holdTime, () => {
      clearScreen();
      card(`<h2>Rate your pure response</h2>
        <p>0 = nothing • 10 = hard / leaking / drooling / mind blank</p>`);
      const row = document.createElement("div");
      row.className = "rating-row";
      for (let i = 0; i <= 10; i++) {
        const b = document.createElement("button");
        b.type = "button";
        b.className = "rating-btn";
        b.textContent = i;
        b.onclick = () => finishStage(i, stage);
        row.appendChild(b);
      }
      screen.appendChild(row);
    });
  }
}

function finishStage(rating, stage) {
  state.lastRating = rating;
  const passed = rating >= 7;
  if (passed) {
    const gain = Math.round((3 + stage) * (settings.gainMult || 1));
    state.corruption = Math.min(100, state.corruption + gain);
    if (stage < 6) {
      state.currentStage = stage + 1;
      state.fails = Math.max(0, state.fails - 1);
    } else {
      state.activeFetish = null;
      state.currentStage = 1;
      state.fails = 0;
      state.corruption = Math.min(100, state.corruption + Math.round(8 * (settings.gainMult || 1)));
    }
    save();
    clearScreen();
    card(`
      <h2 style="color:var(--success)">Stage Passed</h2>
      <p class="big-text">Response ${rating}/10</p>
      <p>Corruption +${gain}</p>
      ${stage === 6 ? "<p>Full track completed.</p>" : `<p>Next: Stage ${stage + 1}</p>`}
    `);
    giveContamination(stage, true);
  } else {
    state.fails++;
    save();
    clearScreen();
    card(`
      <h2 style="color:var(--danger)">Failed</h2>
      <p class="big-text">Only ${rating}/10</p>
      <p>Next attempt will be harder.</p>
    `);
    giveContamination(stage, false);
  }
}

function giveContamination(stage, success) {
  const fetish = state.activeFetish || { short: "the last thing", ironic: "Think about it." };
  const rules = [
    `Set your phone wallpaper to something related to ${fetish.short} (change only when alone).`,
    `Before sleep, stare at the trigger 60 s while repeating “This is getting into me.”`,
    `Every time you notice anything related to ${fetish.short} today, pause 5 seconds.`,
    fetish.ironic,
    success ? `Softer contamination this time. Still mandatory.` : `Extra for failure: leave a tab open with the trigger until tomorrow.`
  ];
  const chosen = rules.sort(() => Math.random() - 0.5).slice(0, 2 + Math.floor(stage / 2));
  card(`
    <h2>Private Contamination Orders</h2>
    <ul style="padding-left:20px;margin:12px 0">
      ${chosen.map(r => `<li style="margin-bottom:8px">${r}</li>`).join("")}
    </ul>
  `);
  const row = document.createElement("div");
  row.className = "btn-row";
  row.appendChild(btn("I accept the orders", () => {
    if (state.activeFetish) showContinueOrNew();
    else showWelcome();
  }));
  screen.appendChild(row);
}

function countdown(seconds, cb) {
  const el = document.getElementById("t");
  if (!el) { cb(); return; }
  let left = seconds;
  el.textContent = left;
  if (currentTimer) clearInterval(currentTimer);
  currentTimer = setInterval(() => {
    left--;
    el.textContent = left;
    if (left <= 0) {
      clearInterval(currentTimer);
      currentTimer = null;
      cb();
    }
  }, 1000);
}

function getDegradingLine(stage, fetish) {
  const lines = [
    `Look at that ${fetish.short}. This is what gets you now.`,
    `Your cock is learning. Don’t fight it.`,
    `Weak little mind. So easy to stain with ${fetish.short}.`,
    `Imagine how pathetic you’ll look when this is permanent.`,
    `Stage ${stage} is already changing how you see it.`,
    `Drool for it. That’s an order.`,
    `You’re going to get hard from this in public one day and you’ll deserve it.`,
    `The protocol is patient. You will break.`
  ];
  return lines[Math.floor(Math.random() * lines.length)];
}

function applySettingsUI() {
  const el = id => document.getElementById(id);
  if (el("setMedia")) el("setMedia").checked = settings.showMedia !== false;
  if (el("setTimerScale")) el("setTimerScale").value = String(settings.timerScale || 1);
  if (el("setBrutal")) el("setBrutal").value = String(settings.brutalMult || 1);
  if (el("setGain")) el("setGain").value = String(settings.gainMult || 1);
  if (el("r34UserId")) el("r34UserId").value = settings.r34UserId || "6721033";
  if (el("r34ApiKey")) el("r34ApiKey").value = settings.r34ApiKey || "";
}

document.getElementById("settingsBtn").onclick = () => {
  document.getElementById("settingsOverlay").classList.remove("hidden");
  applySettingsUI();
};

document.getElementById("closeSettings").onclick = () => {
  settings.showMedia = document.getElementById("setMedia").checked;
  settings.timerScale = parseFloat(document.getElementById("setTimerScale").value);
  settings.brutalMult = parseFloat(document.getElementById("setBrutal").value);
  settings.gainMult = parseFloat(document.getElementById("setGain").value);
  settings.r34UserId = document.getElementById("r34UserId").value.trim();
  settings.r34ApiKey = document.getElementById("r34ApiKey").value.trim();
  save();
  document.getElementById("settingsOverlay").classList.add("hidden");
};

document.getElementById("addCustomBtn").onclick = () => {
  const name = document.getElementById("customName").value.trim();
  const short = document.getElementById("customShort").value.trim();
  const ironic = document.getElementById("customIronic").value.trim() || "Focus on it.";
  const search = document.getElementById("customSearch").value.trim() || short;
  if (!name || !short) return alert("Name and short name required");
  state.customFetishes = state.customFetishes || [];
  state.customFetishes.push({ id: Date.now(), name, short, ironic, search });
  save();
  ["customName", "customShort", "customIronic", "customSearch"].forEach(id => {
    document.getElementById(id).value = "";
  });
  alert("Custom fetish added.");
};

document.getElementById("resetBtn").onclick = () => {
  if (confirm("Erase all progress?")) {
    localStorage.removeItem("corruptionProtocol");
    state = { corruption: 0, activeFetish: null, currentStage: 1, fails: 0, lastRating: 0, customFetishes: [] };
    mediaMemory.imageUrl = "";
    mediaMemory.videoUrl = "";
    save();
    showWelcome();
  }
};

start();
