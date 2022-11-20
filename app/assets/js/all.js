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

gsap.from(".ami-block", { y: 100, opacity: 0, duration: 1, delay: 1 });
