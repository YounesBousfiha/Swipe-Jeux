document.addEventListener('DOMContentLoaded', () => {
    let like = document.getElementById('like');
    let dislike = document.getElementById('dislike');
    let block = document.getElementById('block');

    const liked = [];
    const disliked = [];

    reqImage(event);
    
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


    like.addEventListener('click', (event) => reqImage(event));
    dislike.addEventListener('click', (event) => reqImage(event));
})