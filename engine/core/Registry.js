/**
 * --------------------------------------------------------
 * Noah Engine
 * --------------------------------------------------------
 *
 * Component:
 * Registry
 *
 * Purpose:
 * Generic registry used throughout Noah Engine.
 *
 * Responsibilities:
 * - Register objects
 * - Retrieve objects
 * - Check existence
 * - Return all registered objects
 *
 * Non-responsibilities:
 * - Creating objects
 * - Updating objects
 * - Loading files
 */

class Registry {

    constructor(name) {

        this.name = name;
        this.items = new Map();

    }

    register(id, item) {

        if (this.items.has(id)) {

            throw new Error(
                `${this.name}: '${id}' already registered.`
            );

        }

        this.items.set(id, item);

    }

    get(id) {

        return this.items.get(id);

    }

    has(id) {

        return this.items.has(id);

    }

    all() {

        return [...this.items.values()];

    }

    count() {

        return this.items.size;

    }

}

window.Registry = Registry;