const order_form = document.querySelector(".order-form");
const add_link = document.querySelector(".btn-add-link");
const form = document.querySelector(".form");

let labels = [
  "Ölçü",
  "Rəngi",
  "Miqdar",
  "Promo Kod",
  "Qiymət",
  "Türkiyə daxili kargo",
];
let options = ["Türkiyə", "ABŞ", "Rusiya"];
let priceText = ["Toplam qiymət (0%)", "0.00 TRY"];

add_link.addEventListener("click", createElements);

function createElements(e) {
  e.preventDefault();
  let form,
    row_t,
    row,
    order_number,
    trash_btn,
    trash_icon,
    col4,
    col12,
    col7,
    form_g,
    label,
    input,
    letters,
    randomID,
    dropdown,
    col5,
    select,
    option;
  letters = ["a", "b", "c", "d", "f", "g", "h", "i", "l", "m", "n"];
  randomID = letters[Math.floor(Math.random() * letters.length - 1)].concat(
    String(Math.floor(Math.random() * 100))
  );
  row = document.createElement("div");
  row.classList.add("row", "mt-5");
  form = document.createElement("div");
  form.classList.add("form");
  row_t = document.createElement("div");
  row_t.classList.add("row");
  order_number = document.createElement("p");
  order_number.classList.add("order-number");
  trash_btn = document.createElement("button");
  trash_btn.classList.add("btn-remove-form");
  trash_icon = document.createElement("i");
  trash_icon.classList.add("fa", "fa-trash");
  col5 = document.createElement("div");
  col5.classList.add("col-lg-5", "col-md-5", "col-sm-5");
  col7 = document.createElement("div");
  col7.classList.add("col-lg-7", "col-md-7", "col-sm-7");
  dropdown = document.createElement("div");
  dropdown.classList.add("select-dropdown", "form-group", "on-country");
  select = document.createElement("select");
  select.classList.add(`${randomID.toString()}`);

  for (let i = 0; i < options.length; i++) {
    option = document.createElement("option");
    option.innerText = options[i];
    select.appendChild(option);
  }

  form_g = document.createElement("div");
  form_g.classList.add("form-group");
  label = document.createElement("label");
  label.classList.add("form-label");
  input = document.createElement("input");
  input.classList.add("form-input", "form-control");
  label.innerText = "Linki daxil edin";

  form_g.appendChild(label);
  form_g.appendChild(input);

  dropdown.appendChild(select);
  col5.appendChild(dropdown);
  col7.appendChild(form_g);
  row.appendChild(col5);
  row.appendChild(col7);
  setAnimation(label, input);

  col12 = document.createElement("div");
  col12.classList.add(
    "col-lg-12",
    "d-flex",
    "align-items-center",
    "justify-content-between"
  );
  trash_btn.appendChild(trash_icon);
  col12.appendChild(order_number);
  col12.appendChild(trash_btn);
  row_t.appendChild(col12);
  form.appendChild(row_t);

  for (let i = 0; i < labels.length; i++) {
    col4 = document.createElement("div");
    col4.classList.add("col-lg-4", "col-md-4", "col-sm-4");
    form_g = document.createElement("div");
    form_g.classList.add("form-group");
    label = document.createElement("label");
    label.classList.add("form-label");
    input = document.createElement("input");

    input.classList.add("form-input", "form-control");

    cloneForm(
      form,
      row_t,
      row,
      order_number,
      trash_btn,
      trash_icon,
      col4,
      col12,
      col7,
      form_g,
      label,
      input,
      dropdown,
      col5,
      select,
      option,
      i
    );
  }
  setNumber(order_number, form, e);
  let form_select = new SlimSelect({
    select: `.${randomID}`,
    placeholder: "Ölkəni seçin",
    allowDeselectOption: true,
  });

  /* let buttons = {...trash_btn};

     for (let button of Object.keys[buttons]) {
         let btn = buttons[button];
         console.log(button, btn)
     }*/

  let _row, _col12, _total, _p;

  _row = document.createElement("div");
  _row.classList.add("row");
  _col12 = document.createElement("div");
  _col12.classList.add(
    "col-lg-12",
    "col-12",
    "d-flex",
    "align-items-center",
    "justify-content-sm-end"
  );
  _total = document.createElement("div");
  _total.classList.add("total-price");
  for (let i of priceText) {
    _p = document.createElement("p");
    _p.innerText = i;
    _total.appendChild(_p);
  }
  _col12.appendChild(_total);
  _row.appendChild(_col12);
  form.appendChild(_row);
  trash_btn.onclick = function () {
    form.remove();
  };

  function cloneForm(
    form,
    row_t,
    row,
    order_number,
    trash_btn,
    trash_icon,
    col4,
    col12,
    col7,
    form_g,
    label,
    input,
    dropdown,
    col5,
    select,
    option,
    i
  ) {
    label.setAttribute("for", labels[i]);
    label.innerHTML = labels[i];
    input.setAttribute("id", labels[i]);
    row.appendChild(col4);

    if (i === labels.length - 1) {
      setCol12(row);
    }
    col4.appendChild(form_g);
    form_g.appendChild(label);
    form_g.appendChild(input);
    form.appendChild(row);
    setAnimation(label, input, i);
    order_form.appendChild(form);
  }

  function setAnimation(label, input) {
    input.addEventListener("focus", () => {
      label.classList.add("active");
    });
    input.addEventListener("blur", () => {
      if (input.value === "") {
        label.classList.remove("active");
      } else {
        return "";
      }
    });
  }

  function setNumber(order_number) {
    let num = order_form.childElementCount;
    if (num < 10) {
      order_number.textContent = "0" + num;
    } else {
      order_number.textContent = num;
    }
  }

  function setCol12(row) {
    let col_12 = document.createElement("div");
    col_12.classList.add("col-lg-12");
    let form_g_2 = document.createElement("div");
    form_g_2.classList.add("form-group");
    let input_note = document.createElement("input");
    input_note.classList.add("form-input", "form-control");
    let label_note = document.createElement("label");
    label_note.classList.add("form-label");

    label_note.innerHTML = "Qeyd";

    form_g_2.appendChild(label_note);
    form_g_2.appendChild(input_note);
    col_12.appendChild(form_g_2);
    row.appendChild(col_12);

    setAnimation(label_note, input_note);
  }
}
