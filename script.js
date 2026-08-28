const DEFAULT_FETISHES = [
  { id: 1, name: "Bare feet and soft soles", short: "bare feet", search: "feet",
    ironic: "Plant your own bare feet flat and don’t lift them until the phase ends.",
    pairing: "Trace the arch with your eyes on every beat. Match strokes to the BPM.",
    edge: "At the edge, stare into the deepest crease of the sole. Freeze. Count ticks out loud.",
    pure: "No hands. Only soles. Breathe with the last rhythm you heard.",
    degrade: ["Those soles own more of you than any face does.", "Your cock is learning the shape of an arch."] },
  { id: 2, name: "Thighs in shorts", short: "thighs", search: "thighs",
    ironic: "Press your thighs together hard enough to feel heat build.",
    pairing: "Watch where fabric bites soft skin. Stroke only on the downbeat.",
    edge: "Edge while imagining those thighs locked around your head.",
    pure: "Thighs only. No touching. Keep yours locked.",
    degrade: ["Thick thighs teach weak minds faster than words.", "You’re training to get hard from fabric strain."] },
  { id: 3, name: "Soft belly under a shirt", short: "soft belly", search: "belly",
    ironic: "Rest your free palm on your own stomach and leave it there.",
    pairing: "Follow every soft roll. Stroke soft when the belly looks soft.",
    edge: "Edge with a hand on your own gut. Link pressure to the image.",
    pure: "Hands off cock. Hand may stay on belly. Stare into the softest part.",
    degrade: ["Soft stomach, soft resistance — both giving way.", "You’re starting to want the give of flesh."] },
  { id: 4, name: "Armpits on display", short: "armpits", search: "armpits",
    ironic: "Keep one of your arms raised until the timer dies.",
    pairing: "Stare into the hollow. Stroke only after each tick — delayed on purpose.",
    edge: "Edge while inhaling like you’re catching scent from the screen.",
    pure: "Arm still up. No stroking. Just the pit and your open mouth.",
    degrade: ["Even a patch of skin can rewire you.", "You’re practicing hunger for places people hide."] },
  { id: 5, name: "Socks and ankles", short: "socks", search: "socks",
    ironic: "Wear the same socks the rest of the day without changing them.",
    pairing: "Watch fabric stretch over ankle bone. Match strokes to BPM like a march.",
    edge: "Edge thinking about peeling that sock with your teeth. Freeze on the cuff.",
    pure: "Socks stay on you. Eyes stay on them. Hands dead.",
    degrade: ["Something as dumb as a sock is getting privileged access to your cock.", "You’re becoming easy to mark."] },
  { id: 6, name: "Lips and tongue out", short: "tongue out", search: "tongue_out",
    ironic: "Keep your own tongue on your lower lip for the whole pure stare.",
    pairing: "Mirror the open mouth. Stroke when the tongue moves in your head on each beat.",
    edge: "Edge with mouth open. Drool is allowed.",
    pure: "Tongue out. No hands. Let the face on screen set your face.",
    degrade: ["Your mouth is learning to stay stupid on command.", "Spit is becoming part of the ritual."] },
  { id: 7, name: "Hands and fingers close-up", short: "hands", search: "hands",
    ironic: "Between strokes, flex your free hand until veins show.",
    pairing: "Study knuckle, nail, crease. One stroke per beat — no freestyling.",
    edge: "Edge while imagining those fingers on your throat.",
    pure: "Your hands stay visible and empty. Only looking.",
    degrade: ["Even hands can become a fetish if the protocol repeats them enough.", "You’re being taught detail-hunger."] },
  { id: 8, name: "Hair down the body", short: "body hair", search: "body_hair",
    ironic: "Rake your fingers through any body hair you have once per phase.",
    pairing: "Follow the grain on screen. Stroke with that same direction.",
    edge: "Edge while touching your own hair patch. Link texture to heat.",
    pure: "No cock. Maybe hair. Eyes on the densest patch.",
    degrade: ["Natural mess is becoming your preferred setting.", "You’re unlearning smooth as the default."] },
  { id: 9, name: "Sweaty skin shine", short: "sweat", search: "sweat",
    ironic: "Don’t wipe sweat during the session. Let it sit.",
    pairing: "Chase the shine across skin on every beat.",
    edge: "Edge imagining salt taste. Freeze on the brightest highlight.",
    pure: "Heat only. No touch. Stare until you feel warmer.",
    degrade: ["Clean is boring you already.", "Your body is pairing arousal with damp skin."] },
  { id: 10, name: "Drool and spit strings", short: "drool", search: "saliva",
    ironic: "When ordered, let a real string of spit hang before you swallow.",
    pairing: "Watch every strand. Stroke only while you imagine the stretch of it.",
    edge: "Edge with mouth wet. At freeze, let spit move for real.",
    pure: "Mouth open, hands dead, eyes on the messiest string.",
    degrade: ["You’re training to get hard from something gross on purpose.", "Disgust is converting into fuel."] },
  { id: 11, name: "Panties and waistband dig", short: "panties", search: "panties",
    ironic: "Notice every elastic line on your own body today.",
    pairing: "Stare where fabric disappears into flesh. BPM = stroke rate.",
    edge: "Edge thinking about fabric cutting in. Freeze on the deepest dig.",
    pure: "Underwear thoughts only. Hands off.",
    degrade: ["Cloth marks are becoming erotic data.", "You’re learning to want the squeeze of something too small."] },
  { id: 12, name: "Ass focus, soft and full", short: "ass focus", search: "ass",
    ironic: "Sit on your hands for one full pure stare so you feel your own weight.",
    pairing: "Trace the curve on the beat. Stroke heavier on the downbeats.",
    edge: "Edge from behind in your head. Hold the peak while staring.",
    pure: "Hands trapped or dead. Ass on screen is the only allowed focus.",
    degrade: ["Your eyes keep dropping lower. The protocol notices.", "Soft ass is rewriting your default stare."] },
  { id: 13, name: "Chubby / soft body folds", short: "soft folds", search: "chubby",
    ironic: "Pinch a soft fold on yourself once when each timer ends.",
    pairing: "Study the fold lines. Soft strokes on soft flesh — match tenderness.",
    edge: "Edge while squeezing your own softness.",
    pure: "No stroke. Maybe a held pinch. Eyes in the deepest crease.",
    degrade: ["Softness is winning the argument against your old preferences.", "You’re being fattened in the head first."] },
  { id: 14, name: "Stockings and pantyhose", short: "stockings", search: "stockings",
    ironic: "If you own something sheer, wear it for contamination later.",
    pairing: "Watch light catch on nylon. Long pulls on slow BPM, short on fast.",
    edge: "Edge imagining a run under your fingers. Freeze on the shine.",
    pure: "Sheer focus only. Hands empty.",
    degrade: ["Synthetic sheen is becoming a trigger color.", "Your cock is learning fabric languages."] },
  { id: 15, name: "Open-mouth dumb face", short: "ahegao face", search: "ahegao",
    ironic: "Drop your jaw for every pure stare. Breathe loud on purpose.",
    pairing: "Copy the vacancy with your face while you stroke on the metronome.",
    edge: "Edge with eyes half-lid. At freeze, look as stupid as the image.",
    pure: "Face slack. Drool allowed. Brain on mute.",
    degrade: ["Intelligence is optional during protocol hours.", "Blank faces are installing faster than thoughts."] },
  { id: 16, name: "Breasts pressed and soft", short: "soft chest", search: "breasts",
    ironic: "Press your arms into your chest on every timer zero.",
    pairing: "Watch pressure and spill of soft tissue. Stroke in time like a squeeze.",
    edge: "Edge imagining being smothered soft. Hold breath one beat at freeze.",
    pure: "Chest on screen. Arms on you. Cock ignored.",
    degrade: ["Soft pressure is becoming your favorite kind of force.", "You’re pairing comfort with surrender."] },
  { id: 17, name: "Foot in face / POV soles", short: "soles POV", search: "soles",
    ironic: "Lean your face closer to the screen during pure stares.",
    pairing: "POV means the sole is already on you. Stroke under that weight in your head.",
    edge: "Edge like you can’t turn your head away. Freeze on the heel.",
    pure: "Close distance. No hands. Sole fills the frame.",
    degrade: ["Your place is under, not beside.", "The protocol is teaching floor-level loyalty."] },
  { id: 18, name: "Used / worn look on clothes", short: "worn clothes", search: "panties",
    ironic: "Sniff a worn shirt of yours once before sleep tonight.",
    pairing: "Hunt for wrinkles and stress on fabric. Stroke when you find a detail.",
    edge: "Edge to the idea of already used. Freeze on the most lived-in part.",
    pure: "Used look only. Clean fantasies banned for this timer.",
    degrade: ["Fresh is losing status in your head.", "Wear and mess are climbing the ranking."] },
  { id: 19, name: "Cum on face / messy finish", short: "cum face", search: "cum_on_face",
    ironic: "At session end, put spit on your own cheek once and leave it a minute.",
    pairing: "Watch the mess land and drip in your imagination on each beat.",
    edge: "Edge toward marked skin. Freeze on the thickest streak.",
    pure: "Mess on face. Clean hands. Don’t wipe the thought away.",
    degrade: ["A marked face is starting to look correct to you.", "You’re rehearsing pride in looking ruined."] },
  { id: 20, name: "Public risk fantasy stills", short: "public tease", search: "public",
    ironic: "Later, notice one public place and feel the protocol flicker.",
    pairing: "Imagine being caught mid-stare. Stroke steady — panic is not an excuse to speed.",
    edge: "Edge with the fantasy of eyes on you. Freeze like headlights.",
    pure: "Public shame heat, private hands-off. Only looking.",
    degrade: ["Risk is seasoning your arousal now.", "You’re practicing how to stay hard while exposed in the mind."] },
  { id: 21, name: "Bondage marks and restraint", short: "restraint", search: "bondage",
    ironic: "Cross your wrists behind you for any pure stare you can manage.",
    pairing: "Notice rope dig and helplessness. Stroke only when the BPM allows.",
    edge: "Edge while pretending your hand needs permission. Freeze on a knot.",
    pure: "Restrained mind. Empty hands. Stare into the bind.",
    degrade: ["Freedom is overrated when the image holds you better.", "You’re practicing stillness as obedience."] },
  { id: 22, name: "Pet play collar stare", short: "collar", search: "collar",
    ironic: "Kneel for thirty seconds after any pure stare.",
    pairing: "Eyes on the collar ring. Stroke on all fours in your head.",
    edge: "Edge like a pet waiting for a word. Freeze on the lock or tag.",
    pure: "Kneel if you can. Collar on screen. No stroking.",
    degrade: ["Your spine is learning a lower default height.", "Good pets stare until told otherwise."] },
  { id: 23, name: "Mind-break expression", short: "mind break", search: "ahegao",
    ironic: "Say once per pure stare: this is wiring into me.",
    pairing: "Match the broken expression. Let the BPM scramble tidy rhythm when it jumps.",
    edge: "Edge until thought thins. Freeze with empty eyes.",
    pure: "No clever thoughts. No hands. Just the broken face.",
    degrade: ["Coherence is optional under protocol.", "You’re practicing how to look used in the head."] },
  { id: 24, name: "Heavy sweat and exhaustion", short: "exhausted sweat", search: "sweat",
    ironic: "No shower for at least an hour after you finish.",
    pairing: "Study tired muscles and wet skin. Stroke heavy, a little sloppy, still on beat.",
    edge: "Edge like you’re already spent and still being used.",
    pure: "Exhausted eyes. Still staring. Hands dead.",
    degrade: ["Tired is becoming an attractive state to you.", "You’re pairing afterglow mess with wanting more."] },
  { id: 25, name: "Tentacle overwhelm", short: "tentacles", search: "tentacles",
    ironic: "Imagine one limb holding your wrist still during pure stare.",
    pairing: "Count coils with your eyes. Stroke when a tentacle would squeeze — on the beat.",
    edge: "Edge while surrounded in your head. Freeze like something stronger paused you.",
    pure: "Held still by the idea. No fighting the stare.",
    degrade: ["Human partners are starting to feel under-equipped in fantasy.", "Overwhelm is the point."] },
  { id: 26, name: "Inflation / overfull body", short: "inflation", search: "inflation",
    ironic: "Poke your stomach at every timer zero and hold for three beats.",
    pairing: "Watch the swell. Fuller slower strokes when BPM drops; tighter when it climbs.",
    edge: "Edge with a palm on your gut. Freeze on maximum roundness.",
    pure: "Fullness fantasy. Empty hand. Stare until too warm.",
    degrade: ["More is rewriting enough.", "Your hunger is practicing excess on purpose."] },
  { id: 27, name: "Monster / non-human partner", short: "monster", search: "monster",
    ironic: "Admit once: the image is allowed to own this reaction.",
    pairing: "Study the least human detail first, then stroke on the BPM.",
    edge: "Edge to otherness. Freeze on the least human feature.",
    pure: "No human comfort. Just the creature and your open eyes.",
    degrade: ["Normal is losing its monopoly on your cock.", "You’re expanding what gets to claim you."] },
  { id: 28, name: "Extreme insertion art", short: "extreme insertion", search: "insertion",
    ironic: "Hands strictly off during pure stare — the art does the violating.",
    pairing: "Follow the depth with your eyes. Stroke shallow or deep with BPM shifts.",
    edge: "Edge at the idea of no limit. Freeze on the most intense point.",
    pure: "Only eyes. Let extremity work without your hand helping.",
    degrade: ["Limits were always negotiable in fantasy.", "Shock is converting into interest. Notice that."] },
  { id: 29, name: "Gang focus / surrounded", short: "surrounded", search: "group",
    ironic: "Picture being the only soft point in a ring of attention.",
    pairing: "Jump your eyes between bodies on each beat. Stroke like keeping up with a group.",
    edge: "Edge while outnumbered in your head. Freeze on one face in the crowd.",
    pure: "Surrounded, untouched by your own hand. Stare into the cluster.",
    degrade: ["One partner is starting to feel sparse.", "You’re practicing being central and used."] },
  { id: 30, name: "Hypnosis swirl mindfuck", short: "hypnosis", search: "hypnosis",
    ironic: "Stare until thoughts thin. If you catch yourself thinking, return to the spiral.",
    pairing: "Lock on the swirl or eyes. Stroke only on BPM — the rhythm is the induction.",
    edge: "Edge while repeating watch in your head. Freeze when the image seems to pulse.",
    pure: "No hands. Fall into the pattern.",
    degrade: ["Your attention is the leash and you keep handing it over.", "The protocol loves a mind that follows motion."] }
];

