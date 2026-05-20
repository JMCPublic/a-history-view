const civilizations = [
  {
    id: "england",
    name: "England",
    region: "Western Europe",
    sources: [
      ["Britannica", "https://www.britannica.com/place/England"],
      ["World History Encyclopedia", "https://www.worldhistory.org/England/"]
    ],
    periods: [
      {
        start: 1000,
        end: 1059,
        ruler: "Aethelred II, Cnut, Edward the Confessor",
        dynasty: "House of Wessex / North Sea Empire",
        government: "Kingdom",
        event: "England moves through Danish conquest, Cnut's North Sea rule, and a restored Anglo-Saxon monarchy.",
        why: "The kingdom is wealthy but politically exposed, with succession uncertainty and pressure from Scandinavia and Normandy.",
        drivers: [["Trade wealth", "positive"], ["Succession pressure", "negative"], ["North Sea politics", "mixed"]]
      },
      {
        start: 1060,
        end: 1099,
        ruler: "Harold II, then William I and William II",
        dynasty: "House of Godwin / Norman Dynasty",
        government: "Kingdom",
        event: "The Norman Conquest transforms England after the Battle of Hastings in 1066.",
        why: "A succession crisis opened the door to invasion, replacing the aristocracy and reshaping law, landholding, language, and royal power.",
        drivers: [["Succession crisis", "negative"], ["Military invasion", "negative"], ["Centralized monarchy", "positive"]]
      },
      {
        start: 1100,
        end: 1199,
        ruler: "Henry I, Stephen, Henry II, Richard I",
        dynasty: "Norman / Plantagenet",
        government: "Kingdom",
        event: "Civil war gives way to Plantagenet consolidation and expanding royal administration.",
        why: "Legal and financial institutions grow stronger, but continental possessions tie England into costly European rivalries.",
        drivers: [["Legal reform", "positive"], ["Civil conflict", "negative"], ["French territories", "mixed"]]
      },
      {
        start: 1200,
        end: 1299,
        ruler: "John, Henry III, Edward I",
        dynasty: "Plantagenet",
        government: "Kingdom",
        event: "Magna Carta limits royal authority in 1215, while Edward I expands campaigns in Wales and Scotland.",
        why: "Baronial pressure forces negotiation over kingship, creating a lasting symbol of constrained rule.",
        drivers: [["Baronial resistance", "mixed"], ["Legal precedent", "positive"], ["War costs", "negative"]]
      },
      {
        start: 1300,
        end: 1399,
        ruler: "Edward II, Edward III, Richard II",
        dynasty: "Plantagenet",
        government: "Kingdom",
        event: "The Hundred Years' War begins, and the Black Death devastates population and labour systems.",
        why: "War drives taxation and identity, while plague weakens old feudal labour structures and changes bargaining power.",
        drivers: [["Plague disruption", "negative"], ["Military ambition", "mixed"], ["Labour change", "positive"]]
      },
      {
        start: 1400,
        end: 1500,
        ruler: "Henry IV to Henry VII",
        dynasty: "Lancaster / York / Tudor",
        government: "Kingdom",
        event: "The Wars of the Roses culminate in Tudor rule after Bosworth in 1485.",
        why: "Dynastic instability weakens noble factions, allowing the Tudors to rebuild stronger central monarchy.",
        drivers: [["Dynastic conflict", "negative"], ["Noble fragmentation", "mixed"], ["Tudor consolidation", "positive"]]
      }
    ]
  },
  {
    id: "france",
    name: "France",
    region: "Western Europe",
    sources: [
      ["Britannica", "https://www.britannica.com/place/France"],
      ["World History Encyclopedia", "https://www.worldhistory.org/france/"]
    ],
    periods: [
      {
        start: 1000,
        end: 1099,
        ruler: "Robert II, Henry I, Philip I",
        dynasty: "Capetian",
        government: "Kingdom",
        event: "The Capetian monarchy holds limited direct power while great nobles dominate the kingdom.",
        why: "France is politically fragmented, but dynastic continuity gives the crown a platform for slow expansion.",
        drivers: [["Dynastic continuity", "positive"], ["Feudal fragmentation", "negative"], ["Agricultural growth", "positive"]]
      },
      {
        start: 1100,
        end: 1199,
        ruler: "Louis VI, Louis VII, Philip II",
        dynasty: "Capetian",
        government: "Kingdom",
        event: "Royal authority expands, especially under Philip II against the Angevin empire.",
        why: "Better administration and military success allow the crown to turn symbolic kingship into practical power.",
        drivers: [["Royal administration", "positive"], ["Angevin rivalry", "mixed"], ["Urban growth", "positive"]]
      },
      {
        start: 1200,
        end: 1299,
        ruler: "Philip II, Louis IX, Philip IV",
        dynasty: "Capetian",
        government: "Kingdom",
        event: "France becomes one of Europe's strongest monarchies, with Paris and royal law gaining importance.",
        why: "The crown benefits from expanding bureaucracy, prestige, and control over former English-held territories.",
        drivers: [["Bureaucracy", "positive"], ["Royal justice", "positive"], ["Church conflict", "mixed"]]
      },
      {
        start: 1300,
        end: 1399,
        ruler: "Philip IV to Charles VI",
        dynasty: "Capetian / Valois",
        government: "Kingdom",
        event: "The Hundred Years' War and Black Death put France under severe strain.",
        why: "Succession disputes, English invasion, fiscal pressure, and plague combine into a deep political crisis.",
        drivers: [["Succession dispute", "negative"], ["Plague", "negative"], ["Tax capacity", "mixed"]]
      },
      {
        start: 1400,
        end: 1500,
        ruler: "Charles VI, Charles VII, Louis XI",
        dynasty: "Valois",
        government: "Kingdom",
        event: "France recovers from civil war and English occupation, then strengthens under Louis XI.",
        why: "Military reform, taxation, and territorial consolidation help the monarchy emerge stronger after disaster.",
        drivers: [["Military reform", "positive"], ["Civil division", "negative"], ["Territorial consolidation", "positive"]]
      }
    ]
  },
  {
    id: "china",
    name: "China",
    region: "East Asia",
    sources: [
      ["Britannica", "https://www.britannica.com/place/China"],
      ["World History Encyclopedia", "https://www.worldhistory.org/china/"]
    ],
    periods: [
      {
        start: 1000,
        end: 1099,
        ruler: "Zhenzong to Zhezong",
        dynasty: "Northern Song",
        government: "Imperial bureaucracy",
        event: "The Song economy, cities, printing, and civil service institutions flourish.",
        why: "Commercial growth and bureaucratic sophistication make Song China one of the world's most advanced societies.",
        drivers: [["Printing", "positive"], ["Urban economy", "positive"], ["Northern military pressure", "negative"]]
      },
      {
        start: 1100,
        end: 1199,
        ruler: "Huizong to Guangzong",
        dynasty: "Northern Song / Southern Song",
        government: "Imperial bureaucracy",
        event: "The Jurchen Jin conquer northern China, forcing the Song court south.",
        why: "Economic strength survives, but military weakness and frontier pressure reshape the empire's geography.",
        drivers: [["Commercial resilience", "positive"], ["Jin invasion", "negative"], ["Southern shift", "mixed"]]
      },
      {
        start: 1200,
        end: 1299,
        ruler: "Ningzong to Kublai Khan",
        dynasty: "Southern Song / Yuan",
        government: "Imperial bureaucracy under Mongol rule",
        event: "Mongol conquest ends the Song and establishes the Yuan Dynasty.",
        why: "The Mongol empire connects Eurasia but places China under foreign imperial rule with new social hierarchies.",
        drivers: [["Mongol military power", "negative"], ["Eurasian connections", "positive"], ["Administrative disruption", "mixed"]]
      },
      {
        start: 1300,
        end: 1399,
        ruler: "Yuan emperors, then Hongwu",
        dynasty: "Yuan / Ming",
        government: "Imperial dynasty",
        event: "The Yuan collapses and the Ming Dynasty begins in 1368.",
        why: "Rebellion, fiscal stress, disease, and resentment of Mongol rule create conditions for native restoration.",
        drivers: [["Rebellion", "negative"], ["Fiscal stress", "negative"], ["Ming restoration", "positive"]]
      },
      {
        start: 1400,
        end: 1500,
        ruler: "Yongle to Hongzhi",
        dynasty: "Ming",
        government: "Imperial bureaucracy",
        event: "Ming China sponsors Zheng He's voyages, strengthens state systems, and later turns inward.",
        why: "China has enormous administrative and manufacturing capacity, but court priorities shape how global its power becomes.",
        drivers: [["Bureaucracy", "positive"], ["Maritime capacity", "positive"], ["Court factionalism", "negative"]]
      }
    ]
  },
  {
    id: "japan",
    name: "Japan",
    region: "East Asia",
    sources: [
      ["Britannica", "https://www.britannica.com/place/Japan"],
      ["World History Encyclopedia", "https://www.worldhistory.org/japan/"]
    ],
    periods: [
      {
        start: 1000,
        end: 1099,
        ruler: "Heian emperors and Fujiwara regents",
        dynasty: "Heian court order",
        government: "Imperial court with aristocratic regency",
        event: "Court culture flourishes while provincial warrior families gain influence.",
        why: "Aristocratic refinement masks a shift in real power toward armed regional elites.",
        drivers: [["Court culture", "positive"], ["Provincial warriors", "mixed"], ["Weak central coercion", "negative"]]
      },
      {
        start: 1100,
        end: 1199,
        ruler: "Toba to Go-Toba; Minamoto no Yoritomo",
        dynasty: "Late Heian / Kamakura",
        government: "Imperial court and shogunate",
        event: "The Genpei War leads to the Kamakura shogunate in 1192.",
        why: "Military households turn political influence into formal warrior government.",
        drivers: [["Samurai rise", "positive"], ["Clan war", "negative"], ["Dual government", "mixed"]]
      },
      {
        start: 1200,
        end: 1299,
        ruler: "Hojo regents under Kamakura shogunate",
        dynasty: "Kamakura",
        government: "Military shogunate",
        event: "Japan repels Mongol invasions in 1274 and 1281.",
        why: "Defense succeeds, but the cost of mobilization strains the shogunate because rewards are hard to distribute.",
        drivers: [["Military mobilization", "positive"], ["Mongol threat", "negative"], ["Reward problem", "negative"]]
      },
      {
        start: 1300,
        end: 1399,
        ruler: "Go-Daigo; Ashikaga shoguns",
        dynasty: "Kamakura / Muromachi",
        government: "Military shogunate",
        event: "The Kamakura shogunate falls and the Ashikaga establish Muromachi rule.",
        why: "Fragmented loyalties and imperial restoration attempts produce a less centralized warrior order.",
        drivers: [["Shogunate weakness", "negative"], ["Warrior autonomy", "mixed"], ["Kyoto culture", "positive"]]
      },
      {
        start: 1400,
        end: 1500,
        ruler: "Ashikaga shoguns",
        dynasty: "Muromachi",
        government: "Military shogunate",
        event: "The Onin War begins in 1467, opening the Sengoku era of regional warfare.",
        why: "Central authority collapses as regional lords compete, creating instability but also military and administrative innovation.",
        drivers: [["Daimyo rivalry", "negative"], ["Local autonomy", "mixed"], ["Military innovation", "positive"]]
      }
    ]
  },
  {
    id: "islamic-world",
    name: "Islamic World",
    region: "Middle East & North Africa",
    sources: [
      ["Britannica", "https://www.britannica.com/topic/Islamic-world"],
      ["World History Encyclopedia", "https://www.worldhistory.org/islam/"]
    ],
    periods: [
      {
        start: 1000,
        end: 1099,
        ruler: "Abbasid caliphs under Buyid and Seljuk influence",
        dynasty: "Abbasid / Seljuk",
        government: "Caliphate with regional powers",
        event: "The Seljuks rise, and the First Crusade captures Jerusalem in 1099.",
        why: "Political authority is fragmented, but scholarship, trade, and urban life remain deeply influential.",
        drivers: [["Trade networks", "positive"], ["Political fragmentation", "negative"], ["Seljuk military power", "mixed"]]
      },
      {
        start: 1100,
        end: 1199,
        ruler: "Seljuk rulers, Nur ad-Din, Saladin",
        dynasty: "Seljuk / Ayyubid",
        government: "Regional sultanates and caliphate",
        event: "Saladin retakes Jerusalem in 1187 after consolidating Egypt and Syria.",
        why: "Military and religious leadership can temporarily unify divided regions against crusader states.",
        drivers: [["Regional consolidation", "positive"], ["Crusader pressure", "negative"], ["Trade wealth", "positive"]]
      },
      {
        start: 1200,
        end: 1299,
        ruler: "Ayyubids, Abbasids, Mamluks",
        dynasty: "Ayyubid / Mamluk",
        government: "Sultanates",
        event: "The Mongols sack Baghdad in 1258, while the Mamluks stop Mongol expansion at Ain Jalut.",
        why: "One centre of classical caliphal authority collapses, but new military regimes preserve regional power.",
        drivers: [["Mongol invasion", "negative"], ["Mamluk military system", "positive"], ["Urban disruption", "negative"]]
      },
      {
        start: 1300,
        end: 1399,
        ruler: "Mamluk sultans; early Ottoman beys",
        dynasty: "Mamluk / early Ottoman",
        government: "Sultanates and frontier emirates",
        event: "The Ottomans expand from an Anatolian frontier principality into the Balkans.",
        why: "Frontier warfare, flexible institutions, and Byzantine weakness create an opening for Ottoman growth.",
        drivers: [["Frontier expansion", "positive"], ["Byzantine weakness", "positive"], ["Plague effects", "negative"]]
      },
      {
        start: 1400,
        end: 1500,
        ruler: "Mehmed II and Bayezid II",
        dynasty: "Ottoman",
        government: "Sultanate",
        event: "The Ottomans capture Constantinople in 1453.",
        why: "Control of the city gives the Ottomans imperial legitimacy, strategic geography, and a bridge between Europe and Asia.",
        drivers: [["Gunpowder siegecraft", "positive"], ["Strategic capital", "positive"], ["Imperial legitimacy", "positive"]]
      }
    ]
  },
  {
    id: "byzantine",
    name: "Byzantine Empire",
    region: "Eastern Mediterranean",
    sources: [
      ["Britannica", "https://www.britannica.com/place/Byzantine-Empire"],
      ["World History Encyclopedia", "https://www.worldhistory.org/Byzantine_Empire/"]
    ],
    periods: [
      {
        start: 1000,
        end: 1099,
        ruler: "Basil II to Alexios I",
        dynasty: "Macedonian / Komnenian",
        government: "Imperial monarchy",
        event: "The empire moves from Basil II's military strength into crisis after Manzikert in 1071.",
        why: "Byzantium still commands wealth and legitimacy, but Turkish expansion and internal instability weaken control of Anatolia.",
        drivers: [["Imperial administration", "positive"], ["Anatolian losses", "negative"], ["Court instability", "negative"]]
      },
      {
        start: 1100,
        end: 1199,
        ruler: "Komnenian emperors",
        dynasty: "Komnenian",
        government: "Imperial monarchy",
        event: "Komnenian restoration stabilizes Byzantium while crusader powers complicate eastern Mediterranean politics.",
        why: "Diplomacy and military reform recover some strength, but reliance on Italian trade and crusader politics creates new vulnerabilities.",
        drivers: [["Military reform", "positive"], ["Crusader pressure", "mixed"], ["Trade dependency", "negative"]]
      },
      {
        start: 1200,
        end: 1299,
        ruler: "Alexios III to Michael VIII",
        dynasty: "Angelid / Laskarid / Palaiologan",
        government: "Fragmented imperial states",
        event: "The Fourth Crusade sacks Constantinople in 1204; Byzantine rule is restored in 1261.",
        why: "The capital returns to Byzantine hands, but the empire never fully recovers its resources or strategic depth.",
        drivers: [["Capital restored", "positive"], ["Latin occupation", "negative"], ["Resource loss", "negative"]]
      },
      {
        start: 1300,
        end: 1399,
        ruler: "Palaiologan emperors",
        dynasty: "Palaiologan",
        government: "Reduced empire",
        event: "Civil wars and Ottoman expansion reduce Byzantium to a shrinking set of territories.",
        why: "Internal divisions and lack of money prevent effective defense while Ottoman power grows around the capital.",
        drivers: [["Civil war", "negative"], ["Ottoman pressure", "negative"], ["Diplomacy", "mixed"]]
      },
      {
        start: 1400,
        end: 1500,
        ruler: "Manuel II to Constantine XI",
        dynasty: "Palaiologan",
        government: "Imperial city-state",
        event: "Constantinople falls to Mehmed II in 1453.",
        why: "A once vast empire has become strategically isolated, and Ottoman siege technology ends Byzantine rule.",
        drivers: [["Gunpowder siegecraft", "negative"], ["Strategic isolation", "negative"], ["Imperial legacy", "mixed"]]
      }
    ]
  },
  {
    id: "mongol",
    name: "Mongol Empire",
    region: "Eurasian Steppe",
    sources: [
      ["Britannica", "https://www.britannica.com/place/Mongol-empire"],
      ["World History Encyclopedia", "https://www.worldhistory.org/Mongol_Empire/"]
    ],
    periods: [
      {
        start: 1000,
        end: 1099,
        ruler: "Steppe confederation leaders",
        dynasty: "Pre-imperial Mongol tribes",
        government: "Tribal confederations",
        event: "Mongol and neighbouring steppe groups remain politically fragmented before imperial unification.",
        why: "Pastoral mobility and warfare traditions exist, but no single leader has yet unified the steppe at scale.",
        drivers: [["Horse culture", "positive"], ["Fragmentation", "negative"], ["Steppe networks", "mixed"]]
      },
      {
        start: 1100,
        end: 1199,
        ruler: "Yesugei, Temujin, rival khans",
        dynasty: "Borjigin rise",
        government: "Tribal politics",
        event: "Temujin emerges from violent steppe politics before becoming Genghis Khan in 1206.",
        why: "Personal alliances, military talent, and social reorganization begin turning steppe rivalry into empire-building capacity.",
        drivers: [["Leadership", "positive"], ["Clan rivalry", "negative"], ["Military organization", "positive"]]
      },
      {
        start: 1200,
        end: 1299,
        ruler: "Genghis Khan, Ogedei, Mongke, Kublai Khan",
        dynasty: "Borjigin",
        government: "Imperial khanate",
        event: "Mongol armies create the largest contiguous land empire in history.",
        why: "Mobility, discipline, intelligence networks, and siege adaptation allow rapid conquest across Eurasia.",
        drivers: [["Cavalry mobility", "positive"], ["Siege adaptation", "positive"], ["Imperial overreach", "mixed"]]
      },
      {
        start: 1300,
        end: 1399,
        ruler: "Yuan, Ilkhanate, Golden Horde, Chagatai rulers",
        dynasty: "Successor khanates",
        government: "Divided khanates",
        event: "The united empire fragments while Mongol successor states continue to shape Eurasia.",
        why: "The empire's scale makes unified rule difficult, but trade, diplomacy, and transmission across Eurasia remain significant.",
        drivers: [["Fragmentation", "negative"], ["Eurasian trade", "positive"], ["Succession politics", "negative"]]
      },
      {
        start: 1400,
        end: 1500,
        ruler: "Northern Yuan and steppe khans",
        dynasty: "Post-imperial Mongol polities",
        government: "Regional khanates",
        event: "Mongol power persists regionally but no longer dominates Eurasia as a unified empire.",
        why: "Sedentary empires recover, trade routes shift, and steppe politics return to regional competition.",
        drivers: [["Regional survival", "mixed"], ["Lost unity", "negative"], ["Steppe mobility", "positive"]]
      }
    ]
  },
  {
    id: "aztec",
    name: "Aztec Empire",
    region: "Mesoamerica",
    sources: [
      ["Britannica", "https://www.britannica.com/place/Aztec"],
      ["World History Encyclopedia", "https://www.worldhistory.org/Aztec_Civilization/"]
    ],
    periods: [
      {
        start: 1000,
        end: 1199,
        ruler: "Regional city-state rulers",
        dynasty: "Postclassic Mesoamerican states",
        government: "City-states",
        event: "Central Mexico is shaped by competing city-states after the decline of earlier powers.",
        why: "Political fragmentation creates space for later Mexica migration and alliance-building.",
        drivers: [["Urban traditions", "positive"], ["Regional rivalry", "mixed"], ["Migration", "mixed"]]
      },
      {
        start: 1200,
        end: 1299,
        ruler: "Early Mexica leaders",
        dynasty: "Mexica migration period",
        government: "Migrating polity",
        event: "The Mexica move through central Mexico before founding Tenochtitlan.",
        why: "A marginal group's search for territory sets up one of the most dramatic later imperial rises.",
        drivers: [["Migration", "mixed"], ["Military adaptation", "positive"], ["Political marginality", "negative"]]
      },
      {
        start: 1300,
        end: 1399,
        ruler: "Acamapichtli and successors",
        dynasty: "Early Mexica rulers",
        government: "City-state",
        event: "Tenochtitlan is founded in 1325 and grows through alliance and tribute politics.",
        why: "Lake geography, military service, and alliance diplomacy help a new city become regionally important.",
        drivers: [["Lake agriculture", "positive"], ["Alliance politics", "positive"], ["Tribute pressure", "mixed"]]
      },
      {
        start: 1400,
        end: 1500,
        ruler: "Itzcoatl, Moctezuma I, Ahuitzotl",
        dynasty: "Aztec Triple Alliance",
        government: "Imperial tribute alliance",
        event: "The Triple Alliance forms in 1428 and expands into a major Mesoamerican empire.",
        why: "Military expansion and tribute extraction create power quickly, but resentment among subject peoples becomes a structural weakness.",
        drivers: [["Military expansion", "positive"], ["Tribute economy", "positive"], ["Subject resentment", "negative"]]
      }
    ]
  },
  {
    id: "mali",
    name: "Mali Empire",
    region: "West Africa",
    sources: [
      ["Britannica", "https://www.britannica.com/place/Mali-historical-empire-Africa"],
      ["World History Encyclopedia", "https://www.worldhistory.org/Mali_Empire/"]
    ],
    periods: [
      {
        start: 1000,
        end: 1199,
        ruler: "Ghana successors and regional Mandinka powers",
        dynasty: "Pre-Mali polities",
        government: "Regional kingdoms",
        event: "West African trade networks continue around gold, salt, and trans-Saharan routes.",
        why: "Control of trade routes and gold fields provides the economic foundation for later imperial expansion.",
        drivers: [["Gold trade", "positive"], ["Saharan routes", "positive"], ["Regional competition", "mixed"]]
      },
      {
        start: 1200,
        end: 1299,
        ruler: "Sundiata Keita and successors",
        dynasty: "Keita",
        government: "Empire",
        event: "Sundiata establishes Mali after victory at Kirina around 1235.",
        why: "Military success and control of trade corridors turn Mali into a major West African power.",
        drivers: [["Trade control", "positive"], ["Military victory", "positive"], ["Imperial integration", "positive"]]
      },
      {
        start: 1300,
        end: 1399,
        ruler: "Mansa Musa and successors",
        dynasty: "Keita",
        government: "Empire",
        event: "Mansa Musa's pilgrimage advertises Mali's wealth across the Islamic world.",
        why: "Gold wealth, scholarship, and Islamic connections make Mali globally visible.",
        drivers: [["Gold wealth", "positive"], ["Islamic scholarship", "positive"], ["Long-distance trade", "positive"]]
      },
      {
        start: 1400,
        end: 1500,
        ruler: "Later Mali mansas",
        dynasty: "Keita",
        government: "Empire",
        event: "Mali's influence declines as Songhai and regional powers rise.",
        why: "Large territorial systems are hard to hold when trade routes shift and ambitious rivals grow stronger.",
        drivers: [["Songhai rivalry", "negative"], ["Trade shifts", "negative"], ["Imperial scale", "mixed"]]
      }
    ]
  }
];

