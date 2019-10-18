test('DailyForecast: Mobile Image Diff', async () => {
  // APIs from jest-puppeteer
  await page.goto('http://localhost:3000/iframe.html?id=organisms-modules-dailyforecast--default');
  await page.setViewport({width: 375, height: 667});
  const image = await page.screenshot({fullPage: true});

  // API from jest-image-snapshot
  expect(image).toMatchImageSnapshot();
});

test('DailyForecast: Tablet Image Diff', async () => {
  // APIs from jest-puppeteer
  await page.goto('http://localhost:3000/iframe.html?id=organisms-modules-dailyforecast--default');
  await page.setViewport({width: 600, height: 800});
  const image = await page.screenshot({fullPage: true});

  // API from jest-image-snapshot
  expect(image).toMatchImageSnapshot();
});

test('DailyForecast: Desktop Image Diff', async () => {
  // APIs from jest-puppeteer
  await page.goto('http://localhost:3000/iframe.html?id=organisms-modules-dailyforecast--default');
  await page.setViewport({width: 1024, height: 768});
  const image = await page.screenshot({fullPage: true});

  // API from jest-image-snapshot
  expect(image).toMatchImageSnapshot();
});