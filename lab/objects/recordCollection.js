const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(records, id, prop, value) {
  const recordsCopy = {...records};
  if (value === "") {
    delete recordsCopy[id][prop];
  } else {
    if (prop !== "tracks" ) {
      recordsCopy[id][prop] = value;
    } else {
      if (recordsCopy[id].tracks === undefined) {
        const arr = [];
        recordsCopy[id].tracks = arr;
        arr.push(value);
      } else {
        (recordsCopy[id].tracks).push(value);
      }
    }
  }
  
  return recordsCopy;
};

const result = updateRecords(recordCollection, 2548, "artist", "")
console.log(result);


