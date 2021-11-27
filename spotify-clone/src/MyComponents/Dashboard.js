import React, { Component } from 'react';
import '../assests/ComponentCss/Dashboard.css'

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Menu />
                <MainContent />
            </div>
        );
    }
}

const Menu = () => {
    return (
        <div id="menu-bar" class="menu-bar">
            <span>
                <a href="#">
                    <img
                        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                        alt="Spotify Logo"
                    />
                </a>
            </span>
            <nav class="navbar">
                <ul>
                    <li>
                        <a class="active" href="#">
                            <svg
                                viewBox="0 0 512 512"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M448 463.746h-149.333v-149.333h-85.334v149.333h-149.333v-315.428l192-111.746 192 110.984v316.19z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <svg
                                viewBox="0 0 512 512"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z"
                                    fill="currentColor"
                                    fill-rule="evenodd"
                                ></path>
                            </svg>
                            Search
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <svg
                                viewBox="0 0 512 512"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M291.301 81.778l166.349 373.587-19.301 8.635-166.349-373.587zM64 463.746v-384h21.334v384h-21.334zM192 463.746v-384h21.334v384h-21.334z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                            Your Library
                        </a>
                    </li>
                </ul>
            </nav>

            <nav class="user-collection">
                <ul>
                    <li>
                        <a href="#">
                            <i class="fa fa-plus-square fa-lg" aria-hidden="true"></i>Create
                            Playlist
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fa fa-heart fa-lg" aria-hidden="true"></i>Liked Songs
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fa fa-podcast fa-lg" aria-hidden="true"></i>Your
                            Episodes
                        </a>
                    </li>
                </ul>
            </nav>

            <span class="install-app">
                <a href="#">
                    <i class="fa fa-arrow-circle-down fa-lg" aria-hidden="true"></i>
                    Install App
                </a>
            </span>
        </div>
    );
};

const MainContent = () => {
    return (
        <div class="main-content">
            <Header />
            <Body />
        </div>
    );
};

const Header = () => {
    const [profileVisibility, setProfileVisibility] = React.useState("hidden");
    const handleClick = () => {
        if (profileVisibility == "hidden") {
            setProfileVisibility("visible");
        } else {
            setProfileVisibility("hidden");
        }
    };

    const [menuBarVisibility, setMenuBarVisibility] = React.useState("visible");
    const handleMenuBar = () => {
        if (menuBarVisibility == "hidden") {
            setMenuBarVisibility("visible");
            document.getElementById("bar1").style.transform = "none";
            document.getElementById("bar1").style.transition = "transform .4s ease";
            document.getElementById("bar2").style.opacity = 1;
            document.getElementById("bar2").style.transition = "opacity .5s ease";
            document.getElementById("bar3").style.transform = "none";
            document.getElementById("bar3").style.transition = "transform .4s ease";
            document.getElementById("menu-bar").style.transition =
                "visibility .2s ease-in-out";
        } else {
            setMenuBarVisibility("hidden");
            document.getElementById("bar1").style.transform =
                "rotate(-45deg) translate(-9px, 6px)";
            document.getElementById("bar1").style.transition = "transform .4s ease";
            document.getElementById("bar2").style.opacity = 0;
            document.getElementById("bar2").style.transition = "opacity .5s ease";
            document.getElementById("bar3").style.transform =
                "rotate(45deg)translate(-5px, -3px)";
            document.getElementById("bar3").style.transition = "transform .4s ease";
            document.getElementById("menu-bar").style.transition =
                "visibility .2s ease-n-out";
        }
        document.getElementById("menu-bar").style.visibility = menuBarVisibility;
    };
    return (
        <header>
            <div>
                <div onClick={handleMenuBar} class="hamburger">
                    <div id="bar1" class="bar1"></div>
                    <div id="bar2" class="bar2"></div>
                    <div id="bar3" class="bar3"></div>
                </div>
                <div class="dropdown">
                    <button onClick={handleClick}>
                        <i class="fa fa-user-circle fa-lg" aria-hidden="true"></i>
                        Rajesh
                        <i
                            className={`fa fa-caret-${profileVisibility == "hidden" ? "down" : "up"
                                }`}
                            aria-hidden="true"
                        ></i>
                    </button>
                    <ul style={{ visibility: `${profileVisibility}` }}>
                        <li>
                            <a href="#" target="_blank">
                                Account<i class="fa fa-external-link" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">Profile</a>
                        </li>
                        <li>
                            <a href="#">Log Out</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

const Body = () => {
    const hours = new Date().getHours();
    const greeting =
        hours < 12 ? "Morning" : hours < 17 ? "Afternoon" : "Evening";

    return (
        <main>
            <div class="greeting">
                <h2>Good {greeting}</h2>
            </div>

            <div class="recent-activity">
                <div class="activity-info">
                    <div class="img-div">
                        <img
                            src="https://seed-mix-image.spotifycdn.com/v6/img/pop/4AK6F7OLvEQ5QYCBNiQWHq/en/default"
                            alt="Pop Mix playlist cover photo"
                        />
                    </div>
                    <p>Pop Mix</p>
                </div>
                <div class="activity-info">
                    <div class="img-div">
                        <img
                            src="https://i.scdn.co/image/ab67656300005f1f854bce22cb0e6890dba92dd8"
                            alt="The Athletic Football Tactics Podcast cover photo"
                        />
                    </div>
                    <p>The Athletic Football Tactics Podcast</p>
                </div>
                <div class="activity-info">
                    <div class="img-div">
                        <img
                            src="https://i.scdn.co/image/ab67706f00000002b75cdf3f088c129cc350c0f8"
                            alt="This Is One Direction playlist cover photo"
                        />
                    </div>
                    <p>This Is One Direction</p>
                </div>
                <div class="activity-info">
                    <div class="img-div">
                        <img
                            src="https://i.scdn.co/image/ab6761610000e5eb6e9a17ce6d67c02312e3fb89"
                            alt="Alessia Cara cover photo"
                        />
                    </div>
                    <p>Alessia Cara</p>
                </div>
                <div class="activity-info">
                    <div class="img-div">
                        <img
                            src="https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb26dbdbdacda5c30dc95e0c2c/3/en/default"
                            alt="Daily Mix 3 playlist cover photo"
                        />
                    </div>
                    <p>Daily Mix 3</p>
                </div>
                <div class="activity-info">
                    <div class="img-div">
                        <img
                            src="https://i.scdn.co/image/ab67706f000000021373358fa4ff03aac54f188e"
                            alt="All Out 10s playlist cover photo"
                        />
                    </div>
                    <p>All Out 10s</p>
                </div>
            </div>

            <div class="category">
                <div class="title">
                    <h3>Your Shows</h3>
                    <a href="#">SEE ALL</a>
                </div>
                <div>
                    <div class="category-info">
                        <div class="img-div">
                            <img
                                src="https://i.scdn.co/image/a3313c9ff4f806345e71728b502022782e92cf34"
                                alt="HTML All The Things podcast cover photo"
                            />
                        </div>
                        <p class="category-name">HTML All The Things</p>
                        <p class="author">Show. Matt & Mike</p>
                    </div>
                    <div class="category-info">
                        <div class="img-div">
                            <img
                                src="https://i.scdn.co/image/ab67656300005f1f854bce22cb0e6890dba92dd8"
                                alt="The Athletic Football Podcast cover photo"
                            />
                        </div>
                        <p class="category-name">The Athletic Football Podcast</p>
                        <p class="author">Show. The Athletic</p>
                    </div>
                    <div class="category-info">
                        <div class="img-div">
                            <img
                                src="https://i.scdn.co/image/ab67656300005f1fcf5b0c37fe67ebbcdceb930b"
                                alt="Headline: Breaking Football News playlist cover photo"
                            />
                        </div>
                        <p class="category-name">Headline: Breaking Football News</p>
                        <p class="author">Show. The Athletic</p>
                    </div>
                    <div class="category-info">
                        <div class="img-div">
                            <img
                                src="https://i.scdn.co/image/fedc8e1c8b93cc9b8e49e8e101ec9d9b8795d1fe"
                                alt="Raj Prakash Paul playlist cover photo"
                            />
                        </div>
                        <p class="category-name">Raj Prakash Paul</p>
                        <p class="author">Show. Raj Prakash Paul</p>
                    </div>
                    <div class="category-info">
                        <div class="img-div">
                            <img
                                src="https://i.scdn.co/image/ab67656300005f1f6d655e4364ad1ed1dad7a83d"
                                alt="The Here We Go Podcast cover photo"
                            />
                        </div>
                        <p class="category-name">The Here We Go Podcast</p>
                        <p class="author">Show. Here We Go</p>
                    </div>
                </div>
            </div>

            <div class="category">
                <div class="title">
                    <h3>Made For Rajesh Alluri</h3>
                    <a href="#">SEE ALL</a>
                </div>
                <div>
                    <div class="category-info">
                        <div class="img-div">
                            <img
                                src="https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb031619e5eb9ed3b9806b648b/1/en/default"
                                alt="Daily Mix 1 cover photo"
                            />
                        </div>
                        <p class="category-name">Daily Mix 1</p>
                        <p class="author">Ella Mai, Shawn Mendes, Jason Derulo</p>
                    </div>
                    <div class="category-info">
                        <div class="img-div">
                            <img
                                src="https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb6e9a17ce6d67c02312e3fb89/2/en/default"
                                alt="Daily Mix 2 cover photo"
                            />
                        </div>
                        <p class="category-name">Daily Mix 2</p>
                        <p class="author">Alessia Cara, 5 Seconds Of Summer</p>
                    </div>
                    <div class="category-info">
                        <div class="img-div">
                            <img
                                src="https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb26dbdbdacda5c30dc95e0c2c/3/en/default"
                                alt="Daily Mix 3 cover photo"
                            />
                        </div>
                        <p class="category-name">Daily Mix 3</p>
                        <p class="author">Taylor Swift, Fifth Harmony</p>
                    </div>
                    <div class="category-info">
                        <div class="img-div">
                            <img
                                src="https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb7aff8a274fcec288dd534abc/4/en/default"
                                alt="Daily Mix 4 cover photo"
                            />
                        </div>
                        <p class="category-name">Daily Mix 4</p>
                        <p class="author">Jesus Culture, Bethel Music</p>
                    </div>
                    <div class="category-info">
                        <div class="img-div">
                            <img
                                src="https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb70859a2e628fd00e8be3a696/5/en/default"
                                alt="Daily Mix 5 cover photo"
                            />
                        </div>
                        <p class="category-name">Daily Mix 5</p>
                        <p class="author">Benny Joshua, Allen Ganta</p>
                    </div>
                </div>
            </div>

            <div class="category">
                <div class="title">
                    <h3>Charts</h3>
                    <a href="#">SEE ALL</a>
                </div>
                <div>
                    <div class="category-info">
                        <div class="img-div">
                            <img
                                src="https://charts-images.scdn.co/assets/locale_en/regional/daily/region_in_default.jpg"
                                alt="Top 50 India playlist cover photo"
                            />
                        </div>
                        <p class="category-name">Top 50 India</p>
                    </div>
                    <div class="category-info">
                        <div class="img-div">
                            <img
                                src="https://i.scdn.co/image/ab67706f00000002b545db24c5864981ff896f07"
                                alt="Hot Hits India playlist cover photo"
                            />
                        </div>
                        <p class="category-name">Hot Hits India</p>
                    </div>
                    <div class="category-info">
                        <div class="img-div">
                            <img
                                src="https://charts-images.scdn.co/assets/locale_en/regional/daily/region_global_default.jpg"
                                alt="Top 50 Global playlist cover photo"
                            />
                        </div>
                        <p class="category-name">Top 50 Global</p>
                    </div>
                    <div class="category-info">
                        <div class="img-div">
                            <img
                                src="https://i.scdn.co/image/ab67706c0000da84fc156bed23ef2df5814fb190"
                                alt="Top Albums - Global playlist cover photo"
                            />
                        </div>
                        <p class="category-name">Top Albums - Global</p>
                    </div>
                    <div class="category-info">
                        <div class="img-div">
                            <img
                                src="https://charts-images.scdn.co/assets/locale_en/viral/daily/region_global_default.jpg"
                                alt="Viral 50 - India playlist cover photo"
                            />
                        </div>
                        <p class="category-name">Viral 50 - India</p>
                    </div>
                </div>
            </div>

            <div class="category">
                <div class="title">
                    <h3>Best Of Artists</h3>
                    <a href="#">SEE ALL</a>
                </div>
                <div>
                    <div class="category-info">
                        <div class="img-div">
                            <img
                                src="https://i.scdn.co/image/ab67706f000000021230c7f75023a90181e914a0"
                                alt="This is Alessia Cara playlist cover photo"
                            />
                        </div>
                        <p class="category-name">This Is Alessia Cara</p>
                    </div>
                    <div class="category-info">
                        <div class="img-div">
                            <img
                                src="https://i.scdn.co/image/ab67706f00000002a0a577ed169a7792c9363d6c"
                                alt="This is Hillsong Worship playlist cover photo"
                            />
                        </div>
                        <p class="category-name">This Is Hillsong Worship</p>
                    </div>
                    <div class="category-info">
                        <div class="img-div">
                            <img
                                src="https://i.scdn.co/image/ab67706f00000002181896dd694bc09e4a0f13c8"
                                alt="This is Camila Cabello playlist cover photo"
                            />
                        </div>
                        <p class="category-name">This Is Camila Cabello</p>
                    </div>
                    <div class="category-info">
                        <div class="img-div">
                            <img
                                src="https://i.scdn.co/image/ab67706f000000027988283d13d5654287988494"
                                alt="This is Shawn Mendes playlist cover photo"
                            />
                        </div>
                        <p class="category-name">This Is Shawn Mendes</p>
                    </div>
                    <div class="category-info">
                        <div class="img-div">
                            <img
                                src="https://i.scdn.co/image/ab67706f00000002b75cdf3f088c129cc350c0f8"
                                alt="This is One Direction playlist cover photo"
                            />
                        </div>
                        <p class="category-name">This Is One Direction</p>
                    </div>
                </div>
            </div>

            <div class="category final-category">
                <div class="title">
                    <div class="popular-shows">
                        <p>POPULAR WITH LISTENERS OF</p>
                        <h3>Headline: Breaking Football News</h3>
                    </div>
                    <a href="#">SEE ALL</a>
                </div>
                <div>
                    <div class="category-info">
                        <div class="img-div">
                            <img
                                src="https://i.scdn.co/image/ab67656300005f1f6070c8c3beddfeef90cd9044"
                                alt="Football Cliches podcast cover photo"
                            />
                        </div>
                        <p class="category-name">Football Cliches</p>
                        <p class="author">Show. The Athletic</p>
                    </div>
                    <div class="category-info">
                        <div class="img-div">
                            <img
                                src="https://i.scdn.co/image/ab67656300005f1fff3db692e1f2dbe7c73951e2"
                                alt="The Athletic Football Podcast podcast cover photo"
                            />
                        </div>
                        <p class="category-name">The Athletic Football Podcast</p>
                        <p class="author">Show. The Athletic</p>
                    </div>
                    <div class="category-info">
                        <div class="img-div">
                            <img
                                src="https://i.scdn.co/image/ab67656300005f1fea8a7821ffed11a7bfe73c71"
                                alt="Beyond the Headline podcast cover photo"
                            />
                        </div>
                        <p class="category-name">Beyond the Headline</p>
                        <p class="author">Show. The Athletic</p>
                    </div>
                    <div class="category-info">
                        <div class="img-div">
                            <img
                                src="https://i.scdn.co/image/ab67656300005f1f31a9464d4951d231128babc6"
                                alt="The Next Big Thing podcast cover photo"
                            />
                        </div>
                        <p class="category-name">The Next Big Thing</p>
                        <p class="author">Show. The Athletic</p>
                    </div>
                    <div class="category-info">
                        <div class="img-div">
                            <img
                                src="https://i.scdn.co/image/bdd990bddb85baa44c320b2ffba328549e184643"
                                alt="The Scouted Football Podcast podcast cover photo"
                            />
                        </div>
                        <p class="category-name">The Scouted Football Podcast</p>
                        <p class="author">Show. Scouted Football</p>
                    </div>
                </div>
            </div>
        </main>
        
        )
    }

