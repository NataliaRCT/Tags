function initSimulation() {
  var Engine = Matter.Engine,
    Render = Matter.Render,
    Events = Matter.Events,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    World = Matter.World,
    Bodies = Matter.Bodies;

  var engine = Engine.create(),
    world = engine.world;
  var containerElement = document.querySelector(".tag-canvas");
  var containerWidth = containerElement.clientWidth + 2;
  var containerHeight = containerElement.clientHeight + 2;

  var render = Render.create({
    element: containerElement,
    engine: engine,
    options: {
      width: containerWidth,
      height: containerHeight,
      pixelRatio: 2,
      background: "transparent",
      border: "none",
      wireframes: false
    }
  });

  var ground = Bodies.rectangle(
    containerWidth / 2 + 160,
    containerHeight + 80,
    containerWidth + 320,
    160,
    { render: { fillStyle: "#000000" }, isStatic: true }
  );
  var wallLeft = Bodies.rectangle(
    -80,
    containerHeight / 2,
    160,
    containerHeight,
    { isStatic: true }
  );
  var wallRight = Bodies.rectangle(
    containerWidth + 80,
    containerHeight / 2,
    160,
    1200,
    { isStatic: true }
  );
  var roof = Bodies.rectangle(
    containerWidth / 2 + 160,
    -80,
    containerWidth + 320,
    160,
    { isStatic: true }
  );

  var border = 1;
  var radius = 20;

var tagUiUx = Bodies.rectangle(containerWidth / 2 + 150, 500, 164, 56, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
          "https://uploads-ssl.webflow.com/6412e6db3583662e59637225/6560c1b626807713c69325cc_1.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
  var tagWordpress = Bodies.rectangle(containerWidth / 2 + 150, 460, 240, 56, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
          "https://uploads-ssl.webflow.com/6412e6db3583662e59637225/6560c1ba1c95b74ecea93dc5_2.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
  var tagWebflow = Bodies.rectangle(containerWidth / 2 + 250, 420, 200, 56, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
          "https://uploads-ssl.webflow.com/6412e6db3583662e59637225/6560c1c0d27c5aa16dadeee2_3.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
  var tagWhitelevel = Bodies.rectangle(containerWidth / 2 - 75, 380, 160, 56, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
          "https://uploads-ssl.webflow.com/6412e6db3583662e59637225/6560c1c01d77e0a0ce4fe2b1_4.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
  
  var tagWebflowgreen = Bodies.rectangle(
    containerWidth / 2 - 74,
    540,
    248,
    56,
    {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture:
            "https://uploads-ssl.webflow.com/6412e6db3583662e59637225/6560c1cb143871b9faa5ca08_5.svg",
          xScale: 1,
          yScale: 1
        }
      }
    }
  );
  var tagSass = Bodies.rectangle(containerWidth / 2 + 174, 490, 105, 56, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
          "https://uploads-ssl.webflow.com/6412e6db3583662e59637225/6560c1cb914b06c00e896aab_6.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
  var tagWeb = Bodies.rectangle(containerWidth / 2 - 142, 440, 186, 56, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
          "https://uploads-ssl.webflow.com/6412e6db3583662e59637225/6560c1ff94e26f1ac1c3a690_15.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
  var tagStartup = Bodies.rectangle(containerWidth / 2 - 10, 260, 128, 56, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
          "https://uploads-ssl.webflow.com/6412e6db3583662e59637225/6560c1d318646b2ccca13437_7.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
  var tagMaintence = Bodies.rectangle(containerWidth / 2 - 242, 420, 168, 56, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
          "https://uploads-ssl.webflow.com/6412e6db3583662e59637225/6560c1d54ebb92e551f64090_8.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
  var tagIntegration = Bodies.rectangle(containerWidth / 2 + 60, 380, 155, 56, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
          "https://uploads-ssl.webflow.com/6412e6db3583662e59637225/6560c1dc24c86c786337a3a6_9.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
  var tagMotion = Bodies.rectangle(containerWidth / 2, 360, 180, 56, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
          "https://uploads-ssl.webflow.com/6412e6db3583662e59637225/6560c1dc427bcd3423052261_10.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
  var tagPay = Bodies.rectangle(containerWidth / 2 - 59, 260, 172, 56, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
          "https://uploads-ssl.webflow.com/6412e6db3583662e59637225/6560c1e64ebb92e551f647ef_11.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
  var tagGsap = Bodies.rectangle(containerWidth / 2 - 59, 260, 115, 56, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
          "https://uploads-ssl.webflow.com/6412e6db3583662e59637225/6560c1e61a09e56df57f59d7_12.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
  var tagFigma = Bodies.rectangle(containerWidth / 2 - 59, 260, 210, 56, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
          "https://uploads-ssl.webflow.com/6412e6db3583662e59637225/6560c1efde18d7bcec2f8ba7_13.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
  var tagMigration = Bodies.rectangle(containerWidth / 2 - 59, 260, 145, 56, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
          "https://uploads-ssl.webflow.com/6412e6db3583662e59637225/6560c1ee4e6417f9c8f4b771_14.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });

  World.add(engine.world, [
    ground,
    wallLeft,
    wallRight,
    roof,
    tagUiUx,
    tagWordpress,
    tagWebflow,
    tagWhitelevel,
    tagWebflowgreen,
    tagSass,
    tagWeb,
    tagStartup,
    tagMaintence,
    tagIntegration,
    tagMotion,
    tagPay,
    tagGsap,
    tagFigma,
    tagMigration
  ]);

  var mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false
        }
      }
    });

  World.add(world, mouseConstraint);

  render.mouse = mouse;

  mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
  mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);

  let click = false;

  document.addEventListener("mousedown", () => (click = true));
  document.addEventListener("mousemove", () => (click = false));
  document.addEventListener("mouseup", () =>
    console.log(click ? "click" : "drag")
  );

  Events.on(mouseConstraint, "mouseup", function (event) {
    var mouseConstraint = event.source;
    var bodies = engine.world.bodies;
    if (!mouseConstraint.bodyB) {
      for (i = 0; i < bodies.length; i++) {
        var body = bodies[i];
        if (click === true) {
          if (
            Matter.Bounds.contains(body.bounds, mouseConstraint.mouse.position)
          ) {
            var bodyUrl = body.url;
            console.log("Body.Url >> " + bodyUrl);
            if (bodyUrl != undefined) {
              window.open(bodyUrl, "_blank");
              console.log("Hyperlink was opened");
            }
            break;
          }
        }
      }
    }
  });

  Engine.run(engine);

  Render.run(render);
}

var containerElement = document.querySelector(".tag-canvas");

var observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      initSimulation();
      observer.disconnect();
    }
  });
}, {});

observer.observe(containerElement);
