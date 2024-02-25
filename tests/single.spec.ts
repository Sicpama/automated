import { test, expect, Browser } from "@playwright/test";

test(`Dynamic test for iteration`, async ({ browser }) => {
  // Extract browser from the test context
  test.setTimeout(60000);
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto(
    "https://order-staging.sicpama.com/food-courts/63249aed-d08c-11ee-bebe-0225ed49ca70"
  );
  await page.waitForTimeout(4000);
  await page.goto("https://order-staging.sicpama.com/auth");
  await page.waitForTimeout(4000);
  await page.getByText("Continue as Guest").click(); // Correct usage of click with text selector
  await page.waitForTimeout(1000);
  await page.waitForURL("https://order-staging.sicpama.com/menus");
  await page.waitForTimeout(1000);
  await page.locator("#quick_add_menu_50361").getByRole("img").click();
  await page.getByText("차돌짬뽕밥");
  await page.waitForTimeout(2000);
  await page.getByRole("button", { name: "Order" }).click(); // Correct usage of click with role selector
  await page.waitForTimeout(1000);
  await page.waitForURL("https://order-staging.sicpama.com/tab");
  await page.waitForTimeout(1000);
  await page.click('role=button[name="Payment Option"]'); // Correct usage of role selector
  await page.waitForTimeout(1000);
  await page.getByText("Pay Mine").click(); // Correct usage of click with text selector
  await page.waitForTimeout(1500);
  await page.getByText("Checkout").click(); // Correct usage of click with text selector
  await page.waitForTimeout(1000);
  await page.waitForURL("https://order-staging.sicpama.com/payment");
  await page.waitForTimeout(2000);
  await page.getByRole("radio", { name: "pay_in_store" }).click(); // Correct usage of click with role selector
  await page.waitForTimeout(1000);
  await page.getByRole("button", { name: "Place an Order" }).click(); // Correct usage of click with role selector
  await page.waitForTimeout(1000);
  await page.getByRole("button", { name: "Add New Order" }).click();
  await context.close();
});
