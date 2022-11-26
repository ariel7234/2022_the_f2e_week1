$(function () {
  // let typingText = document.getElementsByClassName("typing");
  // let typingText = ["I’m cool !", "!@#$%..."];
  // for (let i = 0; i < typingText.length; i++) {
  //   let content = typingText[i];
  //   console.log("content " + i + "=" + content);
  //   typing(content);
  // }
});

// function typing(content) {
//   gsap.to(".typing", {
//     text: content, //text屬性將自動為DOM元素嵌入我們所輸入的文字
//     duration: 1.5,
//     scrollTrigger: {
//       trigger: ".typing",
//       toggleActions: "play pause resume reset", //見備註
//     },
//   });
// }

gsap.to(".typing1", {
  text: "I’m cool !", //text屬性將自動為DOM元素嵌入我們所輸入的文字
  duration: 1.5,
  repeat: -1,
  scrollTrigger: {
    trigger: ".typing1",
    toggleActions: "play pause resume reset", //見備註
  },
});

gsap.to(".typing2", {
  text: "!@#$%...", //text屬性將自動為DOM元素嵌入我們所輸入的文字
  duration: 1.5,
  repeat: -1,
  scrollTrigger: {
    trigger: ".typing2",
    toggleActions: "play pause resume reset", //見備註
  },
});

const blockArray = document.querySelector(".ami-block");
gsap.utils.toArray(".animation-wrapper").forEach((element) => {
  if (element.classList.contains("from-bottom")) {
    hide(element);

    ScrollTrigger.create({
      trigger: element,
      trigger: blockArray,
      markers: true,
      onEnter: function () {
        animated(element);
      },
      onEnterBack: function () {
        animated(element);
      },
      onLeave: function () {
        hide(element);
      },
    });
  }
});

gsap.from(".ami-block", { y: 100, opacity: 0, duration: 1, delay: 0.2 });
