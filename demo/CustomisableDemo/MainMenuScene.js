/**
 * @author Eric O' Toole
 */

class MainMenuScene extends Scene {
  /**
   * Default constructor for main menu
   * @param {MenuHandler} menuHandler
   * @param {Game} game
   */
  constructor(menuHandler, game) {
    super("Main Menu", document.getElementById("main-div"),
        {'x': 0, 'y': 0, 'width': 100, 'height': 100},
        "",
        "%"
    );
    this.mainMenu = new Menu("Main Menu",
        {'x': window.innerWidth * 0.1, 'y':window.innerHeight * 0.1 + 110, 'width': window.innerWidth * 0.8, 'height':window.innerHeight * 0.7},
        "px"
    );

    this.playBtn = new Button("Play", () => {
        menuHandler.goToScene("Game");
    },
        {'x': 35, 'y': 4, 'width': 35, 'height': 10},
        "%"
    );
    // Initialise the play_btn as an image button (no border, set width to be defined width)
    this.playBtn.makeImageButton("assets/ui/play_btn.png");
    // Add a hover image to the play_btn as a hover effect
    this.playBtn.addHoverImage("assets/ui/play_btn_pressed.png");
    this.mainMenu.addButton("Play", this.playBtn);

    this.leaderboardBtn = new Button("Leaderboard",() => {
        menuHandler.goToScene("Leaderboard");
    },
        {'x': 35, 'y': 28, 'width': 35, 'height': 10},
        "%"
    );

    this.leaderboardBtn.makeImageButton("assets/ui/leaderboard_btn.png");
    this.leaderboardBtn.addHoverImage("assets/ui/leaderboard_btn_prssed.png");
    this.mainMenu.addButton("Leaderboard", this.leaderboardBtn);
    this.mainMenu.addButton("Controls", this.controlsBtn);
    this.addMenu(this.mainMenu);
  }
}