import React, { useEffect, useState } from 'react';
import { Map, Rectangle, YMaps } from 'react-yandex-maps';

export default function Yamap() {
  function rectangleObjectReceived(rect) {
    if (!rect) return;
    rect.events.add('click', () => {
      // handle click
    });
  }

  const [serverData, setSeverData] = useState({});

  useEffect(() => {
    fetch('http://176.99.135.123:3000/objEndData')
      .then((resp) => resp.json())
      .then((resBody) => {
        setSeverData(resBody);
        console.log(resBody);
      }).catch((e) => {
        console.log(e);
      });
  }, []);

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
      {serverData ? (
        <p>
          {serverData.data && serverData.data.temperature}
          {' '}
          ℃
        </p>
      ) : ''}
      <Map
        defaultState={{ center: [43.40, 40.12], zoom: 9, type: 'yandex#satellite' }}
        width="100%"
        height="100%"
      >
        <Rectangle
          instanceRef={rectangleObjectReceived}
          geometry={getGeometry(
            [43.40, 40.12],
            [43.50, 40.22],
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
