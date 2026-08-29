/* ========== PERSONAS ========== */
const PERSONAS = [
  {
    id: "mistress", name: "Mistress", pitch: 1.05, rate: 0.92,
    greet: "On your knees in your head. I decide the pace.",
    address: "toy",
    lines: {
      slow: ["Slow. You don't rush me.", "Long strokes. Prove obedience."],
      faster: ["Faster. Earn it.", "Speed up. Don't edge yet."],
      edge: ["Edge. Now. Hold.", "Freeze at the brink."],
      stop: ["Hands off. Breathe.", "Stop. I said stop."],
      praise: ["Good. Barely.", "Acceptable."],
      degrade: ["Pathetic and predictable.", "This is what you're for."]
    }
  },
  {
    id: "tease", name: "Tease", pitch: 1.15, rate: 1.0,
    greet: "Hi trouble. Let's ruin your focus.",
    address: "needy thing",
    lines: {
      slow: ["Easy… drag it out.", "Slower. I like the suffering."],
      faster: ["Oops—faster.", "Keep up. Cute when you scramble."],
      edge: ["Right there—don't tip.", "Edge for me. Stay."],
      stop: ["Hands away. Mean, I know.", "Pause."],
      praise: ["There you go.", "Good boy energy."],
      degrade: ["Following a voice so easily.", "So easy to wind up."]
    }
  },
  {
    id: "coach", name: "Coach", pitch: 0.95, rate: 1.0,
    greet: "Session start. Match the BPM. Clean form.",
    address: "athlete",
    lines: {
      slow: ["Controlled tempo.", "Slow set. Full range."],
      faster: ["Increase cadence.", "Push the pace."],
      edge: ["Hold at threshold.", "Edge posture. Lock it."],
      stop: ["Break. Hands off.", "Recover. Four-count breaths."],
      praise: ["Solid.", "That's the work."],
      degrade: ["Sloppy. Fix it.", "Cleaner."]
    }
  },
  {
    id: "pet", name: "Handler", pitch: 1.1, rate: 0.95,
    greet: "Collar on in your mind. Good pets listen.",
    address: "pet",
    lines: {
      slow: ["Gentle strokes, pet.", "Slow. Patience."],
      faster: ["Faster, pup.", "Quicker—still listening?"],
      edge: ["Stay. Edge. Don't finish.", "Hold for Handler."],
      stop: ["Paws up.", "Sit. Breathe."],
      praise: ["Good pet.", "That's my good one."],
      degrade: ["Needy little pet.", "You melt so easily."]
    }
  },
  {
    id: "whisper", name: "Whisper", pitch: 0.9, rate: 0.88,
    greet: "Closer. I'll tell you exactly what to do.",
    address: "you",
    lines: {
      slow: ["Slow… feel every count.", "Draw it out with me."],
      faster: ["A little faster… yes.", "Match me. Don't think."],
      edge: ["On the edge. Stay floating.", "Hold. Don't fall."],
      stop: ["Stop. Breathe against the urge.", "Hands away."],
      praise: ["Just like that.", "You're doing so well."],
      degrade: ["You needed this voice.", "So obedient when it counts."]
    }
  }
];

/* ========== FETISHES ========== */
const FETISHES = [
  { id: 1, name: "Bare feet / soles", short: "feet", search: "feet", hook: "those soles", physical: "bare feet flat on the floor" },
  { id: 2, name: "Thighs", short: "thighs", search: "thighs", hook: "those thighs", physical: "thighs pressed together" },
  { id: 3, name: "Soft belly", short: "belly", search: "belly", hook: "that soft belly", physical: "a hand on your stomach" },
  { id: 4, name: "Armpits", short: "armpits", search: "armpits", hook: "those armpits", physical: "one arm raised" },
  { id: 5, name: "Socks", short: "socks", search: "socks", hook: "those socks", physical: "socks on" },
  { id: 6, name: "Tongue out", short: "tongue", search: "tongue_out", hook: "that open mouth", physical: "tongue on your lip" },
  { id: 7, name: "Hands", short: "hands", search: "hands", hook: "those hands", physical: "free hand in view" },
  { id: 8, name: "Body hair", short: "body hair", search: "body_hair", hook: "that body hair", physical: "fingers in body hair" },
  { id: 9, name: "Sweat", short: "sweat", search: "sweat", hook: "that sweaty shine", physical: "no wiping sweat" },
  { id: 10, name: "Drool / spit", short: "drool", search: "saliva", hook: "that spit", physical: "mouth wet" },
  { id: 11, name: "Panties / waistband", short: "panties", search: "panties", hook: "that waistband dig", physical: "notice elastic lines" },
  { id: 12, name: "Ass focus", short: "ass", search: "ass", hook: "that ass", physical: "weight on your heels or hands" },
  { id: 13, name: "Soft folds", short: "chubby", search: "chubby", hook: "those soft folds", physical: "a soft fold in your grip when told" },
  { id: 14, name: "Stockings", short: "stockings", search: "stockings", hook: "that sheer fabric", physical: "hands aware of your calves" },
  { id: 15, name: "Ahegao face", short: "ahegao", search: "ahegao", hook: "that dumb open face", physical: "jaw slack" },
  { id: 16, name: "Soft chest", short: "chest", search: "breasts", hook: "that soft chest", physical: "pressure on your chest" },
  { id: 17, name: "POV soles", short: "soles", search: "soles", hook: "soles in your face", physical: "lean closer to the screen" },
  { id: 18, name: "Worn clothes", short: "worn", search: "panties", hook: "that used look", physical: "something already worn on your body" },
  { id: 19, name: "Facial mess", short: "cum face", search: "cum_on_face", hook: "mess on a face", physical: "spit streak when ordered" },
  { id: 20, name: "Public risk", short: "public", search: "public", hook: "almost getting caught", physical: "door-aware posture" },
  { id: 21, name: "Bondage", short: "bondage", search: "bondage", hook: "those restraints", physical: "wrists ready to cross" },
  { id: 22, name: "Collar / pet", short: "collar", search: "collar", hook: "that collar", physical: "ready to kneel" },
  { id: 23, name: "Mind break face", short: "mind break", search: "ahegao", hook: "that broken expression", physical: "empty face on command" },
  { id: 24, name: "Exhausted sweat", short: "exhausted", search: "sweat", hook: "that spent body", physical: "heavy breathing" },
  { id: 25, name: "Tentacles", short: "tentacles", search: "tentacles", hook: "those tentacles", physical: "something loosely on a forearm" },
  { id: 26, name: "Inflation", short: "inflation", search: "inflation", hook: "that overfull belly", physical: "hand near your stomach" },
  { id: 27, name: "Monster", short: "monster", search: "monster", hook: "that non-human body", physical: "stare discipline" },
  { id: 28, name: "Extreme insertion art", short: "insertion", search: "insertion", hook: "that extreme depth", physical: "free hand ready to pin" },
  { id: 29, name: "Group / surrounded", short: "group", search: "group", hook: "being surrounded", physical: "aware of space around you" },
  { id: 30, name: "Hypnosis", short: "hypnosis", search: "hypnosis", hook: "that spiral pull", physical: "ready to sway" }
];

