# tinyurl-rest-wrapper
> a RESTful API wrapper for [TinyURL](https://tinyurl.com/)

TinyURL API, `https://tinyurl.com/api-create.php?url=<url-to-shorten>` will be blocked on a normal fetch() or XMLHttpRequest() command because of [Cross-Origin Resource Sharing (CORS) policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS). This is a RESTful API built on top of the old TinyURL api and will allow you to use TinyURL url shortener using fetch() or XMLHttpRequest() methods.

# Usage
API URL
```
https://tinyurl-rest-wrapper.herokuapp.com/shorten?url=<url-to-shorten>
```
Example usage using fetch()
```javascript
let url = "https://www.google.com"  //url to shorten

fetch(`https://tinyurl-rest-wrapper.herokuapp.com/shorten?url=${encodeURIComponent(url)}`) //encode url using encodeURIComponent() to avoid any possible errors
    .then(response => response.json())
    .then(json => console.log(json))
```

# Using the API for your App?
If you're planning on using this api for your app and expects high usage traffic, please fork this repo and deploy your very own api. This api is deployed using [Heroku](https://www.heroku.com) and is using the free version. The server can only handle minimal concurrent requests and have a very small compute power. [Here's](https://stackabuse.com/deploying-a-flask-application-to-heroku/) a very good tutorial on deploying the wrapper api in Heroku. You can also deploy this on [Google Cloud Platform (GCP)](https://cloud.google.com/), [Microsoft Azure](https://azure.microsoft.com/en-us/), [Amazon Web Services (AWS)](https://aws.amazon.com/), or in your own server.

# License
[MIT](LICENSE)