const DEFAULT_FETISHES = [
  { id: 1, name: "Bare feet and soft soles", short: "bare feet", search: "feet",
    ironic: "Plant your bare feet flat. Don’t lift them until told.",
    pairing: "Trace the arch on every beat. Stroke only with the BPM.",
    edge: "At the edge, stare into the deepest sole crease. Freeze.",
    pure: "No hands. Only soles. Breathe with the rhythm.",
    degrade: ["Those soles own more of you than any face.", "Your cock is learning the shape of an arch."],
    body: ["Press both bare soles together 30s while staring.", "20 slow thumb circles on your sole while looking.", "Smell your foot once, then eyes back.", "Pin one foot under the other thigh.", "Fingertip spit on sole once.", "Tiptoes or soles-up kneel until they burn."] },
  { id: 2, name: "Thighs in shorts", short: "thighs", search: "thighs",
    ironic: "Press thighs together hard enough to feel heat.", pairing: "Stroke on the downbeat only.",
    edge: "Edge imagining thighs locked around your head.", pure: "Thighs locked. No touching.",
    degrade: ["Thick thighs teach weak minds.", "Hard from fabric strain."],
    body: ["Squeeze thighs 15 times hard.", "Sit on your hands.", "Shortest shorts or rolled legs.", "Slap each outer thigh once.", "Deep squat 20s.", "Grind thighs 1 min hands-off."] },
  { id: 3, name: "Soft belly under a shirt", short: "soft belly", search: "belly",
    ironic: "Palm on stomach — leave it.", pairing: "Soft strokes for soft belly.",
    edge: "Edge with hand on gut.", pure: "Hand on belly OK. Cock off.",
    degrade: ["Soft resistance giving way.", "Want the give of flesh."],
    body: ["Shirt up, belly exposed.", "Poke and hold soft spot 20s.", "Jiggle on BPM accents.", "Pinch fold through 15s.", "Bow forehead toward belly.", "Spit smear on belly."] },
  { id: 4, name: "Armpits on display", short: "armpits", search: "armpits",
    ironic: "One arm raised until timer dies.", pairing: "Delayed strokes after each tick.",
    edge: "Edge while inhaling toward the screen.", pure: "Arm up. Mouth open.",
    degrade: ["Hidden skin rewires you.", "Hunger for hidden places."],
    body: ["Arm up 30s.", "Sniff pit once.", "10 arm raises on BPM.", "Nose near pit 5 breaths.", "No deodorant; notice scent.", "Both arms up until shake."] },
  { id: 5, name: "Socks and ankles", short: "socks", search: "socks",
    ironic: "Same socks rest of day.", pairing: "March-stroke to BPM.",
    edge: "Edge to peeling sock with teeth.", pure: "Socks on. Hands dead.",
    degrade: ["A sock owns access.", "Easy to mark."],
    body: ["Socks on; flex ankles 20×.", "Peel one sock halfway.", "Socked sole to face 5s.", "Squeeze worn sock on beats.", "Socks to bed.", "Sock over eyes 10s."] },
  { id: 6, name: "Lips and tongue out", short: "tongue out", search: "tongue_out",
    ironic: "Tongue on lower lip for pure.", pairing: "Mirror open mouth on beats.",
    edge: "Mouth open. Drool OK.", pure: "Tongue out. Hands dead.",
    degrade: ["Mouth stays stupid on command.", "Spit is ritual."],
    body: ["Tongue out 20s.", "Drool on chin; don’t wipe.", "Lick lips 10× on BPM.", "Mouth open until aches.", "Spit in palm; wipe after timer.", "Tongue out pure phase."] },
  { id: 7, name: "Hands and fingers close-up", short: "hands", search: "hands",
    ironic: "Flex free hand until veins show.", pairing: "One stroke per beat.",
    edge: "Edge to fingers on throat.", pure: "Hands empty and visible.",
    degrade: ["Detail-hunger installing.", "Hands can be the fetish."],
    body: ["Flex both hands 20s.", "Suck one finger slow.", "Interlace tight.", "Slap thigh on freeze.", "Trace lips with fingertip.", "Wrists behind back pure."] },
  { id: 8, name: "Hair down the body", short: "body hair", search: "body_hair",
    ironic: "Rake body hair once per phase.", pairing: "Stroke with the grain.",
    edge: "Edge touching hair patch.", pure: "Eyes on densest patch.",
    degrade: ["Natural mess preferred.", "Smooth is losing."],
    body: ["Stroke body hair 15×.", "Face toward hairy patch one breath.", "Skip shower after.", "Tug hair on accents.", "Say one compare sentence.", "Warm a hairy area then hands-off."] },
  { id: 9, name: "Sweaty skin shine", short: "sweat", search: "sweat",
    ironic: "Don’t wipe sweat.", pairing: "Chase shine every beat.",
    edge: "Edge to salt; freeze on highlight.", pure: "Heat only.",
    degrade: ["Clean is boring.", "Arousal pairs with damp."],
    body: ["30s exercise then stare.", "Spit shine on chest if dry.", "Blow on skin; notice temp.", "Hoodie for sweat.", "Taste upper-lip sweat once.", "Stay shiny through pure."] },
  { id: 10, name: "Drool and spit strings", short: "drool", search: "saliva",
    ironic: "Let a spit string hang when ordered.", pairing: "Stroke imagining strand stretch.",
    edge: "Mouth wet at freeze.", pure: "Mouth open. Hands dead.",
    degrade: ["Gross → fuel.", "Hard from mess on purpose."],
    body: ["Spit string to chin.", "Spit on fingers; rub.", "Keep lips shiny.", "Hold spit 30s then swallow.", "String toward screen (not on it).", "Spit on chin all pure."] },
  { id: 11, name: "Panties and waistband dig", short: "panties", search: "panties",
    ironic: "Notice every elastic line today.", pairing: "BPM = stroke where fabric digs.",
    edge: "Edge to fabric cutting in.", pure: "Underwear thoughts only.",
    degrade: ["Cloth marks = data.", "Want too-small squeeze."],
    body: ["Snap waistband once.", "Tighter underwear if possible.", "Press dig with two fingers.", "Extra fold for bulk.", "Check lines in mirror once.", "Hands in waistband only on pure."] },
  { id: 12, name: "Ass focus, soft and full", short: "ass focus", search: "ass",
    ironic: "Sit on hands for one pure stare.", pairing: "Heavier strokes on downbeats.",
    edge: "Edge from behind in your head.", pure: "Hands trapped or dead.",
    degrade: ["Eyes drop lower.", "Soft ass is default."],
    body: ["Clench 20×.", "Sit on hands.", "Glance own ass once.", "Slap each cheek once.", "Deep bend ass out.", "Ass-up 20s if safe then pure."] },
  { id: 13, name: "Chubby / soft body folds", short: "soft folds", search: "chubby",
    ironic: "Pinch a fold when timers end.", pairing: "Soft strokes.",
    edge: "Edge squeezing softness.", pure: "Held pinch OK.",
    degrade: ["Softness winning.", "Fattened in the head."],
    body: ["Hold soft fold 20s.", "Jiggle on accents.", "Praise softness once.", "Press two folds together.", "Hand on softest part.", "Spit circle on a fold."] },
  { id: 14, name: "Stockings and pantyhose", short: "stockings", search: "stockings",
    ironic: "Sheer later if you own it.", pairing: "Long pulls slow; short fast.",
    edge: "Edge to a run under fingers.", pure: "Sheer focus.",
    degrade: ["Sheen is trigger color.", "Fabric language."],
    body: ["Sheer/socks on if owned.", "Smooth calves with hands.", "Point-flex feet 15×.", "Spit/lotion shine on shins.", "Ankles crossed tight.", "Legs covered for contamination."] },
  { id: 15, name: "Open-mouth dumb face", short: "ahegao face", search: "ahegao",
    ironic: "Jaw dropped. Breathe loud.", pairing: "Copy vacancy on metronome.",
    edge: "Half-lid at freeze.", pure: "Face slack. Drool OK.",
    degrade: ["Intelligence optional.", "Blank installs fast."],
    body: ["Ahegao 15s.", "Hold face no photo.", "Drool once.", "Uuuh on accents.", "Light cheek slap.", "Dumb face all pure."] },
  { id: 16, name: "Breasts pressed and soft", short: "soft chest", search: "breasts",
    ironic: "Arms into chest on zeros.", pairing: "Stroke like a squeeze.",
    edge: "Edge to soft smother.", pure: "Arms on chest.",
    degrade: ["Soft pressure favorite.", "Comfort + surrender."],
    body: ["Self-hug 20s.", "Palms on chest each downbeat.", "Deep breaths into hands.", "Soft object pinned to chest.", "Arms under chest lift.", "Chest-forward pure."] },
  { id: 17, name: "Foot in face / POV soles", short: "soles POV", search: "soles",
    ironic: "Face closer to screen on pure.", pairing: "Stroke under sole weight.",
    edge: "Freeze on heel.", pure: "Sole fills frame.",
    degrade: ["Place is under.", "Floor-level loyalty."],
    body: ["Sole near face if safe.", "Hover sole near nose.", "Sole to cheek once.", "Kneel low to monitor.", "Kiss sole if reachable.", "Sole in periphery all pure."] },
  { id: 18, name: "Used / worn look on clothes", short: "worn clothes", search: "panties",
    ironic: "Sniff worn laundry before sleep.", pairing: "Stroke on wrinkle finds.",
    edge: "Edge to already used.", pure: "Used look only.",
    degrade: ["Fresh loses status.", "Mess climbs rank."],
    body: ["Yesterday’s shirt on.", "Sniff worn cloth once.", "Wrinkle clothes on purpose.", "Spit on fabric corner.", "Don’t change after.", "Sleep in same top."] },
  { id: 19, name: "Cum on face / messy finish", short: "cum face", search: "cum_on_face",
    ironic: "Spit on cheek at end; leave a minute.", pairing: "Mess lands each beat in mind.",
    edge: "Edge to marked skin.", pure: "Mess fantasy. Hands clean.",
    degrade: ["Marked face looks correct.", "Pride in ruined."],
    body: ["Spit streak on cheek.", "Leave it the phase.", "Mirror check once.", "Second streak later stages.", "Don’t rub until ordered.", "Mess on face for pure."] },
  { id: 20, name: "Public risk fantasy stills", short: "public tease", search: "public",
    ironic: "Notice one public place later.", pairing: "Steady strokes; no panic rush.",
    edge: "Freeze like headlights.", pure: "Shame heat. Hands off.",
    degrade: ["Risk seasons arousal.", "Hard while exposed in mind."],
    body: ["Curtain slit / face door.", "One earbud out.", "Near window without exposing.", "Whisper someone could see.", "10 standing strokes.", "Pure near doorway if safe."] },
  { id: 21, name: "Bondage marks and restraint", short: "restraint", search: "bondage",
    ironic: "Wrists crossed on pure.", pairing: "Stroke only when BPM allows.",
    edge: "Hand needs permission.", pure: "Wrists crossed.",
    degrade: ["Stillness = obedience.", "Image holds better."],
    body: ["Wrists crossed 20s.", "Loose belt/tie quick-release.", "Kneel on hands.", "Belt in teeth briefly.", "Ankle + wrist cross.", "Wrists behind pure."] },
  { id: 22, name: "Pet play collar stare", short: "collar", search: "collar",
    ironic: "Kneel 30s after pure.", pairing: "Eyes on collar ring.",
    edge: "Pet waiting for a word.", pure: "Kneel. No stroke.",
    degrade: ["Lower default height.", "Stare until told."],
    body: ["Kneel 20s look up.", "Finger collar on throat.", "Crawl 3 steps if space.", "Bowl on floor as prop.", "Say good after timer.", "Kneel all pure."] },
  { id: 23, name: "Mind-break expression", short: "mind break", search: "ahegao",
    ironic: "Say: this is wiring into me.", pairing: "Broken face + BPM jumps.",
    edge: "Thought thins at freeze.", pure: "No clever thoughts.",
    degrade: ["Coherence optional.", "Used-in-the-head."],
    body: ["Shake head → blank.", "Wiring line ×3.", "Count down 10 tongue out.", "Slap desk on intrusive thought.", "Write short name; stare both.", "Thought = restart 10s pure."] },
  { id: 24, name: "Heavy sweat and exhaustion", short: "exhausted sweat", search: "sweat",
    ironic: "No shower 1 hour after.", pairing: "Heavy sloppy strokes on beat.",
    edge: "Spent but still used.", pure: "Exhausted eyes.",
    degrade: ["Tired is attractive.", "Afterglow wants more."],
    body: ["30s exercise → stare.", "Lie down if possible.", "Heavy breath ≈ BPM.", "No towel.", "Plank 15s → collapse stare.", "Half-lid limp pure."] },
  { id: 25, name: "Tentacle overwhelm", short: "tentacles", search: "tentacles",
    ironic: "Imagine limb holding wrist on pure.", pairing: "Stroke on imaginary squeeze.",
    edge: "Surrounded freeze.", pure: "Held still by the idea.",
    degrade: ["Overwhelm is the point.", "Fair is overrated."],
    body: ["Scarf/cable on forearm.", "Let it drag while stroking.", "Second wrap later stages.", "Pin both arms partially.", "Stuck-in-chair feel.", "Wrapped wrists pure."] },
  { id: 26, name: "Inflation / overfull body", short: "inflation", search: "inflation",
    ironic: "Poke stomach on zeros; hold 3 beats.", pairing: "Slower when BPM drops.",
    edge: "Palm on gut.", pure: "Fullness fantasy.",
    degrade: ["More rewrites enough.", "Excess on purpose."],
    body: ["Full glass of water.", "Poke-hold belly 20s.", "Cheeks inflated hold.", "Hunch overfull.", "Second glass if safe.", "Belly forward pure."] },
  { id: 27, name: "Monster / non-human partner", short: "monster", search: "monster",
    ironic: "Admit the image may own this reaction.", pairing: "Least human detail first.",
    edge: "Freeze on least human feature.", pure: "Only the creature.",
    degrade: ["Normal loses monopoly.", "Expand what claims you."],
    body: ["Non-word growl once.", "Nail-claw shoulder light.", "No blink until water.", "Admit line mid-phase.", "Lights lower.", "Whisper short name pure."] },
  { id: 28, name: "Extreme insertion art", short: "extreme insertion", search: "insertion",
    ironic: "Hands off on pure.", pairing: "Depth follows BPM shifts.",
    edge: "No-limit freeze.", pure: "Eyes only.",
    degrade: ["Limits negotiable in fantasy.", "Shock → interest."],
    body: ["Free hand flat on desk.", "Only BPM strokes when allowed.", "Thighs pressed as resistance.", "Full exhale on freeze.", "Bite cloth for focus.", "Both palms down pure."] },
  { id: 29, name: "Gang focus / surrounded", short: "surrounded", search: "group",
    ironic: "Soft point in a ring of attention.", pairing: "Eyes jump bodies each beat.",
    edge: "Freeze on one face.", pure: "Surrounded, hands off.",
    degrade: ["One partner feels sparse.", "Central and used."],
    body: ["3 objects as markers.", "Face each once.", "Stroke only at screen.", "Whisper all of you.", "Kneel center.", "Slow spin then pure."] },
  { id: 30, name: "Hypnosis swirl mindfuck", short: "hypnosis", search: "hypnosis",
    ironic: "Thought appears → return to spiral.", pairing: "Stroke only on BPM.",
    edge: "Repeat watch in head.", pure: "Fall into pattern.",
    degrade: ["Attention is the leash.", "Follow motion."],
    body: ["Sway circle ×10.", "Finger circle then screen.", "Blink only on accents 20s.", "Whisper deeper ×3.", "Phone face-down.", "Thought = +10s pure."] }
];

