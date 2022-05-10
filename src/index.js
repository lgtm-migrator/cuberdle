import { init as inputInit } from './cube/cubeInput';
import { init as outputInit } from './cube/cubeOutput';
import { init as initGame } from './game/game';
import { clearButtonClicked, randomMoveButtonClicked, submitButtonClicked, undoButtonClicked } from './game/uiInput';
import { closeModal, showInstructions, showWinScreen } from './game/uiOutput';
import "./style.scss";

function init() {
    inputInit();
    outputInit();
    initGame();
}

init();
window.actions = {
    randomMoveButtonClicked,
    undoButtonClicked,
    submitButtonClicked,
    clearButtonClicked,
    closeModal,
    showInstructions,
    showWinScreen,
}
