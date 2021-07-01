var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["316481a0-ba1b-4a1f-92e1-ad48b37bf082","a97bca0b-2181-48cd-bc23-1055d7d92b6f","b66bbdf3-4be5-4a27-9bf8-879d72084579","ae057258-9959-426e-b851-e5217e13d89c","5d891d3a-2aaf-4e5b-8662-462e766da2e8","ed2106cf-5124-40fa-aca4-1a5d63f1b99f","e1cb888b-9c11-440a-8044-40604a5db80d","442afed5-77d0-4da7-ad6d-1b31f1dfc829","a5f62941-6557-42d1-82b3-25203bcbc15e"],"propsByKey":{"316481a0-ba1b-4a1f-92e1-ad48b37bf082":{"name":"enemyShip1_red_1","sourceUrl":null,"frameSize":{"x":99,"y":75},"frameCount":1,"looping":true,"frameDelay":12,"version":"etA0MAbNXjSRwj651N7LpS2XikqgnXrG","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":99,"y":75},"rootRelativePath":"assets/316481a0-ba1b-4a1f-92e1-ad48b37bf082.png"},"a97bca0b-2181-48cd-bc23-1055d7d92b6f":{"name":"enemyShip1_red_1_copy_1","sourceUrl":null,"frameSize":{"x":99,"y":75},"frameCount":1,"looping":true,"frameDelay":12,"version":"Vu2aJcXs10zKH5fLLn7Oml9DBoeDy2Gf","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":99,"y":75},"rootRelativePath":"assets/a97bca0b-2181-48cd-bc23-1055d7d92b6f.png"},"b66bbdf3-4be5-4a27-9bf8-879d72084579":{"name":"playerShip2_blue_1","sourceUrl":"assets/api/v1/animation-library/gamelab/o6MhvPFlxWIVVxxNBdRQQ9Cjv4HeJmYW/category_vehicles/playerShip2_blue.png","frameSize":{"x":112,"y":75},"frameCount":1,"looping":true,"frameDelay":2,"version":"o6MhvPFlxWIVVxxNBdRQQ9Cjv4HeJmYW","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":112,"y":75},"rootRelativePath":"assets/api/v1/animation-library/gamelab/o6MhvPFlxWIVVxxNBdRQQ9Cjv4HeJmYW/category_vehicles/playerShip2_blue.png"},"ae057258-9959-426e-b851-e5217e13d89c":{"name":"enemyShip2_red_1","sourceUrl":null,"frameSize":{"x":112,"y":75},"frameCount":1,"looping":true,"frameDelay":12,"version":"CXoVDl562Py5y7XqX.dlW1hf5TrwHiaI","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":112,"y":75},"rootRelativePath":"assets/ae057258-9959-426e-b851-e5217e13d89c.png"},"5d891d3a-2aaf-4e5b-8662-462e766da2e8":{"name":"enemyShip2_red_1_copy_1","sourceUrl":null,"frameSize":{"x":112,"y":75},"frameCount":1,"looping":true,"frameDelay":12,"version":"Md72O_5P0ndTxHh5wzGbHGSQ4RiA5TEx","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":112,"y":75},"rootRelativePath":"assets/5d891d3a-2aaf-4e5b-8662-462e766da2e8.png"},"ed2106cf-5124-40fa-aca4-1a5d63f1b99f":{"name":"enemyShip3_red_1","sourceUrl":null,"frameSize":{"x":98,"y":75},"frameCount":1,"looping":true,"frameDelay":12,"version":"yzDnZziuTrASSVQ6hmhm1ttGgw04mdFE","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":98,"y":75},"rootRelativePath":"assets/ed2106cf-5124-40fa-aca4-1a5d63f1b99f.png"},"e1cb888b-9c11-440a-8044-40604a5db80d":{"name":"enemyShip3_red_1_copy_1","sourceUrl":null,"frameSize":{"x":98,"y":75},"frameCount":1,"looping":true,"frameDelay":12,"version":"bfqsqCi8nM6WB3wgcCgw0HqVC145WYjg","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":98,"y":75},"rootRelativePath":"assets/e1cb888b-9c11-440a-8044-40604a5db80d.png"},"442afed5-77d0-4da7-ad6d-1b31f1dfc829":{"name":"enemyRed5_1","sourceUrl":null,"frameSize":{"x":97,"y":84},"frameCount":1,"looping":true,"frameDelay":12,"version":".TNrAh74EBeYRIla7i6OB.hcJzaeAYCE","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":97,"y":84},"rootRelativePath":"assets/442afed5-77d0-4da7-ad6d-1b31f1dfc829.png"},"a5f62941-6557-42d1-82b3-25203bcbc15e":{"name":"enemyRed5_1_copy_1","sourceUrl":null,"frameSize":{"x":97,"y":84},"frameCount":1,"looping":true,"frameDelay":12,"version":"ZcmMBQqYZKuc6I.OkCdN8P5F4ODCtQr1","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":97,"y":84},"rootRelativePath":"assets/a5f62941-6557-42d1-82b3-25203bcbc15e.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var player_ship=createSprite(200,380,1,1);
player_ship.setAnimation("playerShip2_blue_1");

