import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import SettingsIcon from 'material-ui-icons/Settings';
import InfoOutline from 'material-ui-icons/InfoOutline';
import VideoList from './Components/VideoList/VideoList';
import PreviewDialog from './Components/PreviewDialog/PreviewDialog';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: theme.palette.primary.light
  }
});

class App extends Component {

  state = {
    showPreviewDialog: false,
    previewVideoInfo: null
  };

  openPreviewDialog = (videoInfo) => {
    console.log('Preview Dialog Open', videoInfo)

    this.setState({
      showPreviewDialog: true,
      previewVideoInfo: videoInfo
    });
  }

  closePreviewDialog = () => {

    console.log('Close dialog')
    this.setState({
      showPreviewDialog: false,
      previewVideoInfo: null
    });

  }

  render() {

    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <PreviewDialog show={this.state.showPreviewDialog} handleClose={this.closePreviewDialog.bind(this)} videoInfo={this.state.previewVideoInfo} />
        <Grid container spacing={8}>
          <Grid xs={10} item>
            <TextField style={{ paddingLeft: '10px', width: '500px' }}
              placeholder="Search YouTube"
              className={classes.textField}
              margin="normal"
            />
          </Grid>
          <Grid xs={2} style={{ textAlign: 'right' }} item>
            <IconButton >
              <InfoOutline />
            </IconButton>
            <IconButton >
              <SettingsIcon />
            </IconButton>
          </Grid>
        </Grid>

        <Grid container spacing={8}>
          <VideoList openPreviewDialog={this.openPreviewDialog.bind(this)} />
        </Grid>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);