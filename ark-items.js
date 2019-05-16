var ark_itemsVersion = {
	itemizer: 1,
	ark: {major: 195, minor: 0}
};

var ark_itemStats = [
	{"id": 1, "name": "Type"},
	{"id": 2, "name": "Armor"},
	{"id": 3, "name": "Hypothermal Insulation"},
	{"id": 4, "name": "Hyperthermal Insulation"},
	{"id": 5, "name": "Durability"},
	{"id": 6, "name": "Weapon Damage"},
	{"id": 7, "name": "Health"},
	{"id": 8, "name": "Food"},
	{"id": 9, "name": "Spoils"},
	{"id": 10, "name": "Torpor"},
	{"id": 11, "name": "Water"},
	{"id": 12, "name": "Stamina"},
	{"id": 13, "name": "Cooldown"},
	{"id": 14, "name": "Fertilizer Points"},
];

var ark_items = [
	{
		"name": "Simple Pistol",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 1,
		"description": "This simple revolver trades accuracy for flexibility.",
		"image": "simple_pistol.png",
		"weight": 5,
		"recipe": [
			{"itemId": 74, "count": 60},
			{"itemId": 7, "count": 5},
			{"itemId": 10, "count": 15}
		],
		"stats": [
			{"id": 1, "value": "Weapon"},
			{"id": 5, "value": 40},
			{"id": 6, "value": 42.6}
		]
		},
	{
		"name": "Assault Rifle",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 2,
		"description": "The fastest way to fill a target with holes.",
		"image": "assault_rifle.png",
		"weight": 10,
		"recipe": [
			{"itemId": 166, "count": 60},
			{"itemId": 74, "count": 35},
			{"itemId": 146, "count": 50}
		],
		"stats": [
			{"id": 1, "value": "Weapon"},
			{"id": 5, "value": 40},
			{"id": 6, "value": 30}
		]
		},
	{
		"name": "Rocket Launcher",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 3,
		"description": "Mankind's ultimate portable killing device.",
		"image": "rocket_launcher.png",
		"weight": 20,
		"recipe": [
			{"itemId": 166, "count": 80},
			{"itemId": 74, "count": 50},
			{"itemId": 146, "count": 60}
		],
		"stats": [
			{"id": 1, "value": "Weapon"},
			{"id": 5, "value": 50},
			{"id": 6, "value": "149 (direct hit)"}
		]
		},
	{
		"name": "Simple Bullet",
		"maxStack": 50,
		"decomposes": 120,
		"itemId": 4,
		"description": "Primarily used with forged handguns.",
		"image": "simple_bullet.png",
		"weight": 0.1,
		"recipe": [
			{"itemId": 74, "count": 1},
			{"itemId": 109, "count": 3}
		],
		"stats": [
			{"id": 1, "value": "Ammunition"}
		]
		},
	{
		"name": "Bow",
		"maxStack": 1,
		"decomposes": -1,
		"itemId": 5,
		"description": "A ranged weapon that can fire Stone Arrows or Tranquilizer Arrows upgrade requires Slingshot engram.",
		"image": "bow.png",
		"weight": 8,
		"recipe": [
			{"itemId": 7, "count": 15},
			{"itemId": 76, "count": 50}
		],
		"stats": [
			{"id": 1, "value": "Weapon"},
			{"id": 5, "value": 50},
			{"id": 6, "value": "60 (fully charged), 26 (minimum charge)"}
		]
		},
	{
		"name": "Grenade",
		"maxStack": 10,
		"decomposes": 120,
		"itemId": 6,
		"description": "Pulling the pin starts a 5 second timer to an explosion. Make sure you've thrown it by then.",
		"image": "grenade.png",
		"weight": 0.5,
		"recipe": [
			{"itemId": 76, "count": 15},
			{"itemId": 8, "count": 20},
			{"itemId": 109, "count": 30},
			{"itemId": 10, "count": 5},
			{"itemId": 74, "count": 2},
			{"itemId": 162, "count": 4}
		],
		"stats": [
			{"id": 1, "value": "Weapon"},
			{"id": 5, "value": 40},
			{"id": 6, "value": 750}
		]
		},
	{
		"name": "Wood",
		"maxStack": 100,
		"decomposes": -1,
		"itemId": 7,
		"description": "Cut from trees.",
		"image": "wood.png",
		"weight": 0.5,
		"recipe": [],
		"stats": []
		},
	{
		"name": "Stone",
		"maxStack": 100,
		"decomposes": -1,
		"itemId": 8,
		"description": "Mined from rocks.",
		"image": "stone.png",
		"weight": 0.5,
		"recipe": [],
		"stats": []
		},
	{
		"name": "Metal",
		"maxStack": 100,
		"decomposes": -1,
		"itemId": 9,
		"description": "Mined from certain rocks, usually found high on mountains, in caves, rivers, or deep water sources. Can be refined in a forge or used on machines like the lathe.",
		"image": "metal.png",
		"weight": 1.0,
		"recipe": [],
		"stats": []
		},
	{
		"name": "Hide",
		"maxStack": 100,
		"decomposes": -1,
		"itemId": 10,
		"description": "Thick skin, hacked from most dead animals.",
		"image": "hide.png",
		"weight": 0.01,
		"recipe": [],
		"stats": []
		},
	{
		"name": "Chitin/Keratin",
		"maxStack": 100,
		"decomposes": -1,
		"itemId": 11,
		"description": "This firm, flexible material makes up exoskeletons. Hacked primarily from dead insects.",
		"image": "Chitin_or_Keratin.png",
		"weight": 0.01,
		"recipe": [],
		"stats": []
		},
	{
		"name": "Raw Meat",
		"maxStack": 20,
		"decomposes": 120,
		"itemId": 12,
		"description": "Eating raw food will sate hunger, but is unhealthy for humans. Most wild carnivores prefer raw meat to Cooked Meat.",
		"image": "raw_meat.png",
		"weight": 0.1,
		"recipe": [],
		"stats": [
			{"id": 1, "value": "Consumable"},
			{"id": 7, "value": "-5"},
			{"id": 8, "value": "+10"},
			{"id": 9, "value": "10:00"}
		]
		},
	{
		"name": "Spoiled Meat",
		"maxStack": 100,
		"decomposes": 3600,
		"itemId": 13,
		"description": "?",
		"image": "spoiled_meat.png",
		"weight": 0.1,
		"recipe": [],
		"stats": [
			{"id": 1, "value": "Consumable"},
			{"id": 7, "value": "-12"},
			{"id": 8, "value": "+3.5"},
		]
		},
	{
		"name": "Cooked Meat",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 14,
		"description": "Sates your hunger and provides health while being digested. Wild carnivores will eat it, but prefer raw meat.",
		"image": "cooked_meat.png",
		"weight": 0.1,
		"recipe": [
			{"itemId": 12, "count": 1}
		],
		"stats": [
			{"id": 1, "value": "Consumable"},
			{"id": 7, "value": "+5"},
			{"id": 12, "value": "+0.5"},
			{"id": 8, "value": "+20"},
			{"id": 9, "value": "20:00"}
		]
		},
	{
		"name": "Water Jar",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 15,
		"description": "Safely carries a lot of water, but is also a bit heavy.",
		"image": "water_jar.png",
		"weight": 5.0,
		"recipe": [
			{"itemId": 146, "count": 15},
			{"itemId": 10, "count": 5}
		],
		"stats": [
			{"id": 1, "value": "Consumable"},
			{"id": 11, "value": "+150"},
		]
		},
	{
		"name": "Cloth Pants",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 17,
		"description": "Provides some protection from the heat and cold, but only minimal protection from injuries. Required skill to learn Hide Pants",
		"image": "cloth_pants.png",
		"weight": 0.5,
		"recipe": [
			{"itemId":76, "count":50}
		],
		"stats": [
			{"id": 1, "value": "Legs"},
			{"id": 2, "value": 10},
			{"id": 3, "value": 8.0},
			{"id": 4, "value": 15.0}
		]
		},
	{
		"name": "Cloth Shirt",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 18,
		"description": "Provides some protection from the heat and cold, but only minimal protection from injuries. Required skill to learn Hide Shirt and other advanced armor.",
		"image": "cloth_shirt.png",
		"weight": 0.5,
		"recipe": [
			{"itemId":76, "count":40}
		],
		"stats": [
			{"id": 1, "value": "Chest"},
			{"id": 2, "value": 10},
			{"id": 3, "value": 8.0},
			{"id": 4, "value": 15.0}
		]
		},
	{
		"name": "Cloth Hat",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 19,
		"description": "Provides some protection from the heat and cold, but only minimal protection from injuries. Required skill for Hide Hat and other advanced armor.",
		"image": "cloth_hat.png",
		"weight": 0.5,
		"recipe": [
			{"itemId":76, "count":10}
		],
		"stats": [
			{"id": 1, "value": "Head"},
			{"id": 2, "value": 10},
			{"id": 3, "value": 4.0},
			{"id": 4, "value": 10.0}
		]
		},
	{
		"name": "Cloth Boots",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 20,
		"description": "Hide-soles shoes provide some protection from the heat and cold, but only minimal protection from injuries.",
		"image": "cloth_boots.png",
		"weight": 0.5,
		"recipe": [
			{"itemId":76, "count":25},
			{"itemId":10, "count": 6}
		],
		"stats": [
			{"id": 1, "value": "Feet"},
			{"id": 2, "value": 10},
			{"id": 3, "value": 5.0},
			{"id": 4, "value": 10.0}
		]
		},
	{
		"name": "Cloth Gloves",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 21,
		"description": "Hide-padded gloves provide some protection from the heat and cold, but only minimal protection from injuries.",
		"image": "cloth_gloves.png",
		"weight": 0.5,
		"recipe": [
			{"itemId":76, "count":20},
			{"itemId":10, "count":4}
		],
		"stats": [
			{"id": 1, "value": "Hands"},
			{"id": 2, "value": 10},
			{"id": 3, "value": 5.0},
			{"id": 4, "value": 10.0}
		]
		},
	{
		"name": "Hide Pants",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 22,
		"description": "Keeps you warm while providing some physical protection. Requires Cloth Pants Engram as well.",
		"image": "hide_pants.png",
		"weight": 0.5,
		"recipe": [
			{"itemId":10, "count":25},
			{"itemId":76, "count":10}
		],
		"stats": [
			{"id": 1, "value": "Legs"},
			{"id": 2, "value": 20},
			{"id": 3, "value": 20},
			{"id": 4, "value": -15.0}
		]
		},
	{
		"name": "Hide Shirt",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 23,
		"description": "Keeps you warm while providing some protection. Requires Cloth Shirt engram as well.",
		"image": "hide_shirt.png",
		"weight": 0.5,
		"recipe": [
			{"itemId":10, "count":20},
			{"itemId":76, "count":8}
		],
		"stats": [
			{"id": 1, "value": "Chest"},
			{"id": 2, "value": 20},
			{"id": 3, "value": 20},
			{"id": 4, "value": -15.0}
		]
		},
	{
		"name": "Hide Hat",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 24,
		"description": "Keeps you warm while providing some physical protection.",
		"image": "hide_hat.png",
		"weight": 0.5,
		"recipe": [
			{"itemId":10, "count":15},
			{"itemId":76, "count":6}
		],
		"stats": [
			{"id": 1, "value": "Head"},
			{"id": 2, "value": 20},
			{"id": 3, "value": 15},
			{"id": 4, "value": -10.0}
		]
		},
	{
		"name": "Hide Boots",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 25,
		"description": "Keeps you warm while provides some physical protection.",
		"image": "hide_boots.png",
		"weight": 0.5,
		"recipe": [
			{"itemId":10, "count":12},
			{"itemId":76, "count":5}
		],
		"stats": [
			{"id": 1, "value": "Feet"},
			{"id": 2, "value": 20},
			{"id": 3, "value": 15},
			{"id": 4, "value": -10.0}
		]
		},
	{
		"name": "Hide Gloves",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 26,
		"description": "Keeps you warm while providing some physical protection.",
		"image": "hide_gloves.png",
		"weight": 0.5,
		"recipe": [
			{"itemId":10, "count":10},
			{"itemId":76, "count":4}
		],
		"stats": [
			{"id": 1, "value": "Feet"},
			{"id": 2, "value": 20},
			{"id": 3, "value": 15},
			{"id": 4, "value": -10.0}
		]
		},
	{
		"name": "Chitin Leggings",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 27,
		"description": "Provides moderate physical protection, but can get a little warm.",
		"image": "chitin_leggings.png",
		"weight": 0.5,
		"recipe": [
			{"itemId":11, "count":25},
			{"itemId":10, "count":12},
			{"itemId":76, "count":5}
		],
		"stats": [
			{"id": 1, "value": "Legs"},
			{"id": 2, "value": 50},
			{"id": 3, "value": 10},
			{"id": 4, "value": -5.0}
		]
		},
	{
		"name": "Chitin Chestpiece",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 28,
		"description": "Provides moderate physical protection, but can get a little warm.",
		"image": "chitin_chestpiece.png",
		"weight": 0.5,
		"recipe": [
			{"itemId":11, "count":20},
			{"itemId":10, "count":10},
			{"itemId":76, "count":4}
		],
		"stats": [
			{"id": 1, "value": "Chest"},
			{"id": 2, "value": 50},
			{"id": 3, "value": 10},
			{"id": 4, "value": -5.0}
		]
		},
	{
		"name": "Chitin Helmet",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 29,
		"description": "Provides moderate physical protection, but can get a little warm.",
		"image": "chitin_helmet.png",
		"weight": 0.5,
		"recipe": [
			{"itemId":11, "count":15},
			{"itemId":10, "count":7},
			{"itemId":76, "count":3}
		],
		"stats": [
			{"id": 1, "value": "Head"},
			{"id": 2, "value": 50},
			{"id": 3, "value": 10},
			{"id": 4, "value": -5.0}
		]
		},
	{
		"name": "Chitin Boots",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 30,
		"description": "Provides moderate physical protection, but can get a little warm.",
		"image": "chitin_boots.png",
		"weight": 0.5,
		"recipe": [
			{"itemId":11, "count":12},
			{"itemId":10, "count":6},
			{"itemId":76, "count":4}
		],
		"stats": [
			{"id": 1, "value": "Feet"},
			{"id": 2, "value": 50},
			{"id": 3, "value": 10},
			{"id": 4, "value": -5.0}
		]
		},
	{
		"name": "Chitin Gauntlets",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 31,
		"description": "Provides moderate physical protection, but can get a little warm.",
		"image": "chitin_gauntlets.png",
		"weight": 0.5,
		"recipe": [
			{"itemId":11, "count":10},
			{"itemId":10, "count":5},
			{"itemId":76, "count":2}
		],
		"stats": [
			{"id": 1, "value": "Hands"},
			{"id": 2, "value": 50},
			{"id": 3, "value": 10},
			{"id": 4, "value": -5.0}
		]
		},
	{
		"name": "Stone Arrow",
		"maxStack": 50,
		"decomposes": 120,
		"itemId": 32,
		"description": "An arrow for the Bow.",
		"image": "stone_arrow.png",
		"weight": -1,
		"recipe": [
			{"itemId":75, "count":2},
			{"itemId":76, "count":2},
			{"itemId":73, "count":1}
		],
		"stats": [
			{"id": 1, "value": "Ammunition"}
		]
		},
	{
		"name": "Stone Pick",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 33,
		"description": "A large stone pick for harvesting primarily flint from rocks, thatch from trees, and raw meat from bodies.",
		"image": "stone_pick.png",
		"weight": 2.0,
		"recipe": [
			{"itemId":8, "count":1},
			{"itemId":7, "count":1},
			{"itemId":75, "count":10}
		],
		"stats": [
			{"id": 1, "value": "Weapon"},
			{"id": 5, "value": 40},
			{"id": 6, "value": 17.3}
		]
		},
	{
		"name": "Stone Hatchet",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 34,
		"description": "A sharp flint hatchet for harvesting wood from trees, stone from rocks, and skin from bodies.",
		"image": "stone_hatchet.png",
		"weight": 2.0,
		"recipe": [
			{"itemId":73, "count":1},
			{"itemId":7, "count":1},
			{"itemId":75, "count":10}
		],
		"stats": [
			{"id": 1, "value": "Weapon"},
			{"id": 5, "value": 40},
			{"id": 6, "value": 21.8}
		]
		},
	{
		"name": "Metal Pick",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 35,
		"description": "A sharp metal pick for harvesting metal from mountain rocks, flint from rocks, and meat from bodies.",
		"image": "metal_pick.png",
		"weight": 2.0,
		"recipe": [
			{"itemId":74, "count":1},
			{"itemId":7, "count":1},
			{"itemId":10, "count":10}
		],
		"stats": [
			{"id": 1, "value": "Weapon"},
			{"id": 5, "value": 160},
			{"id": 6, "value": 34.3}
		]
		},
	{
		"name": "Metal Hatchet",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 36,
		"description": "A sharp metal hatchet for harvesting wood from trees, stone from rocks, and skin from bodies.",
		"image": "metal_hatchet.png",
		"weight": 2.0,
		"recipe": [
			{"itemId":74, "count":8},
			{"itemId":7, "count":1},
			{"itemId":10, "count":10}
		],
		"stats": [
			{"id": 1, "value": "Weapon"},
			{"id": 5, "value": 40},
			{"id": 6, "value": 41.4}
		]
		},
	{
		"name": "Torch",
		"maxStack": 1,
		"decomposes": -1,
		"itemId": 37,
		"description": "Provides light, and some warmth. Doubles as a melee weapon in a pinch.",
		"image": "torch.png",
		"weight": 1.0,
		"recipe": [
			{"itemId":73, "count":1},
			{"itemId":7, "count":1},
			{"itemId":8, "count":1}
		],
		"stats": [
			{"id": 1, "value": "Weapon"},
			{"id": 5, "value": 40},
			{"id": 6, "value": "100%"}
		]
		},
	{
		"name": "Paintbrush",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 38,
		"description": "Apply a dye to this, then swing it at structures to paint them.",
		"image": "paintbrush.png",
		"weight": 0.5,
		"recipe": [
			{"itemId":7, "count":1},
			{"itemId":10, "count":3},
			{"itemId":75, "count":10}
		],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
	{
		"name": "Campfire",
		"maxStack": 1,
		"decomposes": -1,
		"itemId": 39,
		"description": "Perfect for cooking meat, staying warm, and providing light.",
		"image": "campfire.png",
		"weight": 4.0,
		"recipe": [
			{"itemId":75, "count":12},
			{"itemId":73, "count":1},
			{"itemId":8, "count":16},
			{"itemId":7, "count":2}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 100},
		]
		},
	{
		"name": "Standing Torch",
		"maxStack": 100,
		"decomposes": -1,
		"itemId": 40,
		"description": "A torch on a small piece of wood that lights and warms the immediate area.",
		"image": "standing_torch.png",
		"weight": 4.0,
		"recipe": [
			{"itemId":75, "count":8},
			{"itemId":73, "count":1},
			{"itemId":8, "count":1},
			{"itemId":7, "count":3}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 500},
		]
		},
	{
		"name": "Hide Sleeping Bag",
		"maxStack": 1,
		"decomposes": -1,
		"itemId": 41,
		"description": "This hide sleeping bag acts as a single-use respawn point, only usable by you.",
		"image": "hide_sleeping_bag.png",
		"weight": 10.0,
		"recipe": [
			{"itemId": 10, "count": 25},
			{"itemId":76, "count": 15}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
		]
		},
	{
		"name": "C4 Remote Detonator",
		"maxStack": 1,
		"decomposes": -1,
		"itemId": 42,
		"description": "This device uses radio waves to detonate primed C4 packages on the same frequency.",
		"image": "c4_remote_detonator.png",
		"weight": 0.5,
		"recipe": [
			{"itemId": 166, "count": 20},
			{"itemId": 165, "count": 50},
			{"itemId": 78, "count": 10},
			{"itemId": 74, "count": 10},
			{"itemId": 146, "count": 15}
		],
		"stats": [
			{"id": 1, "value": "Weapon"},
		]
		},
	{
		"name": "C4 Charge",
		"maxStack": 50,
		"decomposes": 120,
		"itemId": 43,
		"description": "This advanced explosive can annihilate structures.",
		"image": "c4_charge.png",
		"weight": 0.1,
		"recipe": [
			{"itemId": 109, "count": 75},
			{"itemId": 78, "count": 25},
			{"itemId": 146, "count": 5},
			{"itemId": 76, "count": 50},
			{"itemId": 10, "count": 5},
			{"itemId": 166, "count": 10}
		],
		"stats": [
			{"id": 1, "value": "Ammunition"},
		]
		},
	{
		"name": "Blood Extraction Syringe",
		"maxStack": 1,
		"decomposes": -1,
		"itemId": 44,
		"description": "Use this on a human to extract their blood for transfusion.",
		"image": "blood_extraction_syringe.png",
		"weight": 0.5,
		"recipe": [
			{"itemId":10, "count": 10},
			{"itemId":11,"count": 1}
		],
		"stats": [
			{"id": 1, "value": "Consumable"},
		]
		},
	{
		"name": "Blood Pack",
		"maxStack": 100,
		"decomposes": -1,
		"itemId": 45,
		"description": "Use this to replace lost blood. Restores Health over time.",
		"image": "blood_pack.png",
		"weight": 0.3,
		"recipe": [],
		"stats": [
			{"id": 1, "value": "Consumable"},
			{"id": 7, "value": "15 over 2 seconds"},
			{"id": 13, "value": "40 seconds"}
		]
		},
	{
		"name": "Improvised Explosive Device",
		"maxStack": 10,
		"decomposes": 120,
		"itemId": 46,
		"description": "Place two of these near each other to create an explosive trap.",
		"image": "improvised_explosive_device.png",
		"weight": 0.5,
		"recipe": [
			{"itemId": 109, "count": 50},
			{"itemId": 78, "count": 10},
			{"itemId": 76, "count": 35},
			{"itemId": 10, "count": 5},
			{"itemId": 74, "count": 10},
			{"itemId": 7, "count": 1}
		],
		"stats": [
			{"id": 1, "value": "Weapon"}
		]
		},
	{
		"name": "Waterskin",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 47,
		"description": "Goods to keep you hydrated, but slowly leaks water.",
		"image": "waterskin.png",
		"weight": 0.3,
		"recipe": [
			{"itemId":10, "count":4},
			{"itemId":76, "count":12}
		],
		"stats": [
			{"id": 1, "value": "Consumable"},
			{"id": 11, "value": "100 or less"},
		]
		},
	{
		"name": "Bingleberry Soup",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 51,
		"description": "Eat it to gain mega nourishment, long-term fortification!",
		"image": "bingleberry_soup.png",
		"weight": 0.1,
		"recipe": [],
		"stats": [
			{"id": 1, "value": "Consumable"},
			{"id": 8, "value": "+60"},
		]
		},
	{
		"name": "Medical Brew",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 52,
		"description": "This brew doesn't have any nutritional value, but it promotes healing.",
		"image": "medical_brew.png",
		"weight": 0.1,
		"recipe": [
			{"itemId": 119, "count": 20},
			{"itemId": 123, "count": 2}
		],
		"stats": [
			{"id": 1, "value": "Consumable"},
			{"id": 7, "value": "+40"},
			{"id": 9, "value": "60:00"}
		]
		},
	{
		"name": "Energy Brew",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 53,
		"description": "This brew doesn't have any nutritional value, but fills your stamina.",
		"image": "energy_brew.png",
		"weight": 0.1,
		"recipe": [
			{"itemId": 118, "count": 20},
			{"itemId": 124, "count": 2}
		],
		"stats": [
			{"id": 1, "value": "Consumable"},
			{"id": 7, "value": "+40"},
			{"id": 9, "value": "60:00"}
		]
		},
	{
		"name": "Small Dinosaur Feces",
		"maxStack": 1,
		"decomposes": 60,
		"itemId": 54,
		"description": "Everyone Poops. Can provide nitrogen to help crops grow in their plots. Would be more efficient fertilizer if combined with thatch in Compost Bin.",
		"image": "small_dinosaur_feces.png",
		"weight": 1.0,
		"recipe": [
		],
		"stats": [
			{"id": 1, "value": "Consumable"},
			{"id": 9, "value": "1:24:10"},
			{"id": 14, "value": 2500}
		]
		},
	{
		"name": "Human Feces",
		"maxStack": 1,
		"decomposes": 60,
		"itemId": 55,
		"description": "Everyone poops. Can provide nitrogen to help crops grow in plots. Would be more efficient fertilizer if combined with thatch in a bin.",
		"image": "human_feces.png",
		"weight": 1.0,
		"recipe": [
		],
		"stats": [
			{"id": 1, "value": "Consumable"},
			{"id": 7, "value": "-70"},
			{"id": 9, "value": "1:24:10"},
			{"id": 14, "value": 1000}
		]
		},
	{
		"name": "Stegosaurus Egg",
		"maxStack": 100,
		"decomposes": 1000,
		"itemId": 56,
		"description": "Eat it to gain tremendous nourishment, or use it in recipes, or...",
		"image": "stegosaurus_egg.png",
		"weight": 12.0,
		"recipe": [
		],
		"stats": [
			{"id": 1, "value": "Consumable"},
			{"id": 7, "value": "+55"},
			{"id": 12, "value": "+55"},
			{"id": 8, "value": "+55"},
			{"id": 9, "value": "2 days"},
			{"id": 14, "value": 1000}
		]
		},
	{
		"name": "Spear",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 57,
		"description": "An easily made melee weapon that can also be thrown. Has a chance to break when used.",
		"image": "spear.png",
		"weight": 3.0,
		"recipe": [
			{"itemId":73, "count":2},
			{"itemId":7, "count":8},
			{"itemId":76, "count":12}
		],
		"stats": [
			{"id": 1, "value": "Weapon"},
			{"id": 5, "value": "None (randomly breaks on melee attack)"},
			{"id": 6, "value": 30}
		]
		},
	{
		"name": "Red Coloring",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 58,
		"description": "This substance can be used to color certain items and structures.",
		"image": "red_coloring.png",
		"weight": 0.1,
		"recipe": [
			{"itemId":119, "count":3},
			{"itemId":77, "count":0.4}
		],
		"stats": [
			{"id": 1, "value": "Dye"},
		]
		},
	{
		"name": "Green Coloring",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 59,
		"description": "This substance can be used to color certain items and structures.",
		"image": "green_coloring.png",
		"weight": 0.1,
		"recipe": [
			{"itemId":118, "count":1.8},
			{"itemId":117, "count":1.8},
			{"itemId":77, "count":0.4}
		],
		"stats": [
			{"id": 1, "value": "Dye"},
		]
		},
	{
		"name": "Blue Coloring",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 60,
		"description": "This substance can be used to color certain items and structures.",
		"image": "blue_coloring.png",
		"weight": 0.1,
		"recipe": [
			{"itemId":118, "count":3},
			{"itemId":77, "count":0.4}
		],
		"stats": [
			{"id": 1, "value": "Dye"},
		]
		},
	{
		"name": "Yellow Coloring",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 61,
		"description": "This substance can be used to color certain items and structures.",
		"image": "yellow_coloring.png",
		"weight": 0.1,
		"recipe": [
			{"itemId":117, "count":3},
			{"itemId":77, "count":0.4}
		],
		"stats": [
			{"id": 1, "value": "Dye"},
		]
		},
	{
		"name": "Purple Coloring",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 62,
		"description": "This substance can be used to color certain items and structures.",
		"image": "purple_coloring.png",
		"weight": 0.1,
		"recipe": [
			{"itemId":118, "count":1.8},
			{"itemId":119, "count":1.8},
			{"itemId":77, "count":0.4}
		],
		"stats": [
			{"id": 1, "value": "Dye"},
		]
		},
	{
		"name": "Orange Coloring",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 63,
		"description": "This substance can be used to color certain items and structures.",
		"image": "orange_coloring.png",
		"weight": 0.1,
		"recipe": [
			{"itemId":117, "count":1.8},
			{"itemId":119, "count":1.8},
			{"itemId":77, "count":0.4}
		],
		"stats": [
			{"id": 1, "value": "Dye"},
		]
		},
	{
		"name": "Black Coloring",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 64,
		"description": "This substance can be used to color certain items and structures.",
		"image": "black_coloring.png",
		"weight": 0.1,
		"recipe": [
			{"itemId":121, "count":3},
			{"itemId":77, "count":0.4}
		],
		"stats": [
			{"id": 1, "value": "Dye"},
		]
		},
	{
		"name": "White Coloring",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 65,
		"description": "This substance can be used to color certain items and structures.",
		"image": "white_coloring.png",
		"weight": 0.1,
		"recipe": [
			{"itemId":122, "count":3},
			{"itemId":77, "count":0.4}
		],
		"stats": [
			{"id": 1, "value": "Dye"},
		]
		},
	{
		"name": "Brown Coloring",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 66,
		"description": "This substance can be used to color certain items and structures.",
		"image": "brown_coloring.png",
		"weight": 0.1,
		"recipe": [
			{"itemId":118, "count":0.6},
			{"itemId":119, "count":1.8},
			{"itemId":117, "count":1.2},
			{"itemId":77, "count":0.4}
		],
		"stats": [
			{"id": 1, "value": "Dye"},
		]
		},
	{
		"name": "Rex Saddle",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 69,
		"description": "Equip a T-rex with this to ride it.",
		"image": "rex_saddle.png",
		"weight": 20.0,
		"recipe": [
			{"itemId":10, "count":380},
			{"itemId":76, "count":200},
			{"itemId":74, "count":50}
		],
		"stats": [
			{"id": 1, "value": "Saddle"},
			{"id": 2, "value": 25},
		]
		},
	{
		"name": "GPS",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 72,
		"description": "Detects strange energy from the three Obelisks to triangulate your exact location on the island.",
		"image": "gps.png",
		"weight": 0.5,
		"recipe": [
			{"itemId":166, "count":5},
			{"itemId":165, "count":20}
		],
		"stats": [
			{"id": 1, "value": "Saddle"},
			{"id": 2, "value": 25},
		]
		},
	{
		"name": "Tranquilizer Arrow",
		"maxStack": 100,
		"decomposes": -1,
		"itemId": 70,
		"description": "An arrow with lower damage but slows down the prey by increasing the prey's torpor.",
		"image": "tranquilizer_arrow.png",
		"weight": 0.2,
		"recipe": [
			{"itemId": 32, "count": 1},
			{"itemId": 123, "count": 1}
		],
		"stats": [
			{"id": 1, "value": "Ammunition"},
			{"id": 10, "value": "+97 over time (3-5 seconds)"}
		]
		},
	{
		"name": "Flint",
		"maxStack": 100,
		"decomposes": -1,
		"itemId": 73,
		"description": "Ferroceric flint that holds an edge better than regular stone.",
		"image": "flint.png",
		"weight": 0.05,
		"recipe": [],
		"stats": []
		},
	{
		"name": "Metal Ingot",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 74,
		"description": "Created by refining metal ore in a forge.",
		"image": "metal_ingot.png",
		"weight": 1.00,
		"recipe": [
			{"itemId": 9, "count": 2}
		],
		"stats": []
		},
	{
		"name": "Thatch",
		"maxStack": 100,
		"decomposes": -1,
		"itemId": 75,
		"description": "Sticks torn from trees. Useful for primitive buildings.",
		"image": "thatch.png",
		"weight": -1,
		"recipe": [],
		"stats": []
		},
	{
		"name": "Fiber",
		"maxStack": 100,
		"decomposes": -1,
		"itemId": 76,
		"description": "Delicately collected strands of plant. Perfect for making thread, cloth or rope.",
		"image": "fiber.png",
		"weight": 0.001,
		"recipe": [],
		"stats": []
		},
	{
		"name": "Charcoal",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 77,
		"description": "Created by burning wood.",
		"image": "charcoal.png",
		"weight": 0.25,
		"recipe": [
			{"itemId": 7, "count": 1},
		],
		"stats": []
		},
	{
		"name": "Crystal",
		"maxStack": 100,
		"decomposes": -1,
		"itemId": 78,
		"description": "This strange crystalline material can be shaped into lenses, used as an electronics component, or mixed into powerful explosives.",
		"image": "crystal.png",
		"weight": 1.0,
		"recipe": [],
		"stats": []
		},
	{
		"name": "Thatch Roof",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 79,
		"description": "A thatched roof to protect you from the elements. Not stable enough to build on.",
		"image": "thatch_roof.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 75, "count": 15},
			{"itemId": 7, "count": 4},
			{"itemId": 76, "count": 10}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 1600}
		]
		},
	{
		"name": "Thatch Door",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 80,
		"description": "Enough sticks bundled together works as a simple door. Can be locked for security but not very strong.",
		"image": "thatch_door.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 75, "count": 7},
			{"itemId": 76, "count": 4}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 1600}
		]
		},
	{
		"name": "Thatch Foundation",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 81,
		"description": "A foundation is required to build structures. This on is a wooden frame with some smooth bundles of sticks that act as a floor.",
		"image": "thatch_foundation.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 75, "count": 20},
			{"itemId": 7, "count": 6},
			{"itemId": 76, "count": 15}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 2400}
		]
		},
	{
		"name": "Thatch Wall",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 82,
		"description": "A simple wall made of bundled sticks, and stabilized by a wooden frame. Fairly fragile, but better than nothing.",
		"image": "thatch_wall.png",
		"weight": 2.0,
		"recipe": [
			{"itemId": 75, "count": 10},
			{"itemId": 7, "count": 2},
			{"itemId": 76, "count": 7}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 1600}
		]
		},
	{
		"name": "Thatch Doorframe",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 83,
		"description": "This thatch wall has entrance in it, but requires more wood to stay stable.",
		"image": "thatch_doorframe.png",
		"weight": 2.0,
		"recipe": [
			{"itemId": 75, "count": 8},
			{"itemId": 7, "count": 6},
			{"itemId": 76, "count": 6}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 2400}
		]
		},
	{
		"name": "Wooden Catwalk",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 84,
		"description": "A thin walkway for bridging areas together. Made from sturdy wood.",
		"image": "wooden_catwalk.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 7, "count": 20},
			{"itemId": 75, "count": 7},
			{"itemId": 76, "count": 4}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 6250}
		]
		},
	{
		"name": "Wooden Ceiling",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 85,
		"description": "A stable wooden ceiling that insulates the inside from the outside, and doubles as a floor for higher levels.",
		"image": "wooden_ceiling.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 7, "count": 60},
			{"itemId": 75, "count": 15},
			{"itemId": 76, "count": 10}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 10000}
		]
		},	
	{
		"name": "Wooden Hatchframe",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 86,
		"description": "A wooden ceiling with a hole in it for trapdoors.",
		"image": "wooden_hatchframe.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 7, "count": 50},
			{"itemId": 75, "count": 12},
			{"itemId": 76, "count": 8}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 10000}
		]
		},
	{
		"name": "Wooden Door",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 87,
		"description": "A stable wooden door that provides entrance to structures. Can be locked for security.",
		"image": "wooden_door.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 7, "count": 20},
			{"itemId": 75, "count": 7},
			{"itemId": 76, "count": 4}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 6250}
		]
		},
	{
		"name": "Wooden Foundation",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 88,
		"description": "A foundation is required to build structures in an area. This one is made from sturdy wood.",
		"image": "wooden_foundation.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 7, "count": 80},
			{"itemId": 75, "count": 20},
			{"itemId": 76, "count": 15}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 15000}
		]
		},
	{
		"name": "Wooden Ladder",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 89,
		"description": "A simple wooden ladder used to climb up or down tall structures. Can also be used to extend existing ladders.",
		"image": "wooden_ladder.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 7, "count": 4},
			{"itemId": 75, "count": 7},
			{"itemId": 76, "count": 4}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 3125}
		]
		},
	{
		"name": "Wooden Pillar",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 90,
		"description": "Adds structural integrity to the area it is built on. Can also act as stilts for buildings on inclines. works well with wooden hatch frame for a base foundation.",
		"image": "wooden_pillar.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 7, "count": 40},
			{"itemId": 75, "count": 10},
			{"itemId": 76, "count": 7}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 6250}
		]
		},
	{
		"name": "Wooden Ramp",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 91,
		"description": "An inclined wooden floor for travelling up or down. Can also be used to make an angled roof.",
		"image": "wooden_ramp.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 7, "count": 60},
			{"itemId": 75, "count": 15},
			{"itemId": 76, "count": 10}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 10000}
		]
		},	
	{
		"name": "Wooden Trapdoor",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 92,
		"description": "This small wooden door can be used to secure hatches.",
		"image": "wooden_trapdoor.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 7, "count": 20},
			{"itemId": 75, "count": 7},
			{"itemId": 76, "count": 4}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 6250}
		]
		},
	{
		"name": "Wooden Wall",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 93,
		"description": "A sturdy wooden wall that insulates the inside from the outside, separates rooms, and provides structural integrity.",
		"image": "wooden_wall.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 7, "count": 40},
			{"itemId": 75, "count": 10},
			{"itemId": 76, "count": 7}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 10000}
		]
		},
	{
		"name": "Wooden Doorframe",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 94,
		"description": "A wooden wall that provides entrance to a structure.",
		"image": "wooden_doorframe.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 7, "count": 30},
			{"itemId": 75, "count": 8},
			{"itemId": 76, "count": 6}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 10000}
		]
		},
	{
		"name": "Wooden Windowframe",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 95,
		"description": "A wooden wall with a hole for a window.",
		"image": "wooden_windowframe.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 7, "count": 36},
			{"itemId": 75, "count": 9},
			{"itemId": 76, "count": 6}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 10000}
		]
		},
	{
		"name": "Wooden Window",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 96,
		"description": "Wooden beams on hinges that cover windows to provide protection from projectiles and spying.",
		"image": "wooden_window.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 7, "count": 8},
			{"itemId": 75, "count": 2},
			{"itemId": 76, "count": 1}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 6250}
		]
		},
	{
		"name": "Wooden Sign",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 97,
		"description": "A simple wooden sign for landmark navigation or relaying messages.",
		"image": "wooden_sign.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 7, "count": 5},
			{"itemId": 75, "count": 3},
			{"itemId": 76, "count": 4}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 6250}
		]
		},
	{
		"name": "Citronal",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 99,
		"description": "This citrus fruit grows naturally along the coast. It will probably prevent scurvy.",
		"image": "citronal.png",
		"weight": 0.1,
		"recipe": [],
		"stats": [
			{"id": 1, "value": "Consumable"},
			{"id": 7, "value": "+5"},
			{"id": 8, "value": "+20"},
			{"id": 11, "value": "+15"}
		]
		},
	{
		"name": "Parasaur Saddle",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 100,
		"description": "Equip a Parasaur with this to ride it.",
		"image": "parasaur_saddle.png",
		"weight": 20.0,
		"recipe": [
			{"itemId":10, "count":80},
			{"itemId":76, "count":50},
			{"itemId":7, "count":15}
		],
		"stats": [
			{"id": 1, "value": "Saddle"},
			{"id": 2, "value": 50},
		]
		},
	{
		"name": "Raptor Saddle",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 101,
		"description": "Equip a Raptor with this to ride it.",
		"image": "raptor_saddle.png",
		"weight": 20.0,
		"recipe": [
			{"itemId":10, "count":110},
			{"itemId":76, "count":65},
			{"itemId":7, "count":20}
		],
		"stats": [
			{"id": 1, "value": "Saddle"},
			{"id": 2, "value": 25},
		]
		},
	{
		"name": "Stegosaurus Saddle",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 102,
		"description": "Equip a Stego with this to ride it.",
		"image": "stego_saddle.png",
		"weight": 20.0,
		"recipe": [
			{"itemId":10, "count":200},
			{"itemId":76, "count":110},
			{"itemId":7, "count":35}
		],
		"stats": [
			{"id": 1, "value": "Saddle"},
			{"id": 2, "value": 27.2},
		]
		},
	{
		"name": "Triceratops Saddle",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 103,
		"description": "Equip a Triceratops with this to ride it.",
		"image": "trike_saddle.png",
		"weight": 20.0,
		"recipe": [
			{"itemId":10, "count":140},
			{"itemId":76, "count":80},
			{"itemId":7, "count":25}
		],
		"stats": [
			{"id": 1, "value": "Saddle"},
			{"id": 2, "value": 50},
		]
		},
	{
		"name": "Pulmonoscorpius Saddle",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 104,
		"description": "Equip a Pulmonoscorpius with this to ride it.",
		"image": "pulmonoscorpius_saddle.png",
		"weight": 20.0,
		"recipe": [
			{"itemId":10, "count":170},
			{"itemId":76, "count":95},
			{"itemId":7, "count":30}
		],
		"stats": [
			{"id": 1, "value": "Saddle"},
			{"id": 2, "value": 27.5},
		]
		},
	{
		"name": "Storage Box",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 105,
		"description": "A small box to store goods in.",
		"image": "storage_box.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 7, "count": 25},
			{"itemId": 75, "count": 20},
			{"itemId": 76, "count": 10}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 1000}
		]
		},
	{
		"name": "Large Storage Box",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 106,
		"description": "A large box to store goods in.",
		"image": "large_storage_box.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 7, "count": 50},
			{"itemId": 75, "count": 35},
			{"itemId": 76, "count": 25}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 1000}
		]
		},
	{
		"name": "Mortar And Pestle",
		"maxStack": 1,
		"decomposes": -1,
		"itemId": 107,
		"description": "This simple stone contraption can be used to grind resources into new substances.",
		"image": "mortar_and_pestle.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 8, "count": 65},
			{"itemId": 10, "count": 15}
		],
		"stats": [
			{"id": 5, "value": 1000}
		]
		},
	{
		"name": "Sparkpowder",
		"maxStack": 100,
		"decomposes": -1,
		"itemId": 108,
		"description": "Created by grinding flint with stone in a Mortar and Pestle.",
		"image": "sparkpowder.png",
		"weight": 1.0,
		"recipe": [
			{"itemId": 8, "count": 0.5},
			{"itemId": 73, "count": 1}
		],
		"stats": []
		},
	{
		"name": "Gunpowder",
		"maxStack": 100,
		"decomposes": -1,
		"itemId": 109,
		"description": "An explosive propellant. Necessary for any firearm or explosive.",
		"image": "gunpowder.png",
		"weight": 0.1,
		"recipe": [
			{"itemId": 108, "count": 1},
			{"itemId": 77, "count": 1}
		],
		"stats": []
		},
	{
		"name": "Stone Irrigation Pipe - Intake",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 110,
		"description": "The stone intake for an irrigation network that transports water over land.",
		"image": "stone_irrigation_intake.png",
		"weight": 5.0,
		"recipe": [
			{"itemId": 8, "count": 25}
		],
		"stats": [
			{"id": 1, "value": "Structure"}
		]
		},
	{
		"name": "Stone Irrigation Pipe - Straight",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 111,
		"description": "A straight stone pipe for an irrigation network, used for transporting water across land.",
		"image": "stone_irrigation_straight.png",
		"weight": 5.0,
		"recipe": [
			{"itemId": 8, "count": 5}
		],
		"stats": [
			{"id": 1, "value": "Structure"}
		]
		},
	{
		"name": "Stone Irrigation Pipe - Inclined",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 112,
		"description": "An inclined stone pipe for an irrigation network, used for transporting water up and down hills.",
		"image": "stone_irrigation_inclined.png",
		"weight": 5.0,
		"recipe": [
			{"itemId": 8, "count": 10}
		],
		"stats": [
			{"id": 1, "value": "Structure"}
		]
		},
	{
		"name": "Stone Irrigation Pipe - Intersection",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 113,
		"description": "A plus-shaped stone intersection for an irrigation network, used for splitting one water source into three.",
		"image": "stone_irrigation_intersection.png",
		"weight": 5.0,
		"recipe": [
			{"itemId": 8, "count": 15}
		],
		"stats": [
			{"id": 1, "value": "Structure"}
		]
		},
	{
		"name": "Stone Irrigation Pipe - Vertical",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 114,
		"description": "A vertical stone pipe for an irrigation network, used for transporting water up and down cliffs.",
		"image": "stone_irrigation_vertical.png",
		"weight": 5.0,
		"recipe": [
			{"itemId": 8, "count": 5}
		],
		"stats": [
			{"id": 1, "value": "Structure"}
		]
		},
	{
		"name": "Stone Irrigation Pipe - Tap",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 115,
		"description": "This stone tap allows access to the water in an irrigation network. Can refill containers, irrigate crop plots, or provide a refreshing drink.",
		"image": "stone_irrigation_tap.png",
		"weight": 5.0,
		"recipe": [
			{"itemId": 8, "count": 10},
			{"itemId": 7, "count": 15}
		],
		"stats": [
			{"id": 1, "value": "Structure"}
		]
		},
	{
		"name": "Amarberry Seed",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 116,
		"description": "Eat it to gain a tiny amount of nourishment, or plant it to grow your own amarberry bush. Can be planted in Small, Medium, or Large crop plots.",
		"image": "amarberry_seed.png",
		"weight": 0.01,
		"recipe": [],
		"stats": [
			{"id": 1, "value": "Consumable"},
			{"id": 8, "value": "+1"}
		]
		},
	{
		"name": "Amarberry",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 117,
		"description": "This yellow berry grows mostly on the beaches. Tasty, and can be used to make yellow dye.",
		"image": "amarberry.png",
		"weight": 0.1,
		"recipe": [],
		"stats": [
			{"id": 1, "value": "Consumable"},
			{"id": 8, "value": "+1.5"},
			{"id": 11, "value": "+1"},
			{"id": 9, "value": "10:00"}
		]
		},
	{
		"name": "Azulberry",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 118,
		"description": "This blue berry grows mostly in dense jungles. Tasty, and can be used to make blue dye.",
		"image": "azulberry.png",
		"weight": 0.1,
		"recipe": [],
		"stats": [
			{"id": 1, "value": "Consumable"},
			{"id": 8, "value": "+1.5"},
			{"id": 11, "value": "+1"},
			{"id": 9, "value": "10:00"}
		]
		},
	{
		"name": "Tintoberry",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 119,
		"description": "This blue berry grows mostly in dense jungles. Tasty, and can be used to make blue dye.",
		"image": "tintoberry.png",
		"weight": 0.1,
		"recipe": [],
		"stats": [
			{"id": 1, "value": "Consumable"},
			{"id": 8, "value": "+1.5"},
			{"id": 11, "value": "+1"},
			{"id": 9, "value": "10:00"}
		]
		},
	{
		"name": "Mejoberry",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 120,
		"description": "This wild berry grows mostly on mountains. While not tasty on it's own, its juices improve almost every meal.",
		"image": "mejoberry.png",
		"weight": 0.1,
		"recipe": [],
		"stats": [
			{"id": 1, "value": "Consumable"},
			{"id": 8, "value": "+1.5"},
			{"id": 11, "value": "+1"},
			{"id": 9, "value": "10:00"}
		]
		},
	{
		"name": "Narcoberry",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 121,
		"description": "This fairly common black berry makes you sleepy when you eat it. Bitter, but can be used to make black dye.",
		"image": "narcoberry.png",
		"weight": 0.1,
		"recipe": [],
		"stats": [
			{"id": 1, "value": "Consumable"},
			{"id": 8, "value": "+4.0"},
			{"id": 11, "value": 0},
			{"id": 10, "value": "+7.5"},
			{"id": 9, "value": "10:00"}
		]
		},
	{
		"name": "Stimberry",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 122,
		"description": "This fairly common white berry can be eaten in a pinch to recover food, stamina, and lose torpidity, but it will dehydrate you. Bitter, but can be used to make white dye.",
		"image": "stimberry.png",
		"weight": 0.1,
		"recipe": [],
		"stats": [
			{"id": 1, "value": "Consumable"},
			{"id": 8, "value": "+1.0"},
			{"id": 11, "value": "-10.0"},
			{"id": 10, "value": "-10.5"},
			{"id": 9, "value": "10:00"}
		]
		},
	{
		"name": "Narcotic",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 123,
		"description": "Increases your health, but puts you to sleep.",
		"image": "narcotic.png",
		"weight": 0.3,
		"recipe": [
			{"itemId": 121, "count": 5},
			{"itemId": 13, "count": 1}
		],
		"stats": [
			{"id": 1, "value": "Consumable"},
			{"id": 10, "value": "+40"}
		]
		},
	{
		"name": "Stimulant",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 124,
		"description": "Keeps you awake, but dehydrates you.",
		"image": "stimulant.png",
		"weight": 0.1,
		"recipe": [
			{"itemId": 122, "count": 5},
			{"itemId": 108, "count": 2}
		],
		"stats": [
			{"id": 1, "value": "Consumable"},
			{"id": 10, "value": "-40"}
		]
		},
	{
		"name": "Refining Forge",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 125,
		"description": "Requires wood, thatch, or sparkpowder to activate. Put unrefined resources in this to refine them.",
		"image": "refining_forge.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 8, "count": 125},
			{"itemId": 73, "count": 5},
			{"itemId": 10, "count": 65},
			{"itemId": 7, "count": 20},
			{"itemId": 76, "count": 40}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 2500}
		]
		},
	{
		"name": "Smithy",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 126,
		"description": "Place materials along with blueprints in this to create certain advanced forged items.",
		"image": "smithy.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 74, "count": 5},
			{"itemId": 7, "count": 30},
			{"itemId": 10, "count": 20}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 2500}
		]
		},
	{
		"name": "Compost Bin",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 127,
		"description": "A large bin for converting thatch and dung into high-quality fertilizer.",
		"image": "compost_bin.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 7, "count": 50},
			{"itemId": 73, "count": 15},
			{"itemId": 76, "count": 12}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 500}
		]
		},
	{
		"name": "Cooking Pot",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 128,
		"description": "Must contain basic fuel to light the fire. Put various ingredients with water in this to make soups, stews, and dyes.",
		"image": "cooking_pot.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 7, "count": 75},
			{"itemId": 75, "count": 15},
			{"itemId": 8, "count": 10},
			{"itemId": 73, "count": 5}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 500}
		]
		},
	{
		"name": "Simple Bed",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 129,
		"description": "Thatch may not make the most comfortable mattress, but this bed acts as a respawn point for you and your tribe.",
		"image": "simple_bed.png",
		"weight": 8.0,
		"recipe": [
			{"itemId": 7, "count": 15},         
			{"itemId": 75, "count": 80},
			{"itemId": 76, "count": 30},
			{"itemId": 10, "count": 40}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 1000}
		]
		},
	{
		"name": "Small Crop Plot",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 130,
		"description": "A small garden plot, with a fence to keep out vermin.",
		"image": "small_crop_plot.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 7, "count": 20},         
			{"itemId": 75, "count": 10},
			{"itemId": 76, "count": 15},
			{"itemId": 8, "count": 25}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 5000}
		]
		},
	{
		"name": "Pteranodon Saddle",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 131,
		"description": "Equip a Pteranodon with this to ride it.",
		"image": "pteranodon_saddle.png",
		"weight": 20.0,
		"recipe": [
			{"itemId":10, "count":230},
			{"itemId":76, "count":125},
			{"itemId":11, "count":75}
		],
		"stats": [
			{"id": 1, "value": "Saddle"},
			{"id": 2, "value": 50},
		]
		},
	{
		"name": "Longneck Rifle",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 132,
		"description": "This simple single-shot rifle is higly accurate, but has a long reload time.",
		"image": "longneck_rifle.png",
		"weight": 15.0,
		"recipe": [
			{"itemId":74, "count":95},
			{"itemId":7, "count":20},
			{"itemId":10, "count":25}
		],
		"stats": [
			{"id": 1, "value": "Weapon"},
			{"id": 6, "value": 124.8},
		]
		},
	{
		"name": "Citronal Seed",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 133,
		"description": "Eat it to gain a tiny amount of nourishment, or plant it to grow your own citronal crop. Can be planted in Medium or Large crop plots.",
		"image": "citronal_seed.png",
		"weight": 0.01,
		"recipe": [],
		"stats": [
			{"id": 1, "value": "Consumable"},
			{"id": 8, "value": "+1"}
		]
		},
	{
		"name": "Bronto Saddle",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 135,
		"description": "Equip a Bronto with this to ride it.",
		"image": "bronto_saddle.png",
		"weight": 20.0,
		"recipe": [
			{"itemId":10, "count":350},
			{"itemId":76, "count":185},
			{"itemId":74, "count":40}
		],
		"stats": [
			{"id": 1, "value": "Saddle"},
			{"id": 2, "value": 25},
		]
		},
	{
		"name": "Wooden Fence Foundation",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 136,
		"description": "This very cheap, narrow foundation is used to build fences around an area.",
		"image": "wooden_fence_foundation.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 7, "count": 10},         
			{"itemId": 75, "count": 3},
			{"itemId": 76, "count": 2}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 10000}
		]
		},
	{
		"name": "Compass",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 137,
		"description": "Use this to find which direction your are traveling.",
		"image": "compass.png",
		"weight": 0.5,
		"recipe": [
			{"itemId": 74, "count": 5},         
			{"itemId": 73, "count": 5},
			{"itemId": 76, "count": 30}
		],
		"stats": [
			{"id": 1, "value": "Navigation"}
		]
		},
	{
		"name": "Scope Attachment",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 138,
		"description": "The carefully shaped crystal lenses in this scope grant the user a telescopic aim when firing. Attach this to a supporting weapon to gain more accurate aiming.",
		"image": "scope_attachment.png",
		"weight": 0.1,
		"recipe": [
			{"itemId": 74, "count": 40},         
			{"itemId": 78, "count": 10},
			{"itemId": 8, "count": 5}
		],
		"stats": [
			{"id": 1, "value": "Attachment"}
		]
		},
	{
		"name": "Slingshot",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 139,
		"description": "A simple ranged weapon that deals damage from afar. Better for knocking out a target than killing it outright. Requires stone to fire.",
		"image": "slingshot.png",
		"weight": 3.0,
		"recipe": [
			{"itemId":7, "count":5},
			{"itemId":76, "count":20},
			{"itemId":10, "count":1}
		],
		"stats": [
			{"id": 1, "value": "Weapon"},
			{"id": 5, "value": 40},
		]
		},
	{
		"name": "Pike",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 140,
		"description": "A powerful weapon tipped with metal. Unlike the Spear, it cannot be thrown.",
		"image": "pike.png",
		"weight": 10.0,
		"recipe": [
			{"itemId":74, "count":10},
			{"itemId":7, "count":10},
			{"itemId":10, "count":20}
		],
		"stats": [
			{"id": 1, "value": "Weapon"},
			{"id": 5, "value": 40},
			{"id": 6, "value": 57.9}
		]
		},
	{
		"name": "Obsidian",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 142,
		"description": "A very rare resource, found underground. Can be broken down and used to make modern tech.",
		"image": "obsidian.png",
		"weight": 1.0,
		"recipe": [],
		"stats": [
			{"id": 1, "value": "Resource"}
		]
		},
	{
		"name": "Dinosaur Gateway",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 143,
		"description": "A large wood and stone gateway that can be used with a Gate to keep most dinosaurs in or out.",
		"image": "dinosaur_gateway.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 7, "count": 140},
			{"itemId": 8, "count": 40},
			{"itemId": 75, "count": 35},
			{"itemId": 76, "count": 25}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 12500}
		]
		},
	{
		"name": "Simple Rifle Ammo",
		"maxStack": 50,
		"decomposes": 120,
		"itemId": 144,
		"description": "An odd bullet and casing, used with forged rifles.",
		"image": "simple_rifle_ammo.png",
		"weight": 0.1,
		"recipe": [
			{"itemId": 74, "count": 2},
			{"itemId": 109, "count": 12}
		],
		"stats": [
			{"id": 1, "value": "Ammunition"}
		]
		},
	{
		"name": "Cementing Paste",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 146,
		"description": "Paste created at Mortar and Pestle.",
		"image": "cementing_paste.png",
		"weight": -1,
		"recipe": [
			{"itemId":8, "count":8},
			{"itemId":11,  "count":4}
		],
		"stats": []
		},
	{
		"name": "Dinosaur Gate",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 147,
		"description": "A large wooden gate that can be used with a gateway to keep dinosaurs in or out. Cannot be destroyed by any dinosaur.",
		"image": "dinosaur_gate.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 7, "count": 60},
			{"itemId": 75, "count": 15},
			{"itemId": 76, "count": 10}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 7500}
		]
		},
	{
		"name": "Oil",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 162,
		"description": "A thick blob of unrefined oil. Can be refined with hide to make gasoline.",
		"image": "oil.png",
		"weight": 1.0,
		"recipe": [],
		"stats": [
			{"id": 1, "value": "Resource"}
		]
		},
	{
		"name": "Silica Pearls",
		"maxStack": 100,
		"decomposes": -1,
		"itemId": 163,
		"description": "These pearls are made almost entirely of silicon. Can be refined into silicon plates.",
		"image": "silica_pearls.png",
		"weight": 0.02,
		"recipe": [],
		"stats": [
			{"id": 1, "value": "Resource"}
		]
		},
	{
		"name": "Gasoline",
		"maxStack": 100,
		"decomposes": -1,
		"itemId": 164,
		"description": "An advanced fuel. Can only be used in machines designed to consume it.",
		"image": "gasoline.png",
		"weight": 0.1,
		"recipe": [
			{"itemId": 10, "count": 5},
			{"itemId": 162, "count": 3}
		],
		"stats": [
			{"id": 1, "value": "Resource"}
		]
		},
	{
		"name": "Electronics",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 165,
		"description": "This multipurpose computer chip can be used to create electronic devices.",
		"image": "electronics.png",
		"weight": 0.01,
		"recipe": [
			{"itemId": 163, "count": 3},
			{"itemId": 74, "count": 1}
		],
		"stats": [
			{"id": 1, "value": "Resource"}
		]
		},
	{
		"name": "Polymer",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 166,
		"description": "These incredibly strong, lightweight plates can be shaped and then heat treated into casings for anything.",
		"image": "polymer.png",
		"weight": 0.25,
		"recipe": [
			{"itemId": 142, "count": 2},
			{"itemId": 146, "count": 2}
		],
		"stats": [
			{"id": 1, "value": "Resource"}
		]
		},
	{
		"name": "Metal Catwalk",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 167,
		"description": "A thin walkway for bridging areas together. Made from metal plates.",
		"image": "metal_catwalk.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 74, "count": 15},
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 6250}
		]
		},
	{
		"name": "Metal Ceiling",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 168,
		"description": "A stable metal-plated concrete ceiling that provides insulation, and doubles as a floor for higher levels.",
		"image": "metal_ceiling.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 74, "count": 35},
			{"itemId": 146, "count": 10}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 10000}
		]
		},
	{
		"name": "Metal Hatchframe",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 169,
		"description": "This metal-plated concrete ceiling has a hole in it for trapdoors.",
		"image": "metal_hatchframe.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 74, "count": 30},
			{"itemId": 146, "count": 8}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 10000}
		]
		},
	{
		"name": "Metal Door",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 170,
		"description": "A stable metal-plated concrete door that provides entrance to structures. Can be locked for security.",
		"image": "metal_door.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 74, "count": 10},
			{"itemId": 146, "count": 4}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 6250}
		]
		},
	{
		"name": "Metal Fence Foundation",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 171,
		"description": "This very strong, narrow foundation is used to build walls around an area.",
		"image": "metal_fence_foundation.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 74, "count": 5},
			{"itemId": 146, "count": 2}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 10000}
		]
		},
	{
		"name": "Metal Foundation",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 172,
		"description": "A foundation is required to build structures in an area. This one is made from sturdy metal-plated concrete.",
		"image": "metal_foundation.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 74, "count": 50},
			{"itemId": 146, "count": 15}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 15000}
		]
		},
	{
		"name": "Behemoth Gate",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 173,
		"description": "A large metal-plated concrete gate that can be used with a Behemoth Gateway to allow even the largest of creatures in or out.",
		"image": "behemoth_gate.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 74, "count": 60},
			{"itemId": 146, "count": 15}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 12500}
		]
		},
	{
		"name": "Behemoth Gateway",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 174,
		"description": "A large metal-plated concrete gateway, reinforced with obsidian polymer, that can be used with a Behemoth Gate to allow even the largest of creatures in or out.",
		"image": "behemoth_gateway.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 74, "count": 135},
			{"itemId": 146, "count": 35},
			{"itemId": 166, "count": 20}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 20000}
		]
		},
	{
		"name": "Metal Ladder",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 175,
		"description": "A simple metal ladder used to climb up or down tall structures. Can also be used to extend existing ladders.",
		"image": "metal_ladder.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 74, "count": 7}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 3125}
		]
		},
	{
		"name": "Metal Pillar",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 176,
		"description": "This metal-plated concrete pillar adds structural integrity to the area it is built under. Can also act as stilts for building on inclines.",
		"image": "metal_pillar.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 74, "count": 25},
			{"itemId": 146, "count": 7}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 6250}
		]
		},
	{
		"name": "Metal Ramp",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 177,
		"description": "An inclined metal-plated concrete floor for travelling up or down levels. Can also be used to make an angled roof.",
		"image": "metal_ramp.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 74, "count": 35},
			{"itemId": 146, "count": 10}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 10000}
		]
		},
	{
		"name": "Metal Trapdoor",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 178,
		"description": "This metal-plated concrete slab can be used to secure hatches.",
		"image": "metal_trapdoor.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 74, "count": 10},
			{"itemId": 146, "count": 4}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 6250}
		]
		},
	{
		"name": "Metal Wall",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 179,
		"description": "A metal-plated concrete wall that insulates the inside from the outside and separates rooms.",
		"image": "metal_wall.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 74, "count": 25},
			{"itemId": 146, "count": 7}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 10000}
		]
		},
	{
		"name": "Metal Doorframe",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 180,
		"description": "A metal-plated concrete wall that provides entrance to a structure.",
		"image": "metal_doorframe.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 74, "count": 20},
			{"itemId": 146, "count": 6}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 10000}
		]
		},
	{
		"name": "Metal Windowframe",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 181,
		"description": "A metal-plated concrete wall, with a hole for a window.",
		"image": "metal_windowframe.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 74, "count": 20},
			{"itemId": 146, "count": 6}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 10000}
		]
		},
	{
		"name": "Metal Window",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 182,
		"description": "Metal plates on hinges that cover windows to provide protection from projectiles and spying.",
		"image": "metal_window.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 74, "count": 7}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 6250}
		]
		},
	{
		"name": "Flare Gun",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 184,
		"description": "A single-use flare lancher. Fires a bright ball of Sparkpowder to temporarily light an area.",
		"image": "flare_gun.png",
		"weight": 0.5,
		"recipe": [
			{"itemId": 7, "count": 4},
			{"itemId": 76, "count": 2},
			{"itemId": 108, "count": 10},
			{"itemId": 109, "count": 2}
		],
		"stats": [
			{"id": 1, "value": "Weapon"},
			{"id": 6, "value": 0}
		]
		},
	{
		"name": "Fabricator",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 185,
		"description": "Place materials along with blueprints in this to create certain high-end machined items.",
		"image": "fabricator.png",
		"weight": 500.0,
		"recipe": [
			{"itemId": 74, "count": 35},
			{"itemId": 146,"count": 20},
			{"itemId": 108,"count": 50},
			{"itemId": 78,"count": 15},
			{"itemId": 162,"count": 10}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 2500}
		]
		},
	{
		"name": "Water Reservoir",
		"maxStack": 100,
		"decomposes": -1,
		"itemId": 186,
		"description": "A standing storage device for holding water. Automatically fills up during rain, can be filled up with the use of a water skin/jar.",
		"image": "water_reservoir.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 8, "count": 30},
			{"itemId": 146,"count": 5},
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 5000}
		]
		},
	{
		"name": "Parachute",
		"maxStack": 20,
		"decomposes": 120,
		"itemId": 187,
		"description": "Use this while falling to slow your fall. Jump while parachuting to deactivate it.",
		"image": "parachute.png",
		"weight": 3.0,
		"recipe": [
			{"itemId": 75, "count": 40},
			{"itemId": 76,"count": 20},
			{"itemId": 10,"count": 10},
		],
		"stats": [
			{"id": 1, "value": "Consumable"}
		]
		},
	{
		"name": "Air Conditioner",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 188,
		"description": "Requires electricity to run. Provides insulation from both the heat and the cold to an area.",
		"image": "air_conditioner.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 74, "count": 80},
			{"itemId": 165, "count": 15},
			{"itemId": 166,"count": 5},
			{"itemId": 78,"count": 15},
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 1000}
		]
		},
	{
		"name": "Electrical Generator",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 189,
		"description": "A large machine that converts gasoline into electricity.",
		"image": "electrical_generator.png",
		"weight": 5.0,
		"recipe": [
			{"itemId": 74, "count": 25},
			{"itemId": 165, "count": 10}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 1000}
		]
		},
	{
		"name": "Electrical Outlet",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 190,
		"description": "An outlet for an electrical grid. When connected to a generator via cables, this provides power to all nearby devices that use electricity.",
		"image": "electrical_outlet.png",
		"weight": 7.5,
		"recipe": [
			{"itemId": 74, "count": 5},
			{"itemId": 7, "count": 15},
			{"itemId": 165, "count": 3}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 100}
		]
		},
	{
		"name": "Inclined Electrical Cable",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 191,
		"description": "An inclined cable for transmitting electricity up and down hills.",
		"image": "inclined_electrical_cable.png",
		"weight": 2.0,
		"recipe": [
			{"itemId": 74, "count": 2},
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 100}
		]
		},
	{
		"name": "Electrical Cable Intersection",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 192,
		"description": "A plus-shaped intersection for a power grid, used for splitting one power cable into three.",
		"image": "Electrical_Cable_Intersection.png",
		"weight": 3.0,
		"recipe": [
			{"itemId": 74, "count": 2},
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 100}
		]
		},
	{
		"name": "Straight Electrical Cable",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 193,
		"description": "A straight cable, used for transmitting electricity across land.",
		"image": "straight_electrical_cable.png",
		"weight": 1.0,
		"recipe": [
			{"itemId": 74, "count": 2},
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 100}
		]
		},
	{
		"name": "Vertical Electrical Cable",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 194,
		"description": "An vertical cable for transmitting electricity up and down cliffs.",
		"image": "vertical_electrical_cable.png",
		"weight": 1.0,
		"recipe": [
			{"itemId": 74, "count": 2},
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 100}
		]
		},
	{
		"name": "Lamppost",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 195,
		"description": "Requires electricity to activate. Lights an area without adding much heat.",
		"image": "lamppost.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 74, "count": 5},
			{"itemId": 78, "count": 10},
			{"itemId": 165, "count": 2}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 500}
		]
		},
	{
		"name": "Refrigerator",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 196,
		"description": "Requires electricity to run. Keeps perishables from spoiling for a long time.",
		"image": "refrigerator.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 74, "count": 120},
			{"itemId": 166, "count": 15},
			{"itemId": 78, "count": 25},
			{"itemId": 165, "count": 10}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 1000}
		]
		},
	{
		"name": "Auto Turret",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 197,
		"description": "Requires electricity to run. Consumes bullets while firing. Can be configured to automatically attack hostiles within range.",
		"image": "auto_turret.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 165, "count": 70},
			{"itemId": 74, "count": 140},
			{"itemId": 146, "count": 50},
			{"itemId": 166, "count": 20},
			
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 1000}
		]
		},
	{
		"name": "Remote Keypad",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 198,
		"description": "Allows remote access to multiple doors and/or lights.",
		"image": "remote_keypad.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 74, "count": 2},
			{"itemId": 146, "count": 1},
			{"itemId": 165, "count": 25},
			
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 100}
		]
		},
	{
		"name": "Metal Irrigation Pipe - Inclined",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 199,
		"description": "An inclined metal pipe for an irrigation network, used for transporting water up and down hills.",
		"image": "metal_irrigation_pipe_inclined.png",
		"weight": 2.0,
		"recipe": [
			{"itemId": 74, "count": 4},
			{"itemId": 146,"count": 2},
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 100}
		]
		},
	{
		"name": "Metal Irrigation Pipe - Tap (Intake)",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 200,
		"description": "The metal intake for an irrigation network that transports water over land.",
		"image": "metal_irrigation_pipe_tap_intake.png",
		"weight": 7.5,
		"recipe": [
			{"itemId": 74, "count": 15},
			{"itemId": 146,"count": 5},
			{"itemId": 7, "count": 10}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 100}
		]
		},
	{
		"name": "Metal Irrigation Pipe - Intersection",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 201,
		"description": "A plus-shaped metal intersection for an irrigation network, used for splitting one water source into three.",
		"image": "metal_irrigation_pipe_intersection.png",
		"weight": 3.0,
		"recipe": [
			{"itemId": 74, "count": 6},
			{"itemId": 146, "count": 3}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 100}
		]
		},
	{
		"name": "Metal Irrigation Pipe - Straight",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 202,
		"description": "A straight metal pipe for an irrigation network, used for transporting water across land.",
		"image": "metal_irrigation_pipe_straight.png",
		"weight": 1.0,
		"recipe": [
			{"itemId": 74, "count": 2},
			{"itemId": 146, "count": 1}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 100}
		]
		},
	{
		"name": "Metal Irrigation Pipe - Tap",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 203,
		"description": "This Metal intake allows water in an irrigation network.",
		"image": "metal_irrigation_pipe_tap.png",
		"weight": 7.5,
		"recipe": [
			{"itemId": 74, "count": 10},
			{"itemId": 146,"count": 4},
			{"itemId": 7, "count": 15}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 100}
		]
		},
	{
		"name": "Metal Irrigation Pipe - Vertical",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 204,
		"description": "A vertical metal pipe for an irrigation network, used for transporting water up and down cliffs.",
		"image": "metal_irrigation_pipe_vertical.png",
		"weight": 1.0,
		"recipe": [
			{"itemId": 74, "count": 2},
			{"itemId": 146,"count": 1},
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 100}
		]
		},
	{
		"name": "Flashlight Attachment",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 205,
		"description": "Press N to activate.",
		"image": "flashlight_attachment.png",
		"weight": 0.1,
		"recipe": [
			{"itemId": 74, "count": 40},
			{"itemId": 78,"count": 40},
			{"itemId": 165,"count": 10},
		],
		"stats": [
			{"id": 1, "value": "Attachment"}
		]
		},
	{
		"name": "Silencer Attachment",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 206,
		"description": "The lubricated materials in this silencer slow the gases released from a gunshot, muffling the sound. Attach this to a supporting weapon for reduced noise when firing.",
		"image": "flashlight_attachment.png",
		"weight": 0.1,
		"recipe": [
			{"itemId": 74, "count": 50},
			{"itemId": 162,"count": 5},
			{"itemId": 217,"count": 20},
			{"itemId": 10, "count": 10}
		],
		"stats": [
			{"id": 1, "value": "Attachment"}
		]
		},
	{
		"name": "Carbonemys Saddle",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 207,
		"description": "Equip a Carbonemys with this to ride it.",
		"image": "carbonemys_saddle.png",
		"weight": 20.0,
		"recipe": [
			{"itemId":10, "count":170},
			{"itemId":76, "count":95},
			{"itemId":146, "count":10}
		],
		"stats": [
			{"id": 1, "value": "Saddle"},
			{"id": 2, "value": 50},
		]
		},
	{
		"name": "Sarco Saddle",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 208,
		"description": "Equip a Sarco with this to ride it.",
		"image": "sarco_saddle.png",
		"weight": 20.0,
		"recipe": [
			{"itemId":10, "count":230},
			{"itemId":76, "count":75},
			{"itemId":146, "count":20}
		],
		"stats": [
			{"id": 1, "value": "Saddle"},
			{"id": 2, "value": 50},
		]
		},
	{
		"name": "Ankylo Saddle",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 209,
		"description": "Equip a Ankylo with this to ride it.",
		"image": "ankylo_saddle.png",
		"weight": 20.0,
		"recipe": [
			{"itemId":10, "count":260},
			{"itemId":76, "count":140},
			{"itemId":74, "count":10}
		],
		"stats": [
			{"id": 1, "value": "Saddle"},
			{"id": 2, "value": 25},
		]
		},
	{
		"name": "Mammoth Saddle",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 210,
		"description": "Equip a Mammoth with this to ride it.",
		"image": "mammoth_saddle.png",
		"weight": 20.0,
		"recipe": [
			{"itemId":10, "count":260},
			{"itemId":76, "count":140},
			{"itemId":74, "count":10}
		],
		"stats": [
			{"id": 1, "value": "Saddle"},
			{"id": 2, "value": 25},
		]
		},
	{
		"name": "Megalodon Saddle",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 211,
		"description": "Equip a Megalodon with this to ride it.",
		"image": "megalodon_saddle.png",
		"weight": 20.0,
		"recipe": [
			{"itemId":10, "count":290},
			{"itemId":76, "count":155},
			{"itemId":74, "count":30}
		],
		"stats": [
			{"id": 1, "value": "Saddle"},
			{"id": 2, "value": 50},
		]
		},
	{
		"name": "Sabertooth Saddle",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 212,
		"description": "Equip a Sabertooth with this to ride it.",
		"image": "sabertooth_saddle.png",
		"weight": 20.0,
		"recipe": [
			{"itemId":10, "count":290},
			{"itemId":76, "count":155},
			{"itemId":74, "count":20}
		],
		"stats": [
			{"id": 1, "value": "Saddle"},
			{"id": 2, "value": 25},
		]
		},
	{
		"name": "Carno Saddle",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 213,
		"description": "Equip a Carno with this to ride it.",
		"image": "carno_saddle.png",
		"weight": 20.0,
		"recipe": [
			{"itemId":10, "count":320},
			{"itemId":76, "count":170},
			{"itemId":74, "count":30}
		],
		"stats": [
			{"id": 1, "value": "Saddle"},
			{"id": 2, "value": 50},
		]
		},
	{
		"name": "Argentavis Saddle",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 214,
		"description": "Equip an Argentavis with this to ride it.",
		"image": "argentavis_saddle.png",
		"weight": 20.0,
		"recipe": [
			{"itemId":10, "count":350},
			{"itemId":76, "count":185},
			{"itemId": 11, "itemId2": 217, "count":150}
		],
		"stats": [
			{"id": 1, "value": "Saddle"},
			{"id": 2, "value": 25},
		]
		},
	{
		"name": "Plesiosaur Saddle",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 215,
		"description": "Equip a Plesiosaur with this to ride it.",
		"image": "plesiosaur_saddle.png",
		"weight": 20.0,
		"recipe": [
			{"itemId": 10, "count": 400},
			{"itemId": 76, "count": 250},
			{"itemId": 146, "count": 65},
			{"itemId": 163, "count": 40}
		],
		"stats": [
			{"id": 1, "value": "Saddle"},
			{"id": 2, "value": 25},
		]
		},
	{
		"name": "Keratin",
		"maxStack": 100,
		"decomposes": -1,
		"itemId": 217,
		"description": "A firm, flexible material. Can be found in some animal horns, plates, shells, and ridges.",
		"image": "keratin.png",
		"weight": 0.01,
		"recipe": [],
		"stats": []
		},
	{
		"name": "Holo-Scope Attachment",
		"maxStack": 1,
		"decomposes": -1,
		"itemId": 219,
		"description": "This advanced scope can tell friends from strangers. Attach this to a supporting weapon to gain more accurate aiming.",
		"image": "holo_scope_attachment.png",
		"weight": 0.1,
		"recipe": [
			{"itemId": 74, "count": 40},
			{"itemId": 78, "count": 40},
			{"itemId": 165, "count": 30}
		],
		"stats": [
			{"id": 1, "value": "Attachment"}
		]
		},
	{
		"name": "Laser Attachment",
		"maxStack": 1,
		"decomposes": -1,
		"itemId": 220,
		"description": "This advanced aiming device places a red dot where the weapon is pointed. Attach this to a supporting weapon to add a laser sight.",
		"image": "laser_attachment.png",
		"weight": 0.1,
		"recipe": [
			{"itemId": 74, "count": 50},
			{"itemId": 78, "count": 60},
			{"itemId": 165, "count": 40}
		],
		"stats": [
			{"id": 1, "value": "Attachment"}
		]
		},
	{
		"name": "Flak Leggings",
		"maxStack": 1,
		"decomposes": -1,
		"itemId": 222,
		"description": "Provides heavy physical protection, but makes the elements harder to endure.",
		"image": "flak_leggings.png",
		"weight": 0.5,
		"recipe": [
			{"itemId": 74, "count": 16},
			{"itemId": 10, "count": 12},
			{"itemId": 76, "count": 5}
		],
		"stats": [
			{"id": 1, "value": "Legs"},
			{"id": 2, "value": 100},
			{"id": 3, "value": 15},
			{"id": 4, "value": -7}
		]
		},
	{
		"name": "Flak Chestpiece",
		"maxStack": 1,
		"decomposes": -1,
		"itemId": 223,
		"description": "Provides heavy physical protection, but makes the elements harder to endure.",
		"image": "flak_chestpiece.png",
		"weight": 0.5,
		"recipe": [
			{"itemId": 74, "count": 10},
			{"itemId": 10, "count": 10},
			{"itemId": 76, "count": 4}
		],
		"stats": [
			{"id": 1, "value": "Chest"},
			{"id": 2, "value": 100},
			{"id": 3, "value": 15},
			{"id": 4, "value": -7}
		]
		},
	{
		"name": "Flak Helmet",
		"maxStack": 1,
		"decomposes": -1,
		"itemId": 224,
		"description": "Provides heavy physical protection, but makes the elements harder to endure.",
		"image": "flak_helmet.png",
		"weight": 0.5,
		"recipe": [
			{"itemId": 74, "count": 10},
			{"itemId": 10, "count": 7},
			{"itemId": 76, "count": 3}
		],
		"stats": [
			{"id": 1, "value": "Head"},
			{"id": 2, "value": 100},
			{"id": 3, "value": 10},
			{"id": 4, "value": -3},
		]
		},
	{
		"name": "Flak Boots",
		"maxStack": 1,
		"decomposes": -1,
		"itemId": 225,
		"description": "Provides heavy physical protection, but makes the elements harder to endure.",
		"image": "flak_boots.png",
		"weight": 0.5,
		"recipe": [
			{"itemId": 74, "count": 8},
			{"itemId": 10, "count": 6},
			{"itemId": 76, "count": 4}
		],
		"stats": [
			{"id": 1, "value": "Feet"},
			{"id": 2, "value": 100},
			{"id": 3, "value": 10},
			{"id": 4, "value": -4},
		]
		},
	{
		"name": "Flak Gauntlets",
		"maxStack": 1,
		"decomposes": -1,
		"itemId": 226,
		"description": "Provides heavy physical protection, but makes the elements harder to endure.",
		"image": "flak_gauntlets.png",
		"weight": 0.5,
		"recipe": [
			{"itemId": 74, "count": 6},
			{"itemId": 10, "count": 5},
			{"itemId": 76, "count": 2}
		],
		"stats": [
			{"id": 1, "value": "Hands"},
			{"id": 2, "value": 100},
			{"id": 3, "value": 10},
			{"id": 4, "value": -4},
		]
		},
	{
		"name": "Enduro Stew",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 227,
		"description": "This hearty dish is like a workout in the form of a meal. You will find yourself hitting harder and running longer after eating this.",
		"image": "enduro_stew.png",
		"weight": 0.1,
		"recipe": [
			{"itemId": 14, "count": 9},
			{"itemId": 234, "count": 5},
			{"itemId": 232, "count": 5},
			{"itemId": 120, "count": 10},
			{"itemId": 124, "count": 2},
		],
		"stats": [
			{"id":1 , "value": "Consumable"},
			{"id":9 , "value": "5:00"}
		]
		},
	{
		"name": "Lazarus Chowder",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 228,
		"description": "This creamy dish improves the body's natural constitution. You will recover from injury more quickly after eating this, and your body will need less oxygen.",
		"image": "lazarus_chowder.png",
		"weight": 0.1,
		"recipe": [
			{"itemId": 14, "count": 9},
			{"itemId": 234, "count": 5},
			{"itemId": 233, "count": 5},
			{"itemId": 120, "count": 10},
			{"itemId": 123, "count": 2},
			{"itemId": 47, "count": 1}
		],
		"stats": [
			{"id":1 , "value": "Consumable"},
			{"id":9 , "value": "5:00:00"}
		]
		},
	{
		"name": "Calien Soup",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 229,
		"description": "This simple vegetarian dish refreshes your body like an oasis. Consume it to gain increased hyperthermic insulation, and slow your rate of water consumption.",
		"image": "calien_soup.png",
		"weight": 0.1,
		"recipe": [
			{"itemId": 99, "count": 5},
			{"itemId": 119, "count": 20},
			{"itemId": 117, "count": 20},
			{"itemId": 120, "count": 10},
			{"itemId": 124, "count": 2},
		],
		"stats": [
			{"id":1 , "value": "Consumable"},
			{"id":9 , "value": "5:00:00"}
		]
		},
	{
		"name": "Fria Curry",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 230,
		"description": "This spicy vegetarian dish fills the body with a comfortable warmth. It controls your appetite while helping you ignore cold.",
		"image": "fria_curry.png",
		"weight": 0.1,
		"recipe": [
			{"itemId": 233, "count": 5},
			{"itemId": 234, "count": 5},
			{"itemId": 118, "count": 20},
			{"itemId": 120, "count": 10},
			{"itemId": 123, "count": 2},
		],
		"stats": [
			{"id":1 , "value": "Consumable"},
			{"id":9 , "value": "5:00"}
		]
		},
	{
		"name": "Focal Chili",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 231,
		"description": "This filling dish is full of nutritional energy. Consume it to gain increased crafting speed, and gain increased movement speed. Effect lasts 15 minutes.",
		"image": "focal_chili.png",
		"weight": 0.1,
		"recipe": [
			{"itemId": 14, "count": 9},
			{"itemId": 99, "count": 5},
			{"itemId": 117, "count": 20},
			{"itemId": 118, "count": 20},
			{"itemId": 119, "count": 20},
			{"itemId": 120, "count": 10},
		],
		"stats": [
			{"id":1 , "value": "Consumable"},
			{"id":9 , "value": "5:00"}
		]
		},
	{
		"name": "Savoroot",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 232,
		"description": "This starchy tuber grows naturally in densely wooded areas. It is very hearty, but tastes better when cooked.",
		"image": "savoroot.png",
		"weight": 0.1,
		"recipe": [],
		"stats": [
			{"id":1 , "value": "Consumable"},
			{"id":8 , "value": "+20"},
			{"id":11 , "value": "+10"},
			{"id":9 , "value": "5:00"}
		]
		},
	{
		"name": "Longrass",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 233,
		"description": "This grain plant grows best in open, fertile areas. It can be eaten by the cob but more clever chefs will think of other options.",
		"image": "longrass.png",
		"weight": 0.1,
		"recipe": [],
		"stats": [
			{"id":1 , "value": "Consumable"},
			{"id":7 , "value": "+0.5"},
			{"id":8 , "value": "+20"},
			{"id":11 , "value": "+17"},
			{"id":9 , "value": "5:00"}
		]
		},
	{
		"name": "Rockarrot",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 234,
		"description": "This root vegetable seems to thrive near mammals, and not dinosaurs. As such, it can be found mostly in the mountains.",
		"image": "rockarrot.png",
		"weight": 0.1,
		"recipe": [],
		"stats": [
			{"id":1 , "value": "Consumable"},
			{"id":8 , "value": "+20"},
			{"id":11 , "value": "+10"},
			{"id":9 , "value": "5:00"}
		]
		},
	{
		"name": "Azulberry Seed",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 235,
		"description": "Eat it to gain a tiny amount of nourishment, or plant it to grow your own azulberry bush. Can be planted in Small, Medium, or Large crop plots.",
		"image": "azulberry_seed.png",
		"weight": 0.01,
		"recipe": [],
		"stats": [
			{"id":1 , "value": "Consumable"},
			{"id":8 , "value": "+1"}
		]
		},
	{
		"name": "Tintoberry Seed",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 236,
		"description": "Eat it to gain a tiny amount of nourishment, or plant it to grow your own Tintoberry bush. Can be planted in Small, Medium, or Large Crop plots.",
		"image": "tintoberry_seed.png",
		"weight": 0.01,
		"recipe": [],
		"stats": [
			{"id":1 , "value": "Consumable"},
			{"id":8 , "value": "+1"}
		]
		},
	{
		"name": "Mejoberry Seed",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 237,
		"description": "Eat it to gain a tiny amount of nourishment, or plant it to grow your own Mejoberry bush. Can be planted in Small, Medium, or Large Crop plots.",
		"image": "mejoberry_seed.png",
		"weight": 0.01,
		"recipe": [],
		"stats": [
			{"id":1 , "value": "Consumable"},
			{"id":8 , "value": "+1"}
		]
		},
	{
		"name": "Narcoberry Seed",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 238,
		"description": "Eat it to gain a tiny amount of nourishment, or plant it to grow your own Nacroberry bush. Can be planted in Small, Medium, or Large Crop Plots.",
		"image": "narcoberry_seed.png",
		"weight": 0.01,
		"recipe": [],
		"stats": [
			{"id":1 , "value": "Consumable"},
			{"id":8 , "value": "+1"}
		]
		},
	{
		"name": "Stimberry Seed",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 239,
		"description": "Eat it to gain a tiny amount of nourishment, or plant it to grow your own Stimberry bush. Can be planted in Small, Medium, or Large Crop plots.",
		"image": "stimberry_seed.png",
		"weight": 0.01,
		"recipe": [],
		"stats": [
			{"id":1 , "value": "Consumable"},
			{"id":8 , "value": "+1"}
		]
		},
	{
		"name": "Savoroot Seed",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 240,
		"description": "Eat it to gain a tiny amount of nourishment, or plant it to grow your own savoroot crop. Can be planted in Medium or Large crop plots.",
		"image": "savoroot_seed.png",
		"weight": 0.01,
		"recipe": [],
		"stats": [
			{"id":1 , "value": "Consumable"},
			{"id":8 , "value": "+1"}
		]
		},	
	{
		"name": "Longrass Seed",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 241,
		"description": "Eat it to gain a tiny amount of nourishment, or plant it to grow your own longrass crop. Can be planted in Medium or Large crop plots.",
		"image": "longrass_seed.png",
		"weight": 0.01,
		"recipe": [],
		"stats": [
			{"id":1 , "value": "Consumable"},
			{"id":8 , "value": "+1"}
		]
		},	
	{
		"name": "Rockarrot Seed",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 242,
		"description": "Eat it to gain a tiny amount of nourishment, or plant it to grow your own rockarrot crop. Can be planted in Medium or Large crop plots.",
		"image": "rockarrot_seed.png",
		"weight": 0.01,
		"recipe": [],
		"stats": [
			{"id":1 , "value": "Consumable"},
			{"id":8 , "value": "+1"}
		]
		},
	{
		"name": "Fabricated Pistol",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 244,
		"description": "This advanced pistol gains a high rate of fire and a large magazine size by sacrificing stopping power.",
		"image": "fabricated_pistol.png",
		"weight": 2.5,
		"recipe": [
			{"itemId": 166, "count": 35},
			{"itemId": 74, "count": 20},
			{"itemId": 146, "count": 30},
		],
		"stats": [
			{"id":1 , "value": "Weapon"},
			{"id":6 , "value": "18.6"},
			{"id":5 , "value": 210}
		]
		},
	{
		"name": "Advanced Bullet",
		"maxStack": 50,
		"decomposes": 120,
		"itemId": 245,
		"description": "Primarily used with fabricated handguns.",
		"image": "advanced_bullet.png",
		"weight": 0.1,
		"recipe": [
			{"itemId": 74, "count": 0.5},
			{"itemId": 109, "count": 1.5},
		],
		"stats": [
			{"id":1 , "value": "Ammunition"},
		]
		},
	{
		"name": "Advanced Rifle Bullet",
		"maxStack": 50,
		"decomposes": 120,
		"itemId": 246,
		"description": "Primarily used with fabricated rifles.",
		"image": "advanced_rifle_bullet.png",
		"weight": 0.1,
		"recipe": [
			{"itemId": 74, "count": 1.5},
			{"itemId": 109, "count": 4.5},
		],
		"stats": [
			{"id":1 , "value": "Ammunition"},
		]
		},
	{
		"name": "Rocket Propelled Grenade",
		"maxStack": 50,
		"decomposes": 120,
		"itemId": 247,
		"description": "Primarily used with rocket launchers.",
		"image": "rocket_propelled_grenade.png",
		"weight": 0.1,
		"recipe": [
			{"itemId": 109, "count": 30},
			{"itemId": 78, "count": 5},
			{"itemId": 146, "count": 20},
			{"itemId": 166, "count": 10},
			{"itemId": 74, "count": 12}
		],
		"stats": [
			{"id":1 , "value": "Ammunition"},
		]
		},
	{
		"name": "Medium Crop Plot",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 248,
		"description": "A medium garden plot, with a fence to keep out vermin.",
		"image": "medium_crop_plot.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 7, "count": 40},
			{"itemId": 75, "count": 20},
			{"itemId": 76, "count": 30},
			{"itemId": 8, "count": 50},
		],
		"stats": [
			{"id":1 , "value": "Structure"},
			{"id":5 , "value": 5000}
		]
		},
	{
		"name": "Large Crop Plot",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 249,
		"description": "A large garden plot, with a fence to keep out vermin.",
		"image": "large_crop_plot.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 7, "count": 80},
			{"itemId": 75, "count": 40},
			{"itemId": 76, "count": 60},
			{"itemId": 8, "count": 100},
		],
		"stats": [
			{"id":1 , "value": "Structure"},
			{"id":5 , "value": 5000}
		]
		},
	{
		"name": "Rare Flower",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 250,
		"description": "Even the smell of this flower makes you slightly angry.",
		"image": "rare_flower.png",
		"weight": 0.01,
		"recipe": [],
		"stats": [
			{"id": 1, "value": "Resource"},
		]
		},
	{
		"name": "Rare Mushroom",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 251,
		"description": "You feel lightheaded after just touching this. Ingesting it would be dangerous.",
		"image": "rare_mushroom.png",
		"weight": 0.01,
		"recipe": [],
		"stats": [
			{"id": 1, "value": "Resource"},
		]
		},
	{
		"name": "Raw Prime Meat",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 252,
		"description": "Eating raw food will sate hunger, but is unhealthy for humans. This excellent cut spoils very quickly. Most wild carnivores love this meat.",
		"image": "raw_prime_meat.png",
		"weight": 0.1,
		"recipe": [],
		"stats": [
			{"id": 1, "value": "Consumable"},
			{"id": 7, "value": "-5"},
			{"id": 8, "value": "+20"},
			{"id": 9, "value": "2:20"}
		]
		},
	{
		"name": "Cooked Prime Meat",
		"maxStack": 30,
		"decomposes": 120,
		"itemId": 253,
		"description": "Sates your hunger, and provides health while being digested. More effective than normal meat. Wild Carnivores like this meat a lot.",
		"image": "cooked_prime_meat.png",
		"weight": 0.1,
		"recipe": [
			{"itemId": 252, "count": 1}
		],
		"stats": [
			{"id": 1, "value": "Consumable"},
			{"id": 7, "value": "+20"},
			{"id": 8, "value": "+35"},
			{"id": 9, "value": "45:00"}
		]
		},
	{
		"name": "Battle Tartare",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 254,
		"description": "Only eat this dish when you intend to go into a brawl. It causes pain and stress to your body, but grants you almost supernatural strength, speed, and resilience. Warning: This concoction can be habit forming.",
		"image": "battle_tartare.png",
		"weight": 0.1,
		"recipe": [
			{"itemId": 253, "count": 3},
			{"itemId": 120, "count": 20},
			{"itemId": 124, "count": 8},
			{"itemId": 250, "count": 2},
			{"itemId": 99, "count": 1},
			{"itemId": 233, "count": 1},
		],
		"stats": [
			{"id": 1, "value": "Consumable"},
			{"id": 9, "value": "5:00:00"}
		]
		},
	{
		"name": "Shadow Steak Saute",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 255,
		"description": "This dish grants you clarity of the night. Consume it to see more light, ignore most weather, and strady your aim. Can be dangerous to use in daylight.",
		"image": "shadow_steak_saute.png",
		"weight": 0.1,
		"recipe": [
			{"itemId": 253, "count": 3},
			{"itemId": 120, "count": 20},
			{"itemId": 123, "count": 8},
			{"itemId": 251, "count": 2},
			{"itemId": 232, "count": 1},
			{"itemId": 234, "count": 1},
		],
		"stats": [
			{"id": 1, "value": "Consumable"},
			{"id": 9, "value": "5:00:00"}
		]
		},
	{
		"name": "Metal Dinosaur Gateway",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 265,
		"description": "A large metal gateway that can be used with a gate to keep most dinosaurs in or out.",
		"image": "metal_dinosaur_gateway.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 74, "count": 85},
			{"itemId": 146, "count": 25}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 10000}
		]
		},
	{
		"name": "Metal Dinosaur Gate",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 266,
		"description": "A large metal gate that can be used with a Gateway to keep most dinosaurs in or out.",
		"image": "metal_dinosaur_gate.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 74, "count": 35},
			{"itemId": 146, "count": 10}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 6250}
		]
		},
	{
		"name": "Simple Shotgun Ammo",
		"maxStack": 50,
		"decomposes": 120,
		"itemId": 268,
		"description": "A few simple bullets in a hide casing, used with forged shotguns.",
		"image": "simple_shotgun_bullet.png",
		"weight": 0.1,
		"recipe": [
			{"itemId": 4, "count": 3},
			{"itemId": 74, "count": 1},
			{"itemId": 109, "count": 3}
		],
		"stats": [
			{"id":1 , "value": "Ammunition"},
		]
		},
	{
		"name": "Spyglass",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 283,
		"description": "This instrument, while primitive, is quite effective at long-range reconaissance.",
		"image": "spyglass.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 7, "count": 5},
			{"itemId": 10, "count": 10},
			{"itemId": 76, "count": 10},
			{"itemId": 78, "count": 2}
		],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
	{
		"name": "Brontosaurus Egg",
		"maxStack": 100,
		"decomposes": 1000,
		"itemId": 288,
		"description": "Eat it to gain tremendous nourishment, or use it in recipes, or...",
		"image": "brontosaurus_egg.jpg",
		"weight": 20.0,
		"recipe": [
		],
		"stats": [
			{"id": 1, "value": "Consumable"},
			{"id": 7, "value": "+100"},
			{"id": 8, "value": "+100"},
			{"id": 12, "value": "+100"},
			{"id": 9, "value": "2 days"}
		]
		},
	{
		"name": "Parasaur Egg",
		"maxStack": 100,
		"decomposes": 1000,
		"itemId": 289,
		"description": "Eat it to gain tremendous nourishment, or use it in recipes, or...",
		"image": "parasaur_egg.png",
		"weight": 4.0,
		"recipe": [
		],
		"stats": [
			{"id": 1, "value": "Consumable"},
			{"id": 7, "value": "+25"},
			{"id": 8, "value": "+25"},
			{"id": 12, "value": "+25"},
			{"id": 9, "value": "2 days"}
		]
		},
	{
		"name": "Raptor Egg",
		"maxStack": 100,
		"decomposes": 1000,
		"itemId": 290,
		"description": "Eat it to gain tremendous nourishment, or use it in recipes, or...",
		"image": "raptor_egg.png",
		"weight": 7.0,
		"recipe": [
		],
		"stats": [
			{"id": 1, "value": "Consumable"},
			{"id": 7, "value": "+35"},
			{"id": 8, "value": "+35"},
			{"id": 12, "value": "+35"},
			{"id": 9, "value": "2 days"}
		]
		},
	{
		"name": "T-Rex Egg",
		"maxStack": 100,
		"decomposes": 1000,
		"itemId": 291,
		"description": "Eat it to gain tremendous nourishment, or use it in recipes, or...",
		"image": "t_rex_egg.png",
		"weight": 15.0,
		"recipe": [
		],
		"stats": [
			{"id": 1, "value": "Consumable"},
			{"id": 7, "value": "+80"},
			{"id": 8, "value": "+80"},
			{"id": 12, "value": "+80"},
			{"id": 9, "value": "2 days"}
		]
		},
	{
		"name": "Triceratops Egg",
		"maxStack": 100,
		"decomposes": 1000,
		"itemId": 292,
		"description": "Eat it to gain tremendous nourishment, or use it in recipes, or...",
		"image": "triceratops_egg.png",
		"weight": 9.0,
		"recipe": [
		],
		"stats": [
			{"id": 1, "value": "Consumable"},
			{"id": 8, "value": "+45"},
			{"id": 9, "value": "2 days"}
		]
		},
	{
		"name": "Dodo Egg",
		"maxStack": 100,
		"decomposes": 1000,
		"itemId": 294,
		"description": "Eat it to gain tremendous nourishment, or use it in recipes, or...",
		"image": "dodo_egg.png",
		"weight": 3.0,
		"recipe": [
		],
		"stats": [
			{"id": 1, "value": "Consumable"},
			{"id": 7, "value": "+20"},
			{"id": 8, "value": "+20"},
			{"id": 12, "value": "+20"},
			{"id": 9, "value": "2 days"}
		]
		},
	{
		"name": "Preserving Bin",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 295,
		"description": "Burns simple fuel at low temperatures to dehydrate food and kill bacteria. Keeps perishables from spoiling for a small time.",
		"image": "preserving_bin.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 8, "count": 30},
			{"itemId": 7, "count": 30},
			{"itemId": 75, "count": 10},
			{"itemId": 76, "count": 20}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 600}
		]
		},
	{
		"name": "Metal Spike Wall",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 296,
		"description": "These incredibly sharp metal spikes are dangerous to any that touch them. Large creatures take more damage.",
		"image": "metal_spike_wall.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 74, "count": 25},
			{"itemId": 10, "count": 15},
			{"itemId": 76, "count": 20}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 5000}
		]
		},
	{
		"name": "Spino Saddle",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 303,
		"description": "Equip a Spino with this to ride it.",
		"image": "spino_saddle.png",
		"weight": 20.0,
		"recipe": [
			{"itemId": 10, "count": 380},
			{"itemId": 76, "count": 200},
			{"itemId": 146, "count": 45},
			{"itemId": 163, "count": 25}
		],
		"stats": [
			{"id": 1, "value": "Saddle"},
			{"id": 2, "value": 50},
		]
		},
	{
		"name": "Vault",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 306,
		"description": "A large metal vault to securely store goods in.",
		"image": "vault.png",
		"weight": 20.0,
		"recipe": [
			{"itemId": 74, "count": 300},
			{"itemId": 146, "count": 60},
			{"itemId": 162, "count": 30},
			{"itemId": 166, "count": 60}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 50000}
		]
		},
	{
		"name": "Wooden Spike Wall",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 307,
		"description": "These incredibly sharp wooden stakes are dangerous to any that touch them. Larger creatures take more damage.",
		"image": "wooden_spike_wall.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 7,"count": 40},
			{"itemId": 10,"count": 10},
			{"itemId": 76,"count": 30}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 3500}
		]
		},
	{
		"name": "Bookshelf",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 309,
		"description": "A large bookshelf to store Blueprints, Notes, and other small trinkets in.",
		"image": "bookshelf.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 7,"count": 100},
			{"itemId": 75,"count": 45},
			{"itemId": 76,"count": 35}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 2000}
		]
		},
	{
		"name": "Stone Fence Foundation",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 310,
		"description": "This strong, narrow foundation is used to build walls around an area.",
		"image": "stone_fence_foundation.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 8,"count": 15},
			{"itemId": 7,"count": 10},
			{"itemId": 75,"count": 10}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 10000}
		]
		},
	{
		"name": "Stone Wall",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 311,
		"description": "A brick-and-mortar wall that insulates the inside from the outside and seperates rooms.",
		"image": "stone_wall.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 8,"count": 40},
			{"itemId": 7,"count": 20},
			{"itemId": 75,"count": 15}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 10000}
		]
		},
	{
		"name": "Ichthyosaurus Saddle",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 314,
		"description": "Equip a Ichthyosaurus with this to ride it.",
		"image": "ichthyosaurus_saddle.png",
		"weight": 20.0,
		"recipe": [
			{"itemId": 10, "count": 55},
			{"itemId": 76, "count": 50},
			{"itemId": 7, "count": 20},
			{"itemId": 9, "count": 10},
			{"itemId": 73, "count": 8}
		],
		"stats": [
			{"id": 1, "value": "Saddle"},
			{"id": 2, "value": 25},
		]
		},
	{
		"name": "Stone Ceiling",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 315,
		"description": "A stable brick-and-mortar ceiling that insulates the inside from the outside, and doubles as a floor for higher levels.",
		"image": "stone_ceiling.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 8,"count": 60},
			{"itemId": 7,"count": 30},
			{"itemId": 75,"count": 20}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 10000}
		]
		},
	{
		"name": "Stone Hatchframe",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 316,
		"description": "This brick-and-mortar ceiling has a hole in it for trapdoor.",
		"image": "stone_hatchframe.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 8,"count": 50},
			{"itemId": 7,"count": 25},
			{"itemId": 75,"count": 15}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 10000}
		]
		},
	{
		"name": "Reinforced Wooden Door",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 317,
		"description": "A reinforced wooden door that provides entrance to structures. Can be locked for security.",
		"image": "reinforced_wooden_door.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 8,"count": 20},
			{"itemId": 7,"count": 14},
			{"itemId": 75,"count": 8}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 6250}
		]
		},
	{
		"name": "Stone Foundation",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 318,
		"description": "A foundation is required to build structures in an area. This one is made from brick-and-mortar.",
		"image": "stone_foundation.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 8,"count": 80},
			{"itemId": 7,"count": 40},
			{"itemId": 75,"count": 30}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 15000}
		]
		},
	{
		"name": "Reinforced Dinosaur Gate",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 319,
		"description": "A large, reinforced wooden gat that can be used with a Gateway to keep dinosaurs in or out.",
		"image": "reinforced_dinosaur_gate.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 8,"count": 60},
			{"itemId": 7,"count": 30},
			{"itemId": 75,"count": 20}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 6250}
		]
		},
	{
		"name": "Stone Dinosaur Gateway",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 320,
		"description": "A large brick-and-mortar gateway that can be used with a Gate to keep most dinosaurs in or out.",
		"image": "stone_dinosaur_gateway.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 8,"count": 140},
			{"itemId": 7,"count": 70},
			{"itemId": 75,"count": 50}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 10000}
		]
		},
	{
		"name": "Stone Pillar",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 321,
		"description": "Adds structural integrity to the area it is built under.",
		"image": "stone_pillar.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 8,"count": 30},
			{"itemId": 7,"count": 15},
			{"itemId": 75,"count": 10}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 6250}
		]
		},
	{
		"name": "Stone Doorframe",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 322,
		"description": "A brick-and-mortar wall that provides entrance to a structure.",
		"image": "stone_doorframe.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 8,"count": 30},
			{"itemId": 7,"count": 16},
			{"itemId": 75,"count": 12}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 10000}
		]
		},
	{
		"name": "Stone Windowframe",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 323,
		"description": "A brick-and-mortar wall with a hole for a window.",
		"image": "stone_windowframe.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 8,"count": 35},
			{"itemId": 7,"count": 18},
			{"itemId": 75,"count": 12}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 10000}
		]
		},
	{
		"name": "Tripwire Alarm Trap",
		"maxStack": 10,
		"decomposes": 120,
		"itemId": 326,
		"description": "Place two of these ear each other to create an alarm trap.",
		"image": "tripwire_alarm_trap.png",
		"weight": 0.5,
		"recipe": [
			{"itemId": 9,"count": 3},
			{"itemId": 7,"count": 5},
			{"itemId": 76,"count": 30},
			{"itemId": 10,"count": 6},
			{"itemId": 162,"count": 2}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 100}
		]
		},
	{
		"name": "Carno Egg",
		"maxStack": 100,
		"decomposes": 1800,
		"itemId": 348,
		"description": "Eat it to gain tremendous nourishment, or use it in recipes, or...",
		"image": "carno_egg.png",
		"weight": 12.0,
		"recipe": [
		],
		"stats": [
			{"id": 1, "value": "Consumable"},
			{"id": 7, "value": "+55"},
			{"id": 8, "value": "+55"},
			{"id": 12, "value": "+55"},
			{"id": 9, "value": "8 days"}
		]
		},
	{
		"name": "Dilo Egg",
		"maxStack": 100,
		"decomposes": 1800,
		"itemId": 349,
		"description": "Eat it to gain tremendous nourishment, or use it in recipes, or...",
		"image": "dilo_egg.png",
		"weight": 3.0,
		"recipe": [
		],
		"stats": [
			{"id": 1, "value": "Consumable"},
			{"id": 7, "value": "+20"},
			{"id": 8, "value": "+20"},
			{"id": 12, "value": "+20"},
			{"id": 9, "value": "8 days"}
		]
		},
	{
		"name": "Pteranodon Egg",
		"maxStack": 100,
		"decomposes": 1800,
		"itemId": 350,
		"description": "Eat it to gain tremendous nourishment, or use it in recipes, or...",
		"image": "pteranodon_egg.png",
		"weight": 7.0,
		"recipe": [
		],
		"stats": [
			{"id": 1, "value": "Consumable"},
			{"id": 7, "value": "+35"},
			{"id": 8, "value": "+35"},
			{"id": 12, "value": "+35"},
			{"id": 9, "value": "8 days"}
		]
		},
	{
		"name": "Sarco Egg",
		"maxStack": 100,
		"decomposes": 1800,
		"itemId": 351,
		"description": "Eat it to gain tremendous nourishment, or use it in recipes, or...",
		"image": "sarco_egg.png",
		"weight": 15.0,
		"recipe": [
		],
		"stats": [
			{"id": 1, "value": "Consumable"},
			{"id": 7, "value": "+80"},
			{"id": 8, "value": "+80"},
			{"id": 12, "value": "+80"},
			{"id": 9, "value": "8 days"}
		]
		},
	{
		"name": "Pulminoscorpius Egg",
		"maxStack": 100,
		"decomposes": 1800,
		"itemId": 352,
		"description": "Eat it to gain tremendous nourishment, or use it in recipes, or...",
		"image": "pulminoscorpius_egg.png",
		"weight": 9.0,
		"recipe": [
		],
		"stats": [
			{"id": 1, "value": "Consumable"},
			{"id": 7, "value": "+45"},
			{"id": 8, "value": "+45"},
			{"id": 12, "value": "+45"},
			{"id": 9, "value": "8 days"}
		]
		},
	{
		"name": "Araneo Egg",
		"maxStack": 100,
		"decomposes": 1800,
		"itemId": 353,
		"description": "Eat it to gain tremendous nourishment, or use it in recipes, or...",
		"image": "araneo_egg.png",
		"weight": 9.0,
		"recipe": [
		],
		"stats": [
			{"id": 1, "value": "Consumable"},
			{"id": 7, "value": "+45"},
			{"id": 8, "value": "+45"},
			{"id": 12, "value": "+45"},
			{"id": 9, "value": "8 days"}
		]
		},
	{
		"name": "Spino Egg",
		"maxStack": 100,
		"decomposes": 1800,
		"itemId": 354,
		"description": "Eat it to gain tremendous nourishment, or use it in recipes, or...",
		"image": "spino_egg.png",
		"weight": 12.0,
		"recipe": [
		],
		"stats": [
			{"id": 1, "value": "Consumable"},
			{"id": 7, "value": "+55"},
			{"id": 8, "value": "+55"},
			{"id": 12, "value": "+55"},
			{"id": 9, "value": "8 days"}
		]
		},
	{
		"name": "Turtle Egg",
		"maxStack": 100,
		"decomposes": 1800,
		"itemId": 355,
		"description": "Eat it to gain tremendous nourishment, or use it in recipes, or...",
		"image": "turtle_egg.png",
		"weight": 3.0,
		"recipe": [
		],
		"stats": [
			{"id": 1, "value": "Consumable"},
			{"id": 7, "value": "+20"},
			{"id": 8, "value": "+20"},
			{"id": 12, "value": "+20"},
			{"id": 9, "value": "8 days"}
		]
		},
	{
		"name": "Omnidirectional Lamppost",
		"maxStack": 4,
		"decomposes": 120,
		"itemId": 359,
		"description": "Requires electricity to activate. Lights a large area without adding much heat.",
		"image": "omnidirectional_lamppost.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 74,"count": 200},
			{"itemId": 78, "count": 30},
			{"itemId": 146, "count": 40},
			{"itemId": 162, "count": 40}
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 2000}
		]
		},
	{
		"name": "Industrial Grill",
		"maxStack": 4,
		"decomposes": 120,
		"itemId": 360,
		"description": "Perfect for cooking meat in bulk, staying warm, and providing light. Powered by gasoline.",
		"image": "industrial_grill.png",
		"weight": 4.0,
		"recipe": [
			{"itemId": 74,"count": 4},
			{"itemId": 78, "count": 10},
			{"itemId": 165, "count": 2},
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 500}
		]
		},
	{
		"name": "Pump-Action Shotgun",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 361,
		"description": "Powerful up close, but less reliable with range. Can fire multiple times before reloading.",
		"image": "pump_action_shotgun.png",
		"weight": 15.0,
		"recipe": [
			{"itemId":74, "count":30},
			{"itemId":166, "count":55},
			{"itemId":146, "count":45}
		],
		"stats": [
			{"id": 1, "value": "Weapon"},
			{"id": 6, "value": 380},
		]
		},
	{
		"name": "Crossbow",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 362,
		"description": "Has significantly more power than the Bow, but cannot fire rapidly. Can fire underwater.",
		"image": "crossbow.png",
		"weight": 8.0,
		"recipe": [
			{"itemId":74, "count":7},
			{"itemId":7, "count":10},
			{"itemId":76, "count":35}
		],
		"stats": [
			{"id": 1, "value": "Weapon"},
			{"id": 6, "value": 95},
		]
		},
	{
		"name": "Transponder Tracker",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 372,
		"description": "Uses strange energy from the three Obelisks to triangulate all Transponder Nodes on the specified frequency.",
		"image": "transponder_tracker.png",
		"weight": 0.5,
		"recipe": [
			{"itemId":74, "count":20},
			{"itemId":146, "count":30},
			{"itemId":165, "count":80},
			{"itemId":166, "count":50},
			{"itemId":78, "count":25},
		],
		"stats": [
			{"id": 1, "value": "Tools"},
		]
		},
	{
		"name": "Transponder Node",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 373,
		"description": "Can be attached to living Creatures to track their location.",
		"image": "transponder_node.png",
		"weight": 0.1,
		"recipe": [
			{"itemId":74, "count":3},
			{"itemId":146, "count":12},
			{"itemId":165, "count":14},
			{"itemId":166, "count":10},
			{"itemId":78, "count":12},
		],
		"stats": [
			{"id": 1, "value": "Ammunition"},
		]
		},
	{
		"name": "Feeding Trough",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 375,
		"description": "Put food for your nearby pets in this, and they'll automatically eat it when hungry!",
		"image": "feeding_trough.png",
		"weight": 4.0,
		"recipe": [
			{"itemId":7, "count":120},
			{"itemId":73, "count":60},
			{"itemId":76, "count":40},
			{"itemId":9, "count":8},
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 2000},
		]
		},
	{
		"name": "Compound Bow",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 376,
		"description": "A high-tech bow made of durable alloy, can launch arrows at high velocity. Requires arrows to fire.",
		"image": "compound_bow.png",
		"weight": 12.0,
		"recipe": [
			{"itemId":166, "count":95},
			{"itemId":74, "count":85},
			{"itemId":146, "count":75},
		],
		"stats": [
			{"id": 1, "value": "Weapon"},
			{"id": 5, "value": 250},
		]
		},
	{
		"name": "Metal Arrow",
		"maxStack": 50,
		"decomposes": 120,
		"itemId": 377,
		"description": "",
		"image": "metal_arrow.png",
		"weight": 0.4,
		"recipe": [
			{"itemId":75, "count":3},
			{"itemId":76, "count":3},
			{"itemId":166, "count":1},
			{"itemId":74, "count":3},
			{"itemId":146, "count":1},
		],
		"stats": [
			{"id": 1, "value": "Ammunition"},
			{"id": 6, "value": 130},
		]
		},
	{
		"name": "Canteen",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 378,
		"description": "Safely carries a sizable amount of water, and is reasonably lightweight.",
		"image": "canteen.png",
		"weight": 0.4,
		"recipe": [
			{"itemId":166, "count":10},
			{"itemId":146, "count":4},
			{"itemId":10, "count":2},
			{"itemId":74, "count":1},
		],
		"stats": [
			{"id": 1, "value": "Consumable"},
			{"id": 11, "value": 300},
		]
		},
	{
		"name": "Metal Sickle",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 380,
		"description": "A curved tool ideal for harvesting fiber from seed plants.",
		"image": "metal_sickle.png",
		"weight": 0.4,
		"recipe": [
			{"itemId":74, "count":18},
			{"itemId":7, "count":4},
			{"itemId":10, "count":16},
		],
		"stats": [
			{"id": 1, "value": "Weapon"},
			{"id": 6, "value": 50},
		]
		},
	{
		"name": "Behemoth Stone Dinosaur Gateway",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 381,
		"description": "A massive brick-and-mortar gateway that can be used for penning up huge dinosaurs.",
		"image": "behemoth-stone-dinosaur-gateway.png",
		"weight": 4.0,
		"recipe": [
			{"itemId":8, "count":300},
			{"itemId":75, "count":120},
			{"itemId":7, "count":180},
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 20000},
		]
		},
	{
		"name": "Behemoth Reinforced Dinosaur Gate",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 382,
		"description": "A large, reinforced wooden gate that can be used with a Behemoth Gateway to keep dinosaurs in or out.",
		"image": "behemoth_reinforced_dinosaur_gate.png",
		"weight": 4.0,
		"recipe": [
			{"itemId":8, "count":250},
			{"itemId":75, "count":100},
			{"itemId":7, "count":150},
		],
		"stats": [
			{"id": 1, "value": "Structure"},
			{"id": 5, "value": 12500},
		]
		},
	{
		"name": "Bear Trap",
		"maxStack": 10,
		"decomposes": 120,
		"itemId": 383,
		"description": "Immobilizes humans and small creatures.",
		"image": "bear_trap.png",
		"weight": 2.0,
		"recipe": [
			{"itemId":76, "count":5},
			{"itemId":74, "count":3},
			{"itemId":10, "count":6},
		],
		"stats": [
			{"id": 1, "value": "Weapon"},
		]
		},
	{
		"name": "Large Bear Trap",
		"maxStack": 10,
		"decomposes": 120,
		"itemId": 384,
		"description": "Immobilizes large creatures only.",
		"image": "large_bear_trap.png",
		"weight": 4.0,
		"recipe": [
			{"itemId":76, "count":10},
			{"itemId":74, "count":6},
			{"itemId":10, "count":15},
		],
		"stats": [
			{"id": 1, "value": "Weapon"},
		]
		},
		{
		"name": "Refertilizer",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 386,
		"description": "Spread these seeds of concentrated nutrients around and what was once harvested may yet regrow, even nearby a structure!",
		"image": "refertilizer.png",
		"weight": 0.3,
		"recipe": [
			{"itemId":250, "count":1},
			{"itemId":251, "count":1},
			{"itemId":108, "count":4},
            {"itemId":50, "count":1},
			{"itemId":162, "count":3},

		],
		"stats": [
			{"id": 1, "value": "Consumable"},
		]
		},
		{
		"name": "Scuba Tank",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 387,
		"description": "A tank that's filled with Oxygen. Used to temporarily breathe underwater.",
		"image": "scubatank.png",
		"weight": 0.3,
		"recipe": [
			{"itemId":10, "count":40},
			{"itemId":76, "count":4},
			{"itemId":74, "count":14},
            {"itemId":50, "count":1},
			{"itemId":166, "count":3},

		],
		"stats": [
			{"id": 1, "value": "Armor"},
		]
		},
		{
		"name": "Scuba Mask",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 388,
		"description": "Connects to a SCUBA tank, allowing the wearer to breathe underwater for as long as the tank has oxygen. Doesn't actually effect breathing underwater, only the tank does, instead provides clearer vision underwater.",
		"image": "scubamask.png",
		"weight": 0.5,
		"recipe": [
			{"itemId":10, "count":15},
			{"itemId":76, "count":6},
			{"itemId":78, "count":10},
            {"itemId":163, "count":3},
		],
		"stats": [
			{"id": 1, "value": "Armor"},
		]
		},
		{
		"name": "Scuba Flippers",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 389,
		"description": "These flippers are firm, but flexible. Wearing them increases swim speed, but decreases walking speed.",
		"image": "scubaflippers.png",
		"weight": 0.5,
		"recipe": [
			{"itemId":10, "count":12},
			{"itemId":76, "count":5},
			{"itemId":163, "count":4},
            {"itemId":216, "count":12},
            {"itemId":146, "count":6},

		],
		"stats": [
			{"id": 1, "value": "Armor"},
		]
		},
			{
		"name": "Spray Painter",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 392,
		"description": "Apply a dye to this, then shoot it at structures to paint them. Hold Alt Fire + Hotkey Number to set painting region.",
		"image": "Spray_Painter.png",
		"weight": 0.5,
		"recipe": [
			{"itemId":74, "count":50},
			{"itemId":78, "count":49},
			{"itemId":146, "count":60},
            {"itemId":162, "count":20},
            {"itemId":10, "count":5},

		],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
		{
		"name": "Doedicurus Saddle",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 393,
		"description": "Issa Saddle",
		"image": "doedicurus_saddle.png",
		"weight": 20,
		"recipe": [
			{"itemId":10, "count":200},
			{"itemId":76, "count":110},
			{"itemId":8, "count":15},
            {"itemId":74, "count":5},

		],
		"stats": [
			{"id": 1, "value": "Saddle"},
		]
		},
		{
		"name": "Sloped Thatch Roof",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 394,
		"description": "An inclined thatched roof. Slightly different angle than the ramp.",
		"image": "sloped_thatch_roof.png",
		"weight": 4.0,
		"recipe": [
			{"itemId":75, "count":15},
			{"itemId":7, "count":4},
			{"itemId":76, "count":10},

		],
		"stats": [
			{"id": 1, "value": "Building"},
		]
		},
		{
		"name": "Sloped Thatch Wall Left",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 395,
		"description": "A simple thatched sloped wall that insulates the inside from the outside, separates rooms, and provides structural integrity. Used in conjunction with a roof.",
		"image": "sloped_thatch_wall_left.png",
		"weight": 4.0,
		"recipe": [
			{"itemId":75, "count":10},
			{"itemId":7, "count":2},
			{"itemId":76, "count":7},

		],
		"stats": [
			{"id": 1, "value": "Building"},
		]
		},
		{
		"name": "Sloped Thatch Wall Right",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 396,
		"description": "A simple thatched sloped wall that insulates the inside from the outside, separates rooms, and provides structural integrity. Used in conjunction with a roof.",
		"image": "sloped_thatch_wall_right.png",
		"weight": 4.0,
		"recipe": [
			{"itemId":75, "count":10},
			{"itemId":7, "count":2},
			{"itemId":76, "count":7},

		],
		"stats": [
			{"id": 1, "value": "Building"},
		]
		},
		{
		"name": "Sloped Wooden Roof",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 397,
		"description": "An inclined wooden roof. Slightly different angle than the ramp.",
		"image": "sloped_wooden_roof.png",
		"weight": 4.0,
		"recipe": [
			{"itemId":7, "count":60},
			{"itemId":75, "count":15},
			{"itemId":76, "count":10},

		],
		"stats": [
			{"id": 1, "value": "Building"},
		]
		},
		{
		"name": "Sloped Wood Wall Left",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 398,
		"description": "An inclined wooden roof. Slightly different angle than the ramp.",
		"image": "sloped_wood_wall_left.png",
		"weight": 4.0,
		"recipe": [
			{"itemId":7, "count":20},
			{"itemId":75, "count":5},
			{"itemId":76, "count":5},

		],
		"stats": [
			{"id": 1, "value": "Building"},
		]
		},
		{
		"name": "Sloped Wood Wall Right",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 399,
		"description": "An inclined wooden roof. Slightly different angle than the ramp.",
		"image": "sloped_wood_wall_right.png",
		"weight": 4.0,
		"recipe": [
			{"itemId":7, "count":20},
			{"itemId":75, "count":5},
			{"itemId":76, "count":5},

		],
		"stats": [
			{"id": 1, "value": "Building"},
		]
		},
		{
		"name": "Sloped Stone Roof",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 400,
		"description": "An inclined stone roof. Slightly different angle than the ramp.",
		"image": "sloped_stone_roof.png",
		"weight": 4.0,
		"recipe": [
			{"itemId":8, "count":60},
			{"itemId":7, "count":30},
			{"itemId":75, "count":20},

		],
		"stats": [
			{"id": 1, "value": "Building"},
		]
		},
		{
		"name": "Sloped Stone Wall Left",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 401,
		"description": "A sturdy stone sloped wall that insulates the inside from the outside, separates rooms, and provides structural integrity. Used in conjunction with the roof.",
		"image": "sloped_stone_wall_left.png",
		"weight": 4.0,
		"recipe": [
			{"itemId":8, "count":20},
			{"itemId":7, "count":10},
			{"itemId":75, "count":10},

		],
		"stats": [
			{"id": 1, "value": "Building"},
		]
		},
		{
		"name": "Sloped Stone Wall Right",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 402,
		"description": "A sturdy stone sloped wall that insulates the inside from the outside, separates rooms, and provides structural integrity. Used in conjunction with the roof.",
		"image": "sloped_stone_wall_right.png",
		"weight": 4.0,
		"recipe": [
			{"itemId":8, "count":20},
			{"itemId":7, "count":10},
			{"itemId":75, "count":10},

		],
		"stats": [
			{"id": 1, "value": "Building"},
		]
		},
		{
		"name": "Sloped Metal Roof",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 403,
		"description": "An inclined metal roof. Slightly different angle than the ramp.",
		"image": "sloped_metal_roof.png",
		"weight": 4.0,
		"recipe": [
			{"itemId":74, "count":35},
			{"itemId":146, "count":10},

		],
		"stats": [
			{"id": 1, "value": "Building"},
		]
		},
		{
		"name": "Sloped Metal Wall Left",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 404,
		"description": "An inclined metal roof. Slightly different angle than the ramp.",
		"image": "sloped_metal_wall_left.png",
		"weight": 4.0,
		"recipe": [
			{"itemId":74, "count":15},
			{"itemId":146, "count":5},

		],
		"stats": [
			{"id": 1, "value": "Building"},
		]
		},
		{
		"name": "Sloped Metal Wall Right",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 405,
		"description": "An inclined metal roof. Slightly different angle than the ramp.",
		"image": "sloped_metal_wall_right.png",
		"weight": 4.0,
		"recipe": [
			{"itemId":74, "count":15},
			{"itemId":146, "count":5},

		],
		"stats": [
			{"id": 1, "value": "Building"},
		]
		},
		{
		"name": "Magenta Coloring",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 406,
		"description": "This substance can be used to color certain items and structures.",
		"image": "magenta_coloring.png",
		"weight": 0.1,
		"recipe": [
			{"itemId":118, "count":9},
			{"itemId":119, "count":9},
			{"itemId":8, "count":2.5},

		],
		"stats": [
			{"id": 1, "value": "Dye"},
		]
		},
		{
		"name": "Brick Coloring",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 407,
		"description": "This substance can be used to color certain items and structures.",
		"image": "brick_coloring.png",
		"weight": 0.1,
		"recipe": [
			{"itemId":119, "count":12},
			{"itemId":121, "count":6},
			{"itemId":8, "count":2.5},

		],
		"stats": [
			{"id": 1, "value": "Dye"},
		]
		},
		{
		"name": "Cantaloupe Coloring",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 408,
		"description": "This substance can be used to color certain items and structures.",
		"image": "cantaloupe_coloring.png",
		"weight": 0.1,
		"recipe": [
			{"itemId":117, "count":4},
			{"itemId":119, "count":7},
			{"itemId":122, "count":7},
			{"itemId":8, "count":2.5},
		],
		"stats": [
			{"id": 1, "value": "Dye"},
		]
		},
		{
		"name": "Mud Coloring",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 409,
		"description": "This substance can be used to color certain items and structures.",
		"image": "mud_coloring.png",
		"weight": 0.1,
		"recipe": [
			{"itemId":117, "count":4},
			{"itemId":118, "count":1},
			{"itemId":119, "count":7},
			{"itemId":121, "count":6},
			{"itemId":8, "count":2.5},
		],
		"stats": [
			{"id": 1, "value": "Dye"},
		]
		},
		{
		"name": "Navy Coloring",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 410,
		"description": "This substance can be used to color certain items and structures.",
		"image": "navy_coloring.png",
		"weight": 0.1,
		"recipe": [
			{"itemId":118, "count":12},
			{"itemId":121, "count":6},
			{"itemId":8, "count":2.5},
		],
		"stats": [
			{"id": 1, "value": "Dye"},
		]
		},
		{
		"name": "Olive Coloring",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 411,
		"description": "This substance can be used to color certain items and structures.",
		"image": "navy_coloring.png",
		"weight": 0.1,
		"recipe": [
			{"itemId":117, "count":12},
			{"itemId":121, "count":6},
			{"itemId":8, "count":2.5},
		],
		"stats": [
			{"id": 1, "value": "Dye"},
		]
		},
		{
		"name": "Slate Coloring",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 412,
		"description": "This substance can be used to color certain items and structures.",
		"image": "navy_coloring.png",
		"weight": 0.1,
		"recipe": [
			{"itemId":121, "count":6},
			{"itemId":122, "count":6},
			{"itemId":8, "count":2.5},
		],
		"stats": [
			{"id": 1, "value": "Dye"},
		]
		},
		{
		"name": "Mind Wipe Tonic",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 413,
		"description": "Drink this tonic to forget everything you have learned (resets your Engram Points).",
		"image": "mindwipe_tonic.png",
		"weight": 0.1,
		"recipe": [
			{"itemId":253, "count":24},
			{"itemId":120, "count":200},
			{"itemId":123, "count":72},
			{"itemId":124, "count":72},
			{"itemId":151, "count":20},
			{"itemId":150, "count":20},

		],
		"stats": [
			{"id": 1, "value": "Consumables"},
		]
		},
		{
		"name": "Wooden Raft",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 414,
		"description": "A floating wooden platform that you can pilot across the water. Can support the weight of structures and be built on.",
		"image": "wooden_raft.png",
		"weight": 85.0,
		"recipe": [
			{"itemId":7, "count":250},
			{"itemId":76, "count":125},
			{"itemId":10, "count":75},

		],
		"stats": [
			{"id": 1, "value": "Structure"},
		]
		},
		{
		"name": "Bronto Platform Saddle",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 415,
		"description": "Equip a Bronto with this to ride it. You can build structures on the large platform to make a mobile base.",
		"image": "bronto_platform_saddle.png",
		"weight": 20.0,
		"recipe": [
			{"itemId":10, "count":550},
			{"itemId":76, "count":325},
			{"itemId":74, "count":90},
			{"itemId":163, "count":125},
			{"itemId":146, "count":45},

		],
		"stats": [
			{"id": 1, "value": "Saddle"},
		]
		},
		{
		"name": "Pachy Saddle",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 417,
		"description": "Equip a Pachy with this to ride it.",
		"image": "pachy_saddle.png",
		"weight": 20.0,
		"recipe": [
			{"itemId":10, "count":110},
			{"itemId":76, "count":65},
			{"itemId":7, "count":20},

		],
		"stats": [
			{"id": 1, "value": "Saddle"},
		]
		},
		{
		"name": "pachycephalosaurus Egg",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 418,
		"description": "Tremendously nourishing by itself, this egg provides simple nutritional value in many cooking recipes.",
		"image": "pachycephalosaurus_egg.png",
		"weight": 7.0,
		"recipe": [
			{"itemId":418, "count":1},

		],
		"stats": [
			{"id": 1, "value": "Egg"},
		]
		},
		{
		"name": "Painting Canvas",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 421,
		"description": "A canvas sheet stretched over a wooden frame. Perfect for painting on.",
		"image": "painting_canvas.png",
		"weight": 7.0,
		"recipe": [
			{"itemId":76, "count":4},
			{"itemId":7, "count":2},
			{"itemId":10, "count":1},

		],
		"stats": [
			{"id": 1, "value": "Painting"},
		]
		},
		{
		"name": "Paracer Saddle",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 422,
		"description": "Equip a Paracer with this to ride it.",
		"image": "Paracer_Saddle.png",
		"weight": 20.0,
		"recipe": [
			{"itemId":10, "count":200},
			{"itemId":76, "count":110},
			{"itemId":74, "count":10},

		],
		"stats": [
			{"id": 1, "value": "Saddle"},
		]
		},
		{
		"name": "Paracer Platform Saddle",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 423,
		"description": "Equip a Paracer with this to ride it.",
		"image": "Paracer_Platform_Saddle.png",
		"weight": 20.0,
		"recipe": [
			{"itemId":10, "count":320},
			{"itemId":76, "count":200},
			{"itemId":74, "count":70},
			{"itemId":163, "count":45},
			{"itemId":146, "count":25},

		],
		"stats": [
			{"id": 1, "value": "Saddle"},
		]
		},
        {
		"name": "Pelt",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 424,
		"description": "Equip a Paracer with this to ride it.",
		"image": "pelt.png",
		"weight": 0.5,
		"recipe": [
		],
		"stats": [
			{"id": 1, "value": "Resource"},
		]
		},
		{
		"name": "Dimorphodon Egg",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 425,
		"description": "Tremendously nourishing by itself, this egg provides simple nutritional value in many cooking recipes.",
		"image": "dimorphodon_egg.png",
		"weight": 5.0,
		"recipe": [
			{"itemId":425, "count":425},

		],
		"stats": [
			{"id": 1, "value": "Egg"},
		]
		},
		{
		"name": "Beelzebufo Saddle",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 427,
		"description": "Equip a Beelzebufo with this to ride it.",
		"image": "beelzebufo_saddle.png",
		"weight": 8.0,
		"recipe": [
			{"itemId":10, "count":170},
			{"itemId":76, "count":95},
			{"itemId":7, "count":30},
			{"itemId":146, "count":5},

		],
		"stats": [
			{"id": 1, "value": "Saddle"},
		]
		},
		{
		"name": "Megaloceros Saddle",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 428,
		"description": "Equip a Megaloceros with this to ride it.",
		"image": "megaloceros_saddle.png",
		"weight": 12.0,
		"recipe": [
			{"itemId":10, "count":200},
			{"itemId":76, "count":110},
			{"itemId":9, "count":5},
		],
		"stats": [
			{"id": 1, "value": "Saddle"},
		]
		},
		{
		"name": "Fur Leggings",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 429,
		"description": "Provides significant physical protection. Also keeps your temperature up, so long as it stays dry.",
		"image": "fur_leggings.png",
		"weight": 12.0,
		"recipe": [
			{"itemId":424, "count":96},
			{"itemId":74, "count":16},
			{"itemId":10, "count":12},
			{"itemId":76, "count":5},

		],
		"stats": [
			{"id": 1, "value": "Armor"},
		]
		},
		{
		"name": "Fur Chestpiece",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 430,
		"description": "Provides significant physical protection. Also keeps your temperature up, so long as it stays dry.",
		"image": "fur_chestpiece.png",
		"weight": 12.0,
		"recipe": [
			{"itemId":424, "count":80},
			{"itemId":74, "count":13},
			{"itemId":10, "count":10},
			{"itemId":76, "count":4},

		],
		"stats": [
			{"id": 1, "value": "Armor"},
		]
		},
		{
		"name": "Fur Cap",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 431,
		"description": "Provides significant physical protection. Also keeps your temperature up, so long as it stays dry.",
		"image": "fur_cap.png",
		"weight": 4.0,
		"recipe": [
			{"itemId":424, "count":56},
			{"itemId":74, "count":10},
			{"itemId":10, "count":7},
			{"itemId":76, "count":3},

		],
		"stats": [
			{"id": 1, "value": "Armor"},
		]
		},
		{
		"name": "Fur Boots",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 432,
		"description": "Provides significant physical protection. Also keeps your temperature up, so long as it stays dry.",
		"image": "fur_boots.png",
		"weight": 4.0,
		"recipe": [
			{"itemId":424, "count":48},
			{"itemId":74, "count":8},
			{"itemId":10, "count":6},
			{"itemId":76, "count":4},

		],
		"stats": [
			{"id": 1, "value": "Armor"},
		]
		},
		{
		"name": "Fur Gauntlets",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 433,
		"description": "Provides significant physical protection. Also keeps your temperature up, so long as it stays dry.",
		"image": "fur_boots.png",
		"weight": 4.0,
		"recipe": [
			{"itemId":424, "count":40},
			{"itemId":74, "count":6},
			{"itemId":10, "count":5},
			{"itemId":76, "count":2},

		],
		"stats": [
			{"id": 1, "value": "Armor"},
		]
		},
		{
		"name": "Wooden Club",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 434,
		"description": "A easily made melee weapon that is excellent for knocking out targets. Only effective at short range.",
		"image": "wooden_club.png",
		"weight": 2.0,
		"recipe": [
			{"itemId":7, "count":4},
			{"itemId":76, "count":15},

		],
		"stats": [
			{"id": 1, "value": "Melee"},
		]
		},
		{
		"name": "Poison Grenade",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 435,
		"description": "Releases narcotic smoke to knock out anything in the area - only affects humans. Pulling the pin starts a 2.5 second timer to the gas release.",
		"image": "poison_grenade.png",
		"weight": 1.5,
		"recipe": [
			{"itemId":123, "count":10},
			{"itemId":77, "count":14},
			{"itemId":74, "count":5},
			{"itemId":108, "count":18},
			{"itemId":109, "count":12},
			{"itemId":78, "count":5},
            {"itemId":76, "count":20},
			{"itemId":73, "count":5},
		],
		"stats": [
			{"id": 1, "value": "Grenade"},
		]
		},
		{
		"name": "Fabricated Sniper Rifle",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 436,
		"description": "This semi-automatic rifle has less punch than a Longneck Rifle, but can be fired much more rapidly.",
		"image": "fabricated_sniper_rifle.png",
		"weight": 25.0,
		"recipe": [
			{"itemId":166, "count":115},
			{"itemId":74, "count":80},
			{"itemId":146, "count":110},
		],
		"stats": [
			{"id": 1, "value": "Gun"},
		]
		},
		{
		"name": "Greenhouse Wall",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 438,
		"description": "A metal-framed, glass wall that insulates the inside from the outside and separates rooms. Excellent for growing crops indoors.",
		"image": "greenhouse_wall.png",
		"weight": 25.0,
		"recipe": [
			{"itemId":74, "count":7},
			{"itemId":78, "count":25},
			{"itemId":146, "count":7},
		],
		"stats": [
			{"id": 1, "value": "Building"},
		]
		},
		{
		"name": "Greenhouse Ceiling",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 439,
		"description": "A metal-framed, glass ceiling that insulates the inside from the outside and separates rooms. Excellent for growing crops indoors.",
		"image": "greenhouse_ceiling.png",
		"weight": 4.0,
		"recipe": [
			{"itemId":74, "count":10},
			{"itemId":78, "count":35},
			{"itemId":146, "count":10},
		],
		"stats": [
			{"id": 1, "value": "Building"},
		]
		},
		{
		"name": "Greenhouse DoorFrame",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 440,
		"description": "A metal-framed, glass wall that insulates the inside from the outside and separates rooms. Excellent for growing crops indoors.",
		"image": "greenhouse_doorframe.png",
		"weight": 4.0,
		"recipe": [
			{"itemId":74, "count":5},
			{"itemId":78, "count":20},
			{"itemId":146, "count":5},
		],
		"stats": [
			{"id": 1, "value": "Building"},
		]
		},
		{
		"name": "Greenhouse Door",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 441,
		"description": "A metal-framed, glass door that insulates the inside from the outside and separates rooms. Excellent for growing crops indoors.",
		"image": "greenhouse_door.png",
		"weight": 4.0,
		"recipe": [
			{"itemId":74, "count":3},
			{"itemId":78, "count":10},
			{"itemId":146, "count":4},
		],
		"stats": [
			{"id": 1, "value": "Building"},
		]
		},
			{
		"name": "Sloped Greenhouse wall Left",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 442,
		"description": "A metal-frame, glass sloped wall that insulates the inside from the outside, separates rooms, and provides structural integrity. Used in conjunction with the roof. Excellent for growing crops indoors.",
		"image": "sloped_greenhouse_wall_left.png",
		"weight": 4.0,
		"recipe": [
			{"itemId":74, "count":4},
			{"itemId":78, "count":15},
			{"itemId":146, "count":4},
		],
		"stats": [
			{"id": 1, "value": "Building"},
		]
		},
		{
		"name": "Sloped Greenhouse Wall Right",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 443,
		"description": "A metal-frame, glass sloped wall that insulates the inside from the outside, separates rooms, and provides structural integrity. Used in conjunction with the roof. Excellent for growing crops indoors.",
		"image": "sloped_greenhouse_wall_right.png",
		"weight": 4.0,
		"recipe": [
			{"itemId":74, "count":4},
			{"itemId":78, "count":15},
			{"itemId":146, "count":4},
		],
		"stats": [
			{"id": 1, "value": "Building"},
		]
		},
		{
		"name": "Sloped Greenhouse Roof",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 444,
		"description": "An inclined metal-frame, glass roof. Slightly different angle than the ramp. Excellent for growing crops indoors.",
		"image": "sloped_greenhouse_roof.png",
		"weight": 4.0,
		"recipe": [
			{"itemId":74, "count":10},
			{"itemId":78, "count":35},
			{"itemId":146, "count":10},
		],
		"stats": [
			{"id": 1, "value": "Building"},
		]
		},
		{
		"name": "Greenhouse Window",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 445,
		"description": "Metal-framed, glass plates on hinges that cover windows to provide protection from projectiles and spying. Excellent for growing crops indoors.",
		"image": "greenhouse_window.png",
		"weight": 4.0,
		"recipe": [
			{"itemId":74, "count":1},
			{"itemId":78, "count":3},
			{"itemId":146, "count":1},
		],
		"stats": [
			{"id": 1, "value": "Armor"},
		]
		},
		{
		"name": "Riot Leggings",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 446,
		"description": "Provides heavy physical protection and reduced physical torpor, but provides almost no protection from the elements.",
		"image": "riot_leggings.png",
		"weight": 4.0,
		"recipe": [
			{"itemId":166, "count":70},
			{"itemId":163, "count":40},
			{"itemId":10, "count":12},
			{"itemId":76, "count":5},
		],
		"stats": [
			{"id": 1, "value": "Armor"},
		]
		},
		{
		"name": "Riot Chestpiece",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 447,
		"description": "Provides heavy physical protection and reduced physical torpor, but provides almost no protection from the elements.",
		"image": "riot_chestpiece.png",
		"weight": 4.0,
		"recipe": [
			{"itemId":166, "count":70},
			{"itemId":163, "count":40},
			{"itemId":10, "count":10},
			{"itemId":76, "count":4},
		],
		"stats": [
			{"id": 1, "value": "Armor"},
		]
		},
		{
		"name": "Riot Gauntlets",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 448,
		"description": "Provides heavy physical protection and reduced physical torpor, but provides almost no protection from the elements.",
		"image": "riot_gauntlets.png",
		"weight": 4.0,
		"recipe": [
			{"itemId":166, "count":25},
			{"itemId":163, "count":15},
			{"itemId":10, "count":5},
			{"itemId":76, "count":2},
		],
		"stats": [
			{"id": 1, "value": "Armor"},
		]
		},
		{
		"name": "Riot Boots",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 449,
		"description": "Provides heavy physical protection and reduced physical torpor, but provides almost no protection from the elements.",
		"image": "riot_boots.png",
		"weight": 4.0,
		"recipe": [
			{"itemId":166, "count":30},
			{"itemId":163, "count":15},
			{"itemId":10, "count":6},
			{"itemId":76, "count":4},
		],
		"stats": [
			{"id": 1, "value": "Armor"},
		]
		},
		{
		"name": "Riot Helmet",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 450,
		"description": "Provides heavy physical protection and reduced physical torpor, but provides almost no protection from the elements.",
		"image": "riot_helmet.png",
		"weight": 4.0,
		"recipe": [
			{"itemId":166, "count":50},
			{"itemId":163, "count":25},
			{"itemId":10, "count":7},
			{"itemId":76, "count":3},
			{"itemId":78, "count":35},
		],
		"stats": [
			{"id": 1, "value": "Armor"},
		]
		},
		{
		"name": "Angler Gel",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 4501,
		"description": "Powerful stunning weapon, but can only be used for a single strike before recharge is needed.",
		"image": "angler_gel.png",
		"weight": 0.01,
		"recipe": [
		],
		"stats": [
			{"id": 1, "value": "Armor"},
		]
		},
		{
		"name": "Electric Prod",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 451,
		"description": "Powerful stunning weapon, but can only be used for a single strike before recharge is needed.",
		"image": "electric_prod.png",
		"weight": 4.0,
		"recipe": [
			{"itemId":166, "count":120},
			{"itemId":74, "count":130},
			{"itemId":165, "count":120},
			{"itemId":146, "count":70},
			{"itemId":78, "count":120},
			{"itemId":4501, "count":15},
		],
		"stats": [
			{"id": 1, "value": "Armor"},
		]
		},
		{
		"name": "Handcuffs",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 452,
		"description": "Equip this onto an unconscious player, and they'll be restrained when they wake up!",
		"image": "handcuffs.png",
		"weight": 4.0,
		"recipe": [
			{"itemId":74, "count":50},
			{"itemId":146, "count":10},
			{"itemId":142, "count":5},
		],
		"stats": [
			{"id": 1, "value": "Other"},
		]
		},
		{
		"name": "Broth of Enlightenment",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 453,
		"description": "This sticky compound excels at absorbing other chemicals.",
		"image": "broth_of_enlightenment.png",
		"weight": 0.1,
		"recipe": [
			{"itemId":120, "count":10},
			{"itemId":234, "count":2},
			{"itemId":233, "count":2},
			{"itemId":232, "count":2},
			{"itemId":99, "count":2},
			{"itemId":'Woolly Rhino Horn', "count":5},
			{"itemId":'Black Pearl', "count":1},

		],
		"stats": [
			{"id": 1, "value": "Other"},
		]
		},
		{
		"name": "Absorbent Substrate",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": '454',
		"description": "A single sip of this incredible broth will expand your mind and broaden your horizons, granting greatly increased experience gain for a brief time.",
		"image": "absorbent_substrate.png",
		"weight": 0.25,
		"recipe": [
			{"itemId":'Black Pearl', "count":8},
			{"itemId":457, "count":8},
			{"itemId":162, "count":8},
		],
		"stats": [
			{"id": 1, "value": "Other"},
		]
		},
		{
		"name": "Woolly Rhino Horn",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 'Woolly Rhino Horn',
		"description": "Used in very specialized Recipes.",
		"image": "woolly_rhino_horn.png",
		"weight": 8.0,
		"recipe": [
		],
		"stats": [
			{"id": 1, "value": "Other"},
		]
		},
		{
		"name": "Black Pearl",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 'Black Pearl',
		"description": "A rare resource from the bottom of the sea...",
		"image": "black_pearl.png",
		"weight": 2.0,
		"recipe": [
		],
		"stats": [
			{"id": 1, "value": "Resource"},
		]
		},
		{
		"name": "Sap",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 457,
		"description": "A thick blob of unrefined sap.",
		"image": "sap.png",
		"weight": 0.5,
		"recipe": [
		],
		"stats": [
			{"id": 1, "value": "Resource"},
		]
		},
		{
		"name": "Giant Bee Honey",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 'Giant Bee Honey',
		"description": "A delicious and nutritious snack, useful for luring creatures to a trap or for fishing.",
		"image": "giant_bee_honey.png",
		"weight": 0.5,
		"recipe": [
		],
		"stats": [
			{"id": 1, "value": "Resource"},
		]
		},
		{
		"name": "Advanced Sniper Bullet",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 459,
		"description": "A high-caliber modern bullet, primarily used with fabricated sniper rifles.",
		"image": "advanced_sniper_bullet.png",
		"weight": 0.2,
		"recipe": [
			{"itemId":74, "count":2},
			{"itemId":109, "count":12},		
			],
		"stats": [
			{"id": 1, "value": "Ammunition"},
		]
		},
		{
		"name": "Allosaurus Egg",
		"maxStack": 100,
		"decomposes": 120,
		"itemId": 460,
		"description": "Tremendously nourishing by itself, this egg provides superior nutritional value in many cooking recipes.",
		"image": "allosaurus_egg.png",
	 	"weight": 12.0,
	    "recipe": [
		],
		"stats": [
			{"id": 1, "value": "Egg"},
		]
		},
		{
		"name": "Allosaurus Saddle",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 461,
		"description": "Equip an Allosaurus with this to ride it.",
		"image": "allosaurus_saddle.png",
	 	"weight": 12.0,
	    "recipe": [
			{"itemId":10, "count":320},
			{"itemId":76, "count":170},
			{"itemId":74, "count":30},

		],
		"stats": [
			{"id": 1, "value": "Saddle"},
		]
		},
		{
		"name": "Araneo Saddle",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": 462,
		"description": "Equip an Araneo with this to ride it.",
		"image": "araneo_saddle.png",
	 	"weight": 12.0,
	    "recipe": [
			{"itemId":10, "count":260},
			{"itemId":76, "count":140},
			{"itemId":11, "count":100},

		],
		"stats": [
			{"id": 1, "value": "Saddle"},
		]
		},
		{
		"name": "Arthropluera Saddle",
		"maxStack": 1,
		"decomposes": 120,
		"itemId": '463',
		"description": "Equip an Arthropluera with this to ride it.",
		"image": "arthropluera_saddle.png",
	 	"weight": 20.0,
	    "recipe": [
			{"itemId":10, "count":80},
			{"itemId":76, "count":50},
			{"itemId":7, "count":20},
			{"itemId":74, "count":30},
			{"itemId":73, "count":8},
			{"itemId":146, "count":15},
			{"itemId":142, "count":35},

		],
		"stats": [
			{"id": 1, "value": "Saddle"},
		]
		},
		{
		"name": "Achatina Paste",
		"itemId": 'Achatina Paste',
		"image": "cementing_paste.png",
	    "recipe": [
		],
		"stats": [
			{"id": 1, "value": "Resource"},
		]
		},
  {
		"name": "Ammonite Bile",
		"itemId": 'Ammonite Bile',
		"image": "Ammonite_Bile.png",
	    "recipe": [
		],
		"stats": [
			{"id": 1, "value": "Resource"},
		]
		},
  {
		"name": "Blue Gem",
		"itemId": 'Blue Gem',
		"image": "Blue_Gem_(Aberration).png",
	    "recipe": [
		],
		"stats": [
			{"id": 1, "value": "Resource"},
		]
		},
  {
		"name": "Charge Battery",
		"itemId": '464',
		"image": "Charge_Battery_(Aberration).png",
"recipe": [
			{"itemId":78, "count":4},
			{"itemId":74, "count":10},
			{"itemId":166, "count":15},
			{"itemId":466, "count":20},

],
		"stats": [
			{"id": 1, "value": "Resource"},
		]
		},
  {
		"name": "Congealed Gas Ball",
		"itemId": '465',
		"image": "Congealed_Gas_Ball_(Aberration).png",
"recipe": [
],
		"stats": [
			{"id": 1, "value": "Resource"},
		]
		},
  {
		"name": "Condensed Gas",
		"itemId": '466',
		"image": "Condensed_Gas_(Extinction).png",
"recipe": [
],
		"stats": [
			{"id": 1, "value": "Resource"},
		]
		},
  {
		"name": "Clay",
		"itemId": '467',
		"image": "Clay_(Scorched_Earth).png",
"recipe": [
			{"itemId":468, "count":2},
			{"itemId":469, "count":1},
],
		"stats": [
			{"id": 1, "value": "Resource"},
		]
		},
  {
		"name": "Sand",
		"itemId": '468',
		"image": "Sand_(Scorched_Earth).png",
"recipe": [
],
		"stats": [
			{"id": 1, "value": "Resource"},
		]
		},
   {
		"name": "Cactus Sap",
		"itemId": '469',
		"image": "Cactus_Sap_(Scorched_Earth).png",
"recipe": [
],
		"stats": [
			{"id": 1, "value": "Resource"},
		]
		},
  {
		"name": "Element",
		"itemId": '472',
		"image": "Element.png",
"recipe": [
],
		"stats": [
			{"id": 1, "value": "Resource"},
		]
		},
  {
		"name": "Element Ore",
		"itemId": '473',
		"image": "Element_Ore_(Aberration).png",
"recipe": [
],
		"stats": [
			{"id": 1, "value": "Resource"},
		]
		},
  {
		"name": "Element Shard",
		"itemId": '470',
		"image": "Element_Shard.png",
"recipe": [
],
		"stats": [
			{"id": 1, "value": "Resource"},
		]
		},
  {
		"name": "Element Dust",
		"itemId": '474',
		"image": "Element_Dust.png",
"recipe": [
],
		"stats": [
			{"id": 1, "value": "Resource"},
		]
		},
  {
		"name": "Unstable Element",
		"itemId": '475',
		"image": "Element.png",
		"recipe": [
			{"itemId":474, "count":1000},
		],
		"stats": [
			{"id": 1, "value": "Resource"},
		]
		},
  {
		"name": "Unstable Element Shard",
		"itemId": '476',
		"image": "Element_shard.png",
		"recipe": [
			{"itemId":474, "count":10},
		],
		"stats": [
			{"id": 1, "value": "Resource"},
		]
		},
  {
		"name": "Fertilizer",
		"itemId": '477',
		"image": "Fertilizer.png",
		"recipe": [
			{"itemId":75, "count":50},
      {"itemId":55, "count":3},

		],
		"stats": [
			{"id": 1, "value": "Resource"},
		]
		},
  {
		"name": "Green Gem",
		"itemId": '478',
		"image": "Green_Gem_(Aberration).png",
		"recipe": [
		],
		"stats": [
			{"id": 1, "value": "Resource"},
		]
		},
  {
		"name": "Preserving Salt",
		"itemId": '479',
		"image": "Preserving_Salt_(Scorched_Earth).png",
		"recipe": [
      {"itemId":480, "count":2},
      {"itemId":481, "count":1},
		],
		"stats": [
			{"id": 1, "value": "Resource"},
		]
		},
  {
		"name": "Raw Salt",
		"itemId": '480',
		"image": "Raw_Salt_(Scorched_Earth).png",
		"recipe": [
		],
		"stats": [
			{"id": 1, "value": "Resource"},
		]
		},
  {
		"name": "Sulfur",
		"itemId": '481',
		"image": "Sulfur_(Scorched_Earth).png",
		"recipe": [
		],
		"stats": [
			{"id": 1, "value": "Resource"},
		]
		},
  {
		"name": "Propellant",
		"itemId": '482',
		"image": "Propellant_(Scorched_Earth).png",
		"recipe": [
      {"itemId":481, "count":1},
      {"itemId":469, "count":1},
      {"itemId":162, "count":1},

		],
		"stats": [
			{"id": 1, "value": "Resource"},
		]
		},
  {
		"name": "Red Gem",
		"itemId": '483',
		"image": "Red_Gem_(Aberration).png",
		"recipe": [
		],
		"stats": [
			{"id": 1, "value": "Resource"},
		]
		},
  {
		"name": "Silk",
		"itemId": '484',
		"image": "Silk_(Scorched_Earth).png",
		"recipe": [
		],
		"stats": [
			{"id": 1, "value": "Resource"},
		]
		},
  {
		"name": "Camera",
		"itemId": '485',
		"image": "Camera.png",
		"recipe": [
      {"itemId":7, "count":80},
      {"itemId":10, "count":30},
      {"itemId":78, "count":240},
      {"itemId":'Black Pearl', "count":80},
      {"itemId":457, "count":100},
      {"itemId":142, "count":150},
      {"itemId":74, "count":140},

		],
		"stats": [
			{"id": 1, "value": "Resource"},
		]
		},
  {
		"name": "Chainsaw",
		"itemId": '486',
		"image": "Chainsaw_(Scorched_Earth).png",
		"recipe": [
      {"itemId":166, "count":75},
      {"itemId":146, "count":50},
      {"itemId":74, "count":50},
      {"itemId":165, "count":25},
		],
		"stats": [
			{"id": 1, "value": "Resource"},
		]
		},
  {
		"name": "Fishing Rod",
		"itemId": '487',
		"image": "Fishing_Rod.png",
		"recipe": [
      {"itemId":7, "count":12},
      {"itemId":76, "count":50},
      {"itemId":75, "count":20},
		],
		"stats": [
			{"id": 1, "value": "Resource"},
		]
		},
  {
		"name": "Magnifying Glass",
		"itemId": '488',
		"image": "Magnifying_Glass.png",
		"recipe": [
      {"itemId":7, "count":15},
      {"itemId":10, "count":20},
      {"itemId":76, "count":20},
      {"itemId":78, "count":30},
      {"itemId":142, "count":15},
      {"itemId":74, "count":8},
		],
		"stats": [
			{"id": 1, "value": "Resource"},
		]
		},
  {
		"name": "Pliers",
		"itemId": '489',
		"image": "Pliers_(Aberration).png",
		"recipe": [
      {"itemId":73, "count":70},
      {"itemId":142, "count":10},
      {"itemId":'Blue Gem', "count":15},
      {"itemId":74, "count":15},
      {"itemId":465, "count":12},
		],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Radio",
		"itemId": '490',
		"image": "Pliers_(Aberration).png",
		"recipe": [
      {"itemId":74, "count":40},
      {"itemId":78, "count":40},
      {"itemId":108, "count":40},
		],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Scissors",
		"itemId": '491',
		"image": "Scissors.png",
		"recipe": [
      {"itemId":73, "count":35},
      {"itemId":142, "count":5},
      {"itemId":74, "count":6},
		],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Whip",
		"itemId": '492',
		"image": "Whip.png",
		"recipe": [
      {"itemId":10, "count":10},
      {"itemId":7, "count":5},
      {"itemId":76, "count":25},
      {"itemId":484, "count":10},
		],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Tek Boots",
		"itemId": '493',
		"image": "Tek_Boots.png",
		"recipe": [
      {"itemId":166, "count":120},
      {"itemId":74, "count":450},
      {"itemId":78, "count":120},
      {"itemId":472, "count":20},
      {"itemId":'Black Pearl', "count":55},

		],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Tek Chestpiece",
		"itemId": '494',
		"image": "Tek_Chestpiece.png",
		"recipe": [
      {"itemId":166, "count":120},
      {"itemId":74, "count":450},
      {"itemId":78, "count":120},
      {"itemId":472, "count":20},
      {"itemId":'Black Pearl', "count":55},

		],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Tek Leggings",
		"itemId": '495',
		"image": "Tek_Leggings.png",
		"recipe": [
      {"itemId":166, "count":120},
      {"itemId":74, "count":450},
      {"itemId":78, "count":120},
      {"itemId":472, "count":20},
      {"itemId":'Black Pearl', "count":55},

		],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Tek Gauntlets",
		"itemId": '496',
		"image": "Tek_Gauntlets.png",
		"recipe": [
      {"itemId":166, "count":120},
      {"itemId":74, "count":450},
      {"itemId":78, "count":120},
      {"itemId":472, "count":20},
      {"itemId":'Black Pearl', "count":55},

		],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Tek Helmet",
		"itemId": '497',
		"image": "Tek_Helmet.png",
		"recipe": [
      {"itemId":166, "count":120},
      {"itemId":74, "count":450},
      {"itemId":78, "count":120},
      {"itemId":472, "count":20},
      {"itemId":'Black Pearl', "count":55},

		],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Wooden Shield",
		"itemId": '498',
		"image": "Wooden_Shield.png",
		"recipe": [
      {"itemId":7, "count":40},
      {"itemId":76, "count":15},
      {"itemId":10, "count":12},
		],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Metal Shield",
		"itemId": '499',
		"image": "Metal_Shield.png",
		"recipe": [
      {"itemId":74, "count":80},
      {"itemId":146, "count":20},
      {"itemId":10, "count":15},
		],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Riot Shield",
		"itemId": '500',
		"image": "Riot_Shield.png",
		"recipe": [
      {"itemId":166, "count":120},
      {"itemId":78, "count":200},
      {"itemId":163, "count":120},
      {"itemId":74, "count":40},
		],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Tek Shield",
		"itemId": '501',
		"image": "Tek_Shield_(Ragnarok).png",
		"recipe": [
      {"itemId":166, "count":240},
      {"itemId":74, "count":900},
      {"itemId":78, "count":240},
      {"itemId":472, "count":70},
      {"itemId":'Black Pearl', "count":100},
		],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
   {
		"name": "Organic Polymer",
		"itemId": '502',
		"image": "Organic_Polymer.png",
		"recipe": [
		],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Ghillie Boots",
		"itemId": '503',
		"image": "Ghillie_Boots.png",
		"recipe": [
      {"itemId":502, "count":4},
      {"itemId":10, "count":6},
      {"itemId":76, "count":4},
		],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Ghillie Chestpiece",
		"itemId": '504',
		"image": "Ghillie_Chestpiece.png",
		"recipe": [
      {"itemId":502, "count":6},
      {"itemId":10, "count":10},
      {"itemId":76, "count":4},
		],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Ghillie Gauntlets",
		"itemId": '505',
		"image": "Ghillie_Gauntlets.png",
		"recipe": [
      {"itemId":502, "count":3},
      {"itemId":10, "count":5},
      {"itemId":76, "count":2},
		],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Ghillie Leggings",
		"itemId": '506',
		"image": "Ghillie_Leggings.png",
		"recipe": [
      {"itemId":502, "count":8},
      {"itemId":10, "count":12},
      {"itemId":76, "count":5},
		],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Ghillie Mask",
		"itemId": '507',
		"image": "Ghillie_Mask.png",
		"recipe": [
      {"itemId":502, "count":5},
      {"itemId":10, "count":7},
      {"itemId":76, "count":3},
		],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Gas Mask",
		"itemId": '508',
		"image": "Gas_Mask.png",
		"recipe": [
      {"itemId":166, "count":20},
      {"itemId":78, "count":10},
      {"itemId":454, "count":2},
		],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Desert Cloth Boots",
		"itemId": '509',
	"image":"Desert_Cloth_Boots_(Scorched_Earth).png",
		"recipe": [
      {"itemId":10, "count":12},
      {"itemId":76, "count":5},
      {"itemId":484, "count":10},
		],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Desert Cloth Gloves",
		"itemId": '510',
	"image":"Desert_Cloth_Gloves_(Scorched_Earth).png",
		"recipe": [
      {"itemId":10, "count":10},
      {"itemId":76, "count":4},
      {"itemId":484, "count":8},
		],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Desert Goggles and Hat",
		"itemId": '511',
"image":"Desert_Goggles_and_Hat_(Scorched_Earth).png",
		"recipe": [
      {"itemId":10, "count":10},
      {"itemId":76, "count":6},
      {"itemId":163, "count":3},
      {"itemId":78, "count":10},
      {"itemId":484, "count":3},
		],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
      {
		"name": "Desert Cloth Pants",
		"itemId": '512',
"image":"Desert_Cloth_Pants_(Scorched_Earth).png",
		"recipe": [
      {"itemId":10, "count":25},
      {"itemId":76, "count":10},
      {"itemId":484, "count":15},
		],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
      {
		"name": "Desert Cloth Shirt",
		"itemId": '513',
"image":"Desert_Cloth_Shirt_(Scorched_Earth).png",
		"recipe": [
      {"itemId":10, "count":20},
      {"itemId":76, "count":8},
      {"itemId":484, "count":12},
		],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
      {
		"name": "Night Vision Goggles",
		"itemId": '514',
"image":"Night_Vision_Goggles.png",
		"recipe": [
      {"itemId":166, "count":24},
      {"itemId":74, "count":18},
      {"itemId":165, "count":15},
      {"itemId":146, "count":12},
      {"itemId":78, "count":20},
      {"itemId":4501, "count":3},
      {"itemId":454, "count":2},
		],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
       {
		"name": "Hazard Suit Boots",
		"itemId": '515',
"image":"Hazard_Suit_Boots_(Aberration).png",
		"recipe": [
      {"itemId":10, "count":20},
      {"itemId":76, "count":25},
      {"itemId":'Blue Gem', "count":5},
      {"itemId":166, "count":10},
      {"itemId":78, "count":10},
      {"itemId":465, "count":15},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
      {
		"name": "Hazard Suit Gloves",
		"itemId": '517',
"image":"Hazard_Suit_Gloves_(Aberration).png",
		"recipe": [
      {"itemId":10, "count":15},
      {"itemId":76, "count":35},
      {"itemId":'Blue Gem', "count":8},
      {"itemId":166, "count":2},
      {"itemId":78, "count":16},
      {"itemId":465, "count":15},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
      {
		"name": "Hazard Suit Helmet",
		"itemId": '518',
"image":"Hazard_Suit_Hat_(Aberration).png",
		"recipe": [
      {"itemId":10, "count":30},
      {"itemId":76, "count":45},
      {"itemId":'Blue Gem', "count":25},
      {"itemId":166, "count":20},
      {"itemId":78, "count":50},
      {"itemId":465, "count":20},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
      {
		"name": "Hazard Suit Pants",
		"itemId": '519',
"image":"Hazard_Suit_Pants_(Aberration).png",
		"recipe": [
      {"itemId":10, "count":45},
      {"itemId":76, "count":65},
      {"itemId":'Blue Gem', "count":20},
      {"itemId":166, "count":15},
      {"itemId":78, "count":40},
      {"itemId":465, "count":30},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
      {
		"name": "Hazard Suit Shirt",
		"itemId": '520',
"image":"Hazard_Suit_Shirt_(Aberration).png",
		"recipe": [
      {"itemId":10, "count":45},
      {"itemId":76, "count":65},
      {"itemId":'Blue Gem', "count":25},
      {"itemId":166, "count":25},
      {"itemId":78, "count":50},
      {"itemId":465, "count":45},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
 {
		"name": "Heavy Miner's Helmet",
		"itemId": '521',
"image":"Heavy_Miner's_Helmet.png",
		"recipe": [
      {"itemId":165, "count":18},
      {"itemId":74, "count":15},
      {"itemId":166, "count":12},
      {"itemId":78, "count":25},
      {"itemId":10, "count":15},
      {"itemId":76, "count":8},
      {"itemId":4501, "count":5},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Baryonyx Saddle",
		"itemId": '522',
"image":"Baryonyx_Saddle.png",
		"recipe": [
      {"itemId":10, "count":255},
      {"itemId":74, "count":25},
      {"itemId":76, "count":350},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Basilisk Saddle",
		"itemId": '523',
"image":"Basilisk_Saddle_(Aberration).png",
		"recipe": [
      {"itemId":146, "count":85},
      {"itemId":76, "count":150},
      {"itemId":478, "count":45},
      {"itemId":10, "count":270},
      {"itemId":74, "count":425},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Basilosaurus Saddle",
		"itemId": '524',
"image":"Basilosaurus_Saddle.png",
		"recipe": [
      {"itemId":10, "count":200},
      {"itemId":76, "count":250},
      {"itemId":74, "count":55},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Castoroides Saddle",
		"itemId": '525',
"image":"Castoroides_Saddle.png",
		"recipe": [
      {"itemId":10, "count":290},
      {"itemId":76, "count":200},
      {"itemId":74, "count":100},
      {"itemId":75, "count":180},
      {"itemId":146, "count":140},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Chalicotherium Saddle",
		"itemId": '526',
"image":"Chalicotherium_Saddle.png",
		"recipe": [
      {"itemId":10, "count":265},
      {"itemId":76, "count":180},
      {"itemId":74, "count":45},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Daeodon Saddle",
		"itemId": '527',
"image":"Daeodon_Saddle.png",
		"recipe": [
      {"itemId":10, "count":290},
      {"itemId":76, "count":155},
      {"itemId":74, "count":20},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Diplodocus Saddle",
		"itemId": '528',
"image":"Diplodocus_Saddle.png",
		"recipe": [
      {"itemId":10, "count":850},
      {"itemId":76, "count":600},
      {"itemId":7, "count":250},
      {"itemId":74, "count":200},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Dire Bear Saddle",
		"itemId": '529',
"image":"Dire_Bear_Saddle.png",
		"recipe": [
      {"itemId":10, "count":300},
      {"itemId":76, "count":130},
      {"itemId":146, "count":100},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Dunkleosteus Saddle",
		"itemId": '530',
"image":"Dunkleosteus_Saddle.png",
		"recipe": [
      {"itemId":10, "count":300},
      {"itemId":76, "count":180},
      {"itemId":146, "count":120},
      {"itemId":74, "count":80},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Equus Saddle",
		"itemId": '531',
"image":"Equus_Saddle.png",
		"recipe": [
      {"itemId":10, "count":240},
      {"itemId":76, "count":160},
      {"itemId":7, "count":85},
      {"itemId":8, "count":80},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Gallimimus Saddle",
		"itemId": '532',
"image":"Gallimimus_Saddle.png",
		"recipe": [
      {"itemId":10, "count":240},
      {"itemId":76, "count":160},
      {"itemId":7, "count":120},
      {"itemId":74, "count":25},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Giganotosaurus Saddle",
		"itemId": '533',
"image":"Giganotosaurus_Saddle.png",
		"recipe": [
      {"itemId":10, "count":680},
      {"itemId":76, "count":350},
      {"itemId":74, "count":120},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Hyaenodon Meatpack",
		"itemId": '534',
"image":"Hyaenodon_Meatpack.png",
		"recipe": [
      {"itemId":10, "count":290},
      {"itemId":76, "count":155},
      {"itemId":74, "count":20},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Iguanodon Saddle",
		"itemId": '535',
"image":"Iguanodon_Saddle.png",
		"recipe": [
      {"itemId":10, "count":80},
      {"itemId":76, "count":50},
      {"itemId":7, "count":15},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Kaprosuchus Saddle",
		"itemId": '536',
"image":"Kaprosuchus_Saddle.png",
		"recipe": [
      {"itemId":10, "count":165},
      {"itemId":76, "count":120},
      {"itemId":11, "count":65},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Karkinos Saddle",
		"itemId": '537',
"image":"Karkinos_Saddle_(Aberration).png",
		"recipe": [
      {"itemId":10, "count":170},
      {"itemId":76, "count":225},
      {"itemId":558, "count":200},
      {"itemId":'Blue Gem', "count":80},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Lymantria Saddle",
		"itemId": '538',
"image":"Lymantria_Saddle_(Scorched_Earth).png",
		"recipe": [
      {"itemId":10, "count":130},
      {"itemId":76, "count":125},
      {"itemId":11, "count":95},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Manta Saddle",
		"itemId": '539',
"image":"Manta_Saddle.png",
		"recipe": [
      {"itemId":10, "count":100},
      {"itemId":76, "count":70},
      {"itemId":7, "count":25},
      {"itemId":74, "count":35},
      {"itemId":73, "count":12},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Mantis Saddle",
		"itemId": '540',
"image":"Mantis_Saddle_(Scorched_Earth).png",
		"recipe": [
      {"itemId":10, "count":120},
      {"itemId":76, "count":75},
      {"itemId":74, "count":35},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Megalosaurus Saddle",
		"itemId": '541',
"image":"Megalosaurus_Saddle.png",
		"recipe": [
      {"itemId":10, "count":320},
      {"itemId":76, "count":170},
      {"itemId":74, "count":30},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Megalania Saddle",
		"itemId": '542',
"image":"Megalania_Saddle.png",
		"recipe": [
      {"itemId":10, "count":315},
      {"itemId":76, "count":215},
      {"itemId":74, "count":45},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Megalodon Tek Saddle",
		"itemId": '543',
"image":"Megalodon_Tek_Saddle.png",
		"recipe": [
      {"itemId":166, "count":500},
      {"itemId":74, "count":2500},
      {"itemId":78, "count":370},
      {"itemId":472, "count":55},
      {"itemId":'Black Pearl', "count":140},

    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Megatherium Saddle",
		"itemId": '544',
"image":"Megatherium_Saddle.png",
		"recipe": [
      {"itemId":10, "count":325},
      {"itemId":76, "count":130},
      {"itemId":146, "count":100},
      {"itemId":74, "count":55},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Morellatops Saddle",
		"itemId": '545',
"image":"Morellatops_Saddle_(Scorched_Earth).png",
		"recipe": [
      {"itemId":10, "count":140},
      {"itemId":76, "count":80},
      {"itemId":7, "count":30},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Mosasaur Saddle",
		"itemId": '546',
"image":"Mosasaur_Saddle.png",
		"recipe": [
      {"itemId":10, "count":800},
      {"itemId":76, "count":600},
      {"itemId":146, "count":140},
      {"itemId":163, "count":100},
      {"itemId":74, "count":400},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Mosasaur Platform Saddle",
		"itemId": '547',
"image":"Mosasaur_Platform_Saddle.png",
		"recipe": [
      {"itemId":10, "count":960},
      {"itemId":76, "count":720},
      {"itemId":74, "count":1200},
      {"itemId":163, "count":320},
      {"itemId":146, "count":180},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Mosasaur Tek Saddle",
		"itemId": '548',
"image":"Mosasaur_Tek_Saddle.png",
		"recipe": [
      {"itemId":166, "count":500},
      {"itemId":74, "count":2500},
      {"itemId":78, "count":370},
      {"itemId":472, "count":55},
      {"itemId":'Black Pearl', "count":140},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Pachyrhinosaurus Saddle",
		"itemId": '549',
"image":"Pachyrhinosaurus_Saddle.png",
		"recipe": [
      {"itemId":10, "count":140},
      {"itemId":76, "count":80},
      {"itemId":7, "count":25},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Pachyrhinosaurus Saddle",
		"itemId": '550',
"image":"Pachyrhinosaurus_Saddle.png",
		"recipe": [
      {"itemId":10, "count":140},
      {"itemId":76, "count":80},
      {"itemId":7, "count":25},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Pelagornis Saddle",
		"itemId": '551',
"image":"Pelagornis_Saddle.png",
		"recipe": [
      {"itemId":10, "count":230},
      {"itemId":76, "count":125},
      {"itemId":11, "count":75},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
   {
		"name": "Phiomia Saddle",
		"itemId": '552',
"image":"Phiomia_Saddle.png",
		"recipe": [
      {"itemId":10, "count":20},
      {"itemId":76, "count":15},
      {"itemId":7, "count":5},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Phiomia Saddle",
		"itemId": '552',
"image":"Phiomia_Saddle.png",
		"recipe": [
      {"itemId":10, "count":20},
      {"itemId":76, "count":15},
      {"itemId":7, "count":5},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Plesiosaur Platform Saddle",
		"itemId": '553',
"image":"Plesiosaur_Platform_Saddle.png",
		"recipe": [
      {"itemId":10, "count":680},
      {"itemId":76, "count":405},
      {"itemId":74, "count":112},
      {"itemId":163, "count":155},
      {"itemId":146, "count":55},

    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Procoptodon Saddle",
		"itemId": '554',
"image":"Procoptodon_Saddle.png",
		"recipe": [
      {"itemId":10, "count":500},
      {"itemId":424, "count":150},
      {"itemId":76, "count":200},
      {"itemId":74, "count":70},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Quetz Saddle",
		"itemId": '555',
"image":"Quetz_Saddle.png",
		"recipe": [
      {"itemId":10, "count":750},
      {"itemId":76, "count":500},
      {"itemId":146, "count":200},
      {"itemId":163, "count":85},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Quetz Platform Saddle",
		"itemId": '556',
"image":"Quetz_Platform_Saddle.png",
		"recipe": [
      {"itemId":10, "count":620},
      {"itemId":76, "count":400},
      {"itemId":74, "count":180},
      {"itemId":163, "count":220},
      {"itemId":146, "count":120},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Ravager Saddle",
		"itemId": '557',
"image":"Ravager_Saddle_(Aberration).png",
		"recipe": [
      {"itemId":10, "count":285},
      {"itemId":76, "count":125},
      {"itemId":558, "count":110},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Fungal Wood",
		"itemId": '558',
"image":"Fungal_Wood.png",
		"recipe": [
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Rex Tek Saddle",
		"itemId": '559',
"image":"Rex_Tek_Saddle.png",
		"recipe": [
      {"itemId":166, "count":350},
      {"itemId":74, "count":1800},
      {"itemId":78, "count":250},
      {"itemId":472, "count":40},
      {"itemId":'Black Pearl', "count":100},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Rock Drake Saddle",
		"itemId": '560',
"image":"Rock_Drake_Saddle_(Aberration).png",
		"recipe": [
      {"itemId":10, "count":350},
      {"itemId":76, "count":225},
      {"itemId":74, "count":125},
      {"itemId":72, "count":85},
      {"itemId":483, "count":100},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Rock Drake Tek Saddle",
		"itemId": '561',
"image":"Rock_Drake_Tek_Saddle_(Aberration).png",
		"recipe": [
      {"itemId":166, "count":455},
      {"itemId":74, "count":2350},
      {"itemId":78, "count":325},
      {"itemId":472, "count":75},
      {"itemId":'Black Pearl', "count":185},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Rock Golem Saddle",
		"itemId": '562',
"image":"Rock_Golem_Saddle_(Scorched_Earth).png",
		"recipe": [
      {"itemId":10, "count":270},
      {"itemId":76, "count":150},
      {"itemId":74, "count":35},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Roll Rat Saddle",
		"itemId": '563',
"image":"Roll_Rat_Saddle_(Aberration).png",
		"recipe": [
      {"itemId":10, "count":270},
      {"itemId":76, "count":150},
      {"itemId":74, "count":425},
      {"itemId":146, "count":85},
      {"itemId":478, "count":45},

    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Sabertooth Saddle",
		"itemId": '564',
"image":"Sabertooth_Saddle.png",
		"recipe": [
      {"itemId":10, "count":290},
      {"itemId":76, "count":155},
      {"itemId":74, "count":20},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Sarco Saddle",
		"itemId": '565',
"image":"Sarco_Saddle.png",
		"recipe": [
      {"itemId":10, "count":230},
      {"itemId":76, "count":75},
      {"itemId":146, "count":20},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Spino Saddle",
		"itemId": '566',
"image":"Spino_Saddle.png",
		"recipe": [
      {"itemId":10, "count":380},
      {"itemId":76, "count":200},
      {"itemId":146, "count":45},
      {"itemId":163, "count":25},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Stego Saddle",
		"itemId": '567',
"image":"Stego_Saddle.png",
		"recipe": [
      {"itemId":10, "count":200},
      {"itemId":76, "count":110},
      {"itemId":7, "count":35},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Tapejara Saddle",
		"itemId": '568',
"image":"Tapejara_Saddle.png",
		"recipe": [
      {"itemId":10, "count":260},
      {"itemId":76, "count":180},
      {"itemId":7, "count":120},
      {"itemId":74, "count":45}
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Tapejara Tek Saddle",
		"itemId": '569',
"image":"Tapejara_Tek_Saddle.png",
		"recipe": [
      {"itemId":166, "count":500},
      {"itemId":74, "count":2500},
      {"itemId":78, "count":370},
      {"itemId":472, "count":55},
      {"itemId":'Black Pearl', "count":140},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Terror Bird Saddle",
		"itemId": '570',
"image":"Terror_Bird_Saddle.png",
		"recipe": [
      {"itemId":10, "count":110},
      {"itemId":76, "count":65},
      {"itemId":7, "count":20},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Therizinosaurus Saddle",
		"itemId": '571',
"image":"Therizinosaurus_Saddle.png",
		"recipe": [
      {"itemId":10, "count":285},
      {"itemId":76, "count":160},
      {"itemId":7, "count":120},
      {"itemId":74, "count":55},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Thorny Dragon Saddle",
		"itemId": '572',
"image":"Thorny_Dragon_Saddle_(Scorched_Earth).png",
		"recipe": [
      {"itemId":10, "count":270},
      {"itemId":76, "count":150},
      {"itemId":74, "count":35},
      {"itemId":467, "count":85},
      {"itemId":7, "count":125},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Thylacoleo Saddle",
		"itemId": '573',
"image":"Thylacoleo_Saddle.png",
		"recipe": [
      {"itemId":10, "count":290},
      {"itemId":76, "count":155},
      {"itemId":74, "count":20},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Titanosaur Platform Saddle",
		"itemId": '574',
"image":"Titanosaur_Platform_Saddle.png",
		"recipe": [
      {"itemId":74, "count":4000},
      {"itemId":10, "count":4000},
      {"itemId":146, "count":1600},
      {"itemId":76, "count":2000},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Trike Saddle",
		"itemId": '575',
"image":"Trike_Saddle.png",
		"recipe": [
      {"itemId":10, "count":140},
      {"itemId":76, "count":80},
      {"itemId":7, "count":25},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Tusoteuthis Saddle",
		"itemId": '576',
"image":"Tusoteuthis_Saddle.png",
		"recipe": [
      {"itemId":10, "count":320},
      {"itemId":76, "count":795},
      {"itemId":146, "count":45},
      {"itemId":74, "count":30},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Yutyrannus Saddle",
		"itemId": '577',
"image":"Yutyrannus_Saddle.png",
		"recipe": [
      {"itemId":10, "count":425},
      {"itemId":76, "count":350},
      {"itemId":146, "count":135},
      {"itemId":163, "count":125},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Single Panel Flag",
		"itemId": '578',
"image":"Single_Panel_Flag.png",
		"recipe": [
      {"itemId":7, "count":10},
      {"itemId":176, "count":100},
      {"itemId":10, "count":20},
      {"itemId":75, "count":30},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
    {
		"name": "Elevator Track",
		"itemId": '579',
"image":"Elevator_Track.png",
		"recipe": [
      {"itemId":74, "count":140},
      {"itemId":166, "count":35},
      {"itemId":146, "count":25},
      {"itemId":165, "count":20},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Small Elevator Platform",
		"itemId": '580',
"image":"Small_Elevator_Platform.png",
		"recipe": [
      {"itemId":74, "count":200},
      {"itemId":166, "count":50},
      {"itemId":146, "count":40},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Medium Elevator Platform",
		"itemId": '581',
"image":"Medium_Elevator_Platform.png",
		"recipe": [
      {"itemId":74, "count":400},
      {"itemId":166, "count":100},
      {"itemId":146, "count":80},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Large Elevator Platform",
		"itemId": '582',
"image":"Large_Elevator_Platform.png",
		"recipe": [
      {"itemId":74, "count":800},
      {"itemId":166, "count":200},
      {"itemId":146, "count":160},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Ballista Turret",
		"itemId": '583',
"image":"Ballista_Turret.png",
		"recipe": [
      {"itemId":7, "count":500},
      {"itemId":74, "count":300},
      {"itemId":8, "count":250},
      {"itemId":76, "count":200},
      {"itemId":75, "count":100},
      {"itemId":10, "count":100},

    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Spear Bolt",
		"itemId": '584',
"image":"Spear_Bolt.png",
		"recipe": [
      {"itemId":74, "count":14},
      {"itemId":7, "count":14},
      {"itemId":75, "count":20},
      {"itemId":73, "count":5},
      {"itemId":76, "count":20},
      {"itemId":146, "count":2},

    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Wooden Chair",
		"itemId": '585',
"image":"Wooden_Chair.png",
		"recipe": [
      {"itemId":7, "count":30},
      {"itemId":75, "count":18},
      {"itemId":76, "count":14},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Wooden Bench",
		"itemId": '586',
"image":"Wooden_Bench.png",
		"recipe": [
      {"itemId":7, "count":120},
      {"itemId":75, "count":55},
      {"itemId":76, "count":45},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Gravestone",
		"itemId": '587',
"image":"Gravestone.png",
		"recipe": [
      {"itemId":8, "count":70},
      {"itemId":146, "count":8},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
   {
		"name": "Artifact Pedastal",
		"itemId": '588',
"image":"Artifact_Pedastal.png",
		"recipe": [
      {"itemId":142, "count":80},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Wardrums",
		"itemId": '589',
"image":"Wardrums.png",
		"recipe": [
      {"itemId":7, "count":80},
      {"itemId":10, "count":220},
      {"itemId":76, "count":200},
      {"itemId":75, "count":200},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "War Map",
		"itemId": '590',
"image":"War_Map.png",
		"recipe": [
      {"itemId":76, "count":4},
      {"itemId":7, "count":2},
      {"itemId":10, "count":1},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Wooden Railing",
		"itemId": '591',
"image":"Wooden_Railing.png",
		"recipe": [
      {"itemId":7, "count":20},
      {"itemId":75, "count":5},
      {"itemId":76, "count":3},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Stone Railing",
		"itemId": '592',
"image":"Stone_Railing.png",
		"recipe": [
      {"itemId":8, "count":20},
      {"itemId":7, "count":10},
      {"itemId":75, "count":7},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Metal Railing",
		"itemId": '593',
"image":"Metal_Railing.png",
		"recipe": [
      {"itemId":74, "count":12},
      {"itemId":146, "count":3},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Trophy Wall-Mount",
		"itemId": '594',
"image":"Trophy_Wall-Mount.png",
		"recipe": [
      {"itemId":7, "count":200},
      {"itemId":146, "count":80},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Minigun Turret",
		"itemId": '595',
"image":"Minigun_Turret.png",
		"recipe": [
      {"itemId":166, "count":150},
      {"itemId":74, "count":500},
      {"itemId":146, "count":125},
      {"itemId":10, "count":100},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Catapult Turret",
		"itemId": '596',
"image":"Catapult_Turret.png",
		"recipe": [
      {"itemId":7, "count":400},
      {"itemId":74, "count":300},
      {"itemId":8, "count":390},
      {"itemId":75, "count":100},
      {"itemId":10, "count":100},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Rocket Turret",
		"itemId": '597',
"image":"Rocket_Turret.png",
		"recipe": [
      {"itemId":166, "count":400},
      {"itemId":74, "count":110},
      {"itemId":146, "count":300},
      {"itemId":165, "count":500},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Homing Underwater Mine",
		"itemId": '598',
"image":"Homing_Underwater_Mine.png",
		"recipe": [
      {"itemId":166, "count":45},
      {"itemId":74, "count":30},
      {"itemId":146, "count":20},
      {"itemId":162, "count":15},
      {"itemId":109, "count":100},
      {"itemId":78, "count":30},
      {"itemId":165, "count":150},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Wall Torch",
		"itemId": '599',
"image":"Wall_Torch.png",
		"recipe": [
      {"itemId":75, "count":4},
      {"itemId":73, "count":1},
      {"itemId":8, "count":1},
      {"itemId":7, "count":2},
      {"itemId":74, "count":1},
      {"itemId":146, "count":1},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Industrial Forge",
		"itemId": '600',
"image":"Industrial_Forge.png",
		"recipe": [
      {"itemId":74, "count":2500},
      {"itemId":78, "count":250},
      {"itemId":146, "count":600},
      {"itemId":162, "count":400},
      {"itemId":166, "count":400},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Industrial Cooker",
		"itemId": '601',
"image":"Industrial_Cooker.png",
		"recipe": [
      {"itemId":166, "count":300},
      {"itemId":74, "count":1800},
      {"itemId":146, "count":450},
      {"itemId":162, "count":300},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Bunk Bed",
		"itemId": '602',
"image":"Bunk_Bed.png",
		"recipe": [
      {"itemId":166, "count":80},
      {"itemId":424, "count":200},
      {"itemId":74, "count":320},
      {"itemId":76, "count":280},
      {"itemId":10, "count":120},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Wooden Table",
		"itemId": '603',
"image":"Wooden_Table.png",
		"recipe": [
      {"itemId":7, "count":100},
      {"itemId":9, "count":12},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Stone Fireplace",
		"itemId": '604',
"image":"Stone_Fireplace.png",
		"recipe": [
      {"itemId":8, "count":450},
      {"itemId":7, "count":120},
      {"itemId":75, "count":80},
      {"itemId":73, "count":20},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Wooden Cage",
		"itemId": '605',
"image":"Wooden_Cage.png",
		"recipe": [
      {"itemId":7, "count":110},
      {"itemId":75, "count":30},
      {"itemId":76, "count":25},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Beer Barrel",
		"itemId": '606',
"image":"Beer_Barrel.png",
		"recipe": [
      {"itemId":7, "count":500},
      {"itemId":74, "count":80},
      {"itemId":146, "count":100},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Chemistry Bench",
		"itemId": '607',
"image":"Chemistry_Bench.png",
		"recipe": [
      {"itemId":74, "count":250},
      {"itemId":146, "count":250},
      {"itemId":108, "count":100},
      {"itemId":78, "count":250},
      {"itemId":166, "count":250},
      {"itemId":165, "count":250},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Primitive Cannon",
		"itemId": '608',
"image":"Primitive_Cannon.png",
		"recipe": [
      {"itemId":74, "count":950},
      {"itemId":76, "count":200},
      {"itemId":10, "count":150},
      {"itemId":75, "count":120},
      {"itemId":146, "count":300},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Training Dummy",
		"itemId": '609',
"image":"Training_Dummy.png",
		"recipe": [
      {"itemId":7, "count":80},
      {"itemId":76, "count":500},
      {"itemId":10, "count":10},
      {"itemId":75, "count":500},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Rope Ladder",
		"itemId": '610',
"image":"Rope_Ladder.png",
		"recipe": [
      {"itemId":7, "count":15},
      {"itemId":75, "count":140},
      {"itemId":76, "count":180},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Wooden Tree Platform",
		"itemId": '611',
"image":"Wooden_Tree_Platform.png",
		"recipe": [
      {"itemId":7, "count":1600},
      {"itemId":74, "count":200},
      {"itemId":146, "count":600},
      {"itemId":76, "count":600},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Metal Tree Platform",
		"itemId": '612',
"image":"Metal_Tree_Platform.png",
		"recipe": [
      {"itemId":74, "count":1800},
      {"itemId":146, "count":1400},
      {"itemId":76, "count":600},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Tree Sap Tap",
		"itemId": '613',
"image":"Tree_Sap_Tap.png",
		"recipe": [
      {"itemId":74, "count":100},
      {"itemId":146, "count":40},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Wooden Stairs",
		"itemId": '614',
"image":"Wooden_Stairs.png",
		"recipe": [
      {"itemId":76, "count":10},
      {"itemId":75, "count":15},
      {"itemId":7, "count":60},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Wooden Staircase",
		"itemId": '615',
"image":"Wooden_Staircase.png",
		"recipe": [
      {"itemId":7, "count":200},
      {"itemId":75, "count":50},
      {"itemId":76, "count":35},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Stone Staircase",
		"itemId": '616',
"image":"Stone_Staircase.png",
		"recipe": [
      {"itemId":8, "count":200},
      {"itemId":7, "count":50},
      {"itemId":75, "count":35},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Metal Staircase",
		"itemId": '617',
"image":"Metal_Staircase.png",
		"recipe": [
      {"itemId":74, "count":125},
      {"itemId":146, "count":35},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Industrial Grinder",
		"itemId": '618',
"image":"Industrial_Grinder.png",
		"recipe": [
      {"itemId":74, "count":3200},
      {"itemId":78, "count":200},
      {"itemId":146, "count":800},
      {"itemId":162, "count":600},
      {"itemId":166, "count":600},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
    {
		"name": "Giant Stone Hatchframe",
		"itemId": '619',
"image":"Giant_Stone_Hatchframe.png",
		"recipe": [
      {"itemId":8, "count":400},
      {"itemId":7, "count":200},
      {"itemId":75, "count":120},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Giant Reinforced Trapdoor",
		"itemId": '620',
"image":"Giant_Reinforced_Trapdoor.png",
		"recipe": [
      {"itemId":8, "count":300},
      {"itemId":7, "count":210},
      {"itemId":75, "count":120},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Giant Metal Hatchframe",
		"itemId": '621',
"image":"Giant_Metal_Hatchframe.png",
		"recipe": [
      {"itemId":74, "count":240},
      {"itemId":146, "count":64},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Giant Metal Trapdoor",
		"itemId": '622',
"image":"Giant_Metal_Trapdoor.png",
		"recipe": [
      {"itemId":74, "count":360},
      {"itemId":146, "count":120},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Adobe Ceiling",
		"itemId": '623',
"image":"256px-Adobe_Ceiling_(Scorched_Earth).png",
		"recipe": [
      {"itemId":467, "count":60},
      {"itemId":7, "count":30},
      {"itemId":75, "count":15},
      {"itemId":76, "count":10},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Giant Adobe Trapdoor",
		"itemId": '624',
"image":"Giant_Adobe_Trapdoor_(Scorched_Earth).png",
		"recipe": [
      {"itemId":467, "count":100},
      {"itemId":7, "count":45},
      {"itemId":75, "count":20},
      {"itemId":76, "count":10},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Adobe Hatchframe",
		"itemId": '625',
"image":"Adobe_Hatchframe_(Scorched_Earth).png",
		"recipe": [
      {"itemId":467, "count":50},
      {"itemId":7, "count":25},
      {"itemId":75, "count":12},
      {"itemId":76, "count":10},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Adobe Door",
		"itemId": '626',
"image":"256px-Adobe_Door_(Scorched_Earth).png",
		"recipe": [
      {"itemId":467, "count":20},
      {"itemId":7, "count":10},
      {"itemId":75, "count":7},
      {"itemId":76, "count":5},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Adobe Fence Foundation",
		"itemId": '627',
"image":"Adobe_Fence_Foundation_(Scorched_Earth).png",
		"recipe": [
      {"itemId":467, "count":10},
      {"itemId":7, "count":5},
      {"itemId":75, "count":3},
      {"itemId":76, "count":5},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Adobe Foundation",
		"itemId": '628',
"image":"256px-Adobe_Foundation_(Scorched_Earth).png",
		"recipe": [
      {"itemId":467, "count":80},
      {"itemId":7, "count":40},
      {"itemId":75, "count":20},
      {"itemId":76, "count":15},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
   {
		"name": "Adobe Dinosaur Gateway",
		"itemId": '629',
"image":"256px-Adobe_Dinosaur_Gateway_(Scorched_Earth).png",
		"recipe": [
      {"itemId":7, "count":280},
      {"itemId":467, "count":80},
      {"itemId":75, "count":70},
      {"itemId":76, "count":50},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Adobe Dinosaur Gate",
		"itemId": '630',
"image":"256px-Adobe_Dinosaur_Gate_(Scorched_Earth).png",
		"recipe": [
      {"itemId":7, "count":280},
      {"itemId":467, "count":80},
      {"itemId":75, "count":70},
      {"itemId":76, "count":50},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Behemoth Adobe Dinosaur Gate",
		"itemId": '631',
"image":"Behemoth_Adobe_Dinosaur_Gate_(Scorched_Earth).png",
		"recipe": [
      {"itemId":467, "count":450},
      {"itemId":7, "count":450},
      {"itemId":75, "count":450},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Behemoth Adobe Dinosaur Gateway",
		"itemId": '632',
"image":"Behemoth_Adobe_Dinosaur_Gateway_(Scorched_Earth).png",
		"recipe": [
      {"itemId":467, "count":900},
      {"itemId":7, "count":700},
      {"itemId":75, "count":800},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Adobe Ladder",
		"itemId": '633',
"image":"adobe-ladder.png",
		"recipe": [
      {"itemId":467, "count":4},
      {"itemId":7, "count":5},
      {"itemId":75, "count":7},
      {"itemId":76, "count":3},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Adobe Pillar",
		"itemId": '634',
"image":"256px-Adobe_Pillar_(Scorched_Earth).png",
		"recipe": [
      {"itemId":467, "count":40},
      {"itemId":7, "count":20},
      {"itemId":75, "count":10},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Adobe Railing",
		"itemId": '635',
"image":"Adobe_Railing_(Scorched_Earth).png",
		"recipe": [
      {"itemId":7, "count":20},
      {"itemId":467, "count":5},
      {"itemId":75, "count":5},
      {"itemId":76, "count":3},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Adobe Ramp",
		"itemId": '636',
"image":"Adobe_Ramp_(Scorched_Earth).png",
		"recipe": [
      {"itemId":467, "count":60},
      {"itemId":7, "count":30},
      {"itemId":75, "count":15},
      {"itemId":76, "count":10},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Sloped Adobe Roof",
		"itemId": '637',
"image":"256px-Sloped_Adobe_Roof_(Scorched_Earth).png",
		"recipe": [
      {"itemId":467, "count":60},
      {"itemId":7, "count":30},
      {"itemId":75, "count":15},
      {"itemId":76, "count":10},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Adobe Staircase",
		"itemId": '638',
"image":"Adobe_Staircase_(Scorched_Earth).png",
		"recipe": [
      {"itemId":467, "count":200},
      {"itemId":7, "count":100},
      {"itemId":75, "count":50},
      {"itemId":76, "count":40},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Adobe Trapdoor",
		"itemId": '639',
"image":"256px-Adobe_Trapdoor_(Scorched_Earth).png",
		"recipe": [
      {"itemId":467, "count":20},
      {"itemId":7, "count":10},
      {"itemId":75, "count":7},
      {"itemId":76, "count":5},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Adobe Wall",
		"itemId": '640',
"image":"256px-Adobe_Wall_(Scorched_Earth).png",
		"recipe": [
      {"itemId":467, "count":40},
      {"itemId":7, "count":20},
      {"itemId":75, "count":10},
      {"itemId":76, "count":8},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Sloped Adobe Wall Left",
		"itemId": '641',
"image":"256px-Sloped_Adobe_Wall_Left_(Scorched_Earth).png",
		"recipe": [
      {"itemId":467, "count":20},
      {"itemId":7, "count":10},
      {"itemId":75, "count":5},
      {"itemId":76, "count":8},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Sloped Adobe Wall Right",
		"itemId": '642',
"image":"256px-Sloped_Adobe_Wall_Right_(Scorched_Earth).png",
		"recipe": [
      {"itemId":467, "count":20},
      {"itemId":7, "count":10},
      {"itemId":75, "count":5},
      {"itemId":76, "count":8},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Adobe Doorframe",
		"itemId": '643',
"image":"256px-Adobe_Doorframe_(Scorched_Earth).png",
		"recipe": [
      {"itemId":467, "count":30},
      {"itemId":7, "count":15},
      {"itemId":75, "count":8},
      {"itemId":76, "count":8},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Adobe Windowframe",
		"itemId": '644',
"image":"256px-Adobe_Windowframe_(Scorched_Earth).png",
		"recipe": [
      {"itemId":467, "count":36},
      {"itemId":7, "count":15},
      {"itemId":75, "count":9},
      {"itemId":76, "count":8},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Adobe Window",
		"itemId": '645',
"image":"256px-Adobe_Window_(Scorched_Earth).png",
		"recipe": [
      {"itemId":467, "count":8},
      {"itemId":7, "count":4},
      {"itemId":75, "count":2},
      {"itemId":76, "count":4},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Mirror",
		"itemId": '646',
"image":"Mirror_(Scorched_Earth).png",
		"recipe": [
      {"itemId":468, "count":100},
      {"itemId":7, "count":10},
      {"itemId":75, "count":7},
      {"itemId":78, "count":100},
      {"itemId":142, "count":70},
      {"itemId":163, "count":100},
      {"itemId":74, "count":50},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Oil Pump",
		"itemId": '647',
"image":"Oil_Pump_(Scorched_Earth).png",
		"recipe": [
      {"itemId":74, "count":75},
      {"itemId":165, "count":25},
      {"itemId":78, "count":25},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Tent",
		"itemId": '648',
"image":"256px-Tent_(Scorched_Earth).png",
		"recipe": [
      {"itemId":75, "count":25},
      {"itemId":76, "count":10},
      {"itemId":10, "count":50},
      {"itemId":7, "count":15},
      {"itemId":484, "count":10},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Vessel",
		"itemId": '649',
"image":"Vessel_(Scorched_Earth).png",
		"recipe": [
      {"itemId":467, "count":20},
      {"itemId":7, "count":10},
      {"itemId":75, "count":7},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Water Well",
		"itemId": '650',
"image":"256px-Water_Well_(Scorched_Earth).png",
		"recipe": [
      {"itemId":75, "count":30},
      {"itemId":76, "count":20},
      {"itemId":146, "count":15},
      {"itemId":8, "count":50},
      {"itemId":7, "count":10},
      {"itemId":73, "count":10},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Wind Turbine",
		"itemId": '651',
"image":"Wind_Turbine_(Scorched_Earth).png",
		"recipe": [
      {"itemId":74, "count":75},
      {"itemId":146, "count":20},
      {"itemId":165, "count":25},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Tek Replicator",
		"itemId": '652',
"image":"Tek_Replicator.png",
		"recipe": [
      {"itemId":472, "count":100},
      {"itemId":74, "count":5000},
      {"itemId":78, "count":600},
      {"itemId":'Black Pearl', "count":150},
      {"itemId":166, "count":800},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Behemoth Tek Gate",
		"itemId": '653',
"image":"Behemoth_Tek_Gate.png",
		"recipe": [
      {"itemId":78, "count":1500},
      {"itemId":166, "count":350},
      {"itemId":472, "count":20},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Behemoth Tek Gateway",
		"itemId": '654',
"image":"Behemoth_Tek_Gateway.png",
		"recipe": [
      {"itemId":74, "count":2200},
      {"itemId":166, "count":500},
      {"itemId":78, "count":140},
      {"itemId":472, "count":40},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Sloped Tek Wall Left",
		"itemId": '655',
"image":"Sloped_Tek_Wall_Left.png",
		"recipe": [
      {"itemId":74, "count":15},
      {"itemId":146, "count":5},
      {"itemId":470, "count":25},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Sloped Tek Wall Right",
		"itemId": '656',
"image":"Sloped_Tek_Wall_Right.png",
		"recipe": [
      {"itemId":74, "count":15},
      {"itemId":146, "count":5},
      {"itemId":470, "count":25},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Tek Catwalk",
		"itemId": '657',
"image":"Tek_Catwalk.png",
		"recipe": [
      {"itemId":74, "count":72},
      {"itemId":166, "count":40},
      {"itemId":78, "count":20},
      {"itemId":472, "count":1},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Tek Ceiling",
		"itemId": '658',
"image":"Tek_Ceiling.png",
		"recipe": [
      {"itemId":74, "count":50},
      {"itemId":166, "count":25},
      {"itemId":78, "count":20},
      {"itemId":472, "count":1},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Tek Dinosaur Gate",
		"itemId": '659',
"image":"Tek_Dinosaur_Gate.png",
		"recipe": [
      {"itemId":472, "count":2},
      {"itemId":166, "count":30},
      {"itemId":78, "count":35},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Tek Dinosaur Gateway",
		"itemId": '660',
"image":"Tek_Dinosaur_Gateway.png",
		"recipe": [
      {"itemId":74, "count":170},
      {"itemId":166, "count":50},
      {"itemId":78, "count":30},
      {"itemId":472, "count":2},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Tek Door",
		"itemId": '661',
"image":"Tek_Door.png",
		"recipe": [
      {"itemId":166, "count":40},
      {"itemId":78, "count":60},
      {"itemId":472, "count":1},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Tek Doorframe",
		"itemId": '662',
"image":"Tek_Doorframe.png",
		"recipe": [
      {"itemId":74, "count":30},
      {"itemId":166, "count":40},
      {"itemId":78, "count":60},
      {"itemId":472, "count":1},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Tek Fence Foundation",
		"itemId": '663',
"image":"Tek_Fence_Foundation.png",
		"recipe": [
      {"itemId":74, "count":5},
      {"itemId":146, "count":2},
      {"itemId":470, "count":25},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Tek Forcefield",
		"itemId": '664',
"image":"Tek_Forcefield.png",
		"recipe": [
      {"itemId":74, "count":5000},
      {"itemId":78, "count":600},
      {"itemId":'Black Pearl', "count":150},
      {"itemId":166, "count":800},
      {"itemId":472, "count":75},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Tek Foundation",
		"itemId": '665',
"image":"Tek_Foundation.png",
		"recipe": [
      {"itemId":74, "count":100},
      {"itemId":166, "count":45},
      {"itemId":78, "count":20},
      {"itemId":472, "count":1},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Tek Hatchframe",
		"itemId": '666',
"image":"Tek_Hatchframe.png",
		"recipe": [
      {"itemId":74, "count":50},
      {"itemId":166, "count":25},
      {"itemId":78, "count":10},
      {"itemId":472, "count":1},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Tek Ladder",
		"itemId": '667',
"image":"Tek_Ladder.png",
		"recipe": [
      {"itemId":74, "count":28},
      {"itemId":166, "count":20},
      {"itemId":78, "count":8},
      {"itemId":472, "count":1},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Tek Pillar",
		"itemId": '668',
"image":"Tek_Pillar.png",
		"recipe": [
      {"itemId":74, "count":60},
      {"itemId":166, "count":14},
      {"itemId":78, "count":10},
      {"itemId":472, "count":1},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Tek Railing",
		"itemId": '669',
"image":"Tek_Railing.png",
		"recipe": [
      {"itemId":74, "count":12},
      {"itemId":146, "count":3},
      {"itemId":470, "count":25},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Tek Ramp",
		"itemId": '670',
"image":"Tek_Ramp.png",
		"recipe": [
      {"itemId":74, "count":70},
      {"itemId":166, "count":20},
      {"itemId":78, "count":20},
      {"itemId":472, "count":1},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Tek Staircase",
		"itemId": '671',
"image":"Tek_Staircase.png",
		"recipe": [
      {"itemId":74, "count":125},
      {"itemId":146, "count":35},
      {"itemId":470, "count":50},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Tek Trapdoor",
		"itemId": '672',
"image":"Tek_Trapdoor.png",
		"recipe": [
      {"itemId":76, "count":40},
      {"itemId":146, "count":16},
      {"itemId":472, "count":1},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Tek Wall",
		"itemId": '673',
"image":"Tek_Wall.png",
		"recipe": [
      {"itemId":74, "count":35},
      {"itemId":166, "count":25},
      {"itemId":78, "count":15},
      {"itemId":472, "count":1},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Tek Window",
		"itemId": '674',
"image":"Tek_Window.png",
		"recipe": [
      {"itemId":78, "count":40},
      {"itemId":166, "count":16},
      {"itemId":472, "count":1},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Tek Windowframe",
		"itemId": '675',
"image":"Tek_Windowframe.png",
		"recipe": [
      {"itemId":78, "count":30},
      {"itemId":166, "count":15},
      {"itemId":78, "count":5},
      {"itemId":472, "count":1},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Tek Generator",
		"itemId": '676',
"image":"Tek_Generator.png",
		"recipe": [
      {"itemId":472, "count":30},
      {"itemId":74, "count":2400},
      {"itemId":78, "count":250},
      {"itemId":'Black Pearl', "count":120},
      {"itemId":166, "count":500},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
   {
		"name": "Tek Teleporter",
		"itemId": '677',
"image":"Tek_Teleporter.png",
		"recipe": [
      {"itemId":472, "count":85},
      {"itemId":74, "count":2500},
      {"itemId":78, "count":600},
      {"itemId":'Black Pearl', "count":150},
      {"itemId":166, "count":1200},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Vacuum Compartment",
		"itemId": '678',
"image":"Vacuum_Compartment.png",
		"recipe": [
      {"itemId":74, "count":360},
      {"itemId":166, "count":136},
      {"itemId":78, "count":180},
      {"itemId":472, "count":2},
      {"itemId":'Black Pearl', "count":32},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Vacuum Compartment Moonpool",
		"itemId": '679',
"image":"Vacuum_Compartment_Moonpool.png",
		"recipe": [
      {"itemId":74, "count":360},
      {"itemId":166, "count":136},
      {"itemId":78, "count":180},
      {"itemId":472, "count":2},
      {"itemId":'Black Pearl', "count":32},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Cloning Chamber",
		"itemId": '680',
"image":"Cloning_Chamber.png",
		"recipe": [
      {"itemId":74, "count":5500},
      {"itemId":166, "count":800},
      {"itemId":78, "count":550},
      {"itemId":472, "count":2},
      {"itemId":'Black Pearl', "count":32},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Tek Turret",
		"itemId": '681',
"image":"Tek_Turret.png",
		"recipe": [
      {"itemId":165, "count":100},
      {"itemId":74, "count":100},
      {"itemId":146, "count":50},
      {"itemId":166, "count":50},
      {"itemId":472, "count":3},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
    {
		"name": "Motorboat",
		"itemId": '682',
"image":"Motorboat.png",
		"recipe": [
      {"itemId":7, "count":250},
      {"itemId":74, "count":1200},
      {"itemId":10, "count":200},
      {"itemId":76, "count":180},
      {"itemId":142, "count":150},
      {"itemId":166, "count":400},
      {"itemId":'Black Pearl', "count":60},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
     {
		"name": "Toilet",
		"itemId": '683',
"image":"Toilet.png",
		"recipe": [
      {"itemId":8, "count":30},
      {"itemId":7, "count":70},
      {"itemId":9, "count":180},
      {"itemId":146, "count":200},
      {"itemId":78, "count":40},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Tek Trough",
		"itemId": '684',
"image":"Tek_Trough.png",
		"recipe": [
      {"itemId":'Black Pearl', "count":45},
      {"itemId":78, "count":100},
      {"itemId":165, "count":50},
      {"itemId":472, "count":18},
      {"itemId":74, "count":900},
      {"itemId":166, "count":175},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Tek Light",
		"itemId": '685',
"image":"Tek_Light_(Ragnarok).png",
		"recipe": [
      {"itemId":472, "count":2},
      {"itemId":74, "count":90},
      {"itemId":78, "count":20},
      {"itemId":'Black Pearl', "count":1},
      {"itemId":166, "count":40},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Heavy Auto Turret",
		"itemId": '686',
"image":"256px-Heavy_Auto_Turret.png",
		"recipe": [
      {"itemId":197, "count":1},
      {"itemId":146, "count":150},
      {"itemId":165, "count":200},
      {"itemId":74, "count":400},
      {"itemId":166, "count":50},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Fish Basket",
		"itemId": '687',
"image":"Fish_Basket_(Aberration).png",
		"recipe": [
      {"itemId":558, "count":60},
      {"itemId":76, "count":120},
      {"itemId":75, "count":40},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Tek Sleeping Pod",
		"itemId": '688',
"image":"Tek_Sleeping_Pod_(Aberration).png",
		"recipe": [
      {"itemId":166, "count":80},
      {"itemId":424, "count":200},
      {"itemId":74, "count":320},
      {"itemId":10, "count":120},
      {"itemId":76, "count":280},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Gas Collector",
		"itemId": '689',
"image":"Gas_Collector_(Aberration).png",
		"recipe": [
      {"itemId":74, "count":75},
      {"itemId":146, "count":60},
      {"itemId":78, "count":40},
      {"itemId":483, "count":20},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Large Wood Elevator Platform",
		"itemId": '690',
"image":"Large_Wood_Elevator_Platform_(Aberration).png",
		"recipe": [
      {"itemId":7, "count":650},
      {"itemId":76, "count":600},
      {"itemId":74, "count":85},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Medium Wood Elevator Platform",
		"itemId": '691',
"image":"Medium_Wood_Elevator_Platform_(Aberration).png",
		"recipe": [
      {"itemId":7, "count":285},
      {"itemId":76, "count":350},
      {"itemId":74, "count":30},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Metal Cliff Platform",
		"itemId": '692',
"image":"Metal_Cliff_Platform_(Aberration).png",
		"recipe": [
      {"itemId":74, "count":1200},
      {"itemId":146, "count":800},
      {"itemId":'Blue Gem', "count":200},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Portable Rope Ladder",
		"itemId": '693',
"image":"256px-Portable_Rope_Ladder_(Aberration).png",
		"recipe": [
      {"itemId":558, "count":15},
      {"itemId":75, "count":140},
      {"itemId":76, "count":180},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Shag Rug",
		"itemId": '694',
"image":"Shag_Rug_(Aberration).png",
		"recipe": [
      {"itemId":558, "count":10},
      {"itemId":10, "count":30},
      {"itemId":424, "count":140},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Small Wood Elevator Platform",
		"itemId": '695',
"image":"Small_Wood_Elevator_Platform_(Aberration).png",
		"recipe": [
      {"itemId":7, "count":185},
      {"itemId":76, "count":175},
      {"itemId":74, "count":20},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Stone Cliff Platform",
		"itemId": '696',
"image":"Stone_Cliff_Platform_(Aberration).png",
		"recipe": [
      {"itemId":8, "count":1200},
      {"itemId":558, "count":800},
      {"itemId":76, "count":600},
      {"itemId":146, "count":250},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
    {
		"name": "Wood Elevator Top Switch",
		"itemId": '697',
"image":"Wood_Elevator_Top_Switch_(Aberration).png",
		"recipe": [
      {"itemId":7, "count":125},
      {"itemId":76, "count":200},
      {"itemId":74, "count":35},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Wood Elevator Track",
		"itemId": '698',
"image":"Wood_Elevator_Track_(Aberration).png",
		"recipe": [
      {"itemId":7, "count":80},
      {"itemId":76, "count":45},
      {"itemId":74, "count":5},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Cyan Coloring",
		"itemId": '699',
"image":"Cyan_Coloring.png",
		"recipe": [
      {"itemId":117, "count":80},
      {"itemId":118, "count":45},
      {"itemId":108, "count":5},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Forest Coloring",
		"itemId": '700',
"image":"Forest_Coloring.png",
		"recipe": [
      {"itemId":117, "count":6},
      {"itemId":118, "count":12},
      {"itemId":121, "count":4},
      {"itemId":109, "count":1},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Parchment Coloring",
		"itemId": '701',
"image":"Parchement_Coloring.png",
		"recipe": [
      {"itemId":117, "count":12},
      {"itemId":122, "count":6},
      {"itemId":109, "count":1},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Pink Coloring",
		"itemId": '702',
"image":"Pink_Coloring.png",
		"recipe": [
      {"itemId":119, "count":12},
      {"itemId":122, "count":6},
      {"itemId":109, "count":1},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
   {
		"name": "Royalty Coloring",
		"itemId": '703',
"image":"Royalty_Coloring.png",
		"recipe": [
      {"itemId":118, "count":7},
      {"itemId":119, "count":7},
      {"itemId":121, "count":4},
      {"itemId":109, "count":1},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Silver Coloring",
		"itemId": '704',
"image":"Silver_Coloring.png",
		"recipe": [
      {"itemId":121, "count":6},
      {"itemId":122, "count":12},
      {"itemId":109, "count":1},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Sky Coloring",
		"itemId": '705',
"image":"Sky_Coloring.png",
		"recipe": [
      {"itemId":118, "count":12},
      {"itemId":122, "count":6},
      {"itemId":109, "count":1},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Sky Coloring",
		"itemId": '706',
"image":"Sky_Coloring.png",
		"recipe": [
      {"itemId":118, "count":12},
      {"itemId":122, "count":6},
      {"itemId":109, "count":1},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Tan Coloring",
		"itemId": '707',
"image":"Tan_Coloring.png",
		"recipe": [
      {"itemId":117, "count":4},
      {"itemId":118, "count":1},
      {"itemId":119, "count":7},
      {"itemId":122, "count":6},
      {"itemId":109, "count":1},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Tangerine Coloring",
		"itemId": '708',
"image":"Tangerine_Coloring.png",
		"recipe": [
      {"itemId":117, "count":7},
      {"itemId":119, "count":7},
      {"itemId":121, "count":4},
      {"itemId":109, "count":1},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Cooked Meat Jerky",
		"itemId": '709',
"image":"Cooked_Meat_Jerky.png",
		"recipe": [
      {"itemId":14, "count":1},
      {"itemId":162, "count":1},
      {"itemId":108, "count":3},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Prime Meat Jerky",
		"itemId": '710',
"image":"Prime_Meat_Jerky.png",
		"recipe": [
      {"itemId":253, "count":1},
      {"itemId":162, "count":1},
      {"itemId":108, "count":3},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Aggeravic Mushroom",
		"itemId": '711',
"image":"Aggeravic_Mushroom_(Aberration).png",
		"recipe": [
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
   {
		"name": "Aquatic Mushroom",
		"itemId": '712',
"image":"Aquatic_Mushroom_(Aberration).png",
		"recipe": [
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Ascerbic Mushroom",
		"itemId": '713',
"image":"Ascerbic_Mushroom_(Aberration).png",
		"recipe": [
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Auric Mushroom",
		"itemId": '714',
"image":"Auric_Mushroom_(Aberration).png",
		"recipe": [
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Mushroom Brew",
		"itemId": '715',
"image":"Mushroom_Brew_(Aberration).png",
		"recipe": [
      {"itemId":711, "count":5},
      {"itemId":712, "count":5},
      {"itemId":713, "count":5},
      {"itemId":714, "count":5},
      {"itemId":457, "count":3},
      {"itemId":465, "count":3},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Beer Liquid",
		"itemId": '716',
"image":"Beer_Liquid.png",
		"recipe": [
      {"itemId":75, "count":40},
      {"itemId":717, "count":50},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Berries",
		"itemId": '717',
"image":"Berries.png",
		"recipe": [
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Beer Jar",
		"itemId": '718',
"image":"Beer_Jar.png",
		"recipe": [
      {"itemId":716, "count":1},
      {"itemId":15, "count":1},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Bio Toxin",
		"itemId": '719',
"image":"Bio_Toxin.png",
		"recipe": [
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Bug Repellant",
		"itemId": '720',
"image":"Bug_Repellant.png",
		"recipe": [
      {"itemId":424, "count":6},
      {"itemId":123, "count":2},
      {"itemId":99, "count":4},
      {"itemId":234, "count":4},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Cactus Broth",
		"itemId": '721',
"image":"Cactus_Broth_(Scorched_Earth).png",
		"recipe": [
      {"itemId":120, "count":10},
      {"itemId":469, "count":30},
      {"itemId":118, "count":10},
      {"itemId":117, "count":10},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Lesser Antidote",
		"itemId": '722',
"image":"Lesser_Antidote.png",
		"recipe": [
      {"itemId":250, "count":10},
      {"itemId":251, "count":10},
      {"itemId":723, "count":3},
      {"itemId":123, "count":1},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Leech Blood or Horns",
		"itemId": '723',
"image":"Leech_Blood_or_Horns.png",
		"recipe": [
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Sweet Vegetable Cake",
		"itemId": '724',
"image":"Sweet_Vegetable_Cake.png",
		"recipe": [
      {"itemId":'Giant Bee Honey', "count":2},
      {"itemId":457, "count":4},
      {"itemId":234, "count":2},
      {"itemId":233, "count":2},
      {"itemId":232, "count":2},
      {"itemId":124, "count":4},
      {"itemId":76, "count":25},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Chain Bola",
		"itemId": '725',
"image":"Chain_Bola.png",
		"recipe": [
      {"itemId":'Giant Bee Honey', "count":2},
      {"itemId":74, "count":65},
      {"itemId":146, "count":10},
      {"itemId":142, "count":2},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Charge Lantern",
		"itemId": '726',
"image":"Charge_Lantern_(Aberration).png",
		"recipe": [
      {"itemId":166, "count":120},
      {"itemId":74, "count":130},
      {"itemId":165, "count":120},
      {"itemId":483, "count":80},
      {"itemId":464, "count":2},
      {"itemId":465, "count":400},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Climbing Pick",
		"itemId": '727',
"image":"Climbing_Pick_(Aberration).png",
		"recipe": [
      {"itemId":478, "count":4},
      {"itemId":558, "count":2},
      {"itemId":76, "count":10},
      {"itemId":74, "count":8},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Cluster Grenade",
		"itemId": '728',
"image":"Cluster_Grenade_(Scorched_Earth).png",
		"recipe": [
      {"itemId":109, "count":65},
      {"itemId":78, "count":25},
      {"itemId":146, "count":20},
      {"itemId":74, "count":35},
      {"itemId":166, "count":15},
      {"itemId":482, "count":25},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Flamethrower",
		"itemId": '729',
"image":"256px-Flamethrower_(Scorched_Earth).png",
		"recipe": [
      {"itemId":166, "count":75},
      {"itemId":146, "count":50},
      {"itemId":74, "count":35},
      {"itemId":481, "count":10},
      {"itemId":165, "count":15},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
   {
		"name": "Glowstick",
		"itemId": '730',
"image":"Glow_Stick_(Aberration).png",
		"recipe": [
      {"itemId":478, "count":1},
      {"itemId":78, "count":2},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Harpoon Launcher",
		"itemId": '731',
"image":"Harpoon_Launcher.png",
		"recipe": [
      {"itemId":7, "count":40},
      {"itemId":76, "count":60},
      {"itemId":10, "count":25},
      {"itemId":74, "count":120},
      {"itemId":146, "count":60},
      {"itemId":142, "count":50},
      {"itemId":166, "count":30},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Lance",
		"itemId": '732',
"image":"Lance.png",
		"recipe": [
      {"itemId":73, "count":100},
      {"itemId":10, "count":70},
      {"itemId":424, "count":70},
      {"itemId":76, "count":120},
      {"itemId":142, "count":100},
      {"itemId":74, "count":260},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Lasso",
		"itemId": '733',
"image":"Lasso.png",
		"recipe": [
      {"itemId":75, "count":4},
      {"itemId":76, "count":6},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Oil Jar",
		"itemId": '734',
"image":"Oil_Jar_(Scorched_Earth).png",
		"recipe": [
      {"itemId":482, "count":3},
      {"itemId":109, "count":3},
      {"itemId":467, "count":5},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
   {
		"name": "Smoke Grenade",
		"itemId": '735',
"image":"Smoke_Grenade.png",
		"recipe": [
      {"itemId":74, "count":1},
      {"itemId":77, "count":10},
      {"itemId":7, "count":2},
      {"itemId":10, "count":6},
      {"itemId":73, "count":3},
      {"itemId":76, "count":15},
      {"itemId":75, "count":5},
      {"itemId":108, "count":5},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Sword",
		"itemId": '736',
"image":"Sword.png",
		"recipe": [
      {"itemId":74, "count":50},
      {"itemId":7, "count":1},
      {"itemId":10, "count":15},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Tek Grenade",
		"itemId": '737',
"image":"Tek_Grenade.png",
		"recipe": [
      {"itemId":472, "count":1},
      {"itemId":78, "count":40},
      {"itemId":146, "count":10},
      {"itemId":74, "count":30},
      {"itemId":166, "count":30},
      {"itemId":109, "count":60},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Tek Railgun",
		"itemId": '738',
"image":"Tek_Railgun_(Aberration).png",
		"recipe": [
      {"itemId":166, "count":450},
      {"itemId":74, "count":120},
      {"itemId":465, "count":525},
      {"itemId":472, "count":20},
      {"itemId":'Black Pearl', "count":55},
      {"itemId":483, "count":120},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Tek Rifle",
		"itemId": '739',
"image":"Tek_Railgun_(Aberration).png",
		"recipe": [
      {"itemId":166, "count":120},
      {"itemId":74, "count":450},
      {"itemId":78, "count":120},
      {"itemId":472, "count":20},
      {"itemId":'Black Pearl', "count":55},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Tek Sword",
		"itemId": '740',
"image":"Tek_Sword_(Ragnarok).png",
		"recipe": [
      {"itemId":166, "count":180},
      {"itemId":74, "count":675},
      {"itemId":78, "count":180},
      {"itemId":472, "count":40},
      {"itemId":'Black Pearl', "count":80},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Cannon Ball",
		"itemId": '741',
"image":"Cannon_Ball.png",
		"recipe": [
      {"itemId":74, "count":80},
      {"itemId":109, "count":30},
      {"itemId":146, "count":20},
      {"itemId":142, "count":4},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Flame Arrow",
		"itemId": '742',
"image":"Flame_Arrow_(Scorched_Earth).png",
		"recipe": [
      {"itemId":32, "count":1},
      {"itemId":482, "count":1},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Flamethrower Ammo",
		"itemId": '743',
"image":"Flamethrower_Ammo_(Scorched_Earth).png",
		"recipe": [
      {"itemId":482, "count":10},
      {"itemId":164, "count":1},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Grappling Hook",
		"itemId": '744',
"image":"Grappling_Hook.png",
		"recipe": [
      {"itemId":32, "count":3},
      {"itemId":146, "count":1},
      {"itemId":74, "count":9},
      {"itemId":75, "count":2},
      {"itemId":76, "count":35},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Tranquilizer Dart",
		"itemId": '745',
"image":"Tranquilizer_Dart.png",
		"recipe": [
      {"itemId":123, "count":3},
      {"itemId":74, "count":2},
      {"itemId":144, "count":1},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
    {
		"name": "Pheromone Dart",
		"itemId": '746',
"image":"Pheromone_Dart.png",
		"recipe": [
      {"itemId":'Ammonite Bile', "count":3},
      {"itemId":74, "count":2},
      {"itemId":745, "count":1},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Rocket Homing Missile",
		"itemId": '747',
"image":"Rocket_Homing_Missile_(Scorched_Earth).png",
		"recipe": [
      {"itemId":109, "count":50},
      {"itemId":78, "count":20},
      {"itemId":146, "count":40},
      {"itemId":166, "count":15},
      {"itemId":74, "count":20},
      {"itemId":165, "count":5},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
    {
		"name": "Shocking Tranquilizer Dart",
		"itemId": '748',
"image":"Shocking_Tranquilizer_Dart.png",
		"recipe": [
      {"itemId":719, "count":3},
      {"itemId":74, "count":2},
      {"itemId":745, "count":1},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Tranq Spear Bolt",
		"itemId": '749',
"image":"Tranq_Spear_Bolt.png",
		"recipe": [
      {"itemId":584, "count":1},
      {"itemId":745, "count":1},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Zip-Line Anchor",
		"itemId": '750',
"image":"256px-Zip-Line_Anchor_(Aberration).png",
		"recipe": [
      {"itemId":32, "count":2},
      {"itemId":74, "count":15},
      {"itemId":558, "count":8},
      {"itemId":76, "count":100},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Zip-Line Motor Attachment",
		"itemId": '751',
"image":"Zip-Line_Motor_Attachment_Skin_(Aberration).png",
		"recipe": [
      {"itemId":74, "count":60},
      {"itemId":'Blue Gem', "count":40},
      {"itemId":165, "count":15},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Glider Suit",
		"itemId": '752',
"image":"Glider_Suit_Skin_(Aberration).png",
		"recipe": [
      {"itemId":74, "count":60},
      {"itemId":'Blue Gem', "count":25},
      {"itemId":10, "count":60},
      {"itemId":76, "count":100},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Managarmr Saddle",
		"itemId": '753',
"image":"Managarmr_Saddle_(Extinction).png",
		"recipe": [
      {"itemId":11, "count":150},
      {"itemId":76, "count":185},
      {"itemId":10, "count":350},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Snow Owl Saddle",
		"itemId": '754',
"image":"Snow_Owl_Saddle_(Extinction).png",
		"recipe": [
      {"itemId":11, "count":150},
      {"itemId":76, "count":185},
      {"itemId":10, "count":350},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Velonasaur Saddle",
		"itemId": '755',
"image":"Velonasaur_Saddle_(Extinction).png",
		"recipe": [
      {"itemId":11, "count":150},
      {"itemId":76, "count":185},
      {"itemId":10, "count":350},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Dino Leash",
		"itemId": '756',
"image":"Dino_Leash_(Extinction).png",
		"recipe": [
      {"itemId":166, "count":5},
      {"itemId":74, "count":20},
      {"itemId":165, "count":1},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Gacha Saddle",
		"itemId": '757',
"image":"Gacha_Saddle_(Extinction).png",
		"recipe": [
      {"itemId":10, "count":350},
      {"itemId":76, "count":185},
      {"itemId":11, "count":150},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Scout Remote",
		"itemId": '758',
"image":"Scout_Remote_(Extinction).png",
		"recipe": [
      {"itemId":474, "count":20},
      {"itemId":165, "count":5},
      {"itemId":78, "count":30},
      {"itemId":74, "count":20},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
 {
		"name": "Small Taxidermy Base",
		"itemId": '759',
"image":"Small_Taxidermy_Base_(Extinction).png",
		"recipe": [
      {"itemId":8, "count":10},
      {"itemId":75, "count":100},
      {"itemId":7, "count":50},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Medium Taxidermy Base",
		"itemId": '760',
"image":"Medium_Taxidermy_Base_(Extinction).png",
		"recipe": [
      {"itemId":8, "count":100},
      {"itemId":75, "count":500},
      {"itemId":7, "count":250},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Large Taxidermy Base",
		"itemId": '761',
"image":"Large_Taxidermy_Base_(Extinction).png",
		"recipe": [
      {"itemId":74, "count":50},
      {"itemId":8, "count":250},
      {"itemId":75, "count":1250},
      {"itemId":7, "count":1000},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Taxidermy Tool",
		"itemId": '762',
"image":"Taxidermy_Tool_(Extinction).png",
		"recipe": [
      {"itemId":73, "count":4},
      {"itemId":8, "count":2},
      {"itemId":7, "count":10},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Tek Bridge",
		"itemId": '763',
"image":"Tek_Bridge_(Extinction).png",
		"recipe": [
      {"itemId":78, "count":150},
      {"itemId":472, "count":2},
      {"itemId":74, "count":220},
      {"itemId":166, "count":100},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Tek Gravity Grenade",
		"itemId": '764',
"image":"Tek_Gravity_Grenade_(Extinction).png",
		"recipe": [
      {"itemId":474, "count":200},
      {"itemId":78, "count":50},
      {"itemId":74, "count":30},
      {"itemId":166, "count":60},
      {"itemId":109, "count":60},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Chitin/Keratin",
		"itemId": '765',
"image":"Chitin_or_Keratin.png",
		"recipe": [
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Woolly Rhino Saddle",
		"itemId": '766',
"image":"Woolly_Rhino_Saddle.png",
		"recipe": [
      {"itemId":10, "count":250},
      {"itemId":76, "count":130},
      {"itemId":146, "count":100},
      {"itemId":74, "count":60},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Cryofridge",
		"itemId": '767',
"image":"Cryofridge_(Extinction).png",
		"recipe": [
      {"itemId":78, "count":25},
      {"itemId":165, "count":15},
      {"itemId":74, "count":225},
      {"itemId":166, "count":60},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
  {
		"name": "Cryopod",
		"itemId": '768',
"image":"128px-Cryopod_(Dead)_(Extinction).png",
		"recipe": [
      {"itemId":78, "count":10},
      {"itemId":76, "count":15},
      {"itemId":10, "count":5},
      {"itemId":74, "count":2},
      {"itemId":162, "count":4},
      {"itemId":166, "count":6},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
		  {
		"name": "Adobe Triangle Foundation",
		"itemId": '769',
"image":"Adobe_Triangle_Foundation_(Scorched_Earth).png",
		"recipe": [
      {"itemId":467, "count":40},
      {"itemId":76, "count":8},
      {"itemId":75, "count":10},
      {"itemId":7, "count":20},
    ],
		"stats": [
			{"id": 1, "value": "Tool"},
		]
		},
]
