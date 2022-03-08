describe("", () => {
  beforeEach(function () {
    billAmtInput.value = 100;
    tipAmtInput.value = 5;
    submitPaymentInfo();
    billAmtInput.value = 100;
    tipAmtInput.value = 20;
    submitPaymentInfo();
    let summaryTds = document.querySelectorAll('#summaryTable tbody tr td');
  });

  it("should calculate the tip percent", function () {
    expect(
      calculateTipPercent(sumPaymentTotal("billAmt"), sumPaymentTotal("tipAmt"))
    ).toEqual(13);

    expect(sumPaymentTotal("billAmt")).toEqual(200);
    expect(sumPaymentTotal("tipAmt")).toEqual(25);
  });

  afterEach(function () {
    allPayments = {};
    document.querySelector("tbody").innerHTML = [];
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
  });
});



describe("", () => {
  beforeEach(function () {
    let paymentTbody = document.querySelector("#paymentTable tbody");

    let tempTr = document.createElement("tr");

    tempTr.id = "paymentTemp";

    appendTd(tempTr, 100);

    paymentTbody.append(tempTr);

    let summaryTds = document.querySelectorAll('#summaryTable tbody tr td');

  });

  it("should append tr", function () {
    expect(
      document.getElementById("paymentTemp").getElementsByTagName("td").length
    ).toEqual(1);
  });
  afterEach(function () {
    paymentTbody.innerHTML = [];
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
  });
});

