var object, message, xPos, yPos, objWidth, ball = $("#football"), hat = $("#hat"), books = $("#books"), poster = $("#poster"), laptop = $("#laptop"), towel = $("#towel"), headphones = $("#headphones"), solarsystem = $("#solarsystem"), goback = $("#goback");

TweenMax.to(ball, 10, { repeat: -1, rotation: 360, ease: Power0.easeNone });
TweenMax.to(books, 0.5, { x: "-=20", yoyo: true, repeat: -1 }, { x: "+=20", yoyo: true, repeat: -1, ease: Back.easeOut });
TweenMax.to(hat, 1.5, { x: "-=20", yoyo: true, repeat: -1 }, { x: "+=20", yoyo: true, repeat: -1, ease: Back.easeOut });
TweenMax.to(headphones, 1, { y: "-=30", yoyo: true, repeat: -1 }, { x: "+=10", yoyo: true, repeat: -1, ease: Back.easeOut });
TweenMax.to(laptop, 0.5, { x: "+=10", yoyo: true, repeat: -1 }, { y: "-=10", yoyo: true, repeat: -1, ease: Back.easeOut });
TweenMax.to(towel, 0.5, { y: "+=20", yoyo: true, repeat: -1 }, { x: "-=20", yoyo: true, repeat: -1, ease: Back.easeOut });
TweenMax.to(poster, 1.5, { y: "-=10", yoyo: true, repeat: -1 }, { y: "+=10", yoyo: true, repeat: -1, ease: Back.easeOut });

