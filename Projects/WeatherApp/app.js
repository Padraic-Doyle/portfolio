window.addEventListener('load', () => {
    let long;
    let lat;
    let tempteratureDescription = document.querySelector('.temperature-description');
    let tempteratureDegree = document.querySelector('.temperature-degree');
    let location = document.querySelector('.location-timezone');
    let tempteratureSection = document.querySelector('.temperature');
    let tempteratureSpan = document.querySelector('.temperature span');


    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(position => {
            lat = position.coords.latitude;
            long = position.coords.longitude;

            const proxy = "https://cors-anywhere.herokuapp.com/";
            const api = `${proxy}https://api.darksky.net/forecast/a53bcab3cc08bbc9fdea97e168261f26/${lat},${long}`;

            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);

                    const { temperature, summary, icon } = data.currently;

                    tempteratureDegree.textContent = temperature;
                    tempteratureDescription.textContent = summary;
                    location.textContent = data.timezone;

                    setIcons(icon, document.querySelector('.icon'));

                    tempteratureSection.addEventListener('click', () => {
                        if (tempteratureSpan.textContent === 'F') {
                            tempteratureSpan.textContent = 'C';
                            tempteratureDegree.textContent = Math.round((temperature - 32) * (5 / 9));

                        } else {
                            tempteratureSpan.textContent = 'F';
                            tempteratureDegree.textContent = data.currently.temperature;
                        }
                    })

                });

        });

    } else {
        h1.textContent = "broken"
    }

    function setIcons(icon, iconID) {
        const skycons = new Skycons({ color: "white" });
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconID, Skycons[currentIcon]);


    }

});