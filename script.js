const DEFAULT_FETISHES = [
  { id: 1, name: "Bare feet and soft soles", short: "bare feet", search: "feet",
    ironic: "Plant your bare feet flat. Don’t lift them until told.",
    pairing: "Trace the arch on every beat. Stroke only with the BPM.",
    edge: "At the edge, stare into the deepest sole crease. Freeze.",
    pure: "No hands. Only soles. Breathe with the rhythm.",
    degrade: ["Those soles own more of you than any face.", "Your cock is learning the shape of an arch."],
    body: [
      "Sit and press both bare soles together for 30 seconds while staring.",
      "Rub your own sole with a thumb while looking — 20 slow circles.",
      "Smell your own foot once, then return eyes to the screen.",
      "Pin your foot under the other thigh so you feel pressure the whole phase.",
      "Lick your own fingertip and touch it to your sole once — link taste to the image.",
      "Kneel, soles facing up behind you if you can, or stand on tiptoes until they burn."
    ]},
  { id: 2, name: "Thighs in shorts", short: "thighs", search: "thighs",
    ironic: "Press your thighs together hard enough to feel heat.",
    pairing: "Watch fabric bite skin. Stroke on the downbeat only.",
    edge: "Edge imagining thighs locked around your head.",
    pure: "Thighs locked. No touching yourself.",
    degrade: ["Thick thighs teach weak minds fast.", "You’re training to get hard from fabric strain."],
    body: [
      "Squeeze thighs together 15 times, hard, while staring.",
      "Sit on your hands so palms feel thigh heat.",
      "Wear the shortest shorts you have or roll pant legs up.",
      "Slap each outer thigh once — sting + stare.",
      "Hold a deep squat for 20 seconds looking at the image.",
      "Grind thighs together slowly for a full minute with hands off cock."
    ]},
  { id: 3, name: "Soft belly under a shirt", short: "soft belly", search: "belly",
    ironic: "Rest a palm on your stomach and leave it there.",
    pairing: "Follow soft rolls. Match stroke softness to the belly.",
    edge: "Edge with a hand on your gut.",
    pure: "Hand on belly OK. Cock off-limits.",
    degrade: ["Soft resistance is giving way.", "You want the give of flesh."],
    body: [
      "Lift your shirt and leave your belly exposed for the phase.",
      "Poke and hold one soft spot while staring 20 seconds.",
      "Jiggle your stomach on purpose on every BPM accent.",
      "Pinch a fold and hold through an entire 15s count.",
      "Press forehead toward your belly as if bowing to it.",
      "Write a small smear of spit on your belly and leave it."
    ]},
  { id: 4, name: "Armpits on display", short: "armpits", search: "armpits",
    ironic: "Keep one arm raised until the timer dies.",
    pairing: "Stare into the hollow. Delayed strokes after each tick.",
    edge: "Edge while inhaling as if catching scent from the screen.",
    pure: "Arm up. Mouth open. No stroking.",
    degrade: ["Even hidden skin can rewire you.", "Hunger for places people hide."],
    body: [
      "Hold one arm fully up for 30 seconds while looking.",
      "Sniff your own armpit once, then eyes back to screen.",
      "Do 10 slow arm raises matching the BPM.",
      "Press your nose close to your raised pit and breathe 5 times.",
      "Leave antiperspirant off; rub the pit lightly so you notice scent.",
      "Both arms up until they shake; stare the whole time."
    ]},
  { id: 5, name: "Socks and ankles", short: "socks", search: "socks",
    ironic: "Same socks the rest of the day.",
    pairing: "Watch fabric on ankle bone. March-stroke to BPM.",
    edge: "Edge thinking of peeling the sock with teeth.",
    pure: "Socks on. Eyes on. Hands dead.",
    degrade: ["A sock is getting privileged access to your cock.", "Easy to mark."],
    body: [
      "Put on socks if barefoot; flex ankles 20 times while staring.",
      "Peel one sock halfway and leave it for the phase.",
      "Press the socked sole to your face for 5 seconds.",
      "Ball a worn sock in your free hand and squeeze on each beat.",
      "Wear socks to bed tonight as contamination.",
      "Sock over your eyes for 10 seconds, then stare harder."
    ]},
  { id: 6, name: "Lips and tongue out", short: "tongue out", search: "tongue_out",
    ironic: "Tongue on your lower lip for pure stares.",
    pairing: "Mirror the open mouth. Stroke when the tongue ‘moves’ in your head.",
    edge: "Edge with mouth open. Drool allowed.",
    pure: "Tongue out. Hands dead.",
    degrade: ["Mouth learning to stay stupid on command.", "Spit is ritual now."],
    body: [
      "Stick tongue out for 20 seconds while staring.",
      "Drool once on purpose onto your chin; don’t wipe yet.",
      "Lick your lips slowly 10 times on the BPM.",
      "Hold mouth open until it aches; breathe loud.",
      "Spit into your palm, look at it, then wipe only after the timer.",
      "Tongue out + eyes half-lid for the full pure phase."
    ]},
  { id: 7, name: "Hands and fingers close-up", short: "hands", search: "hands",
    ironic: "Flex the free hand until veins show.",
    pairing: "One stroke per beat. Study every crease.",
    edge: "Edge imagining those fingers on your throat.",
    pure: "Hands empty and visible.",
    degrade: ["Detail-hunger is installing.", "Hands can become the fetish."],
    body: [
      "Hold both hands in front of you and flex for 20 seconds.",
      "Suck one finger while staring — slow.",
      "Interlace fingers tight until they hurt slightly.",
      "Slap your own thigh with an open palm once per edge freeze.",
      "Trace your lips with a fingertip as if the image is doing it.",
      "Wrists crossed behind your back for pure stare."
    ]},
  { id: 8, name: "Hair down the body", short: "body hair", search: "body_hair",
    ironic: "Rake fingers through body hair once per phase.",
    pairing: "Stroke with the grain you see.",
    edge: "Edge while touching your own hair patch.",
    pure: "Eyes on densest patch. Hands mostly dead.",
    degrade: ["Natural mess preferred.", "Smooth is losing."],
    body: [
      "Find any body hair and stroke it 15 times while looking.",
      "Press your face toward a hairy patch for one breath.",
      "Don’t shower after; leave the texture.",
      "Tug lightly on a hair cluster on each BPM accent.",
      "Compare your hair to the image out loud in one sentence.",
      "Rub a hairy area until warm, then pure stare hands-off."
    ]},
  { id: 9, name: "Sweaty skin shine", short: "sweat", search: "sweat",
    ironic: "Don’t wipe sweat. Let it sit.",
    pairing: "Chase shine on every beat.",
    edge: "Edge imagining salt. Freeze on brightest highlight.",
    pure: "Heat only. No touch.",
    degrade: ["Clean is boring.", "Arousal pairs with damp skin."],
    body: [
      "Do 20 jumping jacks or run in place 30s, then stare sweaty.",
      "Rub spit on your chest to fake shine if you’re dry.",
      "Blow on your skin then stop — notice cool/heat.",
      "Layer a hoodie to force sweat for the session.",
      "Taste sweat from your upper lip once.",
      "Stay flushed and shiny through the final pure stare."
    ]},
  { id: 10, name: "Drool and spit strings", short: "drool", search: "saliva",
    ironic: "Let a real spit string hang when ordered.",
    pairing: "Stroke only while imagining the strand stretch.",
    edge: "Mouth wet. Spit moves at freeze.",
    pure: "Mouth open. Hands dead.",
    degrade: ["Gross is converting to fuel.", "Hard from mess on purpose."],
    body: [
      "Pool spit and let one string fall to your chin.",
      "Spit on your fingers and rub them together while staring.",
      "Keep lips shiny with spit the whole phase.",
      "Aim a spit string toward the screen direction (not on device).",
      "Hold spit in your mouth 30 seconds before swallowing.",
      "Leave spit on chin for the entire pure stare."
    ]},
  { id: 11, name: "Panties and waistband dig", short: "panties", search: "panties",
    ironic: "Notice every elastic line on you today.",
    pairing: "BPM = stroke rate where fabric digs in.",
    edge: "Edge to fabric cutting in.",
    pure: "Underwear thoughts only.",
    degrade: ["Cloth marks = erotic data.", "Want the squeeze of too-small."],
    body: [
      "Pull waistband and snap it once against skin.",
      "Wear underwear slightly too tight if possible.",
      "Press the waistband dig with two fingers while staring.",
      "Stuff a tissue or extra fold to feel bulk.",
      "Check panty lines in a mirror once mid-session.",
      "Hands inside waistband only — no cock stroke on pure."
    ]},
  { id: 12, name: "Ass focus, soft and full", short: "ass focus", search: "ass",
    ironic: "Sit on your hands for one pure stare.",
    pairing: "Trace the curve. Heavier strokes on downbeats.",
    edge: "Edge from behind in your head.",
    pure: "Hands trapped or dead.",
    degrade: ["Eyes keep dropping lower.", "Soft ass is default stare now."],
    body: [
      "Clench ass 20 times while staring.",
      "Sit on your hands palms-up under cheeks.",
      "Look over your shoulder at your own ass once.",
      "Slap each cheek once — sting then stare.",
      "Hold a deep bend, hands on knees, ass out, eyes on screen.",
      "Kneel face-down-ass-up posture for 20s if safe, then pure stare."
    ]},
  { id: 13, name: "Chubby / soft body folds", short: "soft folds", search: "chubby",
    ironic: "Pinch a soft fold when each timer ends.",
    pairing: "Soft strokes for soft flesh.",
    edge: "Edge while squeezing your softness.",
    pure: "Maybe a held pinch. Eyes in the crease.",
    degrade: ["Softness winning.", "Fattened in the head first."],
    body: [
      "Grab a soft fold and hold 20 seconds.",
      "Jiggle soft tissue on purpose on accents.",
      "Speak one sentence praising softness while staring.",
      "Press two folds together and hold.",
      "Eat nothing special — just rest a hand on the softest part all phase.",
      "Mark a fold with a fingertip circle of spit."
    ]},
  { id: 14, name: "Stockings and pantyhose", short: "stockings", search: "stockings",
    ironic: "Wear something sheer later if you own it.",
    pairing: "Long pulls on slow BPM; short on fast.",
    edge: "Edge imagining a run under fingers.",
    pure: "Sheer focus. Hands empty.",
    degrade: ["Synthetic sheen is a trigger color.", "Fabric language."],
    body: [
      "If you have socks/sheer, put them on now.",
      "Run hands up your calves as if smoothing hose.",
      "Point and flex feet 15 times while staring.",
      "Rub lotion or spit on shins for ‘shine’.",
      "Cross ankles tight and hold.",
      "Leave lower legs covered for contamination period."
    ]},
  { id: 15, name: "Open-mouth dumb face", short: "ahegao face", search: "ahegao",
    ironic: "Drop your jaw. Breathe loud.",
    pairing: "Copy the vacancy while stroking on metronome.",
    edge: "Half-lid eyes at freeze.",
    pure: "Face slack. Drool OK.",
    degrade: ["Intelligence optional.", "Blank faces install fast."],
    body: [
      "Hold ahegao face 15 seconds: tongue, eyes rolled a bit.",
      "Take a selfie pose without saving — just hold the face.",
      "Drool on purpose once.",
      "Say ‘uuuh’ on every BPM accent.",
      "Slap your cheek lightly once to flush.",
      "Full dumb face the entire pure stare — no breaking character."
    ]},
  { id: 16, name: "Breasts pressed and soft", short: "soft chest", search: "breasts",
    ironic: "Press arms into your chest on timer zeros.",
    pairing: "Stroke like a squeeze in time.",
    edge: "Edge to soft smother fantasy.",
    pure: "Arms on chest. Cock ignored.",
    degrade: ["Soft pressure favorite force.", "Comfort + surrender."],
    body: [
      "Hug yourself tight across the chest 20 seconds.",
      "Press palms into pecs/chest on each downbeat.",
      "Breathe deep so the chest rises into your hands.",
      "Pin a soft object to your chest if alone.",
      "Cross arms under chest and lift slightly.",
      "Chest-forward posture, chin down, pure stare."
    ]},
  { id: 17, name: "Foot in face / POV soles", short: "soles POV", search: "soles",
    ironic: "Lean face closer to the screen on pure stares.",
    pairing: "Stroke under imaginary sole weight.",
    edge: "Can’t turn head away. Freeze on heel.",
    pure: "Close distance. Sole fills frame.",
    degrade: ["Your place is under.", "Floor-level loyalty."],
    body: [
      "Bring one bare sole near your face (not unclean extreme if unsafe).",
      "Let the sole hover an inch from your nose while staring at screen.",
      "Press sole lightly to cheek once.",
      "Kneel so your eye line is low relative to the monitor.",
      "Kiss your own sole once if you can reach.",
      "Sole in your peripheral vision entire pure phase."
    ]},
  { id: 18, name: "Used / worn look on clothes", short: "worn clothes", search: "panties",
    ironic: "Sniff worn laundry once before sleep.",
    pairing: "Hunt wrinkles. Stroke on detail finds.",
    edge: "Edge to ‘already used.’",
    pure: "Used look only.",
    degrade: ["Fresh losing status.", "Mess climbing rank."],
    body: [
      "Put on yesterday’s shirt if available.",
      "Sniff a worn cloth item once mid-phase.",
      "Wrinkle your clothes on purpose.",
      "Leave a small intentional ‘mess’ mark with spit on fabric corner.",
      "Don’t change clothes after the session.",
      "Sleep in the same top tonight."
    ]},
  { id: 19, name: "Cum on face / messy finish", short: "cum face", search: "cum_on_face",
    ironic: "Spit on your cheek once at the end; leave a minute.",
    pairing: "Imagine mess landing on each beat.",
    edge: "Edge toward marked skin.",
    pure: "Mess fantasy. Clean hands.",
    degrade: ["Marked face looks correct.", "Pride in ruined look."],
    body: [
      "Draw a spit streak on your cheek like a facial line.",
      "Leave it through the phase.",
      "Look in a mirror once with the streak.",
      "Add a second streak on the other cheek for later stages.",
      "Rub it in only when ordered — not before.",
      "Final pure stare with visible mess on face."
    ]},
  { id: 20, name: "Public risk fantasy stills", short: "public tease", search: "public",
    ironic: "Later notice one public place and feel the flicker.",
    pairing: "Caught mid-stare fantasy. Steady strokes.",
    edge: "Freeze like headlights.",
    pure: "Shame heat. Hands off.",
    degrade: ["Risk seasons arousal.", "Hard while exposed in the mind."],
    body: [
      "Open curtains a slit or face a door — private but ‘risk’ feel.",
      "Keep one earbud out to hear the house.",
      "Sit closer to a window without exposing yourself.",
      "Whisper ‘someone could see’ once.",
      "Do ten strokes standing as if you might need to stop fast.",
      "Pure stare near a threshold (doorway) if safe."
    ]},
  { id: 21, name: "Bondage marks and restraint", short: "restraint", search: "bondage",
    ironic: "Cross wrists behind you on pure stares.",
    pairing: "Stroke only when BPM allows — restraint on you too.",
    edge: "Pretend the hand needs permission.",
    pure: "Wrists crossed. Empty hands.",
    degrade: ["Stillness as obedience.", "Image holds you better than freedom."],
    body: [
      "Cross wrists in front and hold 20s.",
      "Belt or soft tie loosely around wrists (safe, quick-release).",
      "Kneel on hands so they are pinned.",
      "Clench a belt in your teeth briefly.",
      "Ankle cross + wrist cross together.",
      "Full pure stare with wrists behind back."
    ]},
  { id: 22, name: "Pet play collar stare", short: "collar", search: "collar",
    ironic: "Kneel 30 seconds after pure stares.",
    pairing: "Eyes on collar ring. All-fours in your head.",
    edge: "Pet waiting for a word.",
    pure: "Kneel. No stroking.",
    degrade: ["Lower default height.", "Stare until told."],
    body: [
      "Kneel for 20 seconds while looking up at the screen.",
      "Use a finger as a ‘collar’ at your throat.",
      "Crawl three steps if space allows.",
      "Bowl or cup on floor — glance at it as a prop.",
      "Say ‘good’ to yourself once after obeying a timer.",
      "Kneel the entire pure stare."
    ]},
  { id: 23, name: "Mind-break expression", short: "mind break", search: "ahegao",
    ironic: "Say: this is wiring into me.",
    pairing: "Broken face + BPM jumps.",
    edge: "Thought thins at freeze.",
    pure: "No clever thoughts.",
    degrade: ["Coherence optional.", "Used-in-the-head practice."],
    body: [
      "Shake head slowly then go blank-faced.",
      "Repeat the wiring line three times.",
      "Count backward from 10 with tongue out.",
      "Slap desk lightly when thought intrudes — return to stare.",
      "Write the fetish short name once on paper, stare at both.",
      "Empty-head pure stare; if a thought appears, restart 10s."
    ]},
  { id: 24, name: "Heavy sweat and exhaustion", short: "exhausted sweat", search: "sweat",
    ironic: "No shower for an hour after.",
    pairing: "Heavy, slightly sloppy strokes still on beat.",
    edge: "Spent but still used.",
    pure: "Exhausted eyes. Hands dead.",
    degrade: ["Tired is attractive.", "Afterglow mess wants more."],
    body: [
      "Exhaust yourself: 30s fast exercise, then stare.",
      "Lie down for the phase if possible.",
      "Heavy breathing only — match BPM roughly.",
      "Towel forbidden; sweat stays.",
      "Hold a plank 15s then collapse into stare.",
      "Pure stare half-lidded, body limp."
    ]},
  { id: 25, name: "Tentacle overwhelm", short: "tentacles", search: "tentacles",
    ironic: "Imagine a limb holding your wrist on pure stare.",
    pairing: "Stroke when a coil would squeeze — on beat.",
    edge: "Surrounded freeze.",
    pure: "Held still by the idea.",
    degrade: ["Overwhelm is the point.", "Fair is overrated."],
    body: [
      "Wrap a scarf/cable loosely around one forearm.",
      "Let it drag as you stroke.",
      "Add a second wrap on the other arm for later stages.",
      "Pin both arms partially with the wraps.",
      "Sit so you feel ‘stuck’ in the chair.",
      "Wrapped wrists + pure stare, no escape fidgeting."
    ]},
  { id: 26, name: "Inflation / overfull body", short: "inflation", search: "inflation",
    ironic: "Poke stomach on timer zeros; hold three beats.",
    pairing: "Fuller slower strokes when BPM drops.",
    edge: "Palm on gut at peak roundness.",
    pure: "Fullness fantasy. Empty hand optional on belly.",
    degrade: ["More rewrites enough.", "Excess on purpose."],
    body: [
      "Drink a full glass of water before continuing.",
      "Poke and hold belly 20s.",
      "Inflate cheeks and hold while staring.",
      "Hunch around your middle like you’re overfull.",
      "Second glass if safe; notice pressure.",
      "Belly forward, pure stare, hands framing gut not cock."
    ]},
  { id: 27, name: "Monster / non-human partner", short: "monster", search: "monster",
    ironic: "Admit: the image may own this reaction.",
    pairing: "Least human detail first, then BPM strokes.",
    edge: "Freeze on least human feature.",
    pure: "No human comfort — only the creature.",
    degrade: ["Normal loses monopoly.", "Expand what claims you."],
    body: [
      "Growl or make a non-word sound once.",
      "Claw your own shoulder lightly with nails.",
      "Stare without blinking until eyes water.",
      "Admit the line out loud again mid-phase.",
      "Turn lights lower for ‘other’ atmosphere.",
      "Pure stare whispering the short name like a summon."
    ]},
  { id: 28, name: "Extreme insertion art", short: "extreme insertion", search: "insertion",
    ironic: "Hands off on pure — art does the violating.",
    pairing: "Shallow/deep strokes follow BPM shifts.",
    edge: "No-limit idea at freeze.",
    pure: "Eyes only.",
    degrade: ["Limits negotiable in fantasy.", "Shock → interest."],
    body: [
      "Keep free hand flat on the desk — pinned.",
      "Only allowed motion is BPM strokes when phase allows.",
      "Press thighs together as ‘resistance.’",
      "Exhale fully on every edge freeze.",
      "Bite a cloth to stay quiet and focused.",
      "Pure stare with both hands palm-down, unmoving."
    ]},
  { id: 29, name: "Gang focus / surrounded", short: "surrounded", search: "group",
    ironic: "Picture being the soft point in a ring of attention.",
    pairing: "Eyes jump bodies each beat. Keep up.",
    edge: "Outnumbered freeze on one face.",
    pure: "Surrounded, hands off.",
    degrade: ["One partner feels sparse.", "Central and used."],
    body: [
      "Place 3 objects around you as ‘people’ markers.",
      "Turn to face each marker once.",
      "Stroke only while looking at the screen, not markers.",
      "Whisper ‘all of you’ once.",
      "Kneel in the center of the markers.",
      "Pure stare spinning slowly once through the ring, then stop."
    ]},
  { id: 30, name: "Hypnosis swirl mindfuck", short: "hypnosis", search: "hypnosis",
    ironic: "If a thought appears, return to the spiral.",
    pairing: "Stroke only on BPM — rhythm is induction.",
    edge: "Repeat ‘watch’ in your head.",
    pure: "Fall into the pattern.",
    degrade: ["Attention is the leash.", "Follow motion."],
    body: [
      "Sway torso slowly in a circle 10 times.",
      "Follow a finger circle in front of your eyes, then screen.",
      "Blink only on BPM accents for 20 seconds.",
      "Whisper ‘deeper’ three times.",
      "Phone face-down — no other input.",
      "Pure stare; any thought = add 10 seconds (honor system)."
    ]}
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
    { bpm: 56, seconds: 12, hint: "Slow — long strokes" },
    { bpm: 72, seconds: 12, hint: "Steady" },
    { bpm: 96, seconds: 16, hint: "Building" },
    { bpm: 64, seconds: 12, hint: "Tease drop" },
    { bpm: 110, seconds: 12, hint: "Fast pressure" },
    { bpm: 80, seconds: 10, hint: "Settle" }
  ],
  edgeStare: [{ bpm: 48, seconds: 15, hint: "Frozen — mental pulse only" }],
  pure: [{ bpm: 52, seconds: 999, hint: "Breath only — no stroking" }]
};

/* Stage recipes: escalate physical + fetish intensity */
function stageRecipe(stage) {
  const map = {
    1: { bodyIndex: 0, pairing: 50, edges: 1, pure: 25, label: "Introduction" },
    2: { bodyIndex: 1, pairing: 60, edges: 1, pure: 40, label: "Imprint" },
    3: { bodyIndex: 2, pairing: 70, edges: 1, pure: 55, label: "Stain" },
    4: { bodyIndex: 3, pairing: 80, edges: 1, pure: 75, label: "Claim" },
    5: { bodyIndex: 4, pairing: 90, edges: 1, pure: 100, label: "Deep wire" },
    6: { bodyIndex: 5, pairing: 100, edges: 1, pure: 140, label: "Ownership" }
  };
  return map[stage] || map[1];
}

let state = {
  corruption: 0, activeFetish: null, currentStage: 1, fails: 0, lastRating: 0,
  customFetishes: [], freeMode: false
};

let settings = {
  showMedia: true, sfx: true, ambient: true, metronome: true, volume: 0.35,
  timerScale: 1, brutalMult: 1, gainMult: 1, r34UserId: "6721033", r34ApiKey: ""
};

let currentTimer = null, bpmTimer = null, bpmTickTimer = null, fluidInstance = null;
const mediaMemory = { imageUrl: "", videoUrl: "", mode: "image" };
let audioCtx = null, ambientNodes = null;

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
  osc.connect(g); g.connect(ctx.destination);
  osc.start(t); osc.stop(t + 0.06);
  const el = document.getElementById("bpmValue");
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
function startBpmPattern(key) {
  stopBpm();
  if (!settings.metronome) return;
  const pattern = BPM_PATTERNS[key];
  if (!pattern) return;
  let idx = 0, beat = 0;
  function runSegment() {
    if (idx >= pattern.length) idx = pattern.length - 1;
    const seg = pattern[idx];
    const bpmEl = document.getElementById("bpmValue");
    const hintEl = document.getElementById("bpmHint");
    if (bpmEl) bpmEl.textContent = String(seg.bpm);
    if (hintEl) hintEl.textContent = seg.hint || "";
    if (bpmTickTimer) clearInterval(bpmTickTimer);
    beat = 0;
    const interval = 60000 / seg.bpm;
    metroClick(true);
    bpmTickTimer = setInterval(() => { beat++; metroClick(beat % 4 === 0); }, interval);
    bpmTimer = setTimeout(() => {
      idx++;
      if (idx < pattern.length) runSegment();
    }, Math.min(seg.seconds, 600) * 1000 * (settings.timerScale || 1));
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
    ? `Active: ${state.activeFetish.short} — Stage ${state.currentStage}/6${state.freeMode ? " (FREE)" : ""}`
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
  return raw.replace(/[^\w\s+_:-]/g, " ").trim().split(/\s+/).filter(Boolean)[0] || "1girl";
}
function pickDegrade(fetish) {
  const arr = fetish.degrade || ["The protocol is patient."];
  return arr[Math.floor(Math.random() * arr.length)];
}
function bodyTask(fetish, stage) {
  const list = fetish.body || ["Hold still and stare while the protocol works."];
  const idx = Math.min((stageRecipe(stage).bodyIndex), list.length - 1);
  return list[idx];
}

async function grabRule34(fetish, wantVideo) {
  const userId = (settings.r34UserId || "").trim();
  const apiKey = (settings.r34ApiKey || "").trim();
  if (!userId || !apiKey) throw new Error("Open ⚙ — enter Rule34 User ID + API Key.");
  const tags = fetishToTags(fetish);
  const tagQuery = wantVideo ? tags + " video" : tags;
  const pid = Math.floor(Math.random() * 20);
  const url =
    "https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&json=1&limit=50&pid=" + pid +
    "&tags=" + encodeURIComponent(tagQuery) +
    "&user_id=" + encodeURIComponent(userId) +
    "&api_key=" + encodeURIComponent(apiKey);
  const res = await fetch(url);
  const text = await res.text();
  let data;
  try { data = JSON.parse(text); } catch (e) { throw new Error("Rule34 non-JSON — check API key."); }
  if (data && data.message) throw new Error(String(data.message));
  if (!Array.isArray(data) || !data.length) {
    if (wantVideo) return grabRule34VideoFallback(tags, userId, apiKey);
    throw new Error("No results for tag: " + tags);
  }
  if (wantVideo) {
    const pool = data.map(p => p.file_url || p.sample_url).filter(u => u && /\.(mp4|webm)(\?|$)/i.test(u));
    if (!pool.length) return grabRule34VideoFallback(tags, userId, apiKey);
    return pool[Math.floor(Math.random() * pool.length)];
  }
  const pool = data.map(p => p.sample_url || p.file_url || p.preview_url)
    .filter(u => u && /\.(jpg|jpeg|png|gif|webp)(\?|$)/i.test(u));
  if (!pool.length) throw new Error("No image URLs.");
  return pool[Math.floor(Math.random() * pool.length)];
}
async function grabRule34VideoFallback(tags, userId, apiKey) {
  const pid = Math.floor(Math.random() * 15);
  const url =
    "https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&json=1&limit=50&pid=" + pid +
    "&tags=" + encodeURIComponent(tags) +
    "&user_id=" + encodeURIComponent(userId) +
    "&api_key=" + encodeURIComponent(apiKey);
  const data = await (await fetch(url)).json();
  if (!Array.isArray(data)) throw new Error("No video for: " + tags);
  const pool = data.map(p => p.file_url || p.sample_url).filter(u => u && /\.(mp4|webm)(\?|$)/i.test(u));
  if (!pool.length) throw new Error("No video files for: " + tags);
  return pool[Math.floor(Math.random() * pool.length)];
}

function createMediaArea(fetish) {
  if (settings.showMedia === false) return document.createElement("div");
  const wrap = document.createElement("div");
  wrap.className = "media-area";
  const tabs = document.createElement("div");
  tabs.className = "media-tabs";
  const imgTab = document.createElement("button"); imgTab.type = "button"; imgTab.textContent = "Image";
  const vidTab = document.createElement("button"); vidTab.type = "button"; vidTab.textContent = "Video";
  tabs.appendChild(imgTab); tabs.appendChild(vidTab);
  const stage = document.createElement("div");
  const controls = document.createElement("div");
  controls.className = "media-controls";
  const urlInput = document.createElement("input");
  urlInput.type = "url";
  urlInput.placeholder = "Paste image / YouTube / .mp4 URL";
  const row = document.createElement("div");
  row.className = "row";
  const grabBtn = document.createElement("button"); grabBtn.type = "button"; grabBtn.textContent = "Grab image";
  const grabVidBtn = document.createElement("button"); grabVidBtn.type = "button"; grabVidBtn.textContent = "Grab video";
  const loadBtn = document.createElement("button"); loadBtn.type = "button"; loadBtn.textContent = "Load URL";
  const findBtn = document.createElement("button"); findBtn.type = "button"; findBtn.textContent = "Find online";
  const clearBtn = document.createElement("button"); clearBtn.type = "button"; clearBtn.textContent = "Clear";
  row.append(grabBtn, grabVidBtn, loadBtn, findBtn, clearBtn);
  const status = document.createElement("p");
  status.className = "media-hint";
  status.textContent = (settings.r34ApiKey || "").trim()
    ? "Tag: " + fetishToTags(fetish)
    : "⚙ → API key → Save.";
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
    stage.innerHTML = "";
    if (mediaMemory.mode === "image" && mediaMemory.imageUrl) {
      const img = document.createElement("img");
      img.src = mediaMemory.imageUrl;
      img.alt = fetish.short || "";
      img.referrerPolicy = "no-referrer";
      stage.appendChild(img);
    } else if (mediaMemory.mode === "video" && mediaMemory.videoUrl) {
      const yt = youtubeId(mediaMemory.videoUrl);
      if (yt) {
        const iframe = document.createElement("iframe");
        iframe.src = "https://www.youtube.com/embed/" + yt + "?rel=0";
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
                  autoPlay: false, mute: true, allowTheatre: true,
                  playbackRateEnabled: true, allowDownload: false,
                  playButtonShowing: true, fillToContainer: true, posterImage: ""
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
    ensureAudio(); grabBtn.disabled = true; status.textContent = "Grabbing image…";
    try {
      mediaMemory.imageUrl = await grabRule34(fetish, false);
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
  loadBtn.onclick = () => {
    const url = urlInput.value.trim();
    if (!url) return;
    if (mediaMemory.mode === "image") mediaMemory.imageUrl = url;
    else mediaMemory.videoUrl = url;
    renderStage();
  };
  findBtn.onclick = () => {
    const q = encodeURIComponent(fetishToTags(fetish));
    window.open(
      "https://rule34.xxx/index.php?page=post&s=list&tags=" + q + (mediaMemory.mode === "video" ? "+video" : ""),
      "_blank", "noopener"
    );
  };
  clearBtn.onclick = () => {
    destroyFluid();
    if (mediaMemory.mode === "image") mediaMemory.imageUrl = "";
    else mediaMemory.videoUrl = "";
    renderStage();
  };
  imgTab.onclick = () => setMode("image");
  vidTab.onclick = () => setMode("video");
  wrap.append(tabs, stage, controls);
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
  stopBpm(); destroyFluid();
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
    <p class="big-text">You don’t choose what gets wired into you.<br>The system does — unless you take Free Mode.</p>
    <p>Each stage = fetish-specific <strong>physical task</strong> → BPM pairing → one edge → pure stare.</p>
  `);
  const row = document.createElement("div");
  row.className = "btn-row";
  row.appendChild(btn("Begin / Roll Random Fetish", () => {
    state.freeMode = false;
    rollNewFetish();
  }));
  row.appendChild(btn("Free Mode — pick fetish → Stage 6", showFreeMode, true));
  screen.appendChild(row);
}

function showFreeMode() {
  clearScreen();
  const c = card(`
    <h2>Free Mode</h2>
    <p>Skip placement. Jump straight to <strong>Stage 6</strong> on a fetish you choose.</p>
    <p class="warning">Still does the full Stage 6 ritual (physical + pairing + edge + long pure).</p>
  `);
  const select = document.createElement("select");
  select.style.cssText = "width:100%;padding:12px;margin:12px 0;background:#2a1f22;color:#f5e6e8;border:1px solid #3a2a2e;border-radius:8px;font-size:15px;";
  getAllFetishes().forEach(f => {
    const opt = document.createElement("option");
    opt.value = String(f.id);
    opt.textContent = f.name;
    select.appendChild(opt);
  });
  c.appendChild(select);
  const row = document.createElement("div");
  row.className = "btn-row";
  row.appendChild(btn("Start Stage 6 now", () => {
    const id = select.value;
    const fetish = getAllFetishes().find(f => String(f.id) === id);
    if (!fetish) return;
    state.activeFetish = fetish;
    state.currentStage = 6;
    state.fails = 0;
    state.freeMode = true;
    mediaMemory.imageUrl = "";
    mediaMemory.videoUrl = "";
    save();
    startSession(6);
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
  row.appendChild(btn("Abandon & Roll New", () => {
    if (confirm("Abandon?")) {
      state.activeFetish = null;
      state.currentStage = 1;
      state.fails = 0;
      state.freeMode = false;
      save();
      rollNewFetish();
    }
  }, true));
  row.appendChild(btn("Home", () => { showWelcome(); }, true));
  screen.appendChild(row);
}

function rollNewFetish() {
  const list = getAllFetishes();
  const pick = list[Math.floor(Math.random() * list.length)];
  state.activeFetish = pick;
  state.currentStage = 1;
  state.fails = 0;
  state.freeMode = false;
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
    <p class="instruction">${bodyTask(fetish, 1)}</p>
  `);
  attachMedia(c, fetish);
  let step = 0;
  const ratings = [];
  function next() {
    step++;
    if (step === 1) {
      clearScreen();
      const el = card(`
        <h2>Test 1 / 3</h2>
        <p class="big-text">Look ${scaleTime(20)}s. No touching.</p>
        <p class="instruction">${fetish.pure}</p>
        <div class="timer" id="t">${scaleTime(20)}</div>
      `);
      attachMedia(el, fetish);
      countdown(scaleTime(20), () => askRating("Response 0–10?"));
    } else if (step === 2) {
      clearScreen();
      const el = card(`
        <h2>Test 2 / 3</h2>
        <p class="big-text">Look ${scaleTime(40)}s.</p>
        <p class="instruction">${fetish.ironic}</p>
        <p class="instruction">${bodyTask(fetish, 2)}</p>
        <div class="timer" id="t">${scaleTime(40)}</div>
      `);
      attachMedia(el, fetish);
      countdown(scaleTime(40), () => askRating("Response?"));
    } else if (step === 3) {
      clearScreen();
      const el = card(`
        <h2>Final Placement</h2>
        <p class="big-text">${scaleTime(60)}s pure.</p>
        <p class="instruction">${fetish.pure}</p>
        <div class="timer" id="t">${scaleTime(60)}</div>
      `);
      attachMedia(el, fetish);
      countdown(scaleTime(60), () => askRating("Final?"));
    } else {
      const avg = ratings.reduce((a, b) => a + b, 0) / ratings.length;
      let stage = 1;
      if (avg >= 8) stage = 4;
      else if (avg >= 6) stage = 3;
      else if (avg >= 4) stage = 2;
      state.currentStage = stage;
      save();
      clearScreen();
      card(`<h2>Placed at Stage ${stage}</h2><p>Average ${avg.toFixed(1)}</p>`);
      const row = document.createElement("div");
      row.className = "btn-row";
      row.appendChild(btn(`Start Stage ${stage}`, () => startSession(stage)));
      row.appendChild(btn("Re-roll", () => { state.activeFetish = null; save(); rollNewFetish(); }, true));
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
  const recipe = stageRecipe(stage);
  const brutalMod = Math.min(state.fails * 8 * (settings.brutalMult || 1), 40);
  clearScreen();
  const c = card(`
    <div class="stage-badge">Stage ${stage} / 6 — ${recipe.label}${state.freeMode ? " · FREE" : ""}</div>
    <div class="fetish-name">${fetish.name}</div>
    <p class="instruction">${fetish.ironic}</p>
    <p><strong>Tonight’s physical demand:</strong></p>
    <p class="instruction">${bodyTask(fetish, stage)}</p>
    <p class="warning">Do the physical task during the next phases. Honesty is the only enforcement.</p>
  `);
  attachMedia(c, fetish);
  const row = document.createElement("div");
  row.className = "btn-row";
  row.appendChild(btn("I’ve started the physical task — begin", () => runStage(stage, brutalMod)));
  screen.appendChild(row);
}

function runStage(stage, brutalMod) {
  const fetish = state.activeFetish;
  const recipe = stageRecipe(stage);
  const pairTime = scaleTime(recipe.pairing);
  const pureBase = scaleTime(recipe.pure + brutalMod);
  const physical = bodyTask(fetish, stage);

  // Phase A — Physical task focus
  clearScreen();
  const ca = card(`
    <h2>Phase A — Physical</h2>
    <p class="big-text">Do this now. Eyes on the trigger when you can.</p>
    <p class="instruction">${physical}</p>
    <p>${pickDegrade(fetish)}</p>
    <div class="timer" id="t">${scaleTime(25 + stage * 5)}</div>
  `);
  attachMedia(ca, fetish);
  countdown(scaleTime(25 + stage * 5), phasePair);

  function phasePair() {
    clearScreen();
    const cp = card(`
      <h2>Phase B — Pairing</h2>
      <p class="big-text">Stroke on the BPM. Keep the physical demand alive.</p>
      <p class="instruction">${fetish.pairing}</p>
      <p class="instruction">${physical}</p>
      ${bpmHtml()}
      <div class="timer" id="t">${pairTime}</div>
    `);
    attachMedia(cp, fetish);
    startBpmPattern("pairing");
    countdown(pairTime, phaseEdge);
  }

  function phaseEdge() {
    stopBpm();
    clearScreen();
    const ce = card(`
      <h2>Phase C — Single Edge</h2>
      <p class="big-text">One edge only. Make it count.</p>
      <p class="instruction">${fetish.edge}</p>
      <p class="instruction">${physical}</p>
      <p>${pickDegrade(fetish)}</p>
    `);
    attachMedia(ce, fetish);
    const row = document.createElement("div");
    row.className = "btn-row";
    row.appendChild(btn("At the edge — freeze & stare 15s", () => {
      clearScreen();
      const cf = card(`
        <h2>Edge freeze</h2>
        <p class="instruction">${fetish.edge}</p>
        ${bpmHtml()}
        <div class="timer" id="t">15</div>
      `);
      attachMedia(cf, fetish);
      startBpmPattern("edgeStare");
      countdown(15, phaseTwist);
    }));
    screen.appendChild(row);
  }

  // Extra creative beat before pure — changes by stage
  function phaseTwist() {
    stopBpm();
    const twists = [
      `Whisper the fetish name (“${fetish.short}”) six times while staring.`,
      `Hold your breath for 8 seconds, eyes locked, then gasp and keep staring.`,
      `Do the physical task one more intensified time: ${physical}`,
      `Put both hands on your head (surrender pose) for 20 seconds — no cock.`,
      `Describe out loud one detail of the image that hurts your pride.`,
      `Final ownership pose: ${physical} — hold it into the pure stare.`
    ];
    const twist = twists[Math.min(stage - 1, twists.length - 1)];
    clearScreen();
    const ct = card(`
      <h2>Phase D — Twist</h2>
      <p class="big-text">Stage ${stage} demand</p>
      <p class="instruction">${twist}</p>
      <div class="timer" id="t">${scaleTime(20 + stage * 3)}</div>
    `);
    attachMedia(ct, fetish);
    countdown(scaleTime(20 + stage * 3), phasePure);
  }

  function phasePure() {
    clearScreen();
    const cu = card(`
      <h2>Phase E — Pure Trigger</h2>
      <p class="big-text">Hands off. ${pureBase}s. Physical residue stays if possible.</p>
      <p class="instruction">${fetish.pure}</p>
      <p class="instruction">${physical}</p>
      ${bpmHtml()}
      <div class="timer" id="t">${pureBase}</div>
      <p class="warning">Touching = fail.</p>
    `);
    attachMedia(cu, fetish);
    startBpmPattern("pure");
    countdown(pureBase, () => {
      stopBpm();
      clearScreen();
      card(`<h2>Rate pure response</h2><p>0 = nothing · 10 = ruined</p>`);
      const row = document.createElement("div");
      row.className = "rating-row";
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
      state.freeMode = false;
      state.corruption = Math.min(100, state.corruption + Math.round(8 * (settings.gainMult || 1)));
    }
    save();
    clearScreen();
    card(`
      <h2 style="color:var(--success)">Stage Passed</h2>
      <p class="big-text">${rating}/10 · +${gain} corruption</p>
      ${stage === 6 ? "<p>Track complete.</p>" : `<p>Next: Stage ${stage + 1} (harder body demand).</p>`}
    `);
    giveContamination(stage, true);
  } else {
    sfxFail();
    state.fails++;
    save();
    clearScreen();
    card(`<h2 style="color:var(--danger)">Failed</h2><p class="big-text">${rating}/10</p><p>Physical + pure will be harsher next time.</p>`);
    giveContamination(stage, false);
  }
}

function giveContamination(stage, success) {
  const fetish = state.activeFetish || { short: "the last thing", ironic: "Think about it.", body: ["Recall the pose."] };
  const rules = [
    fetish.ironic,
    bodyTask(fetish, Math.min(stage + 1, 6)),
    `Before sleep: 60s stare at ${fetish.short}.`,
    success
      ? `Carry one residue of the physical task into the next hour.`
      : `Repeat today’s physical task once more before bed.`,
    pickDegrade(fetish)
  ];
  const chosen = rules.sort(() => Math.random() - 0.5).slice(0, 2 + Math.floor(stage / 2));
  card(`
    <h2>Contamination Orders</h2>
    <ul style="padding-left:20px;margin:12px 0">
      ${chosen.map(r => `<li style="margin-bottom:8px">${r}</li>`).join("")}
    </ul>
  `);
  const row = document.createElement("div");
  row.className = "btn-row";
  row.appendChild(btn("I accept", () => {
    stopAmbient(); stopBpm();
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
    if (left <= 3 && left >= 1) sfxWarn();
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
  if (!name || !short) return alert("Name and short required");
  state.customFetishes = state.customFetishes || [];
  state.customFetishes.push({
    id: Date.now(), name, short, ironic, search,
    pairing: ironic, edge: ironic, pure: ironic,
    degrade: [ironic],
    body: [ironic, ironic, ironic, ironic, ironic, ironic]
  });
  save();
  ["customName", "customShort", "customIronic", "customSearch"].forEach(id => {
    document.getElementById(id).value = "";
  });
  alert("Added.");
};
document.getElementById("resetBtn").onclick = () => {
  if (confirm("Erase progress?")) {
    localStorage.removeItem("corruptionProtocol");
    state = { corruption: 0, activeFetish: null, currentStage: 1, fails: 0, lastRating: 0, customFetishes: [], freeMode: false };
    mediaMemory.imageUrl = ""; mediaMemory.videoUrl = "";
    stopAmbient(); stopBpm(); destroyFluid();
    save();
    showWelcome();
  }
};

start();