const METER_LABELS = [
  { max: 10, text: "Still clean…" }, { max: 25, text: "Getting stained…" },
  { max: 45, text: "Properly marked…" }, { max: 65, text: "Mind getting fucked…" },
  { max: 85, text: "Deeply corrupted…" }, { max: 100, text: "Completely broken toy" }
];

const BPM_PATTERNS = {
  pairing: [
    { bpm: 56, seconds: 12, hint: "Slow — long strokes" },
    { bpm: 72, seconds: 12, hint: "Steady" },
    { bpm: 96, seconds: 16, hint: "Building" },
    { bpm: 64, seconds: 12, hint: "Tease drop" },
    { bpm: 110, seconds: 12, hint: "Fast pressure" },
    { bpm: 80, seconds: 10, hint: "Settle" }
  ],
  edgeStare: [{ bpm: 48, seconds: 15, hint: "Frozen — mental pulse" }],
  pure: [{ bpm: 52, seconds: 999, hint: "Breath only — no stroking" }]
};

const ACHIEVE_DEFS = {
  first_stage6: "First Stage 6 clear",
  streak_3: "3-day streak",
  streak_7: "7-day streak",
  corrupt_50: "50% corruption",
  corrupt_100: "100% broken",
  journal_5: "5 journal entries",
  custom_3: "3 custom fetishes",
  silence_survive: "Survived a silence trial"
};

