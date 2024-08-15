import './index.css';

let knightPlaced = false;
let targetPlaced = false;
let showedTilesCoord = false;
let knightLocation = '';
let targetLocation = '';

function CreateTileEvents(tile) {
  tile.addEventListener('click', (event) => {
    const { target } = event;
    const setStyle = (element, color, backgroundColor) => {
      Object.assign(element.style, {
        color,
        backgroundColor,
      });
    };

    if (!knightPlaced) {
      knightLocation = target.tileCoords;
      setStyle(target, 'white', '#3498db');
      knightPlaced = true;
    } else if (!targetPlaced) {
      targetLocation = target.tileCoords;
      setStyle(target, 'white', '#e74c3c');
      targetPlaced = true;
    }
  });

  tile.addEventListener('mouseover', (event) => {
    const { target } = event;
    target.style.boxShadow = '0px 0px 10px 4px green, 0px 0px 20px 8px lime';
  });

  tile.addEventListener('mouseout', (event) => {
    const { target } = event;
    target.style.boxShadow = '';
  });
}

function createPixel(number) {
  const canvas = document.getElementById('chessTiles');

  let IsWhite = true;
  const startBlack = new Set([8, 24, 40, 56]);
  const startWhite = new Set([0, 16, 32, 48]);

  for (let i = 0; i < number * number; i += 1) {
    if (startBlack.has(i)) {
      IsWhite = false;
    } else if (startWhite.has(i)) {
      IsWhite = true;
    }

    const tile = document.createElement('div');
    // adds attributes
    Object.assign(tile, {
      color: IsWhite,
      tileCoords: `[${i % number}, ${Math.floor(i / number)}]`,
    });
    tile.style.color = IsWhite ? 'black' : 'white'; // adjust depending on the tile color

    CreateTileEvents(tile); // Add events Listeners

    tile.classList.add('tiles');
    tile.style.backgroundColor = IsWhite ? ('white') : ('black');
    IsWhite = !IsWhite;

    canvas.appendChild(tile);
  }
}

function FindShortestPathFunction() {
  if (knightLocation !== '' && targetLocation !== '') {
    console.log(knightLocation);
    console.log(targetLocation);
  }
}

function CreateControllerButtons() {
  const controller = document.getElementById('controls');
  // Find Path
  const FindPathButton = document.createElement('button');

  Object.assign(FindPathButton, {
    className: 'findPathButton',
    innerText: 'Find Path',
  });

  FindPathButton.addEventListener('click', () => {
    FindShortestPathFunction();
  });

  // Show coords
  const ShowLocationToggleButton = document.createElement('button');
  Object.assign(ShowLocationToggleButton, {
    className: 'findPathButton',
    innerText: 'Show Coords',
  });

  ShowLocationToggleButton.addEventListener('click', () => {
    const tiles = document.getElementsByClassName('tiles');
    if (showedTilesCoord) {
      for (let i = 0; i < tiles.length; i += 1) {
        tiles[i].innerText = '';
      }
      showedTilesCoord = false;
    } else {
      for (let i = 0; i < tiles.length; i += 1) {
        tiles[i].innerText = tiles[i].tileCoords;
      }
      showedTilesCoord = true;
    }
  });

  controller.appendChild(FindPathButton);
  controller.appendChild(ShowLocationToggleButton);
}

// Initialization
function Initialization() {
  createPixel(8);
  CreateControllerButtons();
}

Initialization();
