import {Component, OnInit} from '@angular/core';



enum CompassDirection {
  North = 0,
  South = 1,
  West = 2,
  East = 3,
}
enum CompassDirection1 {
  North = 0,
  South = 1,
  West = 2,
  East = 3,
}
enum CompassDirection2 {
  North = 0,
  South = 1,
  West = 2,
  East = 3,
}
enum CompassDirection3 {
  North = 0,
  South = 1,
  West = 2,
  East = 3,
}
enum CompassDirection4 {
  North = 0,
  South = 1,
  West = 2,
  East = 3,
}

const CompassDirection6 = {
  North: 0,
  South: 1,
  West: 2,
  East: 3
} as const;

const CompassDirection7 = {
  North: 0,
  South: 1,
  West: 2,
  East: 3
} as const;

const CompassDirection8 = {
  North: 0,
  South: 1,
  West: 2,
  East: 3
} as const;

const CompassDirection5 = {
  North: 0,
  South: 1,
  West: 2,
  East: 3
} as const;


type ValueOf<T> = T[keyof T];

type CompassDirection5 = ValueOf<typeof CompassDirection5>;
type CompassDirection6 = ValueOf<typeof CompassDirection6>;
type CompassDirection7 = ValueOf<typeof CompassDirection7>;
type CompassDirection8 = ValueOf<typeof CompassDirection8>;
@Component({
  selector: 'app-enum-to-obj-compare',
  templateUrl: './enum-to-obj-compare.component.html',
  styleUrls: ['./enum-to-obj-compare.component.css']
})
export class EnumToObjCompareComponent implements OnInit {
  ngOnInit(): void {
    console.log(CompassDirection5.East);
    console.log(CompassDirection.East);
  }

}
