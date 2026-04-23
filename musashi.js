import { weapons } from "./weapons.js"
import { weaponMods } from "./weapons.js"
import { startingEquipment } from "./startingEquipment.js"

const classSelector = document.getElementById('charClassSelect')
const lifepathList = document.getElementById('lifepaths')
const lifeEventList = document.getElementById('lifeevents')
const lifeEventGenButton = document.getElementById('genLifeEvents')
const lifePathGenButton = document.getElementById('genLifepath')
const charAgeInput = document.getElementById('age')
const exportToClipboardBtn = document.getElementById('copyToClipboard')
const asexualCheck = document.getElementById('asexual')

const startPointsLabel = document.getElementById('startPoints')
const startPointsInput = document.getElementById('startPoints_label')
const remainingPointsLabel = document.getElementById('numPointsLeft')
const remainingPointsText = document.getElementById('numPointsLeft_label')
const statLabelDiv = document.getElementById('statLabels')

const equipmentSelector = document.getElementById('selectEquipment')
const equipmentList = document.getElementById('equipmentList')
const addEquipmentButton = document.getElementById('addEquipmentButton')
const clearEquipmentButton = document.getElementById('clearEquipmentButton')
const goldAmount = document.getElementById('goldCount')

const charName = document.getElementById('name')

let lifepathData = []
let lifeEventData = []

let equipmentData = []

let isOverbudget = false
let isUnderbudget = true

const classList = {
    Samurai: "Samurai",
    Mercenary: "Mercenary",
    Shinobi: "Shinobi",
    Priest: "Priest",
    WarriorMonk: "Warrior Monk",
    Merchant: "Merchant",
    Performer: "Performer",
    Pirate: "Pirate",
    Hunter: "Hunter",
    Scholar: "Scholar"
}
const skills = {
    might: {
        mig1: "Intimidation",
        mig2: "Resist Poison",
        mig3: "Strength Feat",
        mig4: "Swim"
    },
    reflex: {
        ref1: "Archery",
        ref2: "Artillery",
        ref3: "Brawling",
        ref4: "Climbing",
        ref5: "Dodge",
        ref6: "Exotics",
        ref7: "Firearms",
        ref8: "Heavy Weapons",
        ref9: "Horse Riding",
        ref10: "Polearms",
        ref11: "Piloting",
        ref12: "Small Blades",
        ref13: "Stealth",
        ref14: "Swords",
        ref15: "Unarmed"
    },
    intellect: {
        int1: "Appraisal",
        int2: "Artistry",
        int3: "Awareness",
        int4: "Blacksmiting",
        int5: "Calligraphy",
        int6: "Crafting",
        int7: "Disguise",
        int8: "Explosives",
        int9: "History",
        int10: "Insight",
        int11a: "Language 1",
        int11b: "Language 2",
        int11c: "Language 3",
        int12: "Magic",
        int13: "Medicine",
        int14: "Nature",
        int15: "Navigation",
        int16: "Persuade",
        int17a: "Play Instrument 1",
        int17b: "Play Instrument 2",
        int17c: "Play Instrument 3",
        int18: "Religion",
        int19a: "Specialty Knowledge 1",
        int19b: "Specialty Knowledge 2",
        int19c: "Specialty Knowledge 3",
        int20: "Tracking"
    },
    willpower: {
        wil1: "Leadership",
        wil2: "Resist Charms",
        wil3: "Resist Fear",
        wil4: "Resist Torture",
        wil5: "Threaten"
    },
    allure: {
        all1: "Charm",
        all2: "Lie",
        all3: "Poetry",
        all4: "Personal Grooming",
        all5: "Sing",
        all6: "Theatre",
        all7: "Wardrobe"
    }
}

const ClassSkills = new Map([
    ["samurai", ["swords","leadership"]],
    ["mercenary", ["polearms","strength_feat"]],
    ["shinobi", ["stealth","disguise"]],
    ["priest", ["religion","medicine"]],
    ["warriormonk", ["religion","exotics"]],
    ["merchant", ["appraisal","lie"]],
    ["performer", ["theatre","charm"]],
    ["pirate", ["navigation","firearms"]],
    ["hunter", ["nature","archery"]],
    ["scholar", ["calligraphy","history"]]
])

const LifepathFamilyBackground = [
    "Born to a family of farmers.",
    "Born to a family of fishermen.",
    "Born to a family of trained artisans.",
    "Born to a family of scholars",
    "Born to a family of merchants",
    "Born to a noble family.",
    "Born to a family of pirates.",
    "Born to a family of travelling performers.",
    "Born to a military family.",
    "The child of a regional lord.",
    "Raised in a monastery.",
    "Orphan which never knew their family."
]

const LifepathFamilyTragedies = [
    "Family was killed in war.",
    "Family was displaced by war.",
    "Family was displaced by famine.",
    "Village was displaced by natural disaster.",
    "Family died in plague.",
    "Family died in famine.",
    "Seperated from family by war.",
    "Family gave you up for money.",
    "Was abducted as a child by Pirates.",
    "Was abudcted as a child by Yokai."
]

const LifepathPersonality = [
    "Level-headed and calm.",
    "Hot-headed and impulsive.",
    "Shy and reclusive.",
    "Arrogant and loud.",
    "Airheaded and unobservant.",
    "Silly and non-serious.",
    "Sneaky and deceptive.",
    "Brooding and headstrong.",
    "Friendly and inclusive.",
    "Bumbling Buffoon."
]

