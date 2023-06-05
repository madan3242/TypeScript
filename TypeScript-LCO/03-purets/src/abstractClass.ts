abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ) {
        
    }
    abstract getSnap(): void
    getReelTime(): number {
        return 30
    }
}

class Instagram extends TakePhoto {
    constructor(
        public camerMode: string,
        public filter: string,
        public burst: number
        ) {
        super(camerMode, filter)
    }
    getSnap(): void {
        console.log("Snap");
    }
}

const mg = new Instagram("test", "test", 3)

mg.getReelTime