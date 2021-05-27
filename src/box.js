// create box sprite
function createBoxSprite(boxConf, Sprite, x, y, type) {
  return new Sprite({
    x, y, type,
    width: boxConf.width,
    height: boxConf.height,
    render: function() {
      switch(this.type) {
        case 0:
          // free type boxes
          this.context.fillStyle = boxConf.type.free.color;
          break;
        case 1:
          // wall boxes
          this.context.fillStyle = boxConf.type.wall.color;
          break;
        case 8:
          // robot box
          this.context.fillStyle = boxConf.type.robot.color;
          break;
        default:
          break;
      }

      this.context.lineWidth = boxConf.border.size;
      this.context.strokeStyle = boxConf.border.color;
      this.context.strokeRect(0, 0, boxConf.width, boxConf.height);
      this.context.fillRect(boxConf.offset, boxConf.offset, 
          boxConf.width - 2 * boxConf.offset, boxConf.height - 2 * boxConf.offset);
    },
    update: function() {
    }
  });
}

module.exports = {createBoxSprite}