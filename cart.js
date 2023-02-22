let question_box = document.getElementById("box");
let error_message = document.querySelector(".error-message");
let price_box = document.querySelector(".price-box");
let show_factor = document.querySelector(".show-factor");
let finall_price=document.getElementById('finall-price');
let commodity_totall = 0;
let price = 0;


function check() {
  let commodity = document.getElementById("commodity-number").value;
  if (isNaN(commodity))
    error_message.innerText =
      "شما فقط مجاز به وارد کردن اعداد میباشید ؛ لطفا ورودی را کنترل نمایید";
  else if (commodity.trim().length === 0) {
    error_message.innerText = "ورودی نمیتواند خالی باشد";
    error_message.classList.remove("text-warning");
    error_message.classList.add("text-danger");
  } else if(commodity < 5){
    error_message.innerHTML='تعداد کالا نمیتواند کمتر از 5 قلم باشد'
  }
  else {
    commodity_totall=Math.floor(commodity_totall);
    error_message.classList.remove("text-warning");
    error_message.classList.remove("text-danger");
    error_message.innerText = "";
    commodity_totall = Number(
      document.getElementById("commodity-number").value
    );
    question_box.classList.add("hidden");
    setInterval(function(){
      question_box.classList.add('d-none');
    },600)
    price_box.classList.remove('d-none');
    setTimeout(function(){
      price_box.style.opacity = "1";
      price_box.style.transition = "opacity 1s";
    },1000)
  }
}

// calculate price of commodity

let num = 2;
function calc() {
  let price_input_box = document.querySelector("#price-box-input").value;
  let error_alert = document.querySelector(".error-message2");
  if (isNaN(price_input_box)) {
    error_alert.classList.remove("text-danger");
    error_alert.classList.add("text-warning");
    error_alert.innerHTML =
      "مقدار ورودی فقط میتواند شامل اعداد شود ؛ لطفا مقدار ورودی را کنترل نمایید";
  } else if (price_input_box.trim().length === 0) {
    error_alert.innerText = "ورودی نمیتواند خالی باشد";
    error_alert.classList.remove("text-warning");
    error_alert.classList.add("text-danger");
  } else {
    error_alert.innerHTML='';
    let price_notice = document.querySelector("#price-input-notice");
    error_message.classList.remove("text-warning");
    error_message.classList.remove("text-danger");
    if (num <= commodity_totall) {
      price_notice.innerHTML = `لطفا قیمت کالای خریداری شده شماره ${num++} را در باکس زیر وارد کنید و روی دکمه بعدی کلیک نمایید`;
      price += Number(price_input_box);
    } else if (num >= commodity_totall) {
      price_box.classList.add("hidden");
      setTimeout(function () {
        price_box.classList.add("d-none");
      }, 1000);
      setTimeout(function(){
        show_factor.style.opacity = "1";
        show_factor.style.transition = "opacity 1s";
      },1000)
      finall_price.innerHTML=price.toLocaleString() + ' تومان';
    }
  }
  document.getElementById("price-box-input").value = "";
}
