const lenis = new Lenis({
  autoRaf: true,
});

lenis.on("scroll", (e) => {
  console.log(e);
});

function autoMaticTypeJs() {
  var typed = new Typed(".main-span ", {
    typeSpeed: 100,
    strings: ["DeveloPer", "Designer"],
    stringsElement: null,
    typeSpeed: 100,
    loop: true,
    loopCount: 100,
    showCursor: true,
    attr: null,
    contentType: "html",
    callback: function () {},
    preStringTyped: function () {},
    onStringTyped: function () {},
    resetCallback: function () {},
  });
}
autoMaticTypeJs();

function scrollBtnTopAnima() {
  window.onscroll = function () {
    ScrollTop();
  };
  function ScrollTop() {
    var scrollTopBtn = document.getElementById("ScrollTopBtn");
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      scrollTopBtn.style.top = "90%";
    } else {
      scrollTopBtn.style.top = "-100%";
    }
  }
}
scrollBtnTopAnima();
function dropdowonSmallScreen() {
  var offcanvasdropdownicon = document.querySelectorAll(
    ".offcanvas-dropdown-icon"
  );
  var offcanvasdropdownbox = document.querySelectorAll(
    ".offcanvas-dropdown-box"
  );
  offcanvasdropdownicon.forEach(function (icon, index) {
    icon.addEventListener("click", function () {
      this.classList.toggle("offcanvasdropdowniconactive");
      offcanvasdropdownbox[index].style.display = this.classList.contains(
        "offcanvasdropdowniconactive"
      )
        ? "flex"
        : "none";
    });
  });
}
dropdowonSmallScreen();

function mouseMoveAnima() {
  var mouseCursorName = document.querySelector(".mouse-cursor-name");
  document.addEventListener("mouseenter", function () {
    gsap.to(mouseCursorName, {
      scale: 1,
      opacity: 1,
    });
  });
  document.addEventListener("mouseleave", function () {
    gsap.to(mouseCursorName, {
      scale: 0,
      opacity: 0,
    });
  });
  document.addEventListener("mousemove", function (dets) {
    gsap.to(mouseCursorName, {
      left: dets.x - 70,
      top: dets.y - 80,
    });
  });
}
mouseMoveAnima();

function conTactBtn() {
  var conTactNameInput = document.querySelector("contact-name-input");
  var conTactEmailInput = document.querySelector(".contact-email-input");
  var conTactMassegeInput = document.querySelector(".contact-textarea");
  var conTactSubmitBtnPara = document.querySelector(".contact-submit-btn-para");
  var contactSubmitBtn = document.querySelector(".contact-submit-btn");
  contactSubmitBtn.addEventListener("click", function () {
    if ((conTactNameInput = " ")) {
      gsap.to(conTactSubmitBtnPara, {
        opacity: 1,
        scale: 1,
      });
    } else if ((conTactEmailInput = " ")) {
      gsap.to(conTactSubmitBtnPara, {
        opacity: 1,
        scale: 1,
      });
    } else if ((conTactMassegeInput = " ")) {
      gsap.to(conTactSubmitBtnPara, {
        opacity: 1,
        scale: 1,
      });
    } else {
      gsap.to(conTactSubmitBtnPara, {
        opacity: 0,
        scale: 0,
      });
    }
  });
}
conTactBtn();
function mainAnima() {
  var ReloadBgLeft = document.querySelector("#ReloadBgLeft");
  var ReloadBgRight = document.querySelector("#ReloadBgRight");
  gsap.to(ReloadBgLeft, {
    left: "-50%",
    duration: 1,
    ease: Expo.easeInOut,
  });
  gsap.to(ReloadBgRight, {
    right: "-50%",
    duration: 1,
    ease: Expo.easeInOut,
  });
}
mainAnima();

function porTfolioBtns() {
  var portfolioBtns = document.querySelectorAll(".portfolio-btn");

  portfolioBtns.forEach((portfolioBtnsnactive) => {
    portfolioBtnsnactive.addEventListener("click", function () {
      document
        .querySelector(".portfoliobtnactive")
        ?.classList.remove("portfoliobtnactive");

      portfolioBtnsnactive.classList.add("portfoliobtnactive");
    });
  });

  // var allPhotographyDesignimg = document.querySelector(
  //   "#AllPhotographyDesignImg"
  // );
  // var allPhotographyMarketingimg = document.querySelector(
  //   "#AllPhotographyMarketingImg"
  // );
  // var allMarketingDesignimg = document.querySelector("#AllMarketingDesignImg");
  // var allPortfolioImg = document.querySelector(".portfolio-card-img");

  // var porTfolioBtn1 = document.getElementById("PortfolioBtn1");
  // var porTfolioBtn2 = document.getElementById("PortfolioBtn2");
  // var porTfolioBtn3 = document.getElementById("PortfolioBtn3");
  // var porTfolioBtn4 = document.getElementById("PortfolioBtn4");

  // var allPhotographyimg = document.querySelectorAll("#AllPhotographyImg");

  // for (var i = 0; i < allPhotographyimg.length; i++) {
  //   console.log(allPhotographyimg[i]);
  //   porTfolioBtn2.addEventListener("click", () => {
  //     allPhotographyimg[i].style.display = "none";
  //   });
  // }
}
porTfolioBtns();

const date = new Date();
document.querySelector(
  "#copyright"
).innerHTML = `Professional Portfolio © ${date.getFullYear()} Designed by HzF__Designer`;