function stageRecipe(stage) {
  const map = {
    1: { bodyIndex: 0, pairing: 50, pure: 25, label: "Introduction" },
    2: { bodyIndex: 1, pairing: 60, pure: 40, label: "Imprint" },
    3: { bodyIndex: 2, pairing: 70, pure: 55, label: "Stain" },
    4: { bodyIndex: 3, pairing: 80, pure: 75, label: "Claim" },
    5: { bodyIndex: 4, pairing: 90, pure: 100, label: "Deep wire" },
    6: { bodyIndex: 5, pairing: 100, pure: 140, label: "Ownership" }
  };
  return map[stage] || map[1];
}

function defaultState() {
  return {
    corruption: 0, activeFetish: null, currentStage: 1, fails: 0, lastRating: 0,
    customFetishes: [], freeMode: false, favorites: [], blacklist: [],
    imageMemory: {}, journal: [], achievements: {},
    streak: { count: 0, best: 0, lastDay: "" },
    lastActive: Date.now(),
    resume: null
  };
}

let activeSlot = 0;
let state = defaultState();
let settings = {
  showMedia: true, sfx: true, ambient: true, metronome: true, silenceTrials: true,
  tts: false, blur: false, slideshow: false, volume: 0.35,
  timerScale: 1, brutalMult: 1, gainMult: 1,
  r34UserId: "6721033", r34ApiKey: "", playlist: []
};

let currentTimer = null, bpmTimer = null, bpmTickTimer = null, fluidInstance = null;
let slideshowTimer = null, silenceThisPhase = false;
const mediaMemory = { imageUrl: "", videoUrl: "", mode: "image" };
let audioCtx = null, ambientNodes = null;

function $(id) { return document.getElementById(id); }
function slotKey(n) { return "corruptionProtocol_slot" + n; }

function loadSlot(n) {
  activeSlot = n;
  localStorage.setItem("corruptionProtocol_activeSlot", String(n));
  try {
    const raw = localStorage.getItem(slotKey(n));
    state = raw ? { ...defaultState(), ...JSON.parse(raw) } : defaultState();
  } catch (e) { state = defaultState(); }
  applyDecay();
  touchActive();
  updateMeter();
  updateStreakBar();
}

function saveSlot() {
  touchActive();
  localStorage.setItem(slotKey(activeSlot), JSON.stringify(state));
  localStorage.setItem("corruptionSettings", JSON.stringify(settings));
  updateMeter();
  updateStreakBar();
}

function loadSettings() {
  try {
    const s = localStorage.getItem("corruptionSettings");
    if (s) settings = { ...settings, ...JSON.parse(s) };
  } catch (e) {}
  if (!settings.r34UserId) settings.r34UserId = "6721033";
  if (settings.volume > 1) settings.volume = settings.volume / 100;
  const slot = parseInt(localStorage.getItem("corruptionProtocol_activeSlot") || "0", 10);
  loadSlot(isNaN(slot) ? 0 : slot);
}

function touchActive() { state.lastActive = Date.now(); }

function applyDecay() {
  const last = state.lastActive || Date.now();
  const days = (Date.now() - last) / (1000 * 60 * 60 * 24);
  if (days >= 3 && state.corruption > 0) {
    const loss = Math.min(state.corruption, Math.floor(days) * 3);
    if (loss > 0) {
      state.corruption = Math.max(0, state.corruption - loss);
      state._decayMsg = "Decay: −" + loss + "% for " + Math.floor(days) + " idle day(s).";
    }
  }
}

function dayString() {
  const d = new Date();
  return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
}

function registerSessionDay() {
  const today = dayString();
  if (state.streak.lastDay === today) return;
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yStr = yesterday.getFullYear() + "-" + String(yesterday.getMonth() + 1).padStart(2, "0") + "-" + String(yesterday.getDate()).padStart(2, "0");
  if (state.streak.lastDay === yStr) state.streak.count += 1;
  else state.streak.count = 1;
  state.streak.lastDay = today;
  state.streak.best = Math.max(state.streak.best || 0, state.streak.count);
  if (state.streak.count >= 3) unlockAchieve("streak_3");
  if (state.streak.count >= 7) unlockAchieve("streak_7");
}

function updateStreakBar() {
  const el = $("streakBar");
  if (!el) return;
  const c = state.streak.count || 0;
  const b = state.streak.best || 0;
  if (c <= 0 && b <= 0) { el.classList.add("hidden"); return; }
  el.classList.remove("hidden");
  el.textContent = "Streak " + c + " day(s) · Best " + b + " · Slot " + (activeSlot + 1);
}

function unlockAchieve(key) {
  if (state.achievements[key]) return;
  state.achievements[key] = Date.now();
  const toast = $("achieveToast");
  if (toast) {
    toast.textContent = "★ " + (ACHIEVE_DEFS[key] || key);
    toast.classList.remove("hidden");
    setTimeout(() => toast.classList.add("hidden"), 3200);
  }
  saveSlot();
}

function speak(text) {
  if (!settings.tts || !window.speechSynthesis) return;
  try {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(String(text).replace(/<[^>]+>/g, " "));
    u.rate = 0.95; u.volume = vol();
    window.speechSynthesis.speak(u);
  } catch (e) {}
}

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
  osc.connect(g); g.connect(ctx.destination);
  osc.start(t); osc.stop(t + duration + 0.02);
}
function sfxTick() { playTone(880, 0.08, "sine", 0.12); }
function sfxWarn() { playTone(420, 0.15, "triangle", 0.18); }
function sfxDone() {
  playTone(523, 0.12, "sine", 0.2);
  setTimeout(() => playTone(659, 0.14, "sine", 0.18), 100);
  setTimeout(() => playTone(784, 0.2, "sine", 0.16), 220);
}
function sfxPass() { playTone(600, 0.1, "sine", 0.15); setTimeout(() => playTone(900, 0.2, "sine", 0.18), 90); }
function sfxFail() { playTone(200, 0.25, "sawtooth", 0.12); }

function metroClick(accent) {
  if (!settings.metronome || silenceThisPhase) return;
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
  osc.connect(g); g.connect(ctx.destination);
  osc.start(t); osc.stop(t + 0.06);
  const el = $("bpmValue");
  if (el) { el.classList.remove("bpm-pulse"); void el.offsetWidth; el.classList.add("bpm-pulse"); }
}

