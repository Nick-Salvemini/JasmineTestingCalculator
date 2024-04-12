describe('calculateMonthlyPayment tests', function () {
  it('should calculate the monthly rate correctly', function () {
    const values = { amount: 20000, years: 5, rate: 5 };
    expect(calculateMonthlyPayment(values)).toEqual("377.42")
  });

  it("should return a result with 2 decimal places", function () {
    const values = { amount: 10000, years: 4, rate: 5.5 };
    expect(calculateMonthlyPayment(values)).toEqual("232.56")
  });

  it("handles zero interest", function () {
    const values = { amount: 10000, years: 5, rate: 0 };
    expect(calculateMonthlyPayment(values)).toEqual("166.67")
  });
})