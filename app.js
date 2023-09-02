let list = document.querySelector(".buttoninner");
let width = getComputedStyle(document.body).width;
let head = document.querySelector("header");

//
let button = document.querySelector("#icon");

let ulCont = document.querySelector(".ul-cont");
let sec = document.querySelector(".one");
let li = document.querySelectorAll(".buttonLI");
let links = document.querySelectorAll(".headLinks");
window.addEventListener("load", () => {
  if (parseInt(width) < 997) {
    button.addEventListener("click", () => {
      if (button.classList.contains("fa-bars")) {
        button.classList = "fa-solid fa-bars-staggered fa-rotate-180";
        button.style.color = "#c183d0";
        ulCont.style.opacity = "1";
        sec.style.opacity = "0.6";
        //ulCont.style.display = "inline-block";
      } else if (button.classList.contains("fa-bars-staggered")) {
        button.classList = "fa-solid fa-bars";
        button.style.color = "#006393";
        // ulCont.style.display = "none";
        ulCont.style.opacity = "0";
        sec.style.opacity = "1";
      }
      ulCont.style.display = "inline-block";
    });
    button.style.display = "inline-block";
    li.forEach(element => {
      let b = getComputedStyle(element, "(last-child)").borderBottomWidth;
      b = "0px";
    });
  } else {
    head.append(list);
    list.style.cssText =
      "list-style: none;width: 60%;display: flex;margin: 0px;padding: 0px;flex-wrap: wrap;height: 30px;flex-direction: row;justify-content: center;  align-content: center;";
    li.forEach(element => {
      element.style.cssText =
        " display: inline-flex;justify-content: center;font-size: 1em;font-family: cursive;margin: 3px 0px;width: 20%;padding-right: 20px;transition: 0.4s;opacity: 0.8;align-items: center;";
    });
    links.forEach(element => {
      element.style.cssText =
        " text-align: center;    text-decoration: none;  color: black;";
    });

    li.forEach(element => {
      element.style.borderBottom = "0px black solid";
    });
  }
});
///////////////////////////
let des = document.querySelector(".des");
let dev = document.querySelector(".dev");
let it = document.querySelector(".it");
let pro = document.querySelector(".pro");
let a1 = document.querySelector(".knowmore1");
let a2 = document.querySelector(".knowmore2");
let a3 = document.querySelector(".knowmore3");
let a4 = document.querySelector(".knowmore4");
let alllink = [a1, a2, a3, a4];
let all = [des, dev, it, pro];
let num = -1;
let aspect = document.querySelector(".aspect");
//

if (parseInt(width) > 768) {
  all.forEach(element => {
    element.addEventListener("click", () => {
      for (let i = 0; i < all.length; i++) {
        all[i].children[0].style.display = "block";
        alllink[i].style.display = "none";
        all[i].style.cssText =
          "background-color:#251e4c;transform: scale(1,1);transform: rotate(0deg);";
      }

      element.classList.toggle("clicked");
      let n = all.indexOf(element);
      let clickedlink = alllink[n];
      if (element.classList.contains("clicked")) {
        clickedlink.style.display = "flex";
        all[n].style.cssText =
          "background-color:#3a2b88; transform: scale(1.1,1.1);opacity:1;display:flex";
        all[n].children[0].style.display = "none";
      } else {
        clickedlink.style.display = "none";
        all[n].style.cssText =
          "background-color:#251e4c; transform: scale(1,1);display:flex";

        all[n].children[0].style.display = "block";
      }
      clearInterval(run);
    });
  });

  let run = setInterval(() => {
    for (let i = 0; i < all.length; i++) {
      alllink[i].style.display = "none";
      all[i].children[0].style.display = "block";
      all[i].style.cssText =
        "background-color:#251e4c;transform: scale(1,1);transform: rotate(0deg);";
    }
    if (num < 3) {
      if (num > 0) {
        all[num].style.cssText =
          "background-color:#251e4c;transform: scale(1,1);transform: rotate(0deg);";
        alllink[num].style.display = "none";
        all[num].children[0].style.display = "block";
      }
      num++;
      all[num].children[0].style.display = "none";

      alllink[num].style.display = "flex";
      all[num].style.cssText =
        "background-color:#3a2b88; transform: scale(1.1,1.1);opacity:1;";
    } else {
      all[num].children[0].style.display = "none";

      alllink[num].style.display = "none";
      all[num].style.cssText =
        "background-color:#251e4c;transform: scale(1,1);transform: rotate(0deg);";
      num = 0;
      all[num].children[0].style.display = "block";

      alllink[num].style.display = "flex";
      all[num].style.cssText =
        "background-color:#3a2b88; transform: scale(1.1,1.1);opacity:1";
    }
  }, 5000);
}
//dots

