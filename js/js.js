$(document).ready(function(){
    $(".parts").hide();
    $(".feet").hide();
    $(".Legs").hide();
    $(".ChestShoulderArms").hide();
    $(".Bauch").hide();
    $(".Rücken").hide();

    $("#start").click(function(){
        $("#start").fadeOut(300);
        $(".parts").fadeIn()
    });

    var cikle = 0;
    var words = " S ST STA STAR START O OH OHN OHNE K KA KAM KAMP KAMPF K KE KEI KEIN P PR PRE PREI PREIS";
    var splitWords = words.split(" ");
    function done(){var done = " D DO DON DONE";splitWords = done.split(" ")}
    
    anim();
    function anim(){
        $("#start").html(splitWords[cikle]);
        $("title").html(splitWords[cikle]);
        if(cikle >= splitWords.length){
            cikle = 0;
        }
        cikle++;
        setTimeout(function(){ anim(); }, 400);
    }
    
    var anzahlFeet = 4;
    $(".klick-hide-feet").click(function(){
        $(this).fadeOut(200);
        anzahlFeet--;
        hideParent();
    });

    var anzahlLegs = 4;
    $(".klick-hide-legs").click(function(){
        $(this).fadeOut(200);
        anzahlLegs--;
        hideParent();
    });

    var anzahlChest = 4;
    $(".klick-hide-chest").click(function(){
        $(this).fadeOut(200);
        anzahlChest--;
        hideParent();
    });

    var anzahlBauch = 4;
    $(".klick-hide-bauch").click(function(){
        $(this).fadeOut(200);
        anzahlBauch--;
        hideParent();
    });

    var anzahlRuecken = 3;
    $(".klick-hide-ruecken").click(function(){
        $(this).fadeOut(200);
        anzahlRuecken--;
        hideParent();
    });


    // Parts Toggle
    $("#feet-toggle").click(function(){
        $(".feet").fadeToggle(200);
        $("html, body").animate({ scrollTop: $('#feet-toggle').offset().top }, 300);
    });
    $("#Legs-toggle").click(function(){
        $(".Legs").fadeToggle(200);
        $("html, body").animate({ scrollTop: $('#Legs-toggle').offset().top }, 300);
    });
    $("#ChestShoulderArms-toggle").click(function(){
        $(".ChestShoulderArms").fadeToggle(200);
        $("html, body").animate({ scrollTop: $('#ChestShoulderArms-toggle').offset().top }, 300);
    });
    $("#Bauch-toggle").click(function(){
        $(".Bauch").fadeToggle(200);
        $("html, body").animate({ scrollTop: $('#Bauch-toggle').offset().top }, 300);
    });
    $("#Rücken-toggle").click(function(){
        $(".Rücken").fadeToggle(200);
        $("html, body").animate({ scrollTop: $('#Rücken-toggle').offset().top }, 300);
    });

    function hideParent(){
        if (anzahlFeet <= 0){$("#feet-toggle").hide();}
        if (anzahlLegs <= 0){$("#Legs-toggle").hide();}
        if (anzahlChest <= 0){$("#ChestShoulderArms-toggle").hide();}
        if (anzahlBauch <= 0){$("#Bauch-toggle").hide();}
        if (anzahlRuecken <= 0){$("#Rücken-toggle").hide();}
        if(anzahlFeet <= 0 && anzahlLegs <= 0 && anzahlChest <= 0 && anzahlBauch <= 0 && anzahlRuecken <= 0){
            $("#start").fadeIn(300);
            $(".parts").fadeOut();
            done();
        }
    }

});