export const weapons = {
    tanto: {
        name: "Tanto (Knife)",
        attributes: ["One Handed", "Quick", "Piercing"],
        skill: "Small Blades",
        AM: 1,
        BM: 0,
        DM: 1,
        damage: {
            diceType: 4,
            diceNum: 1,
            damageMod: 2
        },
        range: 1,
        cost: 3
    },
    kunai :{
        name: "Kunai (Throwing Knife)",
        attributes: ["One Handed", "Thrown", "Quick"],
        skill: "Small Blades",
        AM: 1,
        BM: 0,
        DM: 0,
        damage : {
            diceType: 4,
            diceNum: 1,
            damageMod: 0
        },
        range: 1,
        cost: 1
    },
    shuriken: {
        name: "Shuriken",
        attributes: ["One Handed", "Thrown", "Quick"],
        skill: "Small Blades",
        AM: 2,
        BM: 0,
        DM: 0,
        damage: {
            diceType: 3,
            diceNum: 1,
            damageMod: 0
        },
        range: 1,
        cost: 0.4
    },
    wakizashi: {
        name: "Wakizashi (Short Sword)",
        attributes: ["One Handed", "Quick"],
        skill: "Swords",
        AM: 1,
        BM: 1,
        DM: 1,
        damage : {
            diceType: 6,
            diceNum: 1,
            damageMod: 2
        },
        range: 1,
        cost: 10
    },
    katana: {
        name: "Katana (Hand and a Half Sword)",
        attributes: ["One Handed", "Two Handed"],
        skill: "Swords",
        AM: 2,
        BM: 1,
        DM: 0,
        damage: {
            oneHanded: {
                diceType: 8
            },
            twoHanded: {
                diceType: 10
            },
            diceNum: 1,
            damageMod: 0
        },
        range: 1,
        cost: 20
    },
    nodachi: {
        name: "Nodachi (Field Sword)",
        attributes: ["Two Handed", "Sweeping"],
        skill: "Swords",
        AM: 2,
        BM: 1,
        DM: 0,
        damage: {
            diceType: 6,
            diceNum: 2,
            damageMod: 2
        },
        range: 2,
        cost: 40
    },
    kanabo: {
        name: "Kanabo (Great Club)",
        attributes: ["Two Handed", "Sweeping", "Concussive", "Cleaving"],
        skill: "Heavy Weapons",
        AM: 0,
        BM: 1,
        DM: -1,
        damage: {
            diceType: 4,
            diceNum: 4,
            damageMod: 1
        },
        range: 2,
        cost: 60
    },
    ono: {
        name: "Ono (Axe)",
        attributes: ["Two Handed", "Piercing", "Cleaving"],
        skill: "Heavy Weapons",
        AM: 1,
        BM: 2,
        DM: 0,
        damage: {
            diceType: 6,
            diceNum: 3,
            damageMod: 0
        },
        range: 2,
        cost: 20
    },
    otsuchi: {
        name: "Otsuchi (Warhammer)",
        attributes: ["Two Handed", "Concussive", "Cleaving"],
        skill: "Heavy Weapons",
        AM: 2,
        BM: 0,
        DM: 0,
        damage: {
            diceType: 8,
            diceNum: 2,
            damageMod: 2
        },
        range: 2,
        cost: 20
    },
    spear: {
        name: "Spear",
        attributes: ["Two Handed", "Thrusting", "Piercing"],
        skill: "Polearms",
        AM: 2,
        BM: 1,
        DM: -1,
        damage: {
            diceType: 10,
            diceNum: 1,
            damageMod: 0
        },
        range: 3,
        cost: 10
    },
    naginata: {
        name: "Naginata",
        attributes: ["Two Handed", "Sweeping", "Thrusting"],
        skill: "Polearms",
        AM: 1,
        BM: 1,
        DM: 0,
        damage: {
            diceType: 6,
            diceNum: 2,
            damageMod: 2
        },
        range: 3,
        cost: 50
    },
    staff: {
        name: "Staff",
        attributes: ["Two Handed", "Sweeping", "Concussive"],
        skill: "Polearms",
        AM: 1,
        BM: 1,
        DM: 1,
        damage: {
            diceType: 10,
            diceNum: 1,
            damageMod: 0
        },
        range: 3,
        cost: 1
    },
    sasumata: {
        name: "Sasumata",
        attributes: ["Two Handed", "Binding", "Piercing"],
        skill: "Polearms",
        AM: 2,
        BM: 1,
        DM: -1,
        damage: {
            diceType: 10,
            diceNum: 1,
            damageMod: 0
        },
        range: 3,
        cost: 20
    },
    kama: {
        name: "Kama",
        attributes: ["One Handed", "Piercing"],
        skill: "Exotics",
        AM: 2,
        BM: 1,
        DM: 0,
        damage: {
            diceType: 8,
            diceNum: 1,
            damageMod: 0
        },
        range: 1,
        cost: 5
    },
    tekkoKagi: {
        name: "Tekko-Kagi",
        attributes: ["One Hnaded", "Piercing"],
        skill: "Exotics",
        AM: 0,
        BM: 2,
        DM: 1,
        damage: {
            diceType: 4,
            diceNum: 1,
            damageMod: 2
        },
        range: 1,
        cost: 5
    },
    nunchaku: {
        name: "Nunchaku",
        attributes: ["One Handed", "Concussive", "Quick"],
        skill: "Exotics",
        AM: 0,
        BM: 2,
        DM: 0,
        damage: {
            diceType: 4,
            diceNum: 1,
            damageMod: 0
        },
        range: 1,
        cost: 2.5
    },
    kusariFundo: {
        name: "Kusari Fundo",
        attributes: ["Two Handed", "Sweeping"],
        skill: "Exotics",
        AM: 1,
        BM: 2,
        DM: -1,
        damage: {
            diceType: 4,
            diceNum: 1,
            damageMod: 0
        },
        range: 3,
        cost: 0.5
    },
    kusariGama: {
        name: "Kusari Gama",
        attributes: ["Two Handed", "Sweeping", "Piercing"],
        skill: "Exotics",
        AM: 2,
        BM: 2,
        DM: 0,
        damage: {
            damageChain: {
                diceType: 4
            },
            damageSickle: {
                diceType: 8
            },
            diceNum: 1,
            damageMod: 0
        },
        range: [1, 3],
        cost: 20
    },
    blowgun: {
        name: "Blow Gun",
        attributes: ["Two Handed", "Piercing"],
        skill: "Exotics",
        AM: 1,
        BM: 0,
        DM: 0,
        damage: {
            diceType: 0,
            diceNum: 0,
            damageMod: 1
        },
        range: 20,
        cost: 0.03
    },
    shortBow: {
        name: "Short Bow",
        attributes: ["Two Handed", "Quick", "Piercing"],
        skill: "Archery",
        AM: 1,
        BM: 0,
        DM: 0,
        damage: {
            diceType: 6,
            diceNum: 1,
            damageMod: 0
        },
        range: 100,
        cost: 20
    },
    halfBow: {
        name: "Half Bow",
        attributes: ["Two Handed", "Piercing"],
        skill: "Archery",
        AM: 1,
        BM: 0,
        DM: -1,
        damage: {
            diceType: 8,
            diceNum: 1,
            damageMod: 0
        },
        range: 150,
        cost: 40
    },
    longBow: {
        name: "Long Bow",
        attributes: ["Two Handed", "Piercing"],
        skill: "Archery",
        AM: 3,
        BM: 0,
        DM: -2,
        damage: {
            diceType: 10,
            diceNum: 1,
            damageMod: 0
        },
        range: 200,
        cost: 80
    },
    tanegashima: {
        name: "Tanegashima (Rifle)",
        attributes: ["Two Handed", "Piercing", "Black Powder"],
        skill: "Firearms",
        AM: -2,
        BM: 0,
        DM: 0,
        damage: {
            diceType: 6,
            diceNum: 2,
            damageMod: 3
        },
        range: 200,
        cost: 120
    },
    blunderbuss: {
        name: "Blunderbuss",
        attributes: ["Two Handed", "Piercing", "Black Powder"],
        skill: "Firearms",
        AM: -3,
        BM: 0,
        DM: 0,
        damage: {
            diceType: 6,
            diceNum: 4,
            damageMod: 3
        },
        range: 15,
        cost: 250
    },
    handMortar: {
        name: "Hand Mortar",
        attributes: ["Two Handed", "Black Powder", "Concussive"],
        skill: "Firearms",
        AM: -4,
        BM: 0,
        DM: 0,
        damage: {
            diceType: 0,
            diceNum: 0,
            damageMod: "varies"
        },
        range: 45,
        cost: 300
    },
    pistol: {
        name: "Pistol",
        attributes: ["One Handed", "Piercing", "Black Powder", "Quick"],
        skill: "Firearms",
        AM: -1,
        BM: 0,
        DM: 0,
        damage: {
            diceType: 6,
            diceNum: 1,
            damageMod: 4
        },
        range: 25,
        cost: 200
    }
}

