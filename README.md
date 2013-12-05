Raspberry Pi Camera Web Interface
==================

Node application hosted on a raspberry.

How to Install
--------------

You'll need Node js and NPM to run this application. After that is installed clone this repo and step inside the directory. Run NPM install inside this directory to build the node module dependencies.

```
bash:> git clone <this repo>
bash:> cd raspicam-interface
bash:> npm install
bash:> node src/app.js
```

Run the Application
-------------------

After running the application, it should bind to port 3000 by default.  Point your browser to the device's IP at port 3000 and you should see the interface.  Hit Capture and you should see an image, freshly captured
