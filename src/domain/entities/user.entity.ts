import { UUID, randomUUID } from "crypto";

export class User {
    id: UUID;
    status: 'ACTIVE' | 'INACTIVE' | 'CREATED' | 'DEACTIVATED';
    events: unknown[] = [];

    constructor() {
        this.id = randomUUID();
        this.status = 'ACTIVE';
    }
}