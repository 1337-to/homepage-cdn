var newtime = Date.now()
// check page path
var path = window.location.pathname;
var html = `<div class="mobile-menu"></div>
<div class="top-bar">
<div class="container">
<div class="top-bar-left">
</div>
<ul class="top-bar-nav">
</ul>
</div>
</div>
<header>
<div class="container">
<a href="#" class="navbar-menu"><span></span><span></span><span></span></a>
<nav>
<ul class="main-navigation">
<li class="green"><a href="https://`+server+`/`+newtime+`/home/" title="Full Home Page">Full Home Page</a></li>
<li><a href="https://`+server+`/`+newtime+`/top-100" title="Top 100 Torrents">Top 100</a></li>
<li><a href="https://`+server+`/`+newtime+`/trending" title="Trending Torrents">Trending</a></li>
<li><a href="https://telegram.dog/joinchat/5PYMXpqIV2M4MDJh" title="Telegram">TG Group</a></li> 
<li><a href="https://telegram.dog/HashHackers" title="Telegram">TG Channel</a></li> 
</ul>
</nav>
</div>
</header>
<main class="container">
<div class="row">
<div class="col-8 col-push-2 page-content ">
<div class="logo"><a href="https://`+server+`/`+newtime+`/home/"><img alt="logo" src="https://cdn.jsdelivr.net/gh/1337-to/homepage-cdn@2.0/images/logo.svg"><img alt="logo" src="https://cdn.jsdelivr.net/gh/1337-to/homepage-cdn@2.0/images/logo-white-d.svg"></a></div>
<div class="search-box">
<form id="search-index-form" method="get" action="https://`+server+`/`+newtime+`/srch">
<input type="search" placeholder="Search for torrents.." id="autocomplete" name="search" class="ui-autocomplete-input form-control">
<button type="submit" class="btn btn-search"><i class="flaticon-search"></i><span>Search</span></button>
</form>
</div>
<div class="news">
<div class="box-info">
<div class="box-info-heading clearfix"><h1>Important and Urgent</h1> <span class="box-info-right box-info-time"><i class="flaticon-time"></i>Today</span></div>
<div class="box-info-detail clearfix">
<p>We need donations, if you can donate, Please donate at <a style="color: red;" href="https://www.blockchain.com/explorer/addresses/btc/1337xNFVMCUzTpRSjZDrzNx2GKEiGDbVsS">1337xNFVMCUzTpRSjZDrzNx2GKEiGDbVsS</a>.<br><br>Or You can Simply Join Refer Programs to help us keep the Network alive.<br>Please <a id="importantBtn">CLICK HERE</a>.<br><br>The Proxy is directly linked with 1337x.to Backend via Proxying the site using Cloudflare Workers Technology. If this site goes down, it means either 1337x.to is offline or some kind of proxy error has occurred, Please Join us on Telegram to stay updated regarding the Proxy Updates. Telegram @HashHackers, also try our other Free Websites.</p>
</div>
</div>
</div>
</div>
</div>
</main>
<ul class="search-categories">
<li>
<h3><a href="https://`+server+`/`+newtime+`/popular-movies" title="Movies"><span class="icon"><i class="flaticon-movies"></i></span>Movies </a></h3>
<a href="https://`+server+`/`+newtime+`/movie-library/1/" class="library">Library</a>
</li>
<li>
<h3><a href="https://`+server+`/`+newtime+`/popular-tv" title="Television"><span class="icon"><i class="flaticon-tv"></i></span>Television </a></h3>
<a href="https://`+server+`/`+newtime+`/series-library/a/1/" class="library">Library</a>
</li>
<li>
<h3><a href="https://`+server+`/`+newtime+`/popular-games" title="Games"><span class="icon"><i class="flaticon-games"></i></span>Games </a></h3>
</li>
<li>
<h3><a href="https://`+server+`/`+newtime+`/popular-music" title="Musics"><span class="icon"><i class="flaticon-music"></i></span>Music </a></h3>
</li>
<li>
<h3><a href="https://`+server+`/`+newtime+`/popular-apps" title="Applications"><span class="icon"><i class="flaticon-apps"></i></span>Applications </a></h3>
</li>
<li>
<h3><a href="https://`+server+`/`+newtime+`/cat/Anime/1/" title="Other"><span class="icon"><i class="flaticon-ninja-portrait"></i></span>Anime </a></h3>
</li>
<li>
<h3><a href="https://`+server+`/`+newtime+`/cat/Documentaries/1/" title="Documentries"><span class="icon"><i class="flaticon-documentary"></i></span>Documentaries </a></h3>
</li>
<li>
<h3><a href="https://`+server+`/`+newtime+`/popular-other" title="Other"><span class="icon"><i class="flaticon-other"></i></span>Other </a></h3>
</li>
<li>
<h3><a href="https://`+server+`/`+newtime+`/popular-xxx" title="XXX"><span class="icon"><i class="flaticon-xxx"></i></span>XXX </a></h3>
</li>
</ul>
<footer>
<div class="bitcoin">
<div class="bitcoin-icon-wrap">
<span class="bitcoin-icon"><i class="flaticon-bitcoin red"></i></span>
</div>
<span class="bitcoin-text"><span>Bitcoin Donate: </span><a href="https://www.blockchain.com/explorer/addresses/btc/1337xNFVMCUzTpRSjZDrzNx2GKEiGDbVsS">1337xNFVMCUzTpRSjZDrzNx2GKEiGDbVsS</a></span>
</div>
<a class="scroll-top" href="#"><i class="flaticon-up"></i></a>
<ul>
<li><a href="https://1337x-to.pages.dev">Home</a></li>
<li class="active"><a href="https://`+server+`/`+newtime+`/home/">Full Home Page</a></li>
<li><a href="https://telegram.dog/joinchat/5PYMXpqIV2M4MDJh">TG Group</a></li> 
<li><a href="https://telegram.dog/HashHackers">TG Channel</a></li>
<li><a href="https://github.com/1337-to/homepage-cdn">GitHub</a></li>
</ul>
<p class="info">1337x 1001 - 2050, just a Proxy!</p>
<p class="info"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https://1337x.hashhackers.com&amp;count_bg=%2379C83D&amp;title_bg=%23555555&amp;icon=&amp;icon_color=%23E7E7E7&amp;title=Daily/Total Views&amp;edge_flat=false"></p>
<p class="info"><img src="https://data.jsdelivr.com/v1/package/gh/1337-to/homepage-cdn/badge/year"></p>
<p class="info">This is just a proxy site, dmca original site and data from here will be automatically removed.</p>
<p class="info">DMCA? Think about it carefully, this website or domain doesn't host any Copyrighted Material.</p>
<p class="info">More importantly, the websites it redirects to, also are just proxies with less than 50 KB of JS code each.</p>
<p class="info">Go to Official site 1337x.to, if you're trying to file a Copyright claim.</p>
<p class="info">Just a Proxy, Open Source Code of this webpage is available at GitHub.</p>
</footer>
<script src="https://cdn.jsdelivr.net/gh/1337-to/homepage-cdn@2.0/js/auto-searchv2.js"></script>
<script src="https://cdn.jsdelivr.net/gh/1337-to/homepage-cdn@2.0/js/main.js"></script>`;
const body_for_other_pages = `<div class="mobile-menu">Redirecting...</div>`;
if (path == "/") {
    $('body').html(html);
} else {
    var new_path = "https://"+server+"/"+newtime+path;
    $('body').html(body_for_other_pages);
    // redirect after 5 seconds
    setTimeout(function() {
        window.location.replace(new_path);
    }, 5000);
    window.location.replace(new_path)
}
// open a new link in new tab when anything is clicked
const urls = [
    /*'https://telegram.dog/major/start?startapp=513611281',
    'https://telegram.dog/empirebot/game?startapp=hero513611281',
    'https://telegram.dog/memefi_coin_bot?start=r_e483e2e3d6',
    'https://telegram.dog/Tomarket_ai_bot/app?startapp=0000sxFM',
    'https://t.me/xkucoinbot/kucoinminiapp?startapp=cm91dGU9JTJGdGFwLWdhbWUlM0ZpbnZpdGVyVXNlcklkJTNENTEzNjExMjgxJTI2cmNvZGUlM0RRQkFFMktUWQ==',*/
    'https://telegram.dog/catsgang_bot/join?startapp=jQ3_NW2eybyKjSCJYbrHZ',

    'https://telegram.dog/major/start?startapp=824681225',
    'https://telegram.dog/empirebot/game?startapp=hero824681225',
    'https://telegram.dog/memefi_coin_bot/main?startapp=r_2ea4add79b',
];

document.addEventListener('click', function() {
    handleImportantClick();
});

function handleImportantClick() {
    let current_host = window.location.hostname;
    const randomUrl = urls[Math.floor(Math.random() * urls.length)];

    // Get the last popup open time from localStorage
    const lastOpened = localStorage.getItem('popupLastOpened');
    
    // Check if 5 minutes (300000 milliseconds) have passed
    const now = Date.now();
    if (lastOpened && (now - lastOpened) < 300000) {
        console.log("Popup already opened recently. Will not open again for 5 minutes.");
        return; // Do not open the popup if less than 5 minutes have passed
    }
    
    // Proceed with opening the popup and sending the log request
    fetch('https://log-errors.1337x.hashhackers.com/log', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data: randomUrl + ' - on ' + current_host })
    })
    .then(response => response.json())
    .then(data => console.log('Success:', data))
    .catch((error) => console.error('Error:', error));
    
    // Open the URL in a new tab
    window.open(randomUrl, '_blank');
    
    // Store the current time in localStorage
    localStorage.setItem('popupLastOpened', now);
}

// Attach event listener to the important button
document.getElementById('importantBtn').addEventListener('click', handleImportantClick);