const snapshots = [
  {
    start: 1000,
    end: 1099,
    text: "Around the eleventh century, Europe is fragmented into feudal powers, Song China is economically and technologically vibrant, Japan is still court-centered, and West African trade systems are laying the foundations for later empires."
  },
  {
    start: 1100,
    end: 1199,
    text: "The twelfth century is a world of consolidation and pressure: Capetian France grows stronger, England becomes Plantagenet, the Song court shifts south, Japan enters warrior government, and crusader conflict reshapes the eastern Mediterranean."
  },
  {
    start: 1200,
    end: 1299,
    text: "The thirteenth century is dominated by Mongol expansion, constitutional pressure in England, French royal growth, Kamakura Japan's defensive mobilization, and the rise of Mali in West Africa."
  },
  {
    start: 1300,
    end: 1399,
    text: "The fourteenth century brings severe shocks and new orders: plague, war, dynastic collapse, the Ming restoration, the rise of Ottoman power, and the founding growth of Tenochtitlan."
  },
  {
    start: 1400,
    end: 1500,
    text: "The fifteenth century is a turning-point age: Constantinople falls, Ming China projects and then limits maritime power, France and England rebuild after war, Japan fractures, and the Aztec Empire rapidly expands."
  }
];

const mapExtents = {
  england: [
    { start: 1000, end: 1500, label: "England", shapes: [{ type: "ellipse", cx: 474, cy: 127, rx: 14, ry: 20 }] }
  ],
  france: [
    { start: 1000, end: 1199, label: "Capetian France", shapes: [{ type: "ellipse", cx: 492, cy: 157, rx: 20, ry: 22 }] },
    { start: 1200, end: 1500, label: "France", shapes: [{ type: "ellipse", cx: 494, cy: 160, rx: 30, ry: 32 }] }
  ],
  china: [
    { start: 1000, end: 1099, label: "Northern Song China", shapes: [{ type: "ellipse", cx: 742, cy: 188, rx: 62, ry: 40 }] },
    { start: 1100, end: 1199, label: "Southern Song China", shapes: [{ type: "ellipse", cx: 742, cy: 216, rx: 54, ry: 34 }] },
    { start: 1200, end: 1299, label: "Yuan China", shapes: [{ type: "ellipse", cx: 735, cy: 185, rx: 86, ry: 62 }] },
    { start: 1300, end: 1500, label: "Ming China", shapes: [{ type: "ellipse", cx: 742, cy: 198, rx: 72, ry: 52 }] }
  ],
  japan: [
    { start: 1000, end: 1500, label: "Japan", shapes: [{ type: "ellipse", cx: 854, cy: 198, rx: 18, ry: 42, rotate: -18 }] }
  ],
  "islamic-world": [
    {
      start: 1000,
      end: 1199,
      label: "Islamic polities",
      shapes: [{ type: "polygon", points: "488,194 560,166 656,184 674,234 596,272 508,250" }]
    },
    {
      start: 1200,
      end: 1299,
      label: "Ayyubid / Mamluk centres",
      shapes: [{ type: "polygon", points: "514,208 588,190 635,218 610,278 526,268" }]
    },
    {
      start: 1300,
      end: 1500,
      label: "Mamluk and Ottoman zones",
      shapes: [{ type: "polygon", points: "502,174 586,152 646,190 626,266 526,258 480,214" }]
    }
  ],
  byzantine: [
    {
      start: 1000,
      end: 1099,
      label: "Byzantine Empire",
      shapes: [{ type: "polygon", points: "504,170 548,154 598,170 596,210 540,222 500,202" }]
    },
    {
      start: 1100,
      end: 1199,
      label: "Byzantine Empire",
      shapes: [{ type: "polygon", points: "512,172 552,158 586,176 580,210 532,214 504,198" }]
    },
    {
      start: 1200,
      end: 1399,
      label: "Reduced Byzantium",
      shapes: [{ type: "ellipse", cx: 538, cy: 184, rx: 28, ry: 18 }]
    },
    {
      start: 1400,
      end: 1500,
      label: "Constantinople",
      shapes: [{ type: "ellipse", cx: 536, cy: 183, rx: 9, ry: 9 }]
    }
  ],
  mongol: [
    {
      start: 1000,
      end: 1199,
      label: "Mongol steppe groups",
      shapes: [{ type: "polygon", points: "650,126 764,106 830,134 804,164 686,164" }]
    },
    {
      start: 1200,
      end: 1299,
      label: "Mongol Empire",
      shapes: [{ type: "polygon", points: "524,124 624,88 784,92 894,132 870,218 742,236 612,212 516,178" }]
    },
    {
      start: 1300,
      end: 1399,
      label: "Mongol successor khanates",
      shapes: [
        { type: "polygon", points: "552,128 646,104 716,132 692,184 584,178" },
        { type: "polygon", points: "706,142 820,126 880,168 840,226 724,214" }
      ]
    },
    {
      start: 1400,
      end: 1500,
      label: "Post-imperial Mongol polities",
      shapes: [{ type: "polygon", points: "662,118 778,104 834,134 798,172 682,164" }]
    }
  ],
  aztec: [
    { start: 1000, end: 1299, label: "Central Mexican city-states", shapes: [{ type: "ellipse", cx: 210, cy: 222, rx: 22, ry: 18 }] },
    { start: 1300, end: 1399, label: "Tenochtitlan", shapes: [{ type: "ellipse", cx: 212, cy: 224, rx: 18, ry: 16 }] },
    { start: 1400, end: 1500, label: "Aztec Triple Alliance", shapes: [{ type: "ellipse", cx: 212, cy: 224, rx: 34, ry: 26 }] }
  ],
  mali: [
    { start: 1000, end: 1199, label: "West African trade zones", shapes: [{ type: "ellipse", cx: 476, cy: 274, rx: 48, ry: 25 }] },
    { start: 1200, end: 1399, label: "Mali Empire", shapes: [{ type: "ellipse", cx: 470, cy: 278, rx: 68, ry: 38 }] },
    { start: 1400, end: 1500, label: "Later Mali", shapes: [{ type: "ellipse", cx: 466, cy: 280, rx: 48, ry: 28 }] }
  ]
};