const METER_LABELS = [
  { max: 10, text: "Still clean…" },
  { max: 25, text: "Getting stained…" },
  { max: 45, text: "Properly marked…" },
  { max: 65, text: "Mind getting fucked…" },
  { max: 85, text: "Deeply corrupted…" },
  { max: 100, text: "Completely broken toy" }
];

const BPM_PATTERNS = {
  pairing: [
    { bpm: 56, seconds: 15, hint: "Slow warm-up — long strokes" },
    { bpm: 72, seconds: 15, hint: "Steady pace" },
    { bpm: 96, seconds: 20, hint: "Building — shorter strokes" },
    { bpm: 64, seconds: 15, hint: "Drop — tease, don’t rush" },
    { bpm: 110, seconds: 15, hint: "Fast pressure" },
    { bpm: 80, seconds: 10, hint: "Settle before edges" }
  ],
  edgeStare: [{ bpm: 48, seconds: 15, hint: "Frozen body — slow mental pulse" }],
  pure: [{ bpm: 52, seconds: 999, hint: "Breathing rhythm only — no stroking" }]
};

let state = {
  corruption: 0, activeFetish: null, currentStage: 1, fails: 0, lastRating: 0, customFetishes: []
};

let settings = {
  showMedia: true, sfx: true, ambient: true, metronome: true, volume: 0.35,
  timerScale: 1, brutalMult: 1, gainMult: 1, r34UserId: "6721033", r34ApiKey: ""
};

