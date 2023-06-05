"use strict";
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        return 30;
    }
}
class Instagram extends TakePhoto {
    constructor(camerMode, filter, burst) {
        super(camerMode, filter);
        this.camerMode = camerMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSnap() {
        console.log("Snap");
    }
}
const mg = new Instagram("test", "test", 3);
mg.getReelTime;