function startAmbient() {
  stopAmbient();
  if (!settings.ambient) return;
  const ctx = ensureAudio();
  if (!ctx) return;
  const osc1 = ctx.createOscillator(), osc2 = ctx.createOscillator();
  const g = ctx.createGain(), filter = ctx.createBiquadFilter();
  osc1.type = "sine"; osc2.type = "sine";
  osc1.frequency.value = 55; osc2.frequency.value = 82.5;
  filter.type = "lowpass"; filter.frequency.value = 180;
  g.gain.value = vol() * 0.035;
  osc1.connect(filter); osc2.connect(filter); filter.connect(g); g.connect(ctx.destination);
  osc1.start(); osc2.start();
  ambientNodes = { osc1, osc2 };
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
function startBpmPattern(key) {
  stopBpm();
  if (!settings.metronome || silenceThisPhase) {
    if ($("bpmValue")) $("bpmValue").textContent = silenceThisPhase ? "SILENT" : "—";
    if ($("bpmHint")) $("bpmHint").textContent = silenceThisPhase ? "Keep pace from memory" : "";
    return;
  }
  const pattern = BPM_PATTERNS[key];
  if (!pattern) return;
  let idx = 0, beat = 0;
  function runSegment() {
    if (idx >= pattern.length) idx = pattern.length - 1;
    const seg = pattern[idx];
    if ($("bpmValue")) $("bpmValue").textContent = String(seg.bpm);
    if ($("bpmHint")) $("bpmHint").textContent = seg.hint || "";
    if (bpmTickTimer) clearInterval(bpmTickTimer);
    beat = 0;
    const interval = 60000 / seg.bpm;
    metroClick(true);
    bpmTickTimer = setInterval(() => { beat++; metroClick(beat % 4 === 0); }, interval);
    bpmTimer = setTimeout(() => { idx++; if (idx < pattern.length) runSegment(); },
      Math.min(seg.seconds, 600) * 1000 * (settings.timerScale || 1));
  }
  runSegment();
}
function bpmHtml() {
  return `<div class="bpm-wrap"><div class="bpm-label">STROKE BPM</div>
    <div class="bpm-value" id="bpmValue">—</div>
    <div class="bpm-hint" id="bpmHint">Follow the pace</div></div>`;
}
function destroyFluid() {
  if (fluidInstance && typeof fluidInstance.destroy === "function") {
    try { fluidInstance.destroy(); } catch (e) {}
  }
  fluidInstance = null;
}
function stopSlideshow() {
  if (slideshowTimer) { clearInterval(slideshowTimer); slideshowTimer = null; }
}

function getAllFetishes() {
  return [...DEFAULT_FETISHES, ...(state.customFetishes || [])]
    .filter(f => !(state.blacklist || []).includes(f.id));
}
function rollPool() {
  const all = getAllFetishes();
  const fav = all.filter(f => (state.favorites || []).includes(f.id));
  if (fav.length && Math.random() < 0.45) return fav;
  return all.length ? all : DEFAULT_FETISHES;
}

function updateMeter() {
  if (!$("meterFill")) return;
  $("meterFill").style.width = (state.corruption || 0) + "%";
  $("meterPercent").textContent = (state.corruption || 0) + "%";
  const lab = METER_LABELS.find(l => state.corruption <= l.max) || METER_LABELS[METER_LABELS.length - 1];
  $("meterLabel").textContent = lab.text;
  $("statusLine").textContent = state.activeFetish
    ? `Active: ${state.activeFetish.short} — Stage ${state.currentStage}/6${state.freeMode ? " (FREE)" : ""} · Slot ${activeSlot + 1}`
    : `No active track · Slot ${activeSlot + 1}`;
  if (state.corruption >= 50) unlockAchieve("corrupt_50");
  if (state.corruption >= 100) unlockAchieve("corrupt_100");
}

function scaleTime(base) { return Math.max(5, Math.round(base * (settings.timerScale || 1))); }
function youtubeId(url) {
  if (!url) return null;
  const m = String(url).match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([A-Za-z0-9_-]{6,})/);
  return m ? m[1] : null;
}
function fetishToTags(fetish) {
  const raw = (fetish.search || fetish.short || fetish.name || "1girl").toLowerCase();
  return raw.replace(/[^\w\s+_:-]/g, " ").trim().split(/\s+/).filter(Boolean)[0] || "1girl";
}
function pickDegrade(fetish) {
  const arr = fetish.degrade || ["The protocol is patient."];
  return arr[Math.floor(Math.random() * arr.length)];
}
function bodyTask(fetish, stage) {
  const list = fetish.body || ["Hold still and stare."];
  return list[Math.min(stageRecipe(stage).bodyIndex, list.length - 1)];
}

function rememberImage(fetish, url) {
  if (!url || !fetish) return;
  const id = fetish.id;
  if (!state.imageMemory[id]) state.imageMemory[id] = [];
  state.imageMemory[id] = [url, ...state.imageMemory[id].filter(u => u !== url)].slice(0, 8);
  saveSlot();
}

async function grabRule34(fetish, wantVideo) {
  const userId = (settings.r34UserId || "").trim();
  const apiKey = (settings.r34ApiKey || "").trim();
  if (!userId || !apiKey) throw new Error("Open ⚙ — enter Rule34 User ID + API Key.");
  const tags = fetishToTags(fetish);
  const tagQuery = wantVideo ? tags + " video" : tags;
  const pid = Math.floor(Math.random() * 20);
  const url = "https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&json=1&limit=50&pid=" + pid +
    "&tags=" + encodeURIComponent(tagQuery) +
    "&user_id=" + encodeURIComponent(userId) + "&api_key=" + encodeURIComponent(apiKey);
  const text = await (await fetch(url)).text();
  let data;
  try { data = JSON.parse(text); } catch (e) { throw new Error("Rule34 non-JSON — check API key."); }
  if (data && data.message) throw new Error(String(data.message));
  if (!Array.isArray(data) || !data.length) {
    if (wantVideo) return grabVideoFallback(tags, userId, apiKey);
    throw new Error("No results for tag: " + tags);
  }
  if (wantVideo) {
    const pool = data.map(p => p.file_url || p.sample_url).filter(u => u && /\.(mp4|webm)(\?|$)/i.test(u));
    if (!pool.length) return grabVideoFallback(tags, userId, apiKey);
    return pool[Math.floor(Math.random() * pool.length)];
  }
  const pool = data.map(p => p.sample_url || p.file_url || p.preview_url)
    .filter(u => u && /\.(jpg|jpeg|png|gif|webp)(\?|$)/i.test(u));
  if (!pool.length) throw new Error("No image URLs.");
  return pool[Math.floor(Math.random() * pool.length)];
}
async function grabVideoFallback(tags, userId, apiKey) {
  const pid = Math.floor(Math.random() * 15);
  const url = "https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&json=1&limit=50&pid=" + pid +
    "&tags=" + encodeURIComponent(tags) +
    "&user_id=" + encodeURIComponent(userId) + "&api_key=" + encodeURIComponent(apiKey);
  const data = await (await fetch(url)).json();
  if (!Array.isArray(data)) throw new Error("No video for: " + tags);
  const pool = data.map(p => p.file_url || p.sample_url).filter(u => u && /\.(mp4|webm)(\?|$)/i.test(u));
  if (!pool.length) throw new Error("No video files for: " + tags);
  return pool[Math.floor(Math.random() * pool.length)];
}

