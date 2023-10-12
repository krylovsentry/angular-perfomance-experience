# Avoid using enums

Enums compiles by typescript in structure like IIFE
```typescript
enum CompassDirection {
  North = 0,
  South = 1,
  West = 2,
  East = 3,
}
```

```javascript
var CompassDirection;
(function (CompassDirection) {
  CompassDirection[CompassDirection["North"] = 0] = "North";
  CompassDirection[CompassDirection["South"] = 1] = "South";
  CompassDirection[CompassDirection["West"] = 2] = "West";
  CompassDirection[CompassDirection["East"] = 3] = "East";
})(CompassDirection || (CompassDirection = {}));
```
Instead we can use more simple code base with saving types control

```typescript
const CompassDirection = {
  North: 0,
  South: 1,
  West: 2,
  East: 3
} as const;

type ValueOf<T> = T[keyof T];
type CompassDirection = ValueOf<typeof CompassDirection>;
```
that will compile to 
```javascript
const CompassDirection = {
  North: 0,
  South: 1,
  West: 2,
  East: 3
};
```
And that is all :)
