//     Level 3

const prompt = require("prompt-sync")();

let season_ui = prompt('Enter the month:')
    let season = season_ui.toLowerCase()
    switch(season){
        case 'january':
        case 'march':
        case 'may':
        case 'july':
        case 'august':
        case 'october':
        case 'december':
            console.log('31');
            break;
        case 'april':
        case 'june':
        case 'september':
        case 'november':
            console.log('30');
                break;
        case 'february':
            console.log('28');
            break;
        default:
            console.log('Invalid');
    }