export const weaponMods = new Map([
    ["One Handed", "The weapon can be held with only one hand."],
    ["Two Handed", "The weapon must be held with two hands."],
    ["Concussive", "Characters hit with an attack from a concussive weapon gain the Concussed effect."],
    ["Cleaving", "Characters attacked with a cleaving weapon get a penalty to all block checks, equal to 1/3 of the attacker's might."],
    ["Thrown", "Thrown weapons can be thrown by the user for a ranged attack, a distance equal 10 meters plus the thrower's might."],
    ["Quick", "Quick weapons are incredibly fast to use, and as such cost less one action point to use. If the character has only attacked with quick weapons, they can make one extra attack action past the basic action maximum per turn."],
    ["Sweeping", "Characters using sweeping weapons can choose to make a sweeping attack instead of a regular attack. When making a sweeping attack, the character can choose two targets instead of one, while taking a -2 penalty to hit. The roll to hit is performed once, and damage rolls are done seperately."],
    ["Thrusting", "Characters using thrusting weapons can choose to make a thrusting attack instead of a regular attack. When kaking a thrusting attack, the character deals an extra 4 damage, while taking a -2 penalty to hit."],
    ["Piercing", "Characters using piercing weapons ignore up to 2 points of armour when attacking."],
    ["Black Powder", "Black powder weapons are quite clunky to use, but the results speak for themselves. In order to use a Black Powder weapon, a character must have first used the Load action. In addition, Black powder weapons suffer a -2 to hit for every 10 meters from the user, beyond half of its range. Black powder weapons are so small and fast moving that Block reactions cannot be taken against them."],
    ["Binding", "Binding weapons are designed to trap and bind the opponent's weapons. Bind checks made with a Binding Weapon gain a +2 bonus."],
    ["Heavy", "Heavy weapons are unwieldy and cumbersome. Actions and reactions with Heavy Weapons cost 1 additional action point to use."]
])

