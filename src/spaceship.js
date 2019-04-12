class Spaceship {
    constructor(name, crew, phasers, shields) {
        this.name = name
        this.crew = crew
        this.phasers = phasers
        this.shields = shields
        this.cloaked = false
        this.warpDrive = "disengaged"
        this.phasersCharge = "uncharged"
        this.crew.forEach(crewMember => {
            crewMember.currentShip = this
        })
    }

    get docked() {
        if (this.crew.length > 0) {
            return false
        } else {
            return  true
        }
    }

}