/* ========== TASK LIBRARY ==========
   type: "stroke" → has BPM synced to technique
   type: "timed"  → no stroking, timer only (sensory / pose / ritual)
   fetishId: null = global; number = only that fetish
*/
const TASKS = [
  /* ---- GLOBAL STROKE TECHNIQUES ---- */
  { id: "long_slow", type: "stroke", fetishId: null, bpm: 48, sec: [28, 40],
    text: "Long, slow full-length strokes. Heel of the palm to the tip. No rushing." },
  { id: "short_tip", type: "stroke", fetishId: null, bpm: 72, sec: [20, 32],
    text: "Short strokes focused only on the head. Light grip." },
  { id: "twist_up", type: "stroke", fetishId: null, bpm: 60, sec: [22, 34],
    text: "Stroke with a twist on the upstroke. Downstroke straight." },
  { id: "two_finger", type: "stroke", fetishId: null, bpm: 66, sec: [20, 30],
    text: "Two fingers only. Thumb and index. Delicate and mean." },
  { id: "loose_fist", type: "stroke", fetishId: null, bpm: 56, sec: [24, 36],
    text: "Loose fist. Barely any pressure. Tease yourself." },
  { id: "tight_grip", type: "stroke", fetishId: null, bpm: 52, sec: [18, 28],
    text: "Tight grip. Slow. Feel every centimeter." },
  { id: "thumb_rub", type: "stroke", fetishId: null, bpm: 80, sec: [16, 26],
    text: "Thumb rubbing the underside ridge. Small motions on the beat." },
  { id: "palm_grind", type: "stroke", fetishId: null, bpm: 44, sec: [22, 34],
    text: "Palm over the head. Slow circles timed to the beat." },
  { id: "alternating", type: "stroke", fetishId: null, bpm: 64, sec: [24, 36],
    text: "Alternate hands every four beats. Don't break rhythm." },
  { id: "left_only", type: "stroke", fetishId: null, bpm: 58, sec: [20, 30],
    text: "Non-dominant hand only. Awkward is the point." },
  { id: "head_only_fast", type: "stroke", fetishId: null, bpm: 96, sec: [14, 22],
    text: "Fast shallow strokes on the head only. Stay off the edge." },
  { id: "build_ladder", type: "stroke", fetishId: null, bpm: 70, sec: [26, 38],
    text: "Start mid-shaft. Climb higher each four beats until you're at the tip." },
  { id: "death_grip_deny", type: "stroke", fetishId: null, bpm: 40, sec: [18, 28],
    text: "Almost too tight. Extremely slow. You may not speed up." },
  { id: "feather", type: "stroke", fetishId: null, bpm: 88, sec: [16, 24],
    text: "Fingertips only. Feather-light. Fast little flicks on the beat." },
  { id: "squeeze_pulse", type: "stroke", fetishId: null, bpm: 60, sec: [20, 30],
    text: "Hold still mid-shaft and pulse-squeeze on each beat. No sliding." },
  { id: "spit_lube", type: "stroke", fetishId: null, bpm: 54, sec: [22, 32],
    text: "Add spit once. Wet strokes. Smooth and continuous." },
  { id: "dry_rough", type: "stroke", fetishId: null, bpm: 50, sec: [16, 24],
    text: "Dry. Slightly rough. Controlled. Don't hurt yourself—just feel it." },
  { id: "overhand", type: "stroke", fetishId: null, bpm: 62, sec: [20, 30],
    text: "Overhand grip. Stroke as if milking downward on the beat." },
  { id: "both_hands", type: "stroke", fetishId: null, bpm: 48, sec: [24, 34],
    text: "Both hands stacked. Long strokes. Heavy and deliberate." },
  { id: "one_up_one_twist", type: "stroke", fetishId: null, bpm: 68, sec: [22, 32],
    text: "One hand strokes, the other twists at the head on every other beat." },
  { id: "tempo_double", type: "stroke", fetishId: null, bpm: 100, sec: [12, 20],
    text: "Double-time short strokes. Stay controlled. No edge yet." },
  { id: "tempo_half", type: "stroke", fetishId: null, bpm: 36, sec: [28, 40],
    text: "Half-time. One stroke every other click if you need. Glacial." },
  { id: "edging_approach", type: "stroke", fetishId: null, bpm: 78, sec: [18, 26],
    text: "Climb toward the edge but stop short each time. Practice denial." },
  { id: "balls_tease", type: "stroke", fetishId: null, bpm: 58, sec: [20, 30],
    text: "Stroke normally while the other hand gently teases lower. Stay on beat." },
  { id: "no_tip", type: "stroke", fetishId: null, bpm: 64, sec: [20, 30],
    text: "Shaft only. Never touch the head this whole step." },
  { id: "only_tip", type: "stroke", fetishId: null, bpm: 84, sec: [14, 22],
    text: "Head only. Nothing below the rim." },
  { id: "standing", type: "stroke", fetishId: null, bpm: 60, sec: [20, 30],
    text: "Stand up. Stroke on the beat. Knees soft." },
  { id: "seated_lean", type: "stroke", fetishId: null, bpm: 56, sec: [22, 32],
    text: "Sit, lean forward toward the screen, stroke slow." },
  { id: "on_back", type: "stroke", fetishId: null, bpm: 52, sec: [24, 34],
    text: "On your back if you can. Eyes on the trigger. Steady strokes." },
  { id: "matched_breath", type: "stroke", fetishId: null, bpm: 48, sec: [26, 36],
    text: "One stroke per exhale. BPM is a guide—breath is law." },

  /* ---- GLOBAL TIMED (no stroke) ---- */
  { id: "hands_off_stare", type: "timed", fetishId: null, bpm: 0, sec: [12, 25],
    text: "Hands completely off. Stare only. Breathe through the urge." },
  { id: "behind_back", type: "timed", fetishId: null, bpm: 0, sec: [10, 20],
    text: "Hands behind your back. No touching. Eyes locked." },
  { id: "head_on_hands", type: "timed", fetishId: null, bpm: 0, sec: [10, 18],
    text: "Both hands on your head. Surrender pose. Watch." },
  { id: "breath_hold", type: "timed", fetishId: null, bpm: 0, sec: [8, 12],
    text: "Inhale. Hold. Stare. Exhale only when the timer ends." },
  { id: "count_aloud", type: "timed", fetishId: null, bpm: 0, sec: [12, 20],
    text: "Count out loud to twenty while staring. No hands." },
  { id: "describe_detail", type: "timed", fetishId: null, bpm: 0, sec: [12, 18],
    text: "Out loud, describe one detail of the image. Then silence and stare." },
  { id: "whisper_need", type: "timed", fetishId: null, bpm: 0, sec: [10, 16],
    text: "Whisper what you want. Once. Then mouth shut. Hands off." },
  { id: "jaw_slack", type: "timed", fetishId: null, bpm: 0, sec: [12, 20],
    text: "Jaw slack. Mouth open. Breathe loud. Hands off." },
  { id: "tongue_out", type: "timed", fetishId: null, bpm: 0, sec: [10, 18],
    text: "Tongue out. Hold it. Eyes on the trigger." },
  { id: "kneel_stare", type: "timed", fetishId: null, bpm: 0, sec: [14, 24],
    text: "Kneel if safe. Hands on thighs. Stare up at the screen." },
  { id: "squeeze_thighs", type: "timed", fetishId: null, bpm: 0, sec: [12, 20],
    text: "Thighs squeezed hard. No cock. Just pressure and looking." },
  { id: "cold_still", type: "timed", fetishId: null, bpm: 0, sec: [10, 16],
    text: "Frozen statue. No adjusting. Only eyes move." },
  { id: "heartbeat_listen", type: "timed", fetishId: null, bpm: 0, sec: [12, 18],
    text: "Hands off. Feel your pulse. Match breath to it while staring." },
  { id: "edge_memory", type: "timed", fetishId: null, bpm: 0, sec: [10, 16],
    text: "Don't touch. Just remember the last edge and sit in it." },
  { id: "smile_mean", type: "timed", fetishId: null, bpm: 0, sec: [8, 14],
    text: "Force a slight smile while you stare. Hold it. Hands off." },

  /* ---- FETISH-SPECIFIC: FEET / SOLES (1, 17) ---- */
  { id: "feet_press", type: "timed", fetishId: 1, bpm: 0, sec: [14, 22],
    text: "Press both bare soles together. Feel the heat. Stare at the soles on screen." },
  { id: "feet_thumb", type: "timed", fetishId: 1, bpm: 0, sec: [16, 24],
    text: "Thumb-circle your own arch while staring at the trigger soles." },
  { id: "feet_smell", type: "timed", fetishId: 1, bpm: 0, sec: [8, 14],
    text: "One quick smell of your own foot, then eyes back to the screen." },
  { id: "feet_tiptoe", type: "timed", fetishId: 1, bpm: 0, sec: [12, 18],
    text: "Rise on tiptoes until it burns. Hands off. Keep staring." },
  { id: "soles_pov_close", type: "timed", fetishId: 17, bpm: 0, sec: [14, 22],
    text: "Lean your face closer to the screen. Soles fill your vision." },
  { id: "soles_hover", type: "timed", fetishId: 17, bpm: 0, sec: [12, 18],
    text: "Hover your own sole near your face if safe. Split focus: screen and skin." },
  { id: "soles_stroke_sync", type: "stroke", fetishId: 17, bpm: 56, sec: [22, 32],
    text: "Stroke while imagining those soles on your face. Slow, obedient pace." },
  { id: "feet_stroke_ground", type: "stroke", fetishId: 1, bpm: 52, sec: [22, 32],
    text: "Bare feet flat. Stroke only while soles stay planted. Lift a foot and you stop." },

  /* ---- THIGHS (2) ---- */
  { id: "thigh_squeeze_reps", type: "timed", fetishId: 2, bpm: 0, sec: [14, 20],
    text: "Squeeze thighs together hard fifteen times. Count out loud." },
  { id: "thigh_sit_hands", type: "timed", fetishId: 2, bpm: 0, sec: [12, 18],
    text: "Sit on your hands. Thigh heat on your palms. Stare." },
  { id: "thigh_stroke", type: "stroke", fetishId: 2, bpm: 60, sec: [22, 32],
    text: "Thighs locked tight. Stroke on the beat without unlocking them." },
  { id: "thigh_slap", type: "timed", fetishId: 2, bpm: 0, sec: [8, 12],
    text: "Light slap on each outer thigh once. Sting, then stare." },

  /* ---- BELLY (3) ---- */
  { id: "belly_expose", type: "timed", fetishId: 3, bpm: 0, sec: [14, 22],
    text: "Shirt up. Belly exposed. Hand resting on it. No cock." },
  { id: "belly_poke", type: "timed", fetishId: 3, bpm: 0, sec: [12, 18],
    text: "Poke and hold the softest spot. Stare at the soft belly on screen." },
  { id: "belly_stroke", type: "stroke", fetishId: 3, bpm: 54, sec: [22, 32],
    text: "One hand on belly, one stroking slow. Soft body, soft pace." },
  { id: "belly_jiggle", type: "timed", fetishId: 3, bpm: 0, sec: [10, 16],
    text: "Jiggle your stomach on purpose a few times. Then still. Stare." },

  /* ---- ARMPITS (4) ---- */
  { id: "pit_raise", type: "timed", fetishId: 4, bpm: 0, sec: [16, 24],
    text: "One arm fully raised. Expose the pit. Stare at the screen's." },
  { id: "pit_smell", type: "timed", fetishId: 4, bpm: 0, sec: [8, 14],
    text: "Smell your own armpit once. Then eyes back. Arm still up if you can." },
  { id: "pit_stroke", type: "stroke", fetishId: 4, bpm: 58, sec: [20, 30],
    text: "Arm raised while you stroke. Don't lower it until this step ends." },
  { id: "pit_both", type: "timed", fetishId: 4, bpm: 0, sec: [12, 18],
    text: "Both arms up until they shake. Hands off cock. Stare." },

  /* ---- SOCKS (5) ---- */
  { id: "sock_flex", type: "timed", fetishId: 5, bpm: 0, sec: [12, 18],
    text: "Socks on. Flex ankles twenty times. Watch the socked feet on screen." },
  { id: "sock_peel", type: "timed", fetishId: 5, bpm: 0, sec: [10, 16],
    text: "Peel one sock halfway. Leave it. Stare." },
  { id: "sock_face", type: "timed", fetishId: 5, bpm: 0, sec: [8, 12],
    text: "Socked sole near your face for a few seconds. Then screen only." },
  { id: "sock_stroke", type: "stroke", fetishId: 5, bpm: 62, sec: [20, 30],
    text: "Stroke while squeezing a sock in your free hand on the beats." },

  /* ---- TONGUE / MOUTH (6, 15, 23) ---- */
  { id: "mouth_open", type: "timed", fetishId: 6, bpm: 0, sec: [12, 20],
    text: "Mouth open. Tongue out. Drool if it happens. Hands off." },
  { id: "mouth_lick_lips", type: "timed", fetishId: 6, bpm: 0, sec: [10, 16],
    text: "Lick your lips slowly ten times while staring." },
  { id: "ahegao_hold", type: "timed", fetishId: 15, bpm: 0, sec: [12, 20],
    text: "Full dumb face. Eyes rolled a little. Tongue out. Hold." },
  { id: "ahegao_stroke", type: "stroke", fetishId: 15, bpm: 70, sec: [18, 28],
    text: "Keep the dumb face while you stroke. If the face breaks, slow down." },
  { id: "mindbreak_blank", type: "timed", fetishId: 23, bpm: 0, sec: [14, 22],
    text: "Blank face. No clever thoughts. If a thought appears, restart the stare in your head." },
  { id: "mindbreak_line", type: "timed", fetishId: 23, bpm: 0, sec: [10, 16],
    text: "Say once: this is wiring into me. Then silence and stare." },

  /* ---- HANDS (7) ---- */
  { id: "hand_flex", type: "timed", fetishId: 7, bpm: 0, sec: [12, 18],
    text: "Both hands up. Flex until veins show. Compare to the screen." },
  { id: "hand_suck", type: "timed", fetishId: 7, bpm: 0, sec: [10, 16],
    text: "Suck one finger slowly while staring at the hand focus." },
  { id: "hand_stroke_other", type: "stroke", fetishId: 7, bpm: 60, sec: [20, 30],
    text: "Stroke with one hand. Hold the other in a fist in your peripheral vision." },

  /* ---- BODY HAIR (8) ---- */
  { id: "hair_rake", type: "timed", fetishId: 8, bpm: 0, sec: [12, 18],
    text: "Rake fingers through any body hair you have. Slow. Then stare." },
  { id: "hair_stroke", type: "stroke", fetishId: 8, bpm: 56, sec: [20, 30],
    text: "Stroke while your other hand rests in body hair. Texture linked to pace." },

  /* ---- SWEAT (9, 24) ---- */
  { id: "sweat_work", type: "timed", fetishId: 9, bpm: 0, sec: [20, 30],
    text: "Thirty seconds of fast movement—jumping jacks or run in place—then freeze and stare sweaty." },
  { id: "sweat_no_wipe", type: "timed", fetishId: 9, bpm: 0, sec: [12, 18],
    text: "Do not wipe. Feel the cool air on wet skin. Hands off cock." },
  { id: "sweat_stroke", type: "stroke", fetishId: 9, bpm: 66, sec: [18, 28],
    text: "Stroke while sweaty. Messy is correct. Stay on the beat." },
  { id: "exhaust_collapse", type: "timed", fetishId: 24, bpm: 0, sec: [14, 22],
    text: "Lie back or slump. Exhausted posture. Half-lidded stare." },
  { id: "exhaust_stroke", type: "stroke", fetishId: 24, bpm: 50, sec: [22, 32],
    text: "Heavy, slightly sloppy strokes. Still on beat. Spent energy." },

  /* ---- DROOL (10) ---- */
  { id: "drool_string", type: "timed", fetishId: 10, bpm: 0, sec: [10, 16],
    text: "Let a spit string form to your chin. Don't wipe yet. Stare." },
  { id: "drool_fingers", type: "timed", fetishId: 10, bpm: 0, sec: [10, 14],
    text: "Spit on your fingers. Rub them together. Look at the wetness, then the screen." },
  { id: "drool_stroke", type: "stroke", fetishId: 10, bpm: 58, sec: [20, 30],
    text: "Wet mouth. Stroke. If spit runs, leave it." },

  /* ---- PANTIES / WORN (11, 18) ---- */
  { id: "waist_snap", type: "timed", fetishId: 11, bpm: 0, sec: [8, 12],
    text: "Snap your waistband once against skin. Feel the sting. Stare." },
  { id: "waist_press", type: "timed", fetishId: 11, bpm: 0, sec: [12, 18],
    text: "Press two fingers into the waistband dig. Hold. Watch the fabric on screen." },
  { id: "waist_stroke", type: "stroke", fetishId: 11, bpm: 64, sec: [20, 30],
    text: "Stroke with your free hand near the waistband edge—no slipping fully in yet." },
  { id: "worn_sniff", type: "timed", fetishId: 18, bpm: 0, sec: [8, 12],
    text: "Sniff a worn cloth item once. Then eyes on the used look on screen." },
  { id: "worn_wrinkle", type: "timed", fetishId: 18, bpm: 0, sec: [10, 16],
    text: "Mess up your clothes on purpose. Wrinkles. Then still. Stare." },

  /* ---- ASS (12) ---- */
  { id: "ass_clench", type: "timed", fetishId: 12, bpm: 0, sec: [12, 18],
    text: "Clench twenty times. Count. Eyes on the ass focus." },
  { id: "ass_sit_hands", type: "timed", fetishId: 12, bpm: 0, sec: [14, 22],
    text: "Sit on your hands palms up. Weight and heat. Stare." },
  { id: "ass_stroke", type: "stroke", fetishId: 12, bpm: 58, sec: [20, 30],
    text: "Stroke while clenching on every other beat." },

  /* ---- CHUBBY FOLDS (13) ---- */
  { id: "fold_hold", type: "timed", fetishId: 13, bpm: 0, sec: [12, 18],
    text: "Grab a soft fold. Hold. Stare into the softest part of the image." },
  { id: "fold_stroke", type: "stroke", fetishId: 13, bpm: 52, sec: [22, 32],
    text: "One hand in a soft fold, one stroking slow and heavy." },

  /* ---- STOCKINGS (14) ---- */
  { id: "stocking_smooth", type: "timed", fetishId: 14, bpm: 0, sec: [12, 18],
    text: "Run hands up your calves as if smoothing sheer fabric." },
  { id: "stocking_point", type: "timed", fetishId: 14, bpm: 0, sec: [10, 16],
    text: "Point and flex your feet fifteen times. Watch the legs on screen." },
  { id: "stocking_stroke", type: "stroke", fetishId: 14, bpm: 60, sec: [20, 30],
    text: "Stroke with long silky pulls—match the idea of nylon." },

  /* ---- CHEST (16) ---- */
  { id: "chest_hug", type: "timed", fetishId: 16, bpm: 0, sec: [12, 18],
    text: "Hug yourself across the chest. Pressure. Stare." },
  { id: "chest_stroke", type: "stroke", fetishId: 16, bpm: 56, sec: [20, 30],
    text: "Stroke while your other arm presses into your chest on the downbeats." },

  /* ---- FACIAL MESS (19) ---- */
  { id: "facial_streak", type: "timed", fetishId: 19, bpm: 0, sec: [12, 20],
    text: "Draw a spit streak on your cheek. Leave it. Stare at the mess on screen." },
  { id: "facial_stroke", type: "stroke", fetishId: 19, bpm: 64, sec: [18, 28],
    text: "Stroke with the streak still on your face. Don't wipe." },

  /* ---- PUBLIC (20) ---- */
  { id: "public_listen", type: "timed", fetishId: 20, bpm: 0, sec: [12, 18],
    text: "One ear open to the room. Risk awareness. Hands off. Stare." },
  { id: "public_stroke", type: "stroke", fetishId: 20, bpm: 70, sec: [16, 24],
    text: "Quiet strokes. Ready to stop instantly. Paranoid pace." },
  { id: "public_whisper", type: "timed", fetishId: 20, bpm: 0, sec: [8, 12],
    text: "Whisper: someone could see. Then silence." },

  /* ---- BONDAGE (21) ---- */
  { id: "bond_cross", type: "timed", fetishId: 21, bpm: 0, sec: [14, 22],
    text: "Wrists crossed in front or behind. Hold. No cock." },
  { id: "bond_stroke_permit", type: "stroke", fetishId: 21, bpm: 50, sec: [20, 30],
    text: "Stroke only on the beat—as if each stroke needs permission." },
  { id: "bond_pin", type: "timed", fetishId: 21, bpm: 0, sec: [12, 18],
    text: "Kneel on your hands or pin them under your legs. Stare." },

  /* ---- COLLAR / PET (22) ---- */
  { id: "pet_kneel", type: "timed", fetishId: 22, bpm: 0, sec: [14, 24],
    text: "Kneel. Hands on thighs. Look up at the screen." },
  { id: "pet_collar_finger", type: "timed", fetishId: 22, bpm: 0, sec: [10, 16],
    text: "Finger at your throat like a collar ring. Hold. Stare." },
  { id: "pet_stroke", type: "stroke", fetishId: 22, bpm: 58, sec: [20, 30],
    text: "Kneeling if you can. Stroke on the beat for Handler." },
  { id: "pet_crawl", type: "timed", fetishId: 22, bpm: 0, sec: [10, 16],
    text: "Crawl three steps if space allows. Then kneel and stare." },

  /* ---- TENTACLES (25) ---- */
  { id: "tent_wrap", type: "timed", fetishId: 25, bpm: 0, sec: [14, 22],
    text: "Wrap a scarf or cable loosely around one forearm. Feel stuck." },
  { id: "tent_stroke", type: "stroke", fetishId: 25, bpm: 62, sec: [20, 30],
    text: "Stroke while the wrap drags on your arm—imaginary coils." },

  /* ---- INFLATION (26) ---- */
  { id: "infl_poke", type: "timed", fetishId: 26, bpm: 0, sec: [12, 18],
    text: "Poke your stomach. Hold. Imagine fullness. Stare." },
  { id: "infl_cheeks", type: "timed", fetishId: 26, bpm: 0, sec: [8, 12],
    text: "Inflate your cheeks. Hold. Eyes on the swollen form on screen." },
  { id: "infl_stroke", type: "stroke", fetishId: 26, bpm: 48, sec: [22, 32],
    text: "Slow heavy strokes. Palm on belly. Fullness fantasy." },

  /* ---- MONSTER (27) ---- */
  { id: "mon_growl", type: "timed", fetishId: 27, bpm: 0, sec: [8, 12],
    text: "One non-human sound. Then silence. Stare at the least human detail." },
  { id: "mon_noblink", type: "timed", fetishId: 27, bpm: 0, sec: [10, 16],
    text: "No blinking until your eyes water. Then soft blinks. Hands off." },
  { id: "mon_stroke", type: "stroke", fetishId: 27, bpm: 55, sec: [20, 30],
    text: "Stroke while staring at the most alien part of the image." },

  /* ---- INSERTION ART (28) ---- */
  { id: "ins_pin_hand", type: "timed", fetishId: 28, bpm: 0, sec: [12, 18],
    text: "Free hand flat on the desk. Pinned. Only eyes work." },
  { id: "ins_stroke", type: "stroke", fetishId: 28, bpm: 44, sec: [24, 34],
    text: "Very slow deep-pace strokes. Mind on depth. Don't rush the impossible." },
  { id: "ins_thighs", type: "timed", fetishId: 28, bpm: 0, sec: [12, 18],
    text: "Thighs pressed as resistance. Hands off. Stare." },

  /* ---- GROUP (29) ---- */
  { id: "group_markers", type: "timed", fetishId: 29, bpm: 0, sec: [12, 18],
    text: "Three objects around you as people. Face each once. Then the screen." },
  { id: "group_stroke", type: "stroke", fetishId: 29, bpm: 72, sec: [18, 28],
    text: "Stroke like you're keeping up with more than one gaze. Steady, watched." },
  { id: "group_whisper", type: "timed", fetishId: 29, bpm: 0, sec: [8, 12],
    text: "Whisper: all of you. Then kneel in the center if you set markers." },

  /* ---- HYPNOSIS (30) ---- */
  { id: "hyp_sway", type: "timed", fetishId: 30, bpm: 0, sec: [14, 22],
    text: "Sway in a slow circle ten times. Then freeze and stare." },
  { id: "hyp_finger", type: "timed", fetishId: 30, bpm: 0, sec: [12, 18],
    text: "Follow your finger in a circle, then snap eyes to the screen." },
  { id: "hyp_stroke", type: "stroke", fetishId: 30, bpm: 60, sec: [22, 32],
    text: "Stroke only on the beat. The rhythm is the induction. Empty head." },
  { id: "hyp_deeper", type: "timed", fetishId: 30, bpm: 0, sec: [10, 14],
    text: "Whisper deeper three times. Hands off. Fall into the image." }
];

