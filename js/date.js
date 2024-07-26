function formatDate() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    const now = new Date();
    
    const dayName = days[now.getDay()];
    const monthName = months[now.getMonth()];
    const day = now.getDate();
    const year = now.getFullYear();
    
    return `${dayName}, ${monthName} ${day}`;
}

function formatYear() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12;
    hours = hours ? hours : 12; 
    const strTime = `${hours}:${minutes < 10 ? '0' + minutes : minutes} ${ampm}`;
    return strTime;
}

document.addEventListener("DOMContentLoaded", function() {
    const dateElement = document.querySelector(".date p:nth-child(1)");
    if (dateElement) {
        dateElement.textContent = formatDate();
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const timeElement = document.querySelector(".time h1:nth-child(1)");
    if (timeElement) {
        timeElement.textContent = formatYear();
    }
});
