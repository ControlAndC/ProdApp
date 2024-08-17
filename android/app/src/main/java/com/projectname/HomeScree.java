package com.projectname;

import android.app.Activity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

import androidx.annotation.Nullable;

public class HomeScree extends Activity {

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.home);

        Button myButton = findViewById(R.id.button);
        myButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                // Handle button press
                finish();
                Toast.makeText(HomeScree.this, "Button Pressed!", Toast.LENGTH_SHORT).show();
            }
        });
    }

    }