const slotColors = ["#d9a441", "#72b37c", "#6ea5d8", "#cf6f5f", "#9a85d6"];
const defaultSlots = ["england", "byzantine", "china", "islamic-world", "mongol"];
const slider = document.querySelector("#yearSlider");
const selectedYear = document.querySelector("#selectedYear");
const selectedBand = document.querySelector("#selectedBand");
const cards = document.querySelector("#cards");
const template = document.querySelector("#cardTemplate");
const snapshot = document.querySelector("#globalSnapshot");
const extentLayer = document.querySelector("#extentLayer");
const mapLegend = document.querySelector("#mapLegend");
const mapInspector = document.querySelector("#mapInspector");
const selectors = ["slot1", "slot2", "slot3", "slot4", "slot5"].map((id) => document.querySelector(`#${id}`));

const pinned = new Set();

function periodFor(civilization, year) {
  return civilization.periods.find((period) => year >= period.start && year <= period.end) || civilization.periods[0];
}

function snapshotFor(year) {
  return snapshots.find((item) => year >= item.start && year <= item.end)?.text || snapshots[0].text;
}

function extentFor(civilizationId, year) {
  return mapExtents[civilizationId]?.find((extent) => year >= extent.start && year <= extent.end);
}

function createSvgElement(tag, attributes) {
  const element = document.createElementNS("http://www.w3.org/2000/svg", tag);
  Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
  return element;
}

