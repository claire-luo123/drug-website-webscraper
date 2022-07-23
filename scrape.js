import fetch from 'node-fetch';
import { writeFileSync } from 'fs';

const url = 'https://online.epocrates.com/drugs';

async function scrape() {
    try {
        const resp = await fetch("https://online.epocrates.com/drugs", {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "accept-language": "en-US,en;q=0.9",
    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "cookie": "old_url=\"https://online.epocrates.com/drugs\"; ebi=bEns1El40oftbc; eula=accepted; hu.state=-1_0_-1_-1_-1_-1_-1_-1_-1_-1_-1_-1_-1_-1_-1_-1_0_-1; optimizelyEndUserId=oeu1654395623883r0.35767559532270576; amplitudeSessionId=1654395624502; WebLifeCycle=Launched; __utma=237852126.1797200240.1654395625.1654395625.1654395625.1; __utmc=237852126; __utmz=237852126.1654395625.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); __utmt=1; s_cc=true; amplitudeSessionId=1654395628740; __utmb=237852126.2.10.1654395625; s_sq=epoceolfrontporchcom%2Cepoceolbasic%2Cepoceolbasicqa%2Cepoceolqa%3D%2526pid%253Dhttps%25253A//online.epocrates.com/drugs%2526oid%253Dfunctionun%252528%252529%25257B%25257D%2526oidt%253D2%2526ot%253DDIV; sessionTimer=sessionTimer; stayLoggedIn=false; accessToken=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoicmVmcmVzaCB0b2tlbiIsInVzZXJJZCI6MTA3Mjg5MDksImlhdCI6MTY1NDM5NTgxOCwiZXhwIjoxNjU0NDEzODE4fQ.ThzlyU4v6n8smvpw6uxpY8sdJYkWcTF1UiZkAYMOly-_qZ4qUyFOV8I1rWoVedLvR7QT9m_710aEqyCBID9v0ybp52srWsaNEOGV72ngzMLYHACRcLktNhee0aPR2ZKZW7SAyuKEwjA0u0c1zG3XpRHP9RB127ta9i2C-PI4xe0G21z6CrhwPSiiMEJF2I3LjJJPquqsxYtTyt7WZQHVzEcP-2DF6227hUyW-ByXvR1PDXPxp9escWEarfIO4HM1vBmDkan6Aw5AIttK3sX8011J8KnBsEPMdsGem6_DD6ukqNjZmBLqSwjO6K8o1D7lQjvF9CJFIPVmaCSaIOo10g; refreshToken=df04d3a5f5c4bae9e053da54870a3659; currentUserId=10728909; JSESSIONID=0FC9A887DFC1272C89493B4B4E9E29A7; 10728909.state=-1_a_1_-1_-1_-1_-1_-1_-1_-1_-1_-1_-1_-1_0_-1_a_-1_-1_-1_-1_-1_-1_-1; amplitude_id_3726354470c2395ec5e4f0c447b86f36epocrates.com=eyJkZXZpY2VJZCI6IjIzOWUxNzc5LTQzMDMtNGY5YS1hYjE2LWMwMTgzNWY1MTZhMVIiLCJ1c2VySWQiOiIxMDcyODkwOSIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTY1NDM5NTYyNDc1MSwibGFzdEV2ZW50VGltZSI6MTY1NDM5NTgxODg1NCwiZXZlbnRJZCI6MCwiaWRlbnRpZnlJZCI6NSwic2VxdWVuY2VOdW1iZXIiOjV9; ajs_anonymous_id=%22950e28e8-2963-4efe-aeba-6da41e0743dd%22; ajs_user_id=%2210728909%22; AWSALB=aQJlRPnFDysE+Kj4OpCOyS0oX3lujqWAadkiuwgJZtohotqt176IfNSTDHbe+0u9CogEYX/J9e7vGecAeuwcKoko/PiVo+LIl1UZLOgaWTl1PsB7jTpAnxQUciBg; AWSALBCORS=aQJlRPnFDysE+Kj4OpCOyS0oX3lujqWAadkiuwgJZtohotqt176IfNSTDHbe+0u9CogEYX/J9e7vGecAeuwcKoko/PiVo+LIl1UZLOgaWTl1PsB7jTpAnxQUciBg",
    "Referer": "https://online.epocrates.com/",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": null,
  "method": "GET"
});
        const text = await resp.text();
        writeFileSync('./drugs.html', text, 'utf-8');
    } catch(ex) {
        console.error(ex)
    }
}

scrape();