function createMediaArea(fetish, opts) {
  opts = opts || {};
  if (settings.showMedia === false) return document.createElement("div");
  const wrap = document.createElement("div");
  wrap.className = "media-area";
  const tabs = document.createElement("div");
  tabs.className = "media-tabs";
  const imgTab = document.createElement("button"); imgTab.type = "button"; imgTab.textContent = "Image";
  const vidTab = document.createElement("button"); vidTab.type = "button"; vidTab.textContent = "Video";
  tabs.append(imgTab, vidTab);
  const stageEl = document.createElement("div");
  const controls = document.createElement("div");
  controls.className = "media-controls";
  const urlInput = document.createElement("input");
  urlInput.type = "url"; urlInput.placeholder = "Paste image / YouTube / .mp4 URL";
  const row = document.createElement("div"); row.className = "row";
  const grabBtn = document.createElement("button"); grabBtn.type = "button"; grabBtn.textContent = "Grab image";
  const grabVidBtn = document.createElement("button"); grabVidBtn.type = "button"; grabVidBtn.textContent = "Grab video";
  const memBtn = document.createElement("button"); memBtn.type = "button"; memBtn.textContent = "Memory";
  const playListBtn = document.createElement("button"); playListBtn.type = "button"; playListBtn.textContent = "Playlist";
  const loadBtn = document.createElement("button"); loadBtn.type = "button"; loadBtn.textContent = "Load URL";
  const findBtn = document.createElement("button"); findBtn.type = "button"; findBtn.textContent = "Find";
  const clearBtn = document.createElement("button"); clearBtn.type = "button"; clearBtn.textContent = "Clear";
  row.append(grabBtn, grabVidBtn, memBtn, playListBtn, loadBtn, findBtn, clearBtn);
  const status = document.createElement("p");
  status.className = "media-hint";
  status.textContent = (settings.r34ApiKey || "").trim() ? "Tag: " + fetishToTags(fetish) : "⚙ → API key.";
  controls.append(urlInput, row, status);

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
    stopSlideshow();
    stageEl.innerHTML = "";
    if (mediaMemory.mode === "image" && mediaMemory.imageUrl) {
      const img = document.createElement("img");
      img.src = mediaMemory.imageUrl;
      img.alt = fetish.short || "";
      img.referrerPolicy = "no-referrer";
      if (settings.blur && opts.blur) img.classList.add("blurred");
      if (opts.reveal) img.classList.add("blurred", "reveal");
      stageEl.appendChild(img);
    } else if (mediaMemory.mode === "video" && mediaMemory.videoUrl) {
      const yt = youtubeId(mediaMemory.videoUrl);
      if (yt) {
        const iframe = document.createElement("iframe");
        iframe.src = "https://www.youtube.com/embed/" + yt + "?rel=0";
        iframe.allowFullscreen = true;
        stageEl.appendChild(iframe);
      } else {
        const holder = document.createElement("div");
        holder.className = "fluid-player-wrap";
        const vidId = "r34vid-" + Date.now();
        const video = document.createElement("video");
        video.id = vidId; video.setAttribute("playsinline", "");
        const source = document.createElement("source");
        source.src = mediaMemory.videoUrl;
        source.type = /\.webm/i.test(mediaMemory.videoUrl) ? "video/webm" : "video/mp4";
        video.appendChild(source); holder.appendChild(video); stageEl.appendChild(holder);
        requestAnimationFrame(() => {
          if (typeof fluidPlayer === "function") {
            try {
              fluidInstance = fluidPlayer(vidId, {
                layoutControls: {
                  controlBar: { autoHideTimeout: 3, animated: true, autoHide: true },
                  autoPlay: false, mute: true, allowTheatre: true, playbackRateEnabled: true,
                  allowDownload: false, playButtonShowing: true, fillToContainer: true, posterImage: ""
                },
                vastOptions: { adList: [], adCTAText: false, adCTATextPosition: "" }
              });
            } catch (e) { video.controls = true; }
          } else video.controls = true;
        });
      }
    }
  }
  grabBtn.onclick = async () => {
    ensureAudio(); grabBtn.disabled = true; status.textContent = "Grabbing…";
    try {
      mediaMemory.imageUrl = await grabRule34(fetish, false);
      rememberImage(fetish, mediaMemory.imageUrl);
      mediaMemory.mode = "image"; setMode("image");
      status.textContent = "Image loaded."; sfxTick();
    } catch (e) { status.textContent = e.message || String(e); sfxFail(); }
    finally { grabBtn.disabled = false; }
  };
  grabVidBtn.onclick = async () => {
    ensureAudio(); grabVidBtn.disabled = true; status.textContent = "Grabbing video…";
    try {
      mediaMemory.videoUrl = await grabRule34(fetish, true);
      mediaMemory.mode = "video"; setMode("video");
      status.textContent = "Video loaded."; sfxTick();
    } catch (e) { status.textContent = e.message || String(e); sfxFail(); }
    finally { grabVidBtn.disabled = false; }
  };
  memBtn.onclick = () => {
    const mem = state.imageMemory[fetish.id] || [];
    if (!mem.length) { status.textContent = "No saved images for this fetish yet."; return; }
    mediaMemory.imageUrl = mem[Math.floor(Math.random() * mem.length)];
    mediaMemory.mode = "image"; setMode("image");
    status.textContent = "From memory (" + mem.length + " saved).";
  };
  playListBtn.onclick = () => {
    const list = (settings.playlist || []).filter(Boolean);
    if (!list.length) { status.textContent = "Playlist empty — add URLs in ⚙."; return; }
    const url = list[Math.floor(Math.random() * list.length)];
    if (/\.(mp4|webm)(\?|$)/i.test(url) || youtubeId(url)) {
      mediaMemory.videoUrl = url; mediaMemory.mode = "video";
    } else {
      mediaMemory.imageUrl = url; mediaMemory.mode = "image";
    }
    setMode(mediaMemory.mode);
    status.textContent = "From playlist.";
  };
  loadBtn.onclick = () => {
    const url = urlInput.value.trim();
    if (!url) return;
    if (mediaMemory.mode === "image") {
      mediaMemory.imageUrl = url; rememberImage(fetish, url);
    } else mediaMemory.videoUrl = url;
    renderStage();
  };
  findBtn.onclick = () => {
    const q = encodeURIComponent(fetishToTags(fetish));
    window.open("https://rule34.xxx/index.php?page=post&s=list&tags=" + q + (mediaMemory.mode === "video" ? "+video" : ""), "_blank", "noopener");
  };
  clearBtn.onclick = () => {
    destroyFluid();
    if (mediaMemory.mode === "image") mediaMemory.imageUrl = "";
    else mediaMemory.videoUrl = "";
    renderStage();
  };
  imgTab.onclick = () => setMode("image");
  vidTab.onclick = () => setMode("video");
  wrap.append(tabs, stageEl, controls);
  setMode(mediaMemory.mode || "image");

  if (opts.slideshow && settings.slideshow && mediaMemory.mode === "image") {
    const mem = state.imageMemory[fetish.id] || [];
    if (mem.length > 1) {
      let i = 0;
      slideshowTimer = setInterval(() => {
        i = (i + 1) % mem.length;
        mediaMemory.imageUrl = mem[i];
        renderStage();
      }, 8000);
    }
  }
  return wrap;
}
function attachMedia(cardEl, fetish, opts) {
  const media = createMediaArea(fetish, opts);
  if (media.classList && media.classList.contains("media-area")) {
    cardEl.classList.add("has-media");
    cardEl.appendChild(media);
  }
}

const screen = $("screen");
function clearScreen() {
  if (currentTimer) { clearInterval(currentTimer); currentTimer = null; }
  stopBpm(); stopSlideshow(); destroyFluid(); silenceThisPhase = false;
  screen.innerHTML = "";
}
function card(html) {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = html;
  screen.appendChild(div);
  return div;
}
function btn(text, onClick, secondary) {
  const b = document.createElement("button");
  b.type = "button"; b.textContent = text;
  if (secondary) b.classList.add("secondary");
  b.onclick = () => {
    ensureAudio();
    if (settings.ambient && !ambientNodes) startAmbient();
    onClick();
  };
  return b;
}

