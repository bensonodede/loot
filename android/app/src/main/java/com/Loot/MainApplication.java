package com.Loot;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactInstanceManager;
import com.reactnativecomponent.splashscreen.RCTSplashScreenPackage;
import com.lugg.ReactNativeConfig.ReactNativeConfigPackage;
import com.ninty.system.setting.SystemSettingPackage;
import com.mustansirzia.fused.FusedLocationPackage;
import com.showlocationservicesdialogbox.LocationServicesDialogBoxPackage;
import com.RNTextInputMask.RNTextInputMaskPackage;
import com.horcrux.svg.SvgPackage;
import com.airbnb.android.react.maps.MapsPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import io.invertase.firebase.RNFirebasePackage;
import io.invertase.firebase.auth.RNFirebaseAuthPackage;
import io.invertase.firebase.firestore.RNFirebaseFirestorePackage;
import io.invertase.firebase.messaging.RNFirebaseMessagingPackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(new MainReactPackage(),new RCTSplashScreenPackage(),
          new ReactNativeConfigPackage(), new SystemSettingPackage(), new FusedLocationPackage(),
          new LocationServicesDialogBoxPackage(), new RNTextInputMaskPackage(), 
          new SvgPackage(), new MapsPackage(), new LinearGradientPackage(), new VectorIconsPackage(),
          new RNFirebasePackage(), new RNFirebaseAuthPackage(), new RNFirebaseFirestorePackage(),new RNFirebaseMessagingPackage());
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
