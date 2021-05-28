const openButton = document.getElementById(`openModal`);
const modal = document.getElementById(`modal`)
const closeButton = document.getElementById(`close`)
var audio = new Audio('./audio/inmydreams.m4a')
var audioTwo = new Audio('./audio/givesYouHell.m4a')
var audioThree = new Audio('./audio/letsGetItOn.mp3')
var audioFour = new Audio('./audio/ifUSeekAmy.m4a')
var audioFive = new Audio('./audio/theyCantTakeThatAwayFromME.m4a')
var audioSix = new Audio('./audio/shakeYourGrooveThing.m4a')


const openModal = () => {
    if (document.getElementById(`chillVibes`).checked&&document.getElementById(`alcohol`).checked) {
        document.getElementById(`vibeAlbum`).innerText=`Looking for a good album to chill to? Try these on for size. Meddle - Pink Floyd, Southern Nights - Allen Toussaint, Astral Weeks - Van Morrison, CSN - Crosby Stills and Nash, Rumors - Fleetwood Mac.`;
        document.getElementById(`vibeDrink`).innerText=`For your drink, we're feeling a cold beer. Any domestic beer will do, but ideally, you'd have a Miller High Life straight out of the fridge to sip on.`;
        document.getElementById(`vibeSongs`).innerText=`Specific songs that will set your vibe will be Cold Little Heart - Radio Edit by Michael Kiwanuka, Mercy Mercy Me - Marvin Gaye, I Guess I Just Feel Like - John Mayer, How Does It Feel? - Samm Henshaw, Cauliflower - Jak Lizard.`;
        document.getElementById(`modal`).style.backgroundImage="url('./images/chillVibes.jpg')";
        document.getElementById(`modal`).style.backgroundSize="cover";
        document.getElementById(`modal-textbox`).style.backgroundColor="rgba(248, 153, 127, 0.8)";
        audio.play();
    } 
    else if (document.getElementById(`chillVibes`).checked&&document.getElementById(`normalDrink`).checked) {
        document.getElementById(`vibeAlbum`).innerText=`Looking for a good album to chill to? Try these on for size. Meddle - Pink Floyd, Southern Nights - Allen Toussaint, Astral Weeks - Van Morrison, CSN - Crosby Stills and Nash, Rumors - Fleetwood Mac.`;
        document.getElementById(`vibeDrink`).innerText=`For your drink, we're feeling a root beer. Brand wise, we're not feeling too picky. A&W, Bargs, Mug, Stewart's, Abita, anything will do. If root beer isn't your thing, go for any soft drink, or a Sweet Tea. Anything from Arizona to homemade will do.`;
        document.getElementById(`vibeSongs`).innerText=`Specific songs that will set your vibe will be Cold Little Heart - Radio Edit by Michael Kiwanuka, Mercy Mercy Me - Marvin Gaye, I Guess I Just Feel Like - John Mayer, How Does It Feel? - Samm Henshaw, Cauliflower - Jak Lizard.`;
        document.getElementById(`modal`).style.backgroundImage="url('./images/chillVibes.jpg')";
        document.getElementById(`modal`).style.backgroundSize="cover";
        document.getElementById(`modal-textbox`).style.backgroundColor="rgba(248, 153, 127, 0.8)";
        audio.play();
    } 
    else if (document.getElementById(`lonelyVibes`).checked&&document.getElementById(`alcohol`).checked) {
        document.getElementById(`vibeAlbum`).innerText=`Breakups suck. Sometimes we need a pickme up and sometimes we need to cry and eat mountains of ICE CREAMMM. Toss on one of these albums for a vibe. Melodrama - Lorde, The Search for Everything - John Mayer, Malibu Nights -  Lany, Blue - Joni Mitchell, Norman Fucking Rockwell! - Lana Del Rey.`;
        document.getElementById(`vibeDrink`).innerText=`Pour yourself some Red Wine, or some White Wine. To be honest since you're feeling sad you should drink whatever you want. But wine should do the trick. Our preferred types are Merlots, Cabernets, and Sauvignon Blancs.`;
        document.getElementById(`vibeSongs`).innerText=`Specific songs that will set your vibe will be Dancing On My Own - Robyn, Don't You Remember - Adele, Go Your Own Way - Fleetwood Mac, Ex-Factor - Lauryn Hill, The Winner Takes It All - ABBA, Drivers License - Olivia Rodrigo, Gives You Hell - All American Rejects.`;
        document.getElementById(`modal`).style.backgroundImage="url('./images/lonelyVibes.jpg')";
        document.getElementById(`modal`).style.backgroundSize="cover";
        document.getElementById(`modal-textbox`).style.backgroundColor="rgba(137, 196, 244, 0.9)";
        audioTwo.play();
    } 
    else if (document.getElementById(`lonelyVibes`).checked&&document.getElementById(`normalDrink`).checked) {
        document.getElementById(`vibeAlbum`).innerText=`Breakups suck. Sometimes we need a pickme up and sometimes we need to cry and eat mountains of ICE CREAMMM. Toss on one of these albums for a vibe. Melodrama - Lorde, The Search for Everything - John Mayer, Malibu Nights -  Lany, Blue - Joni Mitchell, Norman Fucking Rockwell! - Lana Del Rey.`;
        document.getElementById(`vibeDrink`).innerText=`Go boil some hot water and have some tea. Whatever you have in the house will do, but we'd ideally love to see some Lavender Chamomile or Peppermint.`;
        document.getElementById(`vibeSongs`).innerText=`Specific songs that will set your vibe will be Dancing On My Own - Robyn, Don't You Remember - Adele, Go Your Own Way - Fleetwood Mac, Ex-Factor - Lauryn Hill, The Winner Takes It All - ABBA, Drivers License - Olivia Rodrigo, Gives You Hell - All American Rejects.`;
        document.getElementById(`modal`).style.backgroundImage="url('./images/lonelyVibes.jpg')";
        document.getElementById(`modal`).style.backgroundSize="cover";
        document.getElementById(`modal-textbox`).style.backgroundColor="rgba(137, 196, 244, 0.9)";
        audioTwo.play();
    } 
    else if (document.getElementById(`sensualVibes`).checked&&document.getElementById(`alcohol`).checked) {
        document.getElementById(`vibeAlbum`).innerText=`Ooooooh we're feeling sensual tonight are we?! Obsessed. This vibe can vary drastically, but heres some suggestions ;). Channel Orange - Frank Ocean, So Tonight That I MAy See - Mazzy Star, Freudian - Daniel Caesar.`;
        document.getElementById(`vibeDrink`).innerText=`Red wine honey! No explanation needed!`;
        document.getElementById(`vibeSongs`).innerText=`Specific songs that will set your vibe will be Love on the Brain - Rihanna, Hawái - Maluma, What do you Mean - Justin Bieber, Stay Flo - Solange, Let's Get It On - Marvin Gaye.`;
        document.getElementById(`modal`).style.backgroundImage="url('./images/recordPlayerVibes.jpeg')";
        document.getElementById(`modal`).style.backgroundSize="cover";
        document.getElementById(`modal-textbox`).style.backgroundColor="rgba(221, 160, 221, 0.9)";
        audioThree.play();
    } 
    else if (document.getElementById(`sensualVibes`).checked&&document.getElementById(`normalDrink`).checked) {
        document.getElementById(`vibeAlbum`).innerText=`Ooooooh we're feeling sensual tonight are we?! Obsessed. This vibe can vary drastically, but heres some suggestions ;). Channel Orange - Frank Ocean, So Tonight That I MAy See - Mazzy Star, Freudian - Daniel Caesar.`;
        document.getElementById(`vibeDrink`).innerText=`Drink wise, we're feeling some lemonade or sweet tea. Pick your poison.`;
        document.getElementById(`vibeSongs`).innerText=`Specific songs that will set your vibe will be Love on the Brain - Rihanna, Hawái - Maluma, What do you Mean - Justin Bieber, Stay Flo - Solange,`;
        document.getElementById(`modal`).style.backgroundImage="url('./images/recordPlayerVibes.jpeg')";
        document.getElementById(`modal`).style.backgroundSize="cover";
        document.getElementById(`modal-textbox`).style.backgroundColor="rgba(221, 160, 221, 0.9)";
        audioThree.play();
    } 
    else if (document.getElementById(`shotsVibes`).checked&&document.getElementById(`alcohol`).checked) {
        document.getElementById(`vibeAlbum`).innerText=`Oh YES QUEEN/KING/WHATEVER YOU WANT TO BE. We are READY for this. Get ready to dance like it's the 2000's and toss on these albums to set the mo0o0o0od. Oops!... I did it again! - Britney Spears, No Strings Attached - NSync, Teenage Dream: The Complete Confection - Katy Perry.`;
        document.getElementById(`vibeDrink`).innerText=`Let's keep it simple here people. Sprite chaser with bottom shelf vodka.`;
        document.getElementById(`vibeSongs`).innerText=`Circus - Britney Spears, Last Night - The Strokes, Hips Don't Lie - Shakira, Break it Off - Rihanna, Waiting For Tonight - JLo, 4 Minutes - Madonna and Justin Timberlake, Like A G6 - Far East Movement, She Wolf - Shakira.`;
        document.getElementById(`modal`).style.backgroundImage="url('./images/partyVibes2.jpg')";
        document.getElementById(`modal`).style.backgroundSize="cover";
        document.getElementById(`modal-textbox`).style.backgroundColor="rgba(220, 20, 60, 0.9)";
        audioFour.play();
    } 
    else if (document.getElementById(`shotsVibes`).checked&&document.getElementById(`normalDrink`).checked) {
        document.getElementById(`vibeAlbum`).innerText=`Oh YES QUEEN/KING/WHATEVER YOU WANT TO BE. We are READY for this. Get ready to dance like it's the 2000's and toss on these albums to set the mo0o0o0od. Oops!... I did it again! - Britney Spears, No Strings Attached - NSync, Teenage Dream: The Complete Confection - Katy Perry.`;
        document.getElementById(`vibeDrink`).innerText=`In the words of Shaun White, "I'm talkin' 'bout Mountain Dews, baby.`;
        document.getElementById(`vibeSongs`).innerText=`Circus - Britney Spears, Last Night - The Strokes, Hips Don't Lie - Shakira, Break it Off - Rihanna, Waiting For Tonight - JLo, 4 Minutes - Madonna and Justin Timberlake, Like A G6 - Far East Movement, She Wolf - Shakira.`;
        document.getElementById(`modal`).style.backgroundImage="url('./images/partyVibes2.jpg')";
        document.getElementById(`modal`).style.backgroundSize="cover";
        document.getElementById(`modal-textbox`).style.backgroundColor="rgba(220, 20, 60, 0.9)";
        audioFour.play();
    } 
    else if (document.getElementById(`parisVibes`).checked&&document.getElementById(`alcohol`).checked) {
        document.getElementById(`vibeAlbum`).innerText=`Ah yes. Paris. We'll always have Paris, as they say, and with these albums, you can't help but pretend you are in Paris eating fresh croissants and brie and all the gooood cheeses. Toss on these albums to set the scene. Ella and Louis - Ella Fitzgerald and Louis Armstrong, Midnight in Paris (Music from the Motion Picture) - Various Artists, Chansons Des Cafés De Paris - Edith Piaf.`;
        document.getElementById(`vibeDrink`).innerText=`Pour yourself a French 75 or some Red Wine. If possible, break out some cheese as well. Brie, Cheddar, anything will do.`;
        document.getElementById(`vibeSongs`).innerText=`La Vie En Rose - Lady Gaga, La Vie En Rose - Edith Piaf, April in Paris - Ella Fitzgerald, Si Tu vois ma mêre - Sidney Bechet, Sympathique - Pink Martini.`;
        document.getElementById(`modal`).style.backgroundImage="url('./images/parisVibes.jpg')";
        document.getElementById(`modal`).style.backgroundSize="cover";
        document.getElementById(`modal-textbox`).style.backgroundColor="rgba(55, 99, 141, 0.9)";
        audioFive.play();
    } 
    else if (document.getElementById(`parisVibes`).checked&&document.getElementById(`normalDrink`).checked) {
        document.getElementById(`vibeAlbum`).innerText=`Ah yes. Paris. We'll always have Paris, as they say, and with these albums, you can't help but pretend you are in Paris eating fresh croissants and brie and all the gooood cheeses. Toss on these albums to set the scene. Ella and Louis - Ella Fitzgerald and Louis Armstrong, Midnight in Paris (Music from the Motion Picture) - Various Artists, Chansons Des Cafés De Paris - Edith Piaf.`;
        document.getElementById(`vibeDrink`).innerText=`This may sound like a weird one, but have any drink you want. Just make sure you drink it out of a wine glass.`;
        document.getElementById(`vibeSongs`).innerText=`La Vie En Rose - Lady Gaga, La Vie En Rose - Edith Piaf, April in Paris - Ella Fitzgerald, Si Tu vois ma mêre - Sidney Bechet, Sympathique - Pink Martini.`;
        document.getElementById(`modal`).style.backgroundImage="url('./images/parisVibes.jpg')";
        document.getElementById(`modal`).style.backgroundSize="cover";
        document.getElementById(`modal-textbox`).style.backgroundColor="rgba(55, 99, 141, 0.9)";
        audioFive.play();
    } 
    else if (document.getElementById(`discoVibes`).checked&&document.getElementById(`alcohol`).checked) {
        document.getElementById(`vibeAlbum`).innerText=`Oh HONEYYYY we are feeling DISCO we SEE you we HEAR you and we FEEL the vibe. Albums for you are as follows. Off The Wall - Michael Jackson. ABBA - Gold: Greatest Hits. Raise! - Earth, Wind, & Fire, Saturday Night Fever Movie Soundtrack - Bee Gees.`;
        document.getElementById(`vibeDrink`).innerText=`Negroni's are the vibe right now, but then again, a vodka soda with lime could be good.`;
        document.getElementById(`vibeSongs`).innerText=`More Than A Woman - Bee Gees, Heart Of Glass - Blondie, It's Raining Men - The Weather Girls, Brick House - Commodores, September - Earth, Wind, and Fire, I Will Survive - Gloria Gaynor.`;
        document.getElementById(`modal`).style.backgroundImage="url('./images/disco.jpg')";
        document.getElementById(`modal`).style.backgroundSize="cover";
        document.getElementById(`modal-textbox`).style.backgroundColor="rgba(248, 153, 127, 0.9)";
        audioSix.play();
    } 
    else if (document.getElementById(`discoVibes`).checked&&document.getElementById(`normalDrink`).checked) {
        document.getElementById(`vibeAlbum`).innerText=`Oh HONEYYYY we are feeling DISCO we SEE you we HEAR you and we FEEL the vibe. Albums for you are as follows. Off The Wall - Michael Jackson. ABBA - Gold: Greatest Hits. Raise! - Earth, Wind, & Fire, Saturday Night Fever Movie Soundtrack - Bee Gees.`;
        document.getElementById(`vibeDrink`).innerText=`Shirley Temple with a million cherries.`;
        document.getElementById(`vibeSongs`).innerText=`More Than A Woman - Bee Gees, Heart Of Glass - Blondie, It's Raining Men - The Weather Girls, Brick House - Commodores, September - Earth, Wind, and Fire, I Will Survive - Gloria Gaynor.`;
        document.getElementById(`modal`).style.backgroundImage="url('./images/disco.jpg')";
        document.getElementById(`modal`).style.backgroundSize="cover";
        document.getElementById(`modal-textbox`).style.backgroundColor="rgba(248, 153, 127, 0.9)";
        audioSix.play();
    } 
    
    modal.style.display = `block`;
}
openButton.addEventListener(`click`, openModal)


const closeModal = () => {
    modal.style.display = `none`;
    audio.pause();
    audioTwo.pause();
    audioThree.pause();
    audioFour.pause();
    audioFive.pause();
    audioSix.pause();
}


closeButton.addEventListener(`click`, closeModal)





