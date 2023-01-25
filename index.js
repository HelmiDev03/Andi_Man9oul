// Code By Webdevtrick ( https://webdevtrick.com )
(function() {
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
    var data = [{
      "author": "Helmi",
      "quote": "Maghir Mathawel Twali kifi , Tahana Li Kifk 3Morhom Maywaliw Kifi.",
      
      "likes": "1032",
      "has_liked": 0
    }, {
      "author": "Ahmed",
      "quote": "Mat9arench Rohk Bia Andi 39al , Andek Tasa.",
      
      "likes": "4122",
      "has_liked": 0
    }, {
      "author": "Blingos",
      "quote": "فطرو معانا وقت الشدة و كحلت خباو عشاهم",
      
      "likes": "2342",
      "has_liked": 0
    }, 
    {
      "author": "Blingos",
      "quote": "Ya 3ini Ya 3ini, Khalet e denia fi 3ini , 3ali Kifek Rabi i3ini",
      
      
      "likes": "2342",
      "has_liked": 0
    }, 
    {
      "author": "Helmi",
      "quote": "I was at the top , when that shit meant a lot",
      
      
      "likes": "2342",
      "has_liked": 0
    }, 
    {
      "author": "Skih",
      "quote": "Sorry Habit Nhebek Ma Belle , La t5alti Galbi La Well",
      
      
      "likes": "3342",
      "has_liked": 0
    }, 
    {
      "author": "Skih",
      "quote": "Aref Kol Chy Bel Maktoub , Mais Lmaktoub Lioum Bakeni",
      
      
      "likes": "234",
      "has_liked": 0
    }, 
    {
      "author": "Laya",
      "quote": "Rabi Yalem Bech Met3adi, 9adh Men De5l 9albi M3abi ",
      
      
      "likes": "65652",
      "has_liked": 0
    }, 
    {
      "author": "Helmi",
      "quote": "Kont Fcailement Nikek B X Kima Kol Mara , Mais Hani Kahlitk Tkawer",
      
      
      "likes": "42",
      "has_liked": 0
    }, 
    {
      "author": "Blingos",
      "quote": "كان منوصلش تو نحاسب روحي بروحي  تو نقعد نشهد لين تطلع روحي ",
     
      "likes": "3315",
      "has_liked": 0
    }];
  
    var options = {
      imgDomElement: "quote-image",
      quoteDomElement: "quote-text",
      authorDomElement: "quote-author",
      likeDomElement: "quote-likes"
    };
  
    var quoteBrowser = function(data, elements) {
      this.domElements = elements;
      this.quotes = data;
      this.currentQuoteIndex = 0;
      this.bindedElements = {};
      
      this.bindedElements.img = document.getElementById(this.domElements.imgDomElement);
      this.bindedElements.quote = document.getElementById(this.domElements.quoteDomElement);
      this.bindedElements.author = document.getElementById(this.domElements.authorDomElement);
      this.bindedElements.likes = document.getElementById(this.domElements.likeDomElement);    
    };
  
    quoteBrowser.prototype.incrementCurrentQuoteLikes = function() {
      var currentQuote = this.quotes[this.currentQuoteIndex];
  
      if (!currentQuote.has_liked) {
        currentQuote.likes++;
        currentQuote.has_liked = 1;
      } else {
        currentQuote.likes--;
        currentQuote.has_liked = 0;
      }
  
      this.setQuote(currentQuote);
    };
  
    quoteBrowser.prototype.scrollQuote = function(direction) {
      var currentIndex = this.currentQuoteIndex;
  
      if (direction === 'prev') currentIndex--;
      else currentIndex++;
  
      if (currentIndex >= this.quotes.length) currentIndex = 0;
      else if (currentIndex < 0) currentIndex = this.quotes.length - 1;
  
      this.currentQuoteIndex = currentIndex;
  
      this.setQuote(this.quotes[currentIndex]);
    };
  
    quoteBrowser.prototype.init = function() {
      var prevArrow = document.getElementById("move-left")
      var nextArrow = document.getElementById("move-right");
      var likeButton = document.getElementsByClassName("like-wrapper")[0];
  
      var browser = this;
  
      if (prevArrow.addEventListener) {
        prevArrow.addEventListener('click', function() {
          browser.scrollQuote('prev')
        }, false);
  
        nextArrow.addEventListener('click', function() {
          browser.scrollQuote('next')
        }, false);
  
        likeButton.addEventListener('click', function() {
          browser.incrementCurrentQuoteLikes()
        }, false);
      } else if (prevArrow.attachEvent) {
        prevArrow.attachEvent('onclick', function() {
          browser.scrollQuote('prev')
        });
  
        nextArrow.attachEvent('onclick', function() {
          browser.scrollQuote('next')
        });
  
        likeButton.attachEvent('onclick', function() {
          browser.incrementCurrentQuoteLikes()
        });
      }
  
    };
  
    quoteBrowser.prototype.getRandomQuote = function() {
      var random = getRandomInt(0, this.quotes.length - 1);
      this.currentQuoteIndex = random;
  
      return this.quotes[random];
    };
  
    quoteBrowser.prototype.setQuote = function(quoteObj) {
      this.bindedElements.img.src = quoteObj.image;
      this.bindedElements.quote.innerHTML = quoteObj.quote;
      this.bindedElements.author.innerHTML = quoteObj.author;
      this.bindedElements.likes.innerHTML = quoteObj.likes;
      
      var heartDiv = document.getElementsByClassName("heart")[0];
  
      heartDiv.classList.remove("liked");
  
      if (quoteObj.has_liked) heartDiv.classList.add("liked");
    };
  
    document.addEventListener("DOMContentLoaded", function() {
  
      var qb = new quoteBrowser(data, options);
      var randomQuote = qb.getRandomQuote();
  
      qb.setQuote(randomQuote);
      qb.init();
    }, false);
  
  })();