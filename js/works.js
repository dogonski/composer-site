let playBtn1,
  playBtn2,
  playBtn3,
  playBtn4,
  playBtn5,
  playBtn1copy,
  playBtn2copy,
  playBtn3copy,
  playBtn4copy,
  playBtn5copy,
  exitBtn;

playBtn1 = document.querySelector("#skewed1");
playBtn1.addEventListener("click", () => {
  document.querySelector("#content1").classList.add("visible");
  document.querySelector(".toggle__icon").classList.add("visible");
  document.querySelector("#p5_loading").classList.add("grass");
  document.querySelector("#allskewed").classList.add("hidden");
  track1();
});

playBtn2 = document.querySelector("#skewed2");
playBtn2.addEventListener("click", () => {
  document.querySelector("#content2").classList.add("visible");
  document.querySelector(".toggle__icon").classList.add("visible");
  document.querySelector("#p5_loading").classList.add("cactus");
  document.querySelector("#allskewed").classList.add("hidden");
  track2();
});

playBtn3 = document.querySelector("#skewed3");
playBtn3.addEventListener("click", () => {
  document.querySelector("#content3").classList.add("visible");
  document.querySelector("#p5_loading").classList.add("circle");
  document.querySelector("#allskewed").classList.add("hidden");
  track3();
});

playBtn4 = document.querySelector("#skewed4");
playBtn4.addEventListener("click", () => {
  document.querySelector("#content4").classList.add("visible");
  document.querySelector("#p5_loading").classList.add("walls");
  document.querySelector("#allskewed").classList.add("hidden");
  track4();
});

playBtn5 = document.querySelector("#skewed5");
playBtn5.addEventListener("click", () => {
  document.querySelector("#content5").classList.add("visible");
  document.querySelector("#p5_loading").classList.add("windy");
  document.querySelector("#allskewed").classList.add("hidden");
  track5();
});

playBtn1copy = document.querySelector("#skewed1copy");
playBtn1copy.addEventListener("click", () => {
  document.querySelector("#content1").classList.add("visible");
  document.querySelector("#p5_loading").classList.add("grass");
  document.querySelector("#allskewed").classList.add("hidden");
  track1();
});

playBtn2copy = document.querySelector("#skewed2copy");
playBtn2copy.addEventListener("click", () => {
  document.querySelector("#content2").classList.add("visible");
  document.querySelector("#p5_loading").classList.add("cactus");
  document.querySelector("#allskewed").classList.add("hidden");
  track2();
});

playBtn3copy = document.querySelector("#skewed3copy");
playBtn3copy.addEventListener("click", () => {
  document.querySelector("#content3").classList.add("visible");
  document.querySelector("#p5_loading").classList.add("circle");
  document.querySelector("#allskewed").classList.add("hidden");
  track3();
});

playBtn4copy = document.querySelector("#skewed4copy");
playBtn4copy.addEventListener("click", () => {
  document.querySelector("#content4").classList.add("visible");
  document.querySelector("#p5_loading").classList.add("walls");
  document.querySelector("#allskewed").classList.add("hidden");
  track4();
});

playBtn5copy = document.querySelector("#skewed5copy");
playBtn5copy.addEventListener("click", () => {
  document.querySelector("#content5").classList.add("visible");
  document.querySelector("#p5_loading").classList.add("windy");
  document.querySelector("#allskewed").classList.add("hidden");
  track5();
});

function track1() {
  const s = (p) => {
    let shader1, img1, d_map, fft, audio, toggleBtn;

    p.preload = () => {
      audio = p.loadSound("audio/verlust.mp3");
      shader1 = p.loadShader("shaders/base.vert", "shaders/s1.frag");
      img1 = p.loadImage("img/pexels-clam-lo.jpg");
      d_map = p.loadImage("img/maps/ripple.jpg");
    };

    p.setup = () => {
      audio.loop();

      p.pixelDensity(1);
      p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);

      toggleBtn = document.querySelector("#toggle-btn");
      toggleBtn.addEventListener("click", () => {
        toggleBtn.classList.toggle("toggle--on");
        this.toggleAudio();
      });

      fft = new p5.FFT();
      p.shader(shader1);
      shader1.setUniform("u_resolution", [p.windowWidth, p.windowHeight]);
      shader1.setUniform("d_map", d_map);
      shader1.setUniform("img", img1);
      shader1.setUniform("texRes", [img1.width, img1.height]);
    };

    p.draw = () => {
      p.background(0);

      fft.analyze();

      const bass = fft.getEnergy("bass");
      const treble = fft.getEnergy("treble");
      const mid = fft.getEnergy("highMid");
      const lowMid = fft.getEnergy("mid");

      const mapBass = p.map(bass, 0, 255, 0.0, 0.04);
      const mapMid = p.map(mid, 0, 30, 0.0, 0.8);
      const mapLowMid = p.map(lowMid, 0, 60, 0.0, 0.4);

      const tc = p.map(audio.currentTime(), 0, audio.duration(), 1.0, 1.0);
      shader1.setUniform("u_time", tc);
      shader1.setUniform("u_bass", mapBass);
      shader1.setUniform("u_mid", mapMid);
      shader1.setUniform("u_lowmid", mapLowMid);

      p.rect(0, 0, p.width, p.height);
    };

    p.windowResized = () => {
      p.resizeCanvas(p.windowWidth, p.windowHeight);
      shader1.setUniform("u_resolution", [p.windowWidth, p.windowHeight]);
    };

    toggleAudio = () => {
      if (audio.isPlaying()) {
        audio.pause();
      } else {
        audio.loop();
      }
    };
  };

  let myp5_1 = new p5(s);
}
//*----------------------------------------
function track2() {
  const t = (p) => {
    let shader2, img2, fft, audio, toggleBtn;

    p.preload = () => {
      audio = p.loadSound("audio/sonicbright.mp3");
      shader2 = p.loadShader("shaders/base.vert", "shaders/s2.frag");
      img2 = p.loadImage("img/tinified/cactus.jpg");
    };

    p.setup = () => {
      audio.loop();

      p.pixelDensity(1);
      p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);

      toggleBtn = document.querySelector("#toggle-btn");
      toggleBtn.addEventListener("click", () => {
        toggleBtn.classList.toggle("toggle--on");
        this.toggleAudio();
      });

      fft = new p5.FFT();
      p.shader(shader2);

      shader2.setUniform("u_resolution", [p.windowWidth, p.windowHeight]);
      shader2.setUniform("u_texture", img2);
      shader2.setUniform("u_tResolution", [img2.width, img2.height]);
    };

    p.draw = () => {
      fft.analyze();

      const bass = fft.getEnergy("bass");
      const treble = fft.getEnergy("treble");
      const mid = fft.getEnergy("mid");

      const mapBass = p.map(bass, 0, 255, 0.0, 1.0);
      const mapMid = p.map(mid, 0, 255, 0.0, 0.1);

      shader2.setUniform("u_time", p.frameCount / 20.0);
      shader2.setUniform("u_bass", mapBass);
      shader2.setUniform("u_mid", mapMid);

      p.rect(0, 0, p.width, p.height);
    };

    p.windowResized = () => {
      p.resizeCanvas(p.windowWidth, p.windowHeight);
      shader2.setUniform("u_resolution", [p.windowWidth, p.windowHeight]);
    };

    toggleAudio = () => {
      if (audio.isPlaying()) {
        audio.pause();
      } else {
        audio.loop();
      }
    };
  };
  let myp5_2 = new p5(t);
}
// //*----------------------------------------
function track3() {
  const u = (p) => {
    let shader3, img3, d_map, fft, audio, toggleBtn;

    p.preload = () => {
      audio = p.loadSound("audio/landscape.mp3");
      shader3 = p.loadShader("shaders/base.vert", "shaders/s3.frag");
      img3 = p.loadImage("img/tinified/circle.jpg");
      d_map = p.loadImage("img/maps/map cwi.jpg");
    };

    p.setup = () => {
      audio.loop();

      p.pixelDensity(1);
      p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);

      toggleBtn = document.querySelector("#toggle-btn");
      toggleBtn.addEventListener("click", () => {
        toggleBtn.classList.toggle("toggle--on");
        this.toggleAudio();
      });

      fft = new p5.FFT();
      p.shader(shader3);
      shader3.setUniform("d_map", d_map);
      shader3.setUniform("u_resolution", [p.windowWidth, p.windowHeight]);
      shader3.setUniform("img", img3);
      shader3.setUniform("texRes", [img3.width, img3.height]);
    };

    p.draw = () => {
      p.background(0);

      fft.analyze();

      const bass = fft.getEnergy("bass");
      const treble = fft.getEnergy("treble");
      const mid = fft.getEnergy("highMid");
      const lowMid = fft.getEnergy("mid");

      const mapBass = p.map(bass, 0, 255, 0.0, 0.4);
      // const mapMid = p.map(mid, 0, 30, 0.0, 0.8);
      const mapMid = p.map(mid, 0, 255, 0.0, 0.8);
      // const mapLowMid = p.map(lowMid, 0, 60, 0.0, 0.4);
      const mapLowMid = p.map(lowMid, 0, 60, 0.0, 0.4);
      const mapTreble = p.map(treble, 0, 255, 0.0, 0.5);

      const tc = p.map(audio.currentTime(), 0, audio.duration(), 1.0, 1.0);
      shader3.setUniform("u_time", tc);
      shader3.setUniform("u_bass", mapBass);
      shader3.setUniform("u_mid", mapMid);
      shader3.setUniform("u_lowmid", mapLowMid);
      shader3.setUniform("u_treble", mapTreble);

      p.rect(0, 0, p.width, p.height);
    };

    p.windowResized = () => {
      p.resizeCanvas(p.windowWidth, p.windowHeight);
      shader3.setUniform("u_resolution", [p.windowWidth, p.windowHeight]);
    };

    toggleAudio = () => {
      if (audio.isPlaying()) {
        audio.pause();
      } else {
        audio.loop();
      }
    };
  };

  let myp5_3 = new p5(u);
}
// //*----------------------------------------
function track4() {
  const v = (p) => {
    let shader4, img4, fft, audio, toggleBtn;

    p.preload = () => {
      audio = p.loadSound("audio/nextwoks.mp3");
      shader4 = p.loadShader("shaders/base.vert", "shaders/s4.frag");
      img4 = p.loadImage("img/tinified/wallswide.jpg");
    };

    p.setup = () => {
      audio.loop();

      p.pixelDensity(1);
      p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);

      toggleBtn = document.querySelector("#toggle-btn");
      toggleBtn.addEventListener("click", () => {
        toggleBtn.classList.toggle("toggle--on");
        this.toggleAudio();
      });

      fft = new p5.FFT();
      p.shader(shader4);

      shader4.setUniform("u_resolution", [p.windowWidth, p.windowHeight]);
      shader4.setUniform("u_texture", img4);
      shader4.setUniform("u_tResolution", [img4.width, img4.height]);
    };

    p.draw = () => {
      fft.analyze();

      const bass = fft.getEnergy("bass");
      const treble = fft.getEnergy("treble");
      const mid = fft.getEnergy("mid");

      const mapBass = p.map(bass, 0, 255, 10, 12.0);
      const mapTremble = p.map(treble, 0, 255, 0.0, 12.0);
      const mapMid = p.map(mid, 0, 255, 0.0, 0.01);

      shader4.setUniform("u_time", p.frameCount / 20);
      shader4.setUniform("u_bass", mapBass);
      shader4.setUniform("u_tremble", mapTremble);
      shader4.setUniform("u_mid", mapMid);

      p.rect(0, 0, p.width, p.height);
    };

    p.windowResized = () => {
      p.resizeCanvas(p.windowWidth, p.windowHeight);
      shader4.setUniform("u_resolution", [p.windowWidth, p.windowHeight]);
    };

    toggleAudio = () => {
      if (audio.isPlaying()) {
        audio.pause();
      } else {
        audio.loop();
      }
    };
  };
  let myp5_4 = new p5(v);
}
// //*----------------------------------------
function track5() {
  const w = (p) => {
    let shader5, img, fft, d_map, audio, toggleBtn;

    p.preload = () => {
      audio = p.loadSound("audio/extraparty.mp3");
      shader5 = p.loadShader("shaders/base.vert", "shaders/s5.frag");
      img = p.loadImage("img/tinified/windy.jpg");
      d_map = p.loadImage("img/maps/clouds.jpg");
    };

    p.setup = () => {
      audio.loop();

      p.pixelDensity(1);
      p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);

      toggleBtn = document.querySelector("#toggle-btn");
      toggleBtn.addEventListener("click", () => {
        toggleBtn.classList.toggle("toggle--on");
        this.toggleAudio();
      });

      fft = new p5.FFT();
      p.shader(shader5);

      shader5.setUniform("u_resolution", [p.windowWidth, p.windowHeight]);
      shader5.setUniform("d_map", d_map);
      shader5.setUniform("u_texture", img);
      shader5.setUniform("u_tResolution", [img.width, img.height]);
    };

    p.draw = () => {
      fft.analyze();

      const bass = fft.getEnergy("bass");
      const treble = fft.getEnergy("treble");
      const mid = fft.getEnergy("mid");

      const mapBass = p.map(bass, 0, 255, 5, 10.0);
      const mapTremble = p.map(treble, 0, 255, 0, 0.1);
      const mapMid = p.map(mid, 0, 255, 0.0, 10.0);

      shader5.setUniform("u_time", p.frameCount / 20);
      shader5.setUniform("u_bass", mapBass);
      shader5.setUniform("u_tremble", mapTremble);
      shader5.setUniform("u_mid", mapMid);

      p.rect(0, 0, p.width, p.height);
    };

    p.windowResized = () => {
      p.resizeCanvas(p.windowWidth, p.windowHeight);
      shader5.setUniform("u_resolution", [p.windowWidth, p.windowHeight]);
    };

    toggleAudio = () => {
      if (audio.isPlaying()) {
        audio.pause();
      } else {
        audio.loop();
      }
    };
  };
  let myp5_5 = new p5(w);
}

exitBtn = document.querySelector("#back-button");
exitBtn.addEventListener("click", () => {
  window.location.reload();
});
