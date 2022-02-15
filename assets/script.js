let images=document.getElementsByClassName("image");

let Image1=document.getElementById("image1");

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
let scrollDown=document.getElementsByClassName('option');
scrollDown[0].addEventListener('click',()=>{
    document.querySelector('html').scrollTop="925";
})
scrollDown[1].addEventListener('click',()=>{
    document.querySelector('html').scrollTop="1575";
})
scrollDown[2].addEventListener('click',()=>{
    document.querySelector('html').scrollTop="2275";
})
scrollDown[3].addEventListener('click',()=>{
    document.querySelector('html').scrollTop="3925";
})
scrollDown[4].addEventListener('click',()=>{
    document.querySelector('html').scrollTop="4500";
})
function switch1(){
    listOfNames=['afterHours','afterhours(2)','weeknd-reacts']
    document.getElementById("image1").src="../assets/images/"+listOfNames[getRandomInt(0, 3)]+".jpg";
}

function switch2(){
    listOfNames=['dawnImage','The-Weeknd-Dawn-FM','dawnFM2']
    document.getElementById("image2").src="../assets/images/"+listOfNames[getRandomInt(0, 3)]+".jpg";
}

function switch3(){
    listOfNames=['starboy','starboy(2)','starboy3']
    document.getElementById("image3").src="../assets/images/"+listOfNames[getRandomInt(0, 3)]+".jpg";
}

function switch5(){
    listOfNames=['bbtm1','bbtm2','bbtm3']
    document.getElementById("image5").src="../assets/images/"+listOfNames[getRandomInt(0, 3)]+".jpg";
}
let temp=true;
let interval1;
function switchd(){
    clearInterval(interval1);
    if (temp){
        $("#articleSection").animate({ scrollTop: 305 }, "slow");
        temp=false;
    }else{
        $("#articleSection").animate({ scrollTop: 0 }, "slow");
        temp=true;
    }
}
let f=false,su=true,t=true;
let interval2;
function switchl(){
    clearInterval(interval2);
    if (!f){
        $("#slider").animate({ scrollLeft: 600 }, "slow");
        su=false;
        f=true;
    }else if (!su){
        $("#slider").animate({ scrollLeft: 1200 }, "slow");
        su=true;
        t=false;
    }else{
        $("#slider").animate({ scrollLeft: 0 }, "slow");
        t=true;
        f=false;
    }
}

let scrollContainer = document.getElementsByClassName("typecardSongs");