const LifepathValuedPeople = [
    "A parental figure.",
    "A sibling.",
    "A mentor.",
    "A friend.",
    "A pet.",
    "A performer.",
    "Yourself.",
    "Nobody. (yet)",
    "The Shogun.",
    "A deity."
]

const LifepathValuedConcepts = [
    "Gold.",
    "Honour.",
    "Glory.",
    "Honesty.",
    "Love.",
    "Power.",
    "Camaraderie.",
    "Love.",
    "Vengeance.",
    "Justice."
]

const LifepathOutlook = [
    "Life is a canvas upon which great works may be made.",
    "Life is an eternal battlefield where only the strong survive.",
    "Life is a machine in which we all play a part.",
    "Life is a song, fleeting and beautiful.",
    "The universe was made to make us suffer.",
    "Life is a story waiting to be told.",
    "Life is meaningless, and nothing matters, that's a bad thing.",
    "Life is meaningless, and nothing matters, that's a good thing.",
    "Life is a great joke, and I'm not in on it.",
    "Life is like a good bottle of Sake."
]

const LifepathCurrentStanding = [
    "Your character is well respected.",
    "Your character is loved by the people around them.",
    "Your character is begrudgingly respected by those around them.",
    "Your character is not well respected by those around them.",
    "Your character is despised by their peers.",
    "Nobody likes your character."
]

const LifepathValuedPossession = [
    "weapon",
    "tool",
    "toy",
    "trinket",
    "piece of jewelry",
    "religious symbol",
    "letter",
    "mysterious stone",
    "piece of clothing",
    "musical instrument"
]

const LifepathEventType = [
    "Major Life Event",
    "Major Life Event",
    "Major Life Event",
    "Class Event",
    "Class Event",
    "Class Event",
    "Romantic Engagement",
    "Romantic Engagement",
    "Allies and Enemies",
    "Allies and Enemies",
    "Allies and Enemies",
    "Dull Year, Nothing Happened"
];

const LifepathMajorLifeEventDisasters = [
    "Imprisoned: your character was imprisoned for D6 months.",
    "Disfigured: your character suffered an injury that has disfigured their appearance. Subtract 1 from your character’s allure stat",
    "Death of a loved one: roll a D6. 1-2, a parent has died. 3-4 a friend has died. 5-6 a lover, child, or sibling has died.",
    "Addiction: your character has become addicted to a substance. Subtract 1 from their intellect.",
    "Hunted by the Law: people want your character caught, roll a D6 to determine who wants to catch you. 1-2 it’s just some local guards. 3-4 it’s the forces of a province. 5-6 the collection of a few provinces want you imprisoned.",
    "Hunted by Criminals: somebody wants yourhead, roll a D6 to see who does. 1-2 a local warlord wants blood. 3-4 a bandit crew wants something you have, money or otherwise. 5-6 some pirates have taken notice of you.",
    "Illness: you have contracted an illness, subtract 1 from your character’s might.",
    "Betrayal: a person you held in high regard has betrayed you.",
    "Debt: your character owes a debt to someone. The amount owed is equal to 1D10 gold.",
    "Major Debt: your character owes a lot of money to some bad people. They owe 1D10x10 gold",
    "Spiritual encounter: your character has a close encounter with spirits ghosts or demons. Subtract 1 from your character’s willpower.",
    "Abducted: your character was stolen from their home for D6 months."
]

const LifepathMajorLifeEventBenefits = [
    "Made extra money: your character gains 1D10 gold",
    "Picked up a new skill: select one skill your character doesn’t have, and you gain a 1 in it.",
    "Made good with a Warlord: a minor warlord has taken to liking you and owes you a favour.",
    "Befriended bandits: a group of local bandits appreciate what you’ve done for them. they owe you a favour.",
    "Pirates take an interest: a pirate crew have found you dependable. They owe you a favour.",
    "Local Lord grants a boon: you performed a good deed for the lord, and to thank you they gave a gift, roll a D6. 1-2, he gives you a horse and saddle. 3-4 he gave you a property in his city. 5-6 he gave you a farmstead in his territory.",
    "Mystic favours: somehow, you’ve pleased a spirit. They owe you one favour.",
    "Found treasure: your character has found a massive source of treasure. Your character gains 1D10x10 gold.",
    "Merchant’s favour: you did a particularly good deed for a merchant, and now they’ll offer you a discount.",
    "Trained under a master: choose one skill your character has, increase it by 1.",
    "Foreign friend: you befriended a foreigner. Your character learns one language of their choice.",
    "Treasure trove: your character found an enormous stash of wealth, equal to 1D10x15."
]

const SamuraiClassEvents = [
    "You brought much honour to your lord. (+1 to Leadership)",
    "You fought very valiantly in battle. (+1 to Swords)",
    "You gained fame.",
    "You brought minor dishonour upon yourself. (-1 to Leadership)",
    "You lost fame.",
    "Was out of combat (-1 to Swords)"
];

const MercenaryClassEvents = [
    "You learned a new weapon skill of your choice. (starts as a +1)",
    "You were richly rewarded. (1d10x2 gold)",
    "You won a contest of strength and gained fame.",
    "You lost a notable fight and lost fame.",
    "You lost a prominent contact.",
    "Didn't get much practice (-1 Polearms skill)"
]

