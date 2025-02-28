const form = document.querySelector("form");
const appDiv = document.getElementById("app");

form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    const count = document.getElementById("count").value;

    const existingErrorMsg = document.getElementById("error-msg");
    if (existingErrorMsg) {
        existingErrorMsg.remove();
    }

    const gallery = document.getElementById("gallery");
    if (gallery) {
        gallery.remove();
    }

    fetch(`https://api.unsplash.com/photos/?client_id=z3FosYWLC92StVfQ64_XGm7QoFWfUUfaKxl4pN6X7ms&per_page=${count}`)
        .then(res => res.json())
        .then(data => {

            const gallery = document.createElement('div');
            gallery.id = "gallery";
            gallery.classList.add('image-gallery');

            data.forEach(photo => {
                const img = document.createElement("img");
                img.src = photo.urls.small;
                img.alt = photo.alt_description;
                gallery.appendChild(img);
            });
            appDiv.appendChild(gallery);
        })
        .catch(error => {
            console.error("Error receiving images:", error);

            const errorMsg = document.createElement("h1");
            const textnode = document.createTextNode("Error receiving images: " + error.message);
            errorMsg.id = "error-msg";
            errorMsg.appendChild(textnode);

            appDiv.appendChild(errorMsg);
        });
});