const METER_LABELS = [
  { max: 10, text: "Still clean…" }, { max: 25, text: "Getting stained…" },
  { max: 45, text: "Properly marked…" }, { max: 65, text: "Mind getting fucked…" },
  { max: 85, text: "Deeply corrupted…" }, { max: 100, text: "Completely broken toy" }
];

function defaultState() {
  return {
    corruption: 0, activeFetish: null, currentStage: 1, fails: 0,
    customFetishes: [], freeMode: false, favorites: [], blacklist: [],
    imageMemory: {}, journal: [], achievements: {},
    streak: { count: 0, best: 0, lastDay: "" }, lastActive: Date.now(), resume: null
  };
}

let activeSlot = 0;
let state = defaultState();
let settings = {
  personaId: "mistress", tts: true, metronome: true, silenceTrials: true,
  sfx: true, ambient: false, showMedia: true, blur: true, volume: 0.45,
  timerScale: 1, intensity: 1, r34UserId: "6721033", r34ApiKey: "", playlist: []
};

let currentTimer = null, bpmTickTimer = null, fluidInstance = null;
let silenceThisPhase = false, joiAbort = false;
const mediaMemory = { imageUrl: "", videoUrl: "", mode: "image" };
let audioCtx = null, ambientNodes = null;

function $(id) { return document.getElementById(id); }
function slotKey(n) { return "corruptionJOI_slot" + n; }
function persona() { return PERSONAS.find(p => p.id === settings.personaId) || PERSONAS[0]; }
function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function randInt(a, b) { return a + Math.floor(Math.random() * (b - a + 1)); }
function scaleTime(s) { return Math.max(5, Math.round(s * (settings.timerScale || 1))); }

