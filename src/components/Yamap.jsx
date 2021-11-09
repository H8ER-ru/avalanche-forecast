import React from 'react';
import { Map, Rectangle, YMaps } from 'react-yandex-maps';

export default function Yamap() {
  function rectangleObjectReceived(rect) {
    if (!rect) return;
    rect.events.add('click', () => {
      // handle click
    });
  }

  function getRectOptions() {
    return {
      fill: false,
      strokeColor: '#CF4B56',
      strokeWidth: 3,
    };
  }

  /**
     * Returns an array [ corner1, corner2 ]
     * @param {array} corner1 - topLeft corner
     * @param {array} corner2 - rightBottom corner
     * @returns array
     */

  function getGeometry(corner1, corner2) {
    return [corner1, corner2];
  }

  return (
    <YMaps>
      <Map
        defaultState={{ center: [55.75, 37.57], zoom: 9, type: 'yandex#satellite' }}
        width="100%"
        height="100%"
      >
        <Rectangle
          instanceRef={rectangleObjectReceived}
          geometry={getGeometry(
            [55.66, 37.6],
            [55.71, 37.69],
          )}
          options={getRectOptions()}
        />

        {/* <Rectangle */}
        {/*  instanceRef={rectangleObjectReceived} */}
        {/*  geometry={getGeometry( */}
        {/*    [55.76, 37.7], */}
        {/*    [55.81, 37.79], */}
        {/*  )} */}
        {/*  options={getRectOptions()} */}
        {/* /> */}
      </Map>
    </YMaps>
  );
}
