let completed = 0;

function completeTask(button, task) {

    if (button.disabled) {
        return;
    }

    button.disabled = true;

    completed++;

    document.getElementById("progress").textContent =
        completed + " / 4 completed";

    let message = "";

    switch (task) {

        case "garden":
            button.textContent = "✅ Water the Garden";
            message = "🌻 Great job Noah! Your sunflower is growing!";
            break;

        case "pyjamas":
            button.textContent = "✅ Put on Pyjamas";
            message = "👕 Fantastic! You're nearly ready for bed!";
            break;

        case "teeth":
            button.textContent = "✅ Brush your Teeth";
            message = "🦷 Mum and Dad are so proud of you!";
            break;

        case "bed":
            button.textContent = "✅ Hop into Bed";
            message = "🛏️ You're all tucked in!";
            break;
    }

    if (completed === 4) {
        message =
            "🌙<br><br><strong>Wonderful work today Noah!</strong><br><br>" +
            "Mum and Dad are so proud of you.<br><br>" +
            "⭐ A shooting star crosses the sky...<br><br>" +
            "Sweet dreams ❤️";
    }

    document.getElementById("message").innerHTML = message;
}