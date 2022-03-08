describe("", () => {
  beforeEach(function () {
    billAmtInput.value = 100;
    tipAmtInput.value = 20;
  });
  it("should equal a createCurPayment", function () {
    expect(createCurPayment()).toEqual({
      billAmt: "100",
      tipAmt: "20",
      tipPercent: 20,
    });
  });

  it("should append new table", function () {
    expect(appendPaymentTable(createCurPayment())).toEqual(undefined);
  });

  afterEach(function () {
    billAmtInput.value = "";
    tipAmtInput.value = "";
    paymentTbody.innerHTML = [];
  });
});

describe('', function(){

  beforeEach(()=>{
    billAmtInput.value = 100;
    tipAmtInput.value = 5;
    submitPaymentInfo();
    billAmtInput.value = 100;
    tipAmtInput.value = 20;
    submitPaymentInfo();
    let summaryTds = document.querySelectorAll('#summaryTable tbody tr td');
  });

  it('should', ()=>{
    updateSummary();
    expect(summaryTds[0].innerHTML).toEqual('$200');
    expect(summaryTds[1].innerHTML).toEqual('$25');
    expect(summaryTds[2].innerHTML).toEqual('13%');
  });

  afterEach(()=>{
    allPayments = {};
    paymentTbody.innerHTML = [];
    summaryTds[0].innerHTML = "";
    summaryTds[1].innerHTML = "";
    summaryTds[2].innerHTML = "";
  });
});