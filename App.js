import React from 'react';
import {Button, Platform, SafeAreaView, StyleSheet} from 'react-native';
import {
  AdMobBanner,
  AdMobInterstitial,
  AdMobRewarded,
} from 'react-native-admob';

const adBannerTestUnitID = Platform.select({
  ios: 'ca-app-pub-3940256099942544/2934735716',
  android: 'ca-app-pub-3940256099942544/6300978111',
});

const adInterstitialTestUnitID = Platform.select({
  ios: 'ca-app-pub-3940256099942544/4411468910',
  android: 'ca-app-pub-3940256099942544/1033173712',
});

const adRewardedTestUnitID = Platform.select({
  ios: 'ca-app-pub-3940256099942544/1712485313',
  android: 'ca-app-pub-3940256099942544/5224354917',
});

const showAdmob = () => {
  AdMobInterstitial.setAdUnitID(adInterstitialTestUnitID);
  AdMobInterstitial.requestAd().then(() => AdMobInterstitial.showAd());
};
const showRewardedAdmob = () => {
  AdMobRewarded.setAdUnitID(adRewardedTestUnitID);
  AdMobRewarded.requestAd().then(() => AdMobRewarded.showAd());
};

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AdMobBanner
        adSize="smartBannerPortrait"
        adUnitID={adBannerTestUnitID}
        onAdFailedToLoad={(error) => console.error(error)}
      />
      <Button title={'Reklami Goster'} onPress={() => showAdmob()} />
      <Button
        title={'Ödüllü Reklami Göster'}
        onPress={() => showRewardedAdmob()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#efefef',
    flex: 1,
  },
});

export default App;
