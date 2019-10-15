test('DailyForecast: Image Diff', async () => {
  // APIs from jest-puppeteer
  await page.goto('http://localhost:3000/iframe.html?id=organisms-modules-dailyforecast--default');
  await page.setViewport({width: 375, height: 667});
  const image = await page.screenshot({fullPage: true});

  // API from jest-image-snapshot
  expect(image).toMatchImageSnapshot();
});