// Make winPatterns accessible globally
const winPatterns = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll(".box"); // ✅ Must be const
    const resetButton = document.querySelector("#reset");
    let turn0 = true;

    boxes.forEach((box, index) => {
        box.addEventListener("click", () => {
            if (box.innerText !== "") return; // prevent overwriting

            box.innerText = turn0 ? "X" : "0";
            box.disabled = true;
            turn0 = !turn0;

            checkWinner(boxes); // ✅ Pass boxes correctly
        });
    });

    resetButton.addEventListener("click", () => {
        boxes.forEach((box) => {
            box.innerText = "";
            box.disabled = false;
        });
        turn0 = true;
    });
});

const checkWinner = (boxes) => {
    for (let pattern of winPatterns) {
        if (!pattern) continue; // safety check

        const pos1 = boxes[pattern[0]].innerText;
        const pos2 = boxes[pattern[1]].innerText;
        const pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
            console.log("Winner is " + pos1);
            break;
        }
    }
};
