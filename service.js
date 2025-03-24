import TrackPlayer, {Event} from 'react-native-track-player';

const playerService = async () => {
  console.log('Playback Service Started');

  TrackPlayer.addEventListener(Event.PlaybackState, event => {
    console.log('Playback State Changed:', event.state);
  });

  TrackPlayer.addEventListener(Event.RemotePlay, async () => {
    console.log('Remote Play Event Triggered');
    await TrackPlayer.play();
  });

  TrackPlayer.addEventListener(Event.RemotePause, async () => {
    console.log('Remote Pause Event Triggered');
    await TrackPlayer.pause();
  });

  TrackPlayer.addEventListener(Event.RemoteNext, async () => {
    console.log('Remote Next Event Triggered');
    await TrackPlayer.skipToNext();
  });

  TrackPlayer.addEventListener(Event.RemotePrevious, async () => {
    console.log('Remote Previous Event Triggered');
    await TrackPlayer.skipToPrevious();
  });
};

export default playerService;