let currentTimer = null;
let bpmTimer = null;
let bpmTickTimer = null;
let fluidInstance = null;
const mediaMemory = { imageUrl: "", videoUrl: "", mode: "image" };

let audioCtx = null;
let ambientNodes = null;

function ensureAudio() {
  if (!audioCtx) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    audioCtx = new AC();
  }
  if (audioCtx.state === "suspended") audioCtx.resume();
  return audioCtx;
}

function vol() { return Math.max(0, Math.min(1, settings.volume ?? 0.35)); }

function playTone(freq, duration, type, gainMul) {
  if (!settings.sfx) return;
  const ctx = ensureAudio();
  if (!ctx) return;
  const t = ctx.currentTime;
  const osc = ctx.createOscillator();
  const g = ctx.createGain();
  osc.type = type || "sine";
  osc.frequency.value = freq;
  const peak = vol() * (gainMul ?? 0.2);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(Math.max(peak, 0.0002), t + 0.01);
  g.gain.exponentialRampToValueAtTime(0.0001, t + duration);
  osc.connect(g);
  g.connect(ctx.destination);
  osc.start(t);
  osc.stop(t + duration + 0.02);
}

function sfxTick() { playTone(880, 0.08, "sine", 0.12); }
function sfxWarn() { playTone(420, 0.15, "triangle", 0.18); playTone(520, 0.12, "sine", 0.1); }
function sfxDone() {
  playTone(523, 0.12, "sine", 0.2);
  setTimeout(() => playTone(659, 0.14, "sine", 0.18), 100);
  setTimeout(() => playTone(784, 0.2, "sine", 0.16), 220);
}
function sfxPass() { playTone(600, 0.1, "sine", 0.15); setTimeout(() => playTone(900, 0.2, "sine", 0.18), 90); }
function sfxFail() { playTone(200, 0.25, "sawtooth", 0.12); }

