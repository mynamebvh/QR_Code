const btn = document.querySelector("input[type=button]");
let i = 0;
// btn.addEventListener('click', () => {
function encode(str) {
  return str.replaceAll(" ", "%20");
}
// });
(function ($) {
  $("button[type=button]").on("click", function () {
    const fullName = encode(document.getElementById("fullname").value);
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const classRoom = document.getElementById("classroom").value;
    const studentCode = document.getElementById("studentcode").value;
    // const data = `192.168.0.102:3000/api/${fullName}_${email}_${phone}_${classRoom}_${studentCode}`;

    const data1 = `http://gaotam.cf/api/?fullname=${fullName}&email=${email}&phone=${phone}&classname=${classRoom}&studentcode=${studentCode}`;
    console.log(data1);
    if (i != 0) {
      $("#qrcode").empty();
    }

    var qrcode = new QRCode(document.getElementById("qrcode"), {
      text: data1,
      width: 200,
      height: 200,
      correctLevel: QRCode.CorrectLevel.H,
    });
    i++;

    setTimeout(() => {
      const urlImg = document
        .querySelector("#qrcode > img")
        .getAttribute("src");

      const urlDown = document
        .querySelector("#download")
        .setAttribute("href", urlImg);
    }, 1);
  });

  $("#download-img").on("click", () => {
    $("#download button").click();
  });
})(jQuery);
