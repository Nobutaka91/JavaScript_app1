'use strict';

{
    class Post { // 親クラス
        constructor(text) {
            this.text = text;
            this.likeCount = 0;
        }

        show() {
            console.log(`${this.text} - ${this.likeCount}likes`);
        }

        like() {
            this.likeCount++;
            this.show();
        }

        // 静的メソッド
        // thisは使えない
        static showInfo() {
            console.log('Post class version 1.0');
        }
    }


    class SponsoredPost extends Post { // 子クラス
        constructor(text, sponsor) {
            super(text);
            this.sponsor = sponsor;
        }

        show() {
            super.show();
            console.log(`...sponsored by ${this.sponsor}`);
        }
    }

    const posts = [
        new Post('JavaScriptの勉強中....'),
        new Post('プログラミング楽しい!'),
        new SponsoredPost('こわくても動こう', '伊藤賀一'),
    ];

    posts[2].show();
    posts[2].like();

}
