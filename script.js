document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("video");
    const scriptParagraphs = document.querySelectorAll("#script p");

    video.addEventListener("timeupdate", function() {
        let currentTime = video.currentTime;

        scriptParagraphs.forEach((paragraph) => {
            let paragraphTime = parseFloat(paragraph.getAttribute("data-time"));
            if (currentTime >= paragraphTime) {
                scriptParagraphs.forEach((p) => p.classList.remove("active"));
                paragraph.classList.add("active");
            }
        });
    });
});
