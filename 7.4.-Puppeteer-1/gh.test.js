let page;

beforeEach(async () => {
  page = await browser.newPage();
  // await page.setDefaultNavigationTimeout(180000);
  jest.setTimeout(30000);
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {

	beforeEach(async () => {
  await page.goto("https://github.com/team");
});

  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('GitHub for teams · Build like the best teams on the planet · GitHub');
  }, 10000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  }, 10000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Get started with Team");
  }, 10000);
});



describe("Github page tests issues", () => {

	beforeEach(async () => {
		await page.goto("https://github.com/features/issues");
});

test("Video button text'", async () => {
		const videoButton = "div.position-absolute.top-0.left-0.width-full.height-full.d-flex.flex-column.flex-justify-center.px-3.events-auto > div > details > summary";
    const firstLink = await page.$eval(videoButton, el => el.textContent);
    expect(firstLink).toContain('Watch video');
  }, 60000);

test("The h1 header content Issues", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('GitHub Issues · Project planning for developers · GitHub');
  }, 60000);
});


describe("Github page tests packages", () => {

	beforeEach(async () => {
		await page.goto("https://github.com/features/packages");
});

test("The h1 header content Packages", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('GitHub Packages: Your packages, at home with their code · GitHub');
  }, 10000);
});


describe("Github page tests pricing", () => {

	beforeEach(async () => {
		await page.goto("https://github.com/pricing");
});

test("The h1 header content Pricing", async () => {
    const firstLink = await page.$("header div div a");
		await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('Pricing · Plans for every developer · GitHub');
}, 20000);
});