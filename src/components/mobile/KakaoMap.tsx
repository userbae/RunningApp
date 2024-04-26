import { useRef, useState, ReactNode, useEffect } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { blueCircle } from "components/shared/ImageSrc";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function KakaoMap() {
  let [lat, setLat] = useState<number>(0);
  let [long, setLong] = useState<number>(0);
  let [spe, setSpe] = useState<number | null>();
  const mapRef = useRef<kakao.maps.Map | null>(null);

  let [start, setStart] = useState(false);
  let [time, setTime] = useState();

  const navigate = useNavigate();

  const OnClickStart = () => {
    if (start == false) {
      setStart(true);
    } else {
      setStart(false);
      localStorage.removeItem("LAT");
      console.log("수고하셨습니다.");
      navigate("/m");
    }
  };

  mapRef.current?.relayout();

  useEffect(() => {
    navigator.geolocation.watchPosition(function (pos) {
      var latitude = pos.coords.latitude;
      var longitude = pos.coords.longitude;
      let speed = pos.coords.speed;

      setLat(latitude);
      setLong(longitude);
      setSpe(speed);
      if (start == true) {
        Save({ lat, long, spe });
      }
    });
  }, [lat, long]);
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Map
        center={{ lat: lat, lng: long }}
        style={{ width: "100%", height: "100%", position: "absolute" }}
        level={2}
      >
        <MapMarker
          position={{ lat: lat, lng: long }}
          image={{
            src: `${blueCircle}`,
            size: {
              width: 20,
              height: 20,
            }, // 마커이미지의 주소입니다
          }}
        ></MapMarker>
        <MapMarker
          position={{ lat: lat, lng: long }}
          image={{
            src: `${blueCircle}`,
            size: {
              width: 20,
              height: 20,
            }, // 마커이미지의 주소입니다
          }}
        ></MapMarker>
      </Map>
      <div className="z-50 absolute bottom-1 flex w-full p-6">
        <div className="w-full rounded-md">
          <div>
            <MapF>시간 </MapF>
            <MapF>속도 </MapF>
          </div>

          <Button onClick={OnClickStart} className="w-full p-0">
            {start ? (
              <div className="bg-red-400 w-full h-full">종료</div>
            ) : (
              <div className="bg-blue-400 w-full h-full">시작</div>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}

interface MapFProps {
  children: ReactNode;
}

export function MapF({ children }: MapFProps) {
  return <div>{children}</div>;
}

interface SaveProps {
  lat: number;
  long: number;
  spe: number | null | undefined;
}

function Save({ lat, long, spe }: SaveProps) {
  if (localStorage.getItem("LAT") !== null) {
    let copyLat = JSON?.parse(localStorage.LAT);
    if (copyLat[copyLat.length - 1] !== lat) {
      copyLat.push(lat);
      localStorage.setItem("LAT", JSON?.stringify(copyLat));
    }

    let copyLong = JSON?.parse(localStorage.LONG);
    if (copyLat[copyLat.length - 1] !== long) {
      copyLong.push(long);
      localStorage.setItem("LONG", JSON?.stringify(copyLong));
    }

    let copySPe = JSON?.parse(localStorage.SPE);
    if (copySPe[copySPe.length - 1] !== spe) {
      copySPe.push(spe);
      localStorage.setItem("SPE", JSON?.stringify(copySPe));
    }
  } else {
    localStorage.setItem("LAT", JSON?.stringify([lat]));
    localStorage.setItem("LONG", JSON?.stringify([long]));
    localStorage.setItem("SPE", JSON?.stringify([spe]));
  }
}
