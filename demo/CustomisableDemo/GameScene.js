/**
 * @author Eric O' toole
 */
class GameScene extends Scene {
  /**
   * Default Constructor for Game Scene
   * @param {MenuHandler} menuHandler
   */
  constructor(menuHandler) {
    super("Game", document.getElementById("main-div"),
        {'x': 0, 'y': 0, 'width': 100, 'height': 100},
        "",
        "%"
    );
    this.backBtn = new Button("Back", () => {
          menuHandler.goToScene("Main Menu");
        },
        {'x': 35, 'y': 80, 'width': 30, 'height': 10},
        "%"
    );
    this.gameMenu = new Menu("Game",
        {'x': 20, 'y': 20, 'width': 60, 'height': 60}
    );
    this.backBtn.makeImageButton("assets/ui/back_btn.png");
    this.backBtn.addHoverImage("assets/ui/back_btn_pressed.png");
    this.gameMenu.addButton("Back", this.backBtn);
    this.addMenu(this.gameMenu);
  }
}