function maybeSilence(phaseName) {
  silenceThisPhase = false;
  if (!settings.silenceTrials || !settings.metronome) return "";
  if (Math.random() < 0.22) {
    silenceThisPhase = true;
    unlockAchieve("silence_survive");
    return `<div class="silence-banner">SILENCE TRIAL — ${phaseName}: no metronome. Keep pace yourself.</div>`;
  }
  return "";
}

function start() {
  loadSettings();
  if (state.resume && state.resume.fetishId && confirm("Resume interrupted session?")) {
    const f = getAllFetishes().find(x => x.id === state.resume.fetishId) ||
      DEFAULT_FETISHES.find(x => x.id === state.resume.fetishId);
    if (f) {
      state.activeFetish = f;
      state.currentStage = state.resume.stage || 1;
      state.freeMode = !!state.resume.freeMode;
      state.resume = null;
      saveSlot();
      startSession(state.currentStage);
      return;
    }
  }
  state.resume = null;
  if (state.activeFetish) showContinueOrNew();
  else showWelcome();
  if (state._decayMsg) {
    setTimeout(() => alert(state._decayMsg), 300);
    state._decayMsg = null;
  }
}

function showWelcome() {
  stopAmbient();
  clearScreen();
  card(`
    <h1>Corruption Protocol</h1>
    <p class="big-text">Physical tasks · BPM · memory · streaks · slots.</p>
    <p>Shortcuts: <kbd>G</kbd> grab focus · <kbd>F</kbd> focus mode · <kbd>S</kbd> settings</p>
  `);
  const row = document.createElement("div");
  row.className = "btn-row";
  row.appendChild(btn("Begin / Roll Random", () => { state.freeMode = false; rollNewFetish(); }));
  row.appendChild(btn("Free Mode → Stage 6", showFreeMode, true));
  row.appendChild(btn("Journal & favorites", showJournal, true));
  screen.appendChild(row);
}

function showFreeMode() {
  clearScreen();
  const c = card(`<h2>Free Mode</h2><p>Pick a fetish → Stage 6 ritual.</p>`);
  const select = document.createElement("select");
  select.style.cssText = "width:100%;padding:12px;margin:12px 0;background:#2a1f22;color:#f5e6e8;border-radius:8px;";
  getAllFetishes().forEach(f => {
    const o = document.createElement("option");
    o.value = String(f.id); o.textContent = f.name + ((state.favorites || []).includes(f.id) ? " ★" : "");
    select.appendChild(o);
  });
  c.appendChild(select);
  const row = document.createElement("div");
  row.className = "btn-row";
  row.appendChild(btn("Start Stage 6", () => {
    const fetish = getAllFetishes().find(f => String(f.id) === select.value);
    if (!fetish) return;
    state.activeFetish = fetish; state.currentStage = 6; state.fails = 0; state.freeMode = true;
    mediaMemory.imageUrl = ""; mediaMemory.videoUrl = "";
    saveSlot(); startSession(6);
  }));
  row.appendChild(btn("Back", showWelcome, true));
  screen.appendChild(row);
}

function showJournal() {
  clearScreen();
  const c = card(`<h2>Journal · Favorites · Blacklist</h2>`);
  const favRow = document.createElement("div");
  favRow.className = "chip-row";
  getAllFetishes().concat(state.customFetishes || []).forEach(f => {
    // dedupe by id
  });
  const seen = new Set();
  [...DEFAULT_FETISHES, ...(state.customFetishes || [])].forEach(f => {
    if (seen.has(f.id)) return; seen.add(f.id);
    const chip = document.createElement("span");
    chip.className = "chip" + ((state.favorites || []).includes(f.id) ? " on" : "");
    chip.textContent = f.short + (((state.blacklist || []).includes(f.id)) ? " 🚫" : "");
    chip.title = "Click = favorite · Shift+click = blacklist";
    chip.onclick = (ev) => {
      if (ev.shiftKey) {
        if (!state.blacklist) state.blacklist = [];
        if (state.blacklist.includes(f.id)) state.blacklist = state.blacklist.filter(x => x !== f.id);
        else state.blacklist.push(f.id);
      } else {
        if (!state.favorites) state.favorites = [];
        if (state.favorites.includes(f.id)) state.favorites = state.favorites.filter(x => x !== f.id);
        else state.favorites.push(f.id);
      }
      saveSlot(); showJournal();
    };
    favRow.appendChild(chip);
  });
  c.appendChild(document.createTextNode("Tap = favorite · Shift+tap = blacklist"));
  c.appendChild(favRow);
  const list = document.createElement("div");
  list.className = "journal-list";
  (state.journal || []).slice(0, 30).forEach(e => {
    const d = document.createElement("div");
    d.textContent = (e.date || "") + " · " + (e.fetish || "") + " · S" + e.stage + " · " + e.rating + "/10 — " + (e.note || "");
    list.appendChild(d);
  });
  if (!(state.journal || []).length) list.textContent = "No entries yet.";
  c.appendChild(list);
  const note = document.createElement("input");
  note.placeholder = "Optional note for last session…";
  note.style.cssText = "width:100%;margin-top:8px;padding:10px;background:#2a1f22;border:1px solid #3a2a2e;color:#fff;border-radius:8px;";
  c.appendChild(note);
  const row = document.createElement("div");
  row.className = "btn-row";
  row.appendChild(btn("Save note to latest entry", () => {
    if (state.journal && state.journal[0] && note.value.trim()) {
      state.journal[0].note = note.value.trim();
      saveSlot();
      alert("Saved.");
    }
  }));
  row.appendChild(btn("Back", showWelcome, true));
  screen.appendChild(row);
}

function showContinueOrNew() {
  clearScreen();
  card(`
    <h2>Active Track ${state.freeMode ? "(FREE)" : ""}</h2>
    <div class="fetish-name">${state.activeFetish.name}</div>
    <div class="stage-badge">Stage ${state.currentStage} / 6</div>
    <p>Fails: <strong>${state.fails}</strong></p>
  `);
  const row = document.createElement("div");
  row.className = "btn-row";
  row.appendChild(btn(`Continue Stage ${state.currentStage}`, () => startSession(state.currentStage)));
  row.appendChild(btn("Abandon & Roll", () => {
    if (confirm("Abandon?")) {
      state.activeFetish = null; state.currentStage = 1; state.fails = 0; state.freeMode = false; state.resume = null;
      saveSlot(); rollNewFetish();
    }
  }, true));
  row.appendChild(btn("Home", showWelcome, true));
  screen.appendChild(row);
}

function rollNewFetish() {
  const list = rollPool();
  state.activeFetish = list[Math.floor(Math.random() * list.length)];
  state.currentStage = 1; state.fails = 0; state.freeMode = false;
  mediaMemory.imageUrl = ""; mediaMemory.videoUrl = "";
  state.resume = null;
  saveSlot();
  runPlacementTest(state.activeFetish);
}

function runPlacementTest(fetish) {
  clearScreen();
  const c = card(`<h2>Placement Test</h2><div class="fetish-name">${fetish.name}</div>
    <p class="instruction">${fetish.ironic}</p><p class="instruction">${bodyTask(fetish, 1)}</p>`);
  attachMedia(c, fetish, { blur: true });
  let step = 0; const ratings = [];
  function next() {
    step++;
    if (step <= 3) {
      const times = [20, 40, 60];
      const labels = ["Test 1 / 3", "Test 2 / 3", "Final Placement"];
      clearScreen();
      const el = card(`<h2>${labels[step - 1]}</h2>
        <p class="big-text">Look ${scaleTime(times[step - 1])}s.</p>
        <p class="instruction">${step === 2 ? fetish.ironic : fetish.pure}</p>
        <div class="timer" id="t">${scaleTime(times[step - 1])}</div>`);
      attachMedia(el, fetish, { blur: step < 3 });
      countdown(scaleTime(times[step - 1]), () => askRating("Response 0–10?"));
    } else {
      const avg = ratings.reduce((a, b) => a + b, 0) / ratings.length;
      let st = 1;
      if (avg >= 8) st = 4; else if (avg >= 6) st = 3; else if (avg >= 4) st = 2;
      state.currentStage = st; saveSlot();
      clearScreen();
      card(`<h2>Placed at Stage ${st}</h2><p>Average ${avg.toFixed(1)}</p>`);
      const row = document.createElement("div"); row.className = "btn-row";
      row.appendChild(btn(`Start Stage ${st}`, () => startSession(st)));
      row.appendChild(btn("Re-roll", () => { state.activeFetish = null; saveSlot(); rollNewFetish(); }, true));
      screen.appendChild(row);
    }
  }
  function askRating(q) {
    clearScreen(); card(`<h2>${q}</h2>`);
    const row = document.createElement("div"); row.className = "rating-row";
    for (let i = 0; i <= 10; i++) {
      const b = document.createElement("button");
      b.type = "button"; b.className = "rating-btn"; b.textContent = i;
      b.onclick = () => { ratings.push(i); sfxTick(); next(); };
      row.appendChild(b);
    }
    screen.appendChild(row);
  }
  next();
}

