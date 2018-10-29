package com.Loot;

import com.facebook.react.ReactActivity;
import com.reactnativecomponent.splashscreen.RCTSplashScreen;
import android.os.Bundle; // required for onCreate parameter
import android.widget.ImageView; // uncomment if opening fullscreen

public class MainActivity extends ReactActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        //RCTSplashScreen.openSplashScreen(this); // open splashscreen
        RCTSplashScreen.openSplashScreen(this, true, ImageView.ScaleType.CENTER_INSIDE);   //open splashscreen fullscreen, use CENTER_INSIDE instead of FIT_XY to maintain aspect ratio

        // RCTSplashScreen.openSplashScreen(this, true, ImageView.ScaleType.FIT_XY);
        // //open splashscreen fullscreen
        super.onCreate(savedInstanceState);
    }

    /**
     * Returns the name of the main component registered from JavaScript. This is
     * used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "Loot";
    }
}