const ShinobiClassEvents = [
    "You maintained a cover for an extended period. (+1 to Lie)",
    "You pulled off a stunning assassination. (+1 to Small Blades)",
    "You picked up a new skill for your cover. (starts at 1)",
    "Your cover was broken. (-1 to Lie)",
    "Failed Assassination attempt (-1 to Small Blades)",
    "Your lord has abandoned you."
]

const PriestClassEvents = [
    "Had an epiphany about the universe. (+1 to Magic)",
    "Discovered a truth of the world. (+1 to Nature)",
    "Had a holy experience. (+1 to Religion)",
    "Was guilty of earthly desires. (-1 Religion)",
    "Became an Apostate.",
    "Accused of Heresy."
]

const WarriorMonkClassEvents = [
    "Perfected a form. (+1 to one weapon skill)",
    "Practiced faith. (+1 to Religion)",
    "Fought a mystic creature. (+1 to Magic)",
    "Kicked out of a village.",
    "Faith questioned. (-1 to Religion)",
    "Minor injury lost you practice. (-1 to one Weapon Skill)"
]

const MerchantClassEvents = [
    "Good season of sales. (2d10x2 gold)",
    "Learned a new craft. (Brand new crafting skill, starts at 1.)",
    "Earned a Lord's favour.",
    "Lost sales. (-2d6 gold)",
    "Lost a Lord's favour.",
    "Wares were stolen. (-3d8 gold)"
]

const HunterClassEvents = [
    "Lots of contracts. (2d6+2 gold)",
    "Good hunting season. (+1 to Archery)",
    "Mystic encounter. (+1 to Magic)",
    "Bad season. (-2d6 gold)",
    "Harsh winter. (-1 to Nature)",
    "Lost a hunt."
]

const PerformerClassEvents = [
    "Particularly good performance. (1d12 gold)",
    "Gained a lot of fame.",
    "Gained a new skill. (start new skill at 1)",
    "Very bad performance. (-1 to Charm)",
    "Insulted a fellow performer.",
    "Lost fame."
]

const PirateClassEvents = [
    "Good Haul. (2d10 gold)",
    "Lots of practice at sea. (+1 Piloting)",
    "Sponsored by a lord.",
    "Raided by rival crew. (-2d6 gold)",
    "Hunted by the lord's armies.",
    "Taken prisoner. (1d6 months)",
]

const ScholarClassEvents = [
    "Studied a new field. (start new skill at 1)",
    "Found employ with a lord.",
    "Incredible discovery. (+1 to History)",
    "Made a controversal text.",
    "Published misinformation. (-1 to Calligraphy)",
    "Yokai stole your books. (those assholes)"
]

// Romance text: "You fell in love with a [RomancePerson]..."
// Quick fling: "... but it was only a quick fling."
// Tragic Ending: "... but they [RomanceTragedy]"
// Feelings: "...[RomanceFeelings]"

const RomancePerson = [
    "relative of a friend",
    "childhood friend",
    "former enemy",
    "career rival",
    "arranged marriage partner",
    "spirit in disguise"
]

const RomanceTragedy = [
    "died",
    "were stolen away",
    "ended things on bad terms",
    "went insane",
    "ran away",
    "were abducted by the Yokai"
]

const RomanceFeelings = [
    "But it's over, time to move on.",
    "You still have feelings for them.",
    "They still have feelings for you.",
    "You are mourning the loss to this day.",
    "You mutually hate each other.",
    "You both still have feelings for each other."
]

const RomanceType = {
    FLING: "fling",
    TRAGEDY: "tragedy",
    FEELINGS: "feelings"
}

const RomanceTypeArr = [
    "fling",
    "tragedy",
    "feelings"
]

// Ally text: "You made an ally from [AllyType]. They are a [AllyProfession]"

const AllyType = [
    "a rival",
    "a reunited childhood friend",
    "a former enemy",
    "a friend of a friend",
    "someone on the battlefield",
    "a former lover",
    "a mentor",
    "a distant relative",
    "a political enemy",
    "a mutual enemy"
];

const AllyProfession = [
    "samurai",
    "mercenary",
    "shinobi",
    "priest",
    "warrior monk",
    "hunter",
    "merchant",
    "performer",
    "pirate",
    "scholar"
]

// Enemy text: "You made an enemy out of a [EnemyType]. [EnemyMotive]"
const EnemyType = [
    "former friend",
    "former lover",
    "previous employer",
    "political rival",
    "ranking official",
    "warlord",
    "bandit captain",
    "pirate captain",
    "daimyo",
    "family member"
]

const EnemyMotive = [
    "They betrayed you.",
    "You betrayed them.",
    "You are on the wrong sides of a conflict.",
    "You brought them dishonour.",
    "They brought you dishonour.",
    "You foiled one of their plans.",
    "You humiliated them.",
    "You were romantic rivals.",
    "You caused them an injury.",
    "They caused you an injury."
]

