import React from 'react';


const styles = {
  video: {
    width: '100%'
  }
};

export default class NewWine extends React.Component {

  componentDidMount() {
    MediaStreamTrack.getSources((sources) => {
      const vids = sources.filter(s => s.kind === 'video');
      if (vids.length <= 0) throw new Error('no cameras');
      navigator.webkitGetUserMedia({
        video: {optional: [{sourceId: vids.pop().id}]}
      }, (stream) => {
        this.mediaStream = stream;
        this.refs.video.src = window.webkitURL.createObjectURL(stream);
      }, (e) => {
        throw new Error('cannot get user media', e);
      });
    });
  }

  componentWillUnmount() {
    this.mediaStream.getTracks().forEach(t => t.stop());
    this.refs.video.src = null;
  }

  render() {
    return (
      <div className="NewWine">
        <video ref="video" autoPlay style={styles.video} />
      </div>
    );
  }
}
