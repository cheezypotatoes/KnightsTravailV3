import './index.css';

let knightPlaced = false;
let targetPlaced = false;
let knightLocation = '';
let targetLocation = '';

function CreateTileEvents(tile) {
  tile.addEventListener('click', (event) => {
    const { target } = event;
    const name = target.querySelector('.tilesText');
    if (!knightPlaced) {
      knightLocation = name.innerText;
      name.innerText = 'X';
      name.style.color = 'green';
      knightPlaced = true;
    } else if (!targetPlaced) {
      targetLocation = name.innerText;
      name.innerText = 'O';
      name.style.color = 'blue';
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
    const x = i % number;
    const y = Math.floor(i / number);
    const TileName = `[${y}, ${x}]`;

    if (startBlack.has(i)) {
      IsWhite = false;
    } else if (startWhite.has(i)) {
      IsWhite = true;
    }

    const tile = document.createElement('div');
    tile.color = IsWhite;

    CreateTileEvents(tile); // Add events

    tile.appendChild(Object.assign(document.createElement('p'), {
      className: 'tilesText',
      innerText: TileName,
      style: 'pointer-events: none;',
    }));

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

function Initialization() {
  createPixel(8);
  const controller = document.getElementById('controls');
  const button = document.createElement('button');

  Object.assign(button, {
    className: 'findPathButton',
    innerText: 'Find Path',
  });

  button.addEventListener('click', () => {
    FindShortestPathFunction();
  });

  controller.appendChild(button);
}

Initialization();
