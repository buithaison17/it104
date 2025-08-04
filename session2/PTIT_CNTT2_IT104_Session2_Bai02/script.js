const greetingWithWeather = (name, weather) => {
    if(weather === "sunny") console.log(`Chào ${name}! Thời tiết hôm nay tuyệt vời!`);
    else if(weather === "rainy") console.log(`Chào ${name}! Hôm nay trời mưa, hãy mang theo ô!`);
    else console.log(`Chào ${name}! Hôm nay thời tiết không xác định.`);
}

greetingWithWeather("Sơn Bùi", "");