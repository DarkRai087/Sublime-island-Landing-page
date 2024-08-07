import React, { useState, useEffect } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

const Routes = ({ routes, onRouteData }) => {
  const [showMore, setShowMore] = useState(false);
  const [selectedRouteIndex, setSelectedRouteIndex] = useState(null);
  const [selectedRoute, setSelectedRoute] = useState(null);
  const initialRoutes = showMore ? routes : routes.slice(0, 3);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const handleRouteSelection = (event) => {
    const selectedIndex = parseInt(event.target.value);
    setSelectedRouteIndex(selectedIndex);
    setSelectedRoute(routes[selectedIndex]);
  };

  useEffect(() => {
    if (selectedRoute !== null) {
      onRouteData(selectedRoute);
    }
  }, [selectedRoute, onRouteData]);

  return (
    <FormControl className="w-full">
      <RadioGroup
        aria-labelledby="routes"
        name="radio-buttons-group"
        value={selectedRouteIndex}
        onChange={handleRouteSelection}
        className="mx-auto w-full"
      >
        {initialRoutes.map((route, index) => (
          <div key={index} className="mx-auto mb-4 flex w-full items-center">
            <FormControlLabel
              value={index}
              control={<Radio />}
              label={
                <div className="flex min-w-[42vw] xlll:min-w-[38vw] lg:min-w-[65vw] flex-col gap-1 p-4 xs:p-1">
                  <div className="flex justify-between text-lg font-semibold">
                    <p>{route.routeName}</p>
                    <div className="flex flex-col items-end">
                      <p>{route.price}</p>
                      <p className="text-sm font-normal">{route.class}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <p>{route.departureTime}</p>
                    <hr className="h-[0.125rem] w-1/5 bg-black" />
                    <p>{route.duration}</p>
                    <hr className="h-[0.125rem] w-1/5 bg-black" />
                    <p>{route.arrivalTime}</p>
                  </div>
                  <div className="flex justify-between">
                    <p>
                      Boarding Point:{" "}
                      <span className="font-semibold">
                        {route.boardingPoint}
                      </span>
                    </p>
                    <p>
                      Arrival Point:{" "}
                      <span className="font-semibold">
                        {route.arrivalPoint}
                      </span>
                    </p>
                  </div>
                </div>
              }
            />
          </div>
        ))}
      </RadioGroup>
      {routes.length > 3 && (
        <button
          className="mx-auto mb-4 mt-2 w-1/2 cursor-pointer rounded-md bg-slate-800 px-4 py-2 text-white"
          onClick={toggleShowMore}
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      )}
    </FormControl>
  );
};

export default Routes;