function tasksForFetish(fetish) {
  const id = fetish.id;
  return TASKS.filter(t => t.fetishId == null || t.fetishId === id);
}
function pickTask(fetish, type, usedIds) {
  let pool = tasksForFetish(fetish).filter(t => t.type === type && !usedIds.has(t.id));
  if (!pool.length) pool = tasksForFetish(fetish).filter(t => t.type === type);
  if (!pool.length) pool = TASKS.filter(t => t.type === type && t.fetishId == null);
  const t = pick(pool);
  usedIds.add(t.id);
  return t;
}
function taskToStep(task, p) {
  const secRange = task.sec || [15, 25];
  let sec = scaleTime(randInt(secRange[0], secRange[1]));
  sec = Math.round(sec * (settings.intensity || 1));
  let bpm = task.bpm || 0;
  if (task.type === "stroke" && bpm) {
    // slight randomize BPM ±8
    bpm = Math.max(32, Math.min(140, bpm + randInt(-8, 8)));
    bpm = Math.round(bpm * (0.9 + (settings.intensity || 1) * 0.1));
  }
  const prefix = task.type === "stroke"
    ? pick(p.lines.slow.concat(p.lines.faster))
    : pick(p.lines.stop.concat(p.lines.praise));
  const say = prefix + " " + task.text + (bpm ? " " + bpm + " BPM." : " Timer only. No stroking.");
  return {
    say,
    bpm: task.type === "stroke" ? bpm : 0,
    sec,
    action: task.type === "stroke" ? "stroke" : "timed",
    taskId: task.id
  };
}

