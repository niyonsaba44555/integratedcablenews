document.addEventListener("DOMContentLoaded", function() {
    // Simulated Breaking News Updates
    let updates = [
        "Breaking: Major event happening now!",
        "Sports: Big match result just in!",
        "World: Key political update announced."
    ];
    let updateIndex = 0;
    function updateBreakingNews() {
        document.querySelector(".breaking-news").textContent = updates[updateIndex];
        updateIndex = (updateIndex + 1) % updates.length;
    }
    setInterval(updateBreakingNews, 5000);
    updateBreakingNews();
});

function toggleArticle() {
    const fullArticle = document.getElementById("full-article");
    if (fullArticle.style.display === "none") {
        fullArticle.style.display = "block";
    } else {
        fullArticle.style.display = "none";
    }
}

function likeArticle() {
    alert('You liked this article!');
}

function submitComment() {
    alert('Your comment has been submitted!');
}
