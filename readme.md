# Installation

Create a bookmark in your browser and set the URL to this script

```
javascript:(()=%3E%7Bconst%20e=()=%3Econfirm(%22Unknown%20site%20-%20try%20to%20open%20editor%20anyway?%22),o=location.hostname.match(/(aldiadallas.com%7Cdallasnews.com)$/),%7BglobalContent:t=%7B%7D%7D=window.Fusion%7C%7C%7B%7D,n=%22story%22===t.type&&t._id;if(n&&(o%7C%7Ce()))return%20open(%60https://dmn.arcpublishing.com/ellipsis/#!/edit/$%7Bn%7D/%60);const%20i=document.querySelectorAll('%5Btype$=%22ld+json%22%5D'),r=Array.from(i).find(e=%3Ee.innerText.includes(%22NewsArticle%22)),l=r&&JSON.parse(r.innerText).post_id,%7BarticleId:s=l%7D=window.DFP_adTargets%7C%7C%7B%7D;if(s&&(o%7C%7Ce()))return%20open(%60http://serif.dallasnews.com/chronicle/storyteller/compose.html?_id=$%7Bs%7D%60);(()=%3Ealert(%22Sorry,%20this%20doesn't%20look%20like%20a%20story%20page%22))()%7D)();
```

[COPY CODE TO CLIPBOARD](javascript:navigator.clipboard.writeText(document.querySelector('code').innerText);document.querySelector('a[href^=javascript]').innerText='COPIED!';setTimeout(()=>document.querySelector('a[href^=javascript]').innerText='COPY%20CODE%20TO%20CLIPBOARD',2000))

Now any time you're on a story page, click the bookmarklet to edit!
