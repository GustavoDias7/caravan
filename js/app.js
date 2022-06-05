function setInfoPlans() {
  const planName = document.querySelector("#planName");
  if (!Boolean(planName)) return;

  const badgePlan = document.querySelector("#badge");
  const daysPlan = document.querySelector("#days");
  const destinationsPlan = document.querySelector("#destinations");
  const pricePlan = document.querySelector("#price");

  const url = new URL(window.location);
  const params = new URLSearchParams(url.search);
  const planType = params.get("plano");

  if (planType === "platinum") {
    planName.innerText = "Platinum";
    daysPlan.innerText = "60";
    destinationsPlan.innerText = "6";
    pricePlan.innerText = "R$7.500";
  } else {
    planName.innerText = "Cold";
    daysPlan.innerText = "30";
    destinationsPlan.innerText = "3";
    pricePlan.innerText = "R$5.000";
    badgePlan.classList.add("d-none");
  }
}
setInfoPlans();
