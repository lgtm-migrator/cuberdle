import { directionsList } from './constants';
import { turn, undo, submit, clearGuess } from './game';

export function undoButtonClicked() {
    undo();
}

export function submitButtonClicked() {
    submit();
}

export function clearButtonClicked() {
    clearGuess()
}

export function randomMoveButtonClicked() {
    // no double moves for now
    const direction = directionsList[Math.floor(Math.random() * 2)];
    turn(Math.floor(Math.random() * 6), direction);
}
