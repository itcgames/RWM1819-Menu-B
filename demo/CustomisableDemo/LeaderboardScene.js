class LeaderboardScene extends Scene {
  constructor(menuHandler) {
    super("Leaderboard", document.getElementById("main-div"),
        {'x': 0, 'y': 0, 'width': 100, 'height': 100},
        "",
        "%"
    );
    this.leaderboardMenu = new Menu("Leaderboard",
        {'x': 20, 'y': 20, 'width': 60, 'height': 60}
    );
    this.backBtn = new Button("Back", () => {
        menuHandler.goToScene("Main Menu");
    },
        {'x': 35, 'y': 80, 'width': 30, 'height': 10},
        "%"
    );
    this.backBtn.makeImageButton("assets/ui/back_btn.png");
    this.backBtn.addHoverImage("assets/ui/back_btn_pressed.png");
    this.leaderboardMenu.addButton("Back", this.backBtn);
    this.addMenu(this.leaderboardMenu);
    }
}