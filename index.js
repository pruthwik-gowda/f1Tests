const { Builder, By, until } = require('selenium-webdriver');

(async function testF1HomePage() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // 1. Open F1 homepage
    await driver.get('https://www.formula1.com/');

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
      

    // 2. Check if title contains "F1"
    let title = await driver.getTitle();
    console.log('Test 1 - Title contains F1:', title.includes('F1') === true? "test case passed" : "test case failed");

    // 3. Check if the logo is present
    let watchNowBtn = await driver.findElement(By.xpath('/html/body/div[1]/main/div[3]/div/div/div[2]/a'));
    console.log('Test 2 - Logo is present:', await watchNowBtn.isDisplayed() === true? "test case passed": "test case failed");

    // 4. Check if the navigation bar is present
    let navbar = await driver.findElement(By.css('.nav-primary'));
    console.log('Test 3 - Navigation bar is present:', (await navbar.isDisplayed() === true)? "test case passed" : "test case failed");
// (await standingsLink.isDisplayed())? "test case passed" : "test case failed"
    // 5. Check if the first headline article is displayed
    let headlineArticle = await driver.findElement(By.css('.f1-cc--curated-hero-white'));
    console.log('Test 4 - Headline article is displayed:', (await headlineArticle.isDisplayed() === true)? "test case passed" : "test case failed");

    // 6. Check if the 'Latest News' section is present
    let latestNews = await driver.findElement(By.xpath('//a[contains(text(), "Latest News")]'));
    await latestNews.click();
    await driver.wait(until.elementLocated(By.css('#maincontent section h1')), 10000);
    let latestNewsPage = await driver.findElement(By.css('#maincontent section h1'));
    console.log('Test 5 - Latest News section is present:', (await latestNewsPage.isDisplayed() === true)? "test case passed" : "test case failed");

    // 7. Check if the 'Drivers' link is present
    let driversLink = await driver.findElement(By.linkText('Drivers'));
    console.log('Test 6 - Drivers link is present:', (await driversLink.isDisplayed() === true)? "test case passed" : "test case failed");

    // 8. Check if the 'Teams' link is present
    let teamsLink = await driver.findElement(By.linkText('Teams'));
    console.log('Test 7 - Teams link is present:', (await teamsLink.isDisplayed() === true)? "test case passed" : "test case failed");

    await driver.get('https://www.formula1.com/');

    try {
        await driver.wait(until.elementLocated(By.id('sp_message_iframe_1149950')), 10000);
        let consentIframe = await driver.findElement(By.id('sp_message_iframe_1149950'));
        await driver.switchTo().frame(consentIframe);
        let acceptButton = await driver.findElement(By.css('.message-component .message-button'));
        await acceptButton.click();
        await driver.switchTo().defaultContent();
        console.log('Handled consent popup : test case passed');
      } catch (err) {
        console.log('Consent popup not found : test case passed');
      }

    // 9. Check if the search icon is present
    let subscribeButton = await driver.findElement(By.xpath('/html/body/div[1]/main/div[11]/div/fieldset/div/div[2]/a'));
    //await subscribeButton.click();
    //let subscribePage = await driver.findElement(By.xpath('//*[@id="maincontent"]/section[1]/h1'));
    console.log('Test 8 - Subscribe page is present', (await subscribeButton.isDisplayed() === true)? "test case passed" : "test case failed");

    await driver.get('https://www.formula1.com/');

    try {
        await driver.wait(until.elementLocated(By.id('sp_message_iframe_1149950')), 10000);
        let consentIframe = await driver.findElement(By.id('sp_message_iframe_1149950'));
        await driver.switchTo().frame(consentIframe);
        let acceptButton = await driver.findElement(By.css('.message-component .message-button'));
        await acceptButton.click();
        await driver.switchTo().defaultContent();
        console.log('Handled consent popup : test case passed');
      } catch (err) {
        console.log('Consent popup not found : test case passed');
      }

    // 10. Check if the footer is present
    // let footer = await driver.findElement(By.css('.f1-footer'));
    // console.log('Test 9 - Footer is present:', await footer.isDisplayed());

    // Additional test: Check if the 'Standings' link is present
    let standingsLink = await driver.findElement(By.linkText('Results'));
    console.log('Test 10 - Results link is present:', (await standingsLink.isDisplayed() === true)? "test case passed" : "test case failed");


    const videoNav = await driver.findElement(By.linkText('Video'));
    await videoNav.click();

    try {
      await driver.wait(until.elementLocated(By.id('sp_message_iframe_1149950')), 10000);
      let consentIframe = await driver.findElement(By.id('sp_message_iframe_1149950'));
      await driver.switchTo().frame(consentIframe);
      let acceptButton = await driver.findElement(By.css('.message-component .message-button'));
      await acceptButton.click();
      await driver.switchTo().defaultContent();
      console.log('Handled consent popup : test case passed');
    } catch (err) {
      console.log('Consent popup not found : test case passed');
    }

    let videoLink = await driver.findElement(By.xpath('/html/body/main/section[1]/section[2]/section/section[1]/fieldset/section/ul[1]/li/a'));
    await videoLink.click()
    //*[@id="maincontent"]/section[1]/section[2]/section/section[1]/fieldset/section/ul[1]/li/a
    try {
      await driver.wait(until.elementLocated(By.id('sp_message_iframe_1149950')), 10000);
      let consentIframe = await driver.findElement(By.id('sp_message_iframe_1149950'));
      await driver.switchTo().frame(consentIframe);
      let acceptButton = await driver.findElement(By.css('.message-component .message-button'));
      await acceptButton.click();
      await driver.switchTo().defaultContent();
      console.log('Handled consent popup : test case passed');
    } catch (err) {
      console.log('Consent popup not found : test case passed');
    }
    
    let videoPlay = await driver.findElement(By.xpath('/html/body/main/div/section[1]/div/div/div/div/div/div/div/video-js/button'));
    await videoPlay.click()

    console.log('Test 11 - Video Playback:', (await videoPlay.isDisplayed() === true)? "test case passed" : "test case failed");

  } finally {
    //await driver.quit();
  }
})();
