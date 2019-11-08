const dom = require('../views/base') // Object containing all DOM queries

// Video Player Methods

function togglePlay() {
    const method = dom.video.paused ? 'play' : 'pause';
    dom.video[method]();
  }

function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  console.log(icon);
  dom.toggle.textContent = icon;
}

function skip() {
 dom.video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  dom.video[this.name] = this.value;
}

function handleProgress() {
  const percent = (dom.video.currentTime / dom.video.duration) * 100;
  dom.progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / dom.progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

/* Hook up the event listeners */
dom.video.addEventListener('click', togglePlay);
dom.video.addEventListener('play', updateButton);
dom.video.addEventListener('pause', updateButton);
dom.video.addEventListener('timeupdate', handleProgress);

dom.toggle.addEventListener('click', togglePlay);
dom.skipButtons.forEach(button => button.addEventListener('click', skip));
dom.ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
dom.ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
dom.progress.addEventListener('click', scrub);
dom.progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
dom.progress.addEventListener('mousedown', () => mousedown = true);
dom.progress.addEventListener('mouseup', () => mousedown = false);