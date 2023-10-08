export class UserCreated {
    constructor(public readonly id: string) { }
}

export class UserLoggedIn {
    constructor(public readonly id: string) { }
}

export class UserLoggedOut {
    constructor(public readonly id: string) { }
}

export class UserDeactivated {
    constructor(public readonly id: string) { }
}