function startSession(stage) {
  const fetish = state.activeFetish;
  state.resume = { fetishId: fetish.id, stage, freeMode: state.freeMode };
  saveSlot();
  registerSessionDay();
  const recipe = stageRecipe(stage);
  const physical = bodyTask(fetish, stage);
  speak(physical);
  clearScreen();
  const c = card(`
    <div class="stage-badge">Stage ${stage} / 6 — ${recipe.label}${state.freeMode ? " · FREE" : ""}</div>
    <div class="fetish-name">${fetish.name}</div>
    <p class="instruction">${fetish.ironic}</p>
    <p><strong>Physical demand:</strong></p>
    <p class="instruction">${physical}</p>
  `);
  attachMedia(c, fetish, { blur: true });
  const row = document.createElement("div"); row.className = "btn-row";
  row.appendChild(btn("I’ve started — begin", () => runStage(stage)));
  screen.appendChild(row);
}

function runStage(stage) {
  const fetish = state.activeFetish;
  const recipe = stageRecipe(stage);
  const brutalMod = Math.min(state.fails * 8 * (settings.brutalMult || 1), 40);
  const pairTime = scaleTime(recipe.pairing);
  const pureBase = scaleTime(recipe.pure + brutalMod);
  const physical = bodyTask(fetish, stage);

  clearScreen();
  const ca = card(`<h2>Phase A — Physical</h2>
    <p class="instruction">${physical}</p><p>${pickDegrade(fetish)}</p>
    <div class="timer" id="t">${scaleTime(25 + stage * 5)}</div>`);
  attachMedia(ca, fetish, { blur: true });
  countdown(scaleTime(25 + stage * 5), phasePair);

  function phasePair() {
    clearScreen();
    const sil = maybeSilence("Pairing");
    const cp = card(`<h2>Phase B — Pairing</h2>${sil}
      <p class="instruction">${fetish.pairing}</p><p class="instruction">${physical}</p>
      ${bpmHtml()}<div class="timer" id="t">${pairTime}</div>`);
    attachMedia(cp, fetish, { blur: true });
    startBpmPattern("pairing");
    countdown(pairTime, phaseEdge);
  }
  function phaseEdge() {
    stopBpm(); silenceThisPhase = false;
    clearScreen();
    const ce = card(`<h2>Phase C — Single Edge</h2>
      <p class="instruction">${fetish.edge}</p><p class="instruction">${physical}</p>`);
    attachMedia(ce, fetish, { blur: true });
    const row = document.createElement("div"); row.className = "btn-row";
    row.appendChild(btn("At the edge — freeze 15s", () => {
      clearScreen();
      const cf = card(`<h2>Edge freeze</h2><p class="instruction">${fetish.edge}</p>
        ${bpmHtml()}<div class="timer" id="t">15</div>`);
      attachMedia(cf, fetish, { blur: true });
      startBpmPattern("edgeStare");
      countdown(15, phaseTwist);
    }));
    screen.appendChild(row);
  }
  function phaseTwist() {
    stopBpm();
    const twists = [
      `Whisper “${fetish.short}” six times while staring.`,
      `Hold breath 8s, eyes locked, then keep staring.`,
      `Intensify: ${physical}`,
      `Hands on head 20s — no cock.`,
      `Say one pride-hurting detail out loud.`,
      `Ownership: ${physical} into pure.`
    ];
    const twist = twists[Math.min(stage - 1, twists.length - 1)];
    speak(twist);
    clearScreen();
    const ct = card(`<h2>Phase D — Twist</h2><p class="instruction">${twist}</p>
      <div class="timer" id="t">${scaleTime(20 + stage * 3)}</div>`);
    attachMedia(ct, fetish, { blur: true });
    countdown(scaleTime(20 + stage * 3), phasePure);
  }
  function phasePure() {
    clearScreen();
    const sil = maybeSilence("Pure");
    const cu = card(`<h2>Phase E — Pure Trigger</h2>${sil}
      <p class="big-text">Hands off. ${pureBase}s.</p>
      <p class="instruction">${fetish.pure}</p><p class="instruction">${physical}</p>
      ${bpmHtml()}<div class="timer" id="t">${pureBase}</div>
      <p class="warning">Touching = fail.</p>`);
    attachMedia(cu, fetish, { blur: false, reveal: true, slideshow: true });
    startBpmPattern("pure");
    countdown(pureBase, () => {
      stopBpm(); silenceThisPhase = false;
      clearScreen();
      card(`<h2>Rate pure response</h2><p>0 = nothing · 10 = ruined</p>`);
      const row = document.createElement("div"); row.className = "rating-row";
      for (let i = 0; i <= 10; i++) {
        const b = document.createElement("button");
        b.type = "button"; b.className = "rating-btn"; b.textContent = i;
        b.onclick = () => finishStage(i, stage);
        row.appendChild(b);
      }
      screen.appendChild(row);
    });
  }
}

function finishStage(rating, stage) {
  state.lastRating = rating;
  state.resume = null;
  const fetish = state.activeFetish;
  state.journal = state.journal || [];
  state.journal.unshift({
    date: dayString(), fetish: fetish ? fetish.short : "?", stage, rating, note: ""
  });
  state.journal = state.journal.slice(0, 50);
  if (state.journal.length >= 5) unlockAchieve("journal_5");

  if (rating >= 7) {
    sfxPass();
    const gain = Math.round((3 + stage) * (settings.gainMult || 1));
    state.corruption = Math.min(100, state.corruption + gain);
    if (stage < 6) {
      state.currentStage = stage + 1;
      state.fails = Math.max(0, state.fails - 1);
    } else {
      unlockAchieve("first_stage6");
      state.activeFetish = null; state.currentStage = 1; state.fails = 0; state.freeMode = false;
      state.corruption = Math.min(100, state.corruption + Math.round(8 * (settings.gainMult || 1)));
    }
    saveSlot();
    clearScreen();
    card(`<h2 style="color:var(--success)">Stage Passed</h2>
      <p class="big-text">${rating}/10 · +${gain}%</p>
      ${stage === 6 ? "<p>Track complete.</p>" : `<p>Next: Stage ${stage + 1}</p>`}`);
    giveContamination(stage, true);
  } else {
    sfxFail();
    state.fails++;
    saveSlot();
    clearScreen();
    card(`<h2 style="color:var(--danger)">Failed</h2><p class="big-text">${rating}/10</p>`);
    giveContamination(stage, false);
  }
}

