const { GestureDescription, Finger, FingerCurl, FingerDirection } = window.fp;
  
const rockGesture = new GestureDescription('rock'); // ✊️
const paperGesture = new GestureDescription('paper'); // 🖐
const scissorsGesture = new GestureDescription('scissors'); // ✌️
const dontGesture = new GestureDescription('dont'); // ❌

const upGesture = new GestureDescription('up'); // 👆
const leftGesture = new GestureDescription('left'); // 👈
const rightGesture = new GestureDescription('right'); // 👉
const downGesture = new GestureDescription('down'); // 👇
  
// Rock
// -----------------------------------------------------------------------------
  
// thumb: half curled
// accept no curl with a bit lower confidence
rockGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
rockGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.8);

// all other fingers: curled
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
    rockGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
    // rockGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9);
}

// Paper
// -----------------------------------------------------------------------------
  
// no finger should be curled
for(let finger of Finger.all) {
    paperGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
}

// Scissors
//------------------------------------------------------------------------------
  
// index and middle finger: stretched out
scissorsGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
scissorsGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
  
// ring: curled
scissorsGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
scissorsGesture.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9);

// pinky: curled
scissorsGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
scissorsGesture.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.9);

// Dont
//------------------------------------------------------------------------------

for(const finger of Finger.all) {
  dontGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
  dontGesture.addCurl(finger, FingerCurl.HalfCurl, 0.8);

  dontGesture.addDirection(finger, FingerDirection.DiagonalUpRight, 1.0);
  dontGesture.addDirection(finger, FingerDirection.DiagonalUpLeft, 1.0);

  dontGesture.addDirection(finger, FingerDirection.HorizontalRight, 1.0);
  dontGesture.addDirection(finger, FingerDirection.HorizontalLeft, 1.0);
}

// Up
//------------------------------------------------------------------------------

upGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
upGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
upGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
upGesture.addCurl(Finger.Pink, FingerCurl.FullCurl, 1.0);
upGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);

// Left
//------------------------------------------------------------------------------

// Index No/Half curl and horizontal left
leftGesture.addCurl(Finger.Index, FingerCurl.HalfCurl, 0.8);
leftGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 0.8);

leftGesture.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);
leftGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1.0);

leftGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
leftGesture.addCurl(Finger.Pink, FingerCurl.FullCurl, 1.0);
leftGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);


// Right
//------------------------------------------------------------------------------

rightGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
rightGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);

rightGesture.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
rightGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
rightGesture.addCurl(Finger.Pink, FingerCurl.FullCurl, 1.0);
rightGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);

// Down
//------------------------------------------------------------------------------

// downGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
// downGesture.addDirection(Finger.Thumb, FingerDirection.Vertic/salDown, 1.0);

downGesture.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);
downGesture.addDirection(Finger.Index, FingerDirection.DiagonalDownLeft, 1.0);
downGesture.addDirection(Finger.Index, FingerDirection.VerticalDown, 1.0);

downGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
downGesture.addCurl(Finger.Pink, FingerCurl.FullCurl, 1.0);
downGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);

const gestures = [
  rockGesture, paperGesture, scissorsGesture, dontGesture, upGesture, leftGesture, rightGesture, downGesture
]

export {
  gestures
}