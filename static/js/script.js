// JS File for Blockattack

// Impressum
document.addEventListener("DOMContentLoaded", function () {
    const path = window.location.pathname;
    
    if (path.startsWith("/wiki") || path.startsWith("/drmifo")) {
        return;
    }
    
    const separator = document.createElement("p");
    separator.style.display = "inline";
    separator.textContent = " | ";
    
    const link = document.createElement("a");
    link.href = "/impressum.html";
    link.style.display = "inline";
    link.textContent = "Impressum";
    
    document.querySelectorAll("footer").forEach(footer => {
        footer.appendChild(separator.cloneNode(true));
        footer.appendChild(link.cloneNode(true));
    });
});


// Lockdown

alert(`
Blockattack ist nun im Lockdown Modus

- Bedrock Spieler werden nicht mehr joinen können

- Der Minecraft Server wird als Offline angezeigt, obwohl er es nicht ist, einfach joinen

- Discord Einladungen sind gesperrt

- Discord Spam Filter auch Alarm stufe rot

Warum?

Wir werden geddost und bedroht. Wir versuchen es so schnell wie möglich zu fixen
`);


// Redirect

//window.location.href = "/IMG_1356.jpeg";

// Cookie Banner
document.addEventListener("DOMContentLoaded", function () {
    const cookieKey = "cookieConsent";
    const shouldShowBanner = !localStorage.getItem(cookieKey) || window.location.hash === "#changecookies";
    
    if (shouldShowBanner) {
        showCookieBanner();
    }
    
    function showCookieBanner() {
        const banner = document.createElement("div");
        banner.id = "cookie-banner";
        banner.innerHTML = `
            <div style="position: fixed; bottom: 0; left: 0; width: 100%; background: #222; color: white; padding: 15px; text-align: center; z-index: 1000;">
                Diese Seite verwendet Cookies, Google Analytics und Google Services wie Ads. 
                Durch die Nutzung stimmen Sie unseren <a href='/terms.html' style='color: #0af;'>Nutzungsbedingungen</a> 
                und <a href='/privacy.html' style='color: #0af;'>Datenschutzbestimmungen</a> zu.
                <button id="accept-cookies" style="margin-left: 10px; padding: 5px 10px; background: #0af; color: white; border: none; cursor: pointer;">Akzeptieren</button>
            </div>
        `;
        document.body.appendChild(banner);
        document.getElementById("accept-cookies").addEventListener("click", function () {
            localStorage.setItem(cookieKey, "accepted");
            banner.remove();
        });
    }
});