function metroClick(accent) {
  if (!settings.metronome) return;
  const ctx = ensureAudio();
  if (!ctx) return;
  const t = ctx.currentTime;
  const osc = ctx.createOscillator();
  const g = ctx.createGain();
  osc.type = "square";
  osc.frequency.value = accent ? 1400 : 900;
  const peak = vol() * (accent ? 0.16 : 0.09);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(peak, t + 0.005);
  g.gain.exponentialRampToValueAtTime(0.0001, t + 0.05);
  osc.connect(g);
  g.connect(ctx.destination);
  osc.start(t);
  osc.stop(t + 0.06);
  const el = document.getElementById("bpmValue");
  if (el) { el.classList.remove("bpm-pulse"); void el.offsetWidth; el.classList.add("bpm-pulse"); }
}

function startAmbient() {
  stopAmbient();
  if (!settings.ambient) return;
  const ctx = ensureAudio();
  if (!ctx) return;
  const osc1 = ctx.createOscillator();
  const osc2 = ctx.createOscillator();
  const g = ctx.createGain();
  const filter = ctx.createBiquadFilter();
  osc1.type = "sine"; osc2.type = "sine";
  osc1.frequency.value = 55; osc2.frequency.value = 82.5;
  filter.type = "lowpass"; filter.frequency.value = 180;
  g.gain.value = vol() * 0.035;
  osc1.connect(filter); osc2.connect(filter); filter.connect(g); g.connect(ctx.destination);
  osc1.start(); osc2.start();
  ambientNodes = { osc1, osc2, g };
}

