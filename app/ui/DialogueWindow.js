class DialogueWindow {

    show({

        speaker,

        icon,

        title,

        message,

        button = "OK"

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

`;

        document
            .getElementById(

                "dialogueOk"

            )
            .addEventListener(

                "click",

                () => {

                    window.style.display =

                        "none";

                }

            );

    }

}