export class EventStore {
    private events: unknown[] = [];

    static add(event: unknown): void {
        console.log(event);
        this.events.push(event);
    }

    static get events(): unknown[] {
        return this.events;
    }
}