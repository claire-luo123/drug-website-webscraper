# drug-website-webscraper
web scraper for medical drugs website to obtain data on side effects of medications

1. clone repository
2. run `npm install`
3. go to [https://online.epocrates.com/drugs login page](https://www.epocrates.com/login)
4. Login with credentials. 
5. View the cookie created in the browser development tools tab.
6. Copy and paste that cookie into scrape.js.
7. run `node scrape.js`
8. scrape.js will create a file called drugs.html, the scraped version of the website.
