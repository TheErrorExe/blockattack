// JS File for Blockattack

// Redirect
window.location.href = "/IMG_1356.jpeg";
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
