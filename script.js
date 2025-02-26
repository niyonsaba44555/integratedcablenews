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
<!-- In the HTML file, wrap the article title or add a "Read More" button -->
<h1><a href="#" class="article-link">The Rise of Rwanda: A Country Leading in Development and Innovation</a></h1>
<p class="date">Published on February 26, 2025</p>
<p>Rwanda, a small East African nation, has emerged as a leading example...</p>

<!-- Add a "Read More" button -->
<a href="#" class="read-more">Read More</a>