/** Build a randomized JOI: mix stroke + timed + fetish-specific, scale with stage */
function buildJOI(fetish, stage) {
  const p = persona();
  const used = new Set();
  const steps = [];
  const hook = fetish.hook || fetish.short;

  steps.push({
    say: p.greet + " Focus: " + hook + ". " + (fetish.physical || ""),
    bpm: 0, sec: 0, wait: "tap", action: "intro"
  });

  // Stage scales number of blocks
  const strokeCount = Math.min(2 + stage, 6);
  const timedCount = Math.min(1 + Math.floor(stage / 2), 4);

  // Always try to include at least one fetish-specific if available
  const specific = tasksForFetish(fetish).filter(t => t.fetishId === fetish.id);
  if (specific.length) {
    steps.push(taskToStep(pick(specific), p));
    used.add(steps[steps.length - 1].taskId);
  }

  // Interleave stroke and timed
  for (let i = 0; i < strokeCount; i++) {
    steps.push(taskToStep(pickTask(fetish, "stroke", used), p));
    if (i < timedCount) steps.push(taskToStep(pickTask(fetish, "timed", used), p));
  }

  // Optional silence-flavored hands-off
  if (stage >= 2) {
    steps.push(taskToStep(pickTask(fetish, "timed", used), p));
  }

  // Edge sequence
  steps.push({
    say: pick(p.lines.edge) + " Stroke up to the edge on " + (50 + stage * 6) + " BPM. Freeze when you're there.",
    bpm: 50 + stage * 6, sec: 0, wait: "edge", action: "edge"
  });
  steps.push({
    say: "Hold. Eyes on " + hook + ". Do not finish. Breathe.",
    bpm: 44, sec: scaleTime(10 + stage * 2), action: "hold"
  });

  // Final pure
  steps.push({
    say: pick(p.lines.stop) + " Pure stare. Hands off. Only " + hook + ".",
    bpm: 0, sec: scaleTime(18 + stage * 10), action: "pure"
  });

  steps.push({
    say: pick(p.lines.praise) + " Rate your headspace.",
    bpm: 0, sec: 0, wait: "rate", action: "rate"
  });

  return steps;
}

function chatReply(userText) {
  const p = persona();
  const t = userText.toLowerCase();
  if (/help|what|how/.test(t)) return "Follow the line and BPM. Type slower, faster, edge, stop, please, harder.";
  if (/slow|soft/.test(t)) return pick(p.lines.slow);
  if (/fast|hard/.test(t)) return pick(p.lines.faster);
  if (/edge|close|almost/.test(t)) return pick(p.lines.edge);
  if (/stop|wait|pause/.test(t)) return pick(p.lines.stop);
  if (/please|need|want/.test(t)) return pick(p.lines.degrade) + " Noted, " + p.address + ".";
  if (/good|thank|yes/.test(t)) return pick(p.lines.praise);
  return pick([pick(p.lines.degrade), pick(p.lines.praise) + " Continue.", "Keep the beat, " + p.address + ".", "Eyes on the trigger."]);
}