const PassiveAbilities = [
    ["The Flow of War", 
        "When a Samurai kills a character in combat, they get a flow point, up to 5 flow points. Instead of spending an action points, the Samurai can instead use an equal number of flow points. The Samurai loses all Flow points at the end of combat."],
    ["Adrenaline", 
        "Whenever a Mercenary is in Combat, they gain a bonus to their Block and Dodge, equal to how many enemies are within 10 meters, up to a maximum of 5."],
    ["Shadow Stride",
        "While a Shinobi is hidden from sight, they gain a bonus to their movement speed equal to half their reflex."],
    ["Ordained Faith",
        "When an allied character enters the Dying state within 10 meters of the Priest, they receive an extra 2 turns on their countdown."],
    ["Unarmoured Defenses",
        "While the Warrior Monk is not wearing armour, they have a +2 to all dodge or block checks"],
    ["Insider Knowledge",
        "Merchants have intimate knowledge of their trade. the merchant gains a +5 While making an appraisal check on objects that relate to their trade of choice."],
    ["Captivating Presence",
        "While making a charm, Sing, Theatre, or play instrument check, all onlookers have a -5 on awareness checks to perceive anything other than you."],
    ["Tally Ho!",
        "When the Pirate takes the load action, it costs 1 less action point. In addition, Black Powder weapons only suffer a -1 instead of a -2 accuracy penalty."],
    ["Wounding Shot",
        "When the Hunter hits a character with a ranged attack, they only have to exceed half the target’s might in order to inflict an injury."],
    ["Studious",
        "After studying knowledge from written sources for 2 hours, the Scholar remembers all of it for the next week. The scholar can change what they’ve memorized by studying another text, and they will then memorize it for a week."]
]

const PassiveAbilitesClasses = new Map(
    [
        ["samurai", PassiveAbilities[0]],
        ["mercenary", PassiveAbilities[1]],
        ["shinobi", PassiveAbilities[2]],
        ["priest", PassiveAbilities[3]],
        ["warriormonk", PassiveAbilities[4]],
        ["merchant", PassiveAbilities[5]],
        ["performer", PassiveAbilities[6]],
        ["pirate", PassiveAbilities[7]],
        ["hunter", PassiveAbilities[8]],
        ["scholar", PassiveAbilities[9]]
    ]
)

const ActiveAbilities = [
    ["Rallying Cry",
        "The Samurai lets loose a Rallying cry. The samurai loses all Flow points they’ve accumulated, and all their allies gain Flow points equal to the amount lost. The samurai also gains a bonus to Dodge, Block and attack equal to the lost Flow point for the rest of the encounter. This ability can only be used once per combat."
    ],
    ["Adrenaline Rush",
        "The Mercenary’s adrenaline reaches an all time high. The Mercenary may activate their adrenaline rush, gaining adrenaline points equal to their Might. Whenever the Mercenary takes damage, they may instead sacrifice an equal number of Adrenaline points instead of Hit Points. The warrior can only use this ability once per combat."
    ],
    ["Marked For Death",
        "The Shinobi selects a target while hidden. When they make an attack against the target, they gain a +5 to hit, and they deal an 5 extra damage but when they attack, they reveal themselves."
    ],
    ["Commune",
        "The Priest enters a meditative state. While in this state, they open themselves up to the spirit world around them. They gain a +5 awareness on checks for supernatural phenomenon, and they can sense spirits around them, within 3 kilometers, though their precise locations, and the type of spirit are unknown. This ability can only be used once per day."
    ],
    ["Fighting Trance",
        "The Monk enters a nearly meditative state during combat. Until combat ends, whenever the Monk Succeeds on a Dodge or block check, they can make a Counterattack reaction for free, once per turn."
    ],
    ["Art of the Deal",
        "The Merchant starts to spread word of how good their wares are. During a period of 6 hours, the Merchant makes a Charm roll, and consult below 10 or lower: a crowd of D6+3 people have gathered to see what you’ve got. 11-15 2D6+3 people have gathered. 16-20 3D6+3 people have gathered. 21-29 4D6+3 people have gathered. 30 or higher the entire town has gathered to see your wares. You can make a charm roll afterwards to see how many people have been won over"
    ],
    ["Enrapturing Performance",
        "The Performer makes an incredible performance, that would have the emperor shed a tear. They automatically succeed on their sing, Theatre, or Play Instrument check, and for the next two days after the performance, all charm checks made by the performer have a +5. This ability can only be used once a week."
    ],
    ["Part of the Ship, Part of the Crew!",
        "A good captain always takes care of the crew. When this ability is activated, all allies within 5m of the captain gain a +2 to all weapons checks. in addition, the spot reaction can be taken for free once per turn, and the Help and Give Aid actions become Simple instead of complex."
    ],
    ["Let the Hunt Begin",
        "The Hunter selects a target within 20m. The Hunter and their allies gain a +3 on attacks against them, and their attacks deal an extra 2 damage."
    ],
    ["Knowledge Retention",
        "While the Scholar has a text memorized, they gain the respective skill for the duration. The skill can be up to a +3 depending on the text and cannot be a skill they already possess."
    ]
]

const ActiveAbilitiesClasses = new Map(
    [
        ["samurai", ActiveAbilities[0]],
        ["mercenary", ActiveAbilities[1]],
        ["shinobi", ActiveAbilities[2]],
        ["priest", ActiveAbilities[3]],
        ["warriormonk", ActiveAbilities[4]],
        ["merchant", ActiveAbilities[5]],
        ["performer", ActiveAbilities[6]],
        ["pirate", ActiveAbilities[7]],
        ["hunter", ActiveAbilities[8]],
        ["scholar", ActiveAbilities[9]]
    ]
)

let currentClassSkills = new Array("", "")

let charRomanceType = RomanceType.FLING;
let isAsexual = false

classSelector.addEventListener("change", () => {
    setAbilities(classSelector.value.toLowerCase())

    addClassSkillValues()
    setStarterEquipment()
});

lifeEventGenButton.onclick = (event) =>
{
    event.preventDefault()
    const ageInput = document.getElementById('age').value
    console.log("its being clicked at least at age " + ageInput)
    createLifeEvents(ageInput || 0)
}

