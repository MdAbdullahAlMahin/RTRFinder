const specs = {
  kennedytown: {
    exits: ["A", "B", "C"],
    type_of_exits: {
      A: ["Elevator", "Escalator", "Stairs"],
      B: ["Elevator", "Escalator", "Stairs"],
      C: ["Escalator", "Stairs"],
    },
  },
};

const useSpecs = (station) => {
  if (specs[station] !== null || typeof specs[station] !== undefined) {
    return specs[station];
  } else {
    return null;
  }
};

const stationExists = (station) => {
  if (specs[station] !== null || typeof specs[station] !== undefined) {
    return true;
  } else {
    return false;
  }
};

const containsExit = (station, exit) => {
  if (specs[station].exits.some((e) => e.Name === exit)) {
    return true;
  } else {
    return false;
  }
};

const containsTypeOfExit = (station, exit, type_of_exit) => {
  if (specs[station].type_of_exit[exit].some((e) => e.Name === type_of_exit)) {
    return true;
  } else {
    return false;
  }
};

export { useSpecs, stationExists, containsTypeOfExit, containsExit };
