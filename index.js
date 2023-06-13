const modal = document.getElementById("modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const consentForm = document.getElementById("consent-form");
const modalText = document.getElementById("modal-text");
const modalInner = document.getElementById("modal-inner");

setTimeout(function () {
  modal.style.display = "inline";
}, 1500);

modalCloseBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

consentForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const consentFormData = new FormData(consentForm);
  const fullName = consentFormData.get("fullName");

  console.log(consentFormData);
  modalText.innerHTML = `<div class="modal-inner-loading">
  <img src="images/loading.svg" class="loading">
  <p id="uploadText">
      Uploading your data to the dark web...
  </p>
</div>`;
  setTimeout(() => {
    document.getElementById("uploadText").innerText = `Make the sale...`;
  }, 1500);

  setTimeout(() => {
    modalInner.innerHTML = `<h2>Thanks <span class="modal-display-name">${fullName}</span>, you sucker! </h2>
    <p>We just sold the rights to your eternal soul.</p>
    <div class="idiot-gif">
        <img src="images/pirate.gif">
    </div>`;
    modalCloseBtn.disabled = false;
  }, 3000);
});
