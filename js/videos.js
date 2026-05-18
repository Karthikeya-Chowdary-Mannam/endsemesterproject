function markWatched(button){

    if(button.innerText === "Mark Watched"){

        button.innerText = "Watched";

        button.style.background = "green";
    }
    else{

        button.innerText = "Mark Watched";

        button.style.background = "#3b82f6";
    }
}

function searchVideos(){

    let input =
        document.getElementById("searchInput")
        .value
        .toLowerCase();

    let cards =
        document.querySelectorAll(".video-card");

    cards.forEach(card => {

        let title =
            card.querySelector("h2")
            .innerText
            .toLowerCase();

        if(title.includes(input)){

            card.style.display = "block";
        }
        else{

            card.style.display = "none";
        }
    });
}