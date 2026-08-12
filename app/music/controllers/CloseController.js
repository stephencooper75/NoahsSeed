class CloseController {

    bind() {

        document
            .getElementById(
                "closeMusicStudio"
            )
            .addEventListener(

                "click",

                () => {

                    document
                        .getElementById(
                            "experienceWindow"
                        )
                        .style.display =
                        "none";

                }

            );

    }

}