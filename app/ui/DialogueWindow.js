class DialogueWindow {

    show({

        speaker,

        icon,

        title,

        message,

        button = "OK",

        onClose = null

    }) {

        const window =

            document.getElementById(

                "experienceWindow"

            );

        window.style.display =

            "block";

        window.innerHTML = `

<div class="dialogueWindow compactDialogue">

<div class="dialogueWindow">

<h2>

${icon} ${speaker}

</h2>

<h3>

${title}

</h3>

<p>

${message}

</p>

<br>

<button id="dialogueOk">

${button}

</button>

</div>

</div>

`;

        document
            .getElementById(

                "dialogueOk"

            )
            .addEventListener(

                "click",

                () => {

                    if (onClose) {

                        onClose();

                    }
                    else {

                        window.style.display =

                            "none";

                    }

                }

            );

    }

}