import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Button,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default function HomeScreen() {
  return (
      <View style={styles.container}>
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
                source={
                  __DEV__
                      ? require('../assets/images/icon.png')
                      : require('../assets/images/icon.png')
                }
                style={styles.welcomeImage}
            />
          </View>

          <View style={styles.getStartedContainer}>
            <DevelopmentModeNotice />
          {/*  <Button*/}
          {/*      onPress={() => {*/}
          {/*        alert('Guest Scan Page here!')*/}
          {/*      }}*/}
          {/*      title="Guest Scan"*/}
          {/*  />*/}

          {/*  <Button*/}
          {/*      onPress={() => NavigationService.navigate('LoginScreen', {})}*/}
          {/*      title="User Login"*/}
          {/*  />*/}
          {/*</View>*/}

          {/*<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>*/}
          {/*  <Button*/}
          {/*      title="Settings"*/}
          {/*      onPress={() => NavigationService.navigate('Settings', {})}*/}
          {/*  />*/}
          </View>
          <View>
              <Text style={styles.headerText}>
                Welcome to Blind Fashion!
              </Text>
          </View>
          <View style={styles.helpContainer}>
            <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
              <Text style={styles.helpLinkText}>
                Help, it didn’t automatically reload!
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
  );
}

HomeScreen.navigationOptions = {
    title: 'Home',
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
        <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
    );

    return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled: your app will be slower but you can use
          useful development tools. {learnMoreButton}
        </Text>
    );
  } else {
    return (
        <Text style={styles.developmentModeText}>
          You are not in development mode: your app will run at full speed.
        </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 200,
    height: 160,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  headerText: {
    fontSize: 40,
    textAlign: 'center'
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },

  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});