var life=10;

var spaceship1=createSprite(380,280,15,15);
spaceship1.setAnimation("enemyShip1_red_1");
var spaceship2=createSprite(40,180,15,15);
spaceship2.setAnimation("enemyShip2_red_1");
var spaceship3=createSprite(350,0,15,15);
spaceship3.setAnimation("enemyShip3_red_1");
var spaceship4=createSprite(0,40,15,15);
spaceship4.setAnimation("enemyRed5_1");


function draw() {
  background("black");
  textSize(20);
  text("lives:"+life,10,370);
  text("press enter to start",200,200);
  text("touch the top edge of the canvas to win",20,100);
  
  createEdgeSprites();
  
   if(spaceship1.isTouching(leftEdge)){
       spaceship1.setAnimation("enemyShip1_red_1_copy_1");
     }
     
     if(spaceship2.isTouching(rightEdge)){
       spaceship2.setAnimation("enemyShip2_red_1_copy_1");
     }
     
     if(spaceship3.isTouching(bottomEdge)){
       spaceship3.setAnimation("enemyShip3_red_1_copy_1");
     }
     
     if(spaceship4.isTouching(rightEdge)){
       spaceship4.setAnimation("enemyRed5_1_copy_1");
     }
     
     if(spaceship1.isTouching(rightEdge)){
       spaceship1.setAnimation("enemyShip1_red_1");
     }
     
     if(spaceship2.isTouching(leftEdge)){
       spaceship2.setAnimation("enemyShip2_red_1");
     }
     
     if(spaceship3.isTouching(topEdge)){
       spaceship3.setAnimation("enemyShip3_red_1");
     }
     
     if(spaceship4.isTouching(leftEdge)){
       spaceship4.setAnimation("enemyRed5_1");
     }
  
  spaceship1.bounceOff(edges);
  spaceship2.bounceOff(edges);
  spaceship3.bounceOff(edges);
  spaceship4.bounceOff(edges);
  player_ship.bounceOff(edges);
  
 
  
  if(keyDown("enter"))  {
    spaceship1.velocityX=-3;
    spaceship2.velocityX=3;
    spaceship3.velocityY=3;
    spaceship4.velocityX=4;
    
  }
  
  if(keyDown("up")){
    player_ship.y=player_ship.y-5;
  }
  
  if(keyDown("down")){
    player_ship.y=player_ship.y+5;
  }
  
  if(keyDown("right")){
    player_ship.x=player_ship.x+5;
  }
  
  if(keyDown("left")){
    
    player_ship.x=player_ship.x-5;
  }
  
  if(player_ship.isTouching(spaceship1)||
     player_ship.isTouching(spaceship2)||
     player_ship.isTouching(spaceship3)||
     player_ship.isTouching(spaceship4)){
       player_ship.x=200;
       player_ship.y=380;
       life=life-1;
     }
     
     if(life==0){
       player_ship.destroy();
    spaceship1.velocityX=-3;
    spaceship2.velocityX=3;
    spaceship3.velocityY=3;
    spaceship4.velocityX=5;
     }
     
     if(player_ship.isTouching(topEdge)){
       spaceship1.destroy();
       spaceship2.destroy();
       spaceship3.destroy();
       spaceship4.destroy();
      
       
       textSize(40);
       text("you win!",200,300);
     }
    
  
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
