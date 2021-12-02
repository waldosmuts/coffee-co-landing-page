$(".alert__close").click(function (e) {
    e.preventDefault();
    $(".header__alert").slideUp("slow");
});

let featuredProduct = 0;

$(".featured__next").click(function (e) {
    e.preventDefault();
    featuredProduct += 1;
    updateFeaturedProduct();
});

$(".featured__previous").click(function (e) {
    e.preventDefault();
    featuredProduct -= 1;
    updateFeaturedProduct();
});

function updateFeaturedProduct() {
    if (featuredProduct > featuredProducts.length - 1) {
        featuredProduct = 0;
    }
    if (featuredProduct < 0) {
        featuredProduct = featuredProducts.length - 1;
    }
    $(".preview__img").fadeOut("slow");
    $(".featured__content").fadeOut("slow", function () {
        $(".preview__img").attr("src", `${featuredProducts[featuredProduct].img}`);
        $(".content__title").text(`${featuredProducts[featuredProduct].title}`);
        $(".content__text").text(`${featuredProducts[featuredProduct].desc}`);
        $(".preview__img").fadeIn("slow");
        $(".featured__content").fadeIn("slow");
    });
};

const featuredProducts = [
    {
        img: "./src/images/cc-classic-250.svg",
        title: "Classic 250g",
        desc: "A Coffee Co Original, these 100% Arabica whole beans are hand-roasted by our artisans. Best enjoyed as an espresso."
    },
    {
        img: "./src/images/cc-classic-100.svg",
        title: "Classic 100g",
        desc: "A Coffee Co Original, these 100% Arabica whole beans are hand-roasted by our artisans. Best enjoyed as an espresso."
    },
    {
        img: "./src/images/cc-classic-500.svg",
        title: "Classic 500g",
        desc: "A Coffee Co Original, these 100% Arabica whole beans are hand-roasted by our artisans. Best enjoyed as an espresso."
    },
    {
        img: "./src/images/cc-instant.svg",
        title: "Instant Coffee",
        desc: "The same classic Coffee Co taste roasted and grinded for convenience."
    },
    {
        img: "./src/images/cc-decaf.svg",
        title: "Decaf 250g",
        desc: "Decaffeinated and manufactured using a non-chemical gentle carbon dioxide decaffeination process."
    },
];

const aboutDetails = [
    "The best quality coffee starts with premium-grade green beans. Arabica and Robusta are the two main species of coffee trees, and Arabica is by far the superior strain. We source the top 1% of the world’s finest Arabica beans. We work closely with every farmer and co-op to ensure that their methods of soil preservation, harvesting and processing will maximize their crop quality and ensure the sustainability of their environment.",
    "At Coffee.Co we take the artisanal approach towards the craft of coffee: traceability versus non-traceability of crops; handpicked coffee versus mechanised harvesting; hand-roasting versus computerised bulk roasting; and manual versus automated espresso production.",
    "Roasting coffee is a science and an art form. Mixing their honed skill, culinary intuition and an understanding of scientific absolutes, our highly apprenticed roasters guide each roast through well-defined parameters. Careful thought and 20 years of experience have gone into every step of our roast. This extends from the intricacies of the gas burner, how the beans are tossed within the roasting drum, all the way to the cooling system that quickly.",
    "To the untrained eye, making a great cup of coffee may seem simple and pedestrian. This couldn’t be further from the truth. We estimate that there are 100 steps to making a great cappuccino. In the mix are humidity or temperature changes that require our baristas to make incremental adjustments to grind size in order to avoid under or over-extraction. Under-extract and the coffee will taste sour and thin; over-extract and the coffee will taste bitter and heavy. We freshly grind coffee for each order placed. The beans we use are no younger than 1 week and no older than 4 weeks from roasting. Within the first week the taste of the coffee will lack refinement. After the fourth week the coffee can lack sparkle and sweetness."
];

$(".about__card").click(function (e) {
    e.preventDefault();
    $(".about__card").removeClass("about__selected");
    $(this).addClass("about__selected");
    $(".details__text").text(aboutDetails[$(".about__card").index($(this))]);
    if ($(".about__card").index($(this)) === 0) {
        $(".about__details").css("border-radius", "0 15px 15px 15px");
    } else if ($(".about__card").index($(this)) === 3) {
        $(".about__details").css("border-radius", "15px 0 15px 15px");
    } else {
        $(".about__details").css("border-radius", "15px");
    }
});