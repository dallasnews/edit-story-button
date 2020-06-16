# Installation

❶ Make sure you're using a compatible browser

## Compatible Browsers

👍 Current versions of Chrome or Firefox are **supported**

🤷🏻‍ Other modern browsers **may** work but have not been tested

❌ Older browsers like Internet Explorer **will not** work

## Adding the Bookmark

❷ Create an "Edit Story" bookmark and set the location (URL) to this script

```
javascript:(()=%3E%7Bconst%20o=%22https://sandbox.dmn.arcpublishing.com/composer/#!%22,n=%22https://dmn.arcpublishing.com/composer/#!%22,i=%5B%7Bdomain:/localhost(:%5Cd+)?$/,editor:o%7D,%7Bdomain:/local.*dallasnews.com(:%5Cd+)?$/,editor:o%7D,%7Bdomain:/dmndev.dmn.arcpublishing.com$/,editor:%22https://dmndev.dmn.arcpublishing.com/composer/#!%22%7D,%7Bdomain:/dev.dmn.arcpublishing.com$/,editor:o%7D,%7Bdomain:/sandbox.dmn.arcpublishing.com$/,editor:o%7D,%7Bdomain:/staging.dallasnews.com$/,editor:o%7D,%7Bdomain:/%5Edmn.arcpublishing.com$/,editor:n%7D,%7Bdomain:/%5E(www%5C.)?dallasnews.com$/,editor:n%7D%5D.find((%7Bdomain:o%7D)=%3Elocation.hostname.match(o)),d=i?i.editor:n,%7BglobalContent:a=%7B%7D%7D=window.Fusion%7C%7C%7B%7D,t=%22story%22===a.type&&a._id;if(t&&(i%7C%7Cconfirm(%22Unknown%20site%20-%20try%20to%20open%20editor%20anyway?%22)))return%20open(%60$%7Bd%7D/edit/$%7Bt%7D/%60);!t&&alert(%22Sorry,%20this%20doesn't%20look%20like%20a%20story%20page%22)%7D)();
```

<a onClick="event.preventDefault(); navigator.clipboard.writeText(document.querySelector('code').innerText); event.target.innerText='CODE COPIED!'; setTimeout(() => event.target.innerText='COPY CODE TO CLIPBOARD', 2000)" href="#">COPY CODE TO CLIPBOARD</a>

❸ _(There is no step 3)_

---

[View bookmarklet source code on GitHub](https://github.com/dallasnews/edit-story-button)
