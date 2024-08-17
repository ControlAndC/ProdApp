package com.projectname;

import android.app.Activity;
import android.content.Intent;
import android.util.Log;
import android.widget.Toast;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

    public class HomeScreenModule extends ReactContextBaseJavaModule {

    HomeScreenModule(ReactApplicationContext context) {
        super(context);
    }
    @NonNull
    @Override
    public String getName() {
        return "HomeScreen";
    }
        @ReactMethod
        public void openNewActivity() {
            Activity currentActivity = getCurrentActivity();
            if (currentActivity != null) {
                Intent intent = new Intent(currentActivity, HomeScree.class);
                currentActivity.startActivity(intent);
            }
        }

    @ReactMethod
    public void openHomeScreen(String name, String location) {
        Log.d("CalendarModule", "Create event called with name: " + name
                + " and location: " + location);

        Toast.makeText(getReactApplicationContext(),"Hello", Toast.LENGTH_LONG).show();

        Intent intent = new Intent(getReactApplicationContext(), HomeScree.class);
        intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);

        getReactApplicationContext().startActivity(intent);

//    Activity currentActivity = getCurrentActivity();
//        if (currentActivity != null) {
//            Intent intent = new Intent(currentActivity, HomeScree.class);
//            currentActivity.startActivity(intent);
//        }
    }
}
