// The news of Tuesday 24 November 2026, as drawn on the map. Every item is checked against the sources listed in
// SOURCES.md; events from 23 Nov are kept only where they were still developing or first reported on 24 Nov.
// pin: [longitude, latitude] of the place the story happened; at: [x, y] of the card's top-left corner in pixels.
// Major stories get a large comment card; secondary ones a small card; the rest go in the "Also today" strip.

export const date = { weekday: 'TUESDAY', day: '24 NOVEMBER 2026' };

export const major = [
  {
    place: 'United States', where: 'Santa Clara', icon: '📈', tint: '#22c55e',
    title: 'Nvidia brings back Jensen Huang',
    text: 'Board reinstated the CEO on Monday after Trump pressed it; shares jumped 31%, adding nearly $1 trillion.',
    comment: 'Senate hearing set for Dec 3.',
    pin: [-121.95, 37.35], at: [14, 132],
  },
  {
    place: 'Estonia', where: 'Russian border', icon: '⚠️', tint: '#f59e0b',
    title: 'Russia warns Estonia of "open war"',
    text: 'Moscow says Tallinn aids Ukraine’s drone strikes. Estonia will shut its road crossings from Dec 1.',
    comment: 'NATO’s eastern flank on edge.',
    pin: [24.75, 59.44], at: [372, 86],
  },
  {
    place: 'Ukraine', where: 'Zaporizhzhia', icon: '💥', tint: '#ef4444',
    title: 'Night strike on Zaporizhzhia',
    text: 'A Russian glide bomb hits homes: 2 killed, 48 wounded, 4 of them children.',
    comment: 'UNICEF: 3+ child casualties a day.',
    pin: [35.14, 47.84], at: [598, 122],
  },
  {
    place: 'Libya', where: 'Benghazi', icon: '⚓', tint: '#0ea5e9',
    title: 'Ukraine hits Russian corvette off Libya',
    text: 'Kyiv says its drones sank the corvette Merkury at Benghazi; a cargo ship was also hit.',
    comment: 'Libya: no foreign ops authorised.',
    pin: [20.07, 32.12], at: [288, 352],
  },
  {
    place: 'Gaza', where: 'Gaza City', icon: '🏚️', tint: '#a855f7',
    title: 'Israel kills Hamas security chief',
    text: 'Naeem Abu Nahel killed in a Gaza City strike; 6 more Palestinians killed in other strikes.',
    comment: 'Oxfam: contamination signs in 99%.',
    pin: [34.45, 31.5], at: [640, 428],
  },
  {
    place: 'Yemen', where: 'Hodeidah', icon: '✈️', tint: '#dc2626',
    title: 'Houthis: Saudi strike kills 17',
    text: 'Houthis say a raid on a Hodeidah telecom site killed 17 workers; AFP could not verify it.',
    comment: 'UN: 364,000 displaced since Aug.',
    pin: [42.95, 14.8], at: [640, 588],
  },
  {
    place: 'United States', where: 'Langley, Virginia', icon: '🔓', tint: '#0f766e',
    title: 'Hackers breach a CIA system',
    text: 'An unclassified CIA system for open-source intelligence was hacked; no classified data involved.',
    comment: 'Who did it is still unclear.',
    pin: [-77.15, 38.95], at: [334, 512],
  },
  {
    place: 'China · Pakistan', where: 'Jiuquan launch site', icon: '🚀', tint: '#6366f1',
    title: 'First foreign astronaut for China',
    text: 'Shenzhou-24 is set to fly Pakistan’s Muhammad Zeeshan Ali to the Tiangong station.',
    comment: 'A first for Beijing and Islamabad.',
    pin: [100.3, 40.96], at: [814, 132],
  },
  {
    place: 'Mexico', where: 'Sinaloa', icon: '🚓', tint: '#64748b',
    title: 'Mexico to try "El Chapo Isidro"',
    text: 'Cartel boss held after a night of burning roadblocks; Mexico will try him despite a US request.',
    comment: '4 soldiers and 16 gunmen killed.',
    pin: [-108.47, 25.57], at: [14, 516],
  },
];

export const secondary = [
  { icon: '🗳️', place: 'US', text: 'Democrats reach at least 259 House seats', pin: [-77.0, 38.9], at: [150, 296] },
  { icon: '🏥', place: 'Cuba', text: 'WHO chief visits as health system strains', pin: [-82.4, 23.1], at: [118, 448] },
  { icon: '💣', place: 'Colombia', text: 'Drones hit Cúcuta police base; 3 hurt', pin: [-72.5, 7.9], at: [20, 680] },
  { icon: '🏛️', place: 'Brazil', text: 'Fiscal bill passes, 353-128', pin: [-47.9, -15.8], at: [300, 674] },
  { icon: '⛏️', place: 'DR Congo', text: 'Kolwezi residents sue Chinese-owned mine', pin: [25.47, -10.71], at: [470, 674] },
  { icon: '🛰️', place: 'S. Korea', text: 'Russian jets trigger Ulleung alert', pin: [130.9, 37.5], at: [856, 292] },
  { icon: '⚖️', place: 'Japan', text: 'To pay full 2027 ICC dues by year-end', pin: [139.7, 35.7], at: [856, 344] },
  { icon: '🚢', place: 'Malaysia', text: '6,803 Myanmar nationals to be sent back', pin: [101.7, 3.1], at: [856, 560] },
  { icon: '🔥', place: 'Indonesia', text: 'Factory fire: 26 dead, most near exit', pin: [106.15, -6.12], at: [856, 626] },
  { icon: '🤝', place: 'Australia', text: 'Readies Solomon Is. security treaty', pin: [149.13, -35.28], at: [856, 692] },
  { icon: '🛸', place: 'Poland', text: 'Russian drone briefly in its airspace', pin: [23.6, 51.15], at: [296, 298] },
];

export const others = [
  { icon: '🌧️', text: '<b>US</b> Thanksgiving storms threaten flights and coasts' },
  { icon: '📊', text: '<b>US</b> Consumer confidence jumps to 103.3, highest since Jan 2025' },
  { icon: '🧨', text: '<b>US</b> Court clears Army to detonate explosives in Iowa' },
  { icon: '🚫', text: '<b>Singapore</b> Megaspeed put on US export blacklist over chip diversion' },
  { icon: '💶', text: '<b>EU</b> Commission proposes 22nd Russia sanctions package' },
  { icon: '📉', text: '<b>Russia</b> Leaked data puts war dead near 700,000' },
  { icon: '🏛️', text: '<b>NATO</b> Rutte rejects rollback to 1997 borders' },
  { icon: '✍️', text: '<b>Armenia</b> Draft constitution drops Karabakh claim, easing peace' },
  { icon: '📢', text: '<b>Albania</b> Kushner resort land probed as Tirana protests go on' },
  { icon: '✈️', text: '<b>Bangladesh</b> Hasina says she will return from exile on 16 Dec' },
  { icon: '🏫', text: '<b>N. Korea</b> Kim Yo Jong threatens to shut Swiss office' },
  { icon: '🧾', text: '<b>Malaysia</b> Finance Ministry says GST “not suitable” for now' },
  { icon: '🦶', text: '<b>World</b> Landmine casualties hit five-year high: nearly 7,000' },
  { icon: '🌍', text: '<b>Ethiopia</b> Amnesty urges war-crimes probe into Alamata shelling' },
];