function setMapInspector(title, detail) {
  mapInspector.querySelector("strong").textContent = title;
  mapInspector.querySelector("span").textContent = detail;
}

function setActiveExtent(index, isActive) {
  document.querySelectorAll(`[data-map-index="${index}"]`).forEach((item) => {
    item.classList.toggle("active", isActive);
  });
}

function renderMap(year, selectedCivilizations) {
  extentLayer.replaceChildren();
  mapLegend.replaceChildren();
  setMapInspector("Map Layer", `Showing ${selectedCivilizations.length} selected panels for ${year}-${year + 9}.`);

  selectedCivilizations.forEach((civilization, index) => {
    const extent = extentFor(civilization.id, year);
    if (!extent) return;

    const color = slotColors[index];
    const group = createSvgElement("g", {
      class: "extent-group",
      "data-map-index": index,
      "aria-label": `${civilization.name}: ${extent.label}`
    });
    const detail = `${extent.label} in ${year}-${year + 9}. ${civilization.region}.`;

    extent.shapes.forEach((shape) => {
      const commonAttributes = {
        class: "extent-shape",
        tabindex: "0",
        "data-map-index": index,
        fill: color,
        stroke: color,
        "aria-label": `${civilization.name}: ${detail}`
      };
      let shapeElement;

      if (shape.type === "ellipse") {
        const transform = shape.rotate ? `rotate(${shape.rotate} ${shape.cx} ${shape.cy})` : "";
        shapeElement = createSvgElement("ellipse", { ...commonAttributes, cx: shape.cx, cy: shape.cy, rx: shape.rx, ry: shape.ry, transform });
      }

      if (shape.type === "polygon") {
        shapeElement = createSvgElement("polygon", { ...commonAttributes, points: shape.points });
      }

      if (shapeElement) {
        const title = createSvgElement("title", {});
        title.textContent = `${civilization.name}: ${extent.label}`;
        shapeElement.append(title);
        shapeElement.addEventListener("mouseenter", () => {
          setActiveExtent(index, true);
          setMapInspector(civilization.name, detail);
        });
        shapeElement.addEventListener("focus", () => {
          setActiveExtent(index, true);
          setMapInspector(civilization.name, detail);
        });
        shapeElement.addEventListener("mouseleave", () => setActiveExtent(index, false));
        shapeElement.addEventListener("blur", () => setActiveExtent(index, false));
        group.append(shapeElement);
      }
    });

    const label = document.createElement("button");
    const swatch = document.createElement("span");
    label.className = "map-key";
    label.type = "button";
    label.dataset.mapIndex = index;
    swatch.style.background = color;
    label.append(swatch, civilization.name);
    label.addEventListener("mouseenter", () => {
      setActiveExtent(index, true);
      setMapInspector(civilization.name, detail);
    });
    label.addEventListener("focus", () => {
      setActiveExtent(index, true);
      setMapInspector(civilization.name, detail);
    });
    label.addEventListener("mouseleave", () => setActiveExtent(index, false));
    label.addEventListener("blur", () => setActiveExtent(index, false));
    mapLegend.append(label);
    extentLayer.append(group);
  });
}

