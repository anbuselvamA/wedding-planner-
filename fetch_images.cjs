const fs = require('fs');
fetch('https://www.justdial.com/Vriddhachalam/Boss-Event-Decorator-Shakti-Nagar/9999P4143-4143-230419204019-A3J8_BZDET/gallery?tab=all&template=2&menu_slider=0&vrsn=3.0&isOpenAbd=undefined&bd=&abd_btn=&ncatid=&cat_b2b_flag=&mncatname=&term=&area=&search=Boss-Event-Decorator-Shakti-Nagar&abd_heading=&dselect=304772089&pselect=304772089&sname=&scat=', {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'
  }
}).then(r => r.text()).then(text => {
  const matches = text.match(/https:\/\/[^"']+\.(?:jpg|jpeg|png)/gi);
  if (matches) {
    const unique = [...new Set(matches)];
    console.log(JSON.stringify(unique.slice(0, 15), null, 2));
  } else {
    console.log("No images found.");
  }
}).catch(console.error);
