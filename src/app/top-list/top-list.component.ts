import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-list',
  templateUrl: './top-list.component.html',
  styleUrls: ['./top-list.component.css']
})
export class TopListComponent implements OnInit {

  topMovies = [
    {
      "vote_count": 4329,
      "id": 211672,
      "video": false,
      "vote_average": 6.4,
      "title": "Minions",
      "popularity": 905.203726,
      "poster_path": "/q0R4crx2SehcEEQEkYObktdeFy.jpg",
      "original_language": "en",
      "original_title": "Minions",
      "genre_ids": [
        10751,
        16,
        12,
        35
      ],
      "backdrop_path": "/uX7LXnsC7bZJZjn048UCOwkPXWJ.jpg",
      "adult": false,
      "overview": "Minions Stuart, Kevin and Bob are recruited by Scarlet Overkill, a super-villain who, alongside her inventor husband Herb, hatches a plot to take over the world.",
      "release_date": "2015-06-17"
    },
    {
      "vote_count": 5008,
      "id": 321612,
      "video": false,
      "vote_average": 6.8,
      "title": "Beauty and the Beast",
      "popularity": 459.679098,
      "poster_path": "/tWqifoYuwLETmmasnGHO7xBjEtt.jpg",
      "original_language": "en",
      "original_title": "Beauty and the Beast",
      "genre_ids": [
        10751,
        14,
        10749
      ],
      "backdrop_path": "/6aUWe0GSl69wMTSWWexsorMIvwU.jpg",
      "adult": false,
      "overview": "A live-action adaptation of Disney's version of the classic 'Beauty and the Beast' tale of a cursed prince and a beautiful young woman who helps him break the spell.",
      "release_date": "2017-03-16"
    },
    {
      "vote_count": 641,
      "id": 396422,
      "video": false,
      "vote_average": 6.5,
      "title": "Annabelle: Creation",
      "popularity": 374.244615,
      "poster_path": "/tb86j8jVCVsdZnzf8I6cIi65IeM.jpg",
      "original_language": "en",
      "original_title": "Annabelle: Creation",
      "genre_ids": [
        53,
        27
      ],
      "backdrop_path": "/o8u0NyEigCEaZHBdCYTRfXR8U4i.jpg",
      "adult": false,
      "overview": "Several years after the tragic death of their little girl, a dollmaker and his wife welcome a nun and several girls from a shuttered orphanage into their home, soon becoming the target of the dollmaker's possessed creation, Annabelle.",
      "release_date": "2017-08-03"
    },
    {
      "vote_count": 2855,
      "id": 315635,
      "video": false,
      "vote_average": 7.3,
      "title": "Spider-Man: Homecoming",
      "popularity": 264.432794,
      "poster_path": "/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg",
      "original_language": "en",
      "original_title": "Spider-Man: Homecoming",
      "genre_ids": [
        28,
        12,
        878
      ],
      "backdrop_path": "/vc8bCGjdVp0UbMNLzHnHSLRbBWQ.jpg",
      "adult": false,
      "overview": "Following the events of Captain America: Civil War, Peter Parker, with the help of his mentor Tony Stark, tries to balance his life as an ordinary high school student in Queens, New York City, with fighting crime as his superhero alter ego Spider-Man as a new threat, the Vulture, emerges.",
      "release_date": "2017-07-05"
    },
    {
      "vote_count": 1555,
      "id": 324852,
      "video": false,
      "vote_average": 6.2,
      "title": "Despicable Me 3",
      "popularity": 245.950896,
      "poster_path": "/5qcUGqWoWhEsoQwNUrtf3y3fcWn.jpg",
      "original_language": "en",
      "original_title": "Despicable Me 3",
      "genre_ids": [
        878,
        12,
        16,
        35,
        10751
      ],
      "backdrop_path": "/ftRkFtAGuHngHnLiOxktq0aCVMF.jpg",
      "adult": false,
      "overview": "Gru and his wife Lucy must stop former '80s child star Balthazar Bratt from achieving world domination.",
      "release_date": "2017-06-15"
    },
    {
      "vote_count": 4106,
      "id": 283995,
      "video": false,
      "vote_average": 7.6,
      "title": "Guardians of the Galaxy Vol. 2",
      "popularity": 217.448108,
      "poster_path": "/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg",
      "original_language": "en",
      "original_title": "Guardians of the Galaxy Vol. 2",
      "genre_ids": [
        28,
        12,
        35,
        878
      ],
      "backdrop_path": "/aJn9XeesqsrSLKcHfHP4u5985hn.jpg",
      "adult": false,
      "overview": "The Guardians must fight to keep their newfound family together as they unravel the mysteries of Peter Quill's true parentage.",
      "release_date": "2017-04-19"
    },
    {
      "vote_count": 329,
      "id": 390043,
      "video": false,
      "vote_average": 6.5,
      "title": "The Hitman's Bodyguard",
      "popularity": 215.596465,
      "poster_path": "/5CGjlz2vyBhW5xHW4eNOZIdgzYq.jpg",
      "original_language": "en",
      "original_title": "The Hitman's Bodyguard",
      "genre_ids": [
        28,
        35
      ],
      "backdrop_path": "/dkA8j5DwUdUT3h658Mt1QgQHTR6.jpg",
      "adult": false,
      "overview": "The world's top bodyguard gets a new client, a hit man who must testify at the International Court of Justice. They must put their differences aside and work together to make it to the trial on time.",
      "release_date": "2017-08-16"
    },
    {
      "vote_count": 476,
      "id": 353491,
      "video": false,
      "vote_average": 5.6,
      "title": "The Dark Tower",
      "popularity": 186.569414,
      "poster_path": "/i9GUSgddIqrroubiLsvvMRYyRy0.jpg",
      "original_language": "en",
      "original_title": "The Dark Tower",
      "genre_ids": [
        28,
        37,
        878,
        14,
        27
      ],
      "backdrop_path": "/2n7Zn6WxJ76ccOwnuQHuhSFMbqt.jpg",
      "adult": false,
      "overview": "The last Gunslinger, Roland Deschain, has been locked in an eternal battle with Walter O’Dim, also known as the Man in Black, determined to prevent him from toppling the Dark Tower, which holds the universe together. With the fate of the worlds at stake, good and evil will collide in the ultimate battle as only Roland can defend the Tower from the Man in Black.",
      "release_date": "2017-08-03"
    },
    {
      "vote_count": 1866,
      "id": 374720,
      "video": false,
      "vote_average": 7.4,
      "title": "Dunkirk",
      "popularity": 170.576878,
      "poster_path": "/bOXBV303Fgkzn2K4FeKDc0O31q4.jpg",
      "original_language": "en",
      "original_title": "Dunkirk",
      "genre_ids": [
        28,
        18,
        36,
        53,
        10752
      ],
      "backdrop_path": "/fudEG1VUWuOqleXv6NwCExK0VLy.jpg",
      "adult": false,
      "overview": "Miraculous evacuation of Allied soldiers from Belgium, Britain, Canada, and France, who were cut off and surrounded by the German army from the beaches and harbor of Dunkirk, France, between May 26 and June 04, 1940, during Battle of France in World War II.",
      "release_date": "2017-07-19"
    },
    {
      "vote_count": 10484,
      "id": 157336,
      "video": false,
      "vote_average": 8.1,
      "title": "Interstellar",
      "popularity": 159.852945,
      "poster_path": "/nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg",
      "original_language": "en",
      "original_title": "Interstellar",
      "genre_ids": [
        12,
        18,
        878
      ],
      "backdrop_path": "/xu9zaAevzQ5nnrsXN6JcahLnG4i.jpg",
      "adult": false,
      "overview": "Interstellar chronicles the adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
      "release_date": "2014-11-05"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
