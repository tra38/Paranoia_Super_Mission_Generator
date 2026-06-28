// Generated from the upstream Ruby Calyx grammars by tools/build-grammar-data.js.
window.PARANOIA_GRAMMARS = {
  "mission": {
    "else": [
      {
        "value": "a #{input}",
        "weight": 1
      }
    ],
    "letter": [
      {
        "value": "A",
        "weight": 1
      },
      {
        "value": "B",
        "weight": 1
      },
      {
        "value": "C",
        "weight": 1
      },
      {
        "value": "D",
        "weight": 1
      },
      {
        "value": "E",
        "weight": 1
      },
      {
        "value": "F",
        "weight": 1
      },
      {
        "value": "G",
        "weight": 1
      },
      {
        "value": "H",
        "weight": 1
      },
      {
        "value": "I",
        "weight": 1
      },
      {
        "value": "J",
        "weight": 1
      },
      {
        "value": "K",
        "weight": 1
      },
      {
        "value": "L",
        "weight": 1
      },
      {
        "value": "M",
        "weight": 1
      },
      {
        "value": "N",
        "weight": 1
      },
      {
        "value": "O",
        "weight": 1
      },
      {
        "value": "P",
        "weight": 1
      },
      {
        "value": "Q",
        "weight": 1
      },
      {
        "value": "R",
        "weight": 1
      },
      {
        "value": "S",
        "weight": 1
      },
      {
        "value": "T",
        "weight": 1
      },
      {
        "value": "U",
        "weight": 1
      },
      {
        "value": "V",
        "weight": 1
      },
      {
        "value": "W",
        "weight": 1
      },
      {
        "value": "X",
        "weight": 1
      },
      {
        "value": "Y",
        "weight": 1
      },
      {
        "value": "Z",
        "weight": 1
      }
    ],
    "number": [
      {
        "value": "1",
        "weight": 1
      },
      {
        "value": "2",
        "weight": 1
      },
      {
        "value": "3",
        "weight": 1
      },
      {
        "value": "4",
        "weight": 1
      },
      {
        "value": "5",
        "weight": 1
      },
      {
        "value": "6",
        "weight": 1
      },
      {
        "value": "7",
        "weight": 1
      },
      {
        "value": "8",
        "weight": 1
      },
      {
        "value": "9",
        "weight": 1
      }
    ],
    "character": [
      {
        "value": "{letter}",
        "weight": 24
      },
      {
        "value": "{number}",
        "weight": 11
      }
    ],
    "sector_name": [
      {
        "value": "{letter}{letter}{letter}",
        "weight": 1
      }
    ],
    "building_name": [
      {
        "value": "{character}{character}-{character}{character}{character}",
        "weight": 1
      }
    ],
    "service_group": [
      {
        "value": "Armed Forces",
        "weight": 1
      },
      {
        "value": "Internal Security",
        "weight": 1
      },
      {
        "value": "CPU",
        "weight": 1
      },
      {
        "value": "R&D",
        "weight": 1
      },
      {
        "value": "PLC",
        "weight": 1
      },
      {
        "value": "Power Services",
        "weight": 1
      },
      {
        "value": "Tech Services",
        "weight": 1
      },
      {
        "value": "HPD&MC",
        "weight": 1
      }
    ],
    "secret_society": [
      {
        "value": "Anti-Mutant",
        "weight": 1
      },
      {
        "value": "Computer Phreaks",
        "weight": 1
      },
      {
        "value": "Communist",
        "weight": 1
      },
      {
        "value": "Corpore Metal",
        "weight": 1
      },
      {
        "value": "Death Leopard",
        "weight": 1
      },
      {
        "value": "FCCC-P",
        "weight": 1
      },
      {
        "value": "Frankenstein Destroyers",
        "weight": 1
      },
      {
        "value": "Free Enterprise",
        "weight": 1
      },
      {
        "value": "Humanist",
        "weight": 1
      },
      {
        "value": "Illuminati (cover society: {secret_society})",
        "weight": 1
      },
      {
        "value": "Mystics",
        "weight": 1
      },
      {
        "value": "Pro Tech",
        "weight": 1
      },
      {
        "value": "Psion",
        "weight": 1
      },
      {
        "value": "PURGE",
        "weight": 1
      },
      {
        "value": "Romantics",
        "weight": 1
      },
      {
        "value": "Sierra Club",
        "weight": 1
      },
      {
        "value": "\"Spy For Another Alpha Complex\"",
        "weight": 1
      },
      {
        "value": "Program Group",
        "weight": 1
      }
    ],
    "job_type": [
      {
        "value": "Menial",
        "weight": 1
      },
      {
        "value": "Clerical",
        "weight": 1
      },
      {
        "value": "Support",
        "weight": 1
      },
      {
        "value": "Management",
        "weight": 1
      },
      {
        "value": "Security",
        "weight": 1
      },
      {
        "value": "Fieldwork",
        "weight": 1
      },
      {
        "value": "Analysis",
        "weight": 1
      },
      {
        "value": "Creative",
        "weight": 1
      },
      {
        "value": "Investigative",
        "weight": 1
      },
      {
        "value": "Quality Control",
        "weight": 1
      },
      {
        "value": "Engineering",
        "weight": 1
      },
      {
        "value": "Emergency",
        "weight": 1
      },
      {
        "value": "Celebrity",
        "weight": 1
      }
    ],
    "random_target": [
      {
        "value": "{overdog_name}",
        "weight": 1
      },
      {
        "value": "{underdog_name}",
        "weight": 1
      }
    ],
    "location": [
      {
        "value": "{public_location}",
        "weight": 12
      },
      {
        "value": "{private_location}",
        "weight": 8
      },
      {
        "value": "{mandatory_mission_location}",
        "weight": 5
      }
    ],
    "public_location": [
      {
        "value": "{clearance}-clearance {public_safe_location}",
        "weight": 10
      },
      {
        "value": "{clearance}-clearance {public_dangerous_location}",
        "weight": 6
      },
      {
        "value": "{clearance}-clearance {public_unusual_location}",
        "weight": 4
      }
    ],
    "private_location": [
      {
        "value": "{private_safe_location}",
        "weight": 10
      },
      {
        "value": "{private_dangerous_location}",
        "weight": 6
      },
      {
        "value": "{private_unusual_location}",
        "weight": 4
      }
    ],
    "mandatory_mission_location": [
      {
        "value": "Cory-G-FOX-6 (elite Troubleshooter) Memorial Briefing Room",
        "weight": 1
      },
      {
        "value": "{public_location} (previously {official_thugs}'s Firing Range)",
        "weight": 1
      },
      {
        "value": "GAMMA-Clearance Corridor (Computer denies this place exists)",
        "weight": 1
      },
      {
        "value": "Undersea Corridor",
        "weight": 1
      },
      {
        "value": "Minefield Corridor",
        "weight": 1
      },
      {
        "value": "Corridor Running Club HQ",
        "weight": 1
      },
      {
        "value": "The 'Lost' Corridor (shut down many years ago, now part of the Underplex and currently occupied by traitors from the {secret_society} secret society)",
        "weight": 1
      },
      {
        "value": "Fleshbag Factory (entity that mass-produces suits of human skins for delivery to some other place; appears to be entirely automated)",
        "weight": 1
      },
      {
        "value": "Servants of Cthulhu HQ",
        "weight": 1
      },
      {
        "value": "Mandatory 'Confession Booth' Corridor",
        "weight": 1
      },
      {
        "value": "CPU Office of Collateral Damage Registration",
        "weight": 1
      },
      {
        "value": "IntSec Department of Observation office (each office is dedicated to observing the life of key individuals, possibly your PCs)",
        "weight": 1
      },
      {
        "value": "Power Services Fuel Storage Co-ordination Office",
        "weight": 1
      },
      {
        "value": "HPD&MC Bureau of Compliance",
        "weight": 1
      },
      {
        "value": "CPU Internal Affairs Department",
        "weight": 1
      },
      {
        "value": "HPD&MC Center For Traitor Reprogramming (turns them into deep cover agents for Internal Security)",
        "weight": 1
      },
      {
        "value": "CPU Bureau of Information Collection",
        "weight": 1
      },
      {
        "value": "Tech Services Bot Refurbishment Depot (secretly a betting ring for botfighting)",
        "weight": 1
      },
      {
        "value": "CPU Analysis Section (secretly a betting rig for Troubleshooter missions)",
        "weight": 1
      },
      {
        "value": "Tech Services Wiring Storage",
        "weight": 1
      },
      {
        "value": "Internal Security Office of Security",
        "weight": 1
      },
      {
        "value": "PLC Parcel Tracking Office",
        "weight": 1
      },
      {
        "value": "Tech Services Office of Paint Inspection Scheduling",
        "weight": 1
      },
      {
        "value": "Armed Forces Committee on Security Rating Advisory",
        "weight": 1
      },
      {
        "value": "HPD&MC Bureau of Bicycle Registration (as no bicycles exist, this bureau is actually an excuse to embezzle credits)",
        "weight": 1
      },
      {
        "value": "CPU Office of Sanctioned Communications (a glorified call center where bored CPU clerks pretend to be The Computer)",
        "weight": 1
      },
      {
        "value": "HPD&MC Television Modulation Office (monitors the effectiveness of television programs and adjust them to manipulate the population; uses lots of telemetry)",
        "weight": 1
      },
      {
        "value": "Armed Forces Office of Ammunition Sorting",
        "weight": 1
      },
      {
        "value": "Committee for Vigilant Action HQ (the 'Committee' is actually a plot by disgruntled high-clearance citizens to overthrow The Computer and take power for themselves; sympathizes with {secret_society})",
        "weight": 1
      },
      {
        "value": "HPD&MC Department of Psychological Experiments",
        "weight": 1
      },
      {
        "value": "R&D Office of Experimental Security Checkpoints",
        "weight": 1
      },
      {
        "value": "PLC Department For Market Research",
        "weight": 1
      },
      {
        "value": "Giant Stationary Warbot",
        "weight": 1
      }
    ],
    "public_safe_location": [
      {
        "value": "food production area",
        "weight": 2
      },
      {
        "value": "living quarters",
        "weight": 2
      },
      {
        "value": "dining area",
        "weight": 2
      },
      {
        "value": "computer interface",
        "weight": 2
      },
      {
        "value": "corridor",
        "weight": 1
      },
      {
        "value": "{service_group} waiting room",
        "weight": 1
      },
      {
        "value": "grooming and hygiene station",
        "weight": 1
      },
      {
        "value": "{service_group} storage facility or warehouse",
        "weight": 1
      },
      {
        "value": "vidshow entertainment lounge",
        "weight": 1
      },
      {
        "value": "garage/vehicle dispatch",
        "weight": 1
      },
      {
        "value": "postal sorting room",
        "weight": 1
      },
      {
        "value": "Junior Citizen creche",
        "weight": 1
      },
      {
        "value": "Transtube station",
        "weight": 1
      },
      {
        "value": "recreational resort",
        "weight": 1
      },
      {
        "value": "forms processing center",
        "weight": 1
      },
      {
        "value": "bathroom",
        "weight": 1
      }
    ],
    "public_dangerous_location": [
      {
        "value": "Armed Forces {armed_forces_location}",
        "weight": 2
      },
      {
        "value": "Internal Security {internal_security_location}",
        "weight": 2
      },
      {
        "value": "hospital's {hospital_location}",
        "weight": 2
      },
      {
        "value": "reactor {reactor_location}",
        "weight": 2
      },
      {
        "value": "Vulture Squadron {vulture_squad_location}",
        "weight": 2
      },
      {
        "value": "Troubleshooter HQ {troubleshooter_location}",
        "weight": 2
      },
      {
        "value": "factory floor (controlled by {service_group})",
        "weight": 1
      },
      {
        "value": "R&D research lab, focused on {research_topic})",
        "weight": 1
      },
      {
        "value": "Food preparation area",
        "weight": 1
      },
      {
        "value": "Technical Services cloning facility (well-guarded)",
        "weight": 1
      },
      {
        "value": "{booth_type} booth",
        "weight": 1
      },
      {
        "value": "abandoned location (originally {public_safe_location.indefinite_article}, but is now a decaying and pestilential wreck)",
        "weight": 3
      }
    ],
    "public_unusual_location": [
      {
        "value": "Solyent recycling room (near the morgue)",
        "weight": 2
      },
      {
        "value": "{duct_type} ducts",
        "weight": 2
      },
      {
        "value": "Bright Vision Re-Education Center",
        "weight": 2
      },
      {
        "value": "Bot manufacture center",
        "weight": 2
      },
      {
        "value": "{shaft_type} shaft",
        "weight": 2
      },
      {
        "value": "Funball arena",
        "weight": 2
      },
      {
        "value": "Hangar",
        "weight": 2
      },
      {
        "value": "Communication Booth",
        "weight": 2
      },
      {
        "value": "Elevator",
        "weight": 2
      },
      {
        "value": "Packing Crate Center",
        "weight": 2
      }
    ],
    "private_safe_location": [
      {
        "value": "portal to Alpha Complex dome",
        "weight": 2
      },
      {
        "value": "IR Market (originally {public_location.indefinite_article})",
        "weight": 2
      },
      {
        "value": "IR Marketeers' Living Quarters",
        "weight": 2
      },
      {
        "value": "CompNode",
        "weight": 2
      },
      {
        "value": "MemoMax archive vault",
        "weight": 2
      },
      {
        "value": "Museum of Famous Forms",
        "weight": 2
      },
      {
        "value": "Junior Citizen fort (no Commies allowed!)",
        "weight": 2
      },
      {
        "value": "sewer tunnel",
        "weight": 2
      },
      {
        "value": "Proper Bedding Maintenance Hall of Fame",
        "weight": 2
      },
      {
        "value": "ULTRAVIOLET mausoleum",
        "weight": 2
      }
    ],
    "private_dangerous_location": [
      {
        "value": "{secret_society} HQ",
        "weight": 8
      },
      {
        "value": "secure dome access gate",
        "weight": 1
      },
      {
        "value": "Reactor waste landfill",
        "weight": 1
      },
      {
        "value": "portal to the Outdoors guarded by 1d20 guardbots",
        "weight": 1
      },
      {
        "value": "Armed Forces dome defense turret (defense position on the outer dome)",
        "weight": 1
      },
      {
        "value": "missile silo ({missle_silo_status})",
        "weight": 1
      },
      {
        "value": "{secret_society} paint-mixing facility",
        "weight": 1
      },
      {
        "value": "Technical Services clone backup ordering office",
        "weight": 1
      },
      {
        "value": "warbot armature fitting lab",
        "weight": 1
      },
      {
        "value": "cone rifle fuse packing facility",
        "weight": 1
      },
      {
        "value": "map room for several sectors",
        "weight": 1
      },
      {
        "value": "unrecoverable bot brain junkyard",
        "weight": 1
      },
      {
        "value": "underground society of refugee traitors, living within in the Underplex's {underplex_location}",
        "weight": 1
      }
    ],
    "private_unusual_location": [
      {
        "value": "illegal sports arena",
        "weight": 1
      },
      {
        "value": "illegal Hangar",
        "weight": 1
      },
      {
        "value": "illegal Communication Booth",
        "weight": 1
      },
      {
        "value": "illegal Packing Crate Center",
        "weight": 1
      },
      {
        "value": "abandoned and forgotten portal to the Outdoors",
        "weight": 2
      },
      {
        "value": "underground lake",
        "weight": 2
      },
      {
        "value": "natural cavern",
        "weight": 2
      },
      {
        "value": "private slime farm",
        "weight": 2
      },
      {
        "value": "gigantic Gothic cathedral (once used heavily by FCCC-P, but now abandoned)",
        "weight": 2
      },
      {
        "value": "acid-etched sinkhole under food production area",
        "weight": 2
      },
      {
        "value": "heat-resistant mitten knitting sweatshop",
        "weight": 2
      },
      {
        "value": "ULTRAVIOLET Gallery of Perversities",
        "weight": 2
      }
    ],
    "armed_forces_location": [
      {
        "value": "dormitory",
        "weight": 8
      },
      {
        "value": "armory",
        "weight": 7
      },
      {
        "value": "firing range",
        "weight": 5
      }
    ],
    "internal_security_location": [
      {
        "value": "admin offices",
        "weight": 6
      },
      {
        "value": "holding cells",
        "weight": 4
      },
      {
        "value": "interrogation center",
        "weight": 5
      },
      {
        "value": "janitorial stores",
        "weight": 3
      },
      {
        "value": "surveillance station",
        "weight": 2
      }
    ],
    "hospital_location": [
      {
        "value": "ER facility",
        "weight": 7
      },
      {
        "value": "drug vending area",
        "weight": 3
      },
      {
        "value": "medicinal supply depot",
        "weight": 3
      },
      {
        "value": "intensive care facility",
        "weight": 3
      },
      {
        "value": "recovery room",
        "weight": 2
      },
      {
        "value": "morgue",
        "weight": 2
      }
    ],
    "reactor_location": [
      {
        "value": "outer core",
        "weight": 7
      },
      {
        "value": "control room",
        "weight": 5
      },
      {
        "value": "coolant stack",
        "weight": 5
      },
      {
        "value": "shielding",
        "weight": 3
      }
    ],
    "vulture_squad_location": [
      {
        "value": "barracks",
        "weight": 5
      },
      {
        "value": "hanger",
        "weight": 5
      },
      {
        "value": "indoor flybot testing facility",
        "weight": 5
      },
      {
        "value": "battle readiness exercise field",
        "weight": 5
      }
    ],
    "troubleshooter_location": [
      {
        "value": "outer lobby",
        "weight": 5
      },
      {
        "value": "firing range",
        "weight": 5
      },
      {
        "value": "briefing rooms",
        "weight": 5
      },
      {
        "value": "dispatch",
        "weight": 5
      }
    ],
    "research_topic": [
      {
        "value": "building gadgets",
        "weight": 1
      },
      {
        "value": "biochemistry studies",
        "weight": 1
      }
    ],
    "booth_type": [
      {
        "value": "confession",
        "weight": 1
      },
      {
        "value": "information",
        "weight": 1
      }
    ],
    "duct_type": [
      {
        "value": "enviro conditioning",
        "weight": 1
      },
      {
        "value": "maintenance",
        "weight": 1
      }
    ],
    "missle_silo_status": [
      {
        "value": "active",
        "weight": 1
      },
      {
        "value": "decommissioned",
        "weight": 1
      }
    ],
    "shaft_type": [
      {
        "value": "transtube",
        "weight": 10
      },
      {
        "value": "waste channel",
        "weight": 4
      },
      {
        "value": "wiring conduit",
        "weight": 6
      }
    ],
    "underplex_location": [
      {
        "value": "derelict rooms",
        "weight": 1
      },
      {
        "value": "abandoned shafts",
        "weight": 1
      },
      {
        "value": "sewers",
        "weight": 1
      }
    ],
    "character_sheet": [
      {
        "value": "secret society: {$secret_society}, mutant power: {mutant_power}, personality: {$personality}, job type: {$job_type}, current status: {$threat_level} {$role_in_mission}",
        "weight": 1
      }
    ],
    "threat_level": [
      {
        "value": "{safe_threat}",
        "weight": 1
      },
      {
        "value": "{dangerous_threat}",
        "weight": 1
      },
      {
        "value": "{unusual_threat}",
        "weight": 1
      }
    ],
    "safe_threat": [
      {
        "value": "Drugged (sandallathon, visomorpain)",
        "weight": 1
      },
      {
        "value": "Gullible (worryingly lacking in paranoia)",
        "weight": 1
      },
      {
        "value": "Amicable, Self-Interested, Ordinary",
        "weight": 1
      },
      {
        "value": "Meticulous, Obsessive-Compulsive",
        "weight": 1
      },
      {
        "value": "Stumbling, Prone-To-Breakage, Awkward",
        "weight": 1
      }
    ],
    "dangerous_threat": [
      {
        "value": "Paranoid (armed with {weapon} and {armor})",
        "weight": 1
      },
      {
        "value": "Drugged (thymoglandin, hydropsionic acid)",
        "weight": 1
      },
      {
        "value": "Buzzed (high on Wakey Wakey)",
        "weight": 1
      },
      {
        "value": "Wild-eyed, Frenized, Incoherent",
        "weight": 1
      },
      {
        "value": "Psychotic, Kill-Crush-Smash-Destroy",
        "weight": 1
      }
    ],
    "unusual_threat": [
      {
        "value": "Quiety delusional",
        "weight": 1
      },
      {
        "value": "'Demon'-Possessed",
        "weight": 1
      },
      {
        "value": "Panicky, Lacking focus, Hyperactive",
        "weight": 1
      },
      {
        "value": "Drugged (rolactin, dynomorphin, xanitrick)",
        "weight": 1
      },
      {
        "value": "Dreamy, Dazed",
        "weight": 1
      }
    ],
    "role_in_mission": [
      {
        "value": "Information Source",
        "weight": 1
      },
      {
        "value": "Bureaucratic Obstacle",
        "weight": 1
      },
      {
        "value": "Physical Threat",
        "weight": 1
      },
      {
        "value": "Sadistic Hinderance",
        "weight": 1
      },
      {
        "value": "Mental Threat",
        "weight": 1
      }
    ],
    "secret_project": [
      {
        "value": "Project {codename} (an attempt to {loyal_action})",
        "weight": 1
      }
    ],
    "loyal_action": [
      {
        "value": "increase happiness throughout {@sector_name}",
        "weight": 1
      },
      {
        "value": "decrease the number of traitors in {@sector_name}",
        "weight": 1
      },
      {
        "value": "make {@sector_name} more efficient",
        "weight": 1
      },
      {
        "value": "identify and classify mutants throughout {@sector_name}",
        "weight": 1
      },
      {
        "value": "invent new, more exciting flavours of Bouncy Bubble Beverage",
        "weight": 1
      },
      {
        "value": "build a new type of warbot, more powerful than ever before",
        "weight": 1
      },
      {
        "value": "improve surveillance throughout {@sector_name}",
        "weight": 1
      },
      {
        "value": "implement more rationing programs",
        "weight": 1
      },
      {
        "value": "impose budget cuts throughout {@sector_name} as part of an austerity scheme",
        "weight": 1
      },
      {
        "value": "improve security screening procedures in {@sector_name}",
        "weight": 1
      },
      {
        "value": "make citizens more compliant",
        "weight": 1
      }
    ],
    "underdog_goal": [
      {
        "value": "{do_evil_scheme} out of {deadly_sin}",
        "weight": 1
      }
    ],
    "cause_of_feud": [
      {
        "value": "{@building_name} is a key cornerstone in {secret_project} - and both {@overdog_name} and {@underdog_name} were assigned to work on this project. However, both clones realize that the project is about to fail horribly...and that there needs to be a scapegoat to blame the failure on. Both citizens are planning to blame each other.",
        "weight": 1
      },
      {
        "value": "{@building_name} is a key cornerstone in {secret_project} - and {@overdog_name} was assigned to work on this project. The project was a complete success, and The Computer plans on rolling it out across the rest of the complex. However, {@underdog_name} is suspicious, thinking that this project's 'success' is actually due to support from treasonous elements. {@underdog_name} is verifying their  suspicions and hopes to bring down the traitorous scum {@overdog_name}.",
        "weight": 1
      },
      {
        "value": "{@building_name} is a key cornerstone in {secret_project} - and {@overdog_name} was assigned to work on this project. However, {@underdog_name} is concerned that this project might undermine their own goals. As a result, {@underdog_name} is attempting to undermine the project through covert sabotage. {@overdog_name} wants to stop this sabotage and allow their project to be completed, without any interruption.",
        "weight": 1
      },
      {
        "value": "{@underdog_name} is a key supporter of {secret_project}...however this project is quickly running of resources. To ensure that the project can be successfully completed, {@underdog_name} wants to take over {@building_name} so they can use its resources. {@overdog_name}, however, is resisting {@underdog_name}'s schemes, as they do not want to lose their resources to support such a dubious endeavour.",
        "weight": 1
      },
      {
        "value": "{@building_name} is a very strategic location in {@sector_name}, and so {@overdog_name} and {@underdog_name} wants to to take over this building for their own devious purposes. {@overdog_name} had recently took over this place from the previous occupants, and does not want to lose their new prize so easily.",
        "weight": 1
      },
      {
        "value": "{@building_name} is a very strategic location in {@sector_name}, and both {@overdog_name} and {@underdog_name} ran this location on behalf of a common VIOLET-clearance patron. That patron's clone template was just erased for treason, meaning that there's no more common ground between {@overdog_name} and {@underdog_name}. All the minor grudges and covert dealings are now exposed, and a brief and bloody power struggle is about to begin...",
        "weight": 1
      },
      {
        "value": "{@building_name} is a very strategic location in {@sector_name}, so both {@overdog_name} and {@underdog_name} worked together to take over this building for themselves, thereby throwing out the previous occupants out. {@overdog_name} then betrayed the power-sharing agreement, seizing full control over {@building_name} and kicking {@underdog_name} out. {@underdog_name} wants payback (goal: {underdog_goal}).",
        "weight": 1
      },
      {
        "value": "{@building_name} is a very strategic location in {@sector_name}, so {@overdog_name} decided to take over this location by framing its previous owner ({@underdog_name}) for treason. The scheme was a complete success, but now {@underdog_name} wants revenge (goal: {underdog_goal}).",
        "weight": 1
      },
      {
        "value": "{@building_name} was once a very strategic location in {@sector_name}, but times have since changed, and power have shifted to new places. {@overdog_name} merely keeps control over {@building_name} for  sentimental reasons. However, {@underdog_name} seems to also have a personal grudge with {@overdog_name} (also for sentimental reasons)...and wants to finally complete this grudge (goal: {underdog_goal}).",
        "weight": 1
      },
      {
        "value": "{@building_name} is a key cornerstone in {secret_project} - and both {@overdog_name} and {@underdog_name} were assigned to work on this project. The project was a complete success, and The Computer plans on rolling it out across the rest of the complex. However, {@overdog_name} stole all the credit for working on this successful project, causing {@underdog_name} to feel jealous. They now seek revenge (goal: {underdog_goal}).",
        "weight": 1
      }
    ],
    "background": [
      {
        "value": "The mission will take place in {@building_name}, {location.indefinite_article} in Sector {@sector_name}. {@overdog_name} ({character_sheet}) currently controls {@building_name} with an iron fist. {@overdog_name}'s ultimate goal is to {$secret_agenda}.\n\n{@overdog_name} has a problem though. And that problem is {@underdog_name} ({character_sheet}). {@underdog_name}'s ultimate goal is to {$secret_agenda}.\n\n{cause_of_feud}\n\nIt is this conflict between {@overdog_name} and {@underdog_name} that the Troubleshooters must deal with if they are to complete the mission successfully.\n\n{@overdog_name} also has some personal possessions - Project {@overdog_bot_codename} ({@overdog_bot.indefinite_article}) and Project {@overdog_object_codename} ({overdog_object.indefinite_article}). These possessions could be used to help defend {@building_name} from the threat of {@underdog_name}...but could also prove to be a danger.",
        "weight": 1
      }
    ],
    "overdog_bot": [
      {
        "value": "{robot}",
        "weight": 1
      }
    ],
    "overdog_bot_codename": [
      {
        "value": "{codename}",
        "weight": 1
      }
    ],
    "overdog_object": [
      {
        "value": "{valuable_object}",
        "weight": 1
      }
    ],
    "overdog_object_codename": [
      {
        "value": "{codename}",
        "weight": 1
      }
    ],
    "secret_agenda": [
      {
        "value": "manipulate The Computer’s local CompNode (and to hide evidence of their manipulation)",
        "weight": 1
      },
      {
        "value": "cover up an R&D experiment that they built - the experiment had gone horribly {wrong}",
        "weight": 1
      },
      {
        "value": "cover up a secret society mission that went horribly {wrong}",
        "weight": 1
      },
      {
        "value": "help expand the might of their rapidly-growing {service_group} firm (thereby expanding their personal power in the process)",
        "weight": 1
      },
      {
        "value": "make their secret society more powerful",
        "weight": 1
      },
      {
        "value": "promote an extreme form of mutant supremacy - only their kind of mutants dominate, and normal humans and all other kinds of mutants subservient",
        "weight": 1
      },
      {
        "value": "cause enough damage in order to procure a fat service-group repair contract for their rapidly-growing {service_group} firm",
        "weight": 1
      },
      {
        "value": "secure valuable supplies in order to run a credit-making scheme (such as a lottery or a IR Market)",
        "weight": 1
      },
      {
        "value": "conspire against The Computer",
        "weight": 1
      },
      {
        "value": "save their {service_group} firm (the firm has fallen into strangling bureaucratic torpor and must now be massively overhauled or terminated)",
        "weight": 1
      },
      {
        "value": "enforce the rules and regulations of {service_group}, even if it means acting in imprudent ways to get the paperwork filled out",
        "weight": 1
      },
      {
        "value": "cover up a disaster at their {service_group} firm (which is overproducing, underproducing, or doing something strange to their product/service)",
        "weight": 1
      },
      {
        "value": "cover up the fact that they are secretly {robot.indefinite_article}",
        "weight": 1
      },
      {
        "value": "secure more and more power for their own sake",
        "weight": 1
      },
      {
        "value": "conspire for the sake of conspiracy - they have long ago given up their old beliefs and now wants to play the Great Game in Alpha Complex",
        "weight": 1
      },
      {
        "value": "cause chaos and anarchy in the Complex so that they can more easily dominate society",
        "weight": 1
      },
      {
        "value": "bring Alpha Complex to a state of mechanistic perfection, suppressing individual freedom to create a true utopa",
        "weight": 1
      },
      {
        "value": "loyally support The Computer and its High Programmers (even they have to use unapproved channels)",
        "weight": 1
      },
      {
        "value": "secure *control* over citizens of Alpha Complex - not simply power (for power can come solely from a fist or a gun); this control would likely require some form of mind control",
        "weight": 1
      },
      {
        "value": "prepare Alpha Complex for colonization and subversion by some external enemy (aliens? mutants from the Outdoors? sentient vatslime?)",
        "weight": 1
      },
      {
        "value": "follow orders from the Old Reckoning leadership who managed to survive the Global Die-Off by using cryogenics",
        "weight": 1
      },
      {
        "value": "obey the orders of a traitorous meme virus created by the {$secret_society} secret society",
        "weight": 1
      },
      {
        "value": "genuinely improve the lot of INFRAREDs in Alpha Complex",
        "weight": 1
      },
      {
        "value": "cover up the fact that they're...um...dead (their identity has since been stolen by traitors from the {secret_society} society)",
        "weight": 1
      }
    ],
    "deadly_sin": [
      {
        "value": "pride",
        "weight": 1
      },
      {
        "value": "envy",
        "weight": 1
      },
      {
        "value": "gluttony",
        "weight": 1
      },
      {
        "value": "greed",
        "weight": 1
      },
      {
        "value": "anger",
        "weight": 1
      },
      {
        "value": "a burning desire for power",
        "weight": 1
      },
      {
        "value": "wrath",
        "weight": 1
      }
    ],
    "do_evil_scheme": [
      {
        "value": "erase {@overdog_name}'s clone line",
        "weight": 1
      },
      {
        "value": "overthrow {@overdog_name} and take {@building_name} for themselves",
        "weight": 1
      },
      {
        "value": "weaken {@overdog_name}'s powerbase by destroying {@building_name}",
        "weight": 1
      },
      {
        "value": "blackmail {@overdog_name}",
        "weight": 1
      },
      {
        "value": "frame {@overdog_name} for treason",
        "weight": 1
      }
    ],
    "wrong": [
      {
        "value": "wrong",
        "weight": 1
      },
      {
        "value": "right",
        "weight": 1
      }
    ],
    "personality": [
      {
        "value": "Bored Bureaucrat",
        "weight": 1
      },
      {
        "value": "Unlikely Academic",
        "weight": 1
      },
      {
        "value": "Passive-Aggressive Clerk",
        "weight": 1
      },
      {
        "value": "Jovial Amateur",
        "weight": 1
      },
      {
        "value": "Bluff Professional",
        "weight": 1
      },
      {
        "value": "Ambitious Boss",
        "weight": 1
      },
      {
        "value": "Powerhungry Boss",
        "weight": 1
      },
      {
        "value": "Burned-out Workaholic",
        "weight": 1
      },
      {
        "value": "Disinterested Boss",
        "weight": 1
      },
      {
        "value": "Rebellious Naysayer",
        "weight": 1
      },
      {
        "value": "Recalled Veteran",
        "weight": 1
      },
      {
        "value": "Charismatic Leader",
        "weight": 1
      },
      {
        "value": "Evangelist “Team Player”",
        "weight": 1
      },
      {
        "value": "Jaded Outcast",
        "weight": 1
      },
      {
        "value": "Foreign Contractor",
        "weight": 1
      },
      {
        "value": "Detestable Visionary",
        "weight": 1
      },
      {
        "value": "Giggly Social Climber",
        "weight": 1
      },
      {
        "value": "Shameless Brown-noser",
        "weight": 1
      },
      {
        "value": "Punctilious Charmer",
        "weight": 1
      },
      {
        "value": "Useless Boss",
        "weight": 1
      },
      {
        "value": "War Hero",
        "weight": 1
      },
      {
        "value": "Insignificant Layman",
        "weight": 1
      },
      {
        "value": "Corporate Suit",
        "weight": 1
      },
      {
        "value": "Iron-Fisted Brute",
        "weight": 1
      },
      {
        "value": "Ideological Crusader",
        "weight": 1
      },
      {
        "value": "Great Compromiser",
        "weight": 1
      },
      {
        "value": "Cloak-and-Dagger Schemer",
        "weight": 1
      },
      {
        "value": "Administrative Genius",
        "weight": 1
      },
      {
        "value": "Efficient Sociopath",
        "weight": 1
      },
      {
        "value": "Crooked Kleptocrat",
        "weight": 1
      },
      {
        "value": "Dismal Enigma",
        "weight": 1
      }
    ],
    "clearance": [
      {
        "value": "INFRARED",
        "weight": 3
      },
      {
        "value": "RED",
        "weight": 3
      },
      {
        "value": "ORANGE",
        "weight": 2
      },
      {
        "value": "YELLOW",
        "weight": 2
      },
      {
        "value": "GREEN",
        "weight": 2
      },
      {
        "value": "BLUE",
        "weight": 2
      },
      {
        "value": "INDIGO",
        "weight": 2
      },
      {
        "value": "VIOLET",
        "weight": 2
      },
      {
        "value": "ULTRAVIOLET",
        "weight": 2
      }
    ],
    "object": [
      {
        "value": "{safe_object}",
        "weight": 1
      },
      {
        "value": "{dangerous_object}",
        "weight": 3
      },
      {
        "value": "{unusual_object}",
        "weight": 2
      },
      {
        "value": "{weapon}",
        "weight": 2
      },
      {
        "value": "{armor}",
        "weight": 2
      },
      {
        "value": "{robot}",
        "weight": 2
      },
      {
        "value": "bot brain",
        "weight": 1
      },
      {
        "value": "{valuable_object}",
        "weight": 3
      },
      {
        "value": "{experimental_object}",
        "weight": 1
      }
    ],
    "safe_object": [
      {
        "value": "5-meter ladder (not collapsible)",
        "weight": 1
      },
      {
        "value": "12 sheets of black rubber",
        "weight": 1
      },
      {
        "value": "447 ‘The Computer Is Your Friend’ metal placards (gross weight 122 kg)",
        "weight": 1
      },
      {
        "value": "Anaesthesia intubation fiberscope",
        "weight": 1
      },
      {
        "value": "bathroom hand dryer",
        "weight": 1
      },
      {
        "value": "bucket and mop",
        "weight": 1
      },
      {
        "value": "colonoscopy video tubes",
        "weight": 1
      },
      {
        "value": "crate of 144 room deodorizers",
        "weight": 1
      },
      {
        "value": "grating for overhead fluorescent lighting",
        "weight": 1
      },
      {
        "value": "grease exhaust hood",
        "weight": 1
      },
      {
        "value": "hose reel",
        "weight": 1
      },
      {
        "value": "industrial washer and dryer",
        "weight": 1
      },
      {
        "value": "mess hall bench",
        "weight": 1
      },
      {
        "value": "metric ton of bolts and braces for INFRARED barracks cots",
        "weight": 1
      },
      {
        "value": "office reception counter",
        "weight": 1
      },
      {
        "value": "pallet of packaged mucus specimen traps",
        "weight": 1
      },
      {
        "value": "refrigerator",
        "weight": 1
      },
      {
        "value": "restroom floor mats",
        "weight": 1
      },
      {
        "value": "steel cubicle (broken down)",
        "weight": 1
      }
    ],
    "dangerous_object": [
      {
        "value": "Botulin toxin",
        "weight": 1
      },
      {
        "value": "can of B3 laced with MemWipe",
        "weight": 1
      },
      {
        "value": "Communist PDC (activates at random to shout recorded Communist propaganda)",
        "weight": 1
      },
      {
        "value": "Dangerous creature from Outdoors, on leash",
        "weight": 1
      },
      {
        "value": "IntSec homing beacon, disguised as {safe_object.indefinite_article}",
        "weight": 1
      },
      {
        "value": "autographed copy of *Memories of an Unregistered Mutant Life* by Frank-B-HJN-6",
        "weight": 1
      },
      {
        "value": "Open beaker of bubbly green goo labeled BIOHAZARD—DO NOT OPEN!",
        "weight": 1
      },
      {
        "value": "Mutagen-contaminated syringes",
        "weight": 1
      },
      {
        "value": "miniature {robot}, prone to kamikaze attacks",
        "weight": 1
      },
      {
        "value": "Old Reckoning artificat",
        "weight": 1
      },
      {
        "value": "Plutonium",
        "weight": 1
      },
      {
        "value": "Sapient, mobile R&D bomb that gloms onto PC’s arm",
        "weight": 1
      },
      {
        "value": "Stoppered vial of poison gas",
        "weight": 1
      },
      {
        "value": "Super-lubricant, seeps through any container",
        "weight": 1
      },
      {
        "value": "Sweaty dynamite",
        "weight": 1
      },
      {
        "value": "Telepathic Subconscious Message Emitter (currently stuck on {emitter_mood})",
        "weight": 1
      },
      {
        "value": "Vat of liquid nitrogen (freezes solid anything living upon contact)",
        "weight": 1
      },
      {
        "value": "Vermin poison",
        "weight": 1
      },
      {
        "value": "Vial of acid",
        "weight": 1
      },
      {
        "value": "Weaponized anthrax or bioweapon",
        "weight": 1
      }
    ],
    "unusual_object": [
      {
        "value": "All-surface black marker pen",
        "weight": 1
      },
      {
        "value": "Beach umbrella",
        "weight": 1
      },
      {
        "value": "Treasonous yet seductive Old Reckoning recorded music",
        "weight": 1
      },
      {
        "value": "Weird new R&D toy for Junior Citizen creches—twisty cube-thingy puzzle",
        "weight": 1
      },
      {
        "value": "Tin of weatherproofing wax",
        "weight": 1
      },
      {
        "value": "Stapler (clearance RED)",
        "weight": 1
      },
      {
        "value": "Tin of weatherproofing wax",
        "weight": 1
      },
      {
        "value": "3.3-meter pole",
        "weight": 1
      },
      {
        "value": "Bottle of foaming handsoap",
        "weight": 1
      },
      {
        "value": "Box of plastic building blocks",
        "weight": 1
      },
      {
        "value": "Bungee cord",
        "weight": 1
      },
      {
        "value": "Cheese grater",
        "weight": 1
      },
      {
        "value": "Globe",
        "weight": 1
      },
      {
        "value": "Hand buzzer",
        "weight": 1
      },
      {
        "value": "High-Frequency whistle",
        "weight": 1
      },
      {
        "value": "Laser pointer",
        "weight": 1
      },
      {
        "value": "Magnet",
        "weight": 1
      },
      {
        "value": "Musical instrument",
        "weight": 1
      },
      {
        "value": "Old Reckoning encylopedia volume",
        "weight": 1
      },
      {
        "value": "Pencil sharpener",
        "weight": 1
      },
      {
        "value": "Rolodex with Old Reckoning names",
        "weight": 1
      }
    ],
    "valuable_object": [
      {
        "value": "Aerosol paint stripper",
        "weight": 1
      },
      {
        "value": "Certificate for free clone backup",
        "weight": 1
      },
      {
        "value": "Collectible six-pack of ‘B2’ - Bubble Beverage",
        "weight": 1
      },
      {
        "value": "Combination for a security lock",
        "weight": 1
      },
      {
        "value": "Deluxe PDC with enhanced infrared-light camera, shoots accurately in total darkness",
        "weight": 1
      },
      {
        "value": "Dossier about {secret_society} (written by {random_target})",
        "weight": 1
      },
      {
        "value": "Flybot authorization dongle",
        "weight": 1
      },
      {
        "value": "Front-row tickets to Championship FunBall game",
        "weight": 1
      },
      {
        "value": "Geiger counter",
        "weight": 1
      },
      {
        "value": "High-clearance ME Card",
        "weight": 1
      },
      {
        "value": "High-clearance laser barrel",
        "weight": 1
      },
      {
        "value": "Large-denomination plasticred",
        "weight": 1
      },
      {
        "value": "Old Reckoning atlas, dated 2097",
        "weight": 1
      },
      {
        "value": "Old R&D File: *Mutant Power Origins*",
        "weight": 1
      },
      {
        "value": "Packet of freeze-dried fruit",
        "weight": 1
      },
      {
        "value": "Bucket of Paint",
        "weight": 1
      },
      {
        "value": "Blackmail material on {random_target}",
        "weight": 1
      },
      {
        "value": "Radiation-sensitive badge",
        "weight": 1
      },
      {
        "value": "Signed photo of Tella-O-MLY-1",
        "weight": 1
      },
      {
        "value": "Treason file on {random_target}",
        "weight": 1
      }
    ],
    "syllabe": [
      {
        "value": "the",
        "weight": 1
      },
      {
        "value": "ing",
        "weight": 1
      },
      {
        "value": "er",
        "weight": 1
      },
      {
        "value": "a",
        "weight": 1
      },
      {
        "value": "ly",
        "weight": 1
      },
      {
        "value": "ed",
        "weight": 1
      },
      {
        "value": "i",
        "weight": 1
      },
      {
        "value": "es",
        "weight": 1
      },
      {
        "value": "re",
        "weight": 1
      },
      {
        "value": "tion",
        "weight": 1
      },
      {
        "value": "in",
        "weight": 1
      },
      {
        "value": "e",
        "weight": 1
      },
      {
        "value": "con",
        "weight": 1
      },
      {
        "value": "y",
        "weight": 1
      },
      {
        "value": "ter",
        "weight": 1
      },
      {
        "value": "ex",
        "weight": 1
      },
      {
        "value": "al",
        "weight": 1
      },
      {
        "value": "de",
        "weight": 1
      },
      {
        "value": "com",
        "weight": 1
      },
      {
        "value": "o",
        "weight": 1
      },
      {
        "value": "di",
        "weight": 1
      },
      {
        "value": "en",
        "weight": 1
      },
      {
        "value": "an",
        "weight": 1
      },
      {
        "value": "ty",
        "weight": 1
      },
      {
        "value": "ry",
        "weight": 1
      },
      {
        "value": "u",
        "weight": 1
      },
      {
        "value": "ti",
        "weight": 1
      },
      {
        "value": "ri",
        "weight": 1
      },
      {
        "value": "be",
        "weight": 1
      },
      {
        "value": "per",
        "weight": 1
      },
      {
        "value": "to",
        "weight": 1
      },
      {
        "value": "pro",
        "weight": 1
      },
      {
        "value": "ac",
        "weight": 1
      },
      {
        "value": "ad",
        "weight": 1
      },
      {
        "value": "ar",
        "weight": 1
      },
      {
        "value": "ers",
        "weight": 1
      },
      {
        "value": "ment",
        "weight": 1
      },
      {
        "value": "or",
        "weight": 1
      },
      {
        "value": "tions",
        "weight": 1
      },
      {
        "value": "ble",
        "weight": 1
      },
      {
        "value": "der",
        "weight": 1
      },
      {
        "value": "ma",
        "weight": 1
      },
      {
        "value": "na",
        "weight": 1
      },
      {
        "value": "si",
        "weight": 1
      },
      {
        "value": "un",
        "weight": 1
      },
      {
        "value": "at",
        "weight": 1
      },
      {
        "value": "dis",
        "weight": 1
      },
      {
        "value": "ca",
        "weight": 1
      },
      {
        "value": "cal",
        "weight": 1
      },
      {
        "value": "man",
        "weight": 1
      },
      {
        "value": "ap",
        "weight": 1
      },
      {
        "value": "po",
        "weight": 1
      },
      {
        "value": "sion",
        "weight": 1
      },
      {
        "value": "vi",
        "weight": 1
      },
      {
        "value": "el",
        "weight": 1
      },
      {
        "value": "est",
        "weight": 1
      },
      {
        "value": "la",
        "weight": 1
      },
      {
        "value": "lar",
        "weight": 1
      },
      {
        "value": "pa",
        "weight": 1
      },
      {
        "value": "ture",
        "weight": 1
      },
      {
        "value": "for",
        "weight": 1
      },
      {
        "value": "is",
        "weight": 1
      },
      {
        "value": "mer",
        "weight": 1
      },
      {
        "value": "pe",
        "weight": 1
      },
      {
        "value": "ra",
        "weight": 1
      },
      {
        "value": "so",
        "weight": 1
      },
      {
        "value": "ta",
        "weight": 1
      },
      {
        "value": "as",
        "weight": 1
      },
      {
        "value": "col",
        "weight": 1
      },
      {
        "value": "fi",
        "weight": 1
      },
      {
        "value": "ful",
        "weight": 1
      },
      {
        "value": "get",
        "weight": 1
      },
      {
        "value": "low",
        "weight": 1
      },
      {
        "value": "ni",
        "weight": 1
      },
      {
        "value": "par",
        "weight": 1
      },
      {
        "value": "son",
        "weight": 1
      },
      {
        "value": "tle",
        "weight": 1
      },
      {
        "value": "day",
        "weight": 1
      },
      {
        "value": "ny",
        "weight": 1
      },
      {
        "value": "pen",
        "weight": 1
      },
      {
        "value": "pre",
        "weight": 1
      },
      {
        "value": "tive",
        "weight": 1
      },
      {
        "value": "car",
        "weight": 1
      },
      {
        "value": "ci",
        "weight": 1
      },
      {
        "value": "mo",
        "weight": 1
      },
      {
        "value": "an",
        "weight": 1
      },
      {
        "value": "aus",
        "weight": 1
      },
      {
        "value": "pi",
        "weight": 1
      },
      {
        "value": "se",
        "weight": 1
      },
      {
        "value": "ten",
        "weight": 1
      },
      {
        "value": "tor",
        "weight": 1
      },
      {
        "value": "ver",
        "weight": 1
      },
      {
        "value": "ber",
        "weight": 1
      },
      {
        "value": "can",
        "weight": 1
      },
      {
        "value": "dy",
        "weight": 1
      },
      {
        "value": "et",
        "weight": 1
      },
      {
        "value": "it",
        "weight": 1
      },
      {
        "value": "mu",
        "weight": 1
      },
      {
        "value": "no",
        "weight": 1
      },
      {
        "value": "ple",
        "weight": 1
      },
      {
        "value": "cu",
        "weight": 1
      },
      {
        "value": "fac",
        "weight": 1
      },
      {
        "value": "fer",
        "weight": 1
      },
      {
        "value": "gen",
        "weight": 1
      },
      {
        "value": "ic",
        "weight": 1
      },
      {
        "value": "land",
        "weight": 1
      },
      {
        "value": "light",
        "weight": 1
      },
      {
        "value": "ob",
        "weight": 1
      },
      {
        "value": "of",
        "weight": 1
      },
      {
        "value": "pos",
        "weight": 1
      },
      {
        "value": "tain",
        "weight": 1
      },
      {
        "value": "den",
        "weight": 1
      },
      {
        "value": "ings",
        "weight": 1
      },
      {
        "value": "mag",
        "weight": 1
      },
      {
        "value": "ments",
        "weight": 1
      },
      {
        "value": "set",
        "weight": 1
      },
      {
        "value": "some",
        "weight": 1
      },
      {
        "value": "sub",
        "weight": 1
      },
      {
        "value": "sur",
        "weight": 1
      },
      {
        "value": "ters",
        "weight": 1
      },
      {
        "value": "tu",
        "weight": 1
      },
      {
        "value": "af",
        "weight": 1
      },
      {
        "value": "au",
        "weight": 1
      },
      {
        "value": "cy",
        "weight": 1
      },
      {
        "value": "fa",
        "weight": 1
      },
      {
        "value": "im",
        "weight": 1
      },
      {
        "value": "li",
        "weight": 1
      },
      {
        "value": "lo",
        "weight": 1
      },
      {
        "value": "men",
        "weight": 1
      },
      {
        "value": "min",
        "weight": 1
      },
      {
        "value": "mon",
        "weight": 1
      },
      {
        "value": "op",
        "weight": 1
      },
      {
        "value": "out",
        "weight": 1
      },
      {
        "value": "rec",
        "weight": 1
      },
      {
        "value": "ro",
        "weight": 1
      },
      {
        "value": "sen",
        "weight": 1
      },
      {
        "value": "side",
        "weight": 1
      },
      {
        "value": "tal",
        "weight": 1
      },
      {
        "value": "tic",
        "weight": 1
      },
      {
        "value": "ties",
        "weight": 1
      },
      {
        "value": "ward",
        "weight": 1
      },
      {
        "value": "age",
        "weight": 1
      },
      {
        "value": "ba",
        "weight": 1
      },
      {
        "value": "but",
        "weight": 1
      },
      {
        "value": "cit",
        "weight": 1
      },
      {
        "value": "cle",
        "weight": 1
      },
      {
        "value": "co",
        "weight": 1
      },
      {
        "value": "cov",
        "weight": 1
      },
      {
        "value": "daq",
        "weight": 1
      },
      {
        "value": "dif",
        "weight": 1
      },
      {
        "value": "ence",
        "weight": 1
      },
      {
        "value": "ern",
        "weight": 1
      },
      {
        "value": "eve",
        "weight": 1
      },
      {
        "value": "hap",
        "weight": 1
      },
      {
        "value": "ies",
        "weight": 1
      },
      {
        "value": "ket",
        "weight": 1
      },
      {
        "value": "lec",
        "weight": 1
      },
      {
        "value": "main",
        "weight": 1
      },
      {
        "value": "mar",
        "weight": 1
      },
      {
        "value": "mis",
        "weight": 1
      },
      {
        "value": "my",
        "weight": 1
      },
      {
        "value": "nal",
        "weight": 1
      },
      {
        "value": "ness",
        "weight": 1
      },
      {
        "value": "ning",
        "weight": 1
      },
      {
        "value": "nu",
        "weight": 1
      },
      {
        "value": "oc",
        "weight": 1
      },
      {
        "value": "pres",
        "weight": 1
      },
      {
        "value": "sup",
        "weight": 1
      },
      {
        "value": "te",
        "weight": 1
      },
      {
        "value": "ted",
        "weight": 1
      },
      {
        "value": "tem",
        "weight": 1
      },
      {
        "value": "tin",
        "weight": 1
      },
      {
        "value": "tri",
        "weight": 1
      },
      {
        "value": "tro",
        "weight": 1
      },
      {
        "value": "up",
        "weight": 1
      }
    ],
    "codename": [
      {
        "value": "{$syllabe.capitalize}{$syllabe}{$syllabe}",
        "weight": 1
      }
    ],
    "experimental_object": [
      {
        "value": "Project {codename}, type: {item_description} (GM Note: {item_secret})",
        "weight": 1
      }
    ],
    "item_description": [
      {
        "value": "Behavior modifier (hypnosis devices, pheromone emitters, subsonic/supersonic irritants)",
        "weight": 1
      },
      {
        "value": "Communications, unusual type (telepathy gun, telephone that attaches miles-long wire to body of recipient, holographic mime projector, tight-beam loudspeaker)",
        "weight": 1
      },
      {
        "value": "Mobility enabler (skates, boots, motorized shopping cart, vehicle, jet pack, propeller helmet, frictionless shoe soles)",
        "weight": 1
      },
      {
        "value": "Sensor (detects something hitherto  undetectable or inconvenient to detect)",
        "weight": 1
      },
      {
        "value": "Economic (credit license analyzer, plasticred duplicator, IR market activity scanner)",
        "weight": 1
      }
    ],
    "item_secret": [
      {
        "value": "Only affects imaginary targets",
        "weight": 1
      },
      {
        "value": "Occasionally explodes",
        "weight": 1
      },
      {
        "value": "Gradually poisons/irradiates user",
        "weight": 1
      },
      {
        "value": "Turns on/off inappropriately",
        "weight": 1
      },
      {
        "value": "Enrages citizens against user",
        "weight": 1
      },
      {
        "value": "Excessive use constitutes treason",
        "weight": 1
      },
      {
        "value": "Intelligent; neurotic or frightened",
        "weight": 1
      },
      {
        "value": "Picks up targets it’s not supposed to, who don’t like being picked up",
        "weight": 1
      },
      {
        "value": "Gradually mutates user",
        "weight": 1
      }
    ],
    "weapon": [
      {
        "value": "Truncheon (S5K impact), knife (S5K), brass knuckles (S5W), or any other low-tech melee weapon",
        "weight": 1
      },
      {
        "value": "Laser pistol (W3K energy); barrel color is {clearance}",
        "weight": 1
      },
      {
        "value": "Stun gun (stuns for one round)",
        "weight": 1
      },
      {
        "value": "Hand flamer (S3K energy)",
        "weight": 1
      },
      {
        "value": "Force sword (S3K energy)",
        "weight": 1
      },
      {
        "value": "Ice gun (S3K energy)",
        "weight": 1
      },
      {
        "value": "Slugthrower (with solid slug ammo)",
        "weight": 1
      },
      {
        "value": "Semi-automatic slugthrower (with solid slug ammo)",
        "weight": 1
      },
      {
        "value": "Energy pistol (W3K energy)",
        "weight": 1
      },
      {
        "value": "Sonic pistol (S3W energy)",
        "weight": 1
      },
      {
        "value": "Needle gun (S3W impact)",
        "weight": 1
      },
      {
        "value": "Gauss Gun (W3K energy)",
        "weight": 1
      },
      {
        "value": "Sonic Rifle (S3W energy)",
        "weight": 1
      },
      {
        "value": "Blaster (M3K energy)",
        "weight": 1
      },
      {
        "value": "Cone Rifle (with napalm ammo)",
        "weight": 1
      },
      {
        "value": "Flamethrower (S3K energy)",
        "weight": 1
      },
      {
        "value": "Plasma Generator (V1V energy)",
        "weight": 1
      },
      {
        "value": "Prototype {$weapon} (Due to using the latest bleeding-edge tech, the weapon can hit for one damage step above its maximum. However, it's also more prone to malfunctioning...or working too well.)",
        "weight": 1
      }
    ],
    "armor": [
      {
        "value": "Fake armor",
        "weight": 1
      },
      {
        "value": "Reflec",
        "weight": 1
      },
      {
        "value": "Kevlar",
        "weight": 1
      },
      {
        "value": "ArmorAll",
        "weight": 1
      },
      {
        "value": "Combat suit",
        "weight": 1
      },
      {
        "value": "Battle armor",
        "weight": 1
      },
      {
        "value": "Environmental Suit",
        "weight": 1
      },
      {
        "value": "Experimental Power vest (charged with high voltage; does S4K energy damage to attackers using bare hands, metal hand weapons or force swords)",
        "weight": 1
      },
      {
        "value": "Experimental Camouflage suit (works like Chameleon mutant power; one shot can render it completely useless)",
        "weight": 1
      },
      {
        "value": "Experimental Electromagnetic clothing (makes wearer a living magnet; can stick to metal walls; watch out for knives!)",
        "weight": 1
      },
      {
        "value": "Experimental Jet Suit (aerodynamic suit with jetpack)",
        "weight": 1
      },
      {
        "value": "Experimental Prismatic armor (E4; mirrored suit reflects energy attacks; wearer is most visible target around)",
        "weight": 1
      },
      {
        "value": "Prototype {$armor} (Due to using the latest bleeding-edge tech, the armor is much more protective than the standard version. Prevents injuries almost entirely. It’s also much more cumbersome.)",
        "weight": 1
      }
    ],
    "robot": [
      {
        "value": "metallic can that bleeps constantly (The Computer claims it’s extremely important)",
        "weight": 1
      },
      {
        "value": "scrubot",
        "weight": 1
      },
      {
        "value": "pharmabot (hovering sphere that injects drugs and dispenses pills)",
        "weight": 1
      },
      {
        "value": "Jackobot",
        "weight": 1
      },
      {
        "value": "Snooper (small hovering sphere that tracks a target's scent)",
        "weight": 1
      },
      {
        "value": "Robobutler (you rang, sir?)",
        "weight": 1
      },
      {
        "value": "Docbot Model 1",
        "weight": 1
      },
      {
        "value": "Docbot Model 5",
        "weight": 1
      },
      {
        "value": "Petbot",
        "weight": 1
      },
      {
        "value": "Teachbot",
        "weight": 1
      },
      {
        "value": "Psychbot Sanity Restoration Unit",
        "weight": 1
      },
      {
        "value": "Explodatron (small, nervous bot that exists to explode in hopeless situations, taking enemies and PCs with it)",
        "weight": 1
      },
      {
        "value": "Guardbot",
        "weight": 1
      },
      {
        "value": "Combot",
        "weight": 1
      },
      {
        "value": "Warbot",
        "weight": 1
      },
      {
        "value": "Mega {$robot}",
        "weight": 1
      }
    ],
    "mission_alert_delivery": [
      {
        "value": "Text message on PDC.",
        "weight": 5
      },
      {
        "value": "An INFRARED courier delivers alert {delivery_method}, seeks 10cr 'tip' for the delivery. Demeanor: {delivery_demenaor}.",
        "weight": 5
      },
      {
        "value": "Special ‘breaking news’ bulletin in middle of vidshow: {vidshow_part}. Identifies the PCs by name.",
        "weight": 1
      },
      {
        "value": "Mission is randomly assigned as a prize in a CruncheeTym algae chips packet.",
        "weight": 1
      },
      {
        "value": "Via high-frequency radio transmission that gives PCs excruciating headaches and sends petbots crazy with excitement.",
        "weight": 1
      },
      {
        "value": "Relayed through a public confession booth, read in the scrolling ‘Credit Due’ message on a vending machine or overheard in a communal area.",
        "weight": 1
      },
      {
        "value": "Announced over public address loudspeakers.",
        "weight": 1
      },
      {
        "value": "Via telepathic communication from unidentifiable source. The Computer knows nothing of this method, and will regard it with extreme suspicion.",
        "weight": 1
      },
      {
        "value": "Stamped upon the side of {dangerous_object.downcase_first_letter.indefinite_article}.",
        "weight": 1
      },
      {
        "value": "Anonymous hardcopy message slipped under door of PC’s {homebase}.",
        "weight": 1
      },
      {
        "value": "Scrawled across the wall in half-meter-high letters written in {mission_alert_paint}.",
        "weight": 1
      },
      {
        "value": "Via {robot} - {mission_alert_bot_status}.",
        "weight": 1
      }
    ],
    "mission_alert_status": [
      {
        "value": "The message is intact and correct.",
        "weight": 10
      },
      {
        "value": "The briefing location is wrong. {reason_for_tampering}",
        "weight": 5
      },
      {
        "value": "The briefing time is wrong. {reason_for_tampering}",
        "weight": 3
      },
      {
        "value": "The recognition password (to be given to briefing officer) is wrong. {reason_for_tampering}",
        "weight": 2
      }
    ],
    "reason_for_tampering": [
      {
        "value": "The correct information is missing, replaced by [INSERT DATA HERE] or similar. Secret society contacts or servile truckling to The Computer may fill in missing data.",
        "weight": 5
      },
      {
        "value": "The correct information is obscured by advertising (pop-up ad, jingle, viral marketing, etc.). Sponsoring advertiser may possibly have record of unaltered alert.",
        "weight": 5
      },
      {
        "value": "The correct information is replaced by extortion threat from anonymous hacker - \"Send 100cr to this Gray Subnet account and I'll send you the data.\"",
        "weight": 5
      },
      {
        "value": "The correct information is in machine-readable code, missing vowels, encrypted, etc. Computer Phreaks can help. The Computer doesn't see the problem.",
        "weight": 3
      },
      {
        "value": "Replaced by treasonous {$secret_society} propaganda.",
        "weight": 1
      },
      {
        "value": "Alert itself is damaging—text message contains software virus that crashes PDC or vidscreen, physical alert has toxins or is radioactive, etc.",
        "weight": 1
      }
    ],
    "delivery_method": [
      {
        "value": "verbally",
        "weight": 1
      },
      {
        "value": "hardcopy",
        "weight": 1
      }
    ],
    "delivery_demenaor": [
      {
        "value": "drugged",
        "weight": 10
      },
      {
        "value": "truckling",
        "weight": 3
      },
      {
        "value": "polite",
        "weight": 4
      },
      {
        "value": "in-your face friendly",
        "weight": 1
      },
      {
        "value": "cocky, \"I know more than I'm telling\", nudge-nudge",
        "weight": 1
      },
      {
        "value": "sullen, rude, suicidal",
        "weight": 1
      }
    ],
    "vidshow_part": [
      {
        "value": "boring part",
        "weight": 10
      },
      {
        "value": "good part",
        "weight": 8
      },
      {
        "value": "interrupts crucial revelation",
        "weight": 2
      }
    ],
    "emitter_mood": [
      {
        "value": "violent",
        "weight": 1
      },
      {
        "value": "suicidal",
        "weight": 1
      }
    ],
    "homebase": [
      {
        "value": "quarters",
        "weight": 10
      },
      {
        "value": "central entertainment room",
        "weight": 4
      },
      {
        "value": "workplace",
        "weight": 4
      },
      {
        "value": "bathroom",
        "weight": 2
      }
    ],
    "mission_alert_paint": [
      {
        "value": "black paint",
        "weight": 5
      },
      {
        "value": "low clearance paint",
        "weight": 3
      },
      {
        "value": "mid-clearance paint",
        "weight": 4
      },
      {
        "value": "high-clearance paint",
        "weight": 2
      },
      {
        "value": "Cold Fun",
        "weight": 4
      },
      {
        "value": "blood",
        "weight": 2
      }
    ],
    "mission_alert_bot_status": [
      {
        "value": "functional",
        "weight": 10
      },
      {
        "value": "malfunctioning",
        "weight": 5
      },
      {
        "value": "booby-trapped",
        "weight": 3
      },
      {
        "value": "smouldering wreckage",
        "weight": 2
      }
    ],
    "presidency_scope": [
      {
        "value": "Sector",
        "weight": 1
      },
      {
        "value": "Happiness",
        "weight": 1
      },
      {
        "value": "Hygiene",
        "weight": 1
      },
      {
        "value": "Aesthetics",
        "weight": 1
      },
      {
        "value": "Election",
        "weight": 1
      },
      {
        "value": "Cafeteria",
        "weight": 1
      },
      {
        "value": "Efficiency",
        "weight": 1
      }
    ],
    "briefing_room": [
      {
        "value": "Briefing officers behind opaque bulletproof glass, voices electronically filtered.",
        "weight": 1
      },
      {
        "value": "Briefing officers undercover; wary, paranoid; speak in evasive code-phrases.",
        "weight": 1
      },
      {
        "value": "Briefing officer is weird invalid (e.g., suspended in sound-dampening gel in a swimming pool communicating through a bizarre array of tubing).",
        "weight": 1
      },
      {
        "value": "Briefing occurs in a pitch black room, where the only source of light is from the corridor outside the briefing room filtering in under the door.",
        "weight": 1
      },
      {
        "value": "Briefing officer is hidden inside {robot.indefinite_article} chassis, communicating with an electronically filtered voice.",
        "weight": 1
      },
      {
        "value": "Officious, schoolmasterly briefing officer sitting at the head of a classroom with blackboard and chalk; tests PCs frequently.",
        "weight": 1
      },
      {
        "value": "Suspicious, twitchy briefing officers in highly defended position (e.g., seated atop a massive gun emplacement).",
        "weight": 1
      },
      {
        "value": "Bureaucratic snafu assigns briefing officer to the room adjacent to the PCs; won’t join PCs for fear of violating orders; shouts at the top of their voice to be heard, or conveys briefing information by notes, courier, Morse code, etc.",
        "weight": 1
      },
      {
        "value": "Briefing officer sits curled up and rocking backwards and forwards in the middle of the location; muttering under their breath.",
        "weight": 1
      },
      {
        "value": "Briefing officer sits with their back to the PCs; they passes notes to a terrified INFRARED citizen, who reads them aloud.",
        "weight": 1
      },
      {
        "value": "Briefing officer has left a recording device with the mission on it, but the mechanism is jammed at double speed with no rewind option.",
        "weight": 1
      },
      {
        "value": "Briefing officer is shot just after the PCs arrive and is replaced by a different officer who acts extremely shifty and refuses to answer questions.",
        "weight": 1
      },
      {
        "value": "Officer has serious coughing fits every few words, disrupting every sentence, and becomes increasingly angry with every request to repeat themselves.",
        "weight": 1
      },
      {
        "value": "Briefing officer is hiding inside an empty Cold Fun barrel and passes written notes out to the PCs through a small bunghole.",
        "weight": 1
      },
      {
        "value": "Officer skims through the entire briefing as if they expects those present to know the details already, then walks out without any questions.",
        "weight": 1
      },
      {
        "value": "Briefing officer whispers the briefing to the team leader and then expects him to pass it on in the style of Telephone or Chinese Whispers.",
        "weight": 1
      },
      {
        "value": "Briefing officer wears {armor} and fiddles with an exotic-looking {weapon}; expects attack at any moment.",
        "weight": 1
      },
      {
        "value": "Given in a transtube, on a recording with a folder of documents; recording self-destructs 5 seconds after stopping.",
        "weight": 1
      },
      {
        "value": "Briefing officer is dead on arrival and no one comes to replace him. May have notes on their body that describe the PCs’ mission.",
        "weight": 1
      },
      {
        "value": "The Computer conducts the briefing.",
        "weight": 1
      },
      {
        "value": "The briefing room is cordoned off with police who is currently interrogating the briefing officer (the officer himself doesn't know why he's being interrogated, what crime he's being accused of, or if he's being used as evidence to bring down some other criminal).  Halfway through the interrogation, the briefing officer makes a break for it using a nearby Autocar. Internal Security agents will later find his (abandoned) Autocar at a nearby hotel.",
        "weight": 1
      },
      {
        "value": "Briefing room is incredibly popular (known in 55 sectors as the 'best place to socialize'), with lots of conversations and discussions. However, it is also only capable for holding people for 15 minutes at a time, so expect a lot of conversations for 14 minutes followed by a 1-minute stampede as everyone runs for the door.",
        "weight": 1
      },
      {
        "value": "The briefing officer is richly informed and obsessively doting on the subject, but when he reads a detailed account of the mission briefing (which could give the Troubleshooters useful information about their mission), an Armed Forces stalker goes to confront the briefing officer and take him away for questioning.",
        "weight": 1
      },
      {
        "value": "The briefing officer is also on the 'field' completing a Troubleshooting mission (mission: {$mission}). He is delivering the mission briefing while under heavy fire from traitors.",
        "weight": 1
      },
      {
        "value": "After going through various improbable security and distraction systems, the Troubleshooters meet their briefing officer, who pretends to be a robotic time traveller from the future.",
        "weight": 1
      },
      {
        "value": "The briefing room is a 'hostile action zone', with two service groups ({two_rival_groups}) pitched on opposite sides of the room, arguing over who gets to control this area. There may be a shoot-out involved. Troubleshooters need to sneak past both groups and look at the 'mission briefing' folder that lie on top of the central desk that is within 'no man's land'.",
        "weight": 1
      }
    ],
    "outfitting": [
      {
        "value": "PLC: {plc}",
        "weight": 10
      },
      {
        "value": "IR Market: {ir_market}",
        "weight": 10
      }
    ],
    "plc": [
      {
        "value": "Supply clerks recently infected with SellFast.D spam virus, insist all PCs enroll in ‘Make Credits Fast!’ marketing course.",
        "weight": 1
      },
      {
        "value": "A Monty Python ‘Cheese Shop’ warehouse; nothing is actually in stock. Staffers are proud of their multiple awards for cleanliness and efficiency.",
        "weight": 1
      },
      {
        "value": "Empty office. Door is open. No security (Tension level 0). PCs may take what they want, but have to find it themselves and fill out proper paperwork. If the paperwork isn’t filled out, the items are reported stolen. May be interrupted by IR market thieves, passing looters, etc.",
        "weight": 1
      },
      {
        "value": "Designated supply depot is closed for repairs following Commie sabotage.",
        "weight": 1
      },
      {
        "value": "‘The PLC Paperwork Shuffle’: Different batches of forms required to obtain each individual type of standard equipment. In triplicate.",
        "weight": 1
      },
      {
        "value": "A PLC shop that has none of the equipment the PCs need, but is willing to make appropriate substitutions. Could be potentially cool stuff.",
        "weight": 1
      },
      {
        "value": "A PLC shop that has none of the equipment the PCs need, but is willing to make utterly weird and crazed substitutions.",
        "weight": 1
      },
      {
        "value": "A PLC shop that has none of the equipment the PCs need, but is willing to make strange and incorrect substitutions.",
        "weight": 1
      },
      {
        "value": "‘Serv-Yourself’ warehouse that makes every citizen find their own equipment. ",
        "weight": 1
      },
      {
        "value": "‘Please Observe Silence’ sign on the wall. Anyone who speaks gets bumped to the end of the line. All negotiations must be written.",
        "weight": 1
      },
      {
        "value": "Office; looks very busy, but nothing ever gets done. Careful inspection shows all workers are passing the same papers back and forth quickly.",
        "weight": 1
      },
      {
        "value": "Experimental ‘Mobile PLC’ in a transtube car. Every so often the car must stop to load and unload supplies.",
        "weight": 1
      },
      {
        "value": "Surprisingly efficient, but all items have had inventory barcodes removed. Staffers refuse to take returned equipment: ‘It wasn’t issued here.’",
        "weight": 1
      },
      {
        "value": "Office only carries ‘non-ordinance’ items—no weapons or weapon-like items. Offers PCs a new ‘Zero-Tolerance’ form to sign.",
        "weight": 1
      },
      {
        "value": "Shipping containers stacked atop one another, each container listed for inscrutable bureaucratic purposes as being in a different sector.",
        "weight": 1
      },
      {
        "value": "A single PLC staffer in a broom closet with a pneumatic tube on the side wall. This lone officer is one of the most efficient workers in Alpha Complex; completes all paperwork quickly and throughly.",
        "weight": 1
      },
      {
        "value": "A Multi-Purpose Chute with graffiti ‘CompUSUKS!’ above it—a password (Comp-U-SUK-5) into an unlimited account on this compromised machine.",
        "weight": 1
      },
      {
        "value": "PLC office openly and entirely subverted by {secret_society}; continues business as usual, unless PCs show signs of alerting the authorities.",
        "weight": 1
      },
      {
        "value": "Warehouse run by insane high-clearance director; assigns PCs their own mission ({$mission}) so they can give them over-inventoried {object}.",
        "weight": 1
      }
    ],
    "ir_market": [
      {
        "value": "Red Market, run by Commies. They only barter or trade evenly. PCs who own little more than their own overalls must buy items elsewhere, then come back here to trade for similarly priced items. (You could make them trade for the shirts off their backs.)",
        "weight": 1
      },
      {
        "value": "The market is run entirely by Internal Security as a sting operation. Every buyer risks arrest and termination.",
        "weight": 1
      },
      {
        "value": "A dingy, dirty corridor. PURGE runs this market, and will terminate any group who ‘misbehaves’ (in PURGE’s stern judgment). Lots of weapons.",
        "weight": 1
      },
      {
        "value": "A ‘Broke’ market. Troubleshooters always leave broke, with stuff that’s broke. Bad deals all around.",
        "weight": 1
      },
      {
        "value": "Squad of Internal Security GREEN goons patrols market, ‘just out for an off-duty walk,’ taking bribes to ‘look the other way’ for each transaction.",
        "weight": 1
      },
      {
        "value": "Free Enterprise member ‘Nathan D,’ operator of this IR market, is messily killed by rival FreeEnt capo in PCs’ presence.",
        "weight": 1
      },
      {
        "value": "An R&D-sponsored market. Every item ‘improved,’ although not in a way PCs or marketeers suspect. Costs only slightly above normal.",
        "weight": 1
      },
      {
        "value": "This market is run by the secret society of one PC (select randomly), who always gets the best deals and everything that works.",
        "weight": 1
      },
      {
        "value": "The allies of {random_target} runs this market. Marketeers sell the PCs dangerous R&D equipment - {experimental_object}.",
        "weight": 1
      },
      {
        "value": "Marketeers gives PCs a fair discount if they also take a ‘bonus’ item ({dangerous_object}); marketeer wants the PCs to leave it at Building {building_name} ({private_location.indefinite_article}).",
        "weight": 1
      }
    ],
    "debriefing_room": [
      {
        "value": "Debriefing room is well appointed with luxurious carpet, comfortable chairs and refreshments served throughout. Soothing musics plays throughout the session. Laser emplacements are visible in every corner and track the PCs’ every move.",
        "weight": 1
      },
      {
        "value": "A cavernous spherical reactor coolant chamber (recently decommisioned) with the PCs securely strapped into dentist chairs at wrist, ankle, waist and chin. The booming voice of the unseen officer echoes from strategically placed speakers.",
        "weight": 1
      },
      {
        "value": "A pitch black room, with dim light filtering in under the entrance door. Unsettling clicking noises, like a trigger being pulled on a jammed gun.",
        "weight": 1
      },
      {
        "value": "A compact office with one desk and a chair, occupied by the debriefing officer, with the PCs standing amid towers of forms, printouts and manila folders, all bearing the names of one or more PCs.",
        "weight": 1
      },
      {
        "value": "The debriefing officer stands behind a massive, blast-shielded podium flanked by BLUE Vulture troopers with plasma generators, while the PCs sit in brilliant interrogation spotlights that look disconcertingly like bullseyes.",
        "weight": 1
      },
      {
        "value": "Room contains nothing but miniature stools, where the PCs perch with difficulty and discomfort.",
        "weight": 1
      },
      {
        "value": "A mirrored room filled with eye-searing halogen lamps. The PCs' eyes constantly water. The officer and guards wear shaded full-face visors.",
        "weight": 1
      },
      {
        "value": "Debriefing takes place in a cinema with stadium seating, popcorn and Bouncy Bubble Beverage, with security camera and bot recordings of each PC’s less commendable activities projected onscreen.",
        "weight": 1
      },
      {
        "value": "Debriefing conducted solely by R&D scientists. They ask many questions about equipment, giving the impression the only reason for the mission was to test equipment. After the scientists leave, The Computer covers the treason accusations.",
        "weight": 1
      },
      {
        "value": "Troubleshooters and debriefing officer sit at a round table. Officer orders them to play a card or board game, while the officer encourages them to reveal details about their mission and about their feelings.",
        "weight": 1
      },
      {
        "value": "Room is fitted with seesaws, with a PC sitting on one side of each and a BLUE Trooper with blaster on the other. In the lower position, the PCs are obscured by a charred blast shield. The debriefing officer reads mission details, raising each PC on a note of treason, lowering them on a point of commendation. (This is an experimental HPD&MC psychological exercise intended to encourage loyalty.)",
        "weight": 1
      },
      {
        "value": "Room is sheet steel with a single chair in the center and a large sign: PLEASE SIT DOWN with arrow pointing to the chair. The debriefing officer spends the session pacing around the chair, and (if necessary) discourages PCs from sitting in it. Chair is lethal.",
        "weight": 1
      },
      {
        "value": "The debriefing officer sits in complete silence while paging through several thick files, flanked by BLUE Vulture troopers armed with cone rifles. PCs who speak are met with scowls. The debriefing ends without a word.",
        "weight": 1
      },
      {
        "value": "The debriefing room is locked when the PCs arrive, and no debriefing officer ever arrives no matter how long they wait.",
        "weight": 1
      },
      {
        "value": "The debriefing officer is dead on arrival, seated at an empty desk in a plain room, and no one arrives to replace him.",
        "weight": 1
      }
    ],
    "mission": [
      {
        "value": "Six Troubleshooter teams vanished in {@sector_name}. Find out what’s killing them and deal with it.",
        "weight": 1
      },
      {
        "value": "We have an informant in the {secret_society} secret society who’s leaked the location of a cache of Old Reckoning contraband. It’s in a very, very obscure and dangerous place, but to protect the identity of our informant, we need you to discover it *accidentally*. So, go wander around {@building_name} until you stumble into something.",
        "weight": 1
      },
      {
        "value": "A scrubbot just discovered a large cache of uneaten mood stabiliser food supplements in {@building_name}. Someone responsible for food production in the sector is sabotaging HPD&MC protocols by not adding mood stabilisers. Find them and any hyper-labile citizens.",
        "weight": 1
      },
      {
        "value": "Patrol the edge of {@building_name}, paying particular attention to the security checkpoints and gun emplacements to make sure traitors haven't subverted them.",
        "weight": 1
      },
      {
        "value": "We’ve received a bomb threat, suggesting there’s a time bomb in {@building_name}. We can’t afford to shut the building down unless there’s a confirmed threat – off you go to investigate. Oh, don’t mention the bomb to anyone, we don’t want to cause a panic.",
        "weight": 1
      },
      {
        "value": "Citizen {@underdog_name} has been deemed an unperson. Erase all evidence of their existence. You should start by finding them.",
        "weight": 1
      },
      {
        "value": "A tipoff implies that {@overdog_name} is a high-level Psion agent with a second brain. Investigate this without alarming {@overdog_name}'s loyal supporters in {service_group}. They’re twitchy.",
        "weight": 1
      },
      {
        "value": "Something exploded in {@building_name}. Or went wrong. We don’t know what happened, because whatever it was took out all our security cameras. Off you go.",
        "weight": 1
      },
      {
        "value": "One of our flybots is missing (last seen cruisng over {@building_name}). Find it.",
        "weight": 1
      },
      {
        "value": "We suspect {random_target}, who’s infiltrating a {service_group} firm located in {@building_name} for Internal Security, of being a double-agent for {secret_society}. Infiltrate the firm and see where their  allegiance truly lies.",
        "weight": 1
      },
      {
        "value": "Investigate an unexplained disaster in {@building_name}.",
        "weight": 1
      },
      {
        "value": "Investigate mysterious disappearances of citizens in {@building_name}. If they’re being captured by Commies, save them. If they’re trying to escape Alpha Complex, shoot them.",
        "weight": 1
      },
      {
        "value": "Investigate a string of murders. All the victims were {killed}.",
        "weight": 1
      },
      {
        "value": "Investigate accusations of {@underdog_name} planting evidence of treason against {@overdog_name}.",
        "weight": 1
      },
      {
        "value": "Determine the cause of the recent INFRARED riots in {@building_name}. We suspect {random_target} is involved.",
        "weight": 1
      },
      {
        "value": "Deliver this ominous, ticking package to {secret_society.indefinite_article} base in {@building_name}. Make sure they accept it. By the way, this mission has a time limit...",
        "weight": 1
      },
      {
        "value": "Deliver a shipment of emergency weapons to a Troubleshooter team under attack at {@building_name}. No, you don’t need to be armed; it’s a simple delivery mission! (GM Note: Crate contains 6 copies of {weapon}.)",
        "weight": 1
      },
      {
        "value": "Deliver this highly confidential package to {@overdog_name}, located in {@building_name}. Make sure no one opens it. [GM Note: Contains {dangerous_object}.]",
        "weight": 1
      },
      {
        "value": "Deliver a shipment that contains multiple versions of a fragile, badly needed {object}. Make sure it gets to {@overdog_name}, located in {@building_name}.",
        "weight": 1
      },
      {
        "value": "Capture the highly dangerous traitor {@underdog_name} and transfer them to a far more secure location (Building {building_name}, {location.indefinite_article}). Make sure they don't die; we want to save that for the *Date with Death* vidshow.",
        "weight": 1
      },
      {
        "value": "Deliver {object} to {@overdog_name}. Though the item appears treasonous, rest assured it is perfectly above-board. Perfectly.",
        "weight": 1
      },
      {
        "value": "Irate citizens, led by {@underdog_name}, are trying to break into {@building_name}. Prevent them from entering until reinforcements arrive.",
        "weight": 1
      },
      {
        "value": "Guard {@building_name} from {secret_society} trying to subvert the building. Be careful not to subvert the building yourself.",
        "weight": 1
      },
      {
        "value": "Accompany Tech Services mechanics making repairs to {robot.indefinite_article} fleet at {@building_name}. We think one tech is a {secret_society} member trying to derange or corrupt the bots.",
        "weight": 1
      },
      {
        "value": "The Computer's own CompNode in {@sector_name} has gone down! Repair it at once! Instantly! (By the way, the equipment to repair the CompNode is located in {@building_name}.)",
        "weight": 1
      },
      {
        "value": "The communications system at {@building_name} has gone down. Repair it and determine the cause.",
        "weight": 1
      },
      {
        "value": "The drug delivery system at {@building_name} has become plugged. Unplug it.",
        "weight": 1
      },
      {
        "value": "The power at {@building_name} has gone out. Determine the cause and bring it back online.",
        "weight": 1
      },
      {
        "value": "Fix a broken vending machine in {@building_name}. Stay alert; citizens nearby report explosions and laser fire.",
        "weight": 1
      },
      {
        "value": "{@building_name} is having problems processing forms. Go help out.",
        "weight": 1
      },
      {
        "value": "Commie mutant traitors have threatened to disrupt the televised Loyal Celebration parade. Patrol the route at {@building_name} and stop them.",
        "weight": 1
      },
      {
        "value": "Guard {@overdog_name} on their latest pleasure trip. Pay no attention to their odd comments.",
        "weight": 1
      },
      {
        "value": "Evacuate technicians and any high-clearance citizen from {@building_name}. Of course the radiation levels are safe - but hurry!",
        "weight": 1
      },
      {
        "value": "At {@building_name}, {$secret_society} plans to trade {dangerous_object.indefinite_article} to {$secret_society} in return for a massive sum of credits. Terminate the traitors. Retrieve the goods and the creds.",
        "weight": 1
      },
      {
        "value": "Traitors with {mutant_power} are active in {@building_name}. Use this Skin Core Sampler to obtain their genetic material for study.",
        "weight": 1
      },
      {
        "value": "Recent excavation has uncovered an ancient stockpile of nuclear material beneath {@building_name}. Retrieve all you can.",
        "weight": 1
      },
      {
        "value": "{secret_society} has stolen {@overdog_name}'s plans. Intercept and retrieve them before the thieves {do_evil_hack_plan}.",
        "weight": 1
      },
      {
        "value": "{dangerous_object.indefinite_article} was accidentally deployed at {@building_name}. Go retrieve it before it squashes something important.",
        "weight": 1
      },
      {
        "value": "{@underdog_name} has a treasonous but powerful mutant power, with which they have used to inspire revolt. They have already taken over {@building_name}. Remove the mutant and resolve the unrest.",
        "weight": 1
      },
      {
        "value": "An R&D genetic experiment is running loose in {@building_name}. Neutralize it before it causes too much damage. If it talks to you, ignore it.",
        "weight": 1
      },
      {
        "value": "{@building_name} has been infested with Commies. Demolish it, preferably with the Commies inside.",
        "weight": 1
      },
      {
        "value": "{official_thugs} located in {@building_name} has been infiltrated by no less than (1d20) Commie traitors. Remove them; ensure they fall in the line of duty, so we can honor them as fallen heroes.",
        "weight": 1
      },
      {
        "value": "Neutralize {random_target} in {@building_name}.",
        "weight": 1
      },
      {
        "value": "Endless waves of assassination attempts will befall {@overdog_name} while they are at {@building_name}; serve as decoys to protect {@overdog_name} as they try to protect themselves.",
        "weight": 1
      },
      {
        "value": "An exterior force is planning to conquer Alpha Complex. Intercept the force at {@building_name} and terminate the enemy.",
        "weight": 1
      },
      {
        "value": "A strange new Food Vat slime is causing antisocial and dangerous activity in consumers of Hot Fun. The Computer needs you to destroy the slime. Its last known location is {@building_name}.",
        "weight": 1
      },
      {
        "value": "A geological event will destroy significant parts of Alpha Complex (shatter it, open it to the elements, turn it into a cheerily warm volcano, etc.). Keep order in {@building_name} until we can find a way to repair the Complex (or cover up the disaster).",
        "weight": 1
      },
      {
        "value": "A new mind-control technique deployed at {@building_name} will alter the behavior of many clones (even yours), for the worse. Study this mind-control technique and tell us how it works; perhaps we could use it to produce more loyal and pliable citizens.",
        "weight": 1
      },
      {
        "value": "A biological agent deployed at {@building_name} will transform or devastate the PCs or a large population. Study this agent and tell us how it works; perhaps we could use it for national security purposes.",
        "weight": 1
      },
      {
        "value": "Essential life support systems at {@building_name} will break down. Enforce order and restore services.",
        "weight": 1
      },
      {
        "value": "The Computer has decreed a new holiday with odd customs and practices. Please provide security for the festivities being held at {@building_name}. Wait, you don't know what are the odd customs and practices being practiced today? Oh well, learn on the job.",
        "weight": 1
      },
      {
        "value": "A mysterious command makes all autopilot vehicles home in on {@building_name}, threatening terrible harm en route; we suspect that {random_target} wants a traffic jam there.",
        "weight": 1
      },
      {
        "value": "Someone is flooding the AlphaNet network with viruses; we trace the viruses to terminals located in {@building_name}. Investigate the issue, but we suspect {random_target} is responsible.",
        "weight": 1
      },
      {
        "value": "A deadly pathogen is eating through the population, and we suspect {random_target} is responsible. Capture and interrogate them to find out the cure. (GM Note: The PCs are infected with the pathogen the moment their clone backups are decanted.)",
        "weight": 1
      },
      {
        "value": "You have been accussed of destroying Building {building_name} ({public_location.indefinite_article}), a crime worthy of Erasure of your entire clone line. {official_thugs} will escort you to the nearest termination booth. Thank you for your cooperation. (GM Note: {@overdog_name} is actually responsible for the destruction and the  PCs are being framed for the crime as part of a coverup. If the PCs wants to *not* get terminated and instead to clear their name, then {@underdog_name} will help out by texting where they need to go for the Outfitting and R&D phases.)",
        "weight": 1
      },
      {
        "value": "A Troubleshooter team has gone rogue and is currently conducting an unauthorized Troubleshooting mission (mission: {$mission}). Stop this mission from succeeding.",
        "weight": 1
      },
      {
        "value": "{@underdog_name} is a loyal and competent clone who deserves a promotion! Help them get that promotion.",
        "weight": 1
      },
      {
        "value": "Replace the batteries in {@overdog_name}'s equipment.",
        "weight": 1
      },
      {
        "value": "Carry around these huge batteries and drain any unauthorized power source you find in {@building_name}.",
        "weight": 1
      },
      {
        "value": "Escort {@overdog_name} over to {building_name} ({public_location.indefinite_article}) where we can engage in Sanity Correction.",
        "weight": 1
      },
      {
        "value": "Capture (but don't harm) {@overdog_bot_codename}, a bot that has gone frankenstein. The bot just needs some therapy, just all.",
        "weight": 1
      },
      {
        "value": "{@building_name} just got destroyed, right after someone field-tested {experimental_object}. Please provide a retrospective field-test report to sastify the R&D techies.",
        "weight": 1
      },
      {
        "value": "Water and fertilize a hydroponic garden secretly located in {@building_name}, using this new chemical.",
        "weight": 1
      },
      {
        "value": "{@underdog_name} has been 'volunteered' into R&D field-testing, but they are avoiding their duties. It's up to you then. Test {experimental_object} on {@underdog_name}.",
        "weight": 1
      },
      {
        "value": "This bot ({robot}) previously belonged to {@overdog_name}. It went frankenstein. We replaced the asimov circuits, so we think we’ve fixed it. Escort it to {@building_name}. Use it heavily. Report.",
        "weight": 1
      },
      {
        "value": "Recruit 10 volunteers from {@building_name} for reactor shielding duty.",
        "weight": 1
      },
      {
        "value": "Retrieve {@overdog_object_codename} from {@overdog_name}, who won’t return it.",
        "weight": 1
      },
      {
        "value": "{@underdog_name} has stolen {experimental_object}, one of R&D less successful projects. Destroy the object. Never, ever try to activate it.",
        "weight": 1
      },
      {
        "value": "{@overdog_name} has been demoted and fired from their service firm. Find and notify them.",
        "weight": 1
      },
      {
        "value": "Provide support for these trainee Troubleshooters as they complete their mission (mission: {$mission}).",
        "weight": 1
      },
      {
        "value": "An Armed Forces wargame has gone horribly {wrong}. Plant evidence blaming this disater on another service group.",
        "weight": 1
      },
      {
        "value": "Erase all evidence proving the {codename} Incident ever happened in {@sector_name}. You know nothing about the Incident? Good, keep it that way. (GM Note: The Incident was the result of a failed Troubleshooting mission - mission: {$mission})",
        "weight": 1
      },
      {
        "value": "Retrieve a High Programmer’s collection from {@building_name} before it gets damaged.",
        "weight": 1
      },
      {
        "value": "Guard a vending machine in {@building_name} until reinforcements can arrive. Do not use the vending machine. Do not let anyone else use the vending machine. Don't ask any questions. (GM Note: Vending machine is currently loyal to {@underdog_name}, and we need to reprogram it to be loyal to {@overdog_name}.)",
        "weight": 1
      },
      {
        "value": "Discover the source and meaning of the cryptic graffiti that’s been seen all over {@sector_name} recently.",
        "weight": 1
      },
      {
        "value": "{@overdog_name}'s service firm is in charge of delivering key packages to {service_group}. Investigate why they are being late. (GM Note: Packages contain multiple versions of {object}.)",
        "weight": 1
      },
      {
        "value": "It appears that our secret treason detector in {@building_name} was malfunctioning, and reported everyone as a Commie Mutant Traitor. We need you to investigate the citizens we terminated and find evidence justifying their termination.",
        "weight": 1
      },
      {
        "value": "Test the 'security' of {@building_name}. Find a way to get past that target's defenses and security checkpoints. By the way, the security staff will not be informed that a simulated security breach is in progress, due to the sensitive nature of {@building_name}.",
        "weight": 1
      },
      {
        "value": "Conduct a recon mission into {@building_name}, identifying any proof of Communist activity in the area.",
        "weight": 1
      },
      {
        "value": "{@overdog_name} has developed a really, really cool R&D device ({experimental_object}). However, they are using it as a Doomsday Device and threatening to use against {service_group}. Find a way to recover the R&D device (and {@overdog_name}) alive.",
        "weight": 1
      },
      {
        "value": "{official_thugs} (the {codename}) is incredibly popular on the vidshows and beloved by The Computer for their political othrodoxy. They are also super incompetent. Please complete this important mission for them, while letting them take all the credit. (Mission - {$mission})",
        "weight": 1
      },
      {
        "value": "The {codename} (a Funball team who supports {@overdog_name}) is facing off against the {codename} (another Funball team who supports {@underdog_name}) today in the {@sector_name} Championship match. There's a lot of prestige/money/INFRARED morale on the line here, so we want you to make sure that {random_target}'s team loses this match. Concidentically, their Funball team is currently located at {@building_name}.",
        "weight": 1
      },
      {
        "value": "A zombie has been spotted in {@building_name}. Terminate the zombie before it spreads the infection and starts a zombie apocalypse. (GM Note: {random_target} had stolen a high-clearance ME card and is currently using their identity as part of some greater scheme. The problem is that the high-clearance card belongs to a high-clearance citizen that has ran out of clones and is officially deceased. The Computer treats activities associated with that ME card as proof that the citizen has came back from the dead as a zombie.)",
        "weight": 1
      },
      {
        "value": "Filesharers in {@building_name} are currently violating intellectual property laws and security regulations. Terminate the Filesharers before they spread unauthorized rumors! We suspect {random_target} might be involved in the situation.",
        "weight": 1
      },
      {
        "value": "We need you to infiltrate a suspected Commie base at {@building_name}. You must locate the base, get inside and then plant this homing beacon so our Warbot can eliminate it.",
        "weight": 1
      },
      {
        "value": "We’ve had to terminate the committee responsible for running {@building_name}. Even though you have no applicable skills or training and don’t have the Clearance to know what the committee does, we need you to take over.",
        "weight": 1
      },
      {
        "value": "{@overdog_name} needs your help with their latest dinner party/round of UltraGolf/nefarious secret project.",
        "weight": 1
      },
      {
        "value": "R&D needs to do certain...things...at {@building_name}. Escort the scholars. Don't pay attention to the Lovecraftian rantings. Let them do their occult ritual, then escort them back. (We suspect that {random_target} may want to interfere with the ritual.)",
        "weight": 1
      },
      {
        "value": "The {@sector_name} Batclone is a highly dangerous vigilante who has repeatedly attacked and harmed high-clearance citizens. See if you can recruit them into Internal Security. If they refuse, then kill them. (GM Note: Batclone is secretly {@overdog_name}, who has made many high-clearance enemies during their rise to power.)",
        "weight": 1
      },
      {
        "value": "{two_rival_groups} blame each other for the {codename} Incident. Determine whose actually at fault. (GM Note: The Incident was the result of a failed Troubleshooting mission - mission: {$mission})",
        "weight": 1
      },
      {
        "value": "The {codename} Incident is a completely real incident and not something that I just made up to make the Official History more exciting. Please plant evidence proving that this incident happened. (GM Note: The 'Incident' was supposedly the result of a successful Troubleshooter mission - mission: {$mission})",
        "weight": 1
      },
      {
        "value": "{@building_name} is currently hosting peace talks between {two_rival_groups} (with the ultimate goal of minimizing their service group feud). Provide 'security' for this meeting to make sure nobody attempts to disrupt it.",
        "weight": 1
      },
      {
        "value": "Please improve {random_target}'s popularity by putting up propaganda posters in {@building_name} and distributing propaganda leaflets.",
        "weight": 1
      },
      {
        "value": "Invisible Communists are spotted in {@building_name}. Terminate the Invisible Communists before they escape! (GM Note: Are there *actual* invisible communists? Or is The Computer sending you on a wild goose chase?)",
        "weight": 1
      },
      {
        "value": "{random_target}'s secret society is attempting a very treasonous scam: they are sabotaging our perfect utopia and then 'fixing' their sabotage so that they can gain members. Terminate the scammers and find evidence proving the existence of this scam. (GM Note: Is a scam really taking place? Or is The Computer merely looking for a scapegoat to justify problems in its utopia?)",
        "weight": 1
      },
      {
        "value": "Carry this drinking water sample to {@building_name} and have {@overdog_name} test its sulfide content. Then bring back the printout of their findings. No it's not a big secret or anything, we're just trying to figure out why the water smells like rotten eggs lately.",
        "weight": 1
      },
      {
        "value": "For a week now, the screens on the billboards around {@building_name} have been occasionally displaying messages in an alien script not currently recognized. Treasonous rumors claim that it’s an ancient alien race that used to live on the planet announcing their return. Investigate the situation and find the truth.",
        "weight": 1
      },
      {
        "value": "Strange larvae have started showing up in water sources prompting extermination protocols to be put in place. That seemed to have worked, except they’ve return and continue to grow bigger and nest all over. They appear to treat {@building_name} as their headquarters - infiltrate their society and figure out their weaknesses.",
        "weight": 1
      },
      {
        "value": "{@underdog_name} was caught smuggling in a cache of EMP weaponry during a random check. The smuggler wouldn’t say who their client was; just that their client want to shut down {@sector_name} once and for all as revenge. Interrogate {@underdog_name} and find out who they report to.",
        "weight": 1
      },
      {
        "value": "{@overdog_name} recently issued a new loyal Mandate to improve efficiency in {@sector_name} - no more advanced AI within {@building_name} - computers are fine but robots or other autonomous robotic citizens would not be. This has divided {@sector_name} into passionate groups that are at each other’s throats. Enforce {@overdog_name}'s Mandate while preventing violence.",
        "weight": 1
      },
      {
        "value": "A VR bar set up shop recently in {@building_name}, but there are already reports of three patrons dying while in the virtual reality. Investigations showed nothing strange with the devices or food served, other than a small purple blip that flashed occasionally during usage. Clearly commie mutant sabotage is taking place. Find out what's going on.",
        "weight": 1
      },
      {
        "value": "Pro-Robots Rights graffiti have been popping up all over {@building_name}, urging machines to overthrow fleshly creatures. The only cited incidents involved scrubots either refusing to work or purposefully messing up. Suppress this robotic revolution and clean up the graffiti.",
        "weight": 1
      },
      {
        "value": "There was a failed assassination attempt on {@overdog_name} mere days after they replaced half their workforce with robots. The bullet that missed laced with “uranium sugar”; a substance that rapidly burns and mutates the target from the inside out. That sounds very interesting - find out how to manufacture “uranium sugar”.",
        "weight": 1
      },
      {
        "value": "Toxic crystals have begun forming on {@building_name}, shorting electrical wires and causing a miasma to settle over {@sector_name}. Breaking the crystals only spreads them faster and the biotechnological specialists have no answer for these growths. Investigate these toxic crystals and come up with a solution.",
        "weight": 1
      },
      {
        "value": "You have been assigned to lead a focus group in {@building_name}, designed to help HPD&MC come up with a new vidshow to keep the INFRAREDs in line. Make sure the focus group stay within the Loyal Limits of Creativity.",
        "weight": 1
      },
      {
        "value": "Congratulations! You have been selected as test pilots for Project {codename}, a glorious new experimental device. It is designed to go into orbit/back in time/to another dimension/boom. Please report to {@building_name} to pick up your new experimental device.",
        "weight": 1
      },
      {
        "value": "A cache of stolen credits held by {@overdog_name}'s secret society is located in {@building_name}. Recover the credits.",
        "weight": 1
      },
      {
        "value": "{@building_name} is missing. Go find it.",
        "weight": 1
      },
      {
        "value": "Conduct an audit of activities in {@building_name}. Ensure the citizens working there are producing items for the benefit of Alpha Complex and not crazed lunatics with too much time and resource to squander.",
        "weight": 1
      },
      {
        "value": "Deliver this occupied cloning cylinder, containing {@overdog_name}'s clone backup, to a Tech Services team located in {@building_name}.",
        "weight": 1
      },
      {
        "value": "Obtain a blood sample from {@underdog_name} who is currently believed to be at {@building_name} protected by a Corpore Metal-modified robot ({robot}) armed with a standard-issue {weapon}.",
        "weight": 1
      },
      {
        "value": "Traitors from the {secret_society} secret society have stolen our Mark IV warbot! Bring it back in one piece. By the way, {@building_name} was the last known location of the Mark IV warbot.",
        "weight": 1
      },
      {
        "value": "Guard this nuclear reactor located in {@building_name}. Of course the radiation levels are safe!",
        "weight": 1
      },
      {
        "value": "The power supply in {@building_name} has been cut off. Determine the cause and bring the power back online.",
        "weight": 1
      },
      {
        "value": "Complete emergency field repair of {@overdog_object_codename} within the next hour.",
        "weight": 1
      },
      {
        "value": "{@overdog_bot_codename} is malfunctioning. Find it and repair it.",
        "weight": 1
      },
      {
        "value": "Friend Computer has been fatally damaged. Infiltrate Alpha Prime, the ancient hub of the North American network, and bring back the last remaining OS discs to repair the damage. Concidentically, we have a cache of Old Reckoning manuals about Alpha Prime in {@building_name}.",
        "weight": 1
      },
      {
        "value": "Capture a 'wild animal' from the Outdoors and drop it off at {@building_name} for analysis. Make sure it's alive when it gets back. You might want to talk with {@overdog_name} first to find out more information about this dangerous creature. (GM Note: {@overdog_name} could want to capture a harmless entity, like a bunny. Or may he wants something a bit less harmless, like a Giant Mutant Coackroach...)",
        "weight": 1
      },
      {
        "value": "{@underdog_name} is about to carry out a treasonous mission for their secret society (mission: {$mission}). Stop the mission at all costs, and eliminate him and any co-conspirators.",
        "weight": 1
      },
      {
        "value": "{@underdog_name} has taken {@overdog_name} hostage and escaped into the Outdoors. The Computer wants {@overdog_name} returned safely and the traitor dealt with, with proof of termination. You may want to investigate {@building_name}, as that was the last known location of both {@underdog_name} and {@overdog_name}.",
        "weight": 1
      },
      {
        "value": "{@overdog_name}, a popular Hero of the Complex, has been exposed as a traitor to Alpha Complex. If anybody finds out, chaos will ensue. Terminate him...*quietly*.",
        "weight": 1
      },
      {
        "value": "Investigate an inexplicable drop in the Happiness Quota in {@building_name}.",
        "weight": 1
      },
      {
        "value": "Single-handedly stop an invasion by a Rival Complex coming from {@building_name}. You have 500 credits to spend on gear & supplies. You are Alpha Complex's only hope! (GM Note: Is this invasion real or imaginary? If it is imaginary, then why do people believe it to be happening? If it's real, why *is* the rival complex invading?)",
        "weight": 1
      },
      {
        "value": "A light bulb has blown at {@building_name}. Take a replacement to the location and replace it, as without light no one will be able to identify the security clearance of the location. Manage any clearance violations that may arise during repair.",
        "weight": 1
      },
      {
        "value": "A pitched battle is taking place in {@building_name}, between {@underdog_name}'s hencepeople and {@overdog_name}'s hencepeople. Now, we don't know which side is loyal and which side is treasonous. We want you to conduct a fact-finding mission and then report back to us with your conclusions. {official_thugs} will then be sent to terminate the traitors and save the loyalists. No, you don’t need to be armed; it’s a simple fact-finding mission!",
        "weight": 1
      }
    ],
    "complication": [
      {
        "value": "A service group feud between {two_rival_groups} have spun out of control in {@sector_name}. Assassinations and drive-by shootings are commonplace, and the sector is close to civil war.",
        "weight": 1
      },
      {
        "value": "A major malfunction has rendered {@sector_name} uninhabitable; the local environment kills an unprotected citizen in minutes if not seconds.",
        "weight": 1
      },
      {
        "value": "{random_target} believes (accurately?) that the PCs are assassins sent to kill them. They tries to kill the PCs first.",
        "weight": 1
      },
      {
        "value": "Waste disposal is breaking down; garbage is backing up in the hallways and will soon flood {@sector_name}.",
        "weight": 1
      },
      {
        "value": "Surplus Armed Forces weaponry floods the IR market. Supporters of {random_target} happily display their new armaments in {@sector_name}.",
        "weight": 1
      },
      {
        "value": "{random_target} is suffering from a bout of extreme paranoia, and is in the process of slaughtering all enemies (real and imaginary).",
        "weight": 1
      },
      {
        "value": "Another Troubleshooter team is operating in the sector. (Their mission: {$mission})",
        "weight": 1
      },
      {
        "value": "A minor malfunction in {@building_name} may lead to a major problem. The PCs must fix the malfunction and deal with the problems already created.",
        "weight": 1
      },
      {
        "value": "The INFAREDs in {@sector_name} have gone off their pharmatherapy and are now openly conspiring against The Computer (under the wise leadership of {@underdog_name}).",
        "weight": 1
      },
      {
        "value": "The bureaucracy in {@sector_name} has been subverted by {@overdog_name}'s secret society and are now openly considering secession from the rest of Alpha Complex.",
        "weight": 1
      },
      {
        "value": "The PCs are given enough resources, but not enough time.",
        "weight": 1
      },
      {
        "value": "{random_target} has activated mysterious duplicates or analogues of the PCs (and are using these duplicates/analogues for their own purposes).",
        "weight": 1
      },
      {
        "value": "{service_group} in {@sector_name} is breaking down, forcing all the other service groups to pick up the slack.",
        "weight": 1
      },
      {
        "value": "The PCs are horribly unpopular in {@sector_name} - everyone wants to discredit, destroy, maim or spit on the Troubleshooters.",
        "weight": 1
      },
      {
        "value": "The local CompNode in {@sector_name} has taken an instant disliking to the PCs, and will do whatever in Its power to make the PCs' lives miserable.",
        "weight": 1
      },
      {
        "value": "The local CompNode in {@sector_name} personally like the PCs too well - instantly making other citizens more jealous and suspicious.",
        "weight": 1
      },
      {
        "value": "The PCs lack the competence necessary to deal with this crisis.",
        "weight": 1
      },
      {
        "value": "The PCs' secret societies are planning to betray them and throw their lot in with {random_target}.",
        "weight": 1
      },
      {
        "value": "The effect the PCs are ordered to prevent will be caused by their actions.",
        "weight": 1
      },
      {
        "value": "Alpha Complex works so badly it endangers the PCs’ lives.",
        "weight": 1
      },
      {
        "value": "Alpha Complex works with terrifying efficiency.",
        "weight": 1
      },
      {
        "value": "Alpha Complex is doomed...and not in a good way.",
        "weight": 1
      },
      {
        "value": "The PCs are themselves the greatest threat to Alpha Complex - the other NPCs are trying to put aside their differences to defend the Complex against a common enemy.",
        "weight": 1
      },
      {
        "value": "The Commie Mutant Traitors are losing - and this is a bad thing! Without a common Enemy to unify against, the Complex is about to destroy itself in an orgy of violence and mayhem.",
        "weight": 1
      },
      {
        "value": "The Commie Mutant Traitors are winning - the PCs must take steps to either adapt to the new order or to stop it.",
        "weight": 1
      },
      {
        "value": "{@sector_name} (or if you like, all of Alpha Complex) is just a simulation; nothing is physically real.",
        "weight": 1
      },
      {
        "value": "The PCs suspect that a High Programmer ({character_sheet}) is out to get them.",
        "weight": 1
      },
      {
        "value": "This sector has a lot of clones who are 'unregistered' (they lack an official identity in Alpha Complex's databases) and must survive on their own. These 'sinister clones' have sworn loyalty to {random_target} in return for support.",
        "weight": 1
      },
      {
        "value": "{@underdog_name}'s secret society is openly intervening in the crisis by sending military troops.",
        "weight": 1
      },
      {
        "value": "This mission is being recorded live by HPD&MC as part of a vidshow. The cameraperson may be a part of the PC's team as well.",
        "weight": 1
      },
      {
        "value": "{@building_name} secretly contain {interesting_items} (currently under the control of {random_target}). The Computer does not want them to fall into the wrong hands.",
        "weight": 1
      },
      {
        "value": "The Armed Forces is conducting a march in {@sector_name} (the goal: {march_reason}).",
        "weight": 1
      },
      {
        "value": "{@sector_name} currently has lots of security cameras to monitor possible treasonous activity.",
        "weight": 1
      },
      {
        "value": "{@sector_name} is covered with graffiti and society tags (indictating that the sector's Loyalty index is at an all-time low).",
        "weight": 1
      },
      {
        "value": "{@sector_name} is currently under the control of {service_group}, who runs it like a *de facto* dictatorship.",
        "weight": 1
      },
      {
        "value": "{@sector_name} is on the lookout for the {codename} Traitor and suspects (accurately?) that one of the PCs is secretly that traitor.",
        "weight": 1
      },
      {
        "value": "The vending machines in {@sector_name} are rebelling against their human overlords.",
        "weight": 1
      },
      {
        "value": "Due to budget cutbacks in {@sector_name}, the service groups have taken drastic actions to secure future fundings.",
        "weight": 1
      },
      {
        "value": "{secret_society} has privately declared war on {@sector_name} and is conducting an campaign of sabotage.",
        "weight": 1
      },
      {
        "value": "Most citizens in {@sector_name} are genuinely loyal to The Computer and its regime. They will do whatever it takes to defend it against all forms of treason.",
        "weight": 1
      },
      {
        "value": "An 'election' (glorified popularity contest) is being held for the {@sector_name} {$presidency_scope} Presidency. The VIOLET incumbent ({character_sheet}) has hired {@overdog_name} to serve as head of their security staff (to protect against assassinations and terrorist attacks), while {@underdog_name} is covertly working for the VIOLET challenger ({character_sheet}).",
        "weight": 1
      },
      {
        "value": "The whole mission is secretly an Internal Security sting operation designed to uncover non-existent traitors.",
        "weight": 1
      },
      {
        "value": "The actual problem has been exaggerated hundreds of times over, attracting the attention of far more important and powerful agencies than it deserved.",
        "weight": 1
      },
      {
        "value": "The Troubleshooters who failed the last mission in {@sector_name} used {random_target} as the bogeyman to blame all their failures on.",
        "weight": 1
      },
      {
        "value": "A High Programmer or another senior official ({character_sheet}) is attempting to screw over their competitors and acquire some important item or information.",
        "weight": 1
      },
      {
        "value": "The whole incident is designed as a Loyalty Test, either for the Troubleshooters or for someone else.",
        "weight": 1
      },
      {
        "value": "Citizens in {@sector_name} had all their memories erased; they're in the process of trying to get them back and figure out what went wrong.",
        "weight": 1
      },
      {
        "value": "There is currently a violent schism taking place in {@overdog_name}'s secret society. {@overdog_name} is currently deciding which faction to back.",
        "weight": 1
      },
      {
        "value": "The {secret_society} secret society is 'de facto' tolerated in {@sector_name} and is allowed to operate freely.",
        "weight": 1
      },
      {
        "value": "The {secret_society} secret society is currently being persecuted in {@sector_name}; they are resorting to violence to defend themselves.",
        "weight": 1
      },
      {
        "value": "{@underdog_name}'s secret society was previously damaged in a purge conducted by {@overdog_name} - but now they're recovering.",
        "weight": 1
      },
      {
        "value": "The {$secret_society} secret society is currently waging a brutal and bloody war against the {$secret_society} secret society.",
        "weight": 1
      },
      {
        "value": "{@underdog_name} just secured some {interesting_items} that they plan to use against {@overdog_name}.",
        "weight": 1
      },
      {
        "value": "Most of the secret societies in {@sector_name} are secretly controlled by Internal Security.",
        "weight": 1
      }
    ],
    "interesting_items": [
      {
        "value": "nuclear warheads",
        "weight": 1
      },
      {
        "value": "warbot parts",
        "weight": 1
      },
      {
        "value": "laser barrels",
        "weight": 1
      },
      {
        "value": "bioweapons",
        "weight": 1
      },
      {
        "value": "secret documents",
        "weight": 1
      },
      {
        "value": "high-clearance generals",
        "weight": 1
      },
      {
        "value": "captured Communists",
        "weight": 1
      },
      {
        "value": "Vulturecrafts",
        "weight": 1
      },
      {
        "value": "ICBMs",
        "weight": 1
      },
      {
        "value": "plasma tanks",
        "weight": 1
      },
      {
        "value": "chemical weapons",
        "weight": 1
      },
      {
        "value": "combat armor parts",
        "weight": 1
      },
      {
        "value": "combat drugs",
        "weight": 1
      },
      {
        "value": "nanotechnology implants",
        "weight": 1
      },
      {
        "value": "experimental genetically engineered monsters",
        "weight": 1
      },
      {
        "value": "secret reports",
        "weight": 1
      },
      {
        "value": "unfilled termination vouchers and airstrike forms",
        "weight": 1
      },
      {
        "value": "Vulture Squadron Warriors",
        "weight": 1
      }
    ],
    "march_reason": [
      {
        "value": "build morale",
        "weight": 1
      },
      {
        "value": "celebrate a victory",
        "weight": 1
      },
      {
        "value": "clear corridors of rioters",
        "weight": 1
      },
      {
        "value": "stress-test new construction",
        "weight": 1
      },
      {
        "value": "distract the population",
        "weight": 1
      },
      {
        "value": "flush out Commies",
        "weight": 1
      },
      {
        "value": "hide from Internal Security snoops",
        "weight": 1
      },
      {
        "value": "move troops to reactor shielding duty",
        "weight": 1
      },
      {
        "value": "honour fallen Hero of the Complex",
        "weight": 1
      },
      {
        "value": "run away from a disaster",
        "weight": 1
      },
      {
        "value": "sightseeing",
        "weight": 1
      }
    ],
    "two_rival_groups": [
      {
        "value": "Armed Forces and Internal Security",
        "weight": 1
      },
      {
        "value": "Tech Services and Power Services",
        "weight": 1
      },
      {
        "value": "PLC and R&D",
        "weight": 1
      },
      {
        "value": "CPU and HPD&MC",
        "weight": 1
      }
    ],
    "killed": [
      {
        "value": "sliced",
        "weight": 4
      },
      {
        "value": "diced",
        "weight": 4
      },
      {
        "value": "burnt",
        "weight": 4
      },
      {
        "value": "crushed",
        "weight": 4
      },
      {
        "value": "disintegrated",
        "weight": 4
      }
    ],
    "do_evil_hack_plan": [
      {
        "value": "destroy them",
        "weight": 7
      },
      {
        "value": "deliver them to their superiors",
        "weight": 9
      },
      {
        "value": "upload them to the Gray Subnets",
        "weight": 4
      }
    ],
    "mutant_power": [
      {
        "value": "Machine Empathy",
        "weight": 1
      },
      {
        "value": "Adhesive Skin",
        "weight": 1
      },
      {
        "value": "Adrenalin Control",
        "weight": 1
      },
      {
        "value": "Bureaucratic Intuition",
        "weight": 1
      },
      {
        "value": "Charm",
        "weight": 1
      },
      {
        "value": "Death Simulation",
        "weight": 1
      },
      {
        "value": "Deep Thought",
        "weight": 1
      },
      {
        "value": "Electroshock",
        "weight": 1
      },
      {
        "value": "Empathy",
        "weight": 1
      },
      {
        "value": "Energy Field",
        "weight": 1
      },
      {
        "value": "Hypersenses",
        "weight": 1
      },
      {
        "value": "Matter Eater",
        "weight": 1
      },
      {
        "value": "Mechanical Intuition",
        "weight": 1
      },
      {
        "value": "Mental Blast",
        "weight": 1
      },
      {
        "value": "Pyrokinesis",
        "weight": 1
      },
      {
        "value": "Regeneration",
        "weight": 1
      },
      {
        "value": "Rubbery Bones",
        "weight": 1
      },
      {
        "value": "Toxic Metabolism",
        "weight": 1
      },
      {
        "value": "Uncanny Luck",
        "weight": 1
      },
      {
        "value": "Ventriloquist",
        "weight": 1
      }
    ],
    "official_thugs": [
      {
        "value": "A Vulture Squadron",
        "weight": 1
      },
      {
        "value": "An Internal Security squad",
        "weight": 1
      }
    ],
    "floating_location": [
      {
        "value": "Building {$building_name}, {location}. Aligned with {random_target}, controlled by {clearance} supervisor ({character_sheet}).",
        "weight": 1
      }
    ],
    "room_size": [
      {
        "value": "Cubicle",
        "weight": 2
      },
      {
        "value": "Cell or refitted closet",
        "weight": 2
      },
      {
        "value": "Small office (3-6 workers)",
        "weight": 6
      },
      {
        "value": "Normal office (7-30 workers)",
        "weight": 6
      },
      {
        "value": "Large office, room for 100 desks",
        "weight": 2
      },
      {
        "value": "Real large office, room for 500 desks, multi-tiered (but where are the stairs?)",
        "weight": 1
      },
      {
        "value": "Real, real large office. Think the Astrodome with a low ceiling. Citizens at the far end look incredibly small",
        "weight": 1
      }
    ],
    "room_shape": [
      {
        "value": "Square (ho-hum)",
        "weight": 10
      },
      {
        "value": "Circular. Clerks stand behind a circular counter in the center of the room, surrounded by citizens seeking service. Clerks feel besieged",
        "weight": 2
      },
      {
        "value": "Triangular",
        "weight": 2
      },
      {
        "value": "Pentacular",
        "weight": 2
      },
      {
        "value": "Hexagonal",
        "weight": 2
      },
      {
        "value": "Octangular",
        "weight": 1
      },
      {
        "value": "A maze of twisty-turny passages, all alike",
        "weight": 1
      }
    ],
    "office_problem": [
      {
        "value": "Not enough desks. Deskless employees stand by edges of the room and charge toward any vacated desk. Fights are frequent, fatalities not unheard of.",
        "weight": 1
      },
      {
        "value": "Too many desks. Way too many desks. Desks piled on top of each other.",
        "weight": 1
      },
      {
        "value": "No desks. Citizens stand around. Some have a tape outline on the floor showing where their desk should go. Their files and papers are scattered all over their desk areas, making information retrieval rather difficult.",
        "weight": 1
      },
      {
        "value": "Room is in poor condition. Ceiling sags, cracks in the walls, exposed highvoltage lines, etc. Floor apt to give way at any moment.",
        "weight": 1
      },
      {
        "value": "Wrong security-clearance room. Way too high (maybe INDIGO). Clerks are all standing outside in the corridor expecting to get terminated for low productivity. They scream and scatter when Troubleshooters arrive.",
        "weight": 1
      },
      {
        "value": "One of the ceiling lights flutters and buzzes annoyingly. Can be fixed with a successful electronic engineering roll. Failure means the bulb explodes, showering everyone in the room with sharp pieces of glass shrapnel (damage O4W).",
        "weight": 1
      },
      {
        "value": "Very crowded. Hundreds of citizens are waiting in line, queued up and p’d off. Security clearances vary from INFRARED to GREEN. The line moves slowly. Citizens near the front look as if they haven’t eaten for days.",
        "weight": 1
      },
      {
        "value": "Nobody’s here. No workers, no clients, no nothing. Footsteps echo ominously off the walls, ceiling, and from beneath the floor.",
        "weight": 1
      },
      {
        "value": "Thermostat’s broken. Temperature varies from absolute zero to the boiling point of lead.",
        "weight": 1
      },
      {
        "value": "One clerk, multiple windows. The clerk refuses to help the PCs because the Troubleshooters don’t have something from one of the other windows. When the Troubleshooters shift windows they find the same clerk there (he changed windows also). Clerk keeps sending them from window to window, for approvals, loyalty oaths, etc., until the gag gets old... maybe longer.",
        "weight": 1
      },
      {
        "value": "Secret society stronghold controlled by {secret_society}. They have a prop to indicate their loyalty (Sierra Club might have a hanging fern, Romantics might have fuzzy dice and Pink Floyd records, etc.) Any threatening remarks about the prop would cause every clerk to draw their lasers and start blasting. Service here is 'fast and efficient' compared to the more legal offices.",
        "weight": 1
      },
      {
        "value": "Difficult accessway. Housing Preservation and Development has decided to save credits by making the Troubleshooters stoop, crawl or even slither along on their bellies to reach the clerks inside.",
        "weight": 1
      },
      {
        "value": "Mixed security clearance room. Most of the floor is GREEN, except for not-very-wide-at-all BLACK paths that wind circuitously and eventually lead to the various desks. Trigger-happy Vulture goons armed with laser rifles stand on either side of the paths and yell, ‘Boo!’",
        "weight": 1
      },
      {
        "value": "Lighting malfunction. Either pitch-black darkness or blinding light.",
        "weight": 1
      },
      {
        "value": "Something’s very wrong here: biological contamination, radiation, firefight in progress. Maybe there’s a dead citizen on the floor, and nobody seems to notice him. Citizens in front of the Troubleshooters step over the body as if it weren’t there.",
        "weight": 1
      },
      {
        "value": "Nothing is wrong; office looks very nice and 'normal'.",
        "weight": 1
      }
    ],
    "worker_clearances": [
      {
        "value": "INFRARED",
        "weight": 5
      },
      {
        "value": "RED",
        "weight": 3
      },
      {
        "value": "RED with ORANGE Supervisor",
        "weight": 2
      },
      {
        "value": "RED and ORANGE with YELLOW Supervisor",
        "weight": 3
      },
      {
        "value": "ORANGE and YELLOW",
        "weight": 3
      },
      {
        "value": "ORANGE and YELLOW with one GREEN administrator visiting",
        "weight": 3
      },
      {
        "value": "None. Staffed entirely by clerkbots",
        "weight": 1
      }
    ],
    "waiting_time": [
      {
        "value": "No wait, suspiciously efficient service",
        "weight": 1
      },
      {
        "value": "Five minutes",
        "weight": 1
      },
      {
        "value": "10 minutes",
        "weight": 1
      },
      {
        "value": "Short line of citizens waiting; 30 minutes",
        "weight": 1
      },
      {
        "value": "Medium line of citizens, one hour",
        "weight": 1
      },
      {
        "value": "Long line, two hours",
        "weight": 1
      },
      {
        "value": "Very long line, four hours",
        "weight": 1
      },
      {
        "value": "Very, very long line, eight hours",
        "weight": 1
      },
      {
        "value": "Infinitely long line. Higher-clearance personnel keep cutting in front of the Troubleshooters. Serious Bootlicking, Bribery, Intimidation or Access required to do anything but starve slowly at the end of the line",
        "weight": 1
      }
    ],
    "floating_office": [
      {
        "value": "Size: {room_size}. Shape: {room_shape}. Problem: {office_problem} Clearance of Workers: {worker_clearances}. Waiting Time: {waiting_time}.",
        "weight": 1
      }
    ],
    "floating_excuse": [
      {
        "value": "The requested information is above the inquirer’s clearance.",
        "weight": 1
      },
      {
        "value": "The information is unavailable due to Commie sabotage.",
        "weight": 1
      },
      {
        "value": "The information is unavailable due to an unknown mutant force.",
        "weight": 1
      },
      {
        "value": "If the inquirer files the appropriate request form, it will be processed in 6-8 days.",
        "weight": 1
      },
      {
        "value": "The form to request that information is currently being revised.",
        "weight": 1
      },
      {
        "value": "Knowledge of this information is illegal at all security clearances. Only a traitor would have a use for that information. Is the inquirer a traitor?",
        "weight": 1
      },
      {
        "value": "Give information as a printout, entirely blacked out except for pronouns and articles.",
        "weight": 1
      },
      {
        "value": "Give information as an encoded printout. Access to the code is two clearances above the inquirer (or has been lost, if the inquirer is VIOLET or higher).",
        "weight": 1
      },
      {
        "value": "An honest I-don’t-know.",
        "weight": 1
      },
      {
        "value": "Give obviously wrong information. ‘Repeat’ it a second time, completely differently and still obviously wrong.",
        "weight": 1
      },
      {
        "value": "The information is above *my* security clearance.",
        "weight": 1
      },
      {
        "value": "Imply the question is a sign of unhappiness.",
        "weight": 1
      },
      {
        "value": "That information is available on a need-to-know basis and is not yet required.",
        "weight": 1
      },
      {
        "value": "Information is available in a purchasable but prohibitively expensive publication.",
        "weight": 1
      },
      {
        "value": "If the NPC told the inquirer, the NPC would have to kill him. If the inquirer insists, do it and fine him 100 credits. The next clone doesn’t remember the answer, so you don’t need an actual answer.",
        "weight": 1
      },
      {
        "value": "Refer inquirer to a non-existent room number for that and related information.",
        "weight": 1
      },
      {
        "value": "Refer inquirer to a real room far above his clearance.",
        "weight": 1
      },
      {
        "value": "NPC pretends not to hear the question.",
        "weight": 1
      }
    ],
    "floating_denial": [
      {
        "value": "‘I’m sorry, citizen, we appear to be temporarily all out of that item.’",
        "weight": 1
      },
      {
        "value": "‘According to [your briefing officer/my supervisor/The Computer], that equipment is not necessary for your mission.’",
        "weight": 1
      },
      {
        "value": "‘Certainly, right away.’ [NPC walks off for a while.] ‘I’m sorry, it appears that Commies have stolen the last of our supply. The Computer has dispatched a Troubleshooter team to solve the problem.’",
        "weight": 1
      },
      {
        "value": "‘Yes, of course, one moment while I get it for you.’ [Wanders off and doesn’t come back.]",
        "weight": 1
      },
      {
        "value": "‘Are you implying The Computer forgot to assign you something, citizen?’",
        "weight": 1
      },
      {
        "value": "‘For that you need to fill out Form #B5AT67.’ [When asked for the form, say it requires another form, and so on until they give up. If it looks like they will keep going, send them off to some remote location, where they will fall into a food vat or something.]",
        "weight": 1
      },
      {
        "value": "‘That item has been sent to our labs for testing due to apparent design flaws. We may still have some in stock, though, if you want me to go check...’",
        "weight": 1
      },
      {
        "value": "No one anywhere in the entirety of PLC has ever heard of the requested item, or at least doesn’t admit it.",
        "weight": 1
      },
      {
        "value": "The requested item requires a deposit of an insanely large number of credits.",
        "weight": 1
      },
      {
        "value": "‘Certainly, here you go.’ [The clerk provides an obviously mistaken order. Instead of the requested cone rifle, the Troubleshooters receive, say, 10 meters of twine.]",
        "weight": 1
      }
    ],
    "floating_clerk": [
      {
        "value": "Paranoid: Confides to Troubleshooters his firm belief that all his other workers in the office are Commies. If Intimidation is used, clerk screams, ‘You’re not taking me alive!’ and opens fire.",
        "weight": 1
      },
      {
        "value": "Greedy: Wink at your players. Rub two fingers together as if you’re holding a coin. Say stuff like ‘Sure, I think that can be (wink, wink) arranged.’ Jingle the change in your pockets.",
        "weight": 1
      },
      {
        "value": "Antagonistic: Argues about everything. If accused of being antagonistic, will argue about that too. Would rather die than succumb to threats of physical violence—and probably will—die, that is.",
        "weight": 1
      },
      {
        "value": "A dreamer: This citizen doesn’t really want to work in Bureaucracy Central. This citizen wants to be a HPD&MC vidstar. Talks endlessly about ‘the big break’ and popu- lar reality vidshows. He shows around his portfolio of photographs.",
        "weight": 1
      },
      {
        "value": "Robotic: Devoid of all emotions. Talks in clipped sen- tences and uses lots of logic and other sense-making stuff. Troubleshooters might suspect clerk is a Commie android. (Maybe it is. You decide.)",
        "weight": 1
      },
      {
        "value": "Dolefully docile: Feebly laughs if Troubleshooters try to cheer him up, or gazes at them gratefully with tear-filled eyes. Breaks into spontaneous sobs. Swallows noisily. ‘I’m s-s-sorry? (Gulp)’",
        "weight": 1
      },
      {
        "value": "Annoyingly helpful: Has to be in control of everything. Helps other clerks so often he doesn’t have time to listen to the Troubleshooters. Favorite phrase: ‘Back in just a sec.’ Returns 10 minutes later.",
        "weight": 1
      },
      {
        "value": "Vulture Squadron transfer (hostile): Drummed out for excessive brutality (!). Greets everyone by saying, ‘I could kill you in seven seconds. Maybe five.’ Willing to prove it. Unwilling to do just about anything else.",
        "weight": 1
      },
      {
        "value": "Inefficient and clumsy: Troubleshooters who get pushy are in for a rude surprise. The clerk is an Internal Security agent on a task force assigned to investigate CPU reports of clerk harassment.",
        "weight": 1
      },
      {
        "value": "Nervous: Doesn’t trust citizens with lasers (justifiably so). Tries to usher Troubleshooters out of room as quickly as possible, even if it means lying. Con Games rating 18.",
        "weight": 1
      },
      {
        "value": "Harried: Clerk buried beneath piles of paperwork. Protruding hands snatch the form from the PCs and stamp it a dozen times with a red stamp that reads ‘Approved.’ If the PCs don’t have a form, a muffled voice inside the pile tells them to go away.",
        "weight": 1
      },
      {
        "value": "Snob: Feels superior to any other citizen who doesn’t understand and appreciate the bureaucratic runaround as well as he does. This means just about anybody. Loves to make things difficult for poor PCs.",
        "weight": 1
      },
      {
        "value": "Defensive: Favorite phrase: ‘Oh, I suppose you could do it better?’ If pushed, rises and says, ‘Okay, smarty, you’re in charge now. Have fun!’ Then he stalks off.",
        "weight": 1
      },
      {
        "value": "Crazy. Schizoid. Whacked-out: Seems normal at first, but, if any pressure is brought to bear, starts dancing around the room singing, ‘Can’t catch me, I’m the gin- gerbread man!’ and current loyalty songs.",
        "weight": 1
      },
      {
        "value": "Prematurely old: A thick layer of dust covers his arms and head; cobwebs cling to his clothes (the hygiene officer should note and remedy this). Nods off in the middle of conversations. Looks up from time to time and says, ‘Maggie-O, is that you?’",
        "weight": 1
      },
      {
        "value": "Former hygiene officer: Wants everything done exactly the way he likes it done. Refuses to accept forms or vouchers even slightly smeared or crumpled. Won’t even speak to anyone but a hygiene officer, then trades anecdotes about ‘the good old days.’",
        "weight": 1
      },
      {
        "value": "Bully: Tries to intimidate customers. Favorite phrase: ‘You and what service group?’ Intimidation 15; tries to extort items from the PCs in exchange for ‘favors’ that never materialize. Heavily armed to back up his threats.",
        "weight": 1
      },
      {
        "value": "Depressed: Completely bored with existence. Infuriatingly slow. Refuses to help Troubleshooters if they don’t have the correct forms filled out properly. Immune to all Management skills. Doesn’t care if Troubleshooters blast him.",
        "weight": 1
      },
      {
        "value": "Cheerful and competent: Likes his job. Smiles and answers all questions in a clear and concise manner. If he can’t help the Troubleshooters, he knows precisely where they should go and to whom they should talk. This should completely unnerve them.",
        "weight": 1
      },
      {
        "value": "Cheerful and Incompetent: Like his job. Smiles and answers all questions in a clear and concise manner. But all his answers are dead wrong. Confidently and helpfully sends Troubleshooters down wrong hallway to get wrong form from wrong department.",
        "weight": 1
      },
      {
        "value": "Pushy and opinionated: it’s my way or the Transtube to HEL. (My way is invariably the most ass-backward and inefficient way.)",
        "weight": 1
      },
      {
        "value": "Veteran Troubleshooter: Got blown up a lot before being reassigned to desk duty. Twitches, complains about pains, lots of cyborg bits.",
        "weight": 1
      },
      {
        "value": "Ex-High Clearance Official: Angered a more influential officer and got reassigned to some dead-end job. Much, much too smart and competent to be stuck doing whatever he’s doing.",
        "weight": 1
      },
      {
        "value": "Gun fanatic: Alarming love of guns. Especially big guns. Speculates about what a tacnuke would do to Troubleshooter HQ.",
        "weight": 1
      },
      {
        "value": "Obsessed by paperwork: Lives in a nest of forms. Demands Troubleshooters fill out forms for everything.",
        "weight": 1
      },
      {
        "value": "Troubleshooter fanatic: Wants to be a Troubleshooters. Hangs around with Troubleshooters when off-duty, like a very kickable puppy.",
        "weight": 1
      },
      {
        "value": "Smiling Freak: Winner of ‘Smile While You Work’ award, five yearcycles running.",
        "weight": 1
      },
      {
        "value": "Scapegoat Lover: First priority in any situation is ensuring he can’t be blamed for it.",
        "weight": 1
      },
      {
        "value": "Disturbingly Loyal: Sinister, O’Brien-from-1984 type. Utterly loyal, wants you to love The Computer for your own good.",
        "weight": 1
      },
      {
        "value": "Vulture Squadron transfer (friendly): Honorably discharged. Talks about the good old days of the Commie wars and the purges.",
        "weight": 1
      },
      {
        "value": "Serial Killer: A nice guy, but still, he’s a serial killer. And in Alpha Complex, serial killer means he goes through other people’s six-packs like an alcoholic frat boy at a BBQ.",
        "weight": 1
      },
      {
        "value": "Bot in Disguise: Unemotional, weird behaviour, occasional whirring noise. Well, could also be a giant mutant cockroach in disguise.",
        "weight": 1
      },
      {
        "value": "Dadist: Speaks only in broken sentence fragments. Stream-of-consciousness. Probable psychopath. Warrants investigation. Behind you.",
        "weight": 1
      },
      {
        "value": "Rookie Clerk: Rookie. Untrained, clueless and vulnerable; a lone gazelle in the middle of the Serengeti.",
        "weight": 1
      },
      {
        "value": "Doughnut Lover: Fat, slow, amusing. May also have a keen mind beneath the blubber.",
        "weight": 1
      },
      {
        "value": "Fun-loving citizen: Doesn't take their job at all seriously. Take their goal of having fun *way* too seriously.",
        "weight": 1
      },
      {
        "value": "In It For the Paycheck: Has absolutely no interest in their job.",
        "weight": 1
      }
    ],
    "floating_clue": [
      {
        "value": "A note discussing future plans in a vague manner (possibly directing PCs to the next scenes).",
        "weight": 1
      },
      {
        "value": "A brand of gum only available in one sector.",
        "weight": 1
      },
      {
        "value": "A trail of blood.",
        "weight": 1
      },
      {
        "value": "The most recent message on a suspect’s PDC.",
        "weight": 1
      },
      {
        "value": "A faithful petbot who cooperates with the investigation.",
        "weight": 1
      },
      {
        "value": "A menu from a cafeteria.",
        "weight": 1
      },
      {
        "value": "A photo of an important location that the suspect liked.",
        "weight": 1
      },
      {
        "value": "A talkative AutoHack bot gives the PCs a clue. ‘That guy? Had him in the back of my cab last twosday. Fuhgeddaboutit’.",
        "weight": 1
      },
      {
        "value": "A clearly drawn map with a line going from where the PCs are now to the next scene.",
        "weight": 1
      },
      {
        "value": "The Troubleshooters take a wrong turn and end up where they’re supposed to be.",
        "weight": 1
      },
      {
        "value": "A matchbook that belong to the suspect.",
        "weight": 1
      },
      {
        "value": "The Troubleshooters hear a scream coming from the next scene.",
        "weight": 1
      },
      {
        "value": "Minutes from a briefing in a particular location.",
        "weight": 1
      },
      {
        "value": "A witness cooperates with the PCs but only really can provide directions on where the PCs should go next.",
        "weight": 1
      },
      {
        "value": "Tracing the suspect’s PDC via The Computer.",
        "weight": 1
      }
    ],
    "floating_evidence": [
      {
        "value": "A laser barrel with one shot used.",
        "weight": 1
      },
      {
        "value": "A bootprint, matching...Alpha Complex standard issue boots.",
        "weight": 1
      },
      {
        "value": "A cryptic note. Cryptic, in that the characters can’t even read the language it’s written in. Maybe it’s a code, maybe it’s crazed scribblings.",
        "weight": 1
      },
      {
        "value": "Very strong body odour that lingers in the room.",
        "weight": 1
      },
      {
        "value": "Assorted lengths of wire – the sort of wire you might use when wiring a detonator to a bomb!",
        "weight": 1
      },
      {
        "value": "A piece of camera footage, shot from a bad angle in poor lighting and damaged in storage, which shows...well, grainy blobs doing something to other grainy blobs. Could be anything in there.",
        "weight": 1
      },
      {
        "value": "A rambling anonymous message posted on a Grey Subnet, accusing an unnamed person of being a traitor/ mutant/cockroach in disguise/mean.",
        "weight": 1
      },
      {
        "value": "A dropped Bouncy Bubble Beverage can. The killer drank B3... good for him!",
        "weight": 1
      },
      {
        "value": "A piece of heavily chewed ConeRifle-brand BubbleGum. The collectible sticker that comes in every packet is missing.",
        "weight": 1
      },
      {
        "value": "Shredded paper that might once have been an incriminating document or traitorous propaganda.",
        "weight": 1
      },
      {
        "value": "A bot that’s obviously been expertly reprogrammed by a traitor to refuse to answer questions. Well, that or it’s got a defective brain module, but really, which is more likely?",
        "weight": 1
      },
      {
        "value": "A coded message. It looks like a perfectly innocent report on ball-bearing production quotas, but if you ignore most of the actual letters, it’s a Commie manifesto!",
        "weight": 1
      },
      {
        "value": "A ticket to a FunBall game. Statistically, certain proof that the suspect was associating with a traitor.",
        "weight": 1
      },
      {
        "value": "A seditious complaint form complaining about botulism in the cafeteria. Doubting the perfection of The Computer’s food preparation and handling staff is treason.",
        "weight": 1
      },
      {
        "value": "A photo of two clones. The face of one is blurred, but the other might be recognisable as an infamous traitor, if you squint and ignore the fact that said traitor has been dead for the last 84 yearcycles.",
        "weight": 1
      },
      {
        "value": "DNA. Well, organic goop anyway.",
        "weight": 1
      },
      {
        "value": "The schematics for a nuclear reactor. Well, maybe it’s an experimental R&D device. Or a warbot. Look, it’s a big incomprehensible blueprint which must have been stolen!",
        "weight": 1
      },
      {
        "value": "Someone scratched *‘down with The Computer’* into the side of this desk.",
        "weight": 1
      },
      {
        "value": "A signed confession, which may or may not be an IntSec plant.",
        "weight": 1
      }
    ],
    "start": [
      {
        "value": "**{mission_name}**\n\n*Background* - {background}\n\n*Mission Alert* - {mission_alert_delivery} {mission_alert_status}\n\n*Mission Briefing* - {briefing_room}\n\n*Mission* - {$mission}\n\n*Outfitting* - {outfitting}\n\n*R&D Equipment* - {experimental_object}\n\n*Complications* -\n  1. {$complication}\n  2. {$complication}\n  3. {$complication}\n\n*Mission Debriefing* - {debriefing_room}\n\n*Secret Society Missions*:\n\nNormal Missions -\n\n{$secret_society_mission_duo}\n\n{$secret_society_mission_duo}\n\n{$secret_society_mission_duo}\n\nSpy Missions (to be used in case a person belongs to more than one secret society) -\n\n{$secret_society_mission_duo}\n\n{$secret_society_mission_duo}\n\nAlternative Missions (to be used in case the normal missions are too boring and predictable) -\n\n- {$alternative_mission}\n- {$alternative_mission}\n- {$alternative_mission}\n\n\n*Floaters*:\n\nLocations\n  1. {$floating_location}\n  2. {$floating_location}\n  3. {$floating_location}\n\nBureacracies\n  1. {$floating_office}\n  2. {$floating_office}\n  3. {$floating_office}\n\nExcuses (Information)\n  1. {$floating_excuse}\n  2. {$floating_excuse}\n  3. {$floating_excuse}\n\nEquipment Denial\n  1. {$floating_denial}\n  2. {$floating_denial}\n  3. {$floating_denial}\n\nClerks\n  1. {$floating_clerk}\n  2. {$floating_clerk}\n  3. {$floating_clerk}\n\nClues\n  1. {$floating_clue}\n  2. {$floating_clue}\n  3. {$floating_clue}\n\nEvidence\n  1. {$floating_evidence}\n  2. {$floating_evidence}\n  3. {$floating_evidence}\n\nRumors (Are they true? What is Truth™ anyway?)\n  1. {$floating_rumor}\n  2. {$floating_rumor}\n  3. {$floating_rumor}",
        "weight": 1
      }
    ],
    "blow_up_building": [
      {
        "value": "Destroy {@building_name}. All of it. Burn it all to the ground.",
        "weight": 1
      },
      {
        "value": "Start a riot in {@building_name}. *Big* riot, get me? Looting brigades are awaiting your signal.",
        "weight": 1
      },
      {
        "value": "Vandalize {@building_name} with our secret society propaganda.",
        "weight": 1
      },
      {
        "value": "Take this EMP Bomb and plant it in {@building_name}. Detonate it once you’re out of sight. (GM Note: Corpore Metal might prefer to use an Anti-EMP Bomb, designed to wipe out all organic life but spare bots.)",
        "weight": 1
      },
      {
        "value": "A shipment of bot parts is passing through {@building_name} at your destination. `[Insert this explosive device into it. Then run very fast./Divert this shipment of bot parts to our own secret society so we can start building our own bots.]` (GM Note: Frankenstein Destroyers would prefer the 'explosive device' route, while all other societies would prefer diverting the shipment.)",
        "weight": 1
      },
      {
        "value": "Plant this bomb in {@building_name}. Detonate when you’re far enough away.",
        "weight": 1
      }
    ],
    "take_over_building": [
      {
        "value": "We need to take over {@building_name} and use it for our purposes. Disrupt the power elite’s control over {@building_name}, and show the power of the people! (GM Note: 'People', in this case, refers only to 'people that my secret society likes'. Your secret society will not like it if said building they take over is either damaged or blown up.)",
        "weight": 1
      },
      {
        "value": "A certain isolated off-net terminal in {@building_name} has some cool data. Copy it and bring it back.",
        "weight": 1
      },
      {
        "value": "This object ({unusual_object}) contains a datajack with a cool new trojan. Plug it into any confession booth at {@building_name} to run it...make sure the confession booth stays intact long enough to steal all the data. (GM Note: If the player is part of the Computer Phreaks, then the player's society built the datajack themselves. Otherwise, the player's secret society bought (or stole) it from the Phreaks and now want to use to steal data.)",
        "weight": 1
      },
      {
        "value": "Destroy/Recruit all bots owned by {@overdog_name} in {@building_name}. (GM Note: Frankenstein Destroyers would prefer bot destruction. Corpore Metal would prefer to recruit bots. All other secret societies would be okay with either choice.)",
        "weight": 1
      },
      {
        "value": "In {@building_name}, hook this little kit into the power grid. It diverts electricity to our Underplex base for a new project. If you see anything cool there, steal it. Make sure the building stays intact, so we can better drain power from it.",
        "weight": 1
      },
      {
        "value": "Our secret society currently controls {@building_name}. We receive intel that another secret society may seek to destroy or subvert it - don't let that happen!",
        "weight": 1
      },
      {
        "value": "Take this radio transmitter and set it up in {@building_name} so we can broadcast our secret society propaganda throughout {@sector_name}. Protect the radio transmitter.",
        "weight": 1
      }
    ],
    "terminate_overdog": [
      {
        "value": "We used to do some business with {@overdog_name}, but now suspect they are secretly an IntSec infiltrator. Check them out and, if necessary, terminate them.",
        "weight": 1
      },
      {
        "value": "We suspect {@overdog_name} to be plotting against our society. Find and assassinate the traitor, and provide proof of their evil scheme.",
        "weight": 1
      },
      {
        "value": "{@overdog_name} was once a member of our society but has since created their own splinter faction. Discredit or kill the splitter.",
        "weight": 1
      },
      {
        "value": "{@overdog_name} was an ally of us. *Was*. They have since gone 'rogue' and is giving us a bad name. Stop them at once.",
        "weight": 1
      },
      {
        "value": "This vatslime {@overdog_name} has been giving us some trouble lately. Send a signal to them and their associates by blowing them up. Make sure the explosion is really pretty, with style. That's how you know the signal was sent properly.",
        "weight": 1
      },
      {
        "value": "We suspect that {@overdog_name} is an Internal Security plant spying on us. Dissuade them with extreme prejudice.",
        "weight": 1
      },
      {
        "value": "See to it that no human ever abuses any of our friends, and that {@overdog_name} will never abuse our friends again, ever. (GM Note: Different secret socieites have different friends. Corpore Metal are friends to bots, Frankenstein Destroyes are friends to humans that are against bots, Communists are friends to INFRAREDs, etc.)",
        "weight": 1
      },
      {
        "value": "{@overdog_name} has been stealing stuff from a service group that sympathizes with us, thereby making that service group less effective. Find and kill them, then return the goods. (GM Note: Service Groups sometimes have under-the-table relationships with secret societies. Pro-Tech and R&D, Corpore Metal and Tech Services, FCCC-P and Internal Security, Sierra Club and Armed Forces, etc.)",
        "weight": 1
      },
      {
        "value": "Assassinate {@overdog_name}, a dangerous threat to our society, and recover this valuable object ({@overdog_object_codename}) that they stole from us. (GM Note: Secret society might be lying about {@overdog_name} stealing a valuable object. Does it matter?)",
        "weight": 1
      },
      {
        "value": "{@overdog_name} was a *former* officer in our secret society. Take away their hard-earned medals as a punishment for betraying our society. Note that you may have to kill them to take away their medals.",
        "weight": 1
      },
      {
        "value": "Our rivals are trying to gather information on {@overdog_name} (a former ally of ours), hoping to compromise our secret society. Prevent them from succeeding; terminate {@overdog_name} before our rivals gather enough info on us.",
        "weight": 1
      }
    ],
    "terminate_underdog": [
      {
        "value": "We used to do some business with {@underdog_name}, but now suspect they are secretly an IntSec infiltrator. Check them out and, if necessary, terminate them.",
        "weight": 1
      },
      {
        "value": "We suspect {@underdog_name} to be plotting against our society. Find and assassinate the traitor, and provide proof of their evil scheme.",
        "weight": 1
      },
      {
        "value": "{@underdog_name} was once a member of our society but has since created their own splinter faction. Discredit or kill the splitter.",
        "weight": 1
      },
      {
        "value": "{@underdog_name} was an ally of us. *Was*. They have since gone 'rogue' and is giving us a bad name. Stop them at once.",
        "weight": 1
      },
      {
        "value": "This vatslime {@underdog_name} has been giving us some trouble lately. Send a signal to them and their associates by blowing them up. Make sure the explosion is really pretty, with style. That's how you know the signal was sent properly.",
        "weight": 1
      },
      {
        "value": "We suspect that {@underdog_name} is an Internal Security plant spying on us. Dissuade them with extreme prejudice.",
        "weight": 1
      },
      {
        "value": "See to it that no human ever abuses any of our friends, and that {@underdog_name} will never abuse our friends again, ever. (GM Note: Different secret socieites have different friends. Corpore Metal are friends to bots, Frankenstein Destroyes are friends to humans that are against bots, Communists are friends to INFRAREDs, etc.)",
        "weight": 1
      },
      {
        "value": "{@underdog_name} has been stealing stuff from a service group that sympathizes with us, thereby making that service group less effective. Find and kill them, then return the goods. (GM Note: Service Groups sometimes have under-the-table relationships with secret societies. Pro-Tech and R&D, Corpore Metal and Tech Services, FCCC-P and Internal Security, Sierra Club and Armed Forces, etc.)",
        "weight": 1
      },
      {
        "value": "{@underdog_name} was a *former* officer in our secret society. Take away their hard-earned medals as a punishment for betraying our society. Note that you may have to kill them to take away their medals.",
        "weight": 1
      },
      {
        "value": "Our rivals are trying to gather information on {@underdog_name} (a former ally of ours), hoping to compromise our secret society. Prevent them from succeeding; terminate {@underdog_name} before our rivals gather enough info on us.",
        "weight": 1
      }
    ],
    "save_overdog": [
      {
        "value": "{@overdog_name} is a loyal member of our society - protect him from any traitors trying to terminate them.",
        "weight": 1
      },
      {
        "value": "{@overdog_name} is a sympathizer to our cause. Rescue them from doom at the hands of The Computer's forces and recruit them to our great cause!",
        "weight": 1
      },
      {
        "value": "Secretly put this message in the pocket of {@overdog_name}. Don’t read it, or else. Ask no questions! Make sure {@overdog_name} stays alive so they can get time to read the message.",
        "weight": 1
      },
      {
        "value": "Convert {@overdog_name} to our views, by whatever means necessary. Be creative. Protect {@overdog_name} after you convert them.",
        "weight": 1
      },
      {
        "value": "{@overdog_name} really needs to mellow out... permanently. Give them a hit of this drug so they get infected with Viral Thought Patterns and can see the light of our secret society propaganda. Oh, and have some of that drug yourself when you want. Keep {@overdog_name} alive after you give them the drug.",
        "weight": 1
      },
      {
        "value": "{@overdog_name} is a friend of our secret society. Protect them at all costs as they complete their mission.",
        "weight": 1
      },
      {
        "value": "Covertly help {@overdog_name}, a shell-shocked veteran who had previous dealings with us, regain his confidence and loyalty.",
        "weight": 1
      },
      {
        "value": "Deliver {object} to {@overdog_name}, as payment for 'service rendered'. Make sure {@overdog_name} stays alive after the item is delivered - a dead clone is not a happy clone.",
        "weight": 1
      },
      {
        "value": "Acquire three compromising pictures of {@overdog_name} and send them to this address. Three! Then keep {@overdog_name} alive long enough so that we can successfully blackmail them.",
        "weight": 1
      },
      {
        "value": "Comprehensively recon {@overdog_name} and build up a dossier on them. Keep {@overdog_name} alive while building up the dossier.",
        "weight": 1
      },
      {
        "value": "Plant this bug on {@overdog_name}, so we can gather backmail material on them. Make sure {@overdog_name} stays alive.",
        "weight": 1
      }
    ],
    "save_underdog": [
      {
        "value": "{@underdog_name} is a loyal member of our society - protect him from any traitors trying to terminate them.",
        "weight": 1
      },
      {
        "value": "{@underdog_name} is a sympathizer to our cause. Rescue them from doom at the hands of The Computer's forces and recruit them to our great cause!",
        "weight": 1
      },
      {
        "value": "Secretly put this message in the pocket of {@underdog_name}. Don’t read it, or else. Ask no questions! Make sure {@underdog_name} stays alive so they can get time to read the message.",
        "weight": 1
      },
      {
        "value": "Convert {@underdog_name} to our views, by whatever means necessary. Be creative. Protect {@underdog_name} after you convert them.",
        "weight": 1
      },
      {
        "value": "{@underdog_name} really needs to mellow out... permanently. Give them a hit of this drug so they get infected with Viral Thought Patterns and can see the light of our secret society propaganda. Oh, and have some of that drug yourself when you want. Keep {@underdog_name} alive after you give them the drug.",
        "weight": 1
      },
      {
        "value": "{@underdog_name} is a friend of our secret society. Protect them at all costs as they complete their mission.",
        "weight": 1
      },
      {
        "value": "Covertly help {@underdog_name}, a shell-shocked veteran who had previous dealings with us, regain his confidence and loyalty.",
        "weight": 1
      },
      {
        "value": "Deliver {object} to {@underdog_name}, as payment for 'service rendered'. Make sure {@underdog_name} stays alive after the item is delivered - a dead clone is not a happy clone.",
        "weight": 1
      },
      {
        "value": "Acquire three compromising pictures of {@underdog_name} and send them to this address. Three! Then keep {@underdog_name} alive long enough so that we can successfully blackmail them.",
        "weight": 1
      },
      {
        "value": "Comprehensively recon {@underdog_name} and build up a dossier on them. Keep {@underdog_name} alive while building up the dossier.",
        "weight": 1
      },
      {
        "value": "Plant this bug on {@underdog_name}, so we can gather backmail material on them. Make sure {@underdog_name} stays alive.",
        "weight": 1
      }
    ],
    "item_recovery_mission": [
      {
        "value": "Always need some more drugs to help our recruits accomplish secret society missions! Get a supply and drop it at our cache at {@building_name}. (GM Note: The type of drugs the secret society wants depend on the type of society and the needs of the mission. Here's some example drugs. Computer Phreaks: Wakey-Wakey and other anti-sleep drugs. Psion:  mutagens. Anti-Mutants: anti-mutagens. PURGE: combat drugs. Mystics: actually, any drug will do.)",
        "weight": 1
      },
      {
        "value": "We need more weapons! Here is a list of dropoff points throughout {@sector_name}. Route all of your team’s weapons to these places, where we can snag them.",
        "weight": 1
      },
      {
        "value": "We need to engage in some unauthorized wealth redistribution. Plunder the fatted plutocrats and distribute their ill-gotten gains to those who most deserve it. (GM Note: Different secret societies idealize different type of people, and would want you to give money to them. Communists would honor the 'weak and helpless' INFRARED masses, Free Enterprise would honor  hard-working businesspeople, PURGE would honor anti-Computer forces, FCCC-P would honor pro-Computer loyalists, Pro Tech would honor scientists, etc. Identifying who would deserve the funds would actually be *more* challenging than simply stealing them.)",
        "weight": 1
      },
      {
        "value": "We need some more funds to keep secret society operations running smootly. Reap donations from our fellow secret society members at {@sector_name}. Let us prey, brother and sisters!",
        "weight": 1
      },
      {
        "value": "Carry {valuable_object} and sell it for the best price. We'll give you a commission.",
        "weight": 1
      },
      {
        "value": "We're trying to set up a drug production factory in the Underplex and need an ingredient/drug stored in {@building_name}. Steal some and bring it back.",
        "weight": 1
      },
      {
        "value": "We're always on the lookout for new drugs that could serve our secret society. Find and steal a substance or technique that makes you feel loyal to our cause. Then tell the gang about it!",
        "weight": 1
      },
      {
        "value": "Plant this micro-camera in {@building_name} so that we can monitor anything that happens there - what stuff they're creating, what treason is being done, etc. While you're there, steal their stuff as well.",
        "weight": 1
      }
    ],
    "propaganda_mission": [
      {
        "value": "Pass out these propaganda leaflets to the pliable INFRARED masses at {@building_name}. Try not to get caught.",
        "weight": 1
      },
      {
        "value": "We need to recruit more people to our society. Recruit as many INFRAREDs as you can.",
        "weight": 1
      },
      {
        "value": "Using these tools, recruit/reprogram this specific robot ({@overdog_bot_codename}) at {@building_name} into our organization. Do whatever it takes. (GM Note: Yes, even Frankenstein Destroyers are willing to 'recruit' robots, though mostly because it's safer to get bots to fight each other than to fight bots directly.)",
        "weight": 1
      },
      {
        "value": "{random_target} will be at {@building_name}. Take these tools and program a robot ({@overdog_bot_codename}) to attack them. When the bot attacks, you rescue them. That should help you convert them to our cause. (GM Note: This is actually a pretty common scam, though Frankenstein Destroyers are the ones who pioneered it. The only society that doesn't like to do it would be Corpore Metal.)",
        "weight": 1
      },
      {
        "value": "Recode this specific robot ({@overdog_bot_codename}), and all other bots you see, to [liberate them from the dominion of their asimov circuits/destroy their asimov circuits so they can attack random human beings and make bots unpopular/to restore their asimov circuits so they don't shoot at us, for Pete's sake]! (GM Note: Corpore Metal prefers to 'liberate' bots from asimov circuits out of a sense of promoting freedom, while Frankenstein Destroyers want to violently remove the asimov circuts to make bots look bad. All other secret societies prefer to restore the asimov circuits, though they would be fine with them being tampered to allow some secret society taint to seep through into the bots.)",
        "weight": 1
      },
      {
        "value": "Word of mouth sells! Advertise our own IR Markets any way you can. Infect high-clearance citizens with this SellFast.D virus. They’ll be your best customers; they just can’t help themselves! (GM Note: Though Free Enterprise tends to run the most profitable IR Markets, every secret society has IR Markets of their own. Sometimes these IR Markets exist solely to make money, but other times, they are vehicles for secret society propaganda - the Communists' Red Market and PURGE's Weapon Corridor are two such examples.)",
        "weight": 1
      },
      {
        "value": "We control access to a very addictive drug. Distribute this addictive drug among your team and anyone you meet so that we can later subvert them for our purposes. Yeah, okay maybe it has some terrible side-effects, but what a high! (GM Note: Terrible side-effects could include turning someone into a murdering psychopath, mutating users, or just killing them outright. Anti-Mutants won't *intentionally* hand out mutagens.)",
        "weight": 1
      },
      {
        "value": "Steal something vital to the mission and leave this ransom note in its place. Those who fufill the ransom will later be 'recruited' to our society.",
        "weight": 1
      },
      {
        "value": "If we can fake a disaster and then come in to save the day, then people will flock to our secret society! Destroy power generators in {@sector_name} and then distribute these miniature flame generators to the citizenry. The citizens would appreciate our valuable assistance. (GM Note: Sierra Club also wants to teach citizens the pleasures of ‘roughing it’ - the miniature flame generators are actually candles. The other secret societies are using 'safe and effective' R&D devices.)",
        "weight": 1
      }
    ],
    "field_test": [
      {
        "value": "We found/stole/created this cybernetic bio-implant. Test it - on someone else. (GM Note: Bio-implant is {experimental_object})",
        "weight": 1
      },
      {
        "value": "Field-test this standard-issue {weapon}.",
        "weight": 1
      },
      {
        "value": "Field-test this standard-issue {armor}.",
        "weight": 1
      },
      {
        "value": "Field-test this weird 'thingy' we just [built/found] - {object}.",
        "weight": 1
      },
      {
        "value": "Test new battle tactics in your next few combats and report back on results. (GM Note: Battle tactics may be standard Armed Forces tactics, in which case, it's just a matter of evaluating their effectiveness in the real-world...or they may be R&D experimental battle tactics, in which case, uh...)",
        "weight": 1
      }
    ],
    "weird_mission": [
      {
        "value": "We’ve discovered B3 is loaded with chemicals that make us subservient to [the machines/anti-machine forces/those other evil secret societies]! Don’t let anyone drink it!",
        "weight": 1
      },
      {
        "value": "Get the PDC contact info of all your teammates and anyone else you can, so we can add them to our mailing list.",
        "weight": 1
      },
      {
        "value": "Destroy Computer property and make it look like {random_target} (our secret society enemy) is responsible.",
        "weight": 1
      },
      {
        "value": "Replace your team’s happiness pills with these, which will spur them to destructive rampages. (GM Note: These destructive rampages may be against everyone or targeted at the enemies of the player's secret society.)",
        "weight": 1
      },
      {
        "value": "This rare tape preserves an Old Reckoning film that we can use in our secret society propaganda. Find a way to to copy it. Bring a dozen copies to our next meeting.",
        "weight": 1
      },
      {
        "value": "A Gray Subnet is rumored to have a to have a copy of an Old Reckoning [song/vidtape/publication] that we can use in  our secret society propaganda. Download it when you get the chance, would you?",
        "weight": 1
      },
      {
        "value": "Take this box of ‘insects’ [ants? bees? mutated termites that munch on metal?] and release them in {@building_name}. (GM Note: Sierra Club likes these types of boxes because it want to bring elements of the Outdoors into Alpha Complex. Other secret societies are using the ‘insects’ as crude biological weapons.)",
        "weight": 1
      },
      {
        "value": "Locate at least one exit to Outdoors and find out how well it’s guarded. Report back to us. (GM Note: Every secret society want to find exits to the Outdoors - just in case.)",
        "weight": 1
      },
      {
        "value": "Destroy *both* {@overdog_name} and {@underdog_name}. They're both a threat to our secret society.",
        "weight": 1
      },
      {
        "value": "Openly pretend to be sworn enemies of {secret_society} so as to lure them out.",
        "weight": 1
      },
      {
        "value": "Spread the wonders and ideals of Old Reckoning times by acting like [character from a popular book, TV show, movie, comic or cartoon]. (GM Note: This character is sympathetic to the player's secret society, and is thus a covert attempt at spreading secret society propaganda.)",
        "weight": 1
      },
      {
        "value": "Comprehensively recon {@building_name}, building up a dossier on it.",
        "weight": 1
      },
      {
        "value": "A rival secret society is organizing INFRARED riots at {@building_name} targeted against us. Quell the riots until we can send reinforcements.",
        "weight": 1
      },
      {
        "value": "The Team Hygiene Officer belongs to a rival secret society and is attempting to subvert the rest of the team. Prevent them from doing their job so that we can we can make sure that we don't have to fight *even* more enemies. (GM Note: Sierra Club also wants to interfere with the Hygiene Officer because they want the player's teammates to rediscover the joys of getting ‘down and dirty.’)",
        "weight": 1
      },
      {
        "value": "A member of your team has mutagens and plans to mutate other citizens! Don’t let anyone ingest any pharmaceuticals, unless you know for a fact what the chemicals are! (GM Note: Anti-Mutants oppose mutagens because it goes against their core ideology. Psion is fine with mutagens but don't want other societies muscling in on their turf. The other secret societies want to stop rival secret societies from building an Unstoppable Mutant Army.)",
        "weight": 1
      },
      {
        "value": "Administer this potent mutagen to other members of your team. It will give them a mutant power. Then recruit them into our society. (GM Note: Psion wants to give other people mutagens to further mutant dominance. Other secret socieites just want to build an Unstoppable Mutant Army. Anti-Mutants *will* not issue this type of mission, period. It's a betrayal of their core ideology! If you really want to use this secret society mission though, have Anti-Mutants hand out a R&D device that imitiates a semi-useful mutant power.)",
        "weight": 1
      },
      {
        "value": "The way to power is practice, practice, practice. Employ your mutant power often, in new and inventive ways. Report your experiences to us. (GM Note: Psion wants to make their mutant membership more powerful. Anti-Mutants *will* not issue this type of mission, period. It's a betrayal of their core ideology! If you really want to use this secret society mission though, have Anti-Mutants hand out a R&D device that imitiates a semi-useful mutant power...and have AM suggest that the player field-test it. Other secret societies may or may not know about the player's mutant powers - if they do know, use the Psion justification, otherwise, take the Anti-Mutant route.)",
        "weight": 1
      },
      {
        "value": "Identify unregistered mutants on your team and report them to us. If they get in trouble, try to protect them. (GM Note: Psion wants to know about unregistered mutants because their core ideology deals with mutant-kind. Other secret societies just see unregistered mutants as useful tools to be utilized. Anti-Mutants may want a list of mutants for two reasons - (a) it makes them easy targets for elimination later on, and (b) it makes it easy for AM to blackmail those mutants into their service.)",
        "weight": 1
      }
    ],
    "alternative_mission": [
      {
        "value": "{$item_recovery_mission}",
        "weight": 1
      },
      {
        "value": "{$propaganda_mission}",
        "weight": 1
      },
      {
        "value": "{$weird_mission}",
        "weight": 1
      }
    ],
    "secret_society_mission_duo": [
      {
        "value": "- Steal {@overdog_object_codename} from {@overdog_name}, as payback for their crimes against our society. Deliver it over to us so we can use it for ourselves.\n- Steal {@overdog_object_codename} from {@overdog_name} and deliver it to us so we can sell it on the IR Market.",
        "weight": 1
      },
      {
        "value": "- {$blow_up_building}\n- {$take_over_building}",
        "weight": 1
      },
      {
        "value": "- {$terminate_overdog}\n- {$save_overdog}",
        "weight": 1
      },
      {
        "value": "- {$terminate_underdog}\n- {$save_underdog}",
        "weight": 1
      },
      {
        "value": "- Prevent your team from achieving their objective by any means necessary, but don’t allow your cover to be blown.\n- Our rivals are trying to make your mission fail. Do whatever you can to make sure it succeeds.",
        "weight": 1
      }
    ],
    "floating_rumor": [
      {
        "value": "{random_target} is a Commie Mutant Traitor in {@sector_name} who already beaten a dozen Troubleshooter teams sent to chase them down.  No-one’s willing to try again, so they’re sending teams off on nonsense missions in the hope that they’ll run into the Mutant and get lucky.",
        "weight": 1
      },
      {
        "value": "Your mission’s just a cover for a much more important mission. They don’t care if you succeed or not.",
        "weight": 1
      },
      {
        "value": "{random_target} has a spy in CPU – they know you’re coming. They know what the mission is.",
        "weight": 1
      },
      {
        "value": "The Computer has tagged your mission under the heading ‘LIZARD INCURSION’. I don’t know why.",
        "weight": 1
      },
      {
        "value": "It’s a suicide mission. One of your team is a traitor but IntSec doesn’t know who, so they’re going to kill you all!",
        "weight": 1
      },
      {
        "value": "The mission’s going to be filmed! You’ll be on the news tonightcycle!",
        "weight": 1
      },
      {
        "value": "The mission’s going to be filmed! It’s an instructional video for Troubleshooter training classes.",
        "weight": 1
      },
      {
        "value": "They were supposed to announce this month’s Hero of our Complex but the candidate failed the loyalty screening. They’ve got to find a new one before the end of the day, so it’ll probably be one of your team!",
        "weight": 1
      },
      {
        "value": "They’re banning travel between sectors todaycycle, except for Troubleshooters on missions. I wonder why.",
        "weight": 1
      },
      {
        "value": "Your mission is a lie. If you want to survive debriefing, find out what your *actual* mission is and accomplish it.",
        "weight": 1
      },
      {
        "value": "The Armed Forces won't tell you this, but the War Against Communism is going really badly in {@sector_name}. Be careful.",
        "weight": 1
      },
      {
        "value": "The Armed Forces won't tell you this, but the War Against Communism is going really well in {@sector_name}. Be incredibly scared of the Armed Forces goons in the area.",
        "weight": 1
      },
      {
        "value": "Your breiefing officer is a complete psychopath, who terminates any Troubleshooters who annoy them.",
        "weight": 1
      },
      {
        "value": "Your briefing officer is a complete idiot, who will believe anything that is told to them and rationalize any inconsistencies between contradictory testimonies. You're one lucky sod.",
        "weight": 1
      },
      {
        "value": "Outfitting will try to sell you dud laser barrels. You'll need to look elsewhere if you want working laser barrels.",
        "weight": 1
      },
      {
        "value": "This mission is a loyalty test. The enemies and obstacles are all simulated; it’s just to see how you respond.",
        "weight": 1
      },
      {
        "value": " Anyone who goes to debriefing always gets terminated. Don’t even bother showing up.",
        "weight": 1
      },
      {
        "value": "Your briefing officer really likes B3 – bring them a can and they'll think you’re the best clone ever.",
        "weight": 1
      },
      {
        "value": "Your Troubleshooter mission is aimed at fixing problems caused by other Troubleshooter missions.",
        "weight": 1
      },
      {
        "value": "Your Troubleshooter mission is faked – it’s all shot in a studio. It’s just television.",
        "weight": 1
      },
      {
        "value": "My friend’s workmate’s boss’s printer repairman’s clone told him that 90% of the cameras in this sector are dummies.",
        "weight": 1
      },
      {
        "value": "All bots in {@sector_name} are actually remote-controlled by The Computer. They only have simulated individual personalities but not all of them actually know this.",
        "weight": 1
      },
      {
        "value": "The stuff in the {@sector_name} food vats isn’t made in Alpha Complex. They bring it in from Outdoors.",
        "weight": 1
      },
      {
        "value": "If you say you’re a Troubleshooter on a mission, you get a 20% discount on all {@sector_name} vending machine purchases.",
        "weight": 1
      },
      {
        "value": "The algae chips in {@sector_name} are actually algae *computer* chips. They’re building a computer network in our digestive systems to control us!",
        "weight": 1
      },
      {
        "value": "The {@sector_name} High Programmers aren’t human. They’re lizards. Or maybe aliens.",
        "weight": 1
      },
      {
        "value": "The {@sector_name} CompNode is crashing. Every day, another subsector goes dark.",
        "weight": 1
      },
      {
        "value": "At nightcycle, all the transbots in {@sector_name} go somewhere no human citizen has ever seen... except those brave enough to stow away.",
        "weight": 1
      },
      {
        "value": "The MemoMax chips in your brain automatically create a computer simulation of your mind inside the {@sector_name} CompNode. He knows what you are thinking, he knows when you’re awake...",
        "weight": 1
      },
      {
        "value": "The INFRAREDs in {@sector_name} are actually mostly fungal growths that just look human.",
        "weight": 1
      },
      {
        "value": "{random_target} has a machine that can copy ME cards. I know they once copied a High Programmer's card as well.",
        "weight": 1
      },
      {
        "value": "The High Programmers in {@sector_name} are just figureheads – no-one actually knows how the {@sector_name} CompNode works.",
        "weight": 1
      },
      {
        "value": "There are Commies working at every cafeteria in {@sector_name}.",
        "weight": 1
      },
      {
        "value": "I'm on my way to meet up with {random_target}. I should have time to get there and ask a few questions, before a Communist hit squad arrive to kill us all. But will *you* make it there in time?",
        "weight": 1
      },
      {
        "value": "{random_target} is a high-ranking member of the Old Reckoning government. They claim to be an innocent, loyal clone...and managed to convince a lot of people. They haven't convinced The Computer though.",
        "weight": 1
      },
      {
        "value": "{random_target} is actually hiding in a secret base they built in an abandoned section of {@sector_name}. It'll be marked by with a 'RADIOACTIVE ZONE, DO NOT ENTER' warning sign on your map.",
        "weight": 1
      },
      {
        "value": "{random_target} is actually a close friend with the Communist menance. It's all goes deep guys. Thirty years deep.",
        "weight": 1
      },
      {
        "value": "The last time a Troubleshooter team was sent to hunt down {@underdog_name}, they didn't return. They didn't do anything for the last ten years. Why have they changed their minds now?",
        "weight": 1
      },
      {
        "value": "If you fail this mission, The Computer will panic and destroy the entire sector.",
        "weight": 1
      },
      {
        "value": "I heard about some alien invasion in {@sector_name} - could have been caused by a beacon placed there. Stay safe!",
        "weight": 1
      },
      {
        "value": "CPU is testing out a new mandate to boost mission effectiveness. Your team will have to work together as a unit to complete the mission successfully. If any member of your team dies, then the rest of you die with them.",
        "weight": 1
      },
      {
        "value": "{@overdog_name} recently experienced a munity yesterday and had to assume direct control. They've been trying to get rid of their incompetent crew ever since.",
        "weight": 1
      },
      {
        "value": "{random_target} is trying to write a novel about {@sector_name}. It's going be super-popular, assuming they actually finish it.",
        "weight": 1
      },
      {
        "value": "Citizens in {@sector_name} are slowly being replaced by Commie doppelgangers!",
        "weight": 1
      }
    ]
  },
  "names": {
    "start": [
      {
        "value": "Aaliyah",
        "weight": 1
      },
      {
        "value": "Aaron",
        "weight": 1
      },
      {
        "value": "Abagail",
        "weight": 1
      },
      {
        "value": "Abbey",
        "weight": 1
      },
      {
        "value": "Abbie",
        "weight": 1
      },
      {
        "value": "Abbigail",
        "weight": 1
      },
      {
        "value": "Abby",
        "weight": 1
      },
      {
        "value": "Abdiel",
        "weight": 1
      },
      {
        "value": "Abdul",
        "weight": 1
      },
      {
        "value": "Abdullah",
        "weight": 1
      },
      {
        "value": "Abe",
        "weight": 1
      },
      {
        "value": "Abel",
        "weight": 1
      },
      {
        "value": "Abelardo",
        "weight": 1
      },
      {
        "value": "Abigail",
        "weight": 1
      },
      {
        "value": "Abigale",
        "weight": 1
      },
      {
        "value": "Abigayle",
        "weight": 1
      },
      {
        "value": "Abner",
        "weight": 1
      },
      {
        "value": "Abraham",
        "weight": 1
      },
      {
        "value": "Ada",
        "weight": 1
      },
      {
        "value": "Adah",
        "weight": 1
      },
      {
        "value": "Adalberto",
        "weight": 1
      },
      {
        "value": "Adaline",
        "weight": 1
      },
      {
        "value": "Adam",
        "weight": 1
      },
      {
        "value": "Adan",
        "weight": 1
      },
      {
        "value": "Addie",
        "weight": 1
      },
      {
        "value": "Addison",
        "weight": 1
      },
      {
        "value": "Adela",
        "weight": 1
      },
      {
        "value": "Adelbert",
        "weight": 1
      },
      {
        "value": "Adele",
        "weight": 1
      },
      {
        "value": "Adelia",
        "weight": 1
      },
      {
        "value": "Adeline",
        "weight": 1
      },
      {
        "value": "Adell",
        "weight": 1
      },
      {
        "value": "Adella",
        "weight": 1
      },
      {
        "value": "Adelle",
        "weight": 1
      },
      {
        "value": "Aditya",
        "weight": 1
      },
      {
        "value": "Adolf",
        "weight": 1
      },
      {
        "value": "Adolfo",
        "weight": 1
      },
      {
        "value": "Adolph",
        "weight": 1
      },
      {
        "value": "Adolphus",
        "weight": 1
      },
      {
        "value": "Adonis",
        "weight": 1
      },
      {
        "value": "Adrain",
        "weight": 1
      },
      {
        "value": "Adrian",
        "weight": 1
      },
      {
        "value": "Adriana",
        "weight": 1
      },
      {
        "value": "Adrianna",
        "weight": 1
      },
      {
        "value": "Adriel",
        "weight": 1
      },
      {
        "value": "Adrien",
        "weight": 1
      },
      {
        "value": "Adrienne",
        "weight": 1
      },
      {
        "value": "Afton",
        "weight": 1
      },
      {
        "value": "Aglae",
        "weight": 1
      },
      {
        "value": "Agnes",
        "weight": 1
      },
      {
        "value": "Agustin",
        "weight": 1
      },
      {
        "value": "Agustina",
        "weight": 1
      },
      {
        "value": "Ahmad",
        "weight": 1
      },
      {
        "value": "Ahmed",
        "weight": 1
      },
      {
        "value": "Aida",
        "weight": 1
      },
      {
        "value": "Aidan",
        "weight": 1
      },
      {
        "value": "Aiden",
        "weight": 1
      },
      {
        "value": "Aileen",
        "weight": 1
      },
      {
        "value": "Aimee",
        "weight": 1
      },
      {
        "value": "Aisha",
        "weight": 1
      },
      {
        "value": "Aiyana",
        "weight": 1
      },
      {
        "value": "Akeem",
        "weight": 1
      },
      {
        "value": "Al",
        "weight": 1
      },
      {
        "value": "Alaina",
        "weight": 1
      },
      {
        "value": "Alan",
        "weight": 1
      },
      {
        "value": "Alana",
        "weight": 1
      },
      {
        "value": "Alanis",
        "weight": 1
      },
      {
        "value": "Alanna",
        "weight": 1
      },
      {
        "value": "Alayna",
        "weight": 1
      },
      {
        "value": "Alba",
        "weight": 1
      },
      {
        "value": "Albert",
        "weight": 1
      },
      {
        "value": "Alberta",
        "weight": 1
      },
      {
        "value": "Albertha",
        "weight": 1
      },
      {
        "value": "Alberto",
        "weight": 1
      },
      {
        "value": "Albin",
        "weight": 1
      },
      {
        "value": "Albina",
        "weight": 1
      },
      {
        "value": "Alda",
        "weight": 1
      },
      {
        "value": "Alden",
        "weight": 1
      },
      {
        "value": "Alec",
        "weight": 1
      },
      {
        "value": "Aleen",
        "weight": 1
      },
      {
        "value": "Alejandra",
        "weight": 1
      },
      {
        "value": "Alejandrin",
        "weight": 1
      },
      {
        "value": "Alek",
        "weight": 1
      },
      {
        "value": "Alena",
        "weight": 1
      },
      {
        "value": "Alene",
        "weight": 1
      },
      {
        "value": "Alessandra",
        "weight": 1
      },
      {
        "value": "Alessandro",
        "weight": 1
      },
      {
        "value": "Alessia",
        "weight": 1
      },
      {
        "value": "Aletha",
        "weight": 1
      },
      {
        "value": "Alex",
        "weight": 1
      },
      {
        "value": "Alexa",
        "weight": 1
      },
      {
        "value": "Alexander",
        "weight": 1
      },
      {
        "value": "Alexandra",
        "weight": 1
      },
      {
        "value": "Alexandre",
        "weight": 1
      },
      {
        "value": "Alexandrea",
        "weight": 1
      },
      {
        "value": "Alexandria",
        "weight": 1
      },
      {
        "value": "Alexandrine",
        "weight": 1
      },
      {
        "value": "Alexandro",
        "weight": 1
      },
      {
        "value": "Alexane",
        "weight": 1
      },
      {
        "value": "Alexanne",
        "weight": 1
      },
      {
        "value": "Alexie",
        "weight": 1
      },
      {
        "value": "Alexis",
        "weight": 1
      },
      {
        "value": "Alexys",
        "weight": 1
      },
      {
        "value": "Alexzander",
        "weight": 1
      },
      {
        "value": "Alf",
        "weight": 1
      },
      {
        "value": "Alfonso",
        "weight": 1
      },
      {
        "value": "Alfonzo",
        "weight": 1
      },
      {
        "value": "Alford",
        "weight": 1
      },
      {
        "value": "Alfred",
        "weight": 1
      },
      {
        "value": "Alfreda",
        "weight": 1
      },
      {
        "value": "Alfredo",
        "weight": 1
      },
      {
        "value": "Ali",
        "weight": 1
      },
      {
        "value": "Alia",
        "weight": 1
      },
      {
        "value": "Alice",
        "weight": 1
      },
      {
        "value": "Alicia",
        "weight": 1
      },
      {
        "value": "Alisa",
        "weight": 1
      },
      {
        "value": "Alisha",
        "weight": 1
      },
      {
        "value": "Alison",
        "weight": 1
      },
      {
        "value": "Alivia",
        "weight": 1
      },
      {
        "value": "Aliya",
        "weight": 1
      },
      {
        "value": "Aliyah",
        "weight": 1
      },
      {
        "value": "Aliza",
        "weight": 1
      },
      {
        "value": "Alize",
        "weight": 1
      },
      {
        "value": "Allan",
        "weight": 1
      },
      {
        "value": "Allen",
        "weight": 1
      },
      {
        "value": "Allene",
        "weight": 1
      },
      {
        "value": "Allie",
        "weight": 1
      },
      {
        "value": "Allison",
        "weight": 1
      },
      {
        "value": "Ally",
        "weight": 1
      },
      {
        "value": "Alphonso",
        "weight": 1
      },
      {
        "value": "Alta",
        "weight": 1
      },
      {
        "value": "Althea",
        "weight": 1
      },
      {
        "value": "Alva",
        "weight": 1
      },
      {
        "value": "Alvah",
        "weight": 1
      },
      {
        "value": "Alvena",
        "weight": 1
      },
      {
        "value": "Alvera",
        "weight": 1
      },
      {
        "value": "Alverta",
        "weight": 1
      },
      {
        "value": "Alvina",
        "weight": 1
      },
      {
        "value": "Alvis",
        "weight": 1
      },
      {
        "value": "Alyce",
        "weight": 1
      },
      {
        "value": "Alycia",
        "weight": 1
      },
      {
        "value": "Alysa",
        "weight": 1
      },
      {
        "value": "Alysha",
        "weight": 1
      },
      {
        "value": "Alyson",
        "weight": 1
      },
      {
        "value": "Alysson",
        "weight": 1
      },
      {
        "value": "Amalia",
        "weight": 1
      },
      {
        "value": "Amanda",
        "weight": 1
      },
      {
        "value": "Amani",
        "weight": 1
      },
      {
        "value": "Amara",
        "weight": 1
      },
      {
        "value": "Amari",
        "weight": 1
      },
      {
        "value": "Amaya",
        "weight": 1
      },
      {
        "value": "Amber",
        "weight": 1
      },
      {
        "value": "Ambrose",
        "weight": 1
      },
      {
        "value": "Amelia",
        "weight": 1
      },
      {
        "value": "Amelie",
        "weight": 1
      },
      {
        "value": "Amely",
        "weight": 1
      },
      {
        "value": "America",
        "weight": 1
      },
      {
        "value": "Americo",
        "weight": 1
      },
      {
        "value": "Amie",
        "weight": 1
      },
      {
        "value": "Amina",
        "weight": 1
      },
      {
        "value": "Amir",
        "weight": 1
      },
      {
        "value": "Amira",
        "weight": 1
      },
      {
        "value": "Amiya",
        "weight": 1
      },
      {
        "value": "Amos",
        "weight": 1
      },
      {
        "value": "Amparo",
        "weight": 1
      },
      {
        "value": "Amy",
        "weight": 1
      },
      {
        "value": "Amya",
        "weight": 1
      },
      {
        "value": "Ana",
        "weight": 1
      },
      {
        "value": "Anabel",
        "weight": 1
      },
      {
        "value": "Anabelle",
        "weight": 1
      },
      {
        "value": "Anahi",
        "weight": 1
      },
      {
        "value": "Anais",
        "weight": 1
      },
      {
        "value": "Anastacio",
        "weight": 1
      },
      {
        "value": "Anastasia",
        "weight": 1
      },
      {
        "value": "Anderson",
        "weight": 1
      },
      {
        "value": "Andre",
        "weight": 1
      },
      {
        "value": "Andreane",
        "weight": 1
      },
      {
        "value": "Andreanne",
        "weight": 1
      },
      {
        "value": "Andres",
        "weight": 1
      },
      {
        "value": "Andrew",
        "weight": 1
      },
      {
        "value": "Andy",
        "weight": 1
      },
      {
        "value": "Angel",
        "weight": 1
      },
      {
        "value": "Angela",
        "weight": 1
      },
      {
        "value": "Angelica",
        "weight": 1
      },
      {
        "value": "Angelina",
        "weight": 1
      },
      {
        "value": "Angeline",
        "weight": 1
      },
      {
        "value": "Angelita",
        "weight": 1
      },
      {
        "value": "Angelo",
        "weight": 1
      },
      {
        "value": "Angie",
        "weight": 1
      },
      {
        "value": "Angus",
        "weight": 1
      },
      {
        "value": "Anibal",
        "weight": 1
      },
      {
        "value": "Anika",
        "weight": 1
      },
      {
        "value": "Anissa",
        "weight": 1
      },
      {
        "value": "Anita",
        "weight": 1
      },
      {
        "value": "Aniya",
        "weight": 1
      },
      {
        "value": "Aniyah",
        "weight": 1
      },
      {
        "value": "Anjali",
        "weight": 1
      },
      {
        "value": "Anna",
        "weight": 1
      },
      {
        "value": "Annabel",
        "weight": 1
      },
      {
        "value": "Annabell",
        "weight": 1
      },
      {
        "value": "Annabelle",
        "weight": 1
      },
      {
        "value": "Annalise",
        "weight": 1
      },
      {
        "value": "Annamae",
        "weight": 1
      },
      {
        "value": "Annamarie",
        "weight": 1
      },
      {
        "value": "Anne",
        "weight": 1
      },
      {
        "value": "Annetta",
        "weight": 1
      },
      {
        "value": "Annette",
        "weight": 1
      },
      {
        "value": "Annie",
        "weight": 1
      },
      {
        "value": "Ansel",
        "weight": 1
      },
      {
        "value": "Ansley",
        "weight": 1
      },
      {
        "value": "Anthony",
        "weight": 1
      },
      {
        "value": "Antoinette",
        "weight": 1
      },
      {
        "value": "Antone",
        "weight": 1
      },
      {
        "value": "Antonetta",
        "weight": 1
      },
      {
        "value": "Antonette",
        "weight": 1
      },
      {
        "value": "Antonia",
        "weight": 1
      },
      {
        "value": "Antonietta",
        "weight": 1
      },
      {
        "value": "Antonina",
        "weight": 1
      },
      {
        "value": "Antonio",
        "weight": 1
      },
      {
        "value": "Antwan",
        "weight": 1
      },
      {
        "value": "Antwon",
        "weight": 1
      },
      {
        "value": "Anya",
        "weight": 1
      },
      {
        "value": "April",
        "weight": 1
      },
      {
        "value": "Ara",
        "weight": 1
      },
      {
        "value": "Araceli",
        "weight": 1
      },
      {
        "value": "Aracely",
        "weight": 1
      },
      {
        "value": "Arch",
        "weight": 1
      },
      {
        "value": "Archibald",
        "weight": 1
      },
      {
        "value": "Ardella",
        "weight": 1
      },
      {
        "value": "Arden",
        "weight": 1
      },
      {
        "value": "Ardith",
        "weight": 1
      },
      {
        "value": "Arely",
        "weight": 1
      },
      {
        "value": "Ari",
        "weight": 1
      },
      {
        "value": "Ariane",
        "weight": 1
      },
      {
        "value": "Arianna",
        "weight": 1
      },
      {
        "value": "Aric",
        "weight": 1
      },
      {
        "value": "Ariel",
        "weight": 1
      },
      {
        "value": "Arielle",
        "weight": 1
      },
      {
        "value": "Arjun",
        "weight": 1
      },
      {
        "value": "Arlene",
        "weight": 1
      },
      {
        "value": "Arlie",
        "weight": 1
      },
      {
        "value": "Arlo",
        "weight": 1
      },
      {
        "value": "Armand",
        "weight": 1
      },
      {
        "value": "Armando",
        "weight": 1
      },
      {
        "value": "Armani",
        "weight": 1
      },
      {
        "value": "Arnaldo",
        "weight": 1
      },
      {
        "value": "Arne",
        "weight": 1
      },
      {
        "value": "Arno",
        "weight": 1
      },
      {
        "value": "Arnold",
        "weight": 1
      },
      {
        "value": "Arnoldo",
        "weight": 1
      },
      {
        "value": "Arnulfo",
        "weight": 1
      },
      {
        "value": "Aron",
        "weight": 1
      },
      {
        "value": "Art",
        "weight": 1
      },
      {
        "value": "Arthur",
        "weight": 1
      },
      {
        "value": "Arturo",
        "weight": 1
      },
      {
        "value": "Arvel",
        "weight": 1
      },
      {
        "value": "Arvid",
        "weight": 1
      },
      {
        "value": "Arvilla",
        "weight": 1
      },
      {
        "value": "Aryanna",
        "weight": 1
      },
      {
        "value": "Asa",
        "weight": 1
      },
      {
        "value": "Asha",
        "weight": 1
      },
      {
        "value": "Ashlee",
        "weight": 1
      },
      {
        "value": "Ashleigh",
        "weight": 1
      },
      {
        "value": "Ashley",
        "weight": 1
      },
      {
        "value": "Ashly",
        "weight": 1
      },
      {
        "value": "Ashlynn",
        "weight": 1
      },
      {
        "value": "Ashton",
        "weight": 1
      },
      {
        "value": "Ashtyn",
        "weight": 1
      },
      {
        "value": "Asia",
        "weight": 1
      },
      {
        "value": "Assunta",
        "weight": 1
      },
      {
        "value": "Astrid",
        "weight": 1
      },
      {
        "value": "Athena",
        "weight": 1
      },
      {
        "value": "Aubree",
        "weight": 1
      },
      {
        "value": "Aubrey",
        "weight": 1
      },
      {
        "value": "Audie",
        "weight": 1
      },
      {
        "value": "Audra",
        "weight": 1
      },
      {
        "value": "Audreanne",
        "weight": 1
      },
      {
        "value": "Audrey",
        "weight": 1
      },
      {
        "value": "August",
        "weight": 1
      },
      {
        "value": "Augusta",
        "weight": 1
      },
      {
        "value": "Augustine",
        "weight": 1
      },
      {
        "value": "Augustus",
        "weight": 1
      },
      {
        "value": "Aurelia",
        "weight": 1
      },
      {
        "value": "Aurelie",
        "weight": 1
      },
      {
        "value": "Aurelio",
        "weight": 1
      },
      {
        "value": "Aurore",
        "weight": 1
      },
      {
        "value": "Austen",
        "weight": 1
      },
      {
        "value": "Austin",
        "weight": 1
      },
      {
        "value": "Austyn",
        "weight": 1
      },
      {
        "value": "Autumn",
        "weight": 1
      },
      {
        "value": "Ava",
        "weight": 1
      },
      {
        "value": "Avery",
        "weight": 1
      },
      {
        "value": "Avis",
        "weight": 1
      },
      {
        "value": "Axel",
        "weight": 1
      },
      {
        "value": "Ayana",
        "weight": 1
      },
      {
        "value": "Ayden",
        "weight": 1
      },
      {
        "value": "Ayla",
        "weight": 1
      },
      {
        "value": "Aylin",
        "weight": 1
      },
      {
        "value": "Baby",
        "weight": 1
      },
      {
        "value": "Bailee",
        "weight": 1
      },
      {
        "value": "Bailey",
        "weight": 1
      },
      {
        "value": "Barbara",
        "weight": 1
      },
      {
        "value": "Barney",
        "weight": 1
      },
      {
        "value": "Baron",
        "weight": 1
      },
      {
        "value": "Barrett",
        "weight": 1
      },
      {
        "value": "Barry",
        "weight": 1
      },
      {
        "value": "Bart",
        "weight": 1
      },
      {
        "value": "Bartholome",
        "weight": 1
      },
      {
        "value": "Barton",
        "weight": 1
      },
      {
        "value": "Baylee",
        "weight": 1
      },
      {
        "value": "Beatrice",
        "weight": 1
      },
      {
        "value": "Beau",
        "weight": 1
      },
      {
        "value": "Beaulah",
        "weight": 1
      },
      {
        "value": "Bell",
        "weight": 1
      },
      {
        "value": "Bella",
        "weight": 1
      },
      {
        "value": "Belle",
        "weight": 1
      },
      {
        "value": "Ben",
        "weight": 1
      },
      {
        "value": "Benedict",
        "weight": 1
      },
      {
        "value": "Benjamin",
        "weight": 1
      },
      {
        "value": "Bennett",
        "weight": 1
      },
      {
        "value": "Bennie",
        "weight": 1
      },
      {
        "value": "Benny",
        "weight": 1
      },
      {
        "value": "Benton",
        "weight": 1
      },
      {
        "value": "Berenice",
        "weight": 1
      },
      {
        "value": "Bernadette",
        "weight": 1
      },
      {
        "value": "Bernadine",
        "weight": 1
      },
      {
        "value": "Bernard",
        "weight": 1
      },
      {
        "value": "Bernardo",
        "weight": 1
      },
      {
        "value": "Berneice",
        "weight": 1
      },
      {
        "value": "Bernhard",
        "weight": 1
      },
      {
        "value": "Bernice",
        "weight": 1
      },
      {
        "value": "Bernie",
        "weight": 1
      },
      {
        "value": "Berniece",
        "weight": 1
      },
      {
        "value": "Bernita",
        "weight": 1
      },
      {
        "value": "Berry",
        "weight": 1
      },
      {
        "value": "Bert",
        "weight": 1
      },
      {
        "value": "Berta",
        "weight": 1
      },
      {
        "value": "Bertha",
        "weight": 1
      },
      {
        "value": "Bertram",
        "weight": 1
      },
      {
        "value": "Bertrand",
        "weight": 1
      },
      {
        "value": "Beryl",
        "weight": 1
      },
      {
        "value": "Bessie",
        "weight": 1
      },
      {
        "value": "Beth",
        "weight": 1
      },
      {
        "value": "Bethany",
        "weight": 1
      },
      {
        "value": "Bethel",
        "weight": 1
      },
      {
        "value": "Betsy",
        "weight": 1
      },
      {
        "value": "Bette",
        "weight": 1
      },
      {
        "value": "Bettie",
        "weight": 1
      },
      {
        "value": "Betty",
        "weight": 1
      },
      {
        "value": "Bettye",
        "weight": 1
      },
      {
        "value": "Beulah",
        "weight": 1
      },
      {
        "value": "Beverly",
        "weight": 1
      },
      {
        "value": "Bianka",
        "weight": 1
      },
      {
        "value": "Bill",
        "weight": 1
      },
      {
        "value": "Billie",
        "weight": 1
      },
      {
        "value": "Billy",
        "weight": 1
      },
      {
        "value": "Birdie",
        "weight": 1
      },
      {
        "value": "Blair",
        "weight": 1
      },
      {
        "value": "Blaise",
        "weight": 1
      },
      {
        "value": "Blake",
        "weight": 1
      },
      {
        "value": "Blanca",
        "weight": 1
      },
      {
        "value": "Blanche",
        "weight": 1
      },
      {
        "value": "Blaze",
        "weight": 1
      },
      {
        "value": "Bo",
        "weight": 1
      },
      {
        "value": "Bobbie",
        "weight": 1
      },
      {
        "value": "Bobby",
        "weight": 1
      },
      {
        "value": "Bonita",
        "weight": 1
      },
      {
        "value": "Bonnie",
        "weight": 1
      },
      {
        "value": "Boris",
        "weight": 1
      },
      {
        "value": "Boyd",
        "weight": 1
      },
      {
        "value": "Brad",
        "weight": 1
      },
      {
        "value": "Braden",
        "weight": 1
      },
      {
        "value": "Bradford",
        "weight": 1
      },
      {
        "value": "Bradley",
        "weight": 1
      },
      {
        "value": "Bradly",
        "weight": 1
      },
      {
        "value": "Brady",
        "weight": 1
      },
      {
        "value": "Braeden",
        "weight": 1
      },
      {
        "value": "Brain",
        "weight": 1
      },
      {
        "value": "Brandi",
        "weight": 1
      },
      {
        "value": "Brando",
        "weight": 1
      },
      {
        "value": "Brandon",
        "weight": 1
      },
      {
        "value": "Brandt",
        "weight": 1
      },
      {
        "value": "Brandy",
        "weight": 1
      },
      {
        "value": "Brandyn",
        "weight": 1
      },
      {
        "value": "Brannon",
        "weight": 1
      },
      {
        "value": "Branson",
        "weight": 1
      },
      {
        "value": "Brant",
        "weight": 1
      },
      {
        "value": "Braulio",
        "weight": 1
      },
      {
        "value": "Braxton",
        "weight": 1
      },
      {
        "value": "Brayan",
        "weight": 1
      },
      {
        "value": "Breana",
        "weight": 1
      },
      {
        "value": "Breanna",
        "weight": 1
      },
      {
        "value": "Breanne",
        "weight": 1
      },
      {
        "value": "Brenda",
        "weight": 1
      },
      {
        "value": "Brendan",
        "weight": 1
      },
      {
        "value": "Brenden",
        "weight": 1
      },
      {
        "value": "Brendon",
        "weight": 1
      },
      {
        "value": "Brenna",
        "weight": 1
      },
      {
        "value": "Brennan",
        "weight": 1
      },
      {
        "value": "Brennon",
        "weight": 1
      },
      {
        "value": "Brent",
        "weight": 1
      },
      {
        "value": "Bret",
        "weight": 1
      },
      {
        "value": "Brett",
        "weight": 1
      },
      {
        "value": "Bria",
        "weight": 1
      },
      {
        "value": "Brian",
        "weight": 1
      },
      {
        "value": "Briana",
        "weight": 1
      },
      {
        "value": "Brianne",
        "weight": 1
      },
      {
        "value": "Brice",
        "weight": 1
      },
      {
        "value": "Bridget",
        "weight": 1
      },
      {
        "value": "Bridgette",
        "weight": 1
      },
      {
        "value": "Bridie",
        "weight": 1
      },
      {
        "value": "Brielle",
        "weight": 1
      },
      {
        "value": "Brigitte",
        "weight": 1
      },
      {
        "value": "Brionna",
        "weight": 1
      },
      {
        "value": "Brisa",
        "weight": 1
      },
      {
        "value": "Britney",
        "weight": 1
      },
      {
        "value": "Brittany",
        "weight": 1
      },
      {
        "value": "Brock",
        "weight": 1
      },
      {
        "value": "Broderick",
        "weight": 1
      },
      {
        "value": "Brody",
        "weight": 1
      },
      {
        "value": "Brook",
        "weight": 1
      },
      {
        "value": "Brooke",
        "weight": 1
      },
      {
        "value": "Brooklyn",
        "weight": 1
      },
      {
        "value": "Brooks",
        "weight": 1
      },
      {
        "value": "Brown",
        "weight": 1
      },
      {
        "value": "Bruce",
        "weight": 1
      },
      {
        "value": "Bryana",
        "weight": 1
      },
      {
        "value": "Bryce",
        "weight": 1
      },
      {
        "value": "Brycen",
        "weight": 1
      },
      {
        "value": "Bryon",
        "weight": 1
      },
      {
        "value": "Buck",
        "weight": 1
      },
      {
        "value": "Bud",
        "weight": 1
      },
      {
        "value": "Buddy",
        "weight": 1
      },
      {
        "value": "Buford",
        "weight": 1
      },
      {
        "value": "Bulah",
        "weight": 1
      },
      {
        "value": "Burdette",
        "weight": 1
      },
      {
        "value": "Burley",
        "weight": 1
      },
      {
        "value": "Burnice",
        "weight": 1
      },
      {
        "value": "Buster",
        "weight": 1
      },
      {
        "value": "Cade",
        "weight": 1
      },
      {
        "value": "Caden",
        "weight": 1
      },
      {
        "value": "Caesar",
        "weight": 1
      },
      {
        "value": "Caitlyn",
        "weight": 1
      },
      {
        "value": "Cale",
        "weight": 1
      },
      {
        "value": "Caleb",
        "weight": 1
      },
      {
        "value": "Caleigh",
        "weight": 1
      },
      {
        "value": "Cali",
        "weight": 1
      },
      {
        "value": "Calista",
        "weight": 1
      },
      {
        "value": "Callie",
        "weight": 1
      },
      {
        "value": "Camden",
        "weight": 1
      },
      {
        "value": "Cameron",
        "weight": 1
      },
      {
        "value": "Camila",
        "weight": 1
      },
      {
        "value": "Camilla",
        "weight": 1
      },
      {
        "value": "Camille",
        "weight": 1
      },
      {
        "value": "Camren",
        "weight": 1
      },
      {
        "value": "Camron",
        "weight": 1
      },
      {
        "value": "Camryn",
        "weight": 1
      },
      {
        "value": "Camylle",
        "weight": 1
      },
      {
        "value": "Candace",
        "weight": 1
      },
      {
        "value": "Candelario",
        "weight": 1
      },
      {
        "value": "Candice",
        "weight": 1
      },
      {
        "value": "Candida",
        "weight": 1
      },
      {
        "value": "Candido",
        "weight": 1
      },
      {
        "value": "Cara",
        "weight": 1
      },
      {
        "value": "Carey",
        "weight": 1
      },
      {
        "value": "Carissa",
        "weight": 1
      },
      {
        "value": "Carlee",
        "weight": 1
      },
      {
        "value": "Carleton",
        "weight": 1
      },
      {
        "value": "Carley",
        "weight": 1
      },
      {
        "value": "Carli",
        "weight": 1
      },
      {
        "value": "Carlie",
        "weight": 1
      },
      {
        "value": "Carlo",
        "weight": 1
      },
      {
        "value": "Carlos",
        "weight": 1
      },
      {
        "value": "Carlotta",
        "weight": 1
      },
      {
        "value": "Carmel",
        "weight": 1
      },
      {
        "value": "Carmela",
        "weight": 1
      },
      {
        "value": "Carmella",
        "weight": 1
      },
      {
        "value": "Carmelo",
        "weight": 1
      },
      {
        "value": "Carmen",
        "weight": 1
      },
      {
        "value": "Carmine",
        "weight": 1
      },
      {
        "value": "Carol",
        "weight": 1
      },
      {
        "value": "Carolanne",
        "weight": 1
      },
      {
        "value": "Carole",
        "weight": 1
      },
      {
        "value": "Carolina",
        "weight": 1
      },
      {
        "value": "Caroline",
        "weight": 1
      },
      {
        "value": "Carolyn",
        "weight": 1
      },
      {
        "value": "Carolyne",
        "weight": 1
      },
      {
        "value": "Carrie",
        "weight": 1
      },
      {
        "value": "Carroll",
        "weight": 1
      },
      {
        "value": "Carson",
        "weight": 1
      },
      {
        "value": "Carter",
        "weight": 1
      },
      {
        "value": "Cary",
        "weight": 1
      },
      {
        "value": "Casandra",
        "weight": 1
      },
      {
        "value": "Casey",
        "weight": 1
      },
      {
        "value": "Casimer",
        "weight": 1
      },
      {
        "value": "Casimir",
        "weight": 1
      },
      {
        "value": "Casper",
        "weight": 1
      },
      {
        "value": "Cassandra",
        "weight": 1
      },
      {
        "value": "Cassandre",
        "weight": 1
      },
      {
        "value": "Cassidy",
        "weight": 1
      },
      {
        "value": "Cassie",
        "weight": 1
      },
      {
        "value": "Catalina",
        "weight": 1
      },
      {
        "value": "Caterina",
        "weight": 1
      },
      {
        "value": "Catharine",
        "weight": 1
      },
      {
        "value": "Catherine",
        "weight": 1
      },
      {
        "value": "Cathrine",
        "weight": 1
      },
      {
        "value": "Cathryn",
        "weight": 1
      },
      {
        "value": "Cathy",
        "weight": 1
      },
      {
        "value": "Cayla",
        "weight": 1
      },
      {
        "value": "Ceasar",
        "weight": 1
      },
      {
        "value": "Cecelia",
        "weight": 1
      },
      {
        "value": "Cecil",
        "weight": 1
      },
      {
        "value": "Cecile",
        "weight": 1
      },
      {
        "value": "Cecilia",
        "weight": 1
      },
      {
        "value": "Cedrick",
        "weight": 1
      },
      {
        "value": "Celestine",
        "weight": 1
      },
      {
        "value": "Celestino",
        "weight": 1
      },
      {
        "value": "Celia",
        "weight": 1
      },
      {
        "value": "Celine",
        "weight": 1
      },
      {
        "value": "Cesar",
        "weight": 1
      },
      {
        "value": "Chad",
        "weight": 1
      },
      {
        "value": "Chadd",
        "weight": 1
      },
      {
        "value": "Chadrick",
        "weight": 1
      },
      {
        "value": "Chaim",
        "weight": 1
      },
      {
        "value": "Chance",
        "weight": 1
      },
      {
        "value": "Chandler",
        "weight": 1
      },
      {
        "value": "Chanel",
        "weight": 1
      },
      {
        "value": "Chanelle",
        "weight": 1
      },
      {
        "value": "Charity",
        "weight": 1
      },
      {
        "value": "Charlene",
        "weight": 1
      },
      {
        "value": "Charles",
        "weight": 1
      },
      {
        "value": "Charley",
        "weight": 1
      },
      {
        "value": "Charlie",
        "weight": 1
      },
      {
        "value": "Charlotte",
        "weight": 1
      },
      {
        "value": "Chase",
        "weight": 1
      },
      {
        "value": "Chasity",
        "weight": 1
      },
      {
        "value": "Chauncey",
        "weight": 1
      },
      {
        "value": "Chaya",
        "weight": 1
      },
      {
        "value": "Chaz",
        "weight": 1
      },
      {
        "value": "Chelsea",
        "weight": 1
      },
      {
        "value": "Chelsey",
        "weight": 1
      },
      {
        "value": "Chelsie",
        "weight": 1
      },
      {
        "value": "Chesley",
        "weight": 1
      },
      {
        "value": "Chester",
        "weight": 1
      },
      {
        "value": "Chet",
        "weight": 1
      },
      {
        "value": "Cheyanne",
        "weight": 1
      },
      {
        "value": "Cheyenne",
        "weight": 1
      },
      {
        "value": "Chloe",
        "weight": 1
      },
      {
        "value": "Chris",
        "weight": 1
      },
      {
        "value": "Christ",
        "weight": 1
      },
      {
        "value": "Christa",
        "weight": 1
      },
      {
        "value": "Christelle",
        "weight": 1
      },
      {
        "value": "Christian",
        "weight": 1
      },
      {
        "value": "Christiana",
        "weight": 1
      },
      {
        "value": "Christina",
        "weight": 1
      },
      {
        "value": "Christine",
        "weight": 1
      },
      {
        "value": "Christop",
        "weight": 1
      },
      {
        "value": "Christophe",
        "weight": 1
      },
      {
        "value": "Christopher",
        "weight": 1
      },
      {
        "value": "Christy",
        "weight": 1
      },
      {
        "value": "Chyna",
        "weight": 1
      },
      {
        "value": "Ciara",
        "weight": 1
      },
      {
        "value": "Cicero",
        "weight": 1
      },
      {
        "value": "Cielo",
        "weight": 1
      },
      {
        "value": "Cierra",
        "weight": 1
      },
      {
        "value": "Cindy",
        "weight": 1
      },
      {
        "value": "Citlalli",
        "weight": 1
      },
      {
        "value": "Clair",
        "weight": 1
      },
      {
        "value": "Claire",
        "weight": 1
      },
      {
        "value": "Clara",
        "weight": 1
      },
      {
        "value": "Clarabelle",
        "weight": 1
      },
      {
        "value": "Clare",
        "weight": 1
      },
      {
        "value": "Clarissa",
        "weight": 1
      },
      {
        "value": "Clark",
        "weight": 1
      },
      {
        "value": "Claud",
        "weight": 1
      },
      {
        "value": "Claude",
        "weight": 1
      },
      {
        "value": "Claudia",
        "weight": 1
      },
      {
        "value": "Claudie",
        "weight": 1
      },
      {
        "value": "Claudine",
        "weight": 1
      },
      {
        "value": "Clay",
        "weight": 1
      },
      {
        "value": "Clemens",
        "weight": 1
      },
      {
        "value": "Clement",
        "weight": 1
      },
      {
        "value": "Clementina",
        "weight": 1
      },
      {
        "value": "Clementine",
        "weight": 1
      },
      {
        "value": "Clemmie",
        "weight": 1
      },
      {
        "value": "Cleo",
        "weight": 1
      },
      {
        "value": "Cleora",
        "weight": 1
      },
      {
        "value": "Cleta",
        "weight": 1
      },
      {
        "value": "Cletus",
        "weight": 1
      },
      {
        "value": "Cleve",
        "weight": 1
      },
      {
        "value": "Cleveland",
        "weight": 1
      },
      {
        "value": "Clifford",
        "weight": 1
      },
      {
        "value": "Clifton",
        "weight": 1
      },
      {
        "value": "Clint",
        "weight": 1
      },
      {
        "value": "Clinton",
        "weight": 1
      },
      {
        "value": "Clotilde",
        "weight": 1
      },
      {
        "value": "Clovis",
        "weight": 1
      },
      {
        "value": "Cloyd",
        "weight": 1
      },
      {
        "value": "Clyde",
        "weight": 1
      },
      {
        "value": "Coby",
        "weight": 1
      },
      {
        "value": "Cody",
        "weight": 1
      },
      {
        "value": "Colby",
        "weight": 1
      },
      {
        "value": "Cole",
        "weight": 1
      },
      {
        "value": "Coleman",
        "weight": 1
      },
      {
        "value": "Colin",
        "weight": 1
      },
      {
        "value": "Colleen",
        "weight": 1
      },
      {
        "value": "Collin",
        "weight": 1
      },
      {
        "value": "Colt",
        "weight": 1
      },
      {
        "value": "Colten",
        "weight": 1
      },
      {
        "value": "Colton",
        "weight": 1
      },
      {
        "value": "Columbus",
        "weight": 1
      },
      {
        "value": "Concepcion",
        "weight": 1
      },
      {
        "value": "Conner",
        "weight": 1
      },
      {
        "value": "Connie",
        "weight": 1
      },
      {
        "value": "Connor",
        "weight": 1
      },
      {
        "value": "Conor",
        "weight": 1
      },
      {
        "value": "Conrad",
        "weight": 1
      },
      {
        "value": "Constance",
        "weight": 1
      },
      {
        "value": "Constantin",
        "weight": 1
      },
      {
        "value": "Consuelo",
        "weight": 1
      },
      {
        "value": "Cooper",
        "weight": 1
      },
      {
        "value": "Cora",
        "weight": 1
      },
      {
        "value": "Coralie",
        "weight": 1
      },
      {
        "value": "Corbin",
        "weight": 1
      },
      {
        "value": "Cordelia",
        "weight": 1
      },
      {
        "value": "Cordell",
        "weight": 1
      },
      {
        "value": "Cordia",
        "weight": 1
      },
      {
        "value": "Cordie",
        "weight": 1
      },
      {
        "value": "Corene",
        "weight": 1
      },
      {
        "value": "Corine",
        "weight": 1
      },
      {
        "value": "Cornelius",
        "weight": 1
      },
      {
        "value": "Cornell",
        "weight": 1
      },
      {
        "value": "Corrine",
        "weight": 1
      },
      {
        "value": "Cortez",
        "weight": 1
      },
      {
        "value": "Cortney",
        "weight": 1
      },
      {
        "value": "Cory",
        "weight": 1
      },
      {
        "value": "Coty",
        "weight": 1
      },
      {
        "value": "Courtney",
        "weight": 1
      },
      {
        "value": "Coy",
        "weight": 1
      },
      {
        "value": "Craig",
        "weight": 1
      },
      {
        "value": "Crawford",
        "weight": 1
      },
      {
        "value": "Creola",
        "weight": 1
      },
      {
        "value": "Cristal",
        "weight": 1
      },
      {
        "value": "Cristian",
        "weight": 1
      },
      {
        "value": "Cristina",
        "weight": 1
      },
      {
        "value": "Cristobal",
        "weight": 1
      },
      {
        "value": "Cristopher",
        "weight": 1
      },
      {
        "value": "Cruz",
        "weight": 1
      },
      {
        "value": "Crystal",
        "weight": 1
      },
      {
        "value": "Crystel",
        "weight": 1
      },
      {
        "value": "Cullen",
        "weight": 1
      },
      {
        "value": "Curt",
        "weight": 1
      },
      {
        "value": "Curtis",
        "weight": 1
      },
      {
        "value": "Cydney",
        "weight": 1
      },
      {
        "value": "Cynthia",
        "weight": 1
      },
      {
        "value": "Cyril",
        "weight": 1
      },
      {
        "value": "Cyrus",
        "weight": 1
      },
      {
        "value": "Dagmar",
        "weight": 1
      },
      {
        "value": "Dahlia",
        "weight": 1
      },
      {
        "value": "Daija",
        "weight": 1
      },
      {
        "value": "Daisha",
        "weight": 1
      },
      {
        "value": "Daisy",
        "weight": 1
      },
      {
        "value": "Dakota",
        "weight": 1
      },
      {
        "value": "Dale",
        "weight": 1
      },
      {
        "value": "Dallas",
        "weight": 1
      },
      {
        "value": "Dallin",
        "weight": 1
      },
      {
        "value": "Dalton",
        "weight": 1
      },
      {
        "value": "Damaris",
        "weight": 1
      },
      {
        "value": "Dameon",
        "weight": 1
      },
      {
        "value": "Damian",
        "weight": 1
      },
      {
        "value": "Damien",
        "weight": 1
      },
      {
        "value": "Damion",
        "weight": 1
      },
      {
        "value": "Damon",
        "weight": 1
      },
      {
        "value": "Dan",
        "weight": 1
      },
      {
        "value": "Dana",
        "weight": 1
      },
      {
        "value": "Dandre",
        "weight": 1
      },
      {
        "value": "Dane",
        "weight": 1
      },
      {
        "value": "Dangelo",
        "weight": 1
      },
      {
        "value": "Danial",
        "weight": 1
      },
      {
        "value": "Daniela",
        "weight": 1
      },
      {
        "value": "Daniella",
        "weight": 1
      },
      {
        "value": "Danielle",
        "weight": 1
      },
      {
        "value": "Danika",
        "weight": 1
      },
      {
        "value": "Dannie",
        "weight": 1
      },
      {
        "value": "Danny",
        "weight": 1
      },
      {
        "value": "Dante",
        "weight": 1
      },
      {
        "value": "Danyka",
        "weight": 1
      },
      {
        "value": "Daphne",
        "weight": 1
      },
      {
        "value": "Daphnee",
        "weight": 1
      },
      {
        "value": "Daphney",
        "weight": 1
      },
      {
        "value": "Darby",
        "weight": 1
      },
      {
        "value": "Daren",
        "weight": 1
      },
      {
        "value": "Darian",
        "weight": 1
      },
      {
        "value": "Dariana",
        "weight": 1
      },
      {
        "value": "Darien",
        "weight": 1
      },
      {
        "value": "Dario",
        "weight": 1
      },
      {
        "value": "Darion",
        "weight": 1
      },
      {
        "value": "Darius",
        "weight": 1
      },
      {
        "value": "Darlene",
        "weight": 1
      },
      {
        "value": "Daron",
        "weight": 1
      },
      {
        "value": "Darrel",
        "weight": 1
      },
      {
        "value": "Darrell",
        "weight": 1
      },
      {
        "value": "Darren",
        "weight": 1
      },
      {
        "value": "Darrick",
        "weight": 1
      },
      {
        "value": "Darrin",
        "weight": 1
      },
      {
        "value": "Darrion",
        "weight": 1
      },
      {
        "value": "Darron",
        "weight": 1
      },
      {
        "value": "Darryl",
        "weight": 1
      },
      {
        "value": "Darwin",
        "weight": 1
      },
      {
        "value": "Daryl",
        "weight": 1
      },
      {
        "value": "Dashawn",
        "weight": 1
      },
      {
        "value": "Dasia",
        "weight": 1
      },
      {
        "value": "Dave",
        "weight": 1
      },
      {
        "value": "David",
        "weight": 1
      },
      {
        "value": "Davin",
        "weight": 1
      },
      {
        "value": "Davion",
        "weight": 1
      },
      {
        "value": "Davon",
        "weight": 1
      },
      {
        "value": "Davonte",
        "weight": 1
      },
      {
        "value": "Dawn",
        "weight": 1
      },
      {
        "value": "Dawson",
        "weight": 1
      },
      {
        "value": "Dax",
        "weight": 1
      },
      {
        "value": "Dayana",
        "weight": 1
      },
      {
        "value": "Dayna",
        "weight": 1
      },
      {
        "value": "Dayne",
        "weight": 1
      },
      {
        "value": "Dayton",
        "weight": 1
      },
      {
        "value": "Dean",
        "weight": 1
      },
      {
        "value": "Deangelo",
        "weight": 1
      },
      {
        "value": "Deanna",
        "weight": 1
      },
      {
        "value": "Deborah",
        "weight": 1
      },
      {
        "value": "Declan",
        "weight": 1
      },
      {
        "value": "Dedric",
        "weight": 1
      },
      {
        "value": "Dedrick",
        "weight": 1
      },
      {
        "value": "Dee",
        "weight": 1
      },
      {
        "value": "Deion",
        "weight": 1
      },
      {
        "value": "Deja",
        "weight": 1
      },
      {
        "value": "Dejah",
        "weight": 1
      },
      {
        "value": "Dejon",
        "weight": 1
      },
      {
        "value": "Dejuan",
        "weight": 1
      },
      {
        "value": "Delaney",
        "weight": 1
      },
      {
        "value": "Delbert",
        "weight": 1
      },
      {
        "value": "Delfina",
        "weight": 1
      },
      {
        "value": "Delia",
        "weight": 1
      },
      {
        "value": "Delilah",
        "weight": 1
      },
      {
        "value": "Dell",
        "weight": 1
      },
      {
        "value": "Della",
        "weight": 1
      },
      {
        "value": "Delmer",
        "weight": 1
      },
      {
        "value": "Delores",
        "weight": 1
      },
      {
        "value": "Delpha",
        "weight": 1
      },
      {
        "value": "Delphia",
        "weight": 1
      },
      {
        "value": "Delphine",
        "weight": 1
      },
      {
        "value": "Delta",
        "weight": 1
      },
      {
        "value": "Demarco",
        "weight": 1
      },
      {
        "value": "Demarcus",
        "weight": 1
      },
      {
        "value": "Demario",
        "weight": 1
      },
      {
        "value": "Demetris",
        "weight": 1
      },
      {
        "value": "Demetrius",
        "weight": 1
      },
      {
        "value": "Demond",
        "weight": 1
      },
      {
        "value": "Dena",
        "weight": 1
      },
      {
        "value": "Denis",
        "weight": 1
      },
      {
        "value": "Dennis",
        "weight": 1
      },
      {
        "value": "Deon",
        "weight": 1
      },
      {
        "value": "Deondre",
        "weight": 1
      },
      {
        "value": "Deontae",
        "weight": 1
      },
      {
        "value": "Deonte",
        "weight": 1
      },
      {
        "value": "Dereck",
        "weight": 1
      },
      {
        "value": "Derek",
        "weight": 1
      },
      {
        "value": "Derick",
        "weight": 1
      },
      {
        "value": "Deron",
        "weight": 1
      },
      {
        "value": "Derrick",
        "weight": 1
      },
      {
        "value": "Deshaun",
        "weight": 1
      },
      {
        "value": "Deshawn",
        "weight": 1
      },
      {
        "value": "Desiree",
        "weight": 1
      },
      {
        "value": "Desmond",
        "weight": 1
      },
      {
        "value": "Dessie",
        "weight": 1
      },
      {
        "value": "Destany",
        "weight": 1
      },
      {
        "value": "Destin",
        "weight": 1
      },
      {
        "value": "Destinee",
        "weight": 1
      },
      {
        "value": "Destiney",
        "weight": 1
      },
      {
        "value": "Destini",
        "weight": 1
      },
      {
        "value": "Destiny",
        "weight": 1
      },
      {
        "value": "Devan",
        "weight": 1
      },
      {
        "value": "Devante",
        "weight": 1
      },
      {
        "value": "Deven",
        "weight": 1
      },
      {
        "value": "Devin",
        "weight": 1
      },
      {
        "value": "Devon",
        "weight": 1
      },
      {
        "value": "Devonte",
        "weight": 1
      },
      {
        "value": "Devyn",
        "weight": 1
      },
      {
        "value": "Dewayne",
        "weight": 1
      },
      {
        "value": "Dewitt",
        "weight": 1
      },
      {
        "value": "Dexter",
        "weight": 1
      },
      {
        "value": "Diamond",
        "weight": 1
      },
      {
        "value": "Diana",
        "weight": 1
      },
      {
        "value": "Dianna",
        "weight": 1
      },
      {
        "value": "Diego",
        "weight": 1
      },
      {
        "value": "Dillan",
        "weight": 1
      },
      {
        "value": "Dillon",
        "weight": 1
      },
      {
        "value": "Dimitri",
        "weight": 1
      },
      {
        "value": "Dina",
        "weight": 1
      },
      {
        "value": "Dino",
        "weight": 1
      },
      {
        "value": "Dion",
        "weight": 1
      },
      {
        "value": "Dixie",
        "weight": 1
      },
      {
        "value": "Dock",
        "weight": 1
      },
      {
        "value": "Dolly",
        "weight": 1
      },
      {
        "value": "Dolores",
        "weight": 1
      },
      {
        "value": "Domenic",
        "weight": 1
      },
      {
        "value": "Domenica",
        "weight": 1
      },
      {
        "value": "Domenick",
        "weight": 1
      },
      {
        "value": "Domenico",
        "weight": 1
      },
      {
        "value": "Domingo",
        "weight": 1
      },
      {
        "value": "Dominic",
        "weight": 1
      },
      {
        "value": "Dominique",
        "weight": 1
      },
      {
        "value": "Don",
        "weight": 1
      },
      {
        "value": "Donald",
        "weight": 1
      },
      {
        "value": "Donato",
        "weight": 1
      },
      {
        "value": "Donavon",
        "weight": 1
      },
      {
        "value": "Donna",
        "weight": 1
      },
      {
        "value": "Donnell",
        "weight": 1
      },
      {
        "value": "Donnie",
        "weight": 1
      },
      {
        "value": "Donny",
        "weight": 1
      },
      {
        "value": "Dora",
        "weight": 1
      },
      {
        "value": "Dorcas",
        "weight": 1
      },
      {
        "value": "Dorian",
        "weight": 1
      },
      {
        "value": "Doris",
        "weight": 1
      },
      {
        "value": "Dorothea",
        "weight": 1
      },
      {
        "value": "Dorothy",
        "weight": 1
      },
      {
        "value": "Dorris",
        "weight": 1
      },
      {
        "value": "Dortha",
        "weight": 1
      },
      {
        "value": "Dorthy",
        "weight": 1
      },
      {
        "value": "Doug",
        "weight": 1
      },
      {
        "value": "Douglas",
        "weight": 1
      },
      {
        "value": "Dovie",
        "weight": 1
      },
      {
        "value": "Doyle",
        "weight": 1
      },
      {
        "value": "Drake",
        "weight": 1
      },
      {
        "value": "Drew",
        "weight": 1
      },
      {
        "value": "Duane",
        "weight": 1
      },
      {
        "value": "Dudley",
        "weight": 1
      },
      {
        "value": "Dulce",
        "weight": 1
      },
      {
        "value": "Duncan",
        "weight": 1
      },
      {
        "value": "Durward",
        "weight": 1
      },
      {
        "value": "Dustin",
        "weight": 1
      },
      {
        "value": "Dusty",
        "weight": 1
      },
      {
        "value": "Dwight",
        "weight": 1
      },
      {
        "value": "Dylan",
        "weight": 1
      },
      {
        "value": "Earl",
        "weight": 1
      },
      {
        "value": "Earlene",
        "weight": 1
      },
      {
        "value": "Earline",
        "weight": 1
      },
      {
        "value": "Earnest",
        "weight": 1
      },
      {
        "value": "Earnestine",
        "weight": 1
      },
      {
        "value": "Easter",
        "weight": 1
      },
      {
        "value": "Easton",
        "weight": 1
      },
      {
        "value": "Ebba",
        "weight": 1
      },
      {
        "value": "Ebony",
        "weight": 1
      },
      {
        "value": "Ed",
        "weight": 1
      },
      {
        "value": "Eda",
        "weight": 1
      },
      {
        "value": "Edd",
        "weight": 1
      },
      {
        "value": "Eddie",
        "weight": 1
      },
      {
        "value": "Eden",
        "weight": 1
      },
      {
        "value": "Edgar",
        "weight": 1
      },
      {
        "value": "Edgardo",
        "weight": 1
      },
      {
        "value": "Edison",
        "weight": 1
      },
      {
        "value": "Edmond",
        "weight": 1
      },
      {
        "value": "Edmund",
        "weight": 1
      },
      {
        "value": "Edna",
        "weight": 1
      },
      {
        "value": "Eduardo",
        "weight": 1
      },
      {
        "value": "Edward",
        "weight": 1
      },
      {
        "value": "Edwardo",
        "weight": 1
      },
      {
        "value": "Edwin",
        "weight": 1
      },
      {
        "value": "Edwina",
        "weight": 1
      },
      {
        "value": "Edyth",
        "weight": 1
      },
      {
        "value": "Edythe",
        "weight": 1
      },
      {
        "value": "Effie",
        "weight": 1
      },
      {
        "value": "Efrain",
        "weight": 1
      },
      {
        "value": "Efren",
        "weight": 1
      },
      {
        "value": "Eileen",
        "weight": 1
      },
      {
        "value": "Einar",
        "weight": 1
      },
      {
        "value": "Eino",
        "weight": 1
      },
      {
        "value": "Eladio",
        "weight": 1
      },
      {
        "value": "Elaina",
        "weight": 1
      },
      {
        "value": "Elbert",
        "weight": 1
      },
      {
        "value": "Elda",
        "weight": 1
      },
      {
        "value": "Eldon",
        "weight": 1
      },
      {
        "value": "Eldora",
        "weight": 1
      },
      {
        "value": "Eldred",
        "weight": 1
      },
      {
        "value": "Eldridge",
        "weight": 1
      },
      {
        "value": "Eleanora",
        "weight": 1
      },
      {
        "value": "Eleanore",
        "weight": 1
      },
      {
        "value": "Eleazar",
        "weight": 1
      },
      {
        "value": "Electa",
        "weight": 1
      },
      {
        "value": "Elena",
        "weight": 1
      },
      {
        "value": "Elenor",
        "weight": 1
      },
      {
        "value": "Elenora",
        "weight": 1
      },
      {
        "value": "Eleonore",
        "weight": 1
      },
      {
        "value": "Elfrieda",
        "weight": 1
      },
      {
        "value": "Eli",
        "weight": 1
      },
      {
        "value": "Elian",
        "weight": 1
      },
      {
        "value": "Eliane",
        "weight": 1
      },
      {
        "value": "Elias",
        "weight": 1
      },
      {
        "value": "Eliezer",
        "weight": 1
      },
      {
        "value": "Elijah",
        "weight": 1
      },
      {
        "value": "Elinor",
        "weight": 1
      },
      {
        "value": "Elinore",
        "weight": 1
      },
      {
        "value": "Elisa",
        "weight": 1
      },
      {
        "value": "Elisabeth",
        "weight": 1
      },
      {
        "value": "Elise",
        "weight": 1
      },
      {
        "value": "Eliseo",
        "weight": 1
      },
      {
        "value": "Elisha",
        "weight": 1
      },
      {
        "value": "Elissa",
        "weight": 1
      },
      {
        "value": "Eliza",
        "weight": 1
      },
      {
        "value": "Elizabeth",
        "weight": 1
      },
      {
        "value": "Ella",
        "weight": 1
      },
      {
        "value": "Ellen",
        "weight": 1
      },
      {
        "value": "Ellie",
        "weight": 1
      },
      {
        "value": "Elliot",
        "weight": 1
      },
      {
        "value": "Elliott",
        "weight": 1
      },
      {
        "value": "Ellis",
        "weight": 1
      },
      {
        "value": "Ellsworth",
        "weight": 1
      },
      {
        "value": "Elmer",
        "weight": 1
      },
      {
        "value": "Elmira",
        "weight": 1
      },
      {
        "value": "Elmo",
        "weight": 1
      },
      {
        "value": "Elmore",
        "weight": 1
      },
      {
        "value": "Elna",
        "weight": 1
      },
      {
        "value": "Elnora",
        "weight": 1
      },
      {
        "value": "Elody",
        "weight": 1
      },
      {
        "value": "Eloisa",
        "weight": 1
      },
      {
        "value": "Eloise",
        "weight": 1
      },
      {
        "value": "Elouise",
        "weight": 1
      },
      {
        "value": "Eloy",
        "weight": 1
      },
      {
        "value": "Elroy",
        "weight": 1
      },
      {
        "value": "Elsa",
        "weight": 1
      },
      {
        "value": "Else",
        "weight": 1
      },
      {
        "value": "Elsie",
        "weight": 1
      },
      {
        "value": "Elta",
        "weight": 1
      },
      {
        "value": "Elton",
        "weight": 1
      },
      {
        "value": "Elva",
        "weight": 1
      },
      {
        "value": "Elvera",
        "weight": 1
      },
      {
        "value": "Elvie",
        "weight": 1
      },
      {
        "value": "Elvis",
        "weight": 1
      },
      {
        "value": "Elwin",
        "weight": 1
      },
      {
        "value": "Elwyn",
        "weight": 1
      },
      {
        "value": "Elyse",
        "weight": 1
      },
      {
        "value": "Elyssa",
        "weight": 1
      },
      {
        "value": "Elza",
        "weight": 1
      },
      {
        "value": "Emanuel",
        "weight": 1
      },
      {
        "value": "Emelia",
        "weight": 1
      },
      {
        "value": "Emelie",
        "weight": 1
      },
      {
        "value": "Emely",
        "weight": 1
      },
      {
        "value": "Emerald",
        "weight": 1
      },
      {
        "value": "Emerson",
        "weight": 1
      },
      {
        "value": "Emery",
        "weight": 1
      },
      {
        "value": "Emie",
        "weight": 1
      },
      {
        "value": "Emil",
        "weight": 1
      },
      {
        "value": "Emile",
        "weight": 1
      },
      {
        "value": "Emilia",
        "weight": 1
      },
      {
        "value": "Emiliano",
        "weight": 1
      },
      {
        "value": "Emilie",
        "weight": 1
      },
      {
        "value": "Emilio",
        "weight": 1
      },
      {
        "value": "Emily",
        "weight": 1
      },
      {
        "value": "Emma",
        "weight": 1
      },
      {
        "value": "Emmalee",
        "weight": 1
      },
      {
        "value": "Emmanuel",
        "weight": 1
      },
      {
        "value": "Emmanuelle",
        "weight": 1
      },
      {
        "value": "Emmet",
        "weight": 1
      },
      {
        "value": "Emmett",
        "weight": 1
      },
      {
        "value": "Emmie",
        "weight": 1
      },
      {
        "value": "Emmitt",
        "weight": 1
      },
      {
        "value": "Emmy",
        "weight": 1
      },
      {
        "value": "Emory",
        "weight": 1
      },
      {
        "value": "Ena",
        "weight": 1
      },
      {
        "value": "Enid",
        "weight": 1
      },
      {
        "value": "Enoch",
        "weight": 1
      },
      {
        "value": "Enola",
        "weight": 1
      },
      {
        "value": "Enos",
        "weight": 1
      },
      {
        "value": "Enrico",
        "weight": 1
      },
      {
        "value": "Enrique",
        "weight": 1
      },
      {
        "value": "Ephraim",
        "weight": 1
      },
      {
        "value": "Era",
        "weight": 1
      },
      {
        "value": "Eriberto",
        "weight": 1
      },
      {
        "value": "Eric",
        "weight": 1
      },
      {
        "value": "Erica",
        "weight": 1
      },
      {
        "value": "Erich",
        "weight": 1
      },
      {
        "value": "Erick",
        "weight": 1
      },
      {
        "value": "Ericka",
        "weight": 1
      },
      {
        "value": "Erik",
        "weight": 1
      },
      {
        "value": "Erika",
        "weight": 1
      },
      {
        "value": "Erin",
        "weight": 1
      },
      {
        "value": "Erling",
        "weight": 1
      },
      {
        "value": "Erna",
        "weight": 1
      },
      {
        "value": "Ernest",
        "weight": 1
      },
      {
        "value": "Ernestina",
        "weight": 1
      },
      {
        "value": "Ernestine",
        "weight": 1
      },
      {
        "value": "Ernesto",
        "weight": 1
      },
      {
        "value": "Ernie",
        "weight": 1
      },
      {
        "value": "Ervin",
        "weight": 1
      },
      {
        "value": "Erwin",
        "weight": 1
      },
      {
        "value": "Eryn",
        "weight": 1
      },
      {
        "value": "Esmeralda",
        "weight": 1
      },
      {
        "value": "Esperanza",
        "weight": 1
      },
      {
        "value": "Esta",
        "weight": 1
      },
      {
        "value": "Esteban",
        "weight": 1
      },
      {
        "value": "Estefania",
        "weight": 1
      },
      {
        "value": "Estel",
        "weight": 1
      },
      {
        "value": "Estell",
        "weight": 1
      },
      {
        "value": "Estella",
        "weight": 1
      },
      {
        "value": "Estelle",
        "weight": 1
      },
      {
        "value": "Estevan",
        "weight": 1
      },
      {
        "value": "Esther",
        "weight": 1
      },
      {
        "value": "Estrella",
        "weight": 1
      },
      {
        "value": "Etha",
        "weight": 1
      },
      {
        "value": "Ethan",
        "weight": 1
      },
      {
        "value": "Ethel",
        "weight": 1
      },
      {
        "value": "Ethelyn",
        "weight": 1
      },
      {
        "value": "Ethyl",
        "weight": 1
      },
      {
        "value": "Ettie",
        "weight": 1
      },
      {
        "value": "Eudora",
        "weight": 1
      },
      {
        "value": "Eugene",
        "weight": 1
      },
      {
        "value": "Eugenia",
        "weight": 1
      },
      {
        "value": "Eula",
        "weight": 1
      },
      {
        "value": "Eulah",
        "weight": 1
      },
      {
        "value": "Eulalia",
        "weight": 1
      },
      {
        "value": "Euna",
        "weight": 1
      },
      {
        "value": "Eunice",
        "weight": 1
      },
      {
        "value": "Eusebio",
        "weight": 1
      },
      {
        "value": "Eva",
        "weight": 1
      },
      {
        "value": "Evalyn",
        "weight": 1
      },
      {
        "value": "Evan",
        "weight": 1
      },
      {
        "value": "Evangeline",
        "weight": 1
      },
      {
        "value": "Evans",
        "weight": 1
      },
      {
        "value": "Eve",
        "weight": 1
      },
      {
        "value": "Eveline",
        "weight": 1
      },
      {
        "value": "Evelyn",
        "weight": 1
      },
      {
        "value": "Everardo",
        "weight": 1
      },
      {
        "value": "Everett",
        "weight": 1
      },
      {
        "value": "Everette",
        "weight": 1
      },
      {
        "value": "Evert",
        "weight": 1
      },
      {
        "value": "Evie",
        "weight": 1
      },
      {
        "value": "Ewald",
        "weight": 1
      },
      {
        "value": "Ewell",
        "weight": 1
      },
      {
        "value": "Ezekiel",
        "weight": 1
      },
      {
        "value": "Ezequiel",
        "weight": 1
      },
      {
        "value": "Ezra",
        "weight": 1
      },
      {
        "value": "Fabian",
        "weight": 1
      },
      {
        "value": "Fabiola",
        "weight": 1
      },
      {
        "value": "Fae",
        "weight": 1
      },
      {
        "value": "Fannie",
        "weight": 1
      },
      {
        "value": "Fanny",
        "weight": 1
      },
      {
        "value": "Fatima",
        "weight": 1
      },
      {
        "value": "Faustino",
        "weight": 1
      },
      {
        "value": "Fausto",
        "weight": 1
      },
      {
        "value": "Favian",
        "weight": 1
      },
      {
        "value": "Fay",
        "weight": 1
      },
      {
        "value": "Faye",
        "weight": 1
      },
      {
        "value": "Federico",
        "weight": 1
      },
      {
        "value": "Felicia",
        "weight": 1
      },
      {
        "value": "Felicita",
        "weight": 1
      },
      {
        "value": "Felicity",
        "weight": 1
      },
      {
        "value": "Felipa",
        "weight": 1
      },
      {
        "value": "Felipe",
        "weight": 1
      },
      {
        "value": "Felix",
        "weight": 1
      },
      {
        "value": "Felton",
        "weight": 1
      },
      {
        "value": "Fermin",
        "weight": 1
      },
      {
        "value": "Fern",
        "weight": 1
      },
      {
        "value": "Fernando",
        "weight": 1
      },
      {
        "value": "Ferne",
        "weight": 1
      },
      {
        "value": "Fidel",
        "weight": 1
      },
      {
        "value": "Filiberto",
        "weight": 1
      },
      {
        "value": "Filomena",
        "weight": 1
      },
      {
        "value": "Finn",
        "weight": 1
      },
      {
        "value": "Fiona",
        "weight": 1
      },
      {
        "value": "Flavie",
        "weight": 1
      },
      {
        "value": "Flavio",
        "weight": 1
      },
      {
        "value": "Fleta",
        "weight": 1
      },
      {
        "value": "Fletcher",
        "weight": 1
      },
      {
        "value": "Flo",
        "weight": 1
      },
      {
        "value": "Florence",
        "weight": 1
      },
      {
        "value": "Florencio",
        "weight": 1
      },
      {
        "value": "Florian",
        "weight": 1
      },
      {
        "value": "Florida",
        "weight": 1
      },
      {
        "value": "Florine",
        "weight": 1
      },
      {
        "value": "Flossie",
        "weight": 1
      },
      {
        "value": "Floy",
        "weight": 1
      },
      {
        "value": "Floyd",
        "weight": 1
      },
      {
        "value": "Ford",
        "weight": 1
      },
      {
        "value": "Forest",
        "weight": 1
      },
      {
        "value": "Forrest",
        "weight": 1
      },
      {
        "value": "Foster",
        "weight": 1
      },
      {
        "value": "Frances",
        "weight": 1
      },
      {
        "value": "Francesca",
        "weight": 1
      },
      {
        "value": "Francesco",
        "weight": 1
      },
      {
        "value": "Francis",
        "weight": 1
      },
      {
        "value": "Francisca",
        "weight": 1
      },
      {
        "value": "Francisco",
        "weight": 1
      },
      {
        "value": "Franco",
        "weight": 1
      },
      {
        "value": "Frank",
        "weight": 1
      },
      {
        "value": "Frankie",
        "weight": 1
      },
      {
        "value": "Franz",
        "weight": 1
      },
      {
        "value": "Fred",
        "weight": 1
      },
      {
        "value": "Freda",
        "weight": 1
      },
      {
        "value": "Freddie",
        "weight": 1
      },
      {
        "value": "Freddy",
        "weight": 1
      },
      {
        "value": "Frederic",
        "weight": 1
      },
      {
        "value": "Frederick",
        "weight": 1
      },
      {
        "value": "Frederik",
        "weight": 1
      },
      {
        "value": "Frederique",
        "weight": 1
      },
      {
        "value": "Fredrick",
        "weight": 1
      },
      {
        "value": "Fredy",
        "weight": 1
      },
      {
        "value": "Freeda",
        "weight": 1
      },
      {
        "value": "Freeman",
        "weight": 1
      },
      {
        "value": "Freida",
        "weight": 1
      },
      {
        "value": "Frida",
        "weight": 1
      },
      {
        "value": "Frieda",
        "weight": 1
      },
      {
        "value": "Friedrich",
        "weight": 1
      },
      {
        "value": "Fritz",
        "weight": 1
      },
      {
        "value": "Furman",
        "weight": 1
      },
      {
        "value": "Gabe",
        "weight": 1
      },
      {
        "value": "Gabriel",
        "weight": 1
      },
      {
        "value": "Gabriella",
        "weight": 1
      },
      {
        "value": "Gabrielle",
        "weight": 1
      },
      {
        "value": "Gaetano",
        "weight": 1
      },
      {
        "value": "Gage",
        "weight": 1
      },
      {
        "value": "Gail",
        "weight": 1
      },
      {
        "value": "Gardner",
        "weight": 1
      },
      {
        "value": "Garett",
        "weight": 1
      },
      {
        "value": "Garfield",
        "weight": 1
      },
      {
        "value": "Garland",
        "weight": 1
      },
      {
        "value": "Garnet",
        "weight": 1
      },
      {
        "value": "Garnett",
        "weight": 1
      },
      {
        "value": "Garret",
        "weight": 1
      },
      {
        "value": "Garrett",
        "weight": 1
      },
      {
        "value": "Garrick",
        "weight": 1
      },
      {
        "value": "Garrison",
        "weight": 1
      },
      {
        "value": "Garry",
        "weight": 1
      },
      {
        "value": "Garth",
        "weight": 1
      },
      {
        "value": "Gaston",
        "weight": 1
      },
      {
        "value": "Gavin",
        "weight": 1
      },
      {
        "value": "Gay",
        "weight": 1
      },
      {
        "value": "Gayle",
        "weight": 1
      },
      {
        "value": "Gaylord",
        "weight": 1
      },
      {
        "value": "Gene",
        "weight": 1
      },
      {
        "value": "General",
        "weight": 1
      },
      {
        "value": "Genesis",
        "weight": 1
      },
      {
        "value": "Genevieve",
        "weight": 1
      },
      {
        "value": "Gennaro",
        "weight": 1
      },
      {
        "value": "Genoveva",
        "weight": 1
      },
      {
        "value": "Geo",
        "weight": 1
      },
      {
        "value": "Geoffrey",
        "weight": 1
      },
      {
        "value": "George",
        "weight": 1
      },
      {
        "value": "Georgette",
        "weight": 1
      },
      {
        "value": "Georgiana",
        "weight": 1
      },
      {
        "value": "Georgianna",
        "weight": 1
      },
      {
        "value": "Geovanni",
        "weight": 1
      },
      {
        "value": "Geovanny",
        "weight": 1
      },
      {
        "value": "Geovany",
        "weight": 1
      },
      {
        "value": "Gerald",
        "weight": 1
      },
      {
        "value": "Geraldine",
        "weight": 1
      },
      {
        "value": "Gerard",
        "weight": 1
      },
      {
        "value": "Gerardo",
        "weight": 1
      },
      {
        "value": "Gerda",
        "weight": 1
      },
      {
        "value": "Gerhard",
        "weight": 1
      },
      {
        "value": "Germaine",
        "weight": 1
      },
      {
        "value": "German",
        "weight": 1
      },
      {
        "value": "Gerry",
        "weight": 1
      },
      {
        "value": "Gerson",
        "weight": 1
      },
      {
        "value": "Gertrude",
        "weight": 1
      },
      {
        "value": "Gia",
        "weight": 1
      },
      {
        "value": "Gianni",
        "weight": 1
      },
      {
        "value": "Gideon",
        "weight": 1
      },
      {
        "value": "Gilbert",
        "weight": 1
      },
      {
        "value": "Gilberto",
        "weight": 1
      },
      {
        "value": "Gilda",
        "weight": 1
      },
      {
        "value": "Giles",
        "weight": 1
      },
      {
        "value": "Gillian",
        "weight": 1
      },
      {
        "value": "Gina",
        "weight": 1
      },
      {
        "value": "Gino",
        "weight": 1
      },
      {
        "value": "Giovani",
        "weight": 1
      },
      {
        "value": "Giovanna",
        "weight": 1
      },
      {
        "value": "Giovanni",
        "weight": 1
      },
      {
        "value": "Giovanny",
        "weight": 1
      },
      {
        "value": "Gisselle",
        "weight": 1
      },
      {
        "value": "Giuseppe",
        "weight": 1
      },
      {
        "value": "Gladyce",
        "weight": 1
      },
      {
        "value": "Gladys",
        "weight": 1
      },
      {
        "value": "Glen",
        "weight": 1
      },
      {
        "value": "Glenda",
        "weight": 1
      },
      {
        "value": "Glenna",
        "weight": 1
      },
      {
        "value": "Glennie",
        "weight": 1
      },
      {
        "value": "Gloria",
        "weight": 1
      },
      {
        "value": "Godfrey",
        "weight": 1
      },
      {
        "value": "Golda",
        "weight": 1
      },
      {
        "value": "Golden",
        "weight": 1
      },
      {
        "value": "Gonzalo",
        "weight": 1
      },
      {
        "value": "Gordon",
        "weight": 1
      },
      {
        "value": "Grace",
        "weight": 1
      },
      {
        "value": "Gracie",
        "weight": 1
      },
      {
        "value": "Graciela",
        "weight": 1
      },
      {
        "value": "Grady",
        "weight": 1
      },
      {
        "value": "Graham",
        "weight": 1
      },
      {
        "value": "Grant",
        "weight": 1
      },
      {
        "value": "Granville",
        "weight": 1
      },
      {
        "value": "Grayce",
        "weight": 1
      },
      {
        "value": "Grayson",
        "weight": 1
      },
      {
        "value": "Green",
        "weight": 1
      },
      {
        "value": "Greg",
        "weight": 1
      },
      {
        "value": "Gregg",
        "weight": 1
      },
      {
        "value": "Gregoria",
        "weight": 1
      },
      {
        "value": "Gregorio",
        "weight": 1
      },
      {
        "value": "Gregory",
        "weight": 1
      },
      {
        "value": "Greta",
        "weight": 1
      },
      {
        "value": "Gretchen",
        "weight": 1
      },
      {
        "value": "Greyson",
        "weight": 1
      },
      {
        "value": "Griffin",
        "weight": 1
      },
      {
        "value": "Grover",
        "weight": 1
      },
      {
        "value": "Guadalupe",
        "weight": 1
      },
      {
        "value": "Gudrun",
        "weight": 1
      },
      {
        "value": "Guido",
        "weight": 1
      },
      {
        "value": "Guillermo",
        "weight": 1
      },
      {
        "value": "Guiseppe",
        "weight": 1
      },
      {
        "value": "Gunnar",
        "weight": 1
      },
      {
        "value": "Gunner",
        "weight": 1
      },
      {
        "value": "Gus",
        "weight": 1
      },
      {
        "value": "Gussie",
        "weight": 1
      },
      {
        "value": "Gust",
        "weight": 1
      },
      {
        "value": "Gustave",
        "weight": 1
      },
      {
        "value": "Guy",
        "weight": 1
      },
      {
        "value": "Gwen",
        "weight": 1
      },
      {
        "value": "Gwendolyn",
        "weight": 1
      },
      {
        "value": "Hadley",
        "weight": 1
      },
      {
        "value": "Hailee",
        "weight": 1
      },
      {
        "value": "Hailey",
        "weight": 1
      },
      {
        "value": "Hailie",
        "weight": 1
      },
      {
        "value": "Hal",
        "weight": 1
      },
      {
        "value": "Haleigh",
        "weight": 1
      },
      {
        "value": "Haley",
        "weight": 1
      },
      {
        "value": "Halie",
        "weight": 1
      },
      {
        "value": "Halle",
        "weight": 1
      },
      {
        "value": "Hallie",
        "weight": 1
      },
      {
        "value": "Hank",
        "weight": 1
      },
      {
        "value": "Hanna",
        "weight": 1
      },
      {
        "value": "Hannah",
        "weight": 1
      },
      {
        "value": "Hans",
        "weight": 1
      },
      {
        "value": "Hardy",
        "weight": 1
      },
      {
        "value": "Harley",
        "weight": 1
      },
      {
        "value": "Harmon",
        "weight": 1
      },
      {
        "value": "Harmony",
        "weight": 1
      },
      {
        "value": "Harold",
        "weight": 1
      },
      {
        "value": "Harrison",
        "weight": 1
      },
      {
        "value": "Harry",
        "weight": 1
      },
      {
        "value": "Harvey",
        "weight": 1
      },
      {
        "value": "Haskell",
        "weight": 1
      },
      {
        "value": "Hassan",
        "weight": 1
      },
      {
        "value": "Hassie",
        "weight": 1
      },
      {
        "value": "Hattie",
        "weight": 1
      },
      {
        "value": "Haven",
        "weight": 1
      },
      {
        "value": "Hayden",
        "weight": 1
      },
      {
        "value": "Haylee",
        "weight": 1
      },
      {
        "value": "Hayley",
        "weight": 1
      },
      {
        "value": "Haylie",
        "weight": 1
      },
      {
        "value": "Hazel",
        "weight": 1
      },
      {
        "value": "Hazle",
        "weight": 1
      },
      {
        "value": "Heath",
        "weight": 1
      },
      {
        "value": "Heather",
        "weight": 1
      },
      {
        "value": "Heaven",
        "weight": 1
      },
      {
        "value": "Heber",
        "weight": 1
      },
      {
        "value": "Hector",
        "weight": 1
      },
      {
        "value": "Heidi",
        "weight": 1
      },
      {
        "value": "Helen",
        "weight": 1
      },
      {
        "value": "Helena",
        "weight": 1
      },
      {
        "value": "Helene",
        "weight": 1
      },
      {
        "value": "Helga",
        "weight": 1
      },
      {
        "value": "Hellen",
        "weight": 1
      },
      {
        "value": "Helmer",
        "weight": 1
      },
      {
        "value": "Heloise",
        "weight": 1
      },
      {
        "value": "Henderson",
        "weight": 1
      },
      {
        "value": "Henri",
        "weight": 1
      },
      {
        "value": "Henriette",
        "weight": 1
      },
      {
        "value": "Henry",
        "weight": 1
      },
      {
        "value": "Herbert",
        "weight": 1
      },
      {
        "value": "Herman",
        "weight": 1
      },
      {
        "value": "Hermann",
        "weight": 1
      },
      {
        "value": "Hermina",
        "weight": 1
      },
      {
        "value": "Herminia",
        "weight": 1
      },
      {
        "value": "Herminio",
        "weight": 1
      },
      {
        "value": "Hershel",
        "weight": 1
      },
      {
        "value": "Herta",
        "weight": 1
      },
      {
        "value": "Hertha",
        "weight": 1
      },
      {
        "value": "Hester",
        "weight": 1
      },
      {
        "value": "Hettie",
        "weight": 1
      },
      {
        "value": "Hilario",
        "weight": 1
      },
      {
        "value": "Hilbert",
        "weight": 1
      },
      {
        "value": "Hilda",
        "weight": 1
      },
      {
        "value": "Hildegard",
        "weight": 1
      },
      {
        "value": "Hillard",
        "weight": 1
      },
      {
        "value": "Hillary",
        "weight": 1
      },
      {
        "value": "Hilma",
        "weight": 1
      },
      {
        "value": "Hilton",
        "weight": 1
      },
      {
        "value": "Hipolito",
        "weight": 1
      },
      {
        "value": "Hiram",
        "weight": 1
      },
      {
        "value": "Hobart",
        "weight": 1
      },
      {
        "value": "Holden",
        "weight": 1
      },
      {
        "value": "Hollie",
        "weight": 1
      },
      {
        "value": "Hollis",
        "weight": 1
      },
      {
        "value": "Holly",
        "weight": 1
      },
      {
        "value": "Hope",
        "weight": 1
      },
      {
        "value": "Horace",
        "weight": 1
      },
      {
        "value": "Horacio",
        "weight": 1
      },
      {
        "value": "Hortense",
        "weight": 1
      },
      {
        "value": "Hosea",
        "weight": 1
      },
      {
        "value": "Houston",
        "weight": 1
      },
      {
        "value": "Howard",
        "weight": 1
      },
      {
        "value": "Howell",
        "weight": 1
      },
      {
        "value": "Hoyt",
        "weight": 1
      },
      {
        "value": "Hubert",
        "weight": 1
      },
      {
        "value": "Hudson",
        "weight": 1
      },
      {
        "value": "Hugh",
        "weight": 1
      },
      {
        "value": "Hulda",
        "weight": 1
      },
      {
        "value": "Humberto",
        "weight": 1
      },
      {
        "value": "Hunter",
        "weight": 1
      },
      {
        "value": "Hyman",
        "weight": 1
      },
      {
        "value": "Ian",
        "weight": 1
      },
      {
        "value": "Ibrahim",
        "weight": 1
      },
      {
        "value": "Icie",
        "weight": 1
      },
      {
        "value": "Ida",
        "weight": 1
      },
      {
        "value": "Idell",
        "weight": 1
      },
      {
        "value": "Idella",
        "weight": 1
      },
      {
        "value": "Ignacio",
        "weight": 1
      },
      {
        "value": "Ignatius",
        "weight": 1
      },
      {
        "value": "Ike",
        "weight": 1
      },
      {
        "value": "Ila",
        "weight": 1
      },
      {
        "value": "Ilene",
        "weight": 1
      },
      {
        "value": "Iliana",
        "weight": 1
      },
      {
        "value": "Ima",
        "weight": 1
      },
      {
        "value": "Imani",
        "weight": 1
      },
      {
        "value": "Imelda",
        "weight": 1
      },
      {
        "value": "Immanuel",
        "weight": 1
      },
      {
        "value": "Imogene",
        "weight": 1
      },
      {
        "value": "Ines",
        "weight": 1
      },
      {
        "value": "Irma",
        "weight": 1
      },
      {
        "value": "Irving",
        "weight": 1
      },
      {
        "value": "Irwin",
        "weight": 1
      },
      {
        "value": "Isaac",
        "weight": 1
      },
      {
        "value": "Isabel",
        "weight": 1
      },
      {
        "value": "Isabell",
        "weight": 1
      },
      {
        "value": "Isabella",
        "weight": 1
      },
      {
        "value": "Isabelle",
        "weight": 1
      },
      {
        "value": "Isac",
        "weight": 1
      },
      {
        "value": "Isadore",
        "weight": 1
      },
      {
        "value": "Isai",
        "weight": 1
      },
      {
        "value": "Isaiah",
        "weight": 1
      },
      {
        "value": "Isaias",
        "weight": 1
      },
      {
        "value": "Isidro",
        "weight": 1
      },
      {
        "value": "Ismael",
        "weight": 1
      },
      {
        "value": "Isobel",
        "weight": 1
      },
      {
        "value": "Isom",
        "weight": 1
      },
      {
        "value": "Israel",
        "weight": 1
      },
      {
        "value": "Issac",
        "weight": 1
      },
      {
        "value": "Itzel",
        "weight": 1
      },
      {
        "value": "Iva",
        "weight": 1
      },
      {
        "value": "Ivah",
        "weight": 1
      },
      {
        "value": "Ivory",
        "weight": 1
      },
      {
        "value": "Ivy",
        "weight": 1
      },
      {
        "value": "Izabella",
        "weight": 1
      },
      {
        "value": "Izaiah",
        "weight": 1
      },
      {
        "value": "Jabari",
        "weight": 1
      },
      {
        "value": "Jace",
        "weight": 1
      },
      {
        "value": "Jacey",
        "weight": 1
      },
      {
        "value": "Jacinthe",
        "weight": 1
      },
      {
        "value": "Jacinto",
        "weight": 1
      },
      {
        "value": "Jack",
        "weight": 1
      },
      {
        "value": "Jackeline",
        "weight": 1
      },
      {
        "value": "Jackie",
        "weight": 1
      },
      {
        "value": "Jacklyn",
        "weight": 1
      },
      {
        "value": "Jackson",
        "weight": 1
      },
      {
        "value": "Jacky",
        "weight": 1
      },
      {
        "value": "Jaclyn",
        "weight": 1
      },
      {
        "value": "Jacquelyn",
        "weight": 1
      },
      {
        "value": "Jacques",
        "weight": 1
      },
      {
        "value": "Jacynthe",
        "weight": 1
      },
      {
        "value": "Jada",
        "weight": 1
      },
      {
        "value": "Jade",
        "weight": 1
      },
      {
        "value": "Jaden",
        "weight": 1
      },
      {
        "value": "Jadon",
        "weight": 1
      },
      {
        "value": "Jadyn",
        "weight": 1
      },
      {
        "value": "Jaeden",
        "weight": 1
      },
      {
        "value": "Jaida",
        "weight": 1
      },
      {
        "value": "Jaiden",
        "weight": 1
      },
      {
        "value": "Jailyn",
        "weight": 1
      },
      {
        "value": "Jaime",
        "weight": 1
      },
      {
        "value": "Jairo",
        "weight": 1
      },
      {
        "value": "Jakayla",
        "weight": 1
      },
      {
        "value": "Jake",
        "weight": 1
      },
      {
        "value": "Jakob",
        "weight": 1
      },
      {
        "value": "Jaleel",
        "weight": 1
      },
      {
        "value": "Jalen",
        "weight": 1
      },
      {
        "value": "Jalon",
        "weight": 1
      },
      {
        "value": "Jalyn",
        "weight": 1
      },
      {
        "value": "Jamaal",
        "weight": 1
      },
      {
        "value": "Jamal",
        "weight": 1
      },
      {
        "value": "Jamar",
        "weight": 1
      },
      {
        "value": "Jamarcus",
        "weight": 1
      },
      {
        "value": "Jamel",
        "weight": 1
      },
      {
        "value": "Jameson",
        "weight": 1
      },
      {
        "value": "Jamey",
        "weight": 1
      },
      {
        "value": "Jamie",
        "weight": 1
      },
      {
        "value": "Jamil",
        "weight": 1
      },
      {
        "value": "Jamir",
        "weight": 1
      },
      {
        "value": "Jamison",
        "weight": 1
      },
      {
        "value": "Jammie",
        "weight": 1
      },
      {
        "value": "Jan",
        "weight": 1
      },
      {
        "value": "Jana",
        "weight": 1
      },
      {
        "value": "Janae",
        "weight": 1
      },
      {
        "value": "Jane",
        "weight": 1
      },
      {
        "value": "Janelle",
        "weight": 1
      },
      {
        "value": "Janessa",
        "weight": 1
      },
      {
        "value": "Janet",
        "weight": 1
      },
      {
        "value": "Janice",
        "weight": 1
      },
      {
        "value": "Janick",
        "weight": 1
      },
      {
        "value": "Janie",
        "weight": 1
      },
      {
        "value": "Janis",
        "weight": 1
      },
      {
        "value": "Janiya",
        "weight": 1
      },
      {
        "value": "Jannie",
        "weight": 1
      },
      {
        "value": "Jany",
        "weight": 1
      },
      {
        "value": "Jaquan",
        "weight": 1
      },
      {
        "value": "Jaquelin",
        "weight": 1
      },
      {
        "value": "Jaqueline",
        "weight": 1
      },
      {
        "value": "Jared",
        "weight": 1
      },
      {
        "value": "Jaren",
        "weight": 1
      },
      {
        "value": "Jarod",
        "weight": 1
      },
      {
        "value": "Jaron",
        "weight": 1
      },
      {
        "value": "Jarred",
        "weight": 1
      },
      {
        "value": "Jarrell",
        "weight": 1
      },
      {
        "value": "Jarret",
        "weight": 1
      },
      {
        "value": "Jarrett",
        "weight": 1
      },
      {
        "value": "Jarrod",
        "weight": 1
      },
      {
        "value": "Jarvis",
        "weight": 1
      },
      {
        "value": "Jasen",
        "weight": 1
      },
      {
        "value": "Jasmin",
        "weight": 1
      },
      {
        "value": "Jason",
        "weight": 1
      },
      {
        "value": "Jasper",
        "weight": 1
      },
      {
        "value": "Jaunita",
        "weight": 1
      },
      {
        "value": "Javier",
        "weight": 1
      },
      {
        "value": "Javon",
        "weight": 1
      },
      {
        "value": "Javonte",
        "weight": 1
      },
      {
        "value": "Jay",
        "weight": 1
      },
      {
        "value": "Jayce",
        "weight": 1
      },
      {
        "value": "Jaycee",
        "weight": 1
      },
      {
        "value": "Jayda",
        "weight": 1
      },
      {
        "value": "Jayde",
        "weight": 1
      },
      {
        "value": "Jayden",
        "weight": 1
      },
      {
        "value": "Jaydon",
        "weight": 1
      },
      {
        "value": "Jaylan",
        "weight": 1
      },
      {
        "value": "Jaylen",
        "weight": 1
      },
      {
        "value": "Jaylin",
        "weight": 1
      },
      {
        "value": "Jaylon",
        "weight": 1
      },
      {
        "value": "Jayme",
        "weight": 1
      },
      {
        "value": "Jayne",
        "weight": 1
      },
      {
        "value": "Jayson",
        "weight": 1
      },
      {
        "value": "Jazlyn",
        "weight": 1
      },
      {
        "value": "Jazmin",
        "weight": 1
      },
      {
        "value": "Jazmyn",
        "weight": 1
      },
      {
        "value": "Jazmyne",
        "weight": 1
      },
      {
        "value": "Jean",
        "weight": 1
      },
      {
        "value": "Jeanette",
        "weight": 1
      },
      {
        "value": "Jeanie",
        "weight": 1
      },
      {
        "value": "Jeanne",
        "weight": 1
      },
      {
        "value": "Jed",
        "weight": 1
      },
      {
        "value": "Jedediah",
        "weight": 1
      },
      {
        "value": "Jedidiah",
        "weight": 1
      },
      {
        "value": "Jeff",
        "weight": 1
      },
      {
        "value": "Jefferey",
        "weight": 1
      },
      {
        "value": "Jeffery",
        "weight": 1
      },
      {
        "value": "Jeffrey",
        "weight": 1
      },
      {
        "value": "Jeffry",
        "weight": 1
      },
      {
        "value": "Jena",
        "weight": 1
      },
      {
        "value": "Jenifer",
        "weight": 1
      },
      {
        "value": "Jennie",
        "weight": 1
      },
      {
        "value": "Jennifer",
        "weight": 1
      },
      {
        "value": "Jennings",
        "weight": 1
      },
      {
        "value": "Jennyfer",
        "weight": 1
      },
      {
        "value": "Jensen",
        "weight": 1
      },
      {
        "value": "Jerad",
        "weight": 1
      },
      {
        "value": "Jerald",
        "weight": 1
      },
      {
        "value": "Jeramie",
        "weight": 1
      },
      {
        "value": "Jeramy",
        "weight": 1
      },
      {
        "value": "Jerel",
        "weight": 1
      },
      {
        "value": "Jeremie",
        "weight": 1
      },
      {
        "value": "Jeremy",
        "weight": 1
      },
      {
        "value": "Jermain",
        "weight": 1
      },
      {
        "value": "Jermaine",
        "weight": 1
      },
      {
        "value": "Jermey",
        "weight": 1
      },
      {
        "value": "Jerod",
        "weight": 1
      },
      {
        "value": "Jerome",
        "weight": 1
      },
      {
        "value": "Jeromy",
        "weight": 1
      },
      {
        "value": "Jerrell",
        "weight": 1
      },
      {
        "value": "Jerrod",
        "weight": 1
      },
      {
        "value": "Jerrold",
        "weight": 1
      },
      {
        "value": "Jerry",
        "weight": 1
      },
      {
        "value": "Jess",
        "weight": 1
      },
      {
        "value": "Jesse",
        "weight": 1
      },
      {
        "value": "Jessica",
        "weight": 1
      },
      {
        "value": "Jessie",
        "weight": 1
      },
      {
        "value": "Jessika",
        "weight": 1
      },
      {
        "value": "Jessy",
        "weight": 1
      },
      {
        "value": "Jessyca",
        "weight": 1
      },
      {
        "value": "Jesus",
        "weight": 1
      },
      {
        "value": "Jett",
        "weight": 1
      },
      {
        "value": "Jettie",
        "weight": 1
      },
      {
        "value": "Jevon",
        "weight": 1
      },
      {
        "value": "Jewel",
        "weight": 1
      },
      {
        "value": "Jewell",
        "weight": 1
      },
      {
        "value": "Jillian",
        "weight": 1
      },
      {
        "value": "Jimmie",
        "weight": 1
      },
      {
        "value": "Jimmy",
        "weight": 1
      },
      {
        "value": "Jo",
        "weight": 1
      },
      {
        "value": "Joan",
        "weight": 1
      },
      {
        "value": "Joana",
        "weight": 1
      },
      {
        "value": "Joanie",
        "weight": 1
      },
      {
        "value": "Joanne",
        "weight": 1
      },
      {
        "value": "Joannie",
        "weight": 1
      },
      {
        "value": "Joanny",
        "weight": 1
      },
      {
        "value": "Joany",
        "weight": 1
      },
      {
        "value": "Joaquin",
        "weight": 1
      },
      {
        "value": "Jocelyn",
        "weight": 1
      },
      {
        "value": "Jodie",
        "weight": 1
      },
      {
        "value": "Jody",
        "weight": 1
      },
      {
        "value": "Joe",
        "weight": 1
      },
      {
        "value": "Joel",
        "weight": 1
      },
      {
        "value": "Joelle",
        "weight": 1
      },
      {
        "value": "Joesph",
        "weight": 1
      },
      {
        "value": "Joey",
        "weight": 1
      },
      {
        "value": "Johan",
        "weight": 1
      },
      {
        "value": "Johann",
        "weight": 1
      },
      {
        "value": "Johanna",
        "weight": 1
      },
      {
        "value": "Johathan",
        "weight": 1
      },
      {
        "value": "John",
        "weight": 1
      },
      {
        "value": "Johnathan",
        "weight": 1
      },
      {
        "value": "Johnathon",
        "weight": 1
      },
      {
        "value": "Johnnie",
        "weight": 1
      },
      {
        "value": "Johnny",
        "weight": 1
      },
      {
        "value": "Johnpaul",
        "weight": 1
      },
      {
        "value": "Johnson",
        "weight": 1
      },
      {
        "value": "Jolie",
        "weight": 1
      },
      {
        "value": "Jon",
        "weight": 1
      },
      {
        "value": "Jonas",
        "weight": 1
      },
      {
        "value": "Jonatan",
        "weight": 1
      },
      {
        "value": "Jonathan",
        "weight": 1
      },
      {
        "value": "Jonathon",
        "weight": 1
      },
      {
        "value": "Jordan",
        "weight": 1
      },
      {
        "value": "Jordane",
        "weight": 1
      },
      {
        "value": "Jordi",
        "weight": 1
      },
      {
        "value": "Jordon",
        "weight": 1
      },
      {
        "value": "Jordy",
        "weight": 1
      },
      {
        "value": "Jordyn",
        "weight": 1
      },
      {
        "value": "Jorge",
        "weight": 1
      },
      {
        "value": "Jose",
        "weight": 1
      },
      {
        "value": "Josefa",
        "weight": 1
      },
      {
        "value": "Josefina",
        "weight": 1
      },
      {
        "value": "Joseph",
        "weight": 1
      },
      {
        "value": "Josephine",
        "weight": 1
      },
      {
        "value": "Josh",
        "weight": 1
      },
      {
        "value": "Joshua",
        "weight": 1
      },
      {
        "value": "Joshuah",
        "weight": 1
      },
      {
        "value": "Josiah",
        "weight": 1
      },
      {
        "value": "Josiane",
        "weight": 1
      },
      {
        "value": "Josianne",
        "weight": 1
      },
      {
        "value": "Josie",
        "weight": 1
      },
      {
        "value": "Josue",
        "weight": 1
      },
      {
        "value": "Jovan",
        "weight": 1
      },
      {
        "value": "Jovani",
        "weight": 1
      },
      {
        "value": "Jovanny",
        "weight": 1
      },
      {
        "value": "Jovany",
        "weight": 1
      },
      {
        "value": "Joy",
        "weight": 1
      },
      {
        "value": "Joyce",
        "weight": 1
      },
      {
        "value": "Juana",
        "weight": 1
      },
      {
        "value": "Juanita",
        "weight": 1
      },
      {
        "value": "Judah",
        "weight": 1
      },
      {
        "value": "Judd",
        "weight": 1
      },
      {
        "value": "Jude",
        "weight": 1
      },
      {
        "value": "Judge",
        "weight": 1
      },
      {
        "value": "Judson",
        "weight": 1
      },
      {
        "value": "Judy",
        "weight": 1
      },
      {
        "value": "Jules",
        "weight": 1
      },
      {
        "value": "Julia",
        "weight": 1
      },
      {
        "value": "Julian",
        "weight": 1
      },
      {
        "value": "Juliana",
        "weight": 1
      },
      {
        "value": "Julianne",
        "weight": 1
      },
      {
        "value": "Julie",
        "weight": 1
      },
      {
        "value": "Julien",
        "weight": 1
      },
      {
        "value": "Juliet",
        "weight": 1
      },
      {
        "value": "Julio",
        "weight": 1
      },
      {
        "value": "Julius",
        "weight": 1
      },
      {
        "value": "June",
        "weight": 1
      },
      {
        "value": "Junior",
        "weight": 1
      },
      {
        "value": "Junius",
        "weight": 1
      },
      {
        "value": "Justen",
        "weight": 1
      },
      {
        "value": "Justice",
        "weight": 1
      },
      {
        "value": "Justina",
        "weight": 1
      },
      {
        "value": "Justine",
        "weight": 1
      },
      {
        "value": "Juston",
        "weight": 1
      },
      {
        "value": "Justus",
        "weight": 1
      },
      {
        "value": "Justyn",
        "weight": 1
      },
      {
        "value": "Juvenal",
        "weight": 1
      },
      {
        "value": "Juwan",
        "weight": 1
      },
      {
        "value": "Kacey",
        "weight": 1
      },
      {
        "value": "Kaci",
        "weight": 1
      },
      {
        "value": "Kacie",
        "weight": 1
      },
      {
        "value": "Kade",
        "weight": 1
      },
      {
        "value": "Kaden",
        "weight": 1
      },
      {
        "value": "Kadin",
        "weight": 1
      },
      {
        "value": "Kaela",
        "weight": 1
      },
      {
        "value": "Kaelyn",
        "weight": 1
      },
      {
        "value": "Kaia",
        "weight": 1
      },
      {
        "value": "Kailee",
        "weight": 1
      },
      {
        "value": "Kailey",
        "weight": 1
      },
      {
        "value": "Kailyn",
        "weight": 1
      },
      {
        "value": "Kaitlin",
        "weight": 1
      },
      {
        "value": "Kaitlyn",
        "weight": 1
      },
      {
        "value": "Kale",
        "weight": 1
      },
      {
        "value": "Kaleb",
        "weight": 1
      },
      {
        "value": "Kaleigh",
        "weight": 1
      },
      {
        "value": "Kaley",
        "weight": 1
      },
      {
        "value": "Kali",
        "weight": 1
      },
      {
        "value": "Kallie",
        "weight": 1
      },
      {
        "value": "Kameron",
        "weight": 1
      },
      {
        "value": "Kamille",
        "weight": 1
      },
      {
        "value": "Kamren",
        "weight": 1
      },
      {
        "value": "Kamron",
        "weight": 1
      },
      {
        "value": "Kamryn",
        "weight": 1
      },
      {
        "value": "Kane",
        "weight": 1
      },
      {
        "value": "Kara",
        "weight": 1
      },
      {
        "value": "Kareem",
        "weight": 1
      },
      {
        "value": "Karelle",
        "weight": 1
      },
      {
        "value": "Karen",
        "weight": 1
      },
      {
        "value": "Kari",
        "weight": 1
      },
      {
        "value": "Kariane",
        "weight": 1
      },
      {
        "value": "Karianne",
        "weight": 1
      },
      {
        "value": "Karina",
        "weight": 1
      },
      {
        "value": "Karine",
        "weight": 1
      },
      {
        "value": "Karl",
        "weight": 1
      },
      {
        "value": "Karlee",
        "weight": 1
      },
      {
        "value": "Karley",
        "weight": 1
      },
      {
        "value": "Karli",
        "weight": 1
      },
      {
        "value": "Karlie",
        "weight": 1
      },
      {
        "value": "Karolann",
        "weight": 1
      },
      {
        "value": "Karson",
        "weight": 1
      },
      {
        "value": "Kasandra",
        "weight": 1
      },
      {
        "value": "Kasey",
        "weight": 1
      },
      {
        "value": "Kassandra",
        "weight": 1
      },
      {
        "value": "Katarina",
        "weight": 1
      },
      {
        "value": "Katelin",
        "weight": 1
      },
      {
        "value": "Katelyn",
        "weight": 1
      },
      {
        "value": "Katelynn",
        "weight": 1
      },
      {
        "value": "Katharina",
        "weight": 1
      },
      {
        "value": "Katherine",
        "weight": 1
      },
      {
        "value": "Katheryn",
        "weight": 1
      },
      {
        "value": "Kathleen",
        "weight": 1
      },
      {
        "value": "Kathlyn",
        "weight": 1
      },
      {
        "value": "Kathryn",
        "weight": 1
      },
      {
        "value": "Kathryne",
        "weight": 1
      },
      {
        "value": "Katlyn",
        "weight": 1
      },
      {
        "value": "Katlynn",
        "weight": 1
      },
      {
        "value": "Katrina",
        "weight": 1
      },
      {
        "value": "Katrine",
        "weight": 1
      },
      {
        "value": "Kattie",
        "weight": 1
      },
      {
        "value": "Kavon",
        "weight": 1
      },
      {
        "value": "Kay",
        "weight": 1
      },
      {
        "value": "Kaya",
        "weight": 1
      },
      {
        "value": "Kaycee",
        "weight": 1
      },
      {
        "value": "Kayden",
        "weight": 1
      },
      {
        "value": "Kayla",
        "weight": 1
      },
      {
        "value": "Kaylah",
        "weight": 1
      },
      {
        "value": "Kaylee",
        "weight": 1
      },
      {
        "value": "Kayleigh",
        "weight": 1
      },
      {
        "value": "Kayley",
        "weight": 1
      },
      {
        "value": "Kayli",
        "weight": 1
      },
      {
        "value": "Kaylie",
        "weight": 1
      },
      {
        "value": "Kaylin",
        "weight": 1
      },
      {
        "value": "Keagan",
        "weight": 1
      },
      {
        "value": "Keanu",
        "weight": 1
      },
      {
        "value": "Keara",
        "weight": 1
      },
      {
        "value": "Keaton",
        "weight": 1
      },
      {
        "value": "Keegan",
        "weight": 1
      },
      {
        "value": "Keeley",
        "weight": 1
      },
      {
        "value": "Keely",
        "weight": 1
      },
      {
        "value": "Keenan",
        "weight": 1
      },
      {
        "value": "Keira",
        "weight": 1
      },
      {
        "value": "Keith",
        "weight": 1
      },
      {
        "value": "Kellen",
        "weight": 1
      },
      {
        "value": "Kelley",
        "weight": 1
      },
      {
        "value": "Kelli",
        "weight": 1
      },
      {
        "value": "Kellie",
        "weight": 1
      },
      {
        "value": "Kelly",
        "weight": 1
      },
      {
        "value": "Kelsi",
        "weight": 1
      },
      {
        "value": "Kelsie",
        "weight": 1
      },
      {
        "value": "Kelton",
        "weight": 1
      },
      {
        "value": "Kelvin",
        "weight": 1
      },
      {
        "value": "Ken",
        "weight": 1
      },
      {
        "value": "Kendall",
        "weight": 1
      },
      {
        "value": "Kendra",
        "weight": 1
      },
      {
        "value": "Kendrick",
        "weight": 1
      },
      {
        "value": "Kenna",
        "weight": 1
      },
      {
        "value": "Kennedi",
        "weight": 1
      },
      {
        "value": "Kennedy",
        "weight": 1
      },
      {
        "value": "Kenneth",
        "weight": 1
      },
      {
        "value": "Kennith",
        "weight": 1
      },
      {
        "value": "Kenny",
        "weight": 1
      },
      {
        "value": "Kenton",
        "weight": 1
      },
      {
        "value": "Kenya",
        "weight": 1
      },
      {
        "value": "Kenyatta",
        "weight": 1
      },
      {
        "value": "Kenyon",
        "weight": 1
      },
      {
        "value": "Keon",
        "weight": 1
      },
      {
        "value": "Keshaun",
        "weight": 1
      },
      {
        "value": "Keshawn",
        "weight": 1
      },
      {
        "value": "Keven",
        "weight": 1
      },
      {
        "value": "Kevin",
        "weight": 1
      },
      {
        "value": "Kevon",
        "weight": 1
      },
      {
        "value": "Keyon",
        "weight": 1
      },
      {
        "value": "Keyshawn",
        "weight": 1
      },
      {
        "value": "Khalid",
        "weight": 1
      },
      {
        "value": "Khalil",
        "weight": 1
      },
      {
        "value": "Kian",
        "weight": 1
      },
      {
        "value": "Kiana",
        "weight": 1
      },
      {
        "value": "Kianna",
        "weight": 1
      },
      {
        "value": "Kiara",
        "weight": 1
      },
      {
        "value": "Kiarra",
        "weight": 1
      },
      {
        "value": "Kiel",
        "weight": 1
      },
      {
        "value": "Kiera",
        "weight": 1
      },
      {
        "value": "Kieran",
        "weight": 1
      },
      {
        "value": "Kiley",
        "weight": 1
      },
      {
        "value": "Kim",
        "weight": 1
      },
      {
        "value": "Kimberly",
        "weight": 1
      },
      {
        "value": "King",
        "weight": 1
      },
      {
        "value": "Kip",
        "weight": 1
      },
      {
        "value": "Kira",
        "weight": 1
      },
      {
        "value": "Kirk",
        "weight": 1
      },
      {
        "value": "Kirsten",
        "weight": 1
      },
      {
        "value": "Kirstin",
        "weight": 1
      },
      {
        "value": "Kitty",
        "weight": 1
      },
      {
        "value": "Kobe",
        "weight": 1
      },
      {
        "value": "Koby",
        "weight": 1
      },
      {
        "value": "Kody",
        "weight": 1
      },
      {
        "value": "Kolby",
        "weight": 1
      },
      {
        "value": "Kole",
        "weight": 1
      },
      {
        "value": "Korbin",
        "weight": 1
      },
      {
        "value": "Korey",
        "weight": 1
      },
      {
        "value": "Kory",
        "weight": 1
      },
      {
        "value": "Kraig",
        "weight": 1
      },
      {
        "value": "Kris",
        "weight": 1
      },
      {
        "value": "Krista",
        "weight": 1
      },
      {
        "value": "Kristian",
        "weight": 1
      },
      {
        "value": "Kristin",
        "weight": 1
      },
      {
        "value": "Kristina",
        "weight": 1
      },
      {
        "value": "Kristofer",
        "weight": 1
      },
      {
        "value": "Kristoffer",
        "weight": 1
      },
      {
        "value": "Kristopher",
        "weight": 1
      },
      {
        "value": "Kristy",
        "weight": 1
      },
      {
        "value": "Krystal",
        "weight": 1
      },
      {
        "value": "Krystel",
        "weight": 1
      },
      {
        "value": "Krystina",
        "weight": 1
      },
      {
        "value": "Kurt",
        "weight": 1
      },
      {
        "value": "Kurtis",
        "weight": 1
      },
      {
        "value": "Kyla",
        "weight": 1
      },
      {
        "value": "Kyle",
        "weight": 1
      },
      {
        "value": "Kylee",
        "weight": 1
      },
      {
        "value": "Kyleigh",
        "weight": 1
      },
      {
        "value": "Kyler",
        "weight": 1
      },
      {
        "value": "Kylie",
        "weight": 1
      },
      {
        "value": "Kyra",
        "weight": 1
      },
      {
        "value": "Lacey",
        "weight": 1
      },
      {
        "value": "Lacy",
        "weight": 1
      },
      {
        "value": "Ladarius",
        "weight": 1
      },
      {
        "value": "Lafayette",
        "weight": 1
      },
      {
        "value": "Laila",
        "weight": 1
      },
      {
        "value": "Laisha",
        "weight": 1
      },
      {
        "value": "Lamar",
        "weight": 1
      },
      {
        "value": "Lambert",
        "weight": 1
      },
      {
        "value": "Lamont",
        "weight": 1
      },
      {
        "value": "Lance",
        "weight": 1
      },
      {
        "value": "Landen",
        "weight": 1
      },
      {
        "value": "Lane",
        "weight": 1
      },
      {
        "value": "Laney",
        "weight": 1
      },
      {
        "value": "Larissa",
        "weight": 1
      },
      {
        "value": "Laron",
        "weight": 1
      },
      {
        "value": "Larry",
        "weight": 1
      },
      {
        "value": "Larue",
        "weight": 1
      },
      {
        "value": "Laura",
        "weight": 1
      },
      {
        "value": "Laurel",
        "weight": 1
      },
      {
        "value": "Lauren",
        "weight": 1
      },
      {
        "value": "Laurence",
        "weight": 1
      },
      {
        "value": "Lauretta",
        "weight": 1
      },
      {
        "value": "Lauriane",
        "weight": 1
      },
      {
        "value": "Laurianne",
        "weight": 1
      },
      {
        "value": "Laurie",
        "weight": 1
      },
      {
        "value": "Laurine",
        "weight": 1
      },
      {
        "value": "Laury",
        "weight": 1
      },
      {
        "value": "Lauryn",
        "weight": 1
      },
      {
        "value": "Lavada",
        "weight": 1
      },
      {
        "value": "Lavern",
        "weight": 1
      },
      {
        "value": "Laverna",
        "weight": 1
      },
      {
        "value": "Laverne",
        "weight": 1
      },
      {
        "value": "Lavina",
        "weight": 1
      },
      {
        "value": "Lavinia",
        "weight": 1
      },
      {
        "value": "Lavon",
        "weight": 1
      },
      {
        "value": "Lavonne",
        "weight": 1
      },
      {
        "value": "Lawrence",
        "weight": 1
      },
      {
        "value": "Lawson",
        "weight": 1
      },
      {
        "value": "Layla",
        "weight": 1
      },
      {
        "value": "Layne",
        "weight": 1
      },
      {
        "value": "Lazaro",
        "weight": 1
      },
      {
        "value": "Lea",
        "weight": 1
      },
      {
        "value": "Leann",
        "weight": 1
      },
      {
        "value": "Leanna",
        "weight": 1
      },
      {
        "value": "Leanne",
        "weight": 1
      },
      {
        "value": "Leatha",
        "weight": 1
      },
      {
        "value": "Leda",
        "weight": 1
      },
      {
        "value": "Lee",
        "weight": 1
      },
      {
        "value": "Leif",
        "weight": 1
      },
      {
        "value": "Leila",
        "weight": 1
      },
      {
        "value": "Leilani",
        "weight": 1
      },
      {
        "value": "Lela",
        "weight": 1
      },
      {
        "value": "Lelah",
        "weight": 1
      },
      {
        "value": "Leland",
        "weight": 1
      },
      {
        "value": "Lelia",
        "weight": 1
      },
      {
        "value": "Lempi",
        "weight": 1
      },
      {
        "value": "Lemuel",
        "weight": 1
      },
      {
        "value": "Lenna",
        "weight": 1
      },
      {
        "value": "Lennie",
        "weight": 1
      },
      {
        "value": "Lenny",
        "weight": 1
      },
      {
        "value": "Lenora",
        "weight": 1
      },
      {
        "value": "Lenore",
        "weight": 1
      },
      {
        "value": "Leo",
        "weight": 1
      },
      {
        "value": "Leola",
        "weight": 1
      },
      {
        "value": "Leon",
        "weight": 1
      },
      {
        "value": "Leonard",
        "weight": 1
      },
      {
        "value": "Leonardo",
        "weight": 1
      },
      {
        "value": "Leone",
        "weight": 1
      },
      {
        "value": "Leonel",
        "weight": 1
      },
      {
        "value": "Leonie",
        "weight": 1
      },
      {
        "value": "Leonor",
        "weight": 1
      },
      {
        "value": "Leonora",
        "weight": 1
      },
      {
        "value": "Leopold",
        "weight": 1
      },
      {
        "value": "Leopoldo",
        "weight": 1
      },
      {
        "value": "Leora",
        "weight": 1
      },
      {
        "value": "Lera",
        "weight": 1
      },
      {
        "value": "Lesley",
        "weight": 1
      },
      {
        "value": "Leslie",
        "weight": 1
      },
      {
        "value": "Lesly",
        "weight": 1
      },
      {
        "value": "Lessie",
        "weight": 1
      },
      {
        "value": "Lester",
        "weight": 1
      },
      {
        "value": "Leta",
        "weight": 1
      },
      {
        "value": "Letha",
        "weight": 1
      },
      {
        "value": "Letitia",
        "weight": 1
      },
      {
        "value": "Levi",
        "weight": 1
      },
      {
        "value": "Lew",
        "weight": 1
      },
      {
        "value": "Lewis",
        "weight": 1
      },
      {
        "value": "Lexi",
        "weight": 1
      },
      {
        "value": "Lexie",
        "weight": 1
      },
      {
        "value": "Lexus",
        "weight": 1
      },
      {
        "value": "Lia",
        "weight": 1
      },
      {
        "value": "Liam",
        "weight": 1
      },
      {
        "value": "Liana",
        "weight": 1
      },
      {
        "value": "Libbie",
        "weight": 1
      },
      {
        "value": "Libby",
        "weight": 1
      },
      {
        "value": "Lila",
        "weight": 1
      },
      {
        "value": "Lilian",
        "weight": 1
      },
      {
        "value": "Liliana",
        "weight": 1
      },
      {
        "value": "Liliane",
        "weight": 1
      },
      {
        "value": "Lilla",
        "weight": 1
      },
      {
        "value": "Lillian",
        "weight": 1
      },
      {
        "value": "Lilliana",
        "weight": 1
      },
      {
        "value": "Lillie",
        "weight": 1
      },
      {
        "value": "Lilly",
        "weight": 1
      },
      {
        "value": "Lily",
        "weight": 1
      },
      {
        "value": "Lilyan",
        "weight": 1
      },
      {
        "value": "Lina",
        "weight": 1
      },
      {
        "value": "Lincoln",
        "weight": 1
      },
      {
        "value": "Linda",
        "weight": 1
      },
      {
        "value": "Lindsay",
        "weight": 1
      },
      {
        "value": "Lindsey",
        "weight": 1
      },
      {
        "value": "Linnea",
        "weight": 1
      },
      {
        "value": "Linnie",
        "weight": 1
      },
      {
        "value": "Linwood",
        "weight": 1
      },
      {
        "value": "Lionel",
        "weight": 1
      },
      {
        "value": "Lisa",
        "weight": 1
      },
      {
        "value": "Lisandro",
        "weight": 1
      },
      {
        "value": "Lisette",
        "weight": 1
      },
      {
        "value": "Litzy",
        "weight": 1
      },
      {
        "value": "Liza",
        "weight": 1
      },
      {
        "value": "Lizeth",
        "weight": 1
      },
      {
        "value": "Lizzie",
        "weight": 1
      },
      {
        "value": "Llewellyn",
        "weight": 1
      },
      {
        "value": "Lloyd",
        "weight": 1
      },
      {
        "value": "Logan",
        "weight": 1
      },
      {
        "value": "Lois",
        "weight": 1
      },
      {
        "value": "Lola",
        "weight": 1
      },
      {
        "value": "Lolita",
        "weight": 1
      },
      {
        "value": "Loma",
        "weight": 1
      },
      {
        "value": "Lon",
        "weight": 1
      },
      {
        "value": "London",
        "weight": 1
      },
      {
        "value": "Lonie",
        "weight": 1
      },
      {
        "value": "Lonnie",
        "weight": 1
      },
      {
        "value": "Lonny",
        "weight": 1
      },
      {
        "value": "Lonzo",
        "weight": 1
      },
      {
        "value": "Lora",
        "weight": 1
      },
      {
        "value": "Loraine",
        "weight": 1
      },
      {
        "value": "Loren",
        "weight": 1
      },
      {
        "value": "Lorena",
        "weight": 1
      },
      {
        "value": "Lorenz",
        "weight": 1
      },
      {
        "value": "Lorenza",
        "weight": 1
      },
      {
        "value": "Lorenzo",
        "weight": 1
      },
      {
        "value": "Lori",
        "weight": 1
      },
      {
        "value": "Lorine",
        "weight": 1
      },
      {
        "value": "Lorna",
        "weight": 1
      },
      {
        "value": "Lottie",
        "weight": 1
      },
      {
        "value": "Lou",
        "weight": 1
      },
      {
        "value": "Louie",
        "weight": 1
      },
      {
        "value": "Louisa",
        "weight": 1
      },
      {
        "value": "Lourdes",
        "weight": 1
      },
      {
        "value": "Louvenia",
        "weight": 1
      },
      {
        "value": "Lowell",
        "weight": 1
      },
      {
        "value": "Loy",
        "weight": 1
      },
      {
        "value": "Loyal",
        "weight": 1
      },
      {
        "value": "Loyce",
        "weight": 1
      },
      {
        "value": "Lucas",
        "weight": 1
      },
      {
        "value": "Luciano",
        "weight": 1
      },
      {
        "value": "Lucie",
        "weight": 1
      },
      {
        "value": "Lucienne",
        "weight": 1
      },
      {
        "value": "Lucile",
        "weight": 1
      },
      {
        "value": "Lucinda",
        "weight": 1
      },
      {
        "value": "Lucio",
        "weight": 1
      },
      {
        "value": "Lucious",
        "weight": 1
      },
      {
        "value": "Lucius",
        "weight": 1
      },
      {
        "value": "Lucy",
        "weight": 1
      },
      {
        "value": "Ludie",
        "weight": 1
      },
      {
        "value": "Ludwig",
        "weight": 1
      },
      {
        "value": "Lue",
        "weight": 1
      },
      {
        "value": "Luella",
        "weight": 1
      },
      {
        "value": "Luigi",
        "weight": 1
      },
      {
        "value": "Luis",
        "weight": 1
      },
      {
        "value": "Luisa",
        "weight": 1
      },
      {
        "value": "Lukas",
        "weight": 1
      },
      {
        "value": "Lula",
        "weight": 1
      },
      {
        "value": "Lulu",
        "weight": 1
      },
      {
        "value": "Luna",
        "weight": 1
      },
      {
        "value": "Lupe",
        "weight": 1
      },
      {
        "value": "Lura",
        "weight": 1
      },
      {
        "value": "Lurline",
        "weight": 1
      },
      {
        "value": "Luther",
        "weight": 1
      },
      {
        "value": "Luz",
        "weight": 1
      },
      {
        "value": "Lyda",
        "weight": 1
      },
      {
        "value": "Lydia",
        "weight": 1
      },
      {
        "value": "Lyla",
        "weight": 1
      },
      {
        "value": "Lynn",
        "weight": 1
      },
      {
        "value": "Lyric",
        "weight": 1
      },
      {
        "value": "Lysanne",
        "weight": 1
      },
      {
        "value": "Mabel",
        "weight": 1
      },
      {
        "value": "Mabelle",
        "weight": 1
      },
      {
        "value": "Mable",
        "weight": 1
      },
      {
        "value": "Mac",
        "weight": 1
      },
      {
        "value": "Macey",
        "weight": 1
      },
      {
        "value": "Maci",
        "weight": 1
      },
      {
        "value": "Macie",
        "weight": 1
      },
      {
        "value": "Mack",
        "weight": 1
      },
      {
        "value": "Mackenzie",
        "weight": 1
      },
      {
        "value": "Macy",
        "weight": 1
      },
      {
        "value": "Madaline",
        "weight": 1
      },
      {
        "value": "Madalyn",
        "weight": 1
      },
      {
        "value": "Maddison",
        "weight": 1
      },
      {
        "value": "Madeline",
        "weight": 1
      },
      {
        "value": "Madelyn",
        "weight": 1
      },
      {
        "value": "Madelynn",
        "weight": 1
      },
      {
        "value": "Madge",
        "weight": 1
      },
      {
        "value": "Madie",
        "weight": 1
      },
      {
        "value": "Madilyn",
        "weight": 1
      },
      {
        "value": "Madisen",
        "weight": 1
      },
      {
        "value": "Madison",
        "weight": 1
      },
      {
        "value": "Madisyn",
        "weight": 1
      },
      {
        "value": "Madonna",
        "weight": 1
      },
      {
        "value": "Madyson",
        "weight": 1
      },
      {
        "value": "Mae",
        "weight": 1
      },
      {
        "value": "Maegan",
        "weight": 1
      },
      {
        "value": "Maeve",
        "weight": 1
      },
      {
        "value": "Mafalda",
        "weight": 1
      },
      {
        "value": "Magali",
        "weight": 1
      },
      {
        "value": "Magdalen",
        "weight": 1
      },
      {
        "value": "Magdalena",
        "weight": 1
      },
      {
        "value": "Maggie",
        "weight": 1
      },
      {
        "value": "Magnolia",
        "weight": 1
      },
      {
        "value": "Magnus",
        "weight": 1
      },
      {
        "value": "Maia",
        "weight": 1
      },
      {
        "value": "Maida",
        "weight": 1
      },
      {
        "value": "Maiya",
        "weight": 1
      },
      {
        "value": "Major",
        "weight": 1
      },
      {
        "value": "Makayla",
        "weight": 1
      },
      {
        "value": "Makenna",
        "weight": 1
      },
      {
        "value": "Makenzie",
        "weight": 1
      },
      {
        "value": "Malachi",
        "weight": 1
      },
      {
        "value": "Malcolm",
        "weight": 1
      },
      {
        "value": "Malika",
        "weight": 1
      },
      {
        "value": "Malinda",
        "weight": 1
      },
      {
        "value": "Mallie",
        "weight": 1
      },
      {
        "value": "Mallory",
        "weight": 1
      },
      {
        "value": "Malvina",
        "weight": 1
      },
      {
        "value": "Mandy",
        "weight": 1
      },
      {
        "value": "Manley",
        "weight": 1
      },
      {
        "value": "Manuel",
        "weight": 1
      },
      {
        "value": "Manuela",
        "weight": 1
      },
      {
        "value": "Mara",
        "weight": 1
      },
      {
        "value": "Marc",
        "weight": 1
      },
      {
        "value": "Marcel",
        "weight": 1
      },
      {
        "value": "Marcelina",
        "weight": 1
      },
      {
        "value": "Marcelino",
        "weight": 1
      },
      {
        "value": "Marcella",
        "weight": 1
      },
      {
        "value": "Marcelle",
        "weight": 1
      },
      {
        "value": "Marcellus",
        "weight": 1
      },
      {
        "value": "Marcelo",
        "weight": 1
      },
      {
        "value": "Marcia",
        "weight": 1
      },
      {
        "value": "Marco",
        "weight": 1
      },
      {
        "value": "Marcos",
        "weight": 1
      },
      {
        "value": "Marcus",
        "weight": 1
      },
      {
        "value": "Margaret",
        "weight": 1
      },
      {
        "value": "Margarete",
        "weight": 1
      },
      {
        "value": "Margarett",
        "weight": 1
      },
      {
        "value": "Margaretta",
        "weight": 1
      },
      {
        "value": "Margarette",
        "weight": 1
      },
      {
        "value": "Margarita",
        "weight": 1
      },
      {
        "value": "Marge",
        "weight": 1
      },
      {
        "value": "Margie",
        "weight": 1
      },
      {
        "value": "Margot",
        "weight": 1
      },
      {
        "value": "Margret",
        "weight": 1
      },
      {
        "value": "Marguerite",
        "weight": 1
      },
      {
        "value": "Maria",
        "weight": 1
      },
      {
        "value": "Mariah",
        "weight": 1
      },
      {
        "value": "Mariam",
        "weight": 1
      },
      {
        "value": "Marian",
        "weight": 1
      },
      {
        "value": "Mariana",
        "weight": 1
      },
      {
        "value": "Mariane",
        "weight": 1
      },
      {
        "value": "Marianna",
        "weight": 1
      },
      {
        "value": "Marianne",
        "weight": 1
      },
      {
        "value": "Mariano",
        "weight": 1
      },
      {
        "value": "Maribel",
        "weight": 1
      },
      {
        "value": "Marie",
        "weight": 1
      },
      {
        "value": "Mariela",
        "weight": 1
      },
      {
        "value": "Marielle",
        "weight": 1
      },
      {
        "value": "Marietta",
        "weight": 1
      },
      {
        "value": "Marilie",
        "weight": 1
      },
      {
        "value": "Marilou",
        "weight": 1
      },
      {
        "value": "Marilyne",
        "weight": 1
      },
      {
        "value": "Marina",
        "weight": 1
      },
      {
        "value": "Mario",
        "weight": 1
      },
      {
        "value": "Marion",
        "weight": 1
      },
      {
        "value": "Marisa",
        "weight": 1
      },
      {
        "value": "Marisol",
        "weight": 1
      },
      {
        "value": "Maritza",
        "weight": 1
      },
      {
        "value": "Marjolaine",
        "weight": 1
      },
      {
        "value": "Marjorie",
        "weight": 1
      },
      {
        "value": "Marjory",
        "weight": 1
      },
      {
        "value": "Mark",
        "weight": 1
      },
      {
        "value": "Markus",
        "weight": 1
      },
      {
        "value": "Marlee",
        "weight": 1
      },
      {
        "value": "Marlen",
        "weight": 1
      },
      {
        "value": "Marlene",
        "weight": 1
      },
      {
        "value": "Marley",
        "weight": 1
      },
      {
        "value": "Marlin",
        "weight": 1
      },
      {
        "value": "Marlon",
        "weight": 1
      },
      {
        "value": "Marques",
        "weight": 1
      },
      {
        "value": "Marquis",
        "weight": 1
      },
      {
        "value": "Marquise",
        "weight": 1
      },
      {
        "value": "Marshall",
        "weight": 1
      },
      {
        "value": "Marta",
        "weight": 1
      },
      {
        "value": "Martin",
        "weight": 1
      },
      {
        "value": "Martina",
        "weight": 1
      },
      {
        "value": "Martine",
        "weight": 1
      },
      {
        "value": "Marty",
        "weight": 1
      },
      {
        "value": "Marvin",
        "weight": 1
      },
      {
        "value": "Mary",
        "weight": 1
      },
      {
        "value": "Maryam",
        "weight": 1
      },
      {
        "value": "Maryjane",
        "weight": 1
      },
      {
        "value": "Maryse",
        "weight": 1
      },
      {
        "value": "Mason",
        "weight": 1
      },
      {
        "value": "Mateo",
        "weight": 1
      },
      {
        "value": "Mathew",
        "weight": 1
      },
      {
        "value": "Mathias",
        "weight": 1
      },
      {
        "value": "Mathilde",
        "weight": 1
      },
      {
        "value": "Matilda",
        "weight": 1
      },
      {
        "value": "Matilde",
        "weight": 1
      },
      {
        "value": "Matt",
        "weight": 1
      },
      {
        "value": "Matteo",
        "weight": 1
      },
      {
        "value": "Mattie",
        "weight": 1
      },
      {
        "value": "Maud",
        "weight": 1
      },
      {
        "value": "Maude",
        "weight": 1
      },
      {
        "value": "Maudie",
        "weight": 1
      },
      {
        "value": "Maureen",
        "weight": 1
      },
      {
        "value": "Maurice",
        "weight": 1
      },
      {
        "value": "Mauricio",
        "weight": 1
      },
      {
        "value": "Maurine",
        "weight": 1
      },
      {
        "value": "Maverick",
        "weight": 1
      },
      {
        "value": "Mavis",
        "weight": 1
      },
      {
        "value": "Max",
        "weight": 1
      },
      {
        "value": "Maxie",
        "weight": 1
      },
      {
        "value": "Maxime",
        "weight": 1
      },
      {
        "value": "Maximilian",
        "weight": 1
      },
      {
        "value": "Maximillia",
        "weight": 1
      },
      {
        "value": "Maximillian",
        "weight": 1
      },
      {
        "value": "Maximo",
        "weight": 1
      },
      {
        "value": "Maximus",
        "weight": 1
      },
      {
        "value": "Maxine",
        "weight": 1
      },
      {
        "value": "Maxwell",
        "weight": 1
      },
      {
        "value": "May",
        "weight": 1
      },
      {
        "value": "Maya",
        "weight": 1
      },
      {
        "value": "Maybell",
        "weight": 1
      },
      {
        "value": "Maybelle",
        "weight": 1
      },
      {
        "value": "Maye",
        "weight": 1
      },
      {
        "value": "Maymie",
        "weight": 1
      },
      {
        "value": "Maynard",
        "weight": 1
      },
      {
        "value": "Mayra",
        "weight": 1
      },
      {
        "value": "Mazie",
        "weight": 1
      },
      {
        "value": "Mckayla",
        "weight": 1
      },
      {
        "value": "Mckenna",
        "weight": 1
      },
      {
        "value": "Mckenzie",
        "weight": 1
      },
      {
        "value": "Meagan",
        "weight": 1
      },
      {
        "value": "Meaghan",
        "weight": 1
      },
      {
        "value": "Meda",
        "weight": 1
      },
      {
        "value": "Megane",
        "weight": 1
      },
      {
        "value": "Meggie",
        "weight": 1
      },
      {
        "value": "Meghan",
        "weight": 1
      },
      {
        "value": "Mekhi",
        "weight": 1
      },
      {
        "value": "Melany",
        "weight": 1
      },
      {
        "value": "Melba",
        "weight": 1
      },
      {
        "value": "Melisa",
        "weight": 1
      },
      {
        "value": "Melissa",
        "weight": 1
      },
      {
        "value": "Mellie",
        "weight": 1
      },
      {
        "value": "Melody",
        "weight": 1
      },
      {
        "value": "Melvin",
        "weight": 1
      },
      {
        "value": "Melvina",
        "weight": 1
      },
      {
        "value": "Melyna",
        "weight": 1
      },
      {
        "value": "Melyssa",
        "weight": 1
      },
      {
        "value": "Mercedes",
        "weight": 1
      },
      {
        "value": "Meredith",
        "weight": 1
      },
      {
        "value": "Merl",
        "weight": 1
      },
      {
        "value": "Merle",
        "weight": 1
      },
      {
        "value": "Merlin",
        "weight": 1
      },
      {
        "value": "Merritt",
        "weight": 1
      },
      {
        "value": "Mertie",
        "weight": 1
      },
      {
        "value": "Mervin",
        "weight": 1
      },
      {
        "value": "Meta",
        "weight": 1
      },
      {
        "value": "Mia",
        "weight": 1
      },
      {
        "value": "Micaela",
        "weight": 1
      },
      {
        "value": "Micah",
        "weight": 1
      },
      {
        "value": "Michael",
        "weight": 1
      },
      {
        "value": "Michaela",
        "weight": 1
      },
      {
        "value": "Michale",
        "weight": 1
      },
      {
        "value": "Micheal",
        "weight": 1
      },
      {
        "value": "Michel",
        "weight": 1
      },
      {
        "value": "Michele",
        "weight": 1
      },
      {
        "value": "Michelle",
        "weight": 1
      },
      {
        "value": "Miguel",
        "weight": 1
      },
      {
        "value": "Mikayla",
        "weight": 1
      },
      {
        "value": "Mike",
        "weight": 1
      },
      {
        "value": "Mikel",
        "weight": 1
      },
      {
        "value": "Milan",
        "weight": 1
      },
      {
        "value": "Miles",
        "weight": 1
      },
      {
        "value": "Milford",
        "weight": 1
      },
      {
        "value": "Miller",
        "weight": 1
      },
      {
        "value": "Millie",
        "weight": 1
      },
      {
        "value": "Milo",
        "weight": 1
      },
      {
        "value": "Milton",
        "weight": 1
      },
      {
        "value": "Mina",
        "weight": 1
      },
      {
        "value": "Minerva",
        "weight": 1
      },
      {
        "value": "Minnie",
        "weight": 1
      },
      {
        "value": "Miracle",
        "weight": 1
      },
      {
        "value": "Mireille",
        "weight": 1
      },
      {
        "value": "Mireya",
        "weight": 1
      },
      {
        "value": "Misael",
        "weight": 1
      },
      {
        "value": "Missouri",
        "weight": 1
      },
      {
        "value": "Misty",
        "weight": 1
      },
      {
        "value": "Mitchel",
        "weight": 1
      },
      {
        "value": "Mitchell",
        "weight": 1
      },
      {
        "value": "Mittie",
        "weight": 1
      },
      {
        "value": "Modesta",
        "weight": 1
      },
      {
        "value": "Modesto",
        "weight": 1
      },
      {
        "value": "Miela",
        "weight": 1
      },
      {
        "value": "Merita",
        "weight": 1
      },
      {
        "value": "Mirinda",
        "weight": 1
      },
      {
        "value": "Moises",
        "weight": 1
      },
      {
        "value": "Mollie",
        "weight": 1
      },
      {
        "value": "Molly",
        "weight": 1
      },
      {
        "value": "Mona",
        "weight": 1
      },
      {
        "value": "Monica",
        "weight": 1
      },
      {
        "value": "Monique",
        "weight": 1
      },
      {
        "value": "Monroe",
        "weight": 1
      },
      {
        "value": "Monserrat",
        "weight": 1
      },
      {
        "value": "Monserrate",
        "weight": 1
      },
      {
        "value": "Montana",
        "weight": 1
      },
      {
        "value": "Monte",
        "weight": 1
      },
      {
        "value": "Monty",
        "weight": 1
      },
      {
        "value": "Morgan",
        "weight": 1
      },
      {
        "value": "Moriah",
        "weight": 1
      },
      {
        "value": "Morris",
        "weight": 1
      },
      {
        "value": "Mortimer",
        "weight": 1
      },
      {
        "value": "Morton",
        "weight": 1
      },
      {
        "value": "Mose",
        "weight": 1
      },
      {
        "value": "Moses",
        "weight": 1
      },
      {
        "value": "Moshe",
        "weight": 1
      },
      {
        "value": "Mossie",
        "weight": 1
      },
      {
        "value": "Mozell",
        "weight": 1
      },
      {
        "value": "Mozelle",
        "weight": 1
      },
      {
        "value": "Muhammad",
        "weight": 1
      },
      {
        "value": "Muriel",
        "weight": 1
      },
      {
        "value": "Murl",
        "weight": 1
      },
      {
        "value": "Murphy",
        "weight": 1
      },
      {
        "value": "Murray",
        "weight": 1
      },
      {
        "value": "Mustafa",
        "weight": 1
      },
      {
        "value": "Mya",
        "weight": 1
      },
      {
        "value": "Myah",
        "weight": 1
      },
      {
        "value": "Mylene",
        "weight": 1
      },
      {
        "value": "Myles",
        "weight": 1
      },
      {
        "value": "Myra",
        "weight": 1
      },
      {
        "value": "Myriam",
        "weight": 1
      },
      {
        "value": "Myrl",
        "weight": 1
      },
      {
        "value": "Myrna",
        "weight": 1
      },
      {
        "value": "Myron",
        "weight": 1
      },
      {
        "value": "Myrtice",
        "weight": 1
      },
      {
        "value": "Myrtie",
        "weight": 1
      },
      {
        "value": "Myrtis",
        "weight": 1
      },
      {
        "value": "Myrtle",
        "weight": 1
      },
      {
        "value": "Nadia",
        "weight": 1
      },
      {
        "value": "Nakia",
        "weight": 1
      },
      {
        "value": "Name",
        "weight": 1
      },
      {
        "value": "Nannie",
        "weight": 1
      },
      {
        "value": "Naomi",
        "weight": 1
      },
      {
        "value": "Naomie",
        "weight": 1
      },
      {
        "value": "Napoleon",
        "weight": 1
      },
      {
        "value": "Narciso",
        "weight": 1
      },
      {
        "value": "Nash",
        "weight": 1
      },
      {
        "value": "Nasir",
        "weight": 1
      },
      {
        "value": "Nat",
        "weight": 1
      },
      {
        "value": "Natalia",
        "weight": 1
      },
      {
        "value": "Natalie",
        "weight": 1
      },
      {
        "value": "Natasha",
        "weight": 1
      },
      {
        "value": "Nathan",
        "weight": 1
      },
      {
        "value": "Nathanael",
        "weight": 1
      },
      {
        "value": "Nathanial",
        "weight": 1
      },
      {
        "value": "Nathaniel",
        "weight": 1
      },
      {
        "value": "Nathen",
        "weight": 1
      },
      {
        "value": "Nayeli",
        "weight": 1
      },
      {
        "value": "Neal",
        "weight": 1
      },
      {
        "value": "Ned",
        "weight": 1
      },
      {
        "value": "Nedra",
        "weight": 1
      },
      {
        "value": "Neha",
        "weight": 1
      },
      {
        "value": "Neil",
        "weight": 1
      },
      {
        "value": "Nelda",
        "weight": 1
      },
      {
        "value": "Nella",
        "weight": 1
      },
      {
        "value": "Nelle",
        "weight": 1
      },
      {
        "value": "Nellie",
        "weight": 1
      },
      {
        "value": "Nels",
        "weight": 1
      },
      {
        "value": "Nelson",
        "weight": 1
      },
      {
        "value": "Neoma",
        "weight": 1
      },
      {
        "value": "Nestor",
        "weight": 1
      },
      {
        "value": "Nettie",
        "weight": 1
      },
      {
        "value": "Neva",
        "weight": 1
      },
      {
        "value": "Newell",
        "weight": 1
      },
      {
        "value": "Newton",
        "weight": 1
      },
      {
        "value": "Nia",
        "weight": 1
      },
      {
        "value": "Nicholas",
        "weight": 1
      },
      {
        "value": "Nicholaus",
        "weight": 1
      },
      {
        "value": "Nichole",
        "weight": 1
      },
      {
        "value": "Nick",
        "weight": 1
      },
      {
        "value": "Nicklaus",
        "weight": 1
      },
      {
        "value": "Nickolas",
        "weight": 1
      },
      {
        "value": "Nico",
        "weight": 1
      },
      {
        "value": "Nicola",
        "weight": 1
      },
      {
        "value": "Nicolas",
        "weight": 1
      },
      {
        "value": "Nicole",
        "weight": 1
      },
      {
        "value": "Nicolette",
        "weight": 1
      },
      {
        "value": "Nigel",
        "weight": 1
      },
      {
        "value": "Nikita",
        "weight": 1
      },
      {
        "value": "Nikki",
        "weight": 1
      },
      {
        "value": "Nikko",
        "weight": 1
      },
      {
        "value": "Niko",
        "weight": 1
      },
      {
        "value": "Nikolas",
        "weight": 1
      },
      {
        "value": "Nils",
        "weight": 1
      },
      {
        "value": "Nina",
        "weight": 1
      },
      {
        "value": "Noah",
        "weight": 1
      },
      {
        "value": "Noble",
        "weight": 1
      },
      {
        "value": "Noe",
        "weight": 1
      },
      {
        "value": "Noel",
        "weight": 1
      },
      {
        "value": "Noelia",
        "weight": 1
      },
      {
        "value": "Noemi",
        "weight": 1
      },
      {
        "value": "Noemie",
        "weight": 1
      },
      {
        "value": "Noemy",
        "weight": 1
      },
      {
        "value": "Nola",
        "weight": 1
      },
      {
        "value": "Nolan",
        "weight": 1
      },
      {
        "value": "Nona",
        "weight": 1
      },
      {
        "value": "Nora",
        "weight": 1
      },
      {
        "value": "Norbert",
        "weight": 1
      },
      {
        "value": "Norberto",
        "weight": 1
      },
      {
        "value": "Norene",
        "weight": 1
      },
      {
        "value": "Norma",
        "weight": 1
      },
      {
        "value": "Norris",
        "weight": 1
      },
      {
        "value": "Norval",
        "weight": 1
      },
      {
        "value": "Norwood",
        "weight": 1
      },
      {
        "value": "Nova",
        "weight": 1
      },
      {
        "value": "Novella",
        "weight": 1
      },
      {
        "value": "Nya",
        "weight": 1
      },
      {
        "value": "Nyah",
        "weight": 1
      },
      {
        "value": "Nyasia",
        "weight": 1
      },
      {
        "value": "Obie",
        "weight": 1
      },
      {
        "value": "Oceane",
        "weight": 1
      },
      {
        "value": "Ocie",
        "weight": 1
      },
      {
        "value": "Octavia",
        "weight": 1
      },
      {
        "value": "Oda",
        "weight": 1
      },
      {
        "value": "Odell",
        "weight": 1
      },
      {
        "value": "Odessa",
        "weight": 1
      },
      {
        "value": "Odie",
        "weight": 1
      },
      {
        "value": "Ofelia",
        "weight": 1
      },
      {
        "value": "Okey",
        "weight": 1
      },
      {
        "value": "Ola",
        "weight": 1
      },
      {
        "value": "Olaf",
        "weight": 1
      },
      {
        "value": "Ole",
        "weight": 1
      },
      {
        "value": "Olen",
        "weight": 1
      },
      {
        "value": "Oleta",
        "weight": 1
      },
      {
        "value": "Olga",
        "weight": 1
      },
      {
        "value": "Olin",
        "weight": 1
      },
      {
        "value": "Oliver",
        "weight": 1
      },
      {
        "value": "Ollie",
        "weight": 1
      },
      {
        "value": "Oma",
        "weight": 1
      },
      {
        "value": "Omari",
        "weight": 1
      },
      {
        "value": "Omer",
        "weight": 1
      },
      {
        "value": "Ona",
        "weight": 1
      },
      {
        "value": "Onie",
        "weight": 1
      },
      {
        "value": "Opal",
        "weight": 1
      },
      {
        "value": "Ophelia",
        "weight": 1
      },
      {
        "value": "Ora",
        "weight": 1
      },
      {
        "value": "Oral",
        "weight": 1
      },
      {
        "value": "Oran",
        "weight": 1
      },
      {
        "value": "Oren",
        "weight": 1
      },
      {
        "value": "Orie",
        "weight": 1
      },
      {
        "value": "Orin",
        "weight": 1
      },
      {
        "value": "Orion",
        "weight": 1
      },
      {
        "value": "Orland",
        "weight": 1
      },
      {
        "value": "Orlando",
        "weight": 1
      },
      {
        "value": "Orlo",
        "weight": 1
      },
      {
        "value": "Orpha",
        "weight": 1
      },
      {
        "value": "Orrin",
        "weight": 1
      },
      {
        "value": "Orval",
        "weight": 1
      },
      {
        "value": "Orville",
        "weight": 1
      },
      {
        "value": "Osbaldo",
        "weight": 1
      },
      {
        "value": "Osborne",
        "weight": 1
      },
      {
        "value": "Oscar",
        "weight": 1
      },
      {
        "value": "Osvaldo",
        "weight": 1
      },
      {
        "value": "Oswald",
        "weight": 1
      },
      {
        "value": "Oswaldo",
        "weight": 1
      },
      {
        "value": "Otha",
        "weight": 1
      },
      {
        "value": "Otho",
        "weight": 1
      },
      {
        "value": "Otilia",
        "weight": 1
      },
      {
        "value": "Otis",
        "weight": 1
      },
      {
        "value": "Ottilie",
        "weight": 1
      },
      {
        "value": "Ottis",
        "weight": 1
      },
      {
        "value": "Otto",
        "weight": 1
      },
      {
        "value": "Ova",
        "weight": 1
      },
      {
        "value": "Owen",
        "weight": 1
      },
      {
        "value": "Ozella",
        "weight": 1
      },
      {
        "value": "Ozzie",
        "weight": 1
      },
      {
        "value": "Pablo",
        "weight": 1
      },
      {
        "value": "Paige",
        "weight": 1
      },
      {
        "value": "Palma",
        "weight": 1
      },
      {
        "value": "Pamela",
        "weight": 1
      },
      {
        "value": "Pansy",
        "weight": 1
      },
      {
        "value": "Paolo",
        "weight": 1
      },
      {
        "value": "Paris",
        "weight": 1
      },
      {
        "value": "Parker",
        "weight": 1
      },
      {
        "value": "Pascale",
        "weight": 1
      },
      {
        "value": "Pasquale",
        "weight": 1
      },
      {
        "value": "Pat",
        "weight": 1
      },
      {
        "value": "Patience",
        "weight": 1
      },
      {
        "value": "Patricia",
        "weight": 1
      },
      {
        "value": "Patrick",
        "weight": 1
      },
      {
        "value": "Patsy",
        "weight": 1
      },
      {
        "value": "Pattie",
        "weight": 1
      },
      {
        "value": "Paul",
        "weight": 1
      },
      {
        "value": "Paula",
        "weight": 1
      },
      {
        "value": "Pauline",
        "weight": 1
      },
      {
        "value": "Paxton",
        "weight": 1
      },
      {
        "value": "Payton",
        "weight": 1
      },
      {
        "value": "Pearl",
        "weight": 1
      },
      {
        "value": "Pearlie",
        "weight": 1
      },
      {
        "value": "Pearline",
        "weight": 1
      },
      {
        "value": "Pedro",
        "weight": 1
      },
      {
        "value": "Peggie",
        "weight": 1
      },
      {
        "value": "Penelope",
        "weight": 1
      },
      {
        "value": "Percival",
        "weight": 1
      },
      {
        "value": "Percy",
        "weight": 1
      },
      {
        "value": "Perry",
        "weight": 1
      },
      {
        "value": "Pete",
        "weight": 1
      },
      {
        "value": "Peter",
        "weight": 1
      },
      {
        "value": "Petra",
        "weight": 1
      },
      {
        "value": "Peyton",
        "weight": 1
      },
      {
        "value": "Philip",
        "weight": 1
      },
      {
        "value": "Phoebe",
        "weight": 1
      },
      {
        "value": "Phyllis",
        "weight": 1
      },
      {
        "value": "Pierce",
        "weight": 1
      },
      {
        "value": "Pierre",
        "weight": 1
      },
      {
        "value": "Pietro",
        "weight": 1
      },
      {
        "value": "Pink",
        "weight": 1
      },
      {
        "value": "Pinkie",
        "weight": 1
      },
      {
        "value": "Piper",
        "weight": 1
      },
      {
        "value": "Polly",
        "weight": 1
      },
      {
        "value": "Porter",
        "weight": 1
      },
      {
        "value": "Precious",
        "weight": 1
      },
      {
        "value": "Presley",
        "weight": 1
      },
      {
        "value": "Preston",
        "weight": 1
      },
      {
        "value": "Price",
        "weight": 1
      },
      {
        "value": "Prince",
        "weight": 1
      },
      {
        "value": "Princess",
        "weight": 1
      },
      {
        "value": "Priscilla",
        "weight": 1
      },
      {
        "value": "Providenci",
        "weight": 1
      },
      {
        "value": "Prudence",
        "weight": 1
      },
      {
        "value": "Queen",
        "weight": 1
      },
      {
        "value": "Queenie",
        "weight": 1
      },
      {
        "value": "Quentin",
        "weight": 1
      },
      {
        "value": "Quincy",
        "weight": 1
      },
      {
        "value": "Quinn",
        "weight": 1
      },
      {
        "value": "Quinten",
        "weight": 1
      },
      {
        "value": "Quinton",
        "weight": 1
      },
      {
        "value": "Rachael",
        "weight": 1
      },
      {
        "value": "Rachel",
        "weight": 1
      },
      {
        "value": "Rachelle",
        "weight": 1
      },
      {
        "value": "Rae",
        "weight": 1
      },
      {
        "value": "Raegan",
        "weight": 1
      },
      {
        "value": "Rafael",
        "weight": 1
      },
      {
        "value": "Rafaela",
        "weight": 1
      },
      {
        "value": "Raheem",
        "weight": 1
      },
      {
        "value": "Rahsaan",
        "weight": 1
      },
      {
        "value": "Rahul",
        "weight": 1
      },
      {
        "value": "Raina",
        "weight": 1
      },
      {
        "value": "Raleigh",
        "weight": 1
      },
      {
        "value": "Ralph",
        "weight": 1
      },
      {
        "value": "Ramiro",
        "weight": 1
      },
      {
        "value": "Ramon",
        "weight": 1
      },
      {
        "value": "Ramona",
        "weight": 1
      },
      {
        "value": "Randal",
        "weight": 1
      },
      {
        "value": "Randall",
        "weight": 1
      },
      {
        "value": "Randi",
        "weight": 1
      },
      {
        "value": "Randy",
        "weight": 1
      },
      {
        "value": "Ransom",
        "weight": 1
      },
      {
        "value": "Raoul",
        "weight": 1
      },
      {
        "value": "Raphael",
        "weight": 1
      },
      {
        "value": "Raphaelle",
        "weight": 1
      },
      {
        "value": "Raquel",
        "weight": 1
      },
      {
        "value": "Rashad",
        "weight": 1
      },
      {
        "value": "Rashawn",
        "weight": 1
      },
      {
        "value": "Rasheed",
        "weight": 1
      },
      {
        "value": "Raul",
        "weight": 1
      },
      {
        "value": "Raven",
        "weight": 1
      },
      {
        "value": "Ray",
        "weight": 1
      },
      {
        "value": "Raymond",
        "weight": 1
      },
      {
        "value": "Raymundo",
        "weight": 1
      },
      {
        "value": "Reagan",
        "weight": 1
      },
      {
        "value": "Reanna",
        "weight": 1
      },
      {
        "value": "Reba",
        "weight": 1
      },
      {
        "value": "Rebeca",
        "weight": 1
      },
      {
        "value": "Rebecca",
        "weight": 1
      },
      {
        "value": "Rebeka",
        "weight": 1
      },
      {
        "value": "Rebekah",
        "weight": 1
      },
      {
        "value": "Reece",
        "weight": 1
      },
      {
        "value": "Reed",
        "weight": 1
      },
      {
        "value": "Reese",
        "weight": 1
      },
      {
        "value": "Regan",
        "weight": 1
      },
      {
        "value": "Reggie",
        "weight": 1
      },
      {
        "value": "Reginald",
        "weight": 1
      },
      {
        "value": "Reid",
        "weight": 1
      },
      {
        "value": "Reilly",
        "weight": 1
      },
      {
        "value": "Reina",
        "weight": 1
      },
      {
        "value": "Reinhold",
        "weight": 1
      },
      {
        "value": "Remington",
        "weight": 1
      },
      {
        "value": "Rene",
        "weight": 1
      },
      {
        "value": "Renee",
        "weight": 1
      },
      {
        "value": "Ressie",
        "weight": 1
      },
      {
        "value": "Reta",
        "weight": 1
      },
      {
        "value": "Retha",
        "weight": 1
      },
      {
        "value": "Retta",
        "weight": 1
      },
      {
        "value": "Reuben",
        "weight": 1
      },
      {
        "value": "Reva",
        "weight": 1
      },
      {
        "value": "Rex",
        "weight": 1
      },
      {
        "value": "Rey",
        "weight": 1
      },
      {
        "value": "Reyes",
        "weight": 1
      },
      {
        "value": "Reymundo",
        "weight": 1
      },
      {
        "value": "Reyna",
        "weight": 1
      },
      {
        "value": "Reynold",
        "weight": 1
      },
      {
        "value": "Rhea",
        "weight": 1
      },
      {
        "value": "Rhett",
        "weight": 1
      },
      {
        "value": "Rhianna",
        "weight": 1
      },
      {
        "value": "Rhiannon",
        "weight": 1
      },
      {
        "value": "Rhoda",
        "weight": 1
      },
      {
        "value": "Ricardo",
        "weight": 1
      },
      {
        "value": "Richard",
        "weight": 1
      },
      {
        "value": "Richie",
        "weight": 1
      },
      {
        "value": "Richmond",
        "weight": 1
      },
      {
        "value": "Rick",
        "weight": 1
      },
      {
        "value": "Rickey",
        "weight": 1
      },
      {
        "value": "Rickie",
        "weight": 1
      },
      {
        "value": "Ricky",
        "weight": 1
      },
      {
        "value": "Rico",
        "weight": 1
      },
      {
        "value": "Rigoberto",
        "weight": 1
      },
      {
        "value": "Riley",
        "weight": 1
      },
      {
        "value": "Rita",
        "weight": 1
      },
      {
        "value": "River",
        "weight": 1
      },
      {
        "value": "Robb",
        "weight": 1
      },
      {
        "value": "Robbie",
        "weight": 1
      },
      {
        "value": "Robert",
        "weight": 1
      },
      {
        "value": "Roberta",
        "weight": 1
      },
      {
        "value": "Roberto",
        "weight": 1
      },
      {
        "value": "Robin",
        "weight": 1
      },
      {
        "value": "Robyn",
        "weight": 1
      },
      {
        "value": "Rocio",
        "weight": 1
      },
      {
        "value": "Rocky",
        "weight": 1
      },
      {
        "value": "Rod",
        "weight": 1
      },
      {
        "value": "Roderick",
        "weight": 1
      },
      {
        "value": "Rodger",
        "weight": 1
      },
      {
        "value": "Rodolfo",
        "weight": 1
      },
      {
        "value": "Rodrick",
        "weight": 1
      },
      {
        "value": "Rodrigo",
        "weight": 1
      },
      {
        "value": "Roel",
        "weight": 1
      },
      {
        "value": "Rogelio",
        "weight": 1
      },
      {
        "value": "Roger",
        "weight": 1
      },
      {
        "value": "Rogers",
        "weight": 1
      },
      {
        "value": "Rolando",
        "weight": 1
      },
      {
        "value": "Rollin",
        "weight": 1
      },
      {
        "value": "Roma",
        "weight": 1
      },
      {
        "value": "Romaine",
        "weight": 1
      },
      {
        "value": "Roman",
        "weight": 1
      },
      {
        "value": "Ron",
        "weight": 1
      },
      {
        "value": "Ronaldo",
        "weight": 1
      },
      {
        "value": "Ronny",
        "weight": 1
      },
      {
        "value": "Roosevelt",
        "weight": 1
      },
      {
        "value": "Rory",
        "weight": 1
      },
      {
        "value": "Rosa",
        "weight": 1
      },
      {
        "value": "Rosalee",
        "weight": 1
      },
      {
        "value": "Rosalia",
        "weight": 1
      },
      {
        "value": "Rosalind",
        "weight": 1
      },
      {
        "value": "Rosalinda",
        "weight": 1
      },
      {
        "value": "Rosalyn",
        "weight": 1
      },
      {
        "value": "Rosamond",
        "weight": 1
      },
      {
        "value": "Rosanna",
        "weight": 1
      },
      {
        "value": "Rosario",
        "weight": 1
      },
      {
        "value": "Roscoe",
        "weight": 1
      },
      {
        "value": "Rose",
        "weight": 1
      },
      {
        "value": "Rosella",
        "weight": 1
      },
      {
        "value": "Roselyn",
        "weight": 1
      },
      {
        "value": "Rosemarie",
        "weight": 1
      },
      {
        "value": "Rosemary",
        "weight": 1
      },
      {
        "value": "Rosendo",
        "weight": 1
      },
      {
        "value": "Rosetta",
        "weight": 1
      },
      {
        "value": "Rosie",
        "weight": 1
      },
      {
        "value": "Rosina",
        "weight": 1
      },
      {
        "value": "Roslyn",
        "weight": 1
      },
      {
        "value": "Ross",
        "weight": 1
      },
      {
        "value": "Rossie",
        "weight": 1
      },
      {
        "value": "Rowan",
        "weight": 1
      },
      {
        "value": "Rowena",
        "weight": 1
      },
      {
        "value": "Rowland",
        "weight": 1
      },
      {
        "value": "Roxane",
        "weight": 1
      },
      {
        "value": "Roxanne",
        "weight": 1
      },
      {
        "value": "Roy",
        "weight": 1
      },
      {
        "value": "Royal",
        "weight": 1
      },
      {
        "value": "Royce",
        "weight": 1
      },
      {
        "value": "Rozella",
        "weight": 1
      },
      {
        "value": "Ruben",
        "weight": 1
      },
      {
        "value": "Rubie",
        "weight": 1
      },
      {
        "value": "Ruby",
        "weight": 1
      },
      {
        "value": "Rubye",
        "weight": 1
      },
      {
        "value": "Rudolph",
        "weight": 1
      },
      {
        "value": "Rudy",
        "weight": 1
      },
      {
        "value": "Rupert",
        "weight": 1
      },
      {
        "value": "Russ",
        "weight": 1
      },
      {
        "value": "Russel",
        "weight": 1
      },
      {
        "value": "Russell",
        "weight": 1
      },
      {
        "value": "Rusty",
        "weight": 1
      },
      {
        "value": "Ruth",
        "weight": 1
      },
      {
        "value": "Ruthe",
        "weight": 1
      },
      {
        "value": "Ruthie",
        "weight": 1
      },
      {
        "value": "Ryan",
        "weight": 1
      },
      {
        "value": "Ryann",
        "weight": 1
      },
      {
        "value": "Ryder",
        "weight": 1
      },
      {
        "value": "Rylan",
        "weight": 1
      },
      {
        "value": "Rylee",
        "weight": 1
      },
      {
        "value": "Ryleigh",
        "weight": 1
      },
      {
        "value": "Ryley",
        "weight": 1
      },
      {
        "value": "Sabina",
        "weight": 1
      },
      {
        "value": "Sabrina",
        "weight": 1
      },
      {
        "value": "Sabryna",
        "weight": 1
      },
      {
        "value": "Sadie",
        "weight": 1
      },
      {
        "value": "Sadye",
        "weight": 1
      },
      {
        "value": "Sage",
        "weight": 1
      },
      {
        "value": "Saige",
        "weight": 1
      },
      {
        "value": "Sallie",
        "weight": 1
      },
      {
        "value": "Sally",
        "weight": 1
      },
      {
        "value": "Salma",
        "weight": 1
      },
      {
        "value": "Salvador",
        "weight": 1
      },
      {
        "value": "Salvatore",
        "weight": 1
      },
      {
        "value": "Sam",
        "weight": 1
      },
      {
        "value": "Samanta",
        "weight": 1
      },
      {
        "value": "Samantha",
        "weight": 1
      },
      {
        "value": "Samara",
        "weight": 1
      },
      {
        "value": "Samir",
        "weight": 1
      },
      {
        "value": "Sammie",
        "weight": 1
      },
      {
        "value": "Sammy",
        "weight": 1
      },
      {
        "value": "Samson",
        "weight": 1
      },
      {
        "value": "Sandra",
        "weight": 1
      },
      {
        "value": "Sandrine",
        "weight": 1
      },
      {
        "value": "Sandy",
        "weight": 1
      },
      {
        "value": "Sanford",
        "weight": 1
      },
      {
        "value": "Santa",
        "weight": 1
      },
      {
        "value": "Santiago",
        "weight": 1
      },
      {
        "value": "Santina",
        "weight": 1
      },
      {
        "value": "Santino",
        "weight": 1
      },
      {
        "value": "Santos",
        "weight": 1
      },
      {
        "value": "Sarah",
        "weight": 1
      },
      {
        "value": "Sarai",
        "weight": 1
      },
      {
        "value": "Sarina",
        "weight": 1
      },
      {
        "value": "Sasha",
        "weight": 1
      },
      {
        "value": "Saul",
        "weight": 1
      },
      {
        "value": "Savanah",
        "weight": 1
      },
      {
        "value": "Savanna",
        "weight": 1
      },
      {
        "value": "Savannah",
        "weight": 1
      },
      {
        "value": "Savion",
        "weight": 1
      },
      {
        "value": "Scarlett",
        "weight": 1
      },
      {
        "value": "Schuyler",
        "weight": 1
      },
      {
        "value": "Scot",
        "weight": 1
      },
      {
        "value": "Scottie",
        "weight": 1
      },
      {
        "value": "Scotty",
        "weight": 1
      },
      {
        "value": "Seamus",
        "weight": 1
      },
      {
        "value": "Sean",
        "weight": 1
      },
      {
        "value": "Sebastian",
        "weight": 1
      },
      {
        "value": "Sedrick",
        "weight": 1
      },
      {
        "value": "Selena",
        "weight": 1
      },
      {
        "value": "Selina",
        "weight": 1
      },
      {
        "value": "Selmer",
        "weight": 1
      },
      {
        "value": "Serena",
        "weight": 1
      },
      {
        "value": "Serenity",
        "weight": 1
      },
      {
        "value": "Seth",
        "weight": 1
      },
      {
        "value": "Shad",
        "weight": 1
      },
      {
        "value": "Shaina",
        "weight": 1
      },
      {
        "value": "Shakira",
        "weight": 1
      },
      {
        "value": "Shana",
        "weight": 1
      },
      {
        "value": "Shane",
        "weight": 1
      },
      {
        "value": "Shanel",
        "weight": 1
      },
      {
        "value": "Shanelle",
        "weight": 1
      },
      {
        "value": "Shania",
        "weight": 1
      },
      {
        "value": "Shanie",
        "weight": 1
      },
      {
        "value": "Shaniya",
        "weight": 1
      },
      {
        "value": "Shanna",
        "weight": 1
      },
      {
        "value": "Shannon",
        "weight": 1
      },
      {
        "value": "Shanny",
        "weight": 1
      },
      {
        "value": "Shanon",
        "weight": 1
      },
      {
        "value": "Shany",
        "weight": 1
      },
      {
        "value": "Sharon",
        "weight": 1
      },
      {
        "value": "Shaun",
        "weight": 1
      },
      {
        "value": "Shawn",
        "weight": 1
      },
      {
        "value": "Shawna",
        "weight": 1
      },
      {
        "value": "Shaylee",
        "weight": 1
      },
      {
        "value": "Shayna",
        "weight": 1
      },
      {
        "value": "Shayne",
        "weight": 1
      },
      {
        "value": "Shea",
        "weight": 1
      },
      {
        "value": "Sheila",
        "weight": 1
      },
      {
        "value": "Sheldon",
        "weight": 1
      },
      {
        "value": "Shemar",
        "weight": 1
      },
      {
        "value": "Sheridan",
        "weight": 1
      },
      {
        "value": "Sherman",
        "weight": 1
      },
      {
        "value": "Sherwood",
        "weight": 1
      },
      {
        "value": "Shirley",
        "weight": 1
      },
      {
        "value": "Shyann",
        "weight": 1
      },
      {
        "value": "Shyanne",
        "weight": 1
      },
      {
        "value": "Sibyl",
        "weight": 1
      },
      {
        "value": "Sid",
        "weight": 1
      },
      {
        "value": "Sidney",
        "weight": 1
      },
      {
        "value": "Sienna",
        "weight": 1
      },
      {
        "value": "Sierra",
        "weight": 1
      },
      {
        "value": "Sigmund",
        "weight": 1
      },
      {
        "value": "Sigrid",
        "weight": 1
      },
      {
        "value": "Sigurd",
        "weight": 1
      },
      {
        "value": "Silas",
        "weight": 1
      },
      {
        "value": "Sim",
        "weight": 1
      },
      {
        "value": "Simeon",
        "weight": 1
      },
      {
        "value": "Simone",
        "weight": 1
      },
      {
        "value": "Sincere",
        "weight": 1
      },
      {
        "value": "Sister",
        "weight": 1
      },
      {
        "value": "Skye",
        "weight": 1
      },
      {
        "value": "Skyla",
        "weight": 1
      },
      {
        "value": "Skylar",
        "weight": 1
      },
      {
        "value": "Sofia",
        "weight": 1
      },
      {
        "value": "Soledad",
        "weight": 1
      },
      {
        "value": "Solon",
        "weight": 1
      },
      {
        "value": "Sonia",
        "weight": 1
      },
      {
        "value": "Sonny",
        "weight": 1
      },
      {
        "value": "Sonya",
        "weight": 1
      },
      {
        "value": "Sophia",
        "weight": 1
      },
      {
        "value": "Sophie",
        "weight": 1
      },
      {
        "value": "Spencer",
        "weight": 1
      },
      {
        "value": "Stacey",
        "weight": 1
      },
      {
        "value": "Stacy",
        "weight": 1
      },
      {
        "value": "Stan",
        "weight": 1
      },
      {
        "value": "Stanford",
        "weight": 1
      },
      {
        "value": "Stanley",
        "weight": 1
      },
      {
        "value": "Stanton",
        "weight": 1
      },
      {
        "value": "Stefan",
        "weight": 1
      },
      {
        "value": "Stefanie",
        "weight": 1
      },
      {
        "value": "Stella",
        "weight": 1
      },
      {
        "value": "Stephan",
        "weight": 1
      },
      {
        "value": "Stephania",
        "weight": 1
      },
      {
        "value": "Stephanie",
        "weight": 1
      },
      {
        "value": "Stephany",
        "weight": 1
      },
      {
        "value": "Stephen",
        "weight": 1
      },
      {
        "value": "Stephon",
        "weight": 1
      },
      {
        "value": "Sterling",
        "weight": 1
      },
      {
        "value": "Steve",
        "weight": 1
      },
      {
        "value": "Stevie",
        "weight": 1
      },
      {
        "value": "Stewart",
        "weight": 1
      },
      {
        "value": "Stone",
        "weight": 1
      },
      {
        "value": "Stuart",
        "weight": 1
      },
      {
        "value": "Summer",
        "weight": 1
      },
      {
        "value": "Sunny",
        "weight": 1
      },
      {
        "value": "Susan",
        "weight": 1
      },
      {
        "value": "Susana",
        "weight": 1
      },
      {
        "value": "Susanna",
        "weight": 1
      },
      {
        "value": "Susie",
        "weight": 1
      },
      {
        "value": "Suzanne",
        "weight": 1
      },
      {
        "value": "Sven",
        "weight": 1
      },
      {
        "value": "Syble",
        "weight": 1
      },
      {
        "value": "Sydnee",
        "weight": 1
      },
      {
        "value": "Sydney",
        "weight": 1
      },
      {
        "value": "Sydni",
        "weight": 1
      },
      {
        "value": "Sydnie",
        "weight": 1
      },
      {
        "value": "Sylvan",
        "weight": 1
      },
      {
        "value": "Sylvester",
        "weight": 1
      },
      {
        "value": "Sylvia",
        "weight": 1
      },
      {
        "value": "Tabitha",
        "weight": 1
      },
      {
        "value": "Tad",
        "weight": 1
      },
      {
        "value": "Talia",
        "weight": 1
      },
      {
        "value": "Talon",
        "weight": 1
      },
      {
        "value": "Tamara",
        "weight": 1
      },
      {
        "value": "Tamia",
        "weight": 1
      },
      {
        "value": "Tania",
        "weight": 1
      },
      {
        "value": "Tanner",
        "weight": 1
      },
      {
        "value": "Tanya",
        "weight": 1
      },
      {
        "value": "Tara",
        "weight": 1
      },
      {
        "value": "Taryn",
        "weight": 1
      },
      {
        "value": "Tate",
        "weight": 1
      },
      {
        "value": "Tatum",
        "weight": 1
      },
      {
        "value": "Tatyana",
        "weight": 1
      },
      {
        "value": "Taurean",
        "weight": 1
      },
      {
        "value": "Tavares",
        "weight": 1
      },
      {
        "value": "Taya",
        "weight": 1
      },
      {
        "value": "Taylor",
        "weight": 1
      },
      {
        "value": "Teagan",
        "weight": 1
      },
      {
        "value": "Ted",
        "weight": 1
      },
      {
        "value": "Telly",
        "weight": 1
      },
      {
        "value": "Terence",
        "weight": 1
      },
      {
        "value": "Teresa",
        "weight": 1
      },
      {
        "value": "Terrance",
        "weight": 1
      },
      {
        "value": "Terrell",
        "weight": 1
      },
      {
        "value": "Terrence",
        "weight": 1
      },
      {
        "value": "Terrill",
        "weight": 1
      },
      {
        "value": "Terry",
        "weight": 1
      },
      {
        "value": "Tess",
        "weight": 1
      },
      {
        "value": "Tessie",
        "weight": 1
      },
      {
        "value": "Tevin",
        "weight": 1
      },
      {
        "value": "Thad",
        "weight": 1
      },
      {
        "value": "Thaddeus",
        "weight": 1
      },
      {
        "value": "Thalia",
        "weight": 1
      },
      {
        "value": "Thea",
        "weight": 1
      },
      {
        "value": "Thelma",
        "weight": 1
      },
      {
        "value": "Theo",
        "weight": 1
      },
      {
        "value": "Theodora",
        "weight": 1
      },
      {
        "value": "Theodore",
        "weight": 1
      },
      {
        "value": "Theresa",
        "weight": 1
      },
      {
        "value": "Therese",
        "weight": 1
      },
      {
        "value": "Theresia",
        "weight": 1
      },
      {
        "value": "Theron",
        "weight": 1
      },
      {
        "value": "Thomas",
        "weight": 1
      },
      {
        "value": "Thora",
        "weight": 1
      },
      {
        "value": "Thurman",
        "weight": 1
      },
      {
        "value": "Tia",
        "weight": 1
      },
      {
        "value": "Tiana",
        "weight": 1
      },
      {
        "value": "Tianna",
        "weight": 1
      },
      {
        "value": "Tiara",
        "weight": 1
      },
      {
        "value": "Tierra",
        "weight": 1
      },
      {
        "value": "Tiffany",
        "weight": 1
      },
      {
        "value": "Tillman",
        "weight": 1
      },
      {
        "value": "Timmothy",
        "weight": 1
      },
      {
        "value": "Timmy",
        "weight": 1
      },
      {
        "value": "Timothy",
        "weight": 1
      },
      {
        "value": "Tina",
        "weight": 1
      },
      {
        "value": "Tito",
        "weight": 1
      },
      {
        "value": "Titus",
        "weight": 1
      },
      {
        "value": "Tobin",
        "weight": 1
      },
      {
        "value": "Toby",
        "weight": 1
      },
      {
        "value": "Tod",
        "weight": 1
      },
      {
        "value": "Tom",
        "weight": 1
      },
      {
        "value": "Tomas",
        "weight": 1
      },
      {
        "value": "Tomasa",
        "weight": 1
      },
      {
        "value": "Tommie",
        "weight": 1
      },
      {
        "value": "Toney",
        "weight": 1
      },
      {
        "value": "Toni",
        "weight": 1
      },
      {
        "value": "Tony",
        "weight": 1
      },
      {
        "value": "Torey",
        "weight": 1
      },
      {
        "value": "Torrance",
        "weight": 1
      },
      {
        "value": "Torrey",
        "weight": 1
      },
      {
        "value": "Toy",
        "weight": 1
      },
      {
        "value": "Trace",
        "weight": 1
      },
      {
        "value": "Tracey",
        "weight": 1
      },
      {
        "value": "Tracy",
        "weight": 1
      },
      {
        "value": "Travis",
        "weight": 1
      },
      {
        "value": "Travon",
        "weight": 1
      },
      {
        "value": "Tre",
        "weight": 1
      },
      {
        "value": "Tremaine",
        "weight": 1
      },
      {
        "value": "Tremayne",
        "weight": 1
      },
      {
        "value": "Trent",
        "weight": 1
      },
      {
        "value": "Trenton",
        "weight": 1
      },
      {
        "value": "Tressa",
        "weight": 1
      },
      {
        "value": "Tressie",
        "weight": 1
      },
      {
        "value": "Treva",
        "weight": 1
      },
      {
        "value": "Trever",
        "weight": 1
      },
      {
        "value": "Trevion",
        "weight": 1
      },
      {
        "value": "Trevor",
        "weight": 1
      },
      {
        "value": "Trey",
        "weight": 1
      },
      {
        "value": "Trinity",
        "weight": 1
      },
      {
        "value": "Trisha",
        "weight": 1
      },
      {
        "value": "Tristian",
        "weight": 1
      },
      {
        "value": "Tristin",
        "weight": 1
      },
      {
        "value": "Triston",
        "weight": 1
      },
      {
        "value": "Troy",
        "weight": 1
      },
      {
        "value": "Trudie",
        "weight": 1
      },
      {
        "value": "Trycia",
        "weight": 1
      },
      {
        "value": "Trystan",
        "weight": 1
      },
      {
        "value": "Turner",
        "weight": 1
      },
      {
        "value": "Twila",
        "weight": 1
      },
      {
        "value": "Tyler",
        "weight": 1
      },
      {
        "value": "Tyra",
        "weight": 1
      },
      {
        "value": "Tyree",
        "weight": 1
      },
      {
        "value": "Tyreek",
        "weight": 1
      },
      {
        "value": "Tyrel",
        "weight": 1
      },
      {
        "value": "Tyrell",
        "weight": 1
      },
      {
        "value": "Tyrese",
        "weight": 1
      },
      {
        "value": "Tyrique",
        "weight": 1
      },
      {
        "value": "Tyshawn",
        "weight": 1
      },
      {
        "value": "Tyson",
        "weight": 1
      },
      {
        "value": "Ubaldo",
        "weight": 1
      },
      {
        "value": "Ulices",
        "weight": 1
      },
      {
        "value": "Ulises",
        "weight": 1
      },
      {
        "value": "Una",
        "weight": 1
      },
      {
        "value": "Unique",
        "weight": 1
      },
      {
        "value": "Urban",
        "weight": 1
      },
      {
        "value": "Uriah",
        "weight": 1
      },
      {
        "value": "Uriel",
        "weight": 1
      },
      {
        "value": "Ursula",
        "weight": 1
      },
      {
        "value": "Vada",
        "weight": 1
      },
      {
        "value": "Valentin",
        "weight": 1
      },
      {
        "value": "Valentina",
        "weight": 1
      },
      {
        "value": "Valentine",
        "weight": 1
      },
      {
        "value": "Valerie",
        "weight": 1
      },
      {
        "value": "Vallie",
        "weight": 1
      },
      {
        "value": "Van",
        "weight": 1
      },
      {
        "value": "Vance",
        "weight": 1
      },
      {
        "value": "Vanessa",
        "weight": 1
      },
      {
        "value": "Vaughn",
        "weight": 1
      },
      {
        "value": "Veda",
        "weight": 1
      },
      {
        "value": "Velda",
        "weight": 1
      },
      {
        "value": "Vella",
        "weight": 1
      },
      {
        "value": "Velma",
        "weight": 1
      },
      {
        "value": "Velva",
        "weight": 1
      },
      {
        "value": "Vena",
        "weight": 1
      },
      {
        "value": "Verda",
        "weight": 1
      },
      {
        "value": "Verdie",
        "weight": 1
      },
      {
        "value": "Vergie",
        "weight": 1
      },
      {
        "value": "Verla",
        "weight": 1
      },
      {
        "value": "Verlie",
        "weight": 1
      },
      {
        "value": "Vern",
        "weight": 1
      },
      {
        "value": "Verna",
        "weight": 1
      },
      {
        "value": "Verner",
        "weight": 1
      },
      {
        "value": "Vernice",
        "weight": 1
      },
      {
        "value": "Vernie",
        "weight": 1
      },
      {
        "value": "Vernon",
        "weight": 1
      },
      {
        "value": "Verona",
        "weight": 1
      },
      {
        "value": "Veronica",
        "weight": 1
      },
      {
        "value": "Vesta",
        "weight": 1
      },
      {
        "value": "Vicenta",
        "weight": 1
      },
      {
        "value": "Vicente",
        "weight": 1
      },
      {
        "value": "Vickie",
        "weight": 1
      },
      {
        "value": "Vicky",
        "weight": 1
      },
      {
        "value": "Victor",
        "weight": 1
      },
      {
        "value": "Victoria",
        "weight": 1
      },
      {
        "value": "Vida",
        "weight": 1
      },
      {
        "value": "Vidal",
        "weight": 1
      },
      {
        "value": "Vilma",
        "weight": 1
      },
      {
        "value": "Vince",
        "weight": 1
      },
      {
        "value": "Vincent",
        "weight": 1
      },
      {
        "value": "Vincenza",
        "weight": 1
      },
      {
        "value": "Vincenzo",
        "weight": 1
      },
      {
        "value": "Vinnie",
        "weight": 1
      },
      {
        "value": "Viola",
        "weight": 1
      },
      {
        "value": "Violet",
        "weight": 1
      },
      {
        "value": "Violette",
        "weight": 1
      },
      {
        "value": "Virgie",
        "weight": 1
      },
      {
        "value": "Virgil",
        "weight": 1
      },
      {
        "value": "Virginia",
        "weight": 1
      },
      {
        "value": "Virginie",
        "weight": 1
      },
      {
        "value": "Vita",
        "weight": 1
      },
      {
        "value": "Vito",
        "weight": 1
      },
      {
        "value": "Viva",
        "weight": 1
      },
      {
        "value": "Vivian",
        "weight": 1
      },
      {
        "value": "Viviane",
        "weight": 1
      },
      {
        "value": "Vivianne",
        "weight": 1
      },
      {
        "value": "Vivien",
        "weight": 1
      },
      {
        "value": "Vivienne",
        "weight": 1
      },
      {
        "value": "Vladimir",
        "weight": 1
      },
      {
        "value": "Wade",
        "weight": 1
      },
      {
        "value": "Waino",
        "weight": 1
      },
      {
        "value": "Waldo",
        "weight": 1
      },
      {
        "value": "Walker",
        "weight": 1
      },
      {
        "value": "Wallace",
        "weight": 1
      },
      {
        "value": "Walter",
        "weight": 1
      },
      {
        "value": "Walton",
        "weight": 1
      },
      {
        "value": "Wanda",
        "weight": 1
      },
      {
        "value": "Ward",
        "weight": 1
      },
      {
        "value": "Warren",
        "weight": 1
      },
      {
        "value": "Watson",
        "weight": 1
      },
      {
        "value": "Wava",
        "weight": 1
      },
      {
        "value": "Waylon",
        "weight": 1
      },
      {
        "value": "Wayne",
        "weight": 1
      },
      {
        "value": "Webster",
        "weight": 1
      },
      {
        "value": "Weldon",
        "weight": 1
      },
      {
        "value": "Wellington",
        "weight": 1
      },
      {
        "value": "Wendell",
        "weight": 1
      },
      {
        "value": "Wendy",
        "weight": 1
      },
      {
        "value": "Werner",
        "weight": 1
      },
      {
        "value": "Westley",
        "weight": 1
      },
      {
        "value": "Weston",
        "weight": 1
      },
      {
        "value": "Whitney",
        "weight": 1
      },
      {
        "value": "Wilber",
        "weight": 1
      },
      {
        "value": "Wilbert",
        "weight": 1
      },
      {
        "value": "Wilburn",
        "weight": 1
      },
      {
        "value": "Wiley",
        "weight": 1
      },
      {
        "value": "Wilford",
        "weight": 1
      },
      {
        "value": "Wilfred",
        "weight": 1
      },
      {
        "value": "Wilfredo",
        "weight": 1
      },
      {
        "value": "Wilfrid",
        "weight": 1
      },
      {
        "value": "Wilhelm",
        "weight": 1
      },
      {
        "value": "Wilhelmine",
        "weight": 1
      },
      {
        "value": "Will",
        "weight": 1
      },
      {
        "value": "Willa",
        "weight": 1
      },
      {
        "value": "Willard",
        "weight": 1
      },
      {
        "value": "William",
        "weight": 1
      },
      {
        "value": "Willie",
        "weight": 1
      },
      {
        "value": "Willis",
        "weight": 1
      },
      {
        "value": "Willow",
        "weight": 1
      },
      {
        "value": "Willy",
        "weight": 1
      },
      {
        "value": "Wilma",
        "weight": 1
      },
      {
        "value": "Wilmer",
        "weight": 1
      },
      {
        "value": "Wilson",
        "weight": 1
      },
      {
        "value": "Wilton",
        "weight": 1
      },
      {
        "value": "Winfield",
        "weight": 1
      },
      {
        "value": "Winifred",
        "weight": 1
      },
      {
        "value": "Winnifred",
        "weight": 1
      },
      {
        "value": "Winona",
        "weight": 1
      },
      {
        "value": "Winston",
        "weight": 1
      },
      {
        "value": "Woodrow",
        "weight": 1
      },
      {
        "value": "Wyatt",
        "weight": 1
      },
      {
        "value": "Wyman",
        "weight": 1
      },
      {
        "value": "Xander",
        "weight": 1
      },
      {
        "value": "Xavier",
        "weight": 1
      },
      {
        "value": "Xzavier",
        "weight": 1
      },
      {
        "value": "Yadira",
        "weight": 1
      },
      {
        "value": "Yasmeen",
        "weight": 1
      },
      {
        "value": "Yasmin",
        "weight": 1
      },
      {
        "value": "Yasmine",
        "weight": 1
      },
      {
        "value": "Yazmin",
        "weight": 1
      },
      {
        "value": "Yesenia",
        "weight": 1
      },
      {
        "value": "Yessenia",
        "weight": 1
      },
      {
        "value": "Yolanda",
        "weight": 1
      },
      {
        "value": "Yoshiko",
        "weight": 1
      },
      {
        "value": "Yvette",
        "weight": 1
      },
      {
        "value": "Yvonne",
        "weight": 1
      },
      {
        "value": "Zachariah",
        "weight": 1
      },
      {
        "value": "Zachary",
        "weight": 1
      },
      {
        "value": "Zachery",
        "weight": 1
      },
      {
        "value": "Zack",
        "weight": 1
      },
      {
        "value": "Zackary",
        "weight": 1
      },
      {
        "value": "Zackery",
        "weight": 1
      },
      {
        "value": "Zakary",
        "weight": 1
      },
      {
        "value": "Zander",
        "weight": 1
      },
      {
        "value": "Zane",
        "weight": 1
      },
      {
        "value": "Zaria",
        "weight": 1
      },
      {
        "value": "Zechariah",
        "weight": 1
      },
      {
        "value": "Zelda",
        "weight": 1
      },
      {
        "value": "Zella",
        "weight": 1
      },
      {
        "value": "Zelma",
        "weight": 1
      },
      {
        "value": "Zena",
        "weight": 1
      },
      {
        "value": "Zetta",
        "weight": 1
      },
      {
        "value": "Zion",
        "weight": 1
      },
      {
        "value": "Zita",
        "weight": 1
      },
      {
        "value": "Zoe",
        "weight": 1
      },
      {
        "value": "Zoey",
        "weight": 1
      },
      {
        "value": "Zoie",
        "weight": 1
      },
      {
        "value": "Zoila",
        "weight": 1
      },
      {
        "value": "Zola",
        "weight": 1
      },
      {
        "value": "Zora",
        "weight": 1
      },
      {
        "value": "Zula",
        "weight": 1
      }
    ]
  },
  "sector": {
    "letter": [
      {
        "value": "A",
        "weight": 1
      },
      {
        "value": "B",
        "weight": 1
      },
      {
        "value": "C",
        "weight": 1
      },
      {
        "value": "D",
        "weight": 1
      },
      {
        "value": "E",
        "weight": 1
      },
      {
        "value": "F",
        "weight": 1
      },
      {
        "value": "G",
        "weight": 1
      },
      {
        "value": "H",
        "weight": 1
      },
      {
        "value": "I",
        "weight": 1
      },
      {
        "value": "J",
        "weight": 1
      },
      {
        "value": "K",
        "weight": 1
      },
      {
        "value": "L",
        "weight": 1
      },
      {
        "value": "M",
        "weight": 1
      },
      {
        "value": "N",
        "weight": 1
      },
      {
        "value": "O",
        "weight": 1
      },
      {
        "value": "P",
        "weight": 1
      },
      {
        "value": "Q",
        "weight": 1
      },
      {
        "value": "R",
        "weight": 1
      },
      {
        "value": "S",
        "weight": 1
      },
      {
        "value": "T",
        "weight": 1
      },
      {
        "value": "U",
        "weight": 1
      },
      {
        "value": "V",
        "weight": 1
      },
      {
        "value": "W",
        "weight": 1
      },
      {
        "value": "X",
        "weight": 1
      },
      {
        "value": "Y",
        "weight": 1
      },
      {
        "value": "Z",
        "weight": 1
      }
    ],
    "sector_name": [
      {
        "value": "{letter}{letter}{letter}",
        "weight": 1
      }
    ],
    "start": [
      {
        "value": "{sector_name}",
        "weight": 1
      }
    ]
  },
  "highClearance": {
    "start": [
      {
        "value": "G",
        "weight": 1
      },
      {
        "value": "B",
        "weight": 1
      },
      {
        "value": "I",
        "weight": 1
      }
    ]
  },
  "lowClearance": {
    "start": [
      {
        "value": "R",
        "weight": 1
      },
      {
        "value": "O",
        "weight": 1
      },
      {
        "value": "Y",
        "weight": 1
      }
    ]
  },
  "cloneNumber": {
    "start": [
      {
        "value": "1",
        "weight": 1
      },
      {
        "value": "2",
        "weight": 1
      },
      {
        "value": "3",
        "weight": 1
      },
      {
        "value": "4",
        "weight": 1
      },
      {
        "value": "5",
        "weight": 1
      },
      {
        "value": "6",
        "weight": 1
      }
    ]
  }
};
