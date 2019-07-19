# Installation

❶ Make sure you're using a compatible browser

## Compatible Browsers

👍 Current versions of Chrome or Firefox are **supported**

🤷🏻‍ Other modern browsers **may** work but have not been tested

❌ Older browsers like Internet Explorer **will not** work

## Adding the Bookmark

❷ Create an "Edit Story" bookmark and set the location (URL) to this script

```
javascript:(()=%3E%7Bconst%20e=()=%3Econfirm(%22Unknown%20site%20-%20try%20to%20open%20editor%20anyway?%22),o=location.hostname.match(/(aldiadallas.com%7Cdallasnews.com)$/),%7BglobalContent:t=%7B%7D%7D=window.Fusion%7C%7C%7B%7D,n=%22story%22===t.type&&t._id;if(n&&(o%7C%7Ce()))return%20open(%60https://dmn.arcpublishing.com/ellipsis/#!/edit/$%7Bn%7D/%60);const%20i=document.querySelectorAll('%5Btype$=%22ld+json%22%5D'),r=Array.from(i).find(e=%3Ee.innerText.includes(%22NewsArticle%22)),l=r&&JSON.parse(r.innerText).post_id,%7BarticleId:s=l%7D=window.DFP_adTargets%7C%7C%7B%7D;if(s&&(o%7C%7Ce()))return%20open(%60http://serif.dallasnews.com/chronicle/storyteller/compose.html?_id=$%7Bs%7D%60);(()=%3Ealert(%22Sorry,%20this%20doesn't%20look%20like%20a%20story%20page%22))()%7D)();
```

<a onClick="event.preventDefault(); navigator.clipboard.writeText(document.querySelector('code').innerText); event.target.innerText='CODE COPIED!'; setTimeout(() => event.target.innerText='COPY CODE TO CLIPBOARD', 2000)" href="#">COPY CODE TO CLIPBOARD</a>

❸ *(There is no step 3)*
