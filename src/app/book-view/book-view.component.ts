import { Component } from '@angular/core';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent {
  books:any = [
    {
      "title":"Rich Dad Poor Dad",
      "image":"https://m.media-amazon.com/images/I/51u8ZRDCVoL.jpg",
      "description":"It's been nearly 25 years since Robert Kiyosaki's Rich Dad Poor Dad first made waves in the Personal Finance arena.",
      "releasedyear":"11 Apr 2017",
      "price":590,
    },
    {
      "title":"Grandma's Bag of Stories",
      "image":"https://m.media-amazon.com/images/I/81jv44QdNwL.jpg",
      "description":"Who can resist a good story, especially when it's being told by Grandma? From her bag emerges tales of kings and cheats, monk...",
      "releasedyear":"01 Jan 2015",
      "price":150,
    },
    {
      "title":"Actomic Habits",
      "image":"https://m.media-amazon.com/images/I/91bYsX41DVL.jpg",
      "description":"THE PHENOMENAL INTERNATIONAL BESTSELLER - 1 MILLION COPIES SOLDTransform your life with tiny changes in...",
      "releasedyear":"18 Oct 2018",
      "price":551,
    },
    {
      "title":"The Psychology of Money",
      "image":"https://m.media-amazon.com/images/I/41r6F2LRf8L._AC_SY780_.jpg",
      "description":"It's been nearly 25 years since Robert Kiyosaki's Rich Dad Poor Dad first made waves in the Personal Finance arena.",
      "releasedyear":"01 Sep 2020",
      "price":295,
    },
    {
      "title":"The Power of Your Subconscious Mind",
      "image":"https://m.media-amazon.com/images/I/81gTwYAhU7L.jpg",
      "description":"The Power of Your Subconscious Mind is one of the most promising self improvement books that you...",
      "releasedyear":"5 May 2021",
      "price":1198,
    },
    {
      "title":"Ikigai",
      "image":"https://m.media-amazon.com/images/I/81l3rZK4lnL.jpg",
      "description":"Even if we don't know it yet.Ikigai translates as `a reason to live' or `a reason to jump out of bed in the morning'. There, finding your...",
      "releasedyear":"07 Sep 2017",
      "price":391,
    },
    {
      "title":"Magic",
      "image":"https://m.media-amazon.com/images/I/71di2T10K7L.jpg",
      "description":"The magic is real! Remember when you were a child and you believed that life was magical? Well, the magic of life is real, and it's far...",
      "releasedyear":"11 Apr 2017",
      "price":274,
    },
    {
      "title":"7 HABITS OF HIGHLY EFFECTIVE PEOPLE",
      "image":"https://m.media-amazon.com/images/I/817xk9KvJbL.jpg",
      "description":"It's been nearly 25 years since Robert Kiyosaki's Rich Dad Poor Dad first made waves in the Personal Finance arena.",
      "releasedyear":"21 Apr 2020",
      "price":329,
    },
    {
      "title":"Einstein Never Used Flashcards",
      "image":"https://m.media-amazon.com/images/I/71NPtSNlVBL.jpg",
      "description":"In Einstein Never Used Flashcards highly credentialed child psychologists, Kathy Hirsh-Pasek,...",
      "releasedyear":"25 Aug 2004",
      "price":892,
    },
    {
      "title":"It Ends with Us",
      "image":"https://m.media-amazon.com/images/I/81s0B6NYXML.jpg",
      "description":"In this \"brave and heartbreaking novel that digs its claws into you and doesn't let go, long after you've finished it\" (Anna Todd,...",
      "releasedyear":"02 Aug 2016",
      "price":359,
    }
    ,
    {
      "title":"You Can",
      "image":"https://m.media-amazon.com/images/I/813uPMOnskL.jpg",
      "description":"Do you often wonder whether you really have it in you to accomplish your goals, to win over obstacles, and to succeed in life? Through...",
      "releasedyear":"01 Jul 2020",
      "price":90,
    }
    ,
    {
      "title":"Wuthering Heights",
      "image":"https://m.media-amazon.com/images/I/71TjAcMTDML.jpg",
      "description":"“He’s more myself than I am. Whatever our souls are made of, his and mine are the same.” In this epic story of love, envy, betrayal...",
      "releasedyear":"05 Dec. 2013",
      "price":119,
    }
  ]
}