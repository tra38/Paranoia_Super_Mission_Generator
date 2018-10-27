require 'calyx'

class MissionGenerator
  def initialize(sum)
    @generator = initialize_generator(sum)
  end

  def generate(mission_name:, overdog_name:, underdog_name:)
    @generator.generate(mission_name: mission_name, overdog_name: overdog_name, underdog_name: underdog_name)
  end

  private
  def initialize_generator(sum)
    Calyx::Grammar.new(seed: sum) do
      filter :indefinite_article do |input|
        vowels = ['a', 'e', 'i', 'o', 'u']
        first_character = input.downcase[0]
        if vowels.include?(first_character)
          "an #{input}"
        else
          "a #{input}"
        end
      end

      filter :downcase_first_letter do |input|
        first_character = input.downcase[0]
        rest_of_characters = input[1..-1]
        "#{first_character}#{rest_of_characters}"
      end

      letter "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"

      number "1", "2", "3", "4", "5", "6", "7", "8", "9"

      character :letter => 1..24,
                :number => 25..35

      sector_name "{letter}{letter}{letter}"

      building_name "{character}{character}-{character}{character}{character}"

      service_group 'Armed Forces', 'Internal Security', 'CPU', 'R&D', 'PLC', 'Power Services', 'Tech Services', 'HPD&MC'

      secret_society 'Anti-Mutant', 'Computer Phreaks', 'Communist', 'Corpore Metal', 'Death Leopard', 'FCCC-P', 'Frankenstein Destroyers', 'Free Enterprise', 'Humanist', 'Illuminati (cover society: {secret_society})', 'Mystics', 'Pro Tech', 'Psion', 'PURGE', 'Romantics', 'Sierra Club', %{"Spy For Another Alpha Complex"}, 'Program Group'

      # From Criminal Histories
      job_type 'Menial', 'Clerical', 'Support', 'Management', 'Security', 'Fieldwork', 'Analysis', 'Creative', 'Investigative', 'Quality Control', 'Engineering', 'Emergency', 'Celebrity'

      random_target :overdog_name,
                    :underdog_name

      location :public_location => 1..12,
               :private_location => 13..20

      public_location "{clearance}-clearance {public_safe_location}" => 1..10,
                      "{clearance}-clearance {public_dangerous_location}"=> 11..16,
                      "{clearance}-clearance {public_unusual_location}" => 17..20

      private_location  :private_safe_location => 1..10,
                        :private_dangerous_location => 11..16,
                        :private_unusual_location => 17..20

      public_safe_location "food production area" =>1..2,
                           "living quarters" => 3..4,
                           "dining area" => 5..6,
                           "computer interface" => 7..8,
                           "corridor" => 9..9,
                           "{service_group} waiting room" => 10..10,
                           "grooming and hygiene station" => 11..11,
                           "{service_group} storage facility or warehouse" => 12..12,
                           "vidshow entertainment lounge" => 13..13,
                           "garage/vehicle dispatch" => 14..14,
                           "postal sorting room" => 15..15,
                           "Junior Citizen creche" => 16..16,
                           "Transtube station" => 17..17,
                           "recreational resort" => 18..18,
                           "forms processing center" => 19..19,
                           "bathroom" => 20..20

      public_dangerous_location "Armed Forces {armed_forces_location}" => 1..2,
                                "Internal Security {internal_security_location}" => 3..4,
                                "hospital's {hospital_location}" => 5..6,
                                "reactor {reactor_location}" => 7..8,
                                "Vulture Squadron {vulture_squad_location}" => 9..10,
                                "Troubleshooter HQ {troubleshooter_location}" => 11..12,
                                "factory floor (controlled by {service_group})" => 13..13,
                                "R&D research lab, focused on {research_topic})" =>14..14,
                                "Food preparation area" => 15..15,
                                "Technical Services cloning facility (well-guarded)" => 16..16,
                                "{booth_type} booth" => 17..17,
                                "abandoned location (originally {public_safe_location.indefinite_article}, but is now a decaying and pestilential wreck)" => 18..20

      public_unusual_location "Solyent recycling room (near the morgue)" => 1..2,
                              "{duct_type} ducts" => 3..4,
                              "Bright Vision Re-Education Center" => 5..6,
                              "Bot manufacture center" => 7..8,
                              "{shaft_type} shaft" => 9..10,
                              "Funball arena" => 11..12,
                              "Hangar" => 13..14,
                              "Communication Booth" => 15..16,
                              "Elevator" => 17..18,
                              "Packing Crate Center" => 19..20

      private_safe_location "portal to Alpha Complex dome" => 1..2,
                            "IR Market (originally {public_location.indefinite_article})" => 3..4,
                            "IR Marketeers' Living Quarters" => 5..6,
                            "CompNode" => 7..8,
                            "MemoMax archive vault" => 9..10,
                            "Museum of Famous Forms" => 11..12,
                            "Junior Citizen fort (no Commies allowed!)" => 13..14,
                            "sewer tunnel" => 15..16,
                            "Proper Bedding Maintenance Hall of Fame" => 17..18,
                            "ULTRAVIOLET mausoleum" => 19..20

      private_dangerous_location "{secret_society} HQ" => 1..8,
                                  "secure dome access gate" => 9..9,
                                  "Reactor waste landfill" => 10..10,
                                  "portal to the Outdoors guarded by 1d20 guardbots" => 11..11,
                                  "Armed Forces dome defense turret (defense position on the outer dome)" => 12..12,
                                  "missile silo ({missle_silo_status})" => 13..13,
                                  "{secret_society} paint-mixing facility" => 14..14,
                                  "Technical Services clone backup ordering office" => 15..15,
                                  "warbot armature fitting lab" => 16..16,
                                  "cone rifle fuse packing facility" => 17..17,
                                  "map room for several sectors" => 18..18,
                                  "unrecoverable bot brain junkyard" => 19..19,
                                  "underground society of refugee traitors, living within in the Underplex's {underplex_location}" => 20..20

      private_unusual_location "illegal sports arena" => 1..1,
                              "illegal Hangar" => 2..2,
                              "illegal Communication Booth" => 3..3,
                              "illegal Packing Crate Center" => 4..4,
                              "abandoned and forgotten portal to the Outdoors" => 5..6,
                              "underground lake" => 7..8,
                              "natural cavern" => 9..10,
                              "private slime farm" => 11..12,
                              "gigantic Gothic cathedral (once used heavily by FCCC-P, but now abandoned)" => 13..14,
                              "acid-etched sinkhole under food production area" => 15..16,
                              "heat-resistant mitten knitting sweatshop" => 17..18,
                              "ULTRAVIOLET Gallery of Perversities" => 19..20

      armed_forces_location "dormitory" => 1..8,
                            "armory" => 9..15,
                            "firing range" => 16..20

      internal_security_location "admin offices" => 1..6,
                                 "holding cells" => 7..10,
                                 "interrogation center" => 11..15,
                                 "janitorial stores" => 16..18,
                                 "surveillance station" => 19..20

      hospital_location "ER facility" => 1..7,
                        "drug vending area" => 8..10,
                        "medicinal supply depot" => 11..13,
                        "intensive care facility" => 14..16,
                        "recovery room" => 17..18,
                        "morgue" => 19..20

      reactor_location "outer core" => 1..7,
                        "control room" => 8..12,
                        "coolant stack" => 13..17,
                        "shielding" => 18..20

      vulture_squad_location "barracks" => 1..5,
                              "hanger" => 6..10,
                              "indoor flybot testing facility" => 11..15,
                              "battle readiness exercise field" => 16..20

      troubleshooter_location "outer lobby" => 1..5,
                              "firing range" => 6..10,
                              "briefing rooms" => 11..15,
                              "dispatch" => 16..20

      research_topic "building gadgets", "biochemistry studies"

      booth_type "confession", "information"

      duct_type "enviro conditioning", "maintenance"

      missle_silo_status "active", "decommissioned"

      shaft_type "transtube" => 1..10,
                "waste channel" => 11..14,
                "wiring conduit" => 15..20

      underplex_location "derelict rooms", "abandoned shafts", "sewers"

      background %{The mission will take place in {@building_name}, {location.indefinite_article} in Sector {@sector_name}. {@overdog_name} (secret society: {$secret_society}, mutant power: {mutant_power}, personality: {$personality}, job type: {$job_type}) currently controls {@building_name} with an iron fist. {@overdog_name}'s ultimate goal is to {$secret_agenda}.

        {@overdog_name} has a problem though. And that problem is {@underdog_name} (secret society: {$secret_society}, mutant power: {mutant_power}, personality: {$personality}, job type: {$job_type}), who wants to {do_evil_scheme}, and they want to do so out of {deadly_sin}. {@underdog_name}'s ultimate goal is to {$secret_agenda}.

        It is this conflict between {@overdog_name} and {@underdog_name} that the Troubleshooters must deal with if they are to complete the mission successfully.

        {@overdog_name} also has some personal possessions - Project {@overdog_bot_codename} ({@overdog_bot.indefinite_article}) and Project {@overdog_object_codename} ({overdog_object.indefinite_article}). These possessions could be used to help defend {@building_name} from the threat of {@underdog_name}...but could also prove to be a danger.}

      overdog_bot "{robot}"

      overdog_bot_codename "{codename}"

      overdog_object "{valuable_object}"

      overdog_object_codename "{codename}"

      secret_agenda "manipulate The Computer’s local CompNode (and to hide evidence of their manipulation)", #from the Mission Blender (the SOMEONE)
                    "cover up an R&D experiment that they built - the experiment had gone horribly {wrong}",
                    "cover up a secret society mission that went horribly {wrong}", "help expand the might of their rapidly-growing {service_group} firm (thereby expanding their personal power in the process)",
                    "make their secret society more powerful",
                    "promote an extreme form of mutant supremacy - only their kind of mutants dominate, and normal humans and all other kinds of mutants subservient",
                    "cause enough damage in order to procure a fat service-group repair contract for their rapidly-growing {service_group} firm",
                    "secure valuable supplies in order to run a credit-making scheme (such as a lottery or a IR Market)",
                    "conspire against The Computer",
                    "save their {service_group} firm (the firm has fallen into strangling bureaucratic torpor and must now be massively overhauled or terminated)",
                    "enforce the rules and regulations of {service_group}, even if it means acting in imprudent ways to get the paperwork filled out",
                    "cover up a disaster at their {service_group} firm (which is overproducing, underproducing, or doing something strange to their product/service)",
                    "cover up the fact that they are secretly {robot.indefinite_article}",
                    #from Traitor's Manual (Illuminati Motivation Table of Doom)
                    "secure more and more power for their own sake",
                    "conspire for the sake of conspiracy - they have long ago given up their old beliefs and now wants to play the Great Game in Alpha Complex",
                    "cause chaos and anarchy in the Complex so that they can more easily dominate society",
                    "bring Alpha Complex to a state of mechanistic perfection, suppressing individual freedom to create a true utopa",
                    "loyally support The Computer and its High Programmers (even they have to use unapproved channels)",
                    "secure *control* over citizens of Alpha Complex - not simply power (for power can come solely from a fist or a gun); this control would likely require some form of mind control",
                    "prepare Alpha Complex for colonization and subversion by some external enemy (aliens? mutants from the Outdoors? sentient vatslime?)",
                    "follow orders from the Old Reckoning leadership who managed to survive the Global Die-Off by using cryogenics",
                    "obey the orders of a traitorous meme virus created by {$secret_society}"

      deadly_sin "pride", "envy", "gluttony", "greed", "anger", "a burning desire for power", "wrath"

      do_evil_scheme "erase {@overdog_name}'s clone line", "overthrow {@overdog_name} and take {@building_name} for themselves", "weaken {@overdog_name}'s powerbase by destroying {@building_name}", "blackmail {@overdog_name}", "frame {@overdog_name} for treason"

      wrong "wrong", "right"

      # Mostly From http://lotbieth.blogspot.com/2014/02/blood-words-and-money-organizations-and.html, and http://www.paradoxian.org/hoi2wiki/index.php/Minister_Traits
      # Copied from http://orteil.dashnet.org/randomgen/?gen=jDryXCLa
      personality "Bored Bureaucrat", "Unlikely Academic", "Passive-Aggressive Clerk", "Jovial Amateur", "Bluff Professional", "Ambitious Boss", "Powerhungry Boss", "Burned-out Workaholic", "Disinterested Boss", "Rebellious Naysayer", "Recalled Veteran", "Charismatic Leader", "Evangelist “Team Player”", "Jaded Outcast",  "Foreign Contractor", "Detestable Visionary", "Giggly Social Climber", "Shameless Brown-noser", "Punctilious Charmer", "Useless Boss", "War Hero", "Insignificant Layman", "Corporate Suit", "Iron-Fisted Brute", "Ideological Crusader", "Great Compromiser", "Cloak-and-Dagger Schemer", "Administrative Genius", "Efficient Sociopath", "Crooked Kleptocrat", "Dismal Enigma"

      clearance "INFRARED" => 1..3,
                "RED" => 4..6,
                "ORANGE" => 7..8,
                "YELLOW" => 9..10,
                "GREEN" => 11..12,
                "BLUE" => 13..14,
                "INDIGO" => 15..16,
                "VIOLET" => 17..18,
                "ULTRAVIOLET" => 19..20

      object :safe_object => 1..1,
             :dangerous_object => 2..4,
             :unusual_object => 5..6,
             :weapon => 7..8,
             :armor => 9..10,
             :robot => 11..12,
             'bot brain' => 13..13,
             :valuable_object => 14..16,
             :experimental_object => 17..17

             # valueless_object => 7,
             # valuable_object => 8..10,
             # weapon => 11..12,
             # armor => 13..14,
             # equipment => 15..15,
             # vehicle => 16..16,
             # robot => 18..19,
             # 'bot brain' => 20

      safe_object '5-meter ladder (not collapsible)', '12 sheets of black rubber', '447 ‘The Computer Is Your Friend’ metal placards (gross weight 122 kg)', 'Anaesthesia intubation fiberscope', 'bathroom hand dryer', 'bucket and mop', 'colonoscopy video tubes', 'crate of 144 room deodorizers', 'grating for overhead fluorescent lighting', 'grease exhaust hood', 'hose reel', 'industrial washer and dryer', 'mess hall bench', 'metric ton of bolts and braces for INFRARED barracks cots', 'office reception counter', 'pallet of packaged mucus specimen traps', 'refrigerator', 'restroom floor mats', 'steel cubicle (broken down)'

      dangerous_object 'Botulin toxin', 'can of B3 laced with MemWipe', 'Communist PDC (activates at random to shout recorded Communist propaganda)', 'Dangerous creature from Outdoors, on leash', 'IntSec homing beacon, disguised as {safe_object.indefinite_article}', 'autographed copy of *Memories of an Unregistered Mutant Life* by Frank-B-HJN-6', 'Open beaker of bubbly green goo labeled BIOHAZARD—DO NOT OPEN!', 'Mutagen-contaminated syringes', 'miniature {robot}, prone to kamikaze attacks', 'Old Reckoning artificat', 'Plutonium', 'Sapient, mobile R&D bomb that gloms onto PC’s arm', 'Stoppered vial of poison gas', 'Super-lubricant, seeps through any container', 'Sweaty dynamite', 'Telepathic Subconscious Message Emitter (currently stuck on {emitter_mood})', 'Vat of liquid nitrogen (freezes solid anything living upon contact)', 'Vermin poison', 'Vial of acid', 'Weaponized anthrax or bioweapon'

      unusual_object "All-surface black marker pen", "Beach umbrella", "Treasonous yet seductive Old Reckoning recorded music", "Weird new R&D toy for Junior Citizen creches—twisty cube-thingy puzzle", "Tin of weatherproofing wax", "Stapler (clearance RED)","Tin of weatherproofing wax", "3.3-meter pole","Bottle of foaming handsoap","Box of plastic building blocks","Bungee cord","Cheese grater","Globe","Hand buzzer","High-Frequency whistle","Laser pointer","Magnet","Musical instrument","Old Reckoning encylopedia volume","Pencil sharpener","Rolodex with Old Reckoning names"

      valuable_object "Aerosol paint stripper", "Certificate for free clone backup", "Collectible six-pack of ‘B2’ - Bubble Beverage", "Combination for a security lock", "Deluxe PDC with enhanced infrared-light camera, shoots accurately in total darkness", "Dossier about {secret_society} (written by {random_target})", "Flybot authorization dongle", "Front-row tickets to Championship FunBall game", "Geiger counter", "High-clearance ME Card", "High-clearance laser barrel", "Large-denomination plasticred", "Old Reckoning atlas, dated 2097", "Old R&D File: *Mutant Power Origins*", "Packet of freeze-dried fruit", "Bucket of Paint", "Blackmail material on {random_target}", "Radiation-sensitive badge", "Signed photo of Tella-O-MLY-1", "Treason file on {random_target}"

        # From https://github.com/anticoders/fake-words/blob/master/index.js
      syllabe 'the','ing','er','a','ly','ed','i','es','re','tion','in','e','con','y','ter','ex','al','de','com','o','di','en','an','ty','ry','u',
      'ti','ri','be','per','to','pro','ac','ad','ar','ers','ment','or','tions','ble','der','ma','na','si','un','at','dis','ca','cal','man','ap',
      'po','sion','vi','el','est','la','lar','pa','ture','for','is','mer','pe','ra','so','ta','as','col','fi','ful','get','low','ni','par','son',
      'tle','day','ny','pen','pre','tive','car','ci','mo','an','aus','pi','se','ten','tor','ver','ber','can','dy','et','it','mu','no','ple','cu',
      'fac','fer','gen','ic','land','light','ob','of','pos','tain','den','ings','mag','ments','set','some','sub','sur','ters','tu','af','au','cy','fa','im',
      'li','lo','men','min','mon','op','out','rec','ro','sen','side','tal','tic','ties','ward','age','ba','but','cit','cle','co','cov','daq','dif','ence', 'ern','eve','hap','ies','ket','lec','main','mar','mis','my','nal','ness','ning','nu','oc','pres','sup','te','ted','tem','tin','tri','tro','up'

      codename "{$syllabe.capitalize}{$syllabe}{$syllabe}"

      experimental_object "Project {codename}, type: {item_description} (GM Note: {item_secret})"

      item_description "Behavior modifier (hypnosis devices, pheromone emitters, subsonic/supersonic irritants)", "Communications, unusual type (telepathy gun, telephone that attaches miles-long wire to body of recipient, holographic mime projector, tight-beam loudspeaker)", "Mobility enabler (skates, boots, motorized shopping cart, vehicle, jet pack, propeller helmet, frictionless shoe soles)", "Sensor (detects something hitherto  undetectable or inconvenient to detect)", "Economic (credit license analyzer, plasticred duplicator, IR market activity scanner)"

      item_secret "Only affects imaginary targets", "Occasionally explodes", "Gradually poisons/irradiates user", "Turns on/off inappropriately", "Enrages citizens against user", "Excessive use constitutes treason", "Intelligent; neurotic or frightened", "Picks up targets it’s not supposed to, who don’t like being picked up", "Gradually mutates user"

      weapon "Truncheon (S5K impact), knife (S5K), brass knuckles (S5W), or any other low-tech melee weapon",
      "Laser pistol (W3K energy); barrel color is {clearance}",
      "Stun gun (stuns for one round)",
      "Hand flamer (S3K energy)",
      "Force sword (S3K energy)",
      "Ice gun (S3K energy)",
      "Slugthrower (with solid slug ammo)",
      "Semi-automatic slugthrower (with solid slug ammo)",
      "Energy pistol (W3K energy)",
      "Sonic pistol (S3W energy)",
      "Needle gun (S3W impact)",
      "Gauss Gun (W3K energy)",
      "Sonic Rifle (S3W energy)",
      "Blaster (M3K energy)",
      "Cone Rifle (with napalm ammo)",
      "Flamethrower (S3K energy)",
      "Plasma Generator (V1V energy)",
      "Prototype {weapon} (Due to using the latest bleeding-edge tech, the weapon can hit for one damage step above its maximum. However, it's also more prone to malfunctioning...or working too well.)"

      armor "Fake armor",
            "Reflec",
            "Kevlar",
            "ArmorAll",
            "Combat suit",
            "Battle armor",
            "Environmental Suit",
            "Experimental Power vest (charged with high voltage; does S4K energy damage to attackers using bare hands, metal hand weapons or force swords)",
            "Experimental Camouflage suit (works like Chameleon mutant power; one shot can render it completely useless)",
            "Experimental Electromagnetic clothing (makes wearer a living magnet; can stick to metal walls; watch out for knives!)",
            "Experimental Jet Suit (aerodynamic suit with jetpack)",
            "Experimental Prismatic armor (E4; mirrored suit reflects energy attacks; wearer is most visible target around)",
            "Protoype {armor} (Due to using the latest bleeding-edge tech, the armor is much more protective than the standard version. Prevents injuries almost entirely. It’s also much more cumbersome.)"

      robot "metallic can that bleeps constantly (The Computer claims it’s extremely important)", "scrubot", "pharmabot (hovering sphere that injects drugs and dispenses pills)", "Jackobot", "Snooper (small hovering sphere that tracks a target's scent)", "Robobutler (you rang, sir?)", "Docbot Model 1", "Docbot Model 5", "Petbot", "Teachbot", "Psychbot Sanity Restoration Unit", "Explodatron (small, nervous bot that exists to explode in hopeless situations, taking enemies and PCs with it)", "Guardbot", "Combot", "Warbot", "Mega {robot}"

      mission_alert_delivery 'Text message on PDC.' => 1..5,
                              "An INFRARED courier delivers alert {delivery_method}, seeks 10cr 'tip' for the delivery. Demeanor: {delivery_demenaor}." => 6..10,
                              "Special ‘breaking news’ bulletin in middle of vidshow: {vidshow_part}. Identifies the PCs by name." => 11..11,
                              "Mission is randomly assigned as a prize in a CruncheeTym algae chips packet." => 12..12,
                              "Via high-frequency radio transmission that gives PCs excruciating headaches and sends petbots crazy with excitement." => 13..13,
                              "Relayed through a public confession booth, read in the scrolling ‘Credit Due’ message on a vending machine or overheard in a communal area." => 14..14,
                              "Announced over public address loudspeakers." => 15..15,
                              "Via telepathic communication from unidentifiable source. The Computer knows nothing of this method, and will regard it with extreme suspicion." => 16..16,
                              'Stamped upon the side of {dangerous_object.downcase_first_letter.indefinite_article}.' => 17..17,
                              'Anonymous hardcopy message slipped under door of PC’s {homebase}.' => 18..18,
                              'Scrawled across the wall in half-meter-high letters written in {mission_alert_paint}.' => 19..19,
                              'Via {robot} - {mission_alert_bot_status}.' => 20..20

      mission_alert_status 'The message is intact and correct.' => 1..10,
                            'The briefing location is wrong. {reason_for_tampering}' => 11..15,
                            'The briefing time is wrong. {reason_for_tampering}' => 16..18,
                            'The recognition password (to be given to briefing officer) is wrong. {reason_for_tampering}' => 19..20

      reason_for_tampering 'The correct information is missing, replaced by [INSERT DATA HERE] or similar. Secret society contacts or servile truckling to The Computer may fill in missing data.' =>1..5,
      'The correct information is obscured by advertising (pop-up ad, jingle, viral marketing, etc.). Sponsoring advertiser may possibly have record of unaltered alert.' => 6..10,
      %{The correct information is replaced by extortion threat from anonymous hacker - "Send 100cr to this Gray Subnet account and I'll send you the data."} => 11..15,
      "The correct information is in machine-readable code, missing vowels, encrypted, etc. Computer Phreaks can help. The Computer doesn't see the problem." => 16..18,
      "Replaced by treasonous {$secret_society} propaganda." => 19..19,
      "Alert itself is damaging—text message contains software virus that crashes PDC or vidscreen, physical alert has toxins or is radioactive, etc." => 20..20

      delivery_method 'verbally', 'hardcopy'

      delivery_demenaor 'drugged' => 1..10,
                         'truckling' => 11..13,
                         'polite'  => 14..17,
                         'in-your face friendly' => 18..18,
                         %{cocky, "I know more than I'm telling", nudge-nudge} => 19..19,
                         "sullen, rude, suicidal" => 20..20

      vidshow_part 'boring part' => 1..10,
                    'good part' => 11..18,
                    'interrupts crucial revelation' => 19..20

      emitter_mood 'violent', 'suicidal'

      homebase 'quarters' => 1..10,
                'central entertainment room' => 11..14,
                'workplace' => 15..18,
                'bathroom' => 19..20

      mission_alert_paint 'black paint' => 1..5,
                          'low clearance paint' => 6..8,
                          'mid-clearance paint' => 9..12,
                          'high-clearance paint' => 13..14,
                          'Cold Fun' => 15..18,
                          'blood' => 19..20

      mission_alert_bot_status 'functional' => 1..10,
                                'malfunctioning' => 11..15,
                                'booby-trapped' => 16..18,
                                'smouldering wreckage' => 19..20

      briefing_room "Briefing officers behind opaque bulletproof glass, voices electronically filtered.",
      "Briefing officers undercover; wary, paranoid; speak in evasive code-phrases.",
      "Briefing officer is weird invalid (e.g., suspended in sound-dampening gel in a swimming pool communicating through a bizarre array of tubing).",
      "Briefing occurs in a pitch black room, where the only source of light is from the corridor outside the briefing room filtering in under the door.",
      "Briefing officer is hidden inside {robot.indefinite_article} chassis, communicating with an electronically filtered voice.",
      "Officious, schoolmasterly briefing officer sitting at the head of a classroom with blackboard and chalk; tests PCs frequently.",
      "Suspicious, twitchy briefing officers in highly defended position (e.g., seated atop a massive gun emplacement).",
      "Bureaucratic snafu assigns briefing officer to the room adjacent to the PCs; won’t join PCs for fear of violating orders; shouts at the top of their voice to be heard, or conveys briefing information by notes, courier, Morse code, etc.",
      "Briefing officer sits curled up and rocking backwards and forwards in the middle of the location; muttering under their breath.",
      "Briefing officer sits with their back to the PCs; they passes notes to a terrified INFRARED citizen, who reads them aloud.",
      "Briefing officer has left a recording device with the mission on it, but the mechanism is jammed at double speed with no rewind option.",
      "Briefing officer is shot just after the PCs arrive and is replaced by a different officer who acts extremely shifty and refuses to answer questions.",
      "Officer has serious coughing fits every few words, disrupting every sentence, and becomes increasingly angry with every request to repeat themselves.",
      "Briefing officer is hiding inside an empty Cold Fun barrel and passes written notes out to the PCs through a small bunghole.",
      "Officer skims through the entire briefing as if they expects those present to know the details already, then walks out without any questions.",
      "Briefing officer whispers the briefing to the team leader and then expects him to pass it on in the style of Telephone or Chinese Whispers.",
      "Briefing officer wears {armor} and fiddles with an exotic-looking {weapon}; expects attack at any moment.",
      "Given in a transtube, on a recording with a folder of documents; recording self-destructs 5 seconds after stopping.",
      "Briefing officer is dead on arrival and no one comes to replace him. May have notes on their body that describe the PCs’ mission."

      outfitting "PLC: {plc}" => 1..10,
                  "IR Market: {ir_market}" => 11..20

      plc "Supply clerks recently infected with SellFast.D spam virus, insist all PCs enroll in ‘Make Credits Fast!’ marketing course.", "A Monty Python ‘Cheese Shop’ warehouse; nothing is actually in stock. Staffers are proud of their multiple awards for cleanliness and efficiency.", "Empty office. Door is open. No security (Tension level 0). PCs may take what they want, but have to find it themselves and fill out proper paperwork. If the paperwork isn’t filled out, the items are reported stolen. May be interrupted by IR market thieves, passing looters, etc.", "Designated supply depot is closed for repairs following Commie sabotage.", "‘The PLC Paperwork Shuffle’: Different batches of forms required to obtain each individual type of standard equipment. In triplicate.", "A PLC shop that has none of the equipment the PCs need, but is willing to make appropriate substitutions. Could be potentially cool stuff.", "A PLC shop that has none of the equipment the PCs need, but is willing to make utterly weird and crazed substitutions.", "A PLC shop that has none of the equipment the PCs need, but is willing to make strange and incorrect substitutions.", "‘Serv-Yourself’ warehouse that makes every citizen find their own equipment. ", "‘Please Observe Silence’ sign on the wall. Anyone who speaks gets bumped to the end of the line. All negotiations must be written.", "Office; looks very busy, but nothing ever gets done. Careful inspection shows all workers are passing the same papers back and forth quickly.", "Experimental ‘Mobile PLC’ in a transtube car. Every so often the car must stop to load and unload supplies.", "Surprisingly efficient, but all items have had inventory barcodes removed. Staffers refuse to take returned equipment: ‘It wasn’t issued here.’", "Office only carries ‘non-ordinance’ items—no weapons or weapon-like items. Offers PCs a new ‘Zero-Tolerance’ form to sign.", "Shipping containers stacked atop one another, each container listed for inscrutable bureaucratic purposes as being in a different sector.", "A single PLC staffer in a broom closet with a pneumatic tube on the side wall. This lone officer is one of the most efficient workers in Alpha Complex; completes all paperwork quickly and throughly.", "A Multi-Purpose Chute with graffiti ‘CompUSUKS!’ above it—a password (Comp-U-SUK-5) into an unlimited account on this compromised machine.", "PLC office openly and entirely subverted by {secret_society}; continues business as usual, unless PCs show signs of alerting the authorities.", "Warehouse run by insane high-clearance director; assigns PCs their own mission ({$mission}) so they can give them over-inventoried {object}."

      ir_market "Red Market, run by Commies. They only barter or trade evenly. PCs who own little more than their own overalls must buy items elsewhere, then come back here to trade for similarly priced items. (You could make them trade for the shirts off their backs.)", "The market is run entirely by Internal Security as a sting operation. Every buyer risks arrest and termination.", "A dingy, dirty corridor. PURGE runs this market, and will terminate any group who ‘misbehaves’ (in PURGE’s stern judgment). Lots of weapons.", "A ‘Broke’ market. Troubleshooters always leave broke, with stuff that’s broke. Bad deals all around.", "Squad of Internal Security GREEN goons patrols market, ‘just out for an off-duty walk,’ taking bribes to ‘look the other way’ for each transaction.", "Free Enterprise member ‘Nathan D,’ operator of this IR market, is messily killed by rival FreeEnt capo in PCs’ presence.", "An R&D-sponsored market. Every item ‘improved,’ although not in a way PCs or marketeers suspect. Costs only slightly above normal.", "This market is run by the secret society of one PC (select randomly), who always gets the best deals and everything that works.", "The allies of {random_target} runs this market. Marketeers sell the PCs dangerous R&D equipment - {experimental_object}.", "Marketeers gives PCs a fair discount if they also take a ‘bonus’ item ({dangerous_object}); marketeer wants the PCs to leave it at Building {building_name} ({private_location.indefinite_article})."

      debriefing_room "Debriefing room is well appointed with luxurious carpet, comfortable chairs and refreshments served throughout. Soothing musics plays throughout the session. Laser emplacements are visible in every corner and track the PCs’ every move.",
        "A cavernous spherical reactor coolant chamber (recently decommisioned) with the PCs securely strapped into dentist chairs at wrist, ankle, waist and chin. The booming voice of the unseen officer echoes from strategically placed speakers.",
        "A pitch black room, with dim light filtering in under the entrance door. Unsettling clicking noises, like a trigger being pulled on a jammed gun.",
        "A compact office with one desk and a chair, occupied by the debriefing officer, with the PCs standing amid towers of forms, printouts and manila folders, all bearing the names of one or more PCs.",
        "The debriefing officer stands behind a massive, blast-shielded podium flanked by BLUE Vulture troopers with plasma generators, while the PCs sit in brilliant interrogation spotlights that look disconcertingly like bullseyes.",
        "Room contains nothing but miniature stools, where the PCs perch with difficulty and discomfort.",
        "A mirrored room filled with eye-searing halogen lamps. The PCs' eyes constantly water. The officer and guards wear shaded full-face visors.",
        "Debriefing takes place in a cinema with stadium seating, popcorn and Bouncy Bubble Beverage, with security camera and bot recordings of each PC’s less commendable activities projected onscreen.",
        "Debriefing conducted solely by R&D scientists. They ask many questions about equipment, giving the impression the only reason for the mission was to test equipment. After the scientists leave, The Computer covers the treason accusations.",
        "Troubleshooters and debriefing officer sit at a round table. Officer orders them to play a card or board game, while the officer encourages them to reveal details about their mission and about their feelings.",
        "Room is fitted with seesaws, with a PC sitting on one side of each and a BLUE Trooper with blaster on the other. In the lower position, the PCs are obscured by a charred blast shield. The debriefing officer reads mission details, raising each PC on a note of treason, lowering them on a point of commendation. (This is an experimental HPD&MC psychological exercise intended to encourage loyalty.)",
        "Room is sheet steel with a single chair in the center and a large sign: PLEASE SIT DOWN with arrow pointing to the chair. The debriefing officer spends the session pacing around the chair, and (if necessary) discourages PCs from sitting in it. Chair is lethal.",
        "The debriefing officer sits in complete silence while paging through several thick files, flanked by BLUE Vulture troopers armed with cone rifles. PCs who speak are met with scowls. The debriefing ends without a word.",
        "The debriefing room is locked when the PCs arrive, and no debriefing officer ever arrives no matter how long they wait.",
        "The debriefing officer is dead on arrival, seated at an empty desk in a plain room, and no one arrives to replace him."

      mission "Six Troubleshooter teams vanished in {@sector_name}. Find out what’s killing them and deal with it.",
        "We have an informant in the {secret_society} secret society who’s leaked the location of a cache of Old Reckoning contraband. It’s in a very, very obscure and dangerous place, but to protect the identity of our informant, we need you to discover it *accidentally*. So, go wander around {@building_name} until you stumble into something.",
        "A scrubbot just discovered a large cache of uneaten mood stabiliser food supplements in {@building_name}. Someone responsible for food production in the sector is sabotaging HPD&MC protocols by not adding mood stabilisers. Find them and any hyper-labile citizens.",
        "Patrol the edge of {@building_name}, paying particular attention to the security checkpoints and gun emplacements to make sure traitors haven't subverted them.",
        "We’ve received a bomb threat, suggesting there’s a time bomb in {@building_name}. We can’t afford to shut the building down unless there’s a confirmed threat – off you go to investigate. Oh, don’t mention the bomb to anyone, we don’t want to cause a panic.",
        "Citizen {@underdog_name} has been deemed an unperson. Erase all evidence of their existence. You should start by finding them.",
        "A tipoff implies that {@overdog_name} is a high-level Psion agent with a second brain. Investigate this without alarming {@overdog_name}'s loyal supporters in {service_group}. They’re twitchy.",
        "Something exploded in {@building_name}. Or went wrong. We don’t know what happened, because whatever it was took out all our security cameras. Off you go.",
        "One of our flybots is missing (last seen cruisng over {@building_name}). Find it.",
        "We suspect {random_target}, who’s infiltrating a {service_group} firm located in {@building_name} for Internal Security, of being a double-agent for {secret_society}. Infiltrate the firm and see where their  allegiance truly lies.",
        "Investigate an unexplained disaster in {@building_name}.",
        "Investigate mysterious disappearances of citizens in {@building_name}. If they’re being captured by Commies, save them. If they’re trying to escape Alpha Complex, shoot them.",
        "Investigate a string of murders. All the victims were {killed}.",
        "Investigate accusations of {@underdog_name} planting evidence of treason against {@overdog_name}.",
        "Determine the cause of the recent INFRARED riots in {@building_name}. We suspect {random_target} is involved.",
        "Deliver this ominous, ticking package to {secret_society.indefinite_article} base in {@building_name}. Make sure they accept it. By the way, this mission has a time limit...",
        "Deliver a shipment of emergency weapons to a Troubleshooter team under attack at {@building_name}. No, you don’t need to be armed; it’s a simple delivery mission! (GM Note: Crate contains 6 copies of {weapon}.)",
        "Deliver this highly confidential package to {@overdog_name}, located in {@building_name}. Make sure no one opens it. [GM Note: Contains {dangerous_object}.]",
        "Deliver a shipment that contains multiple versions of a fragile, badly needed {object}. Make sure it gets to {@overdog_name}, located in {@building_name}.",
        "Capture the highly dangerous traitor {@underdog_name} and transfer them to a far more secure location (Building {building_name}, {location.indefinite_article}). Make sure they don't die; we want to save that for the *Date with Death* vidshow.",
        "Deliver {object} to {@overdog_name}. Though the item appears treasonous, rest assured it is perfectly above-board. Perfectly.",
        "Irate citizens, led by {@underdog_name}, are trying to break into {@building_name}. Prevent them from entering until reinforcements arrive.",
        "Guard {@building_name} from {secret_society} trying to subvert the building. Be careful not to subvert the building yourself.",
        "Accompany Tech Services mechanics making repairs to {robot.indefinite_article} fleet at {@building_name}. We think one tech is a {secret_society} member trying to derange or corrupt the bots.",
        "The Computer's own CompNode in {@sector_name} has gone down! Repair it at once! Instantly! (By the way, the equipment to repair the CompNode is located in {@building_name}.)",
        "The communications system at {@building_name} has gone down. Repair it and determine the cause.",
        "The drug delivery system at {@building_name} has become plugged. Unplug it.",
        "The power at {@building_name} has gone out. Determine the cause and bring it back online.",
        "Fix a broken vending machine in {@building_name}. Stay alert; citizens nearby report explosions and laser fire.",
        "{@building_name} is having problems processing forms. Go help out.",
        "Commie mutant traitors have threatened to disrupt the televised Loyal Celebration parade. Patrol the route at {@building_name} and stop them.",
        "Guard {@overdog_name} on their latest pleasure trip. Pay no attention to their odd comments.",
        "Evacuate technicians and any high-clearance citizen from {@building_name}. Of course the radiation levels are safe - but hurry!",
        "At {@building_name}, {$secret_society} plans to trade {dangerous_object.indefinite_article} to {$secret_society} in return for a massive sum of credits. Terminate the traitors. Retrieve the goods and the creds.",
        "Traitors with {mutant_power} are active in {@building_name}. Use this Skin Core Sampler to obtain their genetic material for study.",
        "Recent excavation has uncovered an ancient stockpile of nuclear material beneath {@building_name}. Retrieve all you can.",
        "{secret_society} has stolen {@overdog_name}'s plans. Intercept and retrieve them before the thieves {do_evil_hack_plan}.",
        "{dangerous_object.indefinite_article} was accidentally deployed at {@building_name}. Go retrieve it before it squashes something important.",
        "{@underdog_name} has a treasonous but powerful mutant power, with which they have used to inspire revolt. They have already taken over {@building_name}. Remove the mutant and resolve the unrest.",
        "An R&D genetic experiment is running loose in {@building_name}. Neutralize it before it causes too much damage. If it talks to you, ignore it.",
        "{@building_name} has been infested with Commies. Demolish it, preferably with the Commies inside.",
        "{official_thugs} located in {@building_name} has been infiltrated by no less than (1d20) Commie traitors. Remove them; ensure they fall in the line of duty, so we can honor them as fallen heroes.",
        "Neutralize {random_target} in {@building_name}.",
        "Endless waves of assassination attempts will befall {@overdog_name} while they are at {@building_name}; serve as decoys to protect {@overdog_name} as they try to protect themselves.",
        "An exterior force is planning to conquer Alpha Complex. Intercept the force at {@building_name} and terminate the enemy.",
        "A strange new Food Vat slime is causing antisocial and dangerous activity in consumers of Hot Fun. The Computer needs you to destroy the slime. Its last known location is {@building_name}.",
        "A geological event will destroy significant parts of Alpha Complex (shatter it, open it to the elements, turn it into a cheerily warm volcano, etc.). Keep order in {@building_name} until we can find a way to repair the Complex (or cover up the disaster).",
        "A new mind-control technique deployed at {@building_name} will alter the behavior of many clones (even yours), for the worse. Study this mind-control technique and tell us how it works; perhaps we could use it to produce more loyal and pliable citizens.",
        "A biological agent deployed at {@building_name} will transform or devastate the PCs or a large population. Study this agent and tell us how it works; perhaps we could use it for national security purposes.",
        "Essential life support systems at {@building_name} will break down. Enforce order and restore services.",
        "The Computer has decreed a new holiday with odd customs and practices. Please provide security for the festivities being held at {@building_name}. Wait, you don't know what are the odd customs and practices being practiced today? Oh well, learn on the job.",
        "A mysterious command makes all autopilot vehicles home in on {@building_name}, threatening terrible harm en route; we suspect that {random_target} wants a traffic jam there.",
        "Someone is flooding the AlphaNet network with viruses; we trace the viruses to terminals located in {@building_name}. Investigate the issue, but we suspect {random_target} is responsible.",
        "A deadly pathogen is eating through the population, and we suspect {random_target} is responsible. Capture and interrogate them to find out the cure. (GM Note: The PCs are infected with the pathogen the moment their clone backups are decanted.)",
        "You have been accussed of destroying Building {building_name} ({public_location.indefinite_article}), a crime worthy of Erasure of your entire clone line. {official_thugs} will escort you to the nearest termination booth. Thank you for your cooperation. (GM Note: {@overdog_name} is actually responsible for the destruction and the  PCs are being framed for the crime as part of a coverup. If the PCs wants to *not* get terminated and instead to clear their name, then {@underdog_name} will help out by texting where they need to go for the Outfitting and R&D phases.)",
        "A Troubleshooter team has gone rogue and is currently conducting an unauthorized Troubleshooting mission (mission: {$mission}). Stop this mission from succeeding.",
        "{@underdog_name} is a loyal and competence clone who deserves a promotion! Help them get that promotion.",
        "Replace the batteries in {@overdog_name}'s equipment.",
        "Carry around these huge batteries and drain any aunthorized power source you find in {@building_name}.",
        "Escort {@overdog_name} over to {building_name} ({public_location.indefinite_article}) where we can engage in Sanity Correction.",
        "Capture (but don't harm) {@overdog_bot_codename}, a bot that has gone frankenstein. The bot just needs some therapy, just all.",
        "{@building_name} just got destroyed, right after someone field-tested {experimental_object}. Please provide a retrospective field-test report to sastify the R&D techies.",
        "Water and fertilize a hydroponic garden secretly located in {@building_name}, using this new chemical.",
        "{@underdog_name} has been 'volunteered' into R&D field-testing, but they are avoiding their duties. It's up to you then. Test {experimental_object} on {@underdog_name}.",
        "This bot ({robot}) previously belonged to {@overdog_name}. It went frankenstein. We replaced the asimov circuits, so we think we’ve fixed it. Escort it to {@building_name}. Use it heavily. Report.",
        "Recruit 10 volunteers from {@building_name} for reactor shielding duty.",
        "Retrieve {@overdog_object_codename} from {@overdog_name}, who won’t return it.",
        "{@underdog_name} has stolen {experimental_object}, one of R&D less successful projects. Destroy the object. Never, ever try to activate it.",
        "{@overdog_name} has been demoted and fired from their service firm. Find and notify them.",
        "Provide support for these trainee Troubleshooters as they complete their mission (mission: {$mission}).",
        "An Armed Forces wargame has gone horribly wrong. Plant evidence blaming this disater on another service group.",
        "Erase all evidence proving the {codename} Incident ever happened in {@sector_name}. You know nothing about the Incident? Good, keep it that way. (GM Note: The Incident was the result of a failed Troubleshooting mission - mission: {$mission})",
        "Retrieve a High Programmer’s collection from {@bulding_name} before it gets damaged.",
        "Guard a vending machine in {@building_name} until reinforcements can arrive. Do not use the vending machine. Do not let anyone else use the vending machine. Don't ask any questions. (GM Note: Vending machine is currently loyal to {@underdog_name}, and we need to reprogram it to be loyal to {@overdog_name}.)",
        "Discover the source and meaning of the cryptic graffiti that’s been seen all over {@sector_name} recently.",
        "Recently, {@overdog_name}'s service firm has been delivering key packages to {service_group} today. Investigate why they are being late. (GM Note: Packages contain multiple versions of {object}.)",
        "It appears that our secret treason detector in {@building_name} was malfunctioning, and reported everyone as a Commie Mutant Traitor. We need you to investigate the citizens we terminated and find evidence justifying their termination."

      complication "A service group feud between {two_rival_groups} have spun out of control in {@sector_name}. Assassinations and drive-by shootings are commonplace, and the sector is close to civil war.",
                  "A major malfunction has rendered {@sector_name} uninhabitable; the local environment kills an unprotected citizen in minutes if not seconds.",
                  "{random_target} believes (accurately?) that the PCs are assassins sent to kill them. They tries to kill the PCs first.",
                  "Waste disposal is breaking down; garbage is backing up in the hallways and will soon flood {@sector_name}.",
                  "Surplus Armed Forces weaponry floods the IR market. Supporters of {random_target} happily display their new armaments in {@sector_name}.",
                  "{random_target} is suffering from a bout of extreme paranoia, and is in the process of slaughtering all enemies (real and imaginary).",
                  "Another Troubleshooter team is operating in the sector. (Their mission: {$mission})",
                  "A minor malfunction in {@building_name} may lead to a major problem. The PCs must fix the malfunction and deal with the problems already created.",
                  "The INFAREDs in {@sector_name} have gone off their pharmatherapy and are now openly conspiring against The Computer (under the wise leadership of {@underdog_name}).",
                  "The bureaucracy in {@sector_name} has been subverted by {@overdog_name}'s secret society and are now openly considering secession from the rest of Alpha Complex.",
                  "The PCs are given enough resources, but not enough time.",
                  "{random_target} has activated mysterious duplicates or analogues of the PCs (and are using these duplicates/analogues for their own purposes).",
                  "{service_group} in {@sector_name} is breaking down, forcing all the other service groups to pick up the slack.",
                  "The PCs are horribly unpopular in {@sector_name} - everyone wants to discredit, destroy, maim or spit on the Troubleshooters.",
                  "The local CompNode in {@sector_name} has taken an instant disliking to the PCs, and will do whatever in Its power to make the PCs' lives miserable.",
                  "The local CompNode in {@sector_name} personally like the PCs too well - instantly making other citizens more jealous and suspicious.",
                  "The PCs lack the competence necessary to deal with this crisis.",
                  "The PCs' secret societies are planning to betray them and throw their lot in with {random_target}.",
                  "The effect the PCs are ordered to prevent will be caused by their actions.",
                  "Alpha Complex works so badly it endangers the PCs’ lives.",
                  "Alpha Complex works with terrifying efficiency.",
                  "Alpha Complex is doomed...and not in a good way.",
                  "The PCs are themselves the greatest threat to Alpha Complex - the other NPCs are trying to put aside their differences to defend the Complex against a common enemy.",
                  "The Commie Mutant Traitors are losing - and this is a bad thing! Without a common Enemy to unify against, the Complex is about to destroy itself in an orgy of violence and mayhem.",
                  "The Commie Mutant Traitors are winning - the PCs must take steps to either adapt to the new order or to stop it.",
                  "{@sector_name} (or if you like, all of Alpha Complex) is just a simulation; nothing is physically real.",
                  "The PCs suspect that a High Programmer is out to get them.",
                  "This sector has a lot of clones who are 'unregistered' (they lack an official identity in Alpha Complex's databaes) and must survive on their own. These 'sinister clones' have sworn loyalty to {random_target} in return for support.",
                  "{@underdog_name}'s secret society is openly intervening in the crisis by sending military troops.",
                  "This mission is being recorded live by HPD&MC as part of a vidshow. The cameraperson may be a part of the PC's team as well.",
                  "{@building_name} secretly contain {interesting_items} (currently under the control of {random_target}). The Computer does not want them to fall into the wrong hands.",
                  "The Armed Forces is conducting a march in {@sector_name} (the goal: {march_reason})."

      interesting_items "nuclear warheads",
                        "warbot parts",
                        "laser barrels",
                        "bioweapons",
                        "secret documents",
                        "high-clearance generals",
                        "captured Communists",
                        "Vulturecrafts",
                        "ICBMs",
                        "plasma tanks",
                        "chemical weapons",
                        "combat armor parts",
                        "combat drugs",
                        "nanotechnology implants",
                        "experimental genetically engineered monsters",
                        "secret reports",
                        "unfilled termination vouchers and airstrike forms",
                        "Vulture Squadron Warriors"

      march_name "build morale",
                  "celebrate a victory",
                  "clear corridors of rioters",
                  "stress-test new construction",
                  "distract the population",
                  "flush out Commies",
                  "hide from Internal Security snoops",
                  "move troops to reactor shielding duty",
                  "honour fallen Hero of the Complex",
                  "run away from a disaster",
                  "sightseeing"

      two_rival_groups "Armed Forces and Internal Security", "Tech Services and Power Services", "PLC and R&D", "CPU and HPD&MC"

      killed "sliced" => 1..4,
              "diced" => 5..8,
              "burnt" => 9..12,
              "crushed" => 13..16,
              "disintegrated" => 17..20

      do_evil_hack_plan "destroy them" => 1..7,
                   "deliver them to their superiors" => 8..16,
                   "upload them to the Gray Subnets" => 17..20

      mutant_power "Machine Empathy", "Adhesive Skin", "Adrenalin Control", "Bureaucratic Intuition", "Charm", "Death Simulation", "Deep Thought", "Electroshock", "Empathy", "Energy Field", "Hypersenses", "Matter Eater", "Mechanical Intuition", "Mental Blast", "Pyrokinesis", "Regeneration", "Rubbery Bones", "Toxic Metabolism", "Uncanny Luck", "Ventriloquist"

      official_thugs "A Vulture Squadron", "An Internal Security squad"

      start %{
        **{mission_name}**

        *Background* - {background}

        *Mission Alert* - {mission_alert_delivery} {mission_alert_status}

        *Mission Briefing* - {briefing_room}

        *Mission* - {$mission}

        *Outfitting* - {outfitting}

        *R&D Equipment* - {experimental_object}

        *Complications* -
          1. {$complication}
          2. {$complication}
          3. {$complication}

        *Mission Debriefing* - {debriefing_room}

        *Secret Society Missions*:
        Anti-Mutant - {anti_mutant_mission}

        Computer Phreaks - {computer_phreak_mission}

        Communists - {communist_mission}

        Corpore Metal - {corpore_metal_mission}

        Death Leopard - {death_leopard_mission}

        FCCC-P - {fcccp_mission}

        Frankenstein Destroyers - {fd_mission}

        Free Enterprise - {fe_mission}

        Humanist - {humanist_mission}

        Illuminati - {illuminati_mission}

        Mystics - {mystics_mission}

        Pro Tech - {pro_tech_mission}

        Psion - {psion_mission}

        PURGE - {purge_mission}

        Romantics - {romantics_mission}

        Sierra Club - {sierra_club_mission}

        Spy For Another Alpha Complex - {spy_mission}

        Program Group - {program_group_mission}
      }

      generic_mission "Deliver {object} to {random_target}, as payment for 'service rendered'.", "Steal {@overdog_object_codename} from {@overdog_name}, as payback for their crimes against our society.", "Destroy {@building_name}. All of it. Burn it all to the ground.", "Comprehensively recon {random_target} and build up a dossier on them."

      anti_mutant_mission "{$generic_mission}" => 1..10,
                          "Find and assassinate the mutant {random_target}. Make sure to also provide proof of their mutant power as well." => 11..12,
                          "A member of your team has mutagens and plans to mutate loyal citizens! Augh! Don’t let anyone ingest any pharmaceuticals, unless you know for a fact what the chemicals are!" => 13..14,
                          "{random_target} is a mutant sympathizer, working to raise registered muties from second-class citizenship. Discredit or kill him!" => 15..16,
                          "One of our more-enthusiastic allies, {random_target}, is damaging a little too much Computer property and giving us a bad name. Stop him at once." => 17..18,
                          :anti_mutant_mission => 19..20

      computer_phreak_mission "{$generic_mission}" => 1..10,
                              "Always need more Wakey-Wakey and other anti-sleep drugs! Get a supply and drop it at our cache at {@building_name}." => 11..12,
                              "We used to do some business with {random_target}, but now we suspect that they are secretly an IntSec infiltrator. Check them out and, if necessary, delete them." => 13..14,
                              "This object ({unusual_object}) contains a datajack with a cool new trojan. Plug it into any confession booth at {@building_name} to run it." => 15..16,
                              "A certain isolated off-net terminal in {@building_name} has some cool data. Copy it and bring it back." => 17..18,
                              :computer_phreak_mission => 19..20

      communist_mission "{$generic_mission}" => 1..10,
                        "Rescue {random_target} from doom at the hands of the capitalist oppressors and recruit him to our great cause!" => 11..12,
                        "Pass out these propaganda leaflets to the oppressed INFRARED proletariat at {@building_name}. Try not to get caught, da?" => 13..14,
                        "Disrupt the power elite’s control over {@building_name}, and show the power of the people!" => 15..16,
                        "Equalize the distribution of wealth at {@building_name}. Plunder the fatted plutocrats and distribute their ill-gotten gains to the weak and helpless." => 17..18,
                        "Prevent your team from achieving their objective by any means necessary, but don’t allow your cover to be blown." => 19..20

      corpore_metal_mission "{$generic_mission}" => 1..10,
                            "See to it that no meatbag abuses any bots while you are around, and that {random_target} will never abuse any bot again, ever." => 11..12,
                            "Recode this specific robot ({@overdog_bot_codename}), and all the other bots you see, to liberate them from the dominion of their asimov circuits." => 13..14,
                            "Recruit this specific robot ({@overdog_bot_codename}) at {@building_name} into our organization. Do whatever it takes." => 15..16,
                            "Test this cybernetic bio-implant - on someone else. (GM Note: Bio-implant is {experimental_object})" => 17..18,
                            :corpore_metal_mission => 19..20

      death_leopard_mission "{$generic_mission}" => 1..10,
                            :death_leopard_mission => 11..12,
                            "If you were to, like, destroy or spray-paint or decorate {@building_name}, man, that would be moderately cool." => 13..14,
                            "Start a riot in {@building_name}. *Big* riot, get me? Looting brigades are awaiting your signal." => 15..16,
                            "We need more weapons! Here is a list of dropoff points throughout {@sector_name}. Route all of your team’s weapons to these places, where we can snag them." => 17..18,
                            "This vatslime {random_target} has been giving us grief. Blow him up really pretty, with style, get me?" => 19..20

      fcccp_mission  "{$generic_mission}" => 1..10,
                      :fcccp_mission => 11..12,
                      "Preach the Good Data to the unwashed INFRARED masses at every opportunity. Gain as many converts as possible." => 13..14,
                      "Convert {random_target} to our views, by whatever means necessary. Be of good faith! The Computer blesses your success!" => 15..16,
                      "Offerings have been critically low. Reap donations from the flock at {@sector_name}, that we may show them the light. Let us prey, brothers and sisters!" => 17..18,
                      "Persuade as many citizens as you can to confess in a confession booth. Confession is good for the [deleted for security reasons]." => 19..20

      fd_mission      "{$generic_mission}" => 1..10,
                      :fd_mission => 11..12,
                      "A shipment of bot parts is passing through {@building_name} at your destination; insert this explosive device into it. Then run very fast." => 13..14,
                      "Find this specific robot ({@overdog_bot_codename}) in {@building_name} and use these tools to reprogram it to serve our purposes. Heh, heh." => 15..16,
                      "Destroy all bots owned by {random_target} in {@building_name}." => 17..18,
                      "{random_target} will be at {@building_name}. Take these tools and program a robot ({@overdog_bot_codename}) to attack them. When the bot attacks, you rescue them. That should help you convert them to our cause." => 19..20

      fe_mission      "{$generic_mission}" => 1..10,
                      :fe_mission => 11..12,
                      "Carry {valuable_object} and sell it for the best price. We'll give you a commission." => 13..14,
                      "Get the PDC contact info of all your teammates and anyone else you can, so we can add them to our mailing list." => 15..16,
                      "Steal {@overdog_object_codename} from {@overdog_name} and deliver it to us so we can sell it on the IR Market." => 17..18,
                      "Word of mouth sells! Advertise the IR market availability of (product, service, etc.) any way you can. Infect high- clearance folks with this SellFast.D virus. They’ll be your best customers; they just can’t help themselves!" => 19..20

      humanist_mission "{$generic_mission}" => 1..10,
                      :humanist_mission => 11..12,
                      "Find this specific robot ({@overdog_bot_codename}) in {@building_name} and, using these tools, reprogram it to do our bidding." => 13..14,
                      "We need more weapons! Here is a list of dropoff points throughout {@sector_name}. Route all of your team’s weapons to these places, where we can snag them." => 15..16,
                      "We’ve discovered B3 is loaded with chemicals that make us subservient to the machines! Don’t let anyone drink it!" => 17..18,
                      "Take this EMP Bomb and plant it in {@building_name}.  Detonate it once you’re out of sight." => 19..20

      illuminati_mission  "{$generic_mission}" => 1..10,
                          :illuminati_mission => 11..12,
                          "Steal something vital to the mission and leave this ransom note in its place. Those who fufill the ransom will later be 'recruited' to our society." => 13..14,
                          "Acquire three compromising pictures of {random_target} and send them to this address. Three!" => 15..16,
                          "Start a riot in {@building_name}. 23 looting brigades are awaiting your signal." => 17..18,
                          "Secretly put this message in the pocket {random_target}. Don’t read it, or else. Ask no questions!" => 19..20

      mystics_mission "{$generic_mission}" => 1..10,
                      :mystics_mission => 11..12,
                      "Help bring more into the fold! Distribute this addictive drug among your team and anyone you meet. Yeah, okay, maybe it mutates them, but what a high!" => 13..14,
                      "For our newest brew we need an ingredient/drug stored in {@building_name}. Steal some and bring it back." => 15..16,
                      "{random_target} really needs to mellow out... permanently. Give him a hit of this drug so they can see the light, man. Oh, and have some yourself when you want." => 17..18,
                      "Seek a new high! Find and steal a substance or technique that makes you feel good. Then tell the gang about it!" => 19..20

      pro_tech_mission  "{$generic_mission}" => 1..10,
                        :pro_tech_mission => 11..12,
                        "Find a specific robot ({@overdog_bot_codename}) in {@building_name} and use this super-nifty PDC software and cable to reprogram it to do our bidding." => 13..14,
                        "In {@building_name}, hook this 6-10 little kit into the power grid. It diverts electricity to our base for a new project. If you see anything cool there, steal it." => 15..16,
                        "Plant this micro-camera in {@building_name} at your destination. We’ll monitor the stuff they create. While you’re there, steal their stuff." => 17..18,
                        "{random_target} has been stealing stuff from R&D, slowing the advance of nifty technologies. Find and kill him, then return the goods for further research." => 19..20

      psion_mission   "{$generic_mission}" => 1..10,
                      :psion_mission => 11..12,
                      "Assassinate {random_target}, a dangerous threat to our mutant brethen. Recover this valuable object ({valuable_object}) that they stole from us." => 13..14,
                      "Identify other mutants on your team and report them to us for potential recruitment. If they get in trouble, try to protect them." => 15..16,
                      "The way to power is practice, practice, practice. Employ your mutant power often, in new and inventive ways. Report your experiences to us." => 17..18,
                      "Administer this mutagen to other members of your team. It will give them a mutant power. Then recruit them into Psion." => 19..20

      purge_mission "{$generic_mission}" => 1..10,
                    "Plant this bomb in {@building_name}. Detonate when you’re far enough away." => 11..12,
                    "Prevent your team from achieving their objective by any means necessary, but don’t allow your cover to be blown." => 13..14,
                    "Replace your team’s happiness pills with these, which will spur them to destructive rampages." => 15..16,
                    "{random_target} is a friend of PURGE. Protect them at all costs as they complete their mission." => 17..18,
                    "Destroy Computer property and make it look like {random_target} (an enemy of PURGE) is responsible." => 19..20

      romantics_mission "{$generic_mission}" => 1..10,
                        :romantics_mission => 11..12,
                        "Spread the wonders and ideals of Old Reckoning times by acting like [character from a popular book, TV show, movie, comic or cartoon]." => 13..14,
                        "Take this radio transmitter and set it up in {@building_name} so we can broadcast Old Reckoning music throughout {@sector_name}." => 15..16,
                        "A Gray Subnet is rumored to have a copy of an Old Reckoning [song/vidtape/publication]. Download it when you get the chance, would you?" => 17..18,
                        "This rare tape preserves an Old Reckoning film. Find a way to copy it. Bring a dozen copies to our next meeting." => 19..20

      sierra_club_mission "{$generic_mission}" => 1..10,
                          :sierra_club_mission => 11..12,
                          "Help your teammates rediscover the joys of getting ‘down and dirty.’ Prevent the team hygiene officer from doing his job." => 13..14,
                          "Locate at least one exit to Outdoors and find out how well it’s guarded. Report back to us." => 15..16,
                          "Destroy power generators in {@sector_name} and distribute these miniature flame generators (candles) among the citizens to teach them the pleasure of ‘roughing it.’" => 17..18,
                          "Take this box of ‘insects’ [GM: ants? 16-20 bees? mutated termites that munch on metal?] and release them in {@building_name}." => 19..20

      spy_mission "{$generic_mission}" => 1..10,
                  "We suspect that {random_target} is an Internal Security plant spying on us. Dissuade them with extreme prejudice." => 11..12,
                  "Field-test this standard-issue {weapon}." => 13..14,
                  "Test new battle tactics in your next few combats and report back on results." => 15..16,
                  "Destroy {@building_name}, for the glory of the *true* Alpha Complex." => 17..18,
                  "Covertly help {random_target}, a shell-shocked veteran who had previous dealings with us, regain his confidence and loyalty." => 19..20

      program_group_mission "{$generic_mission}" => 1..10,
                            "Plant this bug on {random_target}, so we can gather backmail material on them." => 11..12,
                            "Openly pretend to be sworn enemies of {secret_society} so as to lure them out." => 13..14,
                            "Destroy *both* {@overdog_name} and {@underdog_name}. They're both a threat to our High Programmer patron." => 15..16,
                            "Our High Programmer's rivals are trying to make your mission fail. Do whatever you can to make sure it succeeds." => 17..18,
                            "Find this robot ({@overdog_bot_codename}) and tinker with it to make it loyal to our High Programmer." => 19..20
    end

  end

end