import Respondots from '../../src/respondots';
import '../scss/main.scss';

const conf = {
    gridSize: 20,
    dotSize: 1,
    backgroundColor: '#030c11',
    dotColor: '#0a2536',
    zIndex: 0,
    range: 100
}

new Respondots(document.getElementById('root'), conf);