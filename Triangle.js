require('./Point');

function distance(a, b) {
  return Math.hypot((a.x - b.x), (a.y - b.y));
}

class Triangle {
  constructor(pointA, pointB, pointC) {
    this.pointA = pointA;
    this.pointB = pointB;
    this.pointC = pointC;
    this.res = {};
  }

  classify() {
    const a = distance(this.pointA, this.pointB);
    const b = distance(this.pointB, this.pointC);
    const c = distance(this.pointC, this.pointA);

    this.res = {};

    if (a < b + c && b < a + c && c < a + b) {
      if (a * a === b * b + c * c || b * b === a * a + c * c || c * c === a * a + b * b) {
        this.res = {
          error: false,
          type: "Tam giác vuông"
        }
      } else {
        if (a === b && b === c) {
          this.res = {
            error: false,
            type: "Tam giác đều"
          }
        } else {
          if (a === b || a === c || b === c) {
            this.res = {
              error: false,
              type: "Tam giác cân"
            }
          } else {
            this.res = {
              error: false,
              type: "Tam giác thường"
            }
          }
        }
      }
    } else {
      this.res = {
        error: true,
        type: "Không phải là tam giác"
      };
    }

    return this.res;
  }

  calculatePerimeter() {
    this.classify();
    if (this.res.error == true) {
      return this.res;
    } else {
      return distance(this.pointA, this.pointB) + distance(this.pointB, this.pointC) + distance(this.pointA, this.pointC);
    }
  }
}

module.exports = Triangle;