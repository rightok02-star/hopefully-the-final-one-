const DEFAULT_FETISHES = [
  // --- Tame / mild ---
  { id: 1, name: "Bare feet and soft soles", short: "bare feet", ironic: "Keep your own bare feet on the floor the whole time.", search: "feet soles barefoot foot_focus" },
  { id: 2, name: "Thighs in shorts", short: "thighs", ironic: "Keep your thighs pressed together while you stare.", search: "thighs thick_thighs shorts" },
  { id: 3, name: "Soft belly under a shirt", short: "soft belly", ironic: "Rest a hand on your own stomach while looking.", search: "belly navel midriff" },
  { id: 4, name: "Armpits on display", short: "armpits", ironic: "Keep one arm raised for a while after the session.", search: "armpits arms_up" },
  { id: 5, name: "Socks and ankles", short: "socks", ironic: "Wear the same socks the rest of the day.", search: "socks ankle_socks feet" },
  { id: 6, name: "Lips and tongue out", short: "tongue out", ironic: "Keep your mouth slightly open while staring.", search: "tongue_out saliva open_mouth" },
  { id: 7, name: "Hands and fingers close-up", short: "hands", ironic: "Flex and stare at your own hands between looks.", search: "hands fingers close-up" },
  { id: 8, name: "Hair down the body", short: "body hair", ironic: "Run fingers over any body hair you have while looking.", search: "body_hair armpit_hair" },

  // --- Medium ---
  { id: 9, name: "Sweaty skin shine", short: "sweat", ironic: "Don’t towel off after the session.", search: "sweat sweaty glistening" },
  { id: 10, name: "Drool and spit strings", short: "drool", ironic: "Let real spit sit on your lip when told.", search: "saliva drool spit tongue_out" },
  { id: 11, name: "Panties and waistband dig", short: "panties", ironic: "Notice every waistband line on yourself today.", search: "panties cameltoe ass" },
  { id: 12, name: "Ass focus, soft and full", short: "ass focus", ironic: "Sit fully on your own heels or hands for a minute.", search: "ass butt from_behind" },
  { id: 13, name: "Chubby / soft body folds", short: "soft folds", ironic: "Squeeze one soft place on yourself while staring.", search: "chubby plump belly rolls" },
  { id: 14, name: "Stockings and pantyhose", short: "stockings", ironic: "Wear something snug on your legs if you can.", search: "stockings pantyhose legs" },
  { id: 15, name: "Open-mouth dumb face", short: "ahegao face", ironic: "Let your face go slack and breathe through your mouth.", search: "ahegao open_mouth saliva" },
  { id: 16, name: "Breasts pressed and soft", short: "soft chest", ironic: "Press your arms against your chest when the timer hits zero.", search: "breasts cleavage paizuri" },
  { id: 17, name: "Foot in face / POV soles", short: "soles POV", ironic: "Imagine soles filling your vision and don’t look away.", search: "foot_focus soles pov feet" },
  { id: 18, name: "Used / worn look on clothes", short: "worn clothes", ironic: "Sniff a piece of your own laundry once before bed.", search: "panties clothes_lift disheveled" },

  // --- Heavy ---
  { id: 19, name: "Cum on face / messy finish", short: "cum face", ironic: "At the end, smear spit on your own cheek once.", search: "cum_on_face facial cum" },
  { id: 20, name: "Public risk fantasy stills", short: "public tease", ironic: "Notice how hard it is to keep a straight face in public later.", search: "public exhibition outdoor" },
  { id: 21, name: "Bondage marks and restraint", short: "restraint", ironic: "Keep wrists crossed behind you for one full timer.", search: "bondage bound restrained" },
  { id: 22, name: "Pet play collar stare", short: "collar", ironic: "Kneel for thirty seconds after a pure stare.", search: "collar pet_play leash" },
  { id: 23, name: "Mind-break expression", short: "mind break", ironic: "Repeat out loud once: this is wiring into me.", search: "ahegao fucked_silly rolling_eyes" },
  { id: 24, name: "Heavy sweat and exhaustion", short: "exhausted sweat", ironic: "Do not shower until an hour after the session.", search: "sweat after_sex exhausted" },

  // --- Extreme (still common on Rule34) ---
  { id: 25, name: "Tentacle overwhelm", short: "tentacles", ironic: "Imagine being held still with nowhere to look but the trigger.", search: "tentacles tentacle_sex restrained" },
  { id: 26, name: "Inflation / overfull body", short: "inflation", ironic: "Poke your stomach and hold the thought of being too full.", search: "inflation belly expansion" },
  { id: 27, name: "Monster / non-human partner", short: "monster", ironic: "Admit out loud that the image is allowed to own your reaction.", search: "monster monster_girl bestiality" },
  { id: 28, name: "All the way through / extreme insertion art", short: "extreme insertion", ironic: "Hands off during pure stare — only looking.", search: "all_the_way_through insertion" },
  { id: 29, name: "Gang focus / surrounded", short: "surrounded", ironic: "Picture being the only focus in a crowd of attention.", search: "group sex multiple_boys" },
  { id: 30, name: "Hypnosis swirl mindfuck", short: "hypnosis", ironic: "Stare until your thoughts thin out. No touching on pure tests.", search: "hypnosis spiral mind_control" }
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
  if (!settings.r34UserId) settings.r34UserId = "6721033";
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
    throw new Error("Open ⚙ Settings and enter both Rule34 User ID and API Key, then Save & Close.");
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

  if (data && data.message) throw new Error(String(data.message));
  if (typeof data === "string" && /missing authentication/i.test(data)) {
    throw new Error("Missing authentication — API Key is wrong or empty.");
  }
  if (!Array.isArray(data) || data.length === 0) {
    throw new Error("No results for tags: " + tags);
  }

  const pool = data
    .map(p => p.sample_url || p.file_url || p.preview_url)
    .filter(u => u && /\.(jpg|jpeg|png|gif|webp)(\?|$)/i.test(u));

  if (!pool.length) throw new Error("Posts found but no image URLs.");
  return pool[Math.floor(Math.random() * pool.length)];
}

function createMediaArea(fetish) {
  if (settings.showMedia === false) return document.createElement("div");

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
    ? "Tags: " + fetishToTags(fetish) + " — Grab image for a random hit."
    : "⚙ → paste API Key → Save & Close, then Grab image.";

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
        img.onerror = () => { status.textContent = "Image failed — Grab again."; };
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
    <p>Fetishes are tagged for Rule34 (tame → extreme). ⚙ → API key → Roll → <strong>Grab image</strong>.</p>
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
    <p>Tags: <code>${fetishToTags(fetish)}</code> — use <strong>Grab image</strong>.</p>
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
  settings.r34UserId = document.getElementById("r34UserId").value.trim() || "6721033";
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