function populateSelectors() {
  selectors.forEach((select, index) => {
    civilizations.forEach((civilization) => {
      const option = document.createElement("option");
      option.value = civilization.id;
      option.textContent = civilization.name;
      select.append(option);
    });
    select.value = defaultSlots[index];
    select.addEventListener("change", render);
  });
}

function render() {
  const year = Number(slider.value);
  const bandEnd = year + 9;
  selectedYear.textContent = year;
  selectedBand.textContent = `${year}-${bandEnd}`;
  snapshot.textContent = snapshotFor(year);
  cards.replaceChildren();
  const selectedCivilizations = selectors.map((select) => civilizations.find((item) => item.id === select.value));
  renderMap(year, selectedCivilizations);

  selectedCivilizations.forEach((civilization, index) => {
    const period = periodFor(civilization, year);
    const node = template.content.firstElementChild.cloneNode(true);
    const cardKey = `${index}-${civilization.id}`;

    node.classList.toggle("pinned", pinned.has(cardKey));
    node.querySelector(".region").textContent = civilization.region;
    node.querySelector("h2").textContent = civilization.name;
    node.querySelector(".ruler").textContent = period.ruler;
    node.querySelector(".dynasty").textContent = period.dynasty;
    node.querySelector(".government").textContent = period.government;
    node.querySelector(".event").textContent = period.event;
    node.querySelector(".why").textContent = period.why;

    const pinButton = node.querySelector(".pin-button");
    pinButton.setAttribute("aria-pressed", String(pinned.has(cardKey)));
    pinButton.addEventListener("click", () => {
      if (pinned.has(cardKey)) {
        pinned.delete(cardKey);
      } else {
        pinned.add(cardKey);
      }
      render();
    });

    const driverContainer = node.querySelector(".drivers");
    period.drivers.forEach(([label, type]) => {
      const driver = document.createElement("span");
      driver.className = `driver ${type}`;
      driver.textContent = label;
      driverContainer.append(driver);
    });

    const sourceContainer = node.querySelector(".sources");
    civilization.sources.forEach(([label, url]) => {
      const source = document.createElement("a");
      source.href = url;
      source.target = "_blank";
      source.rel = "noreferrer";
      source.textContent = label;
      sourceContainer.append(source);
    });

    cards.append(node);
  });
}

populateSelectors();
slider.addEventListener("input", render);
render();
