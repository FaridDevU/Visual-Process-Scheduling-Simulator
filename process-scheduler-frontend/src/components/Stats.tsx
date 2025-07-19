import React from 'react';

type StatsProps = {
  stats: any;
};

export const Stats: React.FC<StatsProps> = ({ stats }) => (
  <div>
    <h2>Statistics</h2>
    <pre>{JSON.stringify(stats, null, 2)}</pre>
  </div>
);
