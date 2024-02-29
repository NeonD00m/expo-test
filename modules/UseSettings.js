import React from 'react';

function getDefaultSettings() {
  return [
    ["Override Device Color Theme", false],
    ["Override Dark Mode", true, (settings) =>{console.log('dependency'); return settings[0][1]}],
    ["Override Name", "default"],
  ];
}

function useSettings() {
  // {name: []}
  const [settings, changeSettings] = React.useState(getDefaultSettings);
  return [settings, changeSettings];
}

export {
  useSettings,
  getDefaultSettings,
}