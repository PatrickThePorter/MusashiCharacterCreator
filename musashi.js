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

function classSelectCreateList()
{
    "use strict";
    let classSelect = document.getElementById("charClass");
    const classLength = Object.keys(classList).length;
    const classes = Object.keys(classList);
    for (let i = 0; i < classLength; i++)
    {
        let option = document.createElement("option");
        option.value = i;
        option.textContent = classes[i];
        classSelect.appendChild(option);
    }
}

function setClassSkills(charClass)
{
    
}

function init()
{
    "use strict"
    classSelectCreateList()
}
window.onload = init