lifePathGenButton.onclick = (event) =>
{
    event.preventDefault()
    createLifepathCharacteristics()
}

exportToClipboardBtn.onclick = (event) =>
{
    event.preventDefault()
    exportToClipboard()
}

asexualCheck.onclick = (event) =>
{
    isAsexual = asexualCheck.checked
}

addEquipmentButton.onclick = (event) =>
{
    event.preventDefault()
    console.log(equipmentSelector.textContent)
    addEquipmentToEquipmentList(equipmentSelector.value)
}

clearEquipmentButton.onclick = (event) =>
{
    clearEquipment()
}

statLabelDiv.addEventListener("input", (e) => {
    if (!e.target.matches('input[type="number"]')) {
        return;
    }
    reactToStatChange()
})

startPointsInput.addEventListener("input", (e) =>{
    if (!e.target.matches('input[type="number"]')) {
        return;
    }
    reactToStatChange()
})

function reactToStatChange()
{
    let statPointsCurrent = 0
    statLabelDiv.querySelectorAll('input[type="number"]').forEach(input => {
        statPointsCurrent += Number(input.value)
    })
    const statPointsLeft = Number(startPointsLabel.value)
    remainingPointsLabel.value = Number(statPointsLeft - statPointsCurrent)
    remainingPointsLabel.textContent = remainingPointsLabel.value
    const remaining = remainingPointsLabel.value
    isOverbudget = remaining < 0;
    isOverbudget ? remainingPointsText.style.color = "red" : remainingPointsText.style.color = "black"
    isUnderbudget = remaining > 0;
}

function pickRandomFromArray(arr)
{
    return arr[Math.floor(Math.random()*arr.length)];
}

function rollDice(diceNum, numOfDice, mod)
{
    let result = 0;
    for (let i = 0; i < numOfDice; i++)
    {
        result += Math.floor(Math.random() * diceNum) + 1;
    }
    result += mod;
    return result;
}

function returnClassStringAsObj(className)
{
    const lowerCaseClassName = className.toLowerCase();
    // I hate this!
    switch(lowerCaseClassName)
    {
        case "samurai":
            return classList.Samurai;
            break;
        case "mercenary":
            return classList.Mercenary;
            break;
        case "shinobi":
            return classList.Shinobi;
            break;
        case "warriormonk":
            return classList.WarriorMonk;
            break;
        case "priest":
            return classList.Priest;
            break;
        case "performer":
            return classList.Performer;
            break;
        case "merchant":
            return classList.Merchant;
            break;
        case "hunter":
            return classList.Hunter;
            break;
        case "pirate":
            return classList.Pirate;
            break;
        case "scholar":
            return classList.Scholar;
            break;
        default:
            console.error("Error: Invalid class string. Did you forget to make it all lowercase?");
            break;
    }
}

function addToSkill(skill, mod, set = false)
{
    let docSkill = document.getElementById(skill)
    if (set)
    {
        docSkill.value = mod;
    }
    else
    {
        docSkill.value = Math.max(Number(docSkill.value) + mod, 0)
    }
    console.log("adding " + mod + " to " + skill);
}

function majorLifeEventString()
{
    const isDisaster = Boolean(Math.random() <= 0.5)
    if (isDisaster)
    {
        return pickRandomFromArray(LifepathMajorLifeEventDisasters)
    }
    else
    {
        return pickRandomFromArray(LifepathMajorLifeEventBenefits)
    }
}

function classEventString()
{
    const className = classSelector.value
    switch (className)
    {
        case "Samurai":
            return pickRandomFromArray(SamuraiClassEvents)
            break;
        case "Mercenary":
            return pickRandomFromArray(MercenaryClassEvents)
            break;
        case "Shinobi":
            return pickRandomFromArray(ShinobiClassEvents)
            break;
        case "Priest":
            return pickRandomFromArray(PriestClassEvents)
            break;
        case "WarriorMonk":
            return pickRandomFromArray(WarriorMonkClassEvents)
            break;
        case "Pirate":
            return pickRandomFromArray(PirateClassEvents)
            break;
        case "Hunter":
            return pickRandomFromArray(HunterClassEvents)
            break;
        case "Scholar":
            return pickRandomFromArray(ScholarClassEvents)
            break;
        case "Performer":
            return pickRandomFromArray(PerformerClassEvents)
            break;
        case "Merchant":
            return pickRandomFromArray(MerchantClassEvents)
            break;
    }
}

function romanceString()
{
    const romType = pickRandomFromArray(RomanceTypeArr)
    let romText = romType === "tragedy" ? pickRandomFromArray(RomanceTragedy) : pickRandomFromArray(RomanceFeelings)
    return getRomanceString(pickRandomFromArray(RomancePerson), romType, romText)
}

function getRomanceString(person, romanceType, extraString = "")
{
    console.log("Romance type " + romanceType)
    let romanceFate = "You fell in love with a " + person;
    switch(romanceType)
    {
        case "fling":
            romanceFate += ", but it was only a quick fling."
            break;
        case "tragedy":
            romanceFate += ", but they " + extraString + "."
            break;
        case "feelings":
            romanceFate += ". " + extraString
            break;
    }
    return romanceFate;
}

function allyEnemyString()
{
    const decide = (Math.random() >= 0.5)
    if (decide)
    {
        return allyString(pickRandomFromArray(AllyType), pickRandomFromArray(AllyProfession));
    }
    else
    {
        return enemyString(pickRandomFromArray(EnemyType), pickRandomFromArray(EnemyMotive));
    }
}

