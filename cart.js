let question_box = document.getElementById("box");
let error_message = document.querySelector(".error-message");
let price_box = document.querySelector(".price-box");
let show_factor = document.querySelector(".show-factor");
let finall_price=document.getElementById('finall-price');
let commodity_totall = 0;
let price = 0;

// Check the first section to make sure it is not empty or IsNaN
function check() {
  // Get input Value
  let commodity = document.getElementById("commodity-number").value;
  // Check the Input is IsNaN or Not ( the input should contains Only Numbers )
  if (isNaN(commodity))
    error_message.innerText =
      "شما فقط مجاز به وارد کردن اعداد میباشید ؛ لطفا ورودی را کنترل نمایید";
  // Check The Input Is Empty Or Not
  else if (commodity.trim().length === 0) {
    error_message.innerText = "ورودی نمیتواند خالی باشد";
    error_message.classList.remove("text-warning");
    error_message.classList.add("text-danger");
  }
  // Check The Goods Count can not less than 5
  else if(commodity < 5){
    error_message.innerHTML='تعداد کالا نمیتواند کمتر از 5 قلم باشد'
  }
  // if the input valid
  else {
    commodity_totall=Math.floor(commodity_totall);
    error_message.classList.remove("text-warning");
    error_message.classList.remove("text-danger");
    error_message.innerText = "";
    // Convert Number of Goods To Number DataType
    commodity_totall = Number(
      document.getElementById("commodity-number").value
    );
    // Hide first box ( Ask Goods Count)
    question_box.classList.add("hidden");
    // Add display None to Replace Next Box
    setInterval(function(){
      question_box.classList.add('d-none');
    },600)
    // Remove Display none from price calculator box
    price_box.classList.remove('d-none');
    // Show The calculator Box With transition
    setTimeout(function(){
      price_box.style.opacity = "1";
      price_box.style.transition = "opacity 1s";
    },1000)
  }
}

// calculate price of commodity

let num = 1;
function calc() {
  // Get Input Price Value
  let price_input_box = document.querySelector("#price-box-input").value;
  // Get Error Tag in Js file
  let error_alert = document.querySelector(".error-message2");
  // check the input is only number
  if (isNaN(price_input_box)) {
    error_alert.classList.remove("text-danger");
    error_alert.classList.add("text-warning");
    error_alert.innerHTML =
      "مقدار ورودی فقط میتواند شامل اعداد شود ؛ لطفا مقدار ورودی را کنترل نمایید";
  }
  // Check The Input Is Not Empty
  else if (price_input_box.trim().length === 0) {
    error_alert.innerText = "ورودی نمیتواند خالی باشد";
    error_alert.classList.remove("text-warning");
    error_alert.classList.add("text-danger");
  } else {
    error_alert.innerHTML='';
    let price_notice = document.querySelector("#price-input-notice");
    error_message.classList.remove("text-warning");
    error_message.classList.remove("text-danger");
    // Check The Goods Counter should Not more than the number more than goods counts that user entered !
    if (num <= commodity_totall) {
      price_notice.innerHTML = `لطفا قیمت کالای خریداری شده شماره ${num++} را در باکس زیر وارد کنید و روی دکمه بعدی کلیک نمایید`;
      // Add price to global variable defined on the top of document
      price += Number(price_input_box);
    } 
    // When the counter equals the number of goods entered by the user , the price calculator box will be hidden
    else if (num >= commodity_totall) {
      // Hide The calculator box with transition
      price_box.classList.add("hidden");
      // Add display none after 1s to replace The Factor Box
      setTimeout(function () {
        price_box.classList.add("d-none");
      }, 1000);
      // show Factor Box with transition
      setTimeout(function(){
        show_factor.style.opacity = "1";
        show_factor.style.transition = "opacity 1s";
      },1000)
      // It separates numbers by three digits
      finall_price.innerHTML=price.toLocaleString() + ' تومان';
    }
  }
  // clear input after user clicked Next button
  document.getElementById("price-box-input").value = "";
}
