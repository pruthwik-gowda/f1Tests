const { Builder, By, until } = require('selenium-webdriver');

async function signIn() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // Navigate to the website
    await driver.get("https://www.formula1.com/");
    await driver.manage().window().setRect({ width: 1372, height: 723 });

    // Wait for the consent iframe to appear and switch to it
    try {
        await driver.wait(until.elementLocated(By.id('sp_message_iframe_1149950')), 10000);
        let consentIframe = await driver.findElement(By.id('sp_message_iframe_1149950'));
        await driver.switchTo().frame(consentIframe);
        let acceptButton = await driver.findElement(By.css('.message-component .message-button'));
        await acceptButton.click();
        await driver.switchTo().defaultContent();
        console.log('Handled consent popup');
      } catch (err) {
        console.log('Consent popup not found');
      }
    
    // Switch back to the main content
    await driver.switchTo().defaultContent();
    
    // Wait until the login link is present and visible
    let loginLink = await driver.wait(until.elementLocated(By.css(".login-link > .user-icon-text")), 10000);
    await driver.wait(until.elementIsVisible(loginLink), 10000);
    
    // Click the login link
    await loginLink.click();

    try {
        await driver.wait(until.elementLocated(By.id('sp_message_iframe_1149950')), 10000);
        let consentIframe = await driver.findElement(By.id('sp_message_iframe_1149950'));
        await driver.switchTo().frame(consentIframe);
        let acceptButton = await driver.findElement(By.css('.message-component .message-button'));
        await acceptButton.click();
        await driver.switchTo().defaultContent();
        console.log('Handled consent popup');
      } catch (err) {
        console.log('Consent popup not found');
      }

    // Wait for the login form to be displayed
    await driver.wait(until.elementLocated(By.name("Login")), 10000);

    // Enter login details
    let loginField = await driver.findElement(By.name("Login"));
    await loginField.click();

    

    await loginField.sendKeys("pruthwikgowdaa@gmail.com");

    let passwordField = await driver.findElement(By.name("Password"));
    await passwordField.click();
    await passwordField.sendKeys("Jughead@786");

    // Click the login button
    let loginButton = await driver.findElement(By.css("#loginform .btn"));
    
    await loginButton.click();

    let errorMessage = await driver.findElement(By.xpath('//*[@id="loginform"]/div[1]/span'));
    if(errorMessage){
        console.log('Error message showed up')
        console.log('Test 11 - Sign in failed')
    }
    else console.log("logged in")
  } catch (err) {
    console.error('Error during sign-in:', err);
  } finally {
    //Quit the driver
    await driver.quit();
  }
}

// Execute the function
signIn();
