test('Button: Image Diff', async () => {
  // APIs from jest-puppeteer
  await page.goto('http://localhost:3000/iframe.html?id=atoms-button-primary-action--button');
  const image = await page.screenshot();

  // API from jest-image-snapshot
  expect(image).toMatchImageSnapshot();
});
