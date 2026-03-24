const classSelector = document.getElementById('charClassSelect')
const lifepathList = document.getElementById('lifepaths')
const lifeEventList = document.getElementById('lifeevents')
const lifeEventGenButton = document.getElementById('genLifeEvents')
const lifePathGenButton = document.getElementById('genLifepath')
const charAgeInput = document.getElementById('age')
console.log(charAgeInput.value)

const lifepathData = []
const lifeEventData = []

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

const ClassSkills = {
    Samurai: ["Swords","Leadership"],
    Mercenary: ["Polearms","Strength Feat"],
    Shinobi: ["Stealth","Disguise"],
    Priest: ["Religion","Medicine"],
    WarriorMonk: ["Religion","Exotics"],
    Merchant: ["Appraisal","Lie"],
    Performer: ["Theatre","Charm"],
    Pirate: ["Navigation","Firearms"],
    Hunter: ["Nature","Archery"],
    Scholar: ["Calligraphy","History"]
}

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

let currentClassSkills = ["", ""]

let charRomanceType = RomanceType.FLING;
let isAsexual = false

classSelector.addEventListener("change", () => {
    if (currentClassSkills != ["",""])
    {
        let prevousSkill1 = document.getElementById(currentClassSkills[0])
        let prevousSkill2 = document.getElementById(currentClassSkills[1])
        prevousSkill1.value = prevousSkill1.value - 5
        prevousSkill2.value = prevousSkill2.value - 5
    }
    let skill1 = ClassSkills[classSelector.value][0].toLowerCase()
    let skill2 = ClassSkills[classSelector.value][1].toLowerCase()
    currentClassSkills[0] = skill1
    currentClassSkills[1] = skill2
    let skillDOM1 = document.getElementById(skill1)
    let skillDOM2 = document.getElementById(skill2)
    skillDOM1.value = 5;
    skillDOM2.value = 5;
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

    createLifepathChar("Family Background", pickRandomFromArray(LifepathFamilyBackground))

    const familyTragedy = Boolean(Math.random() > 0.5)
    const familyTragedyText = familyTragedy ? pickRandomFromArray(LifepathFamilyTragedies) : "No family tragedy."
    createLifepathChar("Family Tragedy", familyTragedyText)

    createLifepathChar("Personality", pickRandomFromArray(LifepathPersonality))
    createLifepathChar("Valued Person", pickRandomFromArray(LifepathValuedPeople))
    createLifepathChar("Valued Concept", pickRandomFromArray(LifepathValuedConcepts))
    createLifepathChar("Outlook on Life", pickRandomFromArray(LifepathOutlook))
    createLifepathChar("Current Standing", pickRandomFromArray(LifepathCurrentStanding))
    createLifepathChar("Valued Possession", pickRandomFromArray(LifepathValuedPossession))
}

function createLifepathChar(characteristic, charEvent)
{
    let lifepathChar = characteristic + ": " + charEvent;
    const li = document.createElement('li')
    li.innerHTML = lifepathChar;
    lifepathList.appendChild(li);
}

function clearLifepathChar()
{
    lifepathList.innerHTML = ""
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
}

function init()
{
    "use strict"
    classSelectCreateList()
    //createLifepath(27)
}
window.onload = init