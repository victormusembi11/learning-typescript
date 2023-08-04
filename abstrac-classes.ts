abstract class TakePhoto {

    constructor(public cameraMode: string, public filter: string) {}

    abstract getSepia(): void // it's functionality must be defined in the class that inherits this class

    getReelTime(): number {
        return 8
    }

}

// const john = new TakePhoto("test", "test") // cannot create an object from an abstract class

class Twitter extends TakePhoto {

    constructor(public cameraMode: string, public filter: string, public burst: number) {
        super(cameraMode, filter) // have to do this when inheriting a class
    }

    // must create the below because it's initialised in the abstract class
    getSepia(): void {
        console.log("Sepia")
    }

}

const jane = new Twitter("test", "test", 3)

jane.getReelTime()