document.addEventListener('DOMContentLoaded', () => {
    let like = document.getElementById('like');
    let dislike = document.getElementById('dislike');
    let block = document.getElementById('block');

    const liked = [];
    const disliked = [];

    reqImage(event);
    mainAppSec();

    function reqImage(event) {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(res => res.json())
            .then(data => {
                choice(data, event.target);
            })
            .catch(err => {
                console.error('Error: ', err);
            })
    }

    function choice(data, btn) {
        let img = document.getElementById('image');
        if(img) {
            img.remove();
        }

        if(btn.id == 1) {
            liked.push(data.message);
        }

        if(btn.id == 2) {
            disliked.push(data.message);
        }


        let newImg = document.createElement('img');
        newImg.id = "image";
        newImg.src = data.message;
        newImg.classList.add("rounded-2xl");
        newImg.alt = "dog picture";
        newImg.style.width = "345px";
        newImg.style.height = "400px";

        block.appendChild(newImg);
    }


    function mainAppSec() {
        
        dislikedImages.classList.add("hidden");
        dislikedImages.classList.remove("grid");

        likedImages.classList.add("hidden");
        likedImages.classList.remove("grid");

        MainApp.classList.remove("hidden");
        MainApp.classList.add("flex");
    }

    function LikedImg() {

        likedImages.innerHTML = '';

        likedImages.classList.remove("hidden");
        likedImages.classList.add("grid");

        dislikedImages.classList.remove("grid");
        dislikedImages.classList.add("hidden");

        MainApp.classList.add("hidden");
        MainApp.classList.remove("flex");


        liked.forEach((img) => {
            let image = document.createElement('img');
            image.src = img;
            image.style.width = "345px";
            image.style.height = "500px";

            likedImages.appendChild(image);
        })

    }

    function disLikedImg() {

        dislikedImages.innerHTML = '';

        dislikedImages.classList.remove("hidden");
        dislikedImages.classList.add("grid");

        likedImages.classList.remove("grid");
        likedImages.classList.add("hidden");

        MainApp.classList.add("hidden");
        MainApp.classList.remove("flex");


        disliked.forEach((img) => {
            let image = document.createElement('img');
            image.src = img;
            image.style.width = "345px";
            image.style.height = "500px";

            dislikedImages.appendChild(image);
        })
    }

    mainBlock.addEventListener('click', mainAppSec);
    likeBlock.addEventListener('click', LikedImg);
    dislikeBlock.addEventListener('click', disLikedImg);
    like.addEventListener('click', (event) => reqImage(event));
    dislike.addEventListener('click', (event) => reqImage(event));
})