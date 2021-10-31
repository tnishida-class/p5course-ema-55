// 練習問題：神戸市のマーク
function setup(){
  createCanvas(400, 200);
  background(255);

  // 空欄を埋めて神戸市のロゴマークを完成させよう
  noFill();
  strokeWeight(25);
  strokeCap(SQUARE);
  arc(100 + 25, 100, 100, 100, QUARTER_PI * 3, QUARTER_PI * 3 + PI);
  arc(100 - 25, 100, 100, 100, QUARTER_PI * 5, QUARTER_PI * 5 + PI);

  // おまけ：神戸大学のロゴを作りたい人向けに色情報だけ置いておきます
  const red = color(196, 0, 0);
  const blue = color(14, 47, 146);
  const green = color(22, 131, 46);
  const gray = color(77);

  fill(blue);
  noStroke();
  ellipse(300, 100, 100, 100);
  fill(green);
  ellipse(293, 93, 80, 80);
  fill(green);
  ellipse(291, 91, 75, 75);
  fill(255);
  ellipse(289,93,70,70);
  fill(0);
  textSize(18)
  textFont("serif");
  text("KOBE", 260, 90);
  fill(0);
  textSize(10);
  textFont("serif");
  text("UNIVERSITY", 260, 100);
  noFill();
  strokeWeight(8);
  stroke(196, 0, 0);
  bezier(275, 110, 230, 90, 260, 160, 215 , 130);
  noFill();
  strokeWeight(8);
  stroke(196, 0, 0);
  bezier(275, 130, 230, 160, 269, 90 ,215,110)


}