scrollContainer[0].scrollLeft=0;
scrollContainer[1].scrollLeft=0;
scrollContainer[2].scrollLeft=0;
function scrollHorizontally1(e) {
    /*scrollContainer[0].classList.add("specialClassRemove");
    scrollContainer[0].classList.remove("specialClassAdd");*/
    e = window.event || e;
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    var scrollSpeed = 60; // Janky jank <<<<<<<<<<<<<<
    if (delta*scrollSpeed>0){
        $(scrollContainer[0]).animate({ scrollLeft: 570 }, "slow");
    }else{
        $(scrollContainer[0]).animate({ scrollLeft: 0 }, "slow");
    }
    e.preventDefault();
}
function scrollHorizontally2(e) {
    /*scrollContainer[0].classList.add("specialClassRemove");
    scrollContainer[0].classList.remove("specialClassAdd");*/
    e = window.event || e;
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    var scrollSpeed = 60; // Janky jank <<<<<<<<<<<<<<
    if (delta*scrollSpeed>0){
        $(scrollContainer[1]).animate({ scrollLeft: 570 }, "slow");
    }else{
        $(scrollContainer[1]).animate({ scrollLeft: 0 }, "slow");
    }
    e.preventDefault();
}
function scrollHorizontally3(e) {
    /*scrollContainer[0].classList.add("specialClassRemove");
    scrollContainer[0].classList.remove("specialClassAdd");*/
    e = window.event || e;
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    var scrollSpeed = 60; // Janky jank <<<<<<<<<<<<<<
    if (delta*scrollSpeed>0){
        $(scrollContainer[2]).animate({ scrollLeft: 570 }, "slow");
    }else{
        $(scrollContainer[2]).animate({ scrollLeft: 0 }, "slow");
    }
    e.preventDefault();
}
if (scrollContainer[0].addEventListener){
    // IE9, Chrome, Safari, Opera
    scrollContainer[0].addEventListener("mousewheel", scrollHorizontally1, false);
    // Firefox
    scrollContainer[0].addEventListener("DOMMouseScroll", scrollHorizontally1, false);
}else{
    // IE 6/7/8
    scrollContainer[0].attachEvent("onmousewheel", scrollHorizontally1);
}
if (scrollContainer[1].addEventListener){
    // IE9, Chrome, Safari, Opera
    scrollContainer[1].addEventListener("mousewheel", scrollHorizontally2, false);
    // Firefox
    scrollContainer[1].addEventListener("DOMMouseScroll", scrollHorizontally2, false);
}else{
    // IE 6/7/8
    scrollContainer[1].attachEvent("onmousewheel", scrollHorizontally2);
}
if (scrollContainer[2].addEventListener){
    // IE9, Chrome, Safari, Opera
    scrollContainer[2].addEventListener("mousewheel", scrollHorizontally3, false);
    // Firefox
    scrollContainer[2].addEventListener("DOMMouseScroll", scrollHorizontally3, false);
}else{
    // IE 6/7/8
    scrollContainer[2].attachEvent("onmousewheel", scrollHorizontally2);
}
function startTimer() {
    setInterval(switch1, 500);
    setInterval(switch2, 1500);
    setInterval(switch3, 2250);
    setInterval(switch5, 1000);
    setInterval(switchd , 3000);
    setInterval(switchl , 4000);
    //setInterval(switchdAlbum , 10000);
    //setInterval(switchdSong , 5000);
}
startTimer();
function toggle(){
    if (document.getElementsByClassName("jukeboxSection")[0].classList.contains("rightNotZero")){
        document.getElementsByClassName("jukeboxSection")[0].classList.remove("rightNotZero");
        document.getElementsByClassName("jukeboxSection")[0].classList.add("rightZero");
    }else{
        document.getElementsByClassName("jukeboxSection")[0].classList.remove("rightZero");
        document.getElementsByClassName("jukeboxSection")[0].classList.add("rightNotZero");
    }
}
const allSongInfo=[{name:'Dawn FM',artist:'The Weeknd',
background:"linear-gradient(to right,#123A49,rgba(0,0,0,0.95) 90%)",cover:"dawnFM"},
{name:'Gasoline',artist:'The Weeknd',
background:"linear-gradient(to right,#123A49,rgba(0,0,0,0.95) 90%)",cover:"dawnFM"},
{name:'How Do I Make You Love Me',artist:'The Weeknd',
background:"linear-gradient(to right,#123A49,rgba(0,0,0,0.95) 90%)",cover:"dawnFM"},
{name:'Take My Breath',artist:'The Weeknd',
background:"linear-gradient(to right,#123A49,rgba(0,0,0,0.95) 90%)",cover:"dawnFM"},
{name:'Sacrifice',artist:'<span class="explicit">E</span>The Weeknd',
background:"linear-gradient(to right,#123A49,rgba(0,0,0,0.95) 90%)",cover:"dawnFM"},
{name:'A Tale By Quincy',artist:'<span class="explicit">E</span>The Weeknd',
background:"linear-gradient(to right,#123A49,rgba(0,0,0,0.95) 90%)",cover:"dawnFM"},
{name:'Out Of Time',artist:'The Weeknd',
background:"linear-gradient(to right,#123A49,rgba(0,0,0,0.95) 90%)",cover:"dawnFM"},
{name:'Here We Go Again (feat. Tyler The Creator)',artist:'<span class="explicit">E</span>The Weeknd, Tyler, The Creator',
background:"linear-gradient(to right,#123A49,rgba(0,0,0,0.95) 90%)",cover:"dawnFM"},
{name:'Best Friends',artist:'The Weeknd',
background:"linear-gradient(to right,#123A49,rgba(0,0,0,0.95) 90%)",cover:"dawnFM"},
{name:'Is There Someone Else',artist:'The Weeknd',
background:"linear-gradient(to right,#123A49,rgba(0,0,0,0.95) 90%)",cover:"dawnFM"},
{name:'Starry Eyes',artist:'The Weeknd',
background:"linear-gradient(to right,#123A49,rgba(0,0,0,0.95) 90%)",cover:"dawnFM"},
{name:'Every Angel Is Terrifying',artist:'The Weeknd',
background:"linear-gradient(to right,#123A49,rgba(0,0,0,0.95) 90%)",cover:"dawnFM"},
{name:"Don't Break My Heart",artist:'The Weeknd',
background:"linear-gradient(to right,#123A49,rgba(0,0,0,0.95) 90%)",cover:"dawnFM"},
{name:"I Heard You're Married (feat. Lil Wayne)",artist:'<span class="explicit">E</span>The Weeknd, Lil Wayne',
background:"linear-gradient(to right,#123A49,rgba(0,0,0,0.95) 90%)",cover:"dawnFM"},
{name:"Less Than Zero",artist:'The Weeknd',
background:"linear-gradient(to right,#123A49,rgba(0,0,0,0.95) 90%)",cover:"dawnFM"},
{name:"Phantom Regret By Jim",artist:'The Weeknd',
background:"linear-gradient(to right,#123A49,rgba(0,0,0,0.95) 90%)",cover:"dawnFM"},
{name:'Alone Again',artist:"<span class='explicit'>E</span>The Weeknd",
background:"linear-gradient(to right,rgba(166, 64, 52, 0.95),rgba(0,0,0,0.95) 90%)",cover:"afterhours(2)"},
{name:'Too Late',artist:'<span class="explicit">E</span>The Weeknd',
background:"linear-gradient(to right,rgba(166, 64, 52, 0.95),rgba(0,0,0,0.95) 90%)",cover:"afterhours(2)"},
{name:'Hardest To Love',artist:'<span class="explicit">E</span>The Weeknd',
background:"linear-gradient(to right,rgba(166, 64, 52, 0.95),rgba(0,0,0,0.95) 90%)",cover:"afterhours(2)"},
{name:'Scared To Live',artist:"<span class='explicit'>E</span>The Weeknd",
background:"linear-gradient(to right,rgba(166, 64, 52, 0.95),rgba(0,0,0,0.95) 90%)",cover:"afterhours(2)"},
{name:'Snowchild',artist:'<span class="explicit">E</span>The Weeknd',
background:"linear-gradient(to right,rgba(166, 64, 52, 0.95),rgba(0,0,0,0.95) 90%)",cover:"afterhours(2)"},
{name:'Escape From LA',artist:'<span class="explicit">E</span>The Weeknd',
background:"linear-gradient(to right,rgba(166, 64, 52, 0.95),rgba(0,0,0,0.95) 90%)",cover:"afterhours(2)"},
{name:'Heartless',artist:"<span class='explicit'>E</span>The Weeknd",
background:"linear-gradient(to right,rgba(166, 64, 52, 0.95),rgba(0,0,0,0.95) 90%)",cover:"afterhours(2)"},
{name:'Faith',artist:'<span class="explicit">E</span>The Weeknd',
background:"linear-gradient(to right,rgba(166, 64, 52, 0.95),rgba(0,0,0,0.95) 90%)",cover:"afterhours(2)"},
{name:'Blinding Lights',artist:'The Weeknd',
background:"linear-gradient(to right,rgba(166, 64, 52, 0.95),rgba(0,0,0,0.95) 90%)",cover:"afterhours(2)"},
{name:'In Your Eyes',artist:"The Weeknd",
background:"linear-gradient(to right,rgba(166, 64, 52, 0.95),rgba(0,0,0,0.95) 90%)",cover:"afterhours(2)"},
{name:'Save Your Tears',artist:'<span class="explicit">E</span>The Weeknd',
background:"linear-gradient(to right,rgba(166, 64, 52, 0.95),rgba(0,0,0,0.95) 90%)",cover:"afterhours(2)"},
{name:'Repeat After Me (Interlude)',artist:'<span class="explicit">E</span>The Weeknd',
background:"linear-gradient(to right,rgba(166, 64, 52, 0.95),rgba(0,0,0,0.95) 90%)",cover:"afterhours(2)"},
{name:'After Hours',artist:"The Weeknd",
background:"linear-gradient(to right,rgba(166, 64, 52, 0.95),rgba(0,0,0,0.95) 90%)",cover:"afterhours(2)"},
{name:'Until I Bleed Out',artist:'<span class="explicit">E</span>The Weeknd',
background:"linear-gradient(to right,rgba(166, 64, 52, 0.95),rgba(0,0,0,0.95) 90%)",cover:"afterhours(2)"},
{name:'Call Out My Name',artist:'The Weeknd',
background:"linear-gradient(to right,rgba(178, 66, 26, 0.95),rgba(0,0,0,0.95) 90%)",cover:"MyDearMelancholy"},
{name:'Try Me',artist:'The Weeknd',
background:"linear-gradient(to right,rgba(178, 66, 26, 0.95),rgba(0,0,0,0.95) 90%)",cover:"MyDearMelancholy"},
{name:'Wasted Times',artist:'<span class="explicit">E</span>The Weeknd',
background:"linear-gradient(to right,rgba(178, 66, 26, 0.95),rgba(0,0,0,0.95) 90%)",cover:"MyDearMelancholy"},
{name:'I Was Never There feat. Gesaffelstein',artist:'The Weeknd, Gesaffelstein',
background:"linear-gradient(to right,rgba(178, 66, 26, 0.95),rgba(0,0,0,0.95) 90%)",cover:"MyDearMelancholy"},
{name:'Hurt You feat. Gesaffelstein',artist:'<span class="explicit">E</span>The Weeknd, Gesaffelstein',
background:"linear-gradient(to right,rgba(178, 66, 26, 0.95),rgba(0,0,0,0.95) 90%)",cover:"MyDearMelancholy"},
{name:'Privilage',artist:'<span class="explicit">E</span>The Weeknd',
background:"linear-gradient(to right,rgba(178, 66, 26, 0.95),rgba(0,0,0,0.95) 90%)",cover:"MyDearMelancholy"},
{name:'Starboy (Ft. Daft Punk)',artist:'<span class="explicit">E</span>The Weeknd, Daft Punk',
background:"linear-gradient(to right,rgba(210, 1, 42, 0.95),rgba(0,0,0,0.95) 90%)",cover:"starboy"},
{name:'Party Monster',artist:'<span class="explicit">E</span>The Weeknd',
background:"linear-gradient(to right,rgba(210, 1, 42, 0.95),rgba(0,0,0,0.95) 90%)",cover:"starboy"},
{name:'False Alarm',artist:'The Weeknd',
background:"linear-gradient(to right,rgba(210, 1, 42, 0.95),rgba(0,0,0,0.95) 90%)",cover:"starboy"},
{name:'Reminder',artist:'<span class="explicit">E</span>The Weeknd',
background:"linear-gradient(to right,rgba(210, 1, 42, 0.95),rgba(0,0,0,0.95) 90%)",cover:"starboy"},
{name:"Rockin'",artist:'<span class="explicit">E</span>The Weeknd',
background:"linear-gradient(to right,rgba(210, 1, 42, 0.95),rgba(0,0,0,0.95) 90%)",cover:"starboy"},
{name:'Secrets',artist:'The Weeknd',
background:"linear-gradient(to right,rgba(210, 1, 42, 0.95),rgba(0,0,0,0.95) 90%)",cover:"starboy"},
{name:'True Colors',artist:'The Weeknd',
background:"linear-gradient(to right,rgba(210, 1, 42, 0.95),rgba(0,0,0,0.95) 90%)",cover:"starboy"},
{name:'Stargirl Interlude (Ft. Lana Del Rey)',artist:'The Weeknd, Lana Del Ray',
background:"linear-gradient(to right,rgba(210, 1, 42, 0.95),rgba(0,0,0,0.95) 90%)",cover:"starboy"},
{name:'Sidewalks (Ft. Kendrick Lamar)',artist:'<span class="explicit">E</span>The Weeknd, Kendrick Lamar',
background:"linear-gradient(to right,rgba(210, 1, 42, 0.95),rgba(0,0,0,0.95) 90%)",cover:"starboy"},
{name:'Six Feet Under',artist:'<span class="explicit">E</span>The Weeknd',
background:"linear-gradient(to right,rgba(210, 1, 42, 0.95),rgba(0,0,0,0.95) 90%)",cover:"starboy"},
{name:'Love To Lay',artist:'<span class="The Weeknd',
background:"linear-gradient(to right,rgba(210, 1, 42, 0.95),rgba(0,0,0,0.95) 90%)",cover:"starboy"},
{name:'A Lonely Night',artist:'<span class="The Weeknd',
background:"linear-gradient(to right,rgba(210, 1, 42, 0.95),rgba(0,0,0,0.95) 90%)",cover:"starboy"},
{name:'Attention',artist:'<span class="explicit">E</span>The Weeknd',
background:"linear-gradient(to right,rgba(210, 1, 42, 0.95),rgba(0,0,0,0.95) 90%)",cover:"starboy"},
{name:'Ordinary Life',artist:'The Weeknd',
background:"linear-gradient(to right,rgba(210, 1, 42, 0.95),rgba(0,0,0,0.95) 90%)",cover:"starboy"},
{name:'Nothing Without You',artist:'The Weeknd',
background:"linear-gradient(to right,rgba(210, 1, 42, 0.95),rgba(0,0,0,0.95) 90%)",cover:"starboy"},
{name:'All I Know (Ft. Future)',artist:'<span class="explicit">E</span>The Weeknd, Future',
background:"linear-gradient(to right,rgba(210, 1, 42, 0.95),rgba(0,0,0,0.95) 90%)",cover:"starboy"},
{name:'Die For You',artist:'The Weeknd',
background:"linear-gradient(to right,rgba(210, 1, 42, 0.95),rgba(0,0,0,0.95) 90%)",cover:"starboy"},
{name:'I Feel It Coming (Ft. Daft Punk)',artist:'The Weeknd, Daft Punk',
background:"linear-gradient(to right,rgba(210, 1, 42, 0.95),rgba(0,0,0,0.95) 90%)",cover:"starboy"},
{name:'Call Out My Name',artist:'The Weeknd',
background:"linear-gradient(to right,rgba(178, 66, 26, 0.95),rgba(0,0,0,0.95) 90%)",cover:"MyDearMelancholy"},
{name:"Can't Feel My Face",artist:'The Weeknd',
background:"linear-gradient(to right,rgba(0, 0, 0, 0.95),rgba(0,0,0,0.95) 90%)",cover:"bbtm"},
{name:'Reminder',artist:'<span class="explicit">E</span>The Weeknd',
background:"linear-gradient(to right,rgba(210, 1, 42, 0.95),rgba(0,0,0,0.95) 90%)",cover:"starboy"},
{name:"Often",artist:'The Weeknd',
background:"linear-gradient(to right,rgba(0, 0, 0, 0.95),rgba(0,0,0,0.95) 90%)",cover:"bbtm"}
]
const PlaylistSongsindexes=[[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53],
[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
[16,17,18,19,20,21,22,23,24,25,26,27,28,29],
[30,31,32,33,34,35],
[36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53]];
if (localStorage.customIndexes === undefined) {
    localStorage.customIndexes = JSON.stringify([]);
}
let List=JSON.parse(localStorage.getItem('customIndexes'));
PlaylistSongsindexes.push(List);

for (let i=0;i<List.length;i++){
    List[i]=parseInt(List[i]);
}
function updateCustomIndexes(){
    localStorage.setItem('customIndexes',JSON.stringify(List));
    PlaylistSongsindexes[5]=List;
    updateCustomTrackNumber();
    // something remaining
    if (playlistIndex==5){
        document.getElementById('songlistJuke').innerHTML="";
        for (let i=0;i<PlaylistSongsindexes[5].length;i++){
            let songDiv=document.createElement('div');
            songDiv.className="songJuke";
            let songImgDiv=document.createElement('div');
            songImgDiv.className="songImgJuke flex";
            let songImg=document.createElement('img');
            let songInfoDiv=document.createElement('div');
            songInfoDiv.className="songNameSectionJuke flex";
            let songName=document.createElement('div');
            songName.className="songNameJuke";
            let songArtistName=document.createElement('div');
            let songAddCustom=document.createElement('div');
            songAddCustom.className='songAddCustom';
            let bars=document.createElement('i');
            bars.className="fa fa-bars addToPlaylist";
            let plus=document.createElement('i');
            plus.className="fa fa-plus addToPlaylist";
            songAddCustom.appendChild(bars);
            songAddCustom.appendChild(plus);
            songArtistName.className="songArtistNameJuke";
            songImg.src=`../assets/images/${allSongInfo[PlaylistSongsindexes[playlistIndex][i]].cover}.jpg`;
            songName.innerHTML=allSongInfo[PlaylistSongsindexes[playlistIndex][i]].name;
            songArtistName.innerHTML=allSongInfo[PlaylistSongsindexes[playlistIndex][i]].artist;
            songImgDiv.appendChild(songImg);
            songInfoDiv.appendChild(songName);
            songInfoDiv.appendChild(songArtistName);
            songDiv.appendChild(songImgDiv);
            songDiv.appendChild(songInfoDiv);
            songDiv.appendChild(songAddCustom);
            document.getElementById('songlistJuke').appendChild(songDiv);
            songDiv.addEventListener('click',onclickSong);
        }
    }
}
function addCustomIndex(x){
    for (let i=0;i<List.length;i++){
        if (List[i]==x) return;
    }
    List.push(x);
    updateCustomIndexes();
}
function removeCustomIndex(x){
    for (let i=0;i<List.length;i++){
        if (List[i]==x){
            List.splice(i, 1);
            break;
        }
    }
    updateCustomIndexes();
}
const playBtn=document.querySelector('#play'); 
const nextBtn=document.querySelector('#next');
const prevBtn=document.querySelector('#prev');  
const volumeBtn=document.querySelector("#bolume");
const audioPlaying=document.querySelector("#audio");
const progress=document.querySelector('.Progress');
const songCover=document.querySelector('#cover');
const songTitleController=document.querySelector('#songNameController');
const songArtistNameController=document.querySelector('#songArtistNameController');
const progressContainer=document.querySelector('.progress-container');
const progressBar=document.querySelector('.Progress');
const audioVolumeContainer=document.querySelector('#volumeDiv');
const jukeboxController=document.querySelector('#jukeboxController');
//songs
let ListOfSongNamesForHighlight=document.getElementsByClassName('songNameJuke');
//keeping track
let songIndex=2;
let playlistIndex=0;
//initially load
function loadSong(){
    if (playlistIndex==5 && PlaylistSongsindexes[playlistIndex].length==0) return;
    songTitleController.innerText=allSongInfo[PlaylistSongsindexes[playlistIndex][songIndex]].name;
    songArtistNameController.innerHTML=allSongInfo[PlaylistSongsindexes[playlistIndex][songIndex]].artist;
    audioPlaying.src=`../assets/music/${allSongInfo[PlaylistSongsindexes[playlistIndex][songIndex]].name}.mp3`;
    songCover.src=`../assets/images/${allSongInfo[PlaylistSongsindexes[playlistIndex][songIndex]].cover}.jpg`
    jukeboxController.style.background=allSongInfo[PlaylistSongsindexes[playlistIndex][songIndex]].background;
    for (let i=0;i<ListOfSongNamesForHighlight.length;i++){
        ListOfSongNamesForHighlight[i].classList.remove('green');
    }
    ListOfSongNamesForHighlight[songIndex].classList.add('green');
}
function onclickSong(e){
    if (e.srcElement.classList.contains('songNameSectionJuke') || e.srcElement.classList.contains('songAddCustom')){
        for (let i=0;i<document.getElementsByClassName('songNameJuke').length;i++){
            if (e.srcElement.querySelector('div.songNameJuke')==document.getElementsByClassName('songNameJuke')[i]){
                songIndex=i;
                loadSong();
                playSong();
                break;
            }
        }
    }else if (e.srcElement.classList.contains('songNameJuke')){
        for (let i=0;i<document.getElementsByClassName('songNameJuke').length;i++){
            if (e.srcElement==document.getElementsByClassName('songNameJuke')[i]){
                songIndex=i;
                loadSong();
                playSong();
                break;
            }
        }
    }else if (e.srcElement.classList.contains('songArtistNameJuke')){
        for (let i=0;i<document.getElementsByClassName('songArtistNameJuke').length;i++){
            if (e.srcElement==document.getElementsByClassName('songArtistNameJuke')[i]){
                songIndex=i;
                loadSong();
                playSong();
                break;
            }
        }
    }else if (e.srcElement.classList.contains('songImgJuke')){
        for (let i=0;i<document.getElementsByClassName('songImgJuke').length;i++){
            if (e.srcElement==document.getElementsByClassName('songImgJuke')[i]){
                songIndex=i;
                loadSong();
                playSong();
                break;
            }
        }
    }else if (e.srcElement.parentNode.classList.contains('songImgJuke')){
        for (let i=0;i<document.getElementsByClassName('songImgJuke').length;i++){
            if (e.srcElement.parentNode==document.getElementsByClassName('songImgJuke')[i]){
                songIndex=i;
                loadSong();
                playSong();
                break;
            }
        }
    }else if (e.srcElement.classList.contains('fa-bars') || e.srcElement.classList.contains('fa-plus')){
        for (let i=0;i<document.getElementsByClassName('songAddCustom').length;i++){
            let y=document.getElementsByClassName('songAddCustom');
            if (e.srcElement==y[i].childNodes[0]){
                if (y[i].childNodes[0].classList.contains('addToPlaylist')){
                    y[i].childNodes[0].classList.remove('addToPlaylist');
                    y[i].childNodes[0].classList.add('removeFromPlaylist');
                    y[i].childNodes[1].classList.remove('addToPlaylist');
                    y[i].childNodes[1].classList.add('removeFromPlaylist');
                    // something remaining
                    removeCustomIndex(PlaylistSongsindexes[playlistIndex][i]);
                }else{
                    y[i].childNodes[0].classList.remove('removeFromPlaylist');
                    y[i].childNodes[0].classList.add('addToPlaylist');
                    y[i].childNodes[1].classList.remove('removeFromPlaylist');
                    y[i].childNodes[1].classList.add('addToPlaylist');
                    addCustomIndex(PlaylistSongsindexes[playlistIndex][i]);
                }
                break;
            }else if (e.srcElement==document.getElementsByClassName('songAddCustom')[i].childNodes[1]){
                if (y[i].childNodes[0].classList.contains('addToPlaylist')){
                    y[i].childNodes[0].classList.remove('addToPlaylist');
                    y[i].childNodes[0].classList.add('removeFromPlaylist');
                    y[i].childNodes[1].classList.remove('addToPlaylist');
                    y[i].childNodes[1].classList.add('removeFromPlaylist');
                    removeCustomIndex(PlaylistSongsindexes[playlistIndex][i]);
                }else{
                    y[i].childNodes[0].classList.remove('removeFromPlaylist');
                    y[i].childNodes[0].classList.add('addToPlaylist');
                    y[i].childNodes[1].classList.remove('removeFromPlaylist');
                    y[i].childNodes[1].classList.add('addToPlaylist');
                    addCustomIndex(PlaylistSongsindexes[playlistIndex][i]);
                }
                break;
            }
        }
    }
}
function loadPlaylist(){
    for (let i=0;i<document.getElementsByClassName('playlistName').length;i++){
        document.getElementsByClassName('playlistName')[i].classList.remove('green');
    }
    document.getElementsByClassName('playlistName')[playlistIndex].classList.add('green');
    document.getElementById('playlistName').innerText=document.getElementsByClassName('playlistName')[playlistIndex].innerText;
    document.getElementById('songlistJuke').innerHTML="";
    for (let i=0;i<PlaylistSongsindexes[playlistIndex].length;i++){
        let songDiv=document.createElement('div');
        songDiv.className="songJuke";
        let songImgDiv=document.createElement('div');
        songImgDiv.className="songImgJuke flex";
        let songImg=document.createElement('img');
        let songInfoDiv=document.createElement('div');
        songInfoDiv.className="songNameSectionJuke flex";
        let songName=document.createElement('div');
        songName.className="songNameJuke";
        let songArtistName=document.createElement('div');
        let songAddCustom=document.createElement('div');
        songAddCustom.className='songAddCustom';
        let bars=document.createElement('i');
        let plus=document.createElement('i');
        for (let j=0;j<PlaylistSongsindexes[5].length;j++){
            if (PlaylistSongsindexes[5][j]==PlaylistSongsindexes[playlistIndex][i]){
                bars.className="fa fa-bars addToPlaylist";
                plus.className="fa fa-plus addToPlaylist";
                break;
            }
        }
        if (bars.className!="fa fa-bars addToPlaylist"){
            bars.className="fa fa-bars removeFromPlaylist";
            plus.className="fa fa-plus removeFromPlaylist";
        }
        songAddCustom.appendChild(bars);
        songAddCustom.appendChild(plus);
        songArtistName.className="songArtistNameJuke";
        songImg.src=`../assets/images/${allSongInfo[PlaylistSongsindexes[playlistIndex][i]].cover}.jpg`;
        songName.innerHTML=allSongInfo[PlaylistSongsindexes[playlistIndex][i]].name;
        songArtistName.innerHTML=allSongInfo[PlaylistSongsindexes[playlistIndex][i]].artist;
        songImgDiv.appendChild(songImg);
        songInfoDiv.appendChild(songName);
        songInfoDiv.appendChild(songArtistName);
        songDiv.appendChild(songImgDiv);
        songDiv.appendChild(songInfoDiv);
        songDiv.appendChild(songAddCustom);
        document.getElementById('songlistJuke').appendChild(songDiv);
        songDiv.addEventListener('click',onclickSong);
    }
    songIndex=0;
    loadSong();
}
loadPlaylist();
function onclickPlaylist(e){
    if (e.srcElement.classList.contains('playlist')){
        for (let i=0;i<document.getElementsByClassName('playlist').length;i++){
            if (e.srcElement.querySelector('div.playlistName')==document.getElementsByClassName('playlistName')[i]){
                playlistIndex=i;
                loadPlaylist();
                songIndex=0;
                loadSong();
                playSong();
                break;
            }
        }
    }else if (e.srcElement.classList.contains('playlistName')){
        for (let i=0;i<document.getElementsByClassName('playlistName').length;i++){
            if (e.srcElement==document.getElementsByClassName('playlistName')[i]){
                playlistIndex=i;
                loadPlaylist();
                songIndex=0;
                loadSong();
                playSong();
                break;
            }
        }
    }else if (e.srcElement.classList.contains('playlistSongsNumber')){
        for (let i=0;i<document.getElementsByClassName('playlistSongsNumber').length;i++){
            if (e.srcElement==document.getElementsByClassName('playlistSongsNumber')[i]){
                playlistIndex=i;
                loadPlaylist();
                songIndex=0;
                loadSong();
                playSong();
                break;
            }
        }
    }else if (e.srcElement.classList.contains('playlistImage')){
        for (let i=0;i<document.getElementsByClassName('playlistImage').length;i++){
            if (e.srcElement==document.getElementsByClassName('playlistImage')[i]){
                playlistIndex=i;
                loadPlaylist();
                songIndex=0;
                loadSong();
                playSong();
                break;
            }
        }
    }else if (e.srcElement.parentNode.classList.contains('playlistImage')){
        for (let i=0;i<document.getElementsByClassName('playlistImage').length;i++){
            if (e.srcElement.parentNode==document.getElementsByClassName('playlistImage')[i]){
                playlistIndex=i;
                loadPlaylist();
                songIndex=0;
                loadSong();
                playSong();
                break;
            }
        }
    }
}
for (let i=0;i<PlaylistSongsindexes.length;i++){
    document.getElementsByClassName('playlist')[i].addEventListener('click',onclickPlaylist);
}
function updateCustomTrackNumber(){
    if (PlaylistSongsindexes[5].length==1){
        document.getElementById('customTrackNumber').parentNode.innerHTML="<span id='customTrackNumber'>1</span> Track";
    }else{
        document.getElementById('customTrackNumber').parentNode.innerHTML="<span id='customTrackNumber'>1</span> Tracks";
    }
    document.getElementById('customTrackNumber').innerText=PlaylistSongsindexes[5].length;
}
updateCustomTrackNumber();
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
}
document.getElementById('shuffle').addEventListener('click',()=>{
    shuffle(PlaylistSongsindexes[playlistIndex]);
    loadPlaylist();
})
function playSong(){
    if (playlistIndex==5 && PlaylistSongsindexes[playlistIndex].length==0){
        playlistIndex=0;
        loadPlaylist()
        playSong();
        return;
    };
    playBtn.classList.remove('pause');
    playBtn.classList.add('play');
    playBtn.querySelector('i.fa').classList.remove('fa-play');
    playBtn.querySelector('i.fa').classList.add('fa-pause');
    audioPlaying.play();
}
function pauseSong(){
    playBtn.classList.remove('play');
    playBtn.classList.add('pause');
    playBtn.querySelector('i.fa').classList.remove('fa-pause');
    playBtn.querySelector('i.fa').classList.add('fa-play');
    audioPlaying.pause();
}
function prevSong(){
    songIndex--;
    if (songIndex<0){
        songIndex=PlaylistSongsindexes[playlistIndex].length-1;
    }
    loadSong();
    playSong();
}
function nextSong(){
    songIndex++;
    if (songIndex==PlaylistSongsindexes[playlistIndex].length){
        songIndex=0;
    }
    loadSong();
    playSong();
}
function updateProgress(e){
    let {duration,currentTime}=e.srcElement;
    let progressPercentage=(currentTime/duration)*100;
    progressBar.style.width=`${progressPercentage}%`;
    if (progressPercentage==100){
        nextSong();
    }
}
function setProgress(e){
    const width=this.clientWidth;
    const clickX=e.offsetX;
    audioPlaying.currentTime=(clickX/width)*audioPlaying.duration;
}
function setVolume(e){
    const height=this.clientHeight;
    const clickY=e.offsetY;
    audioPlaying.volume=1-clickY/height;
    document.querySelector('#volume').style.height=`${(clickY/height)*100}%`;
}
function updateVolumeIcon(){
    document.querySelector('#hugeCircle').style.background="white";
    document.querySelector('#bigCircle').style.background="white";
    document.querySelector('#smallCircle').style.background="white";
    if (audioPlaying.volume<0.75 && audioPlaying.volume>0.25){
        document.querySelector('#hugeCircle').style.background="black";
    }else if (audioPlaying.volume<=0.25 && audioPlaying.volume>0){
        document.querySelector('#hugeCircle').style.background="black";
        document.querySelector('#bigCircle').style.background="black";
    }else if (audioPlaying.volume==0){
        document.querySelector('#hugeCircle').style.background="black";
        document.querySelector('#bigCircle').style.background="black";
        document.querySelector('#smallCircle').style.background="black";
    }
}
//eventListners
document.querySelector('#songsSection').addEventListener('click',()=>{
    if (document.getElementById('jukeboxUp').classList.contains('hidden')){
        document.getElementById('jukeboxUp').classList.remove('hidden');
        document.getElementById('jukeboxUp').classList.add('visible');
        document.getElementById('songlistJuke').classList.remove('hidden');
        document.getElementById('songlistJuke').classList.add('visible');
        document.getElementById('playlistUp').classList.remove('visible');
        document.getElementById('playlistUp').classList.add('hidden');
    }
});
document.querySelector('#playlistSection').addEventListener('click',()=>{
    if (document.getElementById('playlistUp').classList.contains('hidden')){
        document.getElementById('playlistUp').classList.remove('hidden');
        document.getElementById('playlistUp').classList.add('visible');
        document.getElementById('jukeboxUp').classList.remove('visible');
        document.getElementById('jukeboxUp').classList.add('hidden');
        document.getElementById('songlistJuke').classList.remove('visible');
        document.getElementById('songlistJuke').classList.add('hidden');
    }
});
playBtn.addEventListener('click',()=>{
    let isPlaying=document.querySelector("#play").classList.contains('play');
    if (isPlaying){
        pauseSong();
    }else{
        playSong();
    }
})

