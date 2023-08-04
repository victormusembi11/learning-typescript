interface TakePhoto {
    cameraMode: string
    filter: string
    burst: number
}

interface Story {
    createStory(): void
}


class Instagram implements TakePhoto { // implementing interface on class (this is not inheritance)

    constructor(
        public cameraMode: string,
        public filter: string,
        // public burst: string // this cannot be type string because in the interface burst is a number
        public burst: number
    ) {}

}


class Youtube implements TakePhoto, Story { // adding two interfaces

    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public short: string // you can add extra fields to the class constructor (though you can't have a less/missing field from the interface)
    ) {}

    createStory(): void {
        console.log("story was created")
    }

}