/*! MenuHandler v0.0.0 - MIT license */
'use strict';

class MenuHandler {
    /**
     * Construct a default scene handler
     * @constructor
     */
    constructor() {
        this._scenes = new Map();
        this._currentScene = null;
        this._theme = new Theme();
    }

    /**
     * Add a scene object to the map of menu scenes
     * @param name {string} the name of the corresponding scene
     * @param scene {Scene} the scene object to map
     */
    addScene(name, scene) {
        if (!this._scenes.has(name)) {
            this._scenes.set(name, scene);
        }
        else
            throw new Error('A scene with the name ' + name + 'already exists.');

        // Set the current scene if the first scene is added.
        if (this._currentScene === null)
            this._currentScene = name;
    }

    /**
     * Remove a scene from the map of scenes
     * @param name {string} remove the scene with the key name from the map
     */
    removeScene(name) {
        if (this._scenes.get(name))
            this._scenes.delete(name);
    }

    /**
     * Render the current scene
     * @param ctx {CanvasRenderingContext2D} the current context of object to render to
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

    goToScene(name) {
        if (this._currentScene !== name) {
            if (this._scenes.has(name)) {
                this._scenes.get(this._currentScene).transitionOut();
                this._currentScene = name;
                this._scenes.get(this._currentScene).transitionIn();
            }
            else {
                throw new Error('Invalid Scene: ' + name);
            }
        }
    }

    /**
     * Temp function for showing only the current scene //TODO: Deprecate and replace with proper function
     */
    showOnlyCurrentScene() {
        this._scenes.forEach((value, key) => {
            if (key !== this._currentScene) {
                value.transitionOut();
            } else {
                value.transitionIn();
            }

        });
    }

    /**
     * Get the current scene object
     * @returns {Scene}
     */
    getCurrentSceneObject() {
        return this._scenes.get(this._currentScene);
    }

    applyTheme() {
        this.scenes.forEach((value, key) => {
            value.colour = this._theme.primary;
            value.menus.forEach((mv, mk) => {
                mv.colour = this._theme.secondary;
                mv.buttons.forEach((bv, bk) => {
                    bv._element.style.backgroundColor = this._theme.tertiary;
                });
            });
        });
    }

    // Getters and Setters
    /**
     * Get the map of scenes for menus
     * @returns {Map<string, Scene>} the map of current scenes
     */
    get scenes() {
        return this._scenes;
    }


    /**
     * Get the current scene
     * @returns {string} the current scene
     */
    get currentScene() {
        return this._currentScene;
    }


    /**
     * Set the current scene value
     * @param value {string} the name of the current scene to set.
     */
    set currentScene(value) {
        this._currentScene = value;
    }
}