let dotCont = document.querySelectorAll(" .dot span");

if (parseInt(width) < 750) {
  let time = 7500;

  let rundots = setInterval(() => {
    if (num < 3) {
      //
      num++;
      for (let i = 0; i < all.length; i++) {
        alllink[i].style.display = "none";
        all[i].style.cssText =
          "background-color:#251e4c;transform: scale(1,1);display:none";
        dotCont[i].style.cssText =
          "width: 10px;height: 10px;background-color: #ea95ff;border-radius: 50%;display: inline-block;";
      }

      all[num].style.cssText =
        "background-color:#251e4c; transform: scale(1,1);opacity:0.8;display:flex";
      setTimeout(() => {
        dotCont[num].style.cssText =
          "background-color:transparent;border:2px solid #ea95ff;width:30%;border-radius:20px";
        all[num].style.cssText =
          "background-color:#3a2b88; transform: scale(1.1,1.1);display:flex;opacity:1";
        alllink[num].style.display = "flex";
      }, 500);
      setTimeout(() => {
        all[num].style.cssText =
          "background-color:#251e4c; transform: scale(1,1);opacity:0.8;display:flex";
        alllink[num].style.display = "none";
        dotCont[num].style.cssText =
          "width: 10px;height: 10px;background-color: #ea95ff;border-radius: 50%;display: inline-block;";
      }, 6000);
      aspect.style.cssText = `grid-template-areas:\"${all[num]
        .classList[0]}\" `;
    } else {
      alllink[num].style.display = "none";
      all[num].style.cssText =
        "background-color:#251e4c;transform: scale(1,1);display:none";
      dotCont[num].style.cssText =
        "width: 10px;height: 10px;background-color: #ea95ff;border-radius: 50%;display: inline-block;";

      //
      num = 0;
      alllink[num].style.display = "flex";
      all[num].style.display = "flex";
      setTimeout(() => {
        dotCont[num].style.cssText =
          "background-color:transparent;border:2px solid #ea95ff;width:30%;border-radius:20px";
        all[num].style.cssText =
          "background-color:#3a2b88; transform: scale(1.1,1.1);display:flex;opacity:1";
        alllink[num].style.display = "flex";
      }, 500);
      setTimeout(() => {
        all[num].style.cssText =
          "background-color:#251e4c; transform: scale(1,1);opacity:0.8;display:flex";
        alllink[num].style.display = "none";
        dotCont[num].style.cssText =
          "width: 10px;height: 10px;background-color: #ea95ff;border-radius: 50%;display: inline-block;";
      }, 6000);
      aspect.style.cssText = `grid-template-areas:\"${all[num]
        .classList[0]}\" `;
    }
  }, time);
}

//

let imgCont = Array.from(document.querySelectorAll(".imgcont .card"));
let count = imgCont.indexOf(document.querySelector(".choosed"));

let choosedimgflip = document.querySelector(".projects .card.choosed");

choosedimgflip.addEventListener("click", () => {
  choosedimgflip.classList.toggle("first");
});
let main = () => {
  for (let i = 0; i < imgCont.length; i++) {
    imgCont[i].classList.remove("choosed");
    imgCont[i].classList.remove("bef-choosed");
    imgCont[i].classList.remove("aft-choosed");
    imgCont[i].classList.remove("first");
  }
  let bef = count - 1;
  if (bef === -1) {
    bef = 8;
  }
  let aft = count + 1;
  if (aft === 9) {
    aft = 0;
  }
  imgCont[bef].classList.add("bef-choosed");
  imgCont[count].classList.add("choosed");
  imgCont[aft].classList.add("aft-choosed");
};
let befbutton = document.querySelector(".bef");
let aftbutton = document.querySelector(".aft");
befbutton.addEventListener("click", () => {
  count--;
  if (count === -1) {
    count = 8;
  }
  main();
  setTimeout(() => {
    let choosedimgflip = document.querySelector(".projects .card.choosed");
    choosedimgflip.addEventListener("click", () => {
      choosedimgflip.classList.toggle("first");
    });
  }, 0);
});
aftbutton.addEventListener("click", () => {
  count++;
  if (count === 9) {
    count = 0;
  }
  main();
  setTimeout(() => {
    let choosedimgflip = document.querySelector(".projects .card.choosed");
    choosedimgflip.addEventListener("click", () => {
      choosedimgflip.classList.toggle("first");
    });
  }, 0);
});
//getting copy rights auto year updater
let date = new Date();
let year = date.getFullYear();
let timeContainer = document.querySelector(".year");
timeContainer.innerHTML = year;
