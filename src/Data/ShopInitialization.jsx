export const Levels = [
	{
		LevelName: "Purgatory",
		Buildings: [
			{
				BuildingName: "Reaper",
				img: "/Reaper",
				Upgrades: [
					{
						name: "Additional Reapers",
						effect: "+1 Reapers",
						cost: 100,
						levelAffected: "Purgatory",
						buildingAffected: "Reaper",
						upgradeType: "Worker",
						upgradeModifier: 1,
					},
					{
						name: "Mo' Money, Mo' Problems",
						effect: "Reapers generate more money when harvesting souls",
						cost: 200,
						levelAffected: "Purgatory",
						buildingAffected: "Reaper",
						upgradeType: "Money",
						upgradeModifier: 1.5,
					},
					{
						name: "New Reaper Training",
						effect: "Reapers generate 25% faster",
						cost: 300,
						levelAffected: "Purgatory",
						buildingAffected: "Reaper",
						upgradeType: "Productivity",
						upgradeModifier: 1.25,
					},
				],
			},
			{
				BuildingName: "Verifier",
				img: "/Verifier",
				Upgrades: [
					{
						name: "Additional Verifiers",
						effect: "+1 Verifiers",
						cost: 100,
						levelAffected: "Purgatory",
						buildingAffected: "Verifier",
						upgradeType: "Worker",
						upgradeModifier: 1,
					},
					{
						name: "Mo' Money, Mo' Problems",
						effect: "Verifiers generate more money when harvesting souls",
						cost: 200,
						levelAffected: "Purgatory",
						buildingAffected: "Verifier",
						upgradeType: "Money",
						upgradeModifier: 1.5,
					},
					{
						name: "New Verifier Training",
						effect: "Verifier generate 25% faster",
						cost: 300,
						levelAffected: "Purgatory",
						buildingAffected: "Verifier",
						upgradeType: "Productivity",
						upgradeModifier: 1.25,
					},
					{
						name: "WE NEED MORE ROPE!",
						effect: "Verifiers queue +5",
						cost: 400,
						levelAffected: "Purgatory",
						buildingAffected: "Verifier",
						upgradeType: "Queue",
						upgradeModifier: 5,
					},
				],
			},
			{
				BuildingName: "Decider",
				img: "/Decider",
				Upgrades: [
					{
						name: "Additional Deciders",
						effect: "+1 Deciders",
						cost: 100,
						levelAffected: "Purgatory",
						buildingAffected: "Decider",
						upgradeType: "Worker",
						upgradeModifier: 1,
					},
					{
						name: "Mo' Money, Mo' Problems",
						effect: "Deciders generate more money when harvesting souls",
						cost: 200,
						levelAffected: "Purgatory",
						buildingAffected: "Decider",
						upgradeType: "Money",
						upgradeModifier: 1.5,
					},
					{
						name: "New Decider Training",
						effect: "Deciders generate 25% faster",
						cost: 300,
						levelAffected: "Purgatory",
						buildingAffected: "Decider",
						upgradeType: "Productivity",
						upgradeModifier: 1.25,
					},
					{
						name: "WE NEED MORE ROPE!",
						effect: "Deciders queue +5",
						cost: 400,
						levelAffected: "Purgatory",
						buildingAffected: "Decider",
						upgradeType: "Queue",
						upgradeModifier: 5,
					},
				],
			},
		],
	},
	{
		LevelName: "Hell",
		Buildings: [
			{
				BuildingName: "Horn Fitter",
				img: "/HornFitter",
			},
			{
				BuildingName: "Tail Attacher",
				img: "/TailAttacher",
			},
			{
				BuildingName: "Trident Distributor",
				img: "/TridentDistributor",
			},
			{
				BuildingName: "The Devil",
				img: "/TheDevil",
			},
		],
	},
	{
		LevelName: "Heaven",
		Buildings: [
			{
				BuildingName: "Welcomer",
				img: "/Welcomer",
			},
			{
				BuildingName: "Wing Receptionist",
				img: "/Wingreceptionist",
			},
			{
				BuildingName: "Halo Distributor",
				img: "/HaloDistributor",
			},
			{
				BuildingName: "God",
				img: "/God",
			},
		],
	},
];
