function toggleContent() {
    let moreContent = document.getElementById("more-content");
    let readMore = document.getElementById("read-more");
    let readLess = document.getElementById("read-less");
    if (moreContent.style.display === "none") {
        moreContent.style.display = "block";
        readMore.style.display = "none";
        readLess.style.display = "block";
    } else {
        moreContent.style.display = "none";
        readMore.style.display = "block";
        readLess.style.display = "none";
    }
}