function giveContamination(stage, success) {
  const fetish = state.activeFetish || { short: "the last thing", ironic: "Think about it.", body: ["Recall the pose."] };
  const rules = [
    fetish.ironic, bodyTask(fetish, Math.min(stage + 1, 6)),
    `Before sleep: 60s stare at ${fetish.short}.`,
    success ? `Carry one residue of the physical task into the next hour.` : `Repeat today’s physical task once before bed.`,
    pickDegrade(fetish)
  ];
  const chosen = rules.sort(() => Math.random() - 0.5).slice(0, 2 + Math.floor(stage / 2));
  speak(chosen.join(". "));
  card(`<h2>Contamination Orders</h2>
    <ul style="padding-left:20px;margin:12px 0">${chosen.map(r => `<li style="margin-bottom:8px">${r}</li>`).join("")}</ul>`);
  const row = document.createElement("div"); row.className = "btn-row";
  row.appendChild(btn("I accept — aftercare", () => showAftercare()));
  row.appendChild(btn("Skip aftercare", () => {
    stopAmbient(); stopBpm();
    if (state.activeFetish) showContinueOrNew(); else showWelcome();
  }, true));
  screen.appendChild(row);
}

function showAftercare() {
  stopBpm();
  clearScreen();
  card(`
    <h2>Aftercare</h2>
    <p class="instruction soft">Session closed. Soft landing — optional but recommended.</p>
    <ul style="padding-left:20px;margin:12px 0">
      <li>Drink water.</li>
      <li>Unclench jaw / shoulders; three slow breaths.</li>
      <li>If you used spit/sweat props, clean up when ready.</li>
      <li>No need to judge the rating — log it and move on.</li>
      <li>Corruption meter waits. You can stop here.</li>
    </ul>
  `);
  const row = document.createElement("div"); row.className = "btn-row";
  row.appendChild(btn("Done", () => {
    stopAmbient();
    if (state.activeFetish) showContinueOrNew(); else showWelcome();
  }));
  screen.appendChild(row);
}

function countdown(seconds, cb) {
  const el = $("t");
  if (!el) { cb(); return; }
  let left = seconds;
  el.textContent = left;
  if (currentTimer) clearInterval(currentTimer);
  currentTimer = setInterval(() => {
    left--;
    el.textContent = left;
    if (left <= 3 && left >= 1) sfxWarn();
    if (left <= 0) {
      clearInterval(currentTimer); currentTimer = null;
      sfxDone(); cb();
    }
  }, 1000);
}

function applySettingsUI() {
  if ($("setMedia")) $("setMedia").checked = settings.showMedia !== false;
  if ($("setSfx")) $("setSfx").checked = settings.sfx !== false;
  if ($("setAmbient")) $("setAmbient").checked = settings.ambient !== false;
  if ($("setMetronome")) $("setMetronome").checked = settings.metronome !== false;
  if ($("setSilence")) $("setSilence").checked = settings.silenceTrials !== false;
  if ($("setTts")) $("setTts").checked = !!settings.tts;
  if ($("setBlur")) $("setBlur").checked = !!settings.blur;
  if ($("setSlideshow")) $("setSlideshow").checked = !!settings.slideshow;
  if ($("setVolume")) $("setVolume").value = String(Math.round((settings.volume ?? 0.35) * 100));
  if ($("setTimerScale")) $("setTimerScale").value = String(settings.timerScale || 1);
  if ($("setBrutal")) $("setBrutal").value = String(settings.brutalMult || 1);
  if ($("setGain")) $("setGain").value = String(settings.gainMult || 1);
  if ($("setSlot")) $("setSlot").value = String(activeSlot);
  if ($("r34UserId")) $("r34UserId").value = settings.r34UserId || "6721033";
  if ($("r34ApiKey")) $("r34ApiKey").value = settings.r34ApiKey || "";
  if ($("playlistArea")) $("playlistArea").value = (settings.playlist || []).join("\n");
}

$("settingsBtn").onclick = () => { $("settingsOverlay").classList.remove("hidden"); applySettingsUI(); };
$("focusBtn").onclick = () => document.body.classList.toggle("focus-mode");
$("closeSettings").onclick = () => {
  if ($("setMedia")) settings.showMedia = $("setMedia").checked;
  if ($("setSfx")) settings.sfx = $("setSfx").checked;
  if ($("setAmbient")) settings.ambient = $("setAmbient").checked;
  if ($("setMetronome")) settings.metronome = $("setMetronome").checked;
  if ($("setSilence")) settings.silenceTrials = $("setSilence").checked;
  if ($("setTts")) settings.tts = $("setTts").checked;
  if ($("setBlur")) settings.blur = $("setBlur").checked;
  if ($("setSlideshow")) settings.slideshow = $("setSlideshow").checked;
  if ($("setVolume")) settings.volume = parseInt($("setVolume").value, 10) / 100;
  if ($("setTimerScale")) settings.timerScale = parseFloat($("setTimerScale").value);
  if ($("setBrutal")) settings.brutalMult = parseFloat($("setBrutal").value);
  if ($("setGain")) settings.gainMult = parseFloat($("setGain").value);
  if ($("r34UserId")) settings.r34UserId = $("r34UserId").value.trim() || "6721033";
  if ($("r34ApiKey")) settings.r34ApiKey = $("r34ApiKey").value.trim();
  const newSlot = parseInt(($("setSlot") && $("setSlot").value) || "0", 10);
  localStorage.setItem("corruptionSettings", JSON.stringify(settings));
  if (newSlot !== activeSlot) loadSlot(newSlot);
  else saveSlot();
  if (!settings.ambient) stopAmbient();
  if (!settings.metronome) stopBpm();
  $("settingsOverlay").classList.add("hidden");
  ensureAudio(); sfxTick();
  if (state.activeFetish) updateMeter();
  else showWelcome();
};
$("savePlaylistBtn").onclick = () => {
  settings.playlist = ($("playlistArea").value || "").split(/\n/).map(s => s.trim()).filter(Boolean);
  localStorage.setItem("corruptionSettings", JSON.stringify(settings));
  alert("Playlist saved (" + settings.playlist.length + " URLs).");
};
$("addCustomBtn").onclick = () => {
  const name = $("customName").value.trim();
  const short = $("customShort").value.trim();
  const ironic = $("customIronic").value.trim() || "Focus on it.";
  const search = ($("customSearch").value.trim() || short).split(/\s+/)[0];
  if (!name || !short) return alert("Name and short required");
  state.customFetishes = state.customFetishes || [];
  state.customFetishes.push({
    id: Date.now(), name, short, ironic, search,
    pairing: ironic, edge: ironic, pure: ironic, degrade: [ironic],
    body: [ironic, ironic, ironic, ironic, ironic, ironic]
  });
  if (state.customFetishes.length >= 3) unlockAchieve("custom_3");
  saveSlot();
  ["customName", "customShort", "customIronic", "customSearch"].forEach(id => { $(id).value = ""; });
  alert("Added.");
};
$("exportBtn").onclick = () => {
  const blob = new Blob([JSON.stringify({ slot: activeSlot, state, settings }, null, 2)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "corruption-protocol-slot" + (activeSlot + 1) + ".json";
  a.click();
};
$("importBtn").onclick = () => $("importFile").click();
$("importFile").onchange = (ev) => {
  const file = ev.target.files && ev.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const data = JSON.parse(reader.result);
      if (data.state) state = { ...defaultState(), ...data.state };
      if (data.settings) settings = { ...settings, ...data.settings };
      saveSlot();
      alert("Imported.");
      showWelcome();
    } catch (e) { alert("Invalid JSON"); }
  };
  reader.readAsText(file);
};
$("resetBtn").onclick = () => {
  if (confirm("Wipe slot " + (activeSlot + 1) + "?")) {
    state = defaultState();
    mediaMemory.imageUrl = ""; mediaMemory.videoUrl = "";
    stopAmbient(); stopBpm(); destroyFluid();
    saveSlot();
    showWelcome();
  }
};

document.addEventListener("keydown", (e) => {
  if (e.target && /input|textarea|select/i.test(e.target.tagName)) return;
  if (e.key === "s" || e.key === "S") $("settingsBtn").click();
  if (e.key === "f" || e.key === "F") $("focusBtn").click();
});

start();
