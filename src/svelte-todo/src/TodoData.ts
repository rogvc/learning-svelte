/**
 * Contains the data related to todo items.  
 */
export class TodoData {
    /**
     * This Todo item's unique ID.
     */
    id: number;
    /**
     * Whether this todo item has been marked as done. 
     */
    done: boolean;
    /**
     * The thing that needs to be done. 
     */
    text: string;

    constructor(id: number, text: string, done: boolean) {
        this.id = id;
        this.done = done;
        this.text = text;
    }
}

// Makes this file a module
export { }