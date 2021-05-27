// application configurations
const config = {
  board: {
    width: 0,
    height: 0,
    divider: 25
  },
  box: {
    width: 20,
    height: 20,
    offset: 1,
    border: {
      size: 1,
      color: '#aaa'
    },
    type: {
      free: {
        color: 'darkgray'
      },
      wall: {
        color: 'purple'
      },
      robot: {
        color: 'green'
      }
    }
  }
};

module.exports = {config}