function footerAccordion(){$(window).width()>767?$('[id^="collapse"]').addClass("in"):$('[id^="collapse"]').removeClass("in")}footerAccordion(),$(window).on("resize",function(){footerAccordion()});