function allyString(person, profession) 
{
    return "You made an ally from " + person + ". They are a " + profession + ".";
}

function enemyString(person, motive)
{
    return "You made an enemy from a " + person + ". " + motive;
}

function classSelectCreateList()
{
    "use strict";
    let classSelect = document.getElementById("charClassSelect");
    Object.keys(classList).forEach(cls => {
        const option = document.createElement("option");
        option.value = cls;
        option.textContent = cls;
        classSelect.appendChild(option);
    });
    addClassSkillValues()
}

function addEquipmentToDropdown()
{
    "use strict"
    let equipmentSelect = document.getElementById("selectEquipment");
    Object.entries(weapons).forEach(([key, weapon]) => {
        const option = document.createElement("option")
        option.value = key;
        option.textContent = weapon.name;
        console.log(option)
        equipmentSelect.appendChild(option);
    })
}

function addEquipmentToEquipmentList(equip, amount = -1)
{
    console.log(weapons[equip])
    // why do i have a feeling this line of code right here will punish me later (4/20/2026)
    if (weapons[equip] === undefined)
    {
        let newEquipment
        if (amount !== -1)
        {
            newEquipment = equip + " x" + amount
        }
        else
        {
            newEquipment = equip
        }
        const li = document.createElement('li')
        li.innerHTML = newEquipment;
        equipmentList.appendChild(li);
        equipmentData.push(newEquipment)
        return newEquipment
    }
    const theWeapon = weapons[equip]
    let equipmentChar = theWeapon.name
    equipmentChar += " | Attributes: "
    for (let i = 0; i < weapons[equip].attributes.length; i++)
    {
        equipmentChar += theWeapon.attributes[i];
        if (i !== theWeapon.attributes.length - 1) { equipmentChar += ", "}
        else {equipmentChar += " "}
    }
    equipmentChar += " | Skill: " + theWeapon.skill
    equipmentChar += " | AM: " + theWeapon.AM + " | BM: " + theWeapon.BM + " | DM: " + theWeapon.DM + " | "
    // handle edge cases
    switch(equip)
    {
        case "katana":
            equipmentChar += "Damage: " + theWeapon.damage.diceNum + "d" + theWeapon.damage.oneHanded.diceType + " (One Handed), "
            equipmentChar += theWeapon.damage.diceNum + "d" + theWeapon.damage.twoHanded.diceType + " (Two Handed) "
            break;
        case "kusariGama":
            equipmentChar += "Damage: " + theWeapon.damage.diceNum + "d" + theWeapon.damage.damageChain.diceType + " (Chain), "
            equipmentChar += theWeapon.damage.diceNum + "d" + theWeapon.damage.damageSickle.diceType + " (Sickle) "
            break;
        case "handMortar":
            equipmentChar += "Damage: Varies "
            break;
        default:
            equipmentChar += "Damage: " + theWeapon.damage.diceNum + "d" + theWeapon.damage.diceType;
            if (theWeapon.damage.damageMod > 0) { equipmentChar += "+" + theWeapon.damage.damageMod}
            equipmentChar += " "
            break;
    }
    equipmentChar += " | Range: " + theWeapon.range + "m ";
    equipmentChar += " | Cost: " + theWeapon.cost + " gold"
    if (amount !== -1) { equipmentChar += " | (x" + amount + ")"}
    const li = document.createElement('li')
    li.innerHTML = equipmentChar
    equipmentList.appendChild(li);
    equipmentData.push(equipmentChar)
    return equipmentChar;
}

function setGold(gold)
{
    goldAmount.value = gold;
}

function clearEquipment()
{
    equipmentList.innerHTML = ""
    equipmentData = []
}

function setStarterEquipment()
{
    clearEquipment()
    const musashiClass = classSelector.value.toLowerCase()
    const classEquipment = startingEquipment[musashiClass];

    setGold(classEquipment.gold)
    for (let i = 0; i < classEquipment.weapons.length; i++)
    {
        if (Array.isArray(classEquipment.weapons[i]))
        {
            console.log("There are multiple!")
            addEquipmentToEquipmentList(classEquipment.weapons[i][0], classEquipment.weapons[i][1])
        }
        else {addEquipmentToEquipmentList(classEquipment.weapons[i])}
    }
    // weapon choices (will be random for now)
    if (classEquipment.weaponsChoice.length !== 0) {addEquipmentToEquipmentList(pickRandomFromArray(classEquipment.weaponsChoice))}
    for (let j = 0; j < classEquipment.equipment.length; j++)
    {
        addEquipmentToEquipmentList(classEquipment.equipment[j])
    }
}

function addClassSkillValues()
{
    console.log(currentClassSkills.at(0))
    console.log(currentClassSkills[0])
    if (currentClassSkills.at(0) !== "")
    {
        addToSkill(currentClassSkills[0], -5)
        addToSkill(currentClassSkills[1], -5)
    }
    const lowerCaseClass = classSelector.value.toLowerCase()
    const firstClassSkill = ClassSkills.get(lowerCaseClass)[0]
    const secondClassSkill = ClassSkills.get(lowerCaseClass)[1]
    currentClassSkills[0] = firstClassSkill;
    currentClassSkills[1] = secondClassSkill;
    console.log(currentClassSkills[0])
    if (Number(document.getElementById(currentClassSkills[0]).value) === 0) {addToSkill(currentClassSkills[0], 5)}
    if (Number(document.getElementById(currentClassSkills[1]).value) === 0) {addToSkill(currentClassSkills[1], 5)}
}

function setStartingStatPoints(points)
{   
    remainingPointsLabel.textContent = points
}

function addStartingStatPoints(points)
{
    remainingPointsLabel.textContent = Number(remainingPointsLabel.textContent) + points
}

function createLifepath(age = 0)
{
    if (age === 0)
    {
        age = rollDice(12, 1, 16);
    }

    // TODO: Clear lifepath

    // Create lifepath
    createLifeEvents(age)
}

function createLifepathCharacteristics()
{
    clearLifepathChar()

    lifepathData.push(createLifepathChar("Family Background", pickRandomFromArray(LifepathFamilyBackground)))

    const familyTragedy = Boolean(Math.random() > 0.5)
    const familyTragedyText = familyTragedy ? pickRandomFromArray(LifepathFamilyTragedies) : "No family tragedy."
    lifepathData.push(createLifepathChar("Family Tragedy", familyTragedyText))

    lifepathData.push(createLifepathChar("Personality", pickRandomFromArray(LifepathPersonality)))
    lifepathData.push(createLifepathChar("Valued Person", pickRandomFromArray(LifepathValuedPeople)))
    lifepathData.push(createLifepathChar("Valued Concept", pickRandomFromArray(LifepathValuedConcepts)))
    lifepathData.push(createLifepathChar("Outlook on Life", pickRandomFromArray(LifepathOutlook)))
    lifepathData.push(createLifepathChar("Current Standing", pickRandomFromArray(LifepathCurrentStanding)))
    lifepathData.push(createLifepathChar("Valued Possession", pickRandomFromArray(LifepathValuedPossession)))
}

function createLifepathChar(characteristic, charEvent)
{
    let lifepathChar = characteristic + ": " + charEvent;
    const li = document.createElement('li')
    li.innerHTML = lifepathChar;
    lifepathList.appendChild(li);
    return lifepathChar
}

function clearLifepathChar()
{
    lifepathList.innerHTML = ""
    lifepathData = []
}

function createLifeEvents(age)
{
    clearLifeEvents();
    for (let i = 17; i<age; i++)
    {
        let newLifeEvent = createLifeEvent(i)
        const li = document.createElement('li')
        li.innerHTML = newLifeEvent;
        lifeEventList.appendChild(li)
        lifeEventData.push(newLifeEvent)
    }
}

function createLifeEvent(age)
{
    const lifeEventIndex = Math.floor(Math.random()*(LifepathEventType.length))

    let lifeEvent = age + ": ";
    switch (lifeEventIndex)
    {
        case 0:
        case 1:
        case 2:
            // Major Life Event
            console.log("Major Life Event")
            lifeEvent += majorLifeEventString()
            break;
        case 3:
        case 4:
        case 5:
            // Class Event
            console.log("Class Event")
            lifeEvent += classEventString()
            break;
        case 6:
        case 7:
            // Romance Event
            console.log("Romance Event")
            if (isAsexual)
            {
                lifeEvent += majorLifeEventString()
            }
            else
            {
                lifeEvent += romanceString()
            }
            break;
        case 8:
        case 9:
        case 10:
            // Ally/Enemy Event
            console.log("Ally/Enemy Event")
            lifeEvent += allyEnemyString()
            break;
        case 11:
            // nothing ever happens
            lifeEvent += "Dull year. Nothing happened."
            break;
        default:
            lifeEvent += "ERROR: life event index out of range at " + lifeEventIndex + "."
    }
    return lifeEvent
}

function clearLifeEvents()
{
    lifeEventList.innerHTML = ""
    lifeEventData = []
}

function getLifepathAsString()
{
    return lifepathData.join("\n")
}

function getLifeEventsAsString()
{
    return lifeEventData.join("\n")
}

function setAbilities(charClass)
{
    console.log(PassiveAbilitesClasses.get(charClass))
    document.getElementById('passive_name').innerText = PassiveAbilitesClasses.get(charClass)[0]
    document.getElementById('passive_ability_text').innerText = PassiveAbilitesClasses.get(charClass)[1]
    document.getElementById('active_name').innerText = ActiveAbilitiesClasses.get(charClass)[0]
    document.getElementById('active_ability_text').innerText = ActiveAbilitiesClasses.get(charClass)[1]
}

function exportToClipboard()
{
    let characterClipboardText = ""

    // NAME, AGE, CLASS
    characterClipboardText += "NAME: " + charName.value
    characterClipboardText += "\nCLASS: " + document.getElementById('charClassSelect').value
    characterClipboardText += "\nAGE: " + document.getElementById('age').value

    // BASIC STATS
    characterClipboardText += "\n\nMight: " + document.getElementById('charMig').value + ", Reflex: " + document.getElementById('charRef').value
    characterClipboardText += ", Intellect: " + document.getElementById('charInt').value + ", Willpower: " + document.getElementById('charWil').value
    characterClipboardText += ", Allure: " + document.getElementById('charAll').value

    // SKILLS (kill me)
    characterClipboardText += "\n\nIntimidation: " + document.getElementById('intimidation').value
    characterClipboardText += "\tResist Poison: " + document.getElementById('resist_poison').value
    characterClipboardText += "\tStrength Feat: " + document.getElementById('strength_feat').value
    characterClipboardText += "\tSwim: " + document.getElementById('swim').value

    characterClipboardText += "\n\nArchery: " + document.getElementById('archery').value
    characterClipboardText += "\tArtillery: " + document.getElementById('artillery').value
    characterClipboardText += "\tBrawling: " + document.getElementById('brawling').value
    characterClipboardText += "\tClimbing: " + document.getElementById('climbing').value
    characterClipboardText += "\tDodge: " + document.getElementById('dodge').value
    characterClipboardText += "\tExotics: " + document.getElementById('exotics').value
    characterClipboardText += "\tFirearms: " + document.getElementById('firearms').value
    characterClipboardText += "\tHeavy Weapons: " + document.getElementById('heavy_weapons').value
    characterClipboardText += "\tHorse Riding: " + document.getElementById('horse_riding').value
    characterClipboardText += "\tPolearms: " + document.getElementById('polearms').value
    characterClipboardText += "\tPiloting: " + document.getElementById('piloting').value
    characterClipboardText += "\tSmall Blades: " + document.getElementById('small_blades').value
    characterClipboardText += "\tStealth: " + document.getElementById('stealth').value
    characterClipboardText += "\tSwords: " + document.getElementById('swords').value
    characterClipboardText += "\tUnarmed: " + document.getElementById('unarmed').value

    characterClipboardText += "\n\nAppraisal: " + document.getElementById('appraisal').value
    characterClipboardText += "\tArtistry: " + document.getElementById('artistry').value
    characterClipboardText += "\tAwareness: " + document.getElementById('awareness').value
    characterClipboardText += "\tBlacksmithing: " + document.getElementById('blacksmiting').value
    characterClipboardText += "\tCalligraphy: " + document.getElementById('calligraphy').value
    characterClipboardText += "\tCrafting: " + document.getElementById('crafting').value
    characterClipboardText += "\tDisguise: " + document.getElementById('disguise').value
    characterClipboardText += "\tExplosives: " + document.getElementById('explosives').value
    characterClipboardText += "\tHistory: " + document.getElementById('history').value
    characterClipboardText += "\tInsight: " + document.getElementById('insight').value
    characterClipboardText += "\tLanguage 1: " + document.getElementById('languages1').value
    characterClipboardText += "\tLanguage 2: " + document.getElementById('languages2').value
    characterClipboardText += "\tLanguage 3: " + document.getElementById('languages3').value
    characterClipboardText += "\tMagic: " + document.getElementById('magic').value
    characterClipboardText += "\tMedicine: " + document.getElementById('medicine').value
    characterClipboardText += "\tNavigation: " + document.getElementById('navigation').value
    characterClipboardText += "\tPersuade: " + document.getElementById('persuade').value
    characterClipboardText += "\tPlay Instrument 1: " + document.getElementById('play_instrument1').value
    characterClipboardText += "\tPlay Instrument 2: " + document.getElementById('play_instrument2').value
    characterClipboardText += "\tPlay Instrument 3: " + document.getElementById('play_instrument3').value
    characterClipboardText += "\tReligion: " + document.getElementById('religion').value
    characterClipboardText += "\tSpecialty Knowledge 1: " + document.getElementById('specialty_knowledge1').value
    characterClipboardText += "\tSpecialty Knowledge 2: " + document.getElementById('specialty_knowledge2').value
    characterClipboardText += "\tSpecialty Knowledge 3: " + document.getElementById('specialty_knowledge3').value
    characterClipboardText += "\tTracking: " + document.getElementById('tracking').value

    characterClipboardText += "\n\nLeadership: " + document.getElementById('leadership').value
    characterClipboardText += "\tResist Charms: " + document.getElementById('resist_charms').value
    characterClipboardText += "\tResist Fear: " + document.getElementById('resist_fear').value
    characterClipboardText += "\tResist Torture: " + document.getElementById('resist_torture').value
    characterClipboardText += "\tThreaten: " + document.getElementById('threaten').value

    characterClipboardText += "\n\nCharm: " + document.getElementById('charm').value
    characterClipboardText += "\tLie: " + document.getElementById('lie').value
    characterClipboardText += "\tPoetry: " + document.getElementById('poetry').value
    characterClipboardText += "\tPersonal Grooming: " + document.getElementById('personal_grooming').value
    characterClipboardText += "\tSing: " + document.getElementById('sing').value
    characterClipboardText += "\tTheatre: " + document.getElementById('theatre').value
    characterClipboardText += "\tWardrobe: " + document.getElementById('wardrobe').value
    
    // LIFEPATH
    characterClipboardText += "\n\nLIFEPATH:\n" + getLifepathAsString()
    characterClipboardText += "\n\nLIFE EVENTS:\n" + getLifeEventsAsString()

    // EQUIPMENT
    characterClipboardText += "\n\nEQUIPMENT:\n"
    for (let i = 0; i < equipmentData.length; i++)
    {
        characterClipboardText += "- " + equipmentData[i] +"\n";
    }
    characterClipboardText += "\nGOLD: " + goldAmount;

    // PLAYER NOTES
    characterClipboardText += "\n\nOTHER NOTES:\n"
    characterClipboardText += document.getElementById('otherNotesBox').value

    navigator.clipboard.writeText(characterClipboardText)
}

function init()
{
    "use strict"
    classSelectCreateList()
    addEquipmentToDropdown()
    setAbilities(classSelector.value.toLowerCase())
    setStarterEquipment()
    reactToStatChange()
}
window.onload = init