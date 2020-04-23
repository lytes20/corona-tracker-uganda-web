import React from 'react';

import { TwitterTimelineEmbed } from 'react-twitter-embed';

function TwitterFeed() {
  return (
    <div>
      <TwitterTimelineEmbed sourceType="profile" screenName="MinofHealthUG" options={{ height: 600 }} />
    </div>
  );
}

export default TwitterFeed;
