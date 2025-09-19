import React from "react";

import Hero from "../../components/Hero";
import Guide from "../../components/Guide";
import Event from "../../components/Event";
import Ticket from "../../components/Ticket";
import News from "../../components/News";
import Mediawall from "../../components/Mediawall";

import useResponsive from "../../hooks/useResponsive";

const Home = ({data}) => {
  const { isTablet } = useResponsive();

  const heroitem = data.eventlistData.filter((i) => i.hero);
  const eventitem = data.eventlistData || [];
  const bookingitem = data.eventlistData.filter((i) => i.booking);
  const mainnews = data.mainnewsData || [];

  return (
    <div>
      {isTablet ? (
        <>
          <Hero data={heroitem} />

          <div className="center-wrap">
            <Guide />
            <Event data={eventitem} />
          </div>
        </>
      ) : (
        <div className="center-wrap">
          <Hero data={heroitem} />
          <Guide />
          <Event data={eventitem} />
        </div>
      )}

      <Ticket data={bookingitem} />

      <div className="center-wrap">
        <News data={mainnews} />
      </div>

      <Mediawall />
    </div>
  );
};

export default Home;