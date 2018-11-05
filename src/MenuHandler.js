/*! MenuHandler v0.0.0 - MIT license */
'use strict';

class MenuHandler {
    /**
     * @constructor
     */
    constructor() {
        this._scenes = new Map();
        this._currentScene = null;
    }


    /**
     * Add a scene object to the map of menu scenes
     * @param name {string} the name of the corresponding scene
     * @param scene {Scene} the scene object to map
     */
    addScene(name, scene) {
        if (!this._scenes.has(name))
            this._scenes.set(name, scene);
        else
            throw new Error('A scene with the name ' + name + 'already exists.');

        // Set the current scene if the first scene is added.
        if (this._currentScene === null)
            this._currentScene = name;
    }

    removeScene(name) {
        if (this._scenes.get(name))
            this._scenes.delete(name);
    }


    /**
     * Render the current scene
     * @param ctx {context} the current context of object to render to
     */
    render(ctx) {
        if (this._scenes.has(this._currentScene) && (ctx !== null && ctx !== undefined))
            this._scenes.get(this._currentScene).render(ctx);
        else {
            if (ctx === undefined)
                throw new Error('Context Undefined');
            if (!this._scenes.get(this._currentScene))
                throw new Error('Invalid Scene: ' + this._currentScene);
        }
    }

    // Getters and Setters
    get scenes() {
        return this._scenes;
    }

    get currentScene() {
        return this._currentScene;
    }

    set currentScene(value) {
        this._currentScene = value;
    }
}
