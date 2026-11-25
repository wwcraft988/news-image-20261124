// The news of Tuesday 24 November 2026, as drawn on the map.
// pin: [longitude, latitude] of the place the story happened; at: [x, y] of the card's top-left corner in pixels.
// Major stories get a large comment card; secondary ones a small card; the rest go in the "Also today" strip.

export const date = { weekday: 'TUESDAY', day: '24 NOVEMBER 2026' };

export const major = [
  {
    place: 'United States', where: 'Santa Clara', icon: '📈', tint: '#22c55e',
    title: 'Nvidia brings back Jensen Huang',
    text: 'Board reinstates the CEO after Trump pressed for it. Shares jump ~30%, adding ~$1 trillion.',
    comment: 'Congress asks about Trump’s role.',
    pin: [-121.95, 37.35], at: [14, 132],
  },
  {
    place: 'Estonia', where: 'Russian border', icon: '⚠️', tint: '#f59e0b',
    title: 'Russia warns Estonia of "open war"',
    text: 'Moscow says Tallinn lets Ukraine strike from its soil. Estonia closes its land border.',
    comment: 'NATO’s eastern flank on edge.',
    pin: [24.75, 59.44], at: [372, 86],
  },
  {
    place: 'Ukraine', where: 'Zaporizhzhia', icon: '💥', tint: '#ef4444',
    title: 'Night strike on Zaporizhzhia',
    text: 'A Russian bomb hits homes: 2 killed, 40+ wounded, 4 of them children.',
    comment: 'UNICEF: ~3 children killed a day.',
    pin: [35.14, 47.84], at: [598, 122],
  },
  {
    place: 'Libya', where: 'Benghazi', icon: '⚓', tint: '#0ea5e9',
    title: 'Ukraine hits Russian ships off Libya',
    text: 'Kyiv says a Russian corvette sank at Benghazi; Kremlin warns of “painful consequences”.',
    comment: 'Libya protests the breach.',
    pin: [20.07, 32.12], at: [288, 352],
  },
  {
    place: 'Gaza & Lebanon', where: 'Gaza · south Lebanon', icon: '🏚️', tint: '#a855f7',
    title: 'Israeli strikes despite truces',
    text: 'Gaza: strike kills Hamas internal-security chief + 6. South Lebanon: air and artillery attacks.',
    comment: 'Oxfam: 99% of Gaza contaminated.',
    pin: [34.45, 31.45], at: [650, 428],
  },
  {
    place: 'Yemen', where: 'Hodeidah · Lahij', icon: '✈️', tint: '#dc2626',
    title: 'Houthis: Saudi raids kill 41',
    text: 'Strikes hit a telecom hub and buses in a single day, Houthi officials say.',
    comment: 'UN: 300,000+ displaced since July.',
    pin: [43.5, 14.8], at: [650, 588],
  },
  {
    place: 'Sudan', where: 'Khartoum', icon: '🛩️', tint: '#f97316',
    title: 'RSF drones strike Khartoum',
    text: 'Airport, a UN site and power stations hit; at least 4 dead as the grid nears collapse.',
    comment: 'The capital’s lights are going out.',
    pin: [32.53, 15.59], at: [334, 512],
  },
  {
    place: 'China · Pakistan', where: 'Jiuquan launch site', icon: '🚀', tint: '#6366f1',
    title: 'First foreign astronaut for China',
    text: 'Shenzhou-24 readies to fly Pakistan’s Zeeshan Ali to the Tiangong station.',
    comment: 'A first for Beijing and Islamabad.',
    pin: [100.3, 40.96], at: [814, 132],
  },
  {
    place: 'Mexico', where: 'Sinaloa', icon: '🚓', tint: '#64748b',
    title: 'Cartel boss arrest sparks clashes',
    text: '"El Chapo Isidro" held; burning roadblocks follow. Mexico refuses US extradition.',
    comment: 'He will be tried at home.',
    pin: [-107.4, 24.8], at: [14, 516],
  },
];

export const secondary = [
  { icon: '🗳️', place: 'US', text: 'Democrats secure 259 House seats', pin: [-77.0, 38.9], at: [150, 296] },
  { icon: '🏥', place: 'Cuba', text: 'WHO chief visits as health system strains', pin: [-82.4, 23.1], at: [118, 448] },
  { icon: '💣', place: 'Colombia', text: 'Drones hit Cúcuta police base', pin: [-72.5, 7.9], at: [20, 680] },
  { icon: '🏛️', place: 'Brazil', text: 'Fiscal bill passes 353 votes; overdue debt at record', pin: [-47.9, -15.8], at: [338, 674] },
  { icon: '🚑', place: 'UK', text: 'Manchester concert evacuated, 90 treated', pin: [-2.24, 53.48], at: [296, 246] },
  { icon: '⛏️', place: 'DR Congo', text: 'Suit says Chinese-owned mine poisoned town', pin: [25.47, -10.71], at: [512, 674] },
  { icon: '🛰️', place: 'S. Korea', text: 'Russian jets in air zone; Ulleung alert', pin: [130.9, 37.5], at: [868, 292] },
  { icon: '⚖️', place: 'Japan', text: 'Takaichi: full ICC dues paid early', pin: [139.7, 35.7], at: [868, 344] },
  { icon: '🚢', place: 'Malaysia', text: '6,803 Myanmar nationals to be sent back', pin: [101.7, 3.1], at: [868, 560] },
  { icon: '🤝', place: 'Australia', text: 'Security pact with Solomon Islands', pin: [159.95, -9.43], at: [858, 692] },
  { icon: '🛸', place: 'Poland', text: 'Russian drone enters Polish airspace', pin: [21.0, 52.2], at: [296, 298] },
];

export const others = [
  { icon: '🔐', text: '<b>US</b> Cyber breach reaches intelligence agencies, incl. a CIA system' },
  { icon: '🌧️', text: '<b>US</b> Thanksgiving storms threaten flights and coasts' },
  { icon: '📊', text: '<b>US</b> Consumer confidence up to 103.3 as fuel prices fall' },
  { icon: '🧨', text: '<b>US</b> Court clears Army to blow up 5 tons of explosives in Iowa' },
  { icon: '🚫', text: '<b>Singapore</b> Megaspeed blacklisted over Nvidia chips to China' },
  { icon: '💶', text: '<b>EU</b> 22nd Russia sanctions package proposed' },
  { icon: '📉', text: '<b>Russia</b> Leaked data put war dead above 700,000' },
  { icon: '🏛️', text: '<b>NATO</b> Rutte rejects Moscow’s demand to roll back enlargement' },
  { icon: '✍️', text: '<b>Armenia</b> Draft constitution paves way to Azerbaijan peace' },
  { icon: '📢', text: '<b>Albania</b> Tirana protests over Kushner-linked resort' },
  { icon: '✈️', text: '<b>Bangladesh</b> Sheikh Hasina to end exile in December' },
  { icon: '🔥', text: '<b>Indonesia</b> Factory fire victims died near the exit' },
  { icon: '🏫', text: '<b>N. Korea</b> Threatens to close Swiss office over sanctions' },
  { icon: '🧾', text: '<b>Malaysia</b> Government says GST “not suitable” for now' },
  { icon: '🦶', text: '<b>World</b> Landmine casualties hit a five-year high' },
  { icon: '🌍', text: '<b>Ethiopia</b> Amnesty urges probe into Tigray shelling' },
];