$('#setting').click(function(event) {

    if ($(event.target).is('#football')) {
        object = ball;
        title = "Football";
        xPos = '15%', yPos = '88%';
        objWidth = '6%';
        scaleFactor = '3';
        message = "I’ve developed a real passion for football the last couple of years. Unlike most who are into the sport, most of my life I wasn't into it - at all. I’ve only really been a fan of football since the World Cup in 2010, after the Dutch squad reached the final.<p><p> I started seeing the game for what it can really be, a tactical game of chess played on a large, green field – another game I actually really like. I like to do both games in my spare time.<p style=\"text-align: center\">Quality: passionate.</p>";
    } else if ($(event.target).is('#hat')) {
        object = hat;
        title = "Anime";
        xPos = '15.5%', yPos = '35%';
        objWidth = '12%';
        scaleFactor = '3';
        message = "<p>This hat is a symbol of one of my favourite anime. It belongs to a fictional but absolute hero of mine, for over a decade now: Monkey D. Luffy. Anime is brilliant because it dares to express the absurd, and usually tells stories that neither film nor books can adequately tell.<p><p> I enjoy watching a good anime series or movie and consider it a hobby that reminds myself that I should stay the way I am, no matter what others might think. If it doesn’t hurt anybody, you should enjoy that which you like.<p><p style=\"text-align: center\">Quality: sincere.</p>";
    } else if ($(event.target).is('#books')) {
        object = books;
        title = "Books";
        xPos = '65%', yPos = '80%';
        objWidth = '11%';
        scaleFactor = '2';
        message = "I love to read. I’ve been reading for years, and almost only fictional literature. My favourite series of books is The Lord of the Rings trilogy, but my favourite book would have to be the first book of the ‘Song of Ice and Fire’ series, on which Game of Thrones is based.<p><p> I prefer reading books in English, as opposed to Dutch, my first language, because I love reading the words like the author had intended them to be. Otherwise it could mean they were translated or misinterpreted.<p style=\"text-align: center\">Quality: thoughtful.</p>";
    } else if ($(event.target).is('#poster')) {
        object = poster;
        title = "Background";
        xPos = '29%', yPos = '30%';
        objWidth = '10%';
        scaleFactor = '1.6';
        message = "<p>Morocco is and will probably always be my favourite vacation destination. I've been there several times and every time it's an amazing time. I've even had the experience of staying the night in the desert, near enough civilization.</p><p>It's the country in which both my parents were born, before theirs chose to migrate when my parents were children themselves; a choice that I'm very thankful for, because even though it's a beautiful country to visit, I'd much rather live right here in the Netherlands.</p><p style=\"text-align: center\">Quality: grateful.</p>";
    } else if ($(event.target).is('#laptop')) {
        object = laptop;
        title = "Computers & IT";
        xPos = '33%', yPos = '84%';
        objWidth = '10%';
        scaleFactor = '3';
        message = "<p>This object is what I use daily. I use it for my IT & Media Design college, but I also use it for plenty of other related things. I love computers and studied IT & Network Management at MBO level, before I graduated.</p><p>I chose to do this college course now, because I wanted to combine both the creativity with which I can work, and my interest and understanding of computers. I see this laptop as the means to which to build my future on, because without it, I couldn’t attend college classes.<p style=\"text-align: center\">Quality: hard working.</p>";
    } else if ($(event.target).is('#towel')) {
        object = towel;
        title = "Fitness";
        xPos = '90%', yPos = '60%';
        objWidth = '13%';
        scaleFactor = '1.7';
        message = "<p>A year ago I started picking up the more intensive sports, such as boxing, running and weightlifting. I wasn’t active all that much before that, but my motivation to turn that around shifted my weekly schedules. I visit the gym at least four times a week now and have the ambition to gain a lot of muscular mass in a year’s time.</p<p> I say this here because I think this represents another quality of mine, something that I draw into my educational aspirations tool: laying out and planning things that I can’t quit on.<p style=\"text-align: center\">Quality: striving.</p>";
    } else if ($(event.target).is('#headphones')) {
        object = headphones;
        title = "Music";
        xPos = '80%', yPos = '90%';
        objWidth = '7%';
        scaleFactor = '3.5';
        message = "<p>Music is very important to me. Every day I listen to a lot of different genres of music. During sports, in the train, or during cram sessions, and at other times. As you could tell from my <a href=\"https://open.spotify.com/user/11120915675/playlist/1vKD6nq5cv3ay8uQYwMTnV\" target=\"_blank\">Spotify</a> playlist if you looked for me, I listen to an extreme variety of music.</p><p>I appreciate that it’s about the sound and not the content (such as lyrics). In that sense I use music as an analogy to disagreeing about something. That language barriers don’t really matter much, because there’s often a lot to draw from either side of how you look at things.</p><p>I think this is one of my strongest qualities: that given the situation that I can adapt myself appropriately and take a look at things differently to how I interpret them initially.</p><p style=\"text-align: center\">Quality: open-minded</p>";
    } else if ($(event.target).is('#solarsystem')) {
        object = solarsystem;
        title = "Passions";
        xPos = '73%', yPos = '7.5%';
        objWidth = '25%';
        scaleFactor = '2';
        message = "This solar system object represents another lifelong passion of mine: space, and all that which relates to it. I think it’s healthy and pretty cool if you have a field of interest into something you don’t practice and never would. That you can surprise people in how multi faceted your interests are.</p>I say this because ever since I was a child, I have been relatively obsessed with space. I’ve learned a lot from studying about it, but appreciate that just because you like doing something specific, doesn’t mean you feel destined to be doing it forever or in favour of what you like to do more.<p style=\"text-align: center\">Quality: inquisitive</p>";
    } else {}

    $("#dialog").html(message);
    $("#title").html(title);

    if (!$(event.target).is($("#room"))) {
        if (!$(event.target).is($("#zouhair"))) {

            TweenMax.to(object, 1, {
                scale: scaleFactor,
                ease: Power1.easeInOut
            }, 2);

            TweenMax.to(object, 1, {
                left: '40%',
                top: '50%',
                xPercent: '-50',
                yPercent: '-50',
                ease: Back.easeOut
            });

            $("#dialogset, #goback").fadeIn("slow", function() {});

            TweenMax.to($("#dialogset"), 1, {
                visibility: 'visible',
                left: '50%',
                top: '50%',
                xPercent: '50',
                yPercent: '20',
                ease: Back.easeOut
            });

            TweenMax.to($("#goback"), 1, {
                visibility: 'visible',
                left: '5%',
                top: '55%',
                xPercent: '20',
                yPercent: '80',
                ease: Back.easeOut
            });

            var theRest = $('#setting').children().not(object).not($("#dialogset")).not($("#goback")).not($("#room"));
            theRest.fadeTo(500, 0, function() {
                $("#dialog").scrollTop(0);
                $(theRest).css("pointer-events", "none");   
            });

            if (!$(event.target).is(object)) {
                TweenMax.to(object, 1, {
                    scale: 1,
                    ease: Power1.easeInOut,
                    width: objWidth,
                    left: xPos,
                    top: yPos,
                });

                $("#dialogset, #goback").fadeOut("slow", function() {
                    TweenMax.to($("#dialogset"), 1, {
                        ease: Back.easeOut
                    });
                });

                theRest.fadeTo(500, 1, function() {
                    $(theRest).css("pointer-events", "auto");
                });
            }
        }
  }
});
