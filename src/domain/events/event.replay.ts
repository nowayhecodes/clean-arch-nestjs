import { User } from '~/domain/entities/user.entity';
import { UserCreated, UserLoggedIn, UserLoggedOut, UserDeactivated } from '~/domain/events/user.events';

type UserEvents = UserCreated | UserLoggedIn | UserLoggedOut | UserDeactivated;

export const replayUserEvents = (user: User, events: UserEvents[]): void => {
    for (const event of events) {
        if (event instanceof UserCreated) {
            user.status = 'CREATED';
        } else if (event instanceof UserLoggedIn) {
            user.status = 'ACTIVE';
        } else if (event instanceof UserLoggedOut) {
            user.status = 'INACTIVE';
        } else if (event instanceof UserDeactivated) {
            user.status = 'DEACTIVATED';
        }
    }
}