//changeSongs
prevBtn.addEventListener('click',prevSong);
nextBtn.addEventListener('click',nextSong);
volumeBtn.addEventListener('click',()=>{
    if (audioVolumeContainer.classList.contains('hidden')){
        audioVolumeContainer.classList.remove('hidden');
        audioVolumeContainer.classList.add('visible');
    }else{
        audioVolumeContainer.classList.remove('visible');
        audioVolumeContainer.classList.add('hidden');
    }
})

audioPlaying.addEventListener('timeupdate',updateProgress);
progressContainer.addEventListener('click',setProgress);
audioVolumeContainer.addEventListener('click',setVolume);
audioVolumeContainer.addEventListener("mousewheel",(e)=>{
    e = window.event || e;
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    var scrollSpeed = 60; // Janky jank <<<<<<<<<<<<<<
    if (delta*scrollSpeed>0){
        audioPlaying.volume=Math.min(audioPlaying.volume+0.1,1);
    }else{
        audioPlaying.volume=Math.max(audioPlaying.volume-0.1,0);
    }
    updateVolumeIcon();
    document.querySelector('#volume').style.height=`${100-Math.max(Math.min(audioPlaying.volume,1),0)*100}%`;
    e.preventDefault();
});
audioPlaying.volume=0.5;
updateVolumeIcon();
shuffle(PlaylistSongsindexes[playlistIndex]);
loadPlaylist();