function stopAmbient() {
  if (!ambientNodes) return;
  try { ambientNodes.osc1.stop(); ambientNodes.osc2.stop(); } catch (e) {}
  ambientNodes = null;
}

function stopBpm() {
  if (bpmTimer) { clearTimeout(bpmTimer); bpmTimer = null; }
  if (bpmTickTimer) { clearInterval(bpmTickTimer); bpmTickTimer = null; }
}

function startBpmPattern(patternKey) {
  stopBpm();
  if (!settings.metronome) return;
  const pattern = BPM_PATTERNS[patternKey];
  if (!pattern || !pattern.length) return;
  let idx = 0;
  let beat = 0;

  function runSegment() {
    if (idx >= pattern.length) idx = pattern.length - 1;
    const seg = pattern[idx];
    const bpmEl = document.getElementById("bpmValue");
    const hintEl = document.getElementById("bpmHint");
    if (bpmEl) bpmEl.textContent = String(seg.bpm);
    if (hintEl) hintEl.textContent = seg.hint || "Match this pace";
    if (bpmTickTimer) clearInterval(bpmTickTimer);
    beat = 0;
    const interval = 60000 / seg.bpm;
    metroClick(true);
    bpmTickTimer = setInterval(() => { beat++; metroClick(beat % 4 === 0); }, interval);
    const dur = Math.min(seg.seconds, 600) * 1000 * (settings.timerScale || 1);
    bpmTimer = setTimeout(() => { idx++; if (idx < pattern.length) runSegment(); }, dur);
  }
  runSegment();
}

function bpmHtml() {
  return `<div class="bpm-wrap" id="bpmWrap">
    <div class="bpm-label">STROKE BPM</div>
    <div class="bpm-value" id="bpmValue">—</div>
    <div class="bpm-hint" id="bpmHint">Metronome follows the phase</div>
  </div>`;
}

function destroyFluid() {
  if (fluidInstance && typeof fluidInstance.destroy === "function") {
    try { fluidInstance.destroy(); } catch (e) {}
  }
  fluidInstance = null;
}

function load() {
  try {
    const saved = localStorage.getItem("corruptionProtocol");
    if (saved) state = { ...state, ...JSON.parse(saved) };
    const s = localStorage.getItem("corruptionSettings");
    if (s) settings = { ...settings, ...JSON.parse(s) };
  } catch (e) {}
  if (!settings.r34UserId) settings.r34UserId = "6721033";
  if (settings.volume > 1) settings.volume = settings.volume / 100;
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
  const first = raw.replace(/[^\w\s+_:-]/g, " ").trim().split(/\s+/).filter(Boolean)[0];
  return first || "1girl";
}

function pickDegrade(fetish) {
  const arr = fetish.degrade || ["The protocol is patient. You will break."];
  return arr[Math.floor(Math.random() * arr.length)];
}

async function grabRule34(fetish, wantVideo) {
  const userId = (settings.r34UserId || "").trim();
  const apiKey = (settings.r34ApiKey || "").trim();
  if (!userId || !apiKey) throw new Error("Open ⚙ and enter Rule34 User ID + API Key, then Save & Close.");

  const tags = fetishToTags(fetish);
  // Prefer video posts when requesting video
  const tagQuery = wantVideo ? (tags + " video") : tags;
  const pid = Math.floor(Math.random() * 20);
  const url =
    "https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&json=1" +
    "&limit=50&pid=" + pid +
    "&tags=" + encodeURIComponent(tagQuery) +
    "&user_id=" + encodeURIComponent(userId) +
    "&api_key=" + encodeURIComponent(apiKey);

  const res = await fetch(url);
  const text = await res.text();
  let data;
  try { data = JSON.parse(text); } catch (e) {
    throw new Error("Rule34 returned non-JSON. Check API key / User ID.");
  }
  if (data && data.message) throw new Error(String(data.message));
  if (typeof data === "string" && /missing authentication/i.test(data)) {
    throw new Error("Missing authentication — API Key wrong or empty.");
  }
  if (!Array.isArray(data) || data.length === 0) {
    // retry without " video" suffix for videos
    if (wantVideo && tagQuery !== tags) return grabRule34FallbackVideo(fetish, tags, userId, apiKey);
    throw new Error("No results for tag: " + tags);
  }

  if (wantVideo) {
    let pool = data
      .map(p => p.file_url || p.sample_url)
      .filter(u => u && /\.(mp4|webm)(\?|$)/i.test(u));
    if (!pool.length) return grabRule34FallbackVideo(fetish, tags, userId, apiKey);
    return pool[Math.floor(Math.random() * pool.length)];
  }

  const pool = data
    .map(p => p.sample_url || p.file_url || p.preview_url)
    .filter(u => u && /\.(jpg|jpeg|png|gif|webp)(\?|$)/i.test(u));
  if (!pool.length) throw new Error("Posts found but no image URLs.");
  return pool[Math.floor(Math.random() * pool.length)];
}

async function grabRule34FallbackVideo(fetish, tags, userId, apiKey) {
  const pid = Math.floor(Math.random() * 15);
  const url =
    "https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&json=1" +
    "&limit=50&pid=" + pid +
    "&tags=" + encodeURIComponent(tags) +
    "&user_id=" + encodeURIComponent(userId) +
    "&api_key=" + encodeURIComponent(apiKey);
  const res = await fetch(url);
  const data = await res.json();
  if (!Array.isArray(data)) throw new Error("No video results for tag: " + tags);
  const pool = data
    .map(p => p.file_url || p.sample_url)
    .filter(u => u && /\.(mp4|webm)(\?|$)/i.test(u));
  if (!pool.length) throw new Error("No video files for tag: " + tags + " — try Grab image or another fetish.");
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
  urlInput.placeholder = "Or paste image / YouTube / .mp4 URL";

  const row = document.createElement("div");
  row.className = "row";

  const grabBtn = document.createElement("button");
  grabBtn.type = "button";
  grabBtn.textContent = "Grab image";

  const grabVidBtn = document.createElement("button");
  grabVidBtn.type = "button";
  grabVidBtn.textContent = "Grab video";

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
  row.appendChild(grabVidBtn);
  row.appendChild(loadBtn);
  row.appendChild(findBtn);
  row.appendChild(clearBtn);

  const status = document.createElement("p");
  status.className = "media-hint";
  status.textContent = (settings.r34ApiKey || "").trim()
    ? "Tag: " + fetishToTags(fetish) + " · Grab image or Grab video (Rule34)"
    : "⚙ → paste API Key → Save & Close.";

  controls.appendChild(urlInput);
  controls.appendChild(row);
  controls.appendChild(status);

  function setMode(mode) {
    mediaMemory.mode = mode;
    imgTab.classList.toggle("active", mode === "image");
    vidTab.classList.toggle("active", mode === "video");
    grabBtn.style.display = mode === "image" ? "" : "none";
    grabVidBtn.style.display = mode === "video" ? "" : "none";
    renderStage();
  }

  function renderStage() {
    destroyFluid();
    stage.innerHTML = "";
    if (mediaMemory.mode === "image" && mediaMemory.imageUrl) {
      const img = document.createElement("img");
      img.alt = fetish.short || "trigger";
      img.src = mediaMemory.imageUrl;
      img.referrerPolicy = "no-referrer";
      img.onerror = () => { status.textContent = "Image failed — Grab again."; };
      stage.appendChild(img);
    } else if (mediaMemory.mode === "video" && mediaMemory.videoUrl) {
      const yt = youtubeId(mediaMemory.videoUrl);
      if (yt) {
        const iframe = document.createElement("iframe");
        iframe.src = "https://www.youtube.com/embed/" + yt + "?rel=0";
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        iframe.allowFullscreen = true;
        stage.appendChild(iframe);
      } else {
        const holder = document.createElement("div");
        holder.className = "fluid-player-wrap";
        const vidId = "r34vid-" + Date.now();
        const video = document.createElement("video");
        video.id = vidId;
        video.setAttribute("playsinline", "");
        const source = document.createElement("source");
        source.src = mediaMemory.videoUrl;
        source.type = /\.webm/i.test(mediaMemory.videoUrl) ? "video/webm" : "video/mp4";
        video.appendChild(source);
        holder.appendChild(video);
        stage.appendChild(holder);
        requestAnimationFrame(() => {
          if (typeof fluidPlayer === "function") {
            try {
              fluidInstance = fluidPlayer(vidId, {
                layoutControls: {
                  controlBar: { autoHideTimeout: 3, animated: true, autoHide: true },
                  htmlOnPauseBlock: { html: null, height: null, width: null },
                  autoPlay: false,
                  mute: true,
                  allowTheatre: true,
                  playPauseAnimation: false,
                  playbackRateEnabled: true,
                  allowDownload: false,
                  playButtonShowing: true,
                  fillToContainer: true,
                  posterImage: ""
                },
                vastOptions: { adList: [], adCTAText: false, adCTATextPosition: "" }
              });
            } catch (e) {
              video.controls = true;
              status.textContent = "Fluid Player failed — native controls used.";
            }
          } else {
            video.controls = true;
          }
        });
      }
    }
  }

  grabBtn.onclick = async () => {
    ensureAudio();
    grabBtn.disabled = true;
    status.textContent = "Grabbing image…";
    try {
      mediaMemory.imageUrl = await grabRule34(fetish, false);
      mediaMemory.mode = "image";
      setMode("image");
      status.textContent = "Image loaded. Grab again for another.";
      sfxTick();
    } catch (e) {
      status.textContent = e.message || String(e);
      sfxFail();
    } finally {
      grabBtn.disabled = false;
    }
  };

  grabVidBtn.onclick = async () => {
    ensureAudio();
    grabVidBtn.disabled = true;
    status.textContent = "Grabbing video (Rule34)…";
    try {
      mediaMemory.videoUrl = await grabRule34(fetish, true);
      mediaMemory.mode = "video";
      setMode("video");
      status.textContent = "Video loaded via Fluid Player. Grab again for another.";
      sfxTick();
    } catch (e) {
      status.textContent = e.message || String(e);
      sfxFail();
    } finally {
      grabVidBtn.disabled = false;
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
      window.open("https://rule34.xxx/index.php?page=post&s=list&tags=" + q + "+video", "_blank", "noopener");
    }
  };

  clearBtn.onclick = () => {
    destroyFluid();
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

function attachMedia(cardEl, fetish) {
  const media = createMediaArea(fetish);
  if (media.classList && media.classList.contains("media-area")) {
    cardEl.classList.add("has-media");
    cardEl.appendChild(media);
  }
}

const screen = document.getElementById("screen");

function clearScreen() {
  if (currentTimer) { clearInterval(currentTimer); currentTimer = null; }
  stopBpm();
  destroyFluid();
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
  b.onclick = () => {
    ensureAudio();
    if (settings.ambient && !ambientNodes) startAmbient();
    onClick();
  };
  return b;
}

function start() {
  load();
  if (state.activeFetish) showContinueOrNew();
  else showWelcome();
}

function showWelcome() {
  stopAmbient();
  clearScreen();
  card(`
    <h1>Corruption Protocol</h1>
    <p class="big-text">You don’t choose what gets wired into you.<br>The system does.</p>
    <p>PC layout · changing BPM · Rule34 image + video · per-fetish instructions.</p>
    <p>⚙ → API key → Roll → <strong>Grab image</strong> or <strong>Grab video</strong>.</p>
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
    if (confirm("Abandon this fetish?")) {
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
  const list = getAllFetishes();
  const pick = list[Math.floor(Math.random() * list.length)];
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
    <p class="instruction">${fetish.ironic}</p>
    <p>${fetish.pairing || ""}</p>
  `);
  attachMedia(c, fetish);

  let step = 0;
  const ratings = [];

  function next() {
    step++;
    if (step === 1) {
      clearScreen();
      const cardEl = card(`
        <h2>Test 1 / 3</h2>
        <p class="big-text">Look ${scaleTime(20)}s. No touching.</p>
        <p class="instruction">${fetish.pure || fetish.ironic}</p>
        <div class="timer" id="t">${scaleTime(20)}</div>
      `);
      attachMedia(cardEl, fetish);
      countdown(scaleTime(20), () => askRating("Physical response? (0–10)"));
    } else if (step === 2) {
      clearScreen();
      const cardEl = card(`
        <h2>Test 2 / 3</h2>
        <p class="big-text">Look ${scaleTime(40)}s. Still no touching.</p>
        <p class="instruction">${fetish.ironic}</p>
        <div class="timer" id="t">${scaleTime(40)}</div>
      `);
      attachMedia(cardEl, fetish);
      countdown(scaleTime(40), () => askRating("Response this time?"));
    } else if (step === 3) {
      clearScreen();
      const cardEl = card(`
        <h2>Final Placement Stare</h2>
        <p class="big-text">${scaleTime(60)}s pure looking.</p>
        <p class="instruction">${fetish.pure || ""}</p>
        <div class="timer" id="t">${scaleTime(60)}</div>
      `);
      attachMedia(cardEl, fetish);
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
        <p>Average: <strong>${avg.toFixed(1)}/10</strong> → Stage ${stage}</p>
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
      b.onclick = () => { ratings.push(i); sfxTick(); next(); };
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
    <p>${fetish.pairing || ""}</p>
  `);
  attachMedia(c, fetish);
  const row = document.createElement("div");
  row.className = "btn-row";
  row.appendChild(btn("I’m ready. Begin.", () => runStage(stage, brutalMod)));
  screen.appendChild(row);
}

function runStage(stage, brutalMod) {
  const fetish = state.activeFetish;
  const holdTime = scaleTime([25, 50, 90, 120, 180, 240][stage - 1] + brutalMod);
  const edgesNeeded = Math.min(2 + stage + Math.floor(state.fails / 2), 8);
  const pairTime = scaleTime(90);

  clearScreen();
  const c1 = card(`
    <h2>Phase 1 — Pairing</h2>
    <p class="big-text">Stroke on the BPM. It will change — follow it.</p>
    <p class="instruction">${fetish.pairing || fetish.ironic}</p>
    <p>${pickDegrade(fetish)}</p>
    ${bpmHtml()}
    <div class="timer" id="t">${pairTime}</div>
  `);
  attachMedia(c1, fetish);
  startBpmPattern("pairing");
  countdown(pairTime, phase2);

  function phase2() {
    stopBpm();
    clearScreen();
    card(`<h2>Phase 2 — Forced Edges</h2>
      <p><strong>${edgesNeeded}</strong> edges. On each edge, freeze and stare 15s.</p>
      <p class="instruction">${fetish.edge || fetish.ironic}</p>`);
    let edgesDone = 0;
    function doEdge() {
      edgesDone++;
      if (edgesDone > edgesNeeded) { pureTest(); return; }
      clearScreen();
      const ce = card(`
        <h2>Edge ${edgesDone} / ${edgesNeeded}</h2>
        <p class="big-text">Stroke to the edge, then stop and stare.</p>
        <p class="instruction">${fetish.edge || ""}</p>
        <p>${pickDegrade(fetish)}</p>
        ${bpmHtml()}
        <div class="timer" id="t">15</div>
      `);
      attachMedia(ce, fetish);
      const row = document.createElement("div");
      row.className = "btn-row";
      row.appendChild(btn("I’m at the edge — start stare", () => {
        startBpmPattern("edgeStare");
        countdown(15, doEdge);
      }));
      screen.appendChild(row);
    }
    doEdge();
  }

  function pureTest() {
    stopBpm();
    clearScreen();
    const cp = card(`
      <h2>Pure Trigger Test</h2>
      <p class="big-text">Hands off. Only looking — ${holdTime}s.</p>
      <p class="instruction">${fetish.pure || fetish.ironic}</p>
      ${bpmHtml()}
      <div class="timer" id="t">${holdTime}</div>
      <p class="warning">If you touch, the test fails.</p>
    `);
    attachMedia(cp, fetish);
    startBpmPattern("pure");
    countdown(holdTime, () => {
      stopBpm();
      clearScreen();
      card(`<h2>Rate your pure response</h2>
        <p>0 = nothing · 10 = hard / leaking / drooling / mind blank</p>`);
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
    sfxPass();
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
      <p class="big-text">Response ${rating}/10 · Corruption +${gain}</p>
      ${stage === 6 ? "<p>Full track completed.</p>" : `<p>Next: Stage ${stage + 1}</p>`}
    `);
    giveContamination(stage, true);
  } else {
    sfxFail();
    state.fails++;
    save();
    clearScreen();
    card(`
      <h2 style="color:var(--danger)">Failed</h2>
      <p class="big-text">Only ${rating}/10</p>
    `);
    giveContamination(stage, false);
  }
}

function giveContamination(stage, success) {
  const fetish = state.activeFetish || { short: "the last thing", ironic: "Think about it." };
  const rules = [
    fetish.ironic,
    `Before sleep, 60s stare at ${fetish.short} while repeating “this is getting into me.”`,
    `Each time you notice ${fetish.short} today, pause 5 seconds.`,
    success
      ? `Wallpaper something that hints at ${fetish.short} until you’re alone again.`
      : `Leave a hidden tab open related to ${fetish.short} until tomorrow.`,
    pickDegrade(fetish)
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
    stopAmbient();
    stopBpm();
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
    if (left === 3 || left === 2 || left === 1) sfxWarn();
    if (left <= 0) {
      clearInterval(currentTimer);
      currentTimer = null;
      sfxDone();
      cb();
    }
  }, 1000);
}

function applySettingsUI() {
  const el = id => document.getElementById(id);
  if (el("setMedia")) el("setMedia").checked = settings.showMedia !== false;
  if (el("setSfx")) el("setSfx").checked = settings.sfx !== false;
  if (el("setAmbient")) el("setAmbient").checked = settings.ambient !== false;
  if (el("setMetronome")) el("setMetronome").checked = settings.metronome !== false;
  if (el("setVolume")) el("setVolume").value = String(Math.round((settings.volume ?? 0.35) * 100));
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
  settings.sfx = document.getElementById("setSfx").checked;
  settings.ambient = document.getElementById("setAmbient").checked;
  settings.metronome = document.getElementById("setMetronome").checked;
  settings.volume = parseInt(document.getElementById("setVolume").value, 10) / 100;
  settings.timerScale = parseFloat(document.getElementById("setTimerScale").value);
  settings.brutalMult = parseFloat(document.getElementById("setBrutal").value);
  settings.gainMult = parseFloat(document.getElementById("setGain").value);
  settings.r34UserId = document.getElementById("r34UserId").value.trim() || "6721033";
  settings.r34ApiKey = document.getElementById("r34ApiKey").value.trim();
  save();
  if (!settings.ambient) stopAmbient();
  if (!settings.metronome) stopBpm();
  document.getElementById("settingsOverlay").classList.add("hidden");
  ensureAudio();
  sfxTick();
};

document.getElementById("addCustomBtn").onclick = () => {
  const name = document.getElementById("customName").value.trim();
  const short = document.getElementById("customShort").value.trim();
  const ironic = document.getElementById("customIronic").value.trim() || "Focus on it.";
  const search = (document.getElementById("customSearch").value.trim() || short).split(/\s+/)[0];
  if (!name || !short) return alert("Name and short name required");
  state.customFetishes = state.customFetishes || [];
  state.customFetishes.push({
    id: Date.now(), name, short, ironic, search,
    pairing: ironic, edge: ironic, pure: ironic, degrade: [ironic]
  });
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
    stopAmbient();
    stopBpm();
    destroyFluid();
    save();
    showWelcome();
  }
};

start();
