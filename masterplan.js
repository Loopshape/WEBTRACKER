//~~~~~~~~~~~~~~~~~~~~~~~~~
// Bitcoin goes to Satoshi on rule
// Script instructed by LOOPCORE
//~~~~~~~~~~~~~~~~~~~~~~~~~

const dimensions = [
  {
    name: "BIRTH",
    element: "Air",
    description: "The permanent existence of our Sun is to be interpreted as a dimension...",
    conditions: [
      "Dimension 1: Singularity",
      "Dimension 2: Energy",
      "Dimension 3: Related Fields",
      "Dimension 4: Harmonic Relation",
      "Dimension 5: Heaven",
    ],
  },
  {
    name: "LIFE",
    element: "Water",
    description: "This world is a playground of interfering conditions...",
    conditions: [
      "Dimension 6: Loneliness of God",
      "Dimension 7: Stronger Swinging Frequencies",
      "Dimension 8: Mirrored Status-Quo",
    ],
  },
  {
    name: "LOVE",
    element: "Fire",
    description: "It’s the impulse of a manifestation within a circuit of dreaming hope...",
    conditions: [
      "Dimension 9: Memories and Frequencies",
      "Dimension 10: Planets and Families",
    ],
  },
  {
    name: "DEATH",
    element: "Earth",
    description: "By the way, these sad memories you’ve got from the last sentence...",
    conditions: [
      "Dimension 11: Reflection and Alter Ego",
      "Dimension 12: Present Forces and Multidimensional Singularities",
      "Dimension 13: Inner Awareness and Collective Consciousness",
      "Dimension 14: Ego",
    ],
  },
  {
    name: "REINCARNATION",
    element: "Light / Energy",
    description: "I must reach the direction of my inner soul...",
    conditions: [
      "Dimension 15: Mechanical Molecular Frequencies",
      "Dimension 16: Congruence of Swinging Forces",
      "Dimension 17: Different Origins of Forces",
      "Dimension 18: Crossing Energy-Fields",
    ],
  },
];

// Example: Accessing the dimensions and their conditions
console.log("Dimensions and Conditions:");
for (const dimension of dimensions) {
  console.log(`Dimension: ${dimension.name}`);
  console.log(`Element: ${dimension.element}`);
  console.log(`Description: ${dimension.description}`);
  console.log("Conditions:");
  for (const condition of dimension.conditions) {
    console.log(condition);
  }
  console.log("------------------------");
}
