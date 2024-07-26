document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector('.search-input')
    const searchBtn = document.querySelector('.search-btn')

    searchBtn.addEventListener("click", function () {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            const url = `https://google.com/search?q=${searchTerm}`;
            window.open(url)
        }
    })

    searchInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
          searchBtn.click();
        }
      });
});

