export const startingEquipment = {
    "samurai": {
        gold: 25,
        weapons: ["katana", "wakizashi", "tanto"],
        weaponsChoice: ["spear", "halfBow", ["kunai", 5]],
        equipment: ["Medium Helmet", "Medium Breastplate", "Medium Bracers", "Medium Greaves", "Horse", "Saddle", ["Saddle Bags", 5], "Rations", "Bedding Roll"],
        equipmentFunds: 545
    },
    "mercenary": {
        gold: 15,
        weapons: ["kanabo", "wakizashi", "tanto"],
        weaponsChoice: [["shortBow", ["Arrow", 20]], ["tanegashima", ["Bullet", 20]]],
        equipment: ["Light Breastplate", "Light Greaves", "Light Bracers", "Horse", "Saddle Bag", "Rations", "Bedding Roll"],
        equipmentFunds: 400
    },
    "shinobi": {
        gold: 10,
        weapons: ["tanto"],
        weaponsChoice: [["kunai", 5], ["shuriken", 5]],
        equipment: ["Bag", "Rations", "Bedding Roll", "12m of Rope", "Grappling"],
        equipmentFunds: 120
    },
    "priest": {
        gold: 5,
        weapons: ["tanto", "staff"],
        weaponsChoice: [],
        equipment: ["Religious Symbol", "Bag", "Healer's Kit", "Rations", "Bedding Roll"],
        equipmentFunds: 50
    },
    "warriorMonk": {
        gold: 10,
        weapons: ["naginata", "tanto"],
        weaponsChoice: [],
        equipment: ["Religious Symbol", "Bag", "Healer's Kit", "Rations", "Bedding Roll"],
        equipmentFunds: 100
    },
    "merchant": {
        gold: 35,
        weapons: ["tanto"],
        weaponsChoice: [],
        equipment: ["Horse", "4-Person Cart", "Wares equal to 50 Gold", "Rations", "Bedding Roll"],
        equipmentFunds: 600
    },
    "hunter": {
        gold: 15,
        weapons: ["halfBow", ["Arrow", 20], "wakizashi", "tanto"],
        weaponsChoice: [],
        equipment: ["Light Breastplate", "Light Helmet","Horse", ["Saddle Bags", 5], "Rations", "Bedding Roll", "Waterskin"],
        equipmentFunds: 250
    },
    "performer": {
        gold: 30,
        weapons: ["tanto"],
        weaponsChoice: [],
        equipment: ["Horse", "Instrument", "Rations", "Bedding Roll", "Makeup Set", "Costumes"],
        equipmentFunds: 400
    },
    "pirate": {
        gold: 20,
        weapons: ["pistol", "wakizashi", "tanto"],
        weaponsChoice: [],
        equipment: ["Medium Breastplate","Bag", "Rations", "Bedding Roll", "Bottle of Sake"],
        equipmentFunds: 300
    },
    "scholar": {
        gold: 20,
        weapons: ["tanto"],
        weaponsChoice: [],
        equipment: ["Bag", "Calligraphy Set", ["Sheets of Parchment", 10], "Rations", "Bedding Roll"],
        equipmentFunds: 200
    }
}