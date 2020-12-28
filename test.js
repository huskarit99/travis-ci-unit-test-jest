const Triangle = require('./Triangle');
const Point = require('./Point');

function distance(a, b) {
    return Math.hypot((a.x - b.x), (a.y - b.y));
}

//--------------------------------Kiểm tra tính khoảng cách giữa 2 điểm bất kì-----------------------------------------------------------------------------------------
const a1 = new Point(0, 0);
const b1 = new Point(6, 0);
test('Kiểm tra khoảng cách giữa 2 điểm với kết quả nguyên', () => {
    expect(distance(a1, b1)).toBe(6);
});

const a5 = new Point(99999999999999999999, 99999999999999999999);
const b5 = new Point(99999999999999999999, 99999999999999999999);
test('Kiểm tra khoảng cách giữa 2 điểm bất kì với số lớn', () => {
    expect(distance(a5, b5)).toBe(0);
});

const a3 = new Point(99999999999999999999999999999999999999999999999999999999999999999999999999999999, 0);
const b3 = new Point(0, 0);
test('Kiểm tra khoảng cách giữa 2 điểm bất kì với số siêu lớn', () => {
    expect(distance(a3, b3)).toBe(99999999999999999999999999999999999999999999999999999999999999999999999999999999);
});

const a2 = new Point(0, 0);
const b2 = new Point(1, 1);
test('Kiểm tra khoảng cách giữa 2 điểm bất kì với số thực', () => {
    expect(distance(a2, b2)).toBe(1.414213562);
});

const a4 = new Point(0, 0);
const b4 = new Point(0, 0);
test('Kiểm tra khoảng cách giữa 2 điểm bất kì cùng 1 vị trí', () => {
    expect(distance(a4, b4)).toBe(0);
});
//-------------------------------------------------------------------------------------------------------------------------

const A = new Point(0, 0);
const B = new Point(1, 1);
const C = new Point(2, 2);
const triangle = new Triangle(A, B, C);
test('Kiểm tra tam giác với 3 điểm thẳng hàng', () => {
    expect(triangle.classify()).toStrictEqual({
        error: true,
        type: "Không phải là tam giác"
    });
});

const A1 = new Point(0, 0);
const B1 = new Point(1, 1);
const C1 = new Point(0, 1);
const triangle1 = new Triangle(A1, B1, C1);
test('Kiểm tra tam giác vuông cân', () => {
    expect(triangle1.classify()).toStrictEqual({
        error: false,
        type: "Tam giác vuông cân"
    });
});

const A2 = new Point(1, 1);
const B2 = new Point(2, 2);
const C2 = new Point(1, 2);
const triangle2 = new Triangle(A2, B2, C2);
test('Kiểm tra tam giác cân', () => {
    expect(triangle2.classify()).toStrictEqual({
        error: false,
        type: "Tam giác cân"
    });
});

const A3 = new Point(0, 0);
const B3 = new Point(1, 1);
const C3 = new Point(10, 0);
const triangle3 = new Triangle(A3, B3, C3);
test('Kiểm tra tam giác thường', () => {
    expect(triangle3.classify()).toStrictEqual({
        error: false,
        type: "Tam giác thường"
    });
});

const A4 = new Point(0, 0);
const B4 = new Point(0, 0);
const C4 = new Point(0, 0);
const triangle4 = new Triangle(A4, B4, C4);
test('Kiểm tra tam giác với 3 điểm trùng nhau', () => {
    expect(triangle4.classify()).toStrictEqual({
        error: true,
        type: "Không phải là tam giác"
    });
});

const A5 = new Point(1, 1);
const B5 = new Point(2, 2);
const C5 = new Point(1, 1);
const triangle5 = new Triangle(A5, B5, C5);
test('Kiểm tra tam giác với 2 điểm trùng nhau', () => {
    expect(triangle5.classify()).toStrictEqual({
        error: true,
        type: "Không phải là tam giác"
    });
});

const A6 = new Point(0, 0);
const B6 = new Point(0, 2);
const C6 = new Point(5, 0);
const triangle6 = new Triangle(A6, B6, C6);
test('Kiểm tra tam giác vuông', () => {
    expect(triangle6.classify()).toStrictEqual({
        error: false,
        type: "Tam giác vuông"
    });
});

const A7 = new Point(-934534, -934534);
const B7 = new Point(0, 0);
const C7 = new Point(2349234, 823048932);
const triangle7 = new Triangle(A7, B7, C7);
test('Kiểm tra tam giác với 3 điểm thẳng hàng', () => {
    expect(triangle7.classify()).toStrictEqual({
        error: false,
        type: "Tam giác thường"
    });
});

//--------------------------------Kiểm tra tính kết quả chu vi-----------------------------------------------------------------------------------------

const A0 = new Point(0, 0);
const B0 = new Point(1, 1);
const C0 = new Point(2, 2);
const triangle0 = new Triangle(A0, B0, C0);
test('Kiểm tra chu vi của 3 điểm không phải tam giác', () => {
    expect(triangle0.calculatePerimeter()).toStrictEqual({
        error: true,
        type: "Không phải là tam giác"
    });
});

const A01 = new Point(0, 0);
const B01 = new Point(1, 1);
const C01 = new Point(0, 1);
const triangle01 = new Triangle(A01, B01, C01);
test('Kiểm tra chu vi tam giác vuông cân', () => {
    expect(triangle01.calculatePerimeter()).toBe(3.414213562373095);
});


const A03 = new Point(0, 0);
const B03 = new Point(3, 4);
const C03 = new Point(0, 4);
const triangle03 = new Triangle(A03, B03, C03);
test('Kiểm tra chu vi tam giác thường', () => {
    expect(triangle03.calculatePerimeter()).toBe(12);
});


const A04 = new Point(0, 0);
const B04 = new Point(0, 0);
const C04 = new Point(0, 0);
const triangle04 = new Triangle(A04, B04, C04);
test('Kiểm tra chu vi của 3 điểm trùng nhau', () => {
    expect(triangle04.calculatePerimeter()).toStrictEqual({
        error: true,
        type: "Không phải là tam giác"
    });
});

const A05 = new Point(1, 1);
const B05 = new Point(2, 2);
const C05 = new Point(1, 1);
const triangle05 = new Triangle(A05, B05, C05);
test('Kiểm tra chu vi tam giác với 2 điểm trùng nhau', () => {
    expect(triangle05.calculatePerimeter()).toStrictEqual({
        error: true,
        type: "Không phải là tam giác"
    });
});

const A06 = new Point(0, 0);
const B06 = new Point(0, 2);
const C06 = new Point(5, 0);
const triangle06 = new Triangle(A06, B06, C06);
test('Kiểm tra chu vi tam giác vuông', () => {
    expect(triangle06.calculatePerimeter()).toBe(12.385164807134505);
});

const A07 = new Point(-934534, -934534);
const B07 = new Point(0, 0);
const C07 = new Point(2349234, 823048932);
const triangle07 = new Triangle(A07, B07, C07);
test('Kiểm tra chu vi tam giác với số âm lớn', () => {
    expect(triangle07.calculatePerimeter()).toBe(1648363924.635632);
});