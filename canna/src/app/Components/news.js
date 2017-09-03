/**
 * Created by Ani on 7/9/2017.
 */
import React, { PureComponent } from 'react';
import NewsPart from './news-part.js';
class News extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="news">
                <h2>Latest News</h2>
                <NewsPart/>
                <NewsPart/>
                <NewsPart/>
                <a href="#" className="button no-gradient ">More news</a>
            </div>
        );
    }
}

export default News;