import { User } from '~/domain/entities/user.entity';
import { UserCreated, UserLoggedIn, UserLoggedOut, UserDeactivated } from '~/domain/events/user.events';

export class UserDomainService {
    constructor(private readonly user: User) { }

    applyUserCreatedEvent() {
        this.user.events.push(new UserCreated(this.user.id))
        this.user.status = 'ACTIVE'
    }
}

