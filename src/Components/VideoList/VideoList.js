import React, { Component } from 'react';
import VideoCard from '../VideoCard/VideoCard';
import Grid from 'material-ui/Grid';
import SearchResults from '../../DummyData/SearchResults';

class VideoList extends Component {
    render() {

    
        const cardList = SearchResults.items.map((item, i) => {
            return (
                <Grid item key={i}>
                    <VideoCard openPreviewDialog={this.props.openPreviewDialog}  videoInfo={item} />
                </Grid>
                )
        });

        console.log(cardList);

        return (
            <Grid style={{justifyContent:'center'}}  spacing={24} container>
                {cardList}
            </Grid>
        );
    }
}

export default VideoList;