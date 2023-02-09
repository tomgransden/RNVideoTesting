/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import Video, {TextTrackType} from 'react-native-video';
import Orientation from 'react-native-orientation-locker';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App = () => {
  Orientation.lockToPortrait();

  return (
    <SafeAreaView style={{flex: 1}}>
      <Video
        onFullscreenPlayerWillPresent={() => {
          console.log('will present');
        }}
        onFullscreenPlayerWillDismiss={() => {
          console.log('will dismiss');
        }}
        onFullscreenPlayerDidDismiss={() => {
          console.log('did dismiss');
          Orientation.lockToPortrait();
        }}
        controls={true}
        selectedTextTrack={{
          value: 0,
          type: 'index',
        }}
        textTracks={[
          {
            type: TextTrackType.VTT,
            language: 'en',
            uri: 'https://house-fastly-signed-eu-west-1-prod.brightcovecdn.com/media/v1/text/vtt/clear/5245389806001/3f8f9fec-f0bf-452e-84b0-68de99b86c6d/562a5af3-3f50-4331-b3ab-3811c7bdf255/text.vtt?fastly_token=NjNhMWM3YjhfMDllMDViZjJmOTQ2OTZiNzkzNmRlZjI0YmZhOWY4MTk1ZjlkNDFhNDgzOGY1MzFhNjA4YTc1YThhNDA0NjNmNV9odHRwczovL2hvdXNlLWZhc3RseS1zaWduZWQtZXUtd2VzdC0xLXByb2QuYnJpZ2h0Y292ZWNkbi5jb20vbWVkaWEvdjEvdGV4dC92dHQvY2xlYXIvNTI0NTM4OTgwNjAwMS8zZjhmOWZlYy1mMGJmLTQ1MmUtODRiMC02OGRlOTliODZjNmQvNTYyYTVhZjMtM2Y1MC00MzMxLWIzYWItMzgxMWM3YmRmMjU1L3RleHQudnR0',
          },
        ]}
        paused={true}
        source={{
          uri: 'https://house-fastly-signed-eu-west-1-prod.brightcovecdn.com/media/v1/pmp4/static/clear/5245389806001/3f8f9fec-f0bf-452e-84b0-68de99b86c6d/3e9841e3-b598-4f62-8672-efc2134c3e90/main.mp4?fastly_token=NjNlNTM3M2NfNmVmYjVkOWZmNjY0YTgzY2Q1ZmQ2NGZhNjg2YmE5ZTMzMGYxMWZmMDNkMWI2YTNlODhlY2MzYzZjMDg5NGQ5Zl8vL2hvdXNlLWZhc3RseS1zaWduZWQtZXUtd2VzdC0xLXByb2QuYnJpZ2h0Y292ZWNkbi5jb20vbWVkaWEvdjEvcG1wNC9zdGF0aWMvY2xlYXIvNTI0NTM4OTgwNjAwMS8zZjhmOWZlYy1mMGJmLTQ1MmUtODRiMC02OGRlOTliODZjNmQvM2U5ODQxZTMtYjU5OC00ZjYyLTg2NzItZWZjMjEzNGMzZTkwL21haW4ubXA0',
        }}
        style={{
          height: 200,
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