/* ---- persistence / audio / media / UI: same architecture as before ---- */
function loadSettings() {
  try {
    const s = localStorage.getItem("corruptionJOI_settings");
    if (s) settings = { ...settings, ...JSON.parse(s) };
  } catch (e) {}
  const slot = parseInt(localStorage.getItem("corruptionJOI_activeSlot") || "0", 10);
  loadSlot(isNaN(slot) ? 0 : slot);
}
function loadSlot(n) {
  activeSlot = n;
  localStorage.setItem("corruptionJOI_activeSlot", String(n));
  try {
    const raw = localStorage.getItem(slotKey(n));
    state = raw ? { ...defaultState(), ...JSON.parse(raw) } : defaultState();
  } catch (e) { state = defaultState(); }
  applyDecay(); updateMeter(); updateStreakBar();
}
function saveAll() {
  state.lastActive = Date.now();
  localStorage.setItem(slotKey(activeSlot), JSON.stringify(state));
  localStorage.setItem("corruptionJOI_settings", JSON.stringify(settings));
  updateMeter(); updateStreakBar();
}
function applyDecay() {
  const days = (Date.now() - (state.lastActive || Date.now())) / 86400000;
  if (days >= 3 && state.corruption > 0) {
    const loss = Math.min(state.corruption, Math.floor(days) * 3);
    state.corruption = Math.max(0, state.corruption - loss);
    state._decayMsg = "Decay −" + loss + "% after " + Math.floor(days) + " idle days.";
  }
}
function dayString() {
  const d = new Date();
  return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
}
function registerSessionDay() {
  const today = dayString();
  if (state.streak.lastDay === today) return;
  const y = new Date(); y.setDate(y.getDate() - 1);
  const yStr = y.getFullYear() + "-" + String(y.getMonth() + 1).padStart(2, "0") + "-" + String(y.getDate()).padStart(2, "0");
  state.streak.count = state.streak.lastDay === yStr ? state.streak.count + 1 : 1;
  state.streak.lastDay = today;
  state.streak.best = Math.max(state.streak.best || 0, state.streak.count);
}
function updateStreakBar() {
  const el = $("streakBar");
  if (!el) return;
  if (!(state.streak.count || state.streak.best)) { el.classList.add("hidden"); return; }
  el.classList.remove("hidden");
  el.textContent = "Streak " + (state.streak.count || 0) + " · Best " + (state.streak.best || 0) + " · Slot " + (activeSlot + 1);
}
function updateMeter() {
  if (!$("meterFill")) return;
  $("meterFill").style.width = (state.corruption || 0) + "%";
  $("meterPercent").textContent = (state.corruption || 0) + "%";
  const lab = METER_LABELS.find(l => state.corruption <= l.max) || METER_LABELS[METER_LABELS.length - 1];
  $("meterLabel").textContent = lab.text;
  $("statusLine").textContent = state.activeFetish
    ? persona().name + " · " + state.activeFetish.short + " · Stage " + state.currentStage + "/6"
    : persona().name + " · idle · Slot " + (activeSlot + 1);
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
function vol() { return Math.max(0, Math.min(1, settings.volume ?? 0.45)); }
function playTone(freq, dur, type, gMul) {
  if (!settings.sfx) return;
  const ctx = ensureAudio(); if (!ctx) return;
  const t = ctx.currentTime, osc = ctx.createOscillator(), g = ctx.createGain();
  osc.type = type || "sine"; osc.frequency.value = freq;
  const peak = vol() * (gMul ?? 0.2);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(Math.max(peak, 0.0002), t + 0.01);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  osc.connect(g); g.connect(ctx.destination); osc.start(t); osc.stop(t + dur + 0.02);
}
function sfxDone() { playTone(523, 0.12, "sine", 0.2); setTimeout(() => playTone(784, 0.18, "sine", 0.16), 120); }
function sfxPass() { playTone(600, 0.1, "sine", 0.15); setTimeout(() => playTone(900, 0.2, "sine", 0.18), 90); }
function sfxFail() { playTone(200, 0.25, "sawtooth", 0.12); }
function metroClick(accent) {
  if (!settings.metronome || silenceThisPhase) return;
  const ctx = ensureAudio(); if (!ctx) return;
  const t = ctx.currentTime, osc = ctx.createOscillator(), g = ctx.createGain();
  osc.type = "square"; osc.frequency.value = accent ? 1400 : 900;
  const peak = vol() * (accent ? 0.14 : 0.08);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(peak, t + 0.005);
  g.gain.exponentialRampToValueAtTime(0.0001, t + 0.05);
  osc.connect(g); g.connect(ctx.destination); osc.start(t); osc.stop(t + 0.06);
  const el = $("bpmValue");
  if (el) { el.classList.remove("bpm-pulse"); void el.offsetWidth; el.classList.add("bpm-pulse"); }
}
function stopBpm() { if (bpmTickTimer) { clearInterval(bpmTickTimer); bpmTickTimer = null; } }
function startBpm(bpm) {
  stopBpm();
  if (!settings.metronome || silenceThisPhase || !bpm) return;
  let beat = 0;
  metroClick(true);
  bpmTickTimer = setInterval(() => { beat++; metroClick(beat % 4 === 0); }, 60000 / bpm);
}
function startAmbient() {
  stopAmbient();
  if (!settings.ambient) return;
  const ctx = ensureAudio(); if (!ctx) return;
  const o1 = ctx.createOscillator(), o2 = ctx.createOscillator(), g = ctx.createGain(), f = ctx.createBiquadFilter();
  o1.type = "sine"; o2.type = "sine"; o1.frequency.value = 55; o2.frequency.value = 82.5;
  f.type = "lowpass"; f.frequency.value = 180; g.gain.value = vol() * 0.03;
  o1.connect(f); o2.connect(f); f.connect(g); g.connect(ctx.destination); o1.start(); o2.start();
  ambientNodes = { o1, o2 };
}
function stopAmbient() {
  if (!ambientNodes) return;
  try { ambientNodes.o1.stop(); ambientNodes.o2.stop(); } catch (e) {}
  ambientNodes = null;
}
function speak(text) {
  return new Promise((resolve) => {
    if (!settings.tts || !window.speechSynthesis) { resolve(); return; }
    try {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(String(text));
      const p = persona();
      u.rate = p.rate; u.pitch = p.pitch; u.volume = vol();
      u.onend = () => resolve();
      u.onerror = () => resolve();
      window.speechSynthesis.speak(u);
    } catch (e) { resolve(); }
  });
}
function stopSpeak() { try { window.speechSynthesis && window.speechSynthesis.cancel(); } catch (e) {} }

function fetishToTags(f) {
  return ((f.search || f.short || "1girl").toLowerCase().match(/[\w+_-]+/) || ["1girl"])[0];
}
function rememberImage(f, url) {
  if (!f || !url) return;
  const id = f.id;
  if (!state.imageMemory[id]) state.imageMemory[id] = [];
  state.imageMemory[id] = [url, ...state.imageMemory[id].filter(u => u !== url)].slice(0, 8);
  saveAll();
}
async function grabRule34(fetish, wantVideo) {
  const userId = (settings.r34UserId || "").trim();
  const apiKey = (settings.r34ApiKey || "").trim();
  if (!userId || !apiKey) throw new Error("Set Rule34 API in ⚙");
  const tags = fetishToTags(fetish) + (wantVideo ? " video" : "");
  const url = "https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&json=1&limit=40&pid=" +
    Math.floor(Math.random() * 15) + "&tags=" + encodeURIComponent(tags) +
    "&user_id=" + encodeURIComponent(userId) + "&api_key=" + encodeURIComponent(apiKey);
  const data = JSON.parse(await (await fetch(url)).text());
  if (!Array.isArray(data) || !data.length) throw new Error("No results");
  if (wantVideo) {
    const pool = data.map(p => p.file_url).filter(u => u && /\.(mp4|webm)(\?|$)/i.test(u));
    if (!pool.length) throw new Error("No video");
    return pick(pool);
  }
  const pool = data.map(p => p.sample_url || p.file_url).filter(u => u && /\.(jpg|jpeg|png|gif|webp)(\?|$)/i.test(u));
  if (!pool.length) throw new Error("No images");
  return pick(pool);
}
function youtubeId(url) {
  const m = String(url || "").match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([A-Za-z0-9_-]{6,})/);
  return m ? m[1] : null;
}
function destroyFluid() {
  if (fluidInstance && fluidInstance.destroy) try { fluidInstance.destroy(); } catch (e) {}
  fluidInstance = null;
}
function createMediaArea(fetish, reveal) {
  if (!settings.showMedia) return document.createElement("div");
  const wrap = document.createElement("div"); wrap.className = "media-area";
  const tabs = document.createElement("div"); tabs.className = "media-tabs";
  const imgTab = document.createElement("button"); imgTab.type = "button"; imgTab.textContent = "Image";
  const vidTab = document.createElement("button"); vidTab.type = "button"; vidTab.textContent = "Video";
  tabs.append(imgTab, vidTab);
  const stageEl = document.createElement("div");
  const controls = document.createElement("div"); controls.className = "media-controls";
  const row = document.createElement("div"); row.className = "row";
  const grabBtn = document.createElement("button"); grabBtn.type = "button"; grabBtn.textContent = "Grab";
  const memBtn = document.createElement("button"); memBtn.type = "button"; memBtn.textContent = "Memory";
  const plBtn = document.createElement("button"); plBtn.type = "button"; plBtn.textContent = "Playlist";
  row.append(grabBtn, memBtn, plBtn);
  const status = document.createElement("p"); status.className = "media-hint"; status.textContent = "Tag: " + fetishToTags(fetish);
  controls.append(row, status);
  function render() {
    destroyFluid(); stageEl.innerHTML = "";
    if (mediaMemory.mode === "image" && mediaMemory.imageUrl) {
      const img = document.createElement("img");
      img.src = mediaMemory.imageUrl; img.referrerPolicy = "no-referrer";
      if (settings.blur && !reveal) img.classList.add("blurred");
      if (reveal) img.classList.add("blurred", "reveal");
      stageEl.appendChild(img);
    } else if (mediaMemory.videoUrl) {
      const yt = youtubeId(mediaMemory.videoUrl);
      if (yt) {
        const ifr = document.createElement("iframe");
        ifr.src = "https://www.youtube.com/embed/" + yt + "?rel=0"; ifr.allowFullscreen = true;
        stageEl.appendChild(ifr);
      } else {
        const holder = document.createElement("div"); holder.className = "fluid-player-wrap";
        const id = "v" + Date.now();
        const v = document.createElement("video"); v.id = id; v.playsInline = true;
        const s = document.createElement("source"); s.src = mediaMemory.videoUrl; s.type = "video/mp4";
        v.appendChild(s); holder.appendChild(v); stageEl.appendChild(holder);
        requestAnimationFrame(() => {
          if (typeof fluidPlayer === "function") {
            try {
              fluidInstance = fluidPlayer(id, {
                layoutControls: { autoPlay: false, mute: true, fillToContainer: true, allowDownload: false },
                vastOptions: { adList: [] }
              });
            } catch (e) { v.controls = true; }
          } else v.controls = true;
        });
      }
    }
  }
  function setMode(m) {
    mediaMemory.mode = m;
    imgTab.classList.toggle("active", m === "image");
    vidTab.classList.toggle("active", m === "video");
    render();
  }
  grabBtn.onclick = async () => {
    grabBtn.disabled = true; status.textContent = "…";
    try {
      if (mediaMemory.mode === "video") mediaMemory.videoUrl = await grabRule34(fetish, true);
      else { mediaMemory.imageUrl = await grabRule34(fetish, false); rememberImage(fetish, mediaMemory.imageUrl); }
      render(); status.textContent = "OK";
    } catch (e) { status.textContent = e.message || String(e); }
    finally { grabBtn.disabled = false; }
  };
  memBtn.onclick = () => {
    const mem = state.imageMemory[fetish.id] || [];
    if (!mem.length) { status.textContent = "Empty memory"; return; }
    mediaMemory.imageUrl = pick(mem); setMode("image");
  };
  plBtn.onclick = () => {
    const list = settings.playlist || [];
    if (!list.length) { status.textContent = "No playlist"; return; }
    const u = pick(list);
    if (/\.(mp4|webm)/i.test(u) || youtubeId(u)) { mediaMemory.videoUrl = u; setMode("video"); }
    else { mediaMemory.imageUrl = u; setMode("image"); }
  };
  imgTab.onclick = () => setMode("image");
  vidTab.onclick = () => setMode("video");
  wrap.append(tabs, stageEl, controls);
  setMode(mediaMemory.mode || "image");
  return wrap;
}
function attachMedia(cardEl, fetish, reveal) {
  const m = createMediaArea(fetish, reveal);
  if (m.classList.contains("media-area")) { cardEl.classList.add("has-media"); cardEl.appendChild(m); }
}

const screen = $("screen");
function clearScreen() {
  joiAbort = true;
  if (currentTimer) { clearInterval(currentTimer); currentTimer = null; }
  stopBpm(); stopSpeak(); destroyFluid(); silenceThisPhase = false;
  screen.innerHTML = "";
}
function card(html) {
  const d = document.createElement("div"); d.className = "card"; d.innerHTML = html; screen.appendChild(d); return d;
}
function btn(text, fn, secondary) {
  const b = document.createElement("button"); b.type = "button"; b.textContent = text;
  if (secondary) b.classList.add("secondary");
  b.onclick = () => { ensureAudio(); if (settings.ambient && !ambientNodes) startAmbient(); fn(); };
  return b;
}
function allFetishes() {
  return [...FETISHES, ...(state.customFetishes || [])].filter(f => !(state.blacklist || []).includes(f.id));
}

function start() {
  loadSettings();
  fillPersonaSelect();
  if (state.activeFetish) showContinue();
  else showWelcome();
  if (state._decayMsg) { setTimeout(() => alert(state._decayMsg), 200); state._decayMsg = null; }
}
function fillPersonaSelect() {
  const sel = $("setPersona");
  if (!sel) return;
  sel.innerHTML = "";
  PERSONAS.forEach(p => {
    const o = document.createElement("option");
    o.value = p.id; o.textContent = p.name;
    sel.appendChild(o);
  });
  sel.value = settings.personaId;
}

function showWelcome() {
  stopAmbient(); clearScreen(); joiAbort = false;
  const p = persona();
  card(`<h1>Corruption Protocol</h1><span class="persona-tag">${p.name}</span>
    <p class="big-text">Randomized JOI tasks · BPM synced · fetish-specific rituals</p>
    <p>${p.greet}</p>`);
  const row = document.createElement("div"); row.className = "btn-row";
  row.appendChild(btn("Start JOI (random)", () => { state.freeMode = false; beginRandom(); }));
  row.appendChild(btn("Pick fetish → Stage 6", showPick, true));
  row.appendChild(btn("Chat lounge", openChatLounge, true));
  row.appendChild(btn("Journal & favorites", showJournal, true));
  screen.appendChild(row);
}
function showPick() {
  clearScreen();
  const c = card(`<h2>Stage 6 JOI</h2>`);
  const sel = document.createElement("select");
  sel.style.cssText = "width:100%;padding:12px;margin:12px 0;background:#2a1f22;color:#fff;border-radius:8px;";
  allFetishes().forEach(f => {
    const o = document.createElement("option"); o.value = f.id; o.textContent = f.name; sel.appendChild(o);
  });
  c.appendChild(sel);
  const row = document.createElement("div"); row.className = "btn-row";
  row.appendChild(btn("Start", () => {
    const f = allFetishes().find(x => String(x.id) === String(sel.value));
    state.activeFetish = f; state.currentStage = 6; state.freeMode = true; state.fails = 0;
    mediaMemory.imageUrl = ""; saveAll(); runJOISession(6);
  }));
  row.appendChild(btn("Back", showWelcome, true));
  screen.appendChild(row);
}
function beginRandom() {
  const pool = allFetishes();
  const fav = pool.filter(f => (state.favorites || []).includes(f.id));
  state.activeFetish = pick(fav.length && Math.random() < 0.4 ? fav : pool);
  state.currentStage = 1; state.fails = 0; state.freeMode = false;
  mediaMemory.imageUrl = ""; saveAll(); runJOISession(1);
}
function showContinue() {
  clearScreen();
  card(`<h2>Active JOI</h2><div class="fetish-name">${state.activeFetish.name}</div>
    <p>Stage ${state.currentStage}/6 · ${persona().name}</p>`);
  const row = document.createElement("div"); row.className = "btn-row";
  row.appendChild(btn("Continue", () => runJOISession(state.currentStage)));
  row.appendChild(btn("Abandon", () => {
    state.activeFetish = null; state.currentStage = 1; saveAll(); showWelcome();
  }, true));
  screen.appendChild(row);
}
function openChatLounge() {
  clearScreen();
  const p = persona();
  const c = card(`<h2>Chat — ${p.name}</h2>`);
  const box = document.createElement("div"); box.className = "chat-box"; box.id = "chatBox";
  c.appendChild(box);
  pushChat("bot", p.greet);
  const row = document.createElement("div"); row.className = "chat-input-row";
  const input = document.createElement("input"); input.placeholder = "Type…";
  const send = document.createElement("button"); send.type = "button"; send.textContent = "Send";
  const go = async () => {
    const t = input.value.trim(); if (!t) return;
    input.value = ""; pushChat("user", t);
    const r = chatReply(t); pushChat("bot", r); await speak(r);
  };
  send.onclick = go; input.onkeydown = e => { if (e.key === "Enter") go(); };
  row.append(input, send); c.appendChild(row);
  const br = document.createElement("div"); br.className = "btn-row";
  br.appendChild(btn("Back", showWelcome, true)); screen.appendChild(br);
}
function pushChat(who, text) {
  const box = $("chatBox"); if (!box) return;
  const m = document.createElement("div");
  m.className = "chat-msg " + who;
  m.textContent = (who === "bot" ? persona().name + ": " : "You: ") + text;
  box.appendChild(m); box.scrollTop = box.scrollHeight;
}

async function runJOISession(stage) {
  joiAbort = false;
  registerSessionDay();
  const fetish = state.activeFetish;
  const steps = buildJOI(fetish, stage);
  const p = persona();
  let i = 0;

  async function runStep() {
    if (joiAbort) return;
    if (i >= steps.length) return;
    const step = steps[i++];
    silenceThisPhase = settings.silenceTrials && step.action === "stroke" && Math.random() < 0.15;

    clearScreen();
    joiAbort = false;
    const sil = silenceThisPhase ? `<div class="silence-banner">SILENCE — keep pace without clicks</div>` : "";
    const kind = step.bpm ? `STROKE · ${step.bpm} BPM` : (step.action === "edge" ? "EDGE" : "TIMED · no stroke");
    const c = card(`
      <span class="persona-tag">${p.name}</span>
      <div class="step-progress">Stage ${stage}/6 · Step ${i}/${steps.length} · ${kind}</div>
      <div class="fetish-name">${fetish.name}</div>
      ${sil}
      <div class="joi-line" id="joiLine">${step.say}</div>
      <div class="bpm-wrap">
        <div class="bpm-label">${step.bpm ? "STROKE BPM" : "NO BPM"}</div>
        <div class="bpm-value" id="bpmValue">${step.bpm || "—"}</div>
        <div class="bpm-hint">${step.action || ""}</div>
      </div>
      <div class="timer" id="t">${step.sec || "—"}</div>
    `);
    attachMedia(c, fetish, step.action === "pure" || step.wait === "rate");

    const chatWrap = document.createElement("div");
    const box = document.createElement("div"); box.className = "chat-box"; box.id = "chatBox";
    chatWrap.appendChild(box);
    const crow = document.createElement("div"); crow.className = "chat-input-row";
    const input = document.createElement("input"); input.placeholder = "slower / faster / edge…";
    const send = document.createElement("button"); send.type = "button"; send.textContent = "Send";
    const go = async () => {
      const t = input.value.trim(); if (!t) return;
      input.value = ""; pushChat("user", t);
      const r = chatReply(t); pushChat("bot", r);
      if (r.length < 100) speak(r);
    };
    send.onclick = go; input.onkeydown = e => { if (e.key === "Enter") go(); };
    crow.append(input, send); chatWrap.appendChild(crow); c.appendChild(chatWrap);

    const controls = document.createElement("div"); controls.className = "btn-row";
    controls.appendChild(btn("Skip", () => { stopSpeak(); stopBpm(); if (currentTimer) clearInterval(currentTimer); runStep(); }, true));
    controls.appendChild(btn("Abort", () => { joiAbort = true; stopSpeak(); stopBpm(); showContinue(); }, true));
    screen.appendChild(controls);

    if (step.bpm) startBpm(step.bpm); else stopBpm();
    await speak(step.say);
    if (joiAbort) return;

    if (step.wait === "tap") {
      const row = document.createElement("div"); row.className = "btn-row";
      row.appendChild(btn("Ready", () => runStep()));
      screen.appendChild(row); return;
    }
    if (step.wait === "edge") {
      const row = document.createElement("div"); row.className = "btn-row";
      row.appendChild(btn("At the edge — holding", () => runStep()));
      screen.appendChild(row); return;
    }
    if (step.wait === "rate") {
      stopBpm();
      const row = document.createElement("div"); row.className = "rating-row";
      for (let n = 0; n <= 10; n++) {
        const b = document.createElement("button");
        b.type = "button"; b.className = "rating-btn"; b.textContent = n;
        b.onclick = () => finishStage(n, stage);
        row.appendChild(b);
      }
      screen.appendChild(row); return;
    }

    let left = step.sec || 10;
    const el = $("t");
    if (el) el.textContent = left;
    if (currentTimer) clearInterval(currentTimer);
    currentTimer = setInterval(() => {
      left--;
      if (el) el.textContent = left;
      if (left <= 0) {
        clearInterval(currentTimer); currentTimer = null;
        stopBpm(); sfxDone(); runStep();
      }
    }, 1000);
  }
  runStep();
}

function finishStage(rating, stage) {
  stopBpm(); stopSpeak();
  const fetish = state.activeFetish;
  state.journal = state.journal || [];
  state.journal.unshift({ date: dayString(), fetish: fetish.short, stage, rating, note: "" });
  state.journal = state.journal.slice(0, 40);
  if (rating >= 7) {
    sfxPass();
    const gain = 4 + stage;
    state.corruption = Math.min(100, state.corruption + gain);
    if (stage < 6) { state.currentStage = stage + 1; state.fails = Math.max(0, state.fails - 1); }
    else {
      state.activeFetish = null; state.currentStage = 1; state.fails = 0; state.freeMode = false;
      state.corruption = Math.min(100, state.corruption + 6);
    }
    saveAll();
    clearScreen();
    card(`<h2 style="color:var(--success)">Passed</h2><p class="big-text">${rating}/10 · +${gain}%</p>`);
  } else {
    sfxFail(); state.fails++; saveAll();
    clearScreen();
    card(`<h2 style="color:var(--danger)">Failed</h2><p class="big-text">${rating}/10</p>`);
  }
  card(`<h2>Aftercare</h2><p class="instruction soft">Water. Unclench. Meter waits.</p>`);
  const row = document.createElement("div"); row.className = "btn-row";
  row.appendChild(btn("Done", () => {
    stopAmbient();
    if (state.activeFetish) showContinue(); else showWelcome();
  }));
  screen.appendChild(row);
}

function showJournal() {
  clearScreen();
  const c = card(`<h2>Favorites · Blacklist</h2><p class="hint">Tap = fav · Shift+tap = ban</p>`);
  const chips = document.createElement("div"); chips.className = "chip-row";
  [...FETISHES, ...(state.customFetishes || [])].forEach(f => {
    const chip = document.createElement("span");
    chip.className = "chip" + ((state.favorites || []).includes(f.id) ? " on" : "");
    chip.textContent = f.short + ((state.blacklist || []).includes(f.id) ? " 🚫" : "");
    chip.onclick = (ev) => {
      if (ev.shiftKey) {
        state.blacklist = state.blacklist || [];
        state.blacklist = state.blacklist.includes(f.id) ? state.blacklist.filter(x => x !== f.id) : state.blacklist.concat(f.id);
      } else {
        state.favorites = state.favorites || [];
        state.favorites = state.favorites.includes(f.id) ? state.favorites.filter(x => x !== f.id) : state.favorites.concat(f.id);
      }
      saveAll(); showJournal();
    };
    chips.appendChild(chip);
  });
  c.appendChild(chips);
  const row = document.createElement("div"); row.className = "btn-row";
  row.appendChild(btn("Back", showWelcome, true));
  screen.appendChild(row);
}

$("settingsBtn").onclick = () => {
  $("settingsOverlay").classList.remove("hidden");
  fillPersonaSelect();
  $("setPersona").value = settings.personaId;
  $("setTts").checked = settings.tts !== false;
  $("setMetronome").checked = settings.metronome !== false;
  $("setSilence").checked = settings.silenceTrials !== false;
  $("setSfx").checked = settings.sfx !== false;
  $("setAmbient").checked = !!settings.ambient;
  $("setMedia").checked = settings.showMedia !== false;
  $("setBlur").checked = !!settings.blur;
  $("setVolume").value = String(Math.round((settings.volume ?? 0.45) * 100));
  $("setTimerScale").value = String(settings.timerScale || 1);
  $("setIntensity").value = String(settings.intensity || 1);
  $("setSlot").value = String(activeSlot);
  $("r34UserId").value = settings.r34UserId || "";
  $("r34ApiKey").value = settings.r34ApiKey || "";
  $("playlistArea").value = (settings.playlist || []).join("\n");
};
$("closeSettings").onclick = () => {
  settings.personaId = $("setPersona").value;
  settings.tts = $("setTts").checked;
  settings.metronome = $("setMetronome").checked;
  settings.silenceTrials = $("setSilence").checked;
  settings.sfx = $("setSfx").checked;
  settings.ambient = $("setAmbient").checked;
  settings.showMedia = $("setMedia").checked;
  settings.blur = $("setBlur").checked;
  settings.volume = parseInt($("setVolume").value, 10) / 100;
  settings.timerScale = parseFloat($("setTimerScale").value);
  settings.intensity = parseFloat($("setIntensity").value);
  settings.r34UserId = $("r34UserId").value.trim();
  settings.r34ApiKey = $("r34ApiKey").value.trim();
  const ns = parseInt($("setSlot").value, 10);
  localStorage.setItem("corruptionJOI_settings", JSON.stringify(settings));
  if (ns !== activeSlot) loadSlot(ns); else saveAll();
  $("settingsOverlay").classList.add("hidden");
  updateMeter();
};
$("savePlaylistBtn").onclick = () => {
  settings.playlist = ($("playlistArea").value || "").split(/\n/).map(s => s.trim()).filter(Boolean);
  localStorage.setItem("corruptionJOI_settings", JSON.stringify(settings));
  alert("Playlist saved");
};
$("addCustomBtn").onclick = () => {
  const name = $("customName").value.trim();
  const short = $("customShort").value.trim();
  const search = ($("customSearch").value.trim() || short).split(/\s+/)[0];
  if (!name || !short) return alert("Need name + short");
  state.customFetishes = state.customFetishes || [];
  state.customFetishes.push({ id: Date.now(), name, short, search, hook: short, physical: "focus on " + short });
  saveAll();
  $("customName").value = $("customShort").value = $("customSearch").value = "";
  alert("Added");
};
$("exportBtn").onclick = () => {
  const blob = new Blob([JSON.stringify({ state, settings, slot: activeSlot }, null, 2)], { type: "application/json" });
  const a = document.createElement("a"); a.href = URL.createObjectURL(blob);
  a.download = "joi-slot" + (activeSlot + 1) + ".json"; a.click();
};
$("importBtn").onclick = () => $("importFile").click();
$("importFile").onchange = (ev) => {
  const f = ev.target.files && ev.target.files[0]; if (!f) return;
  const r = new FileReader();
  r.onload = () => {
    try {
      const data = JSON.parse(r.result);
      if (data.state) state = { ...defaultState(), ...data.state };
      if (data.settings) settings = { ...settings, ...data.settings };
      saveAll(); showWelcome();
    } catch (e) { alert("Bad JSON"); }
  };
  r.readAsText(f);
};
$("resetBtn").onclick = () => {
  if (confirm("Wipe slot?")) { state = defaultState(); saveAll(); showWelcome(); }
};
$("focusBtn").onclick = () => document.body.classList.toggle("focus-mode");
document.addEventListener("keydown", (e) => {
  if (e.target && /input|textarea|select/i.test(e.target.tagName)) return;
  if (e.key === "s" || e.key === "S") $("settingsBtn").click();
  if (e.key === "f" || e.key === "F") $("focusBtn").click();
});

start();
