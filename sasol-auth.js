(() => {
  'use strict';

  const SESSION_KEY = 'sasol.energy.hub.session.v1';
  const hasSession = () => {
    try { return Boolean(JSON.parse(localStorage.getItem(SESSION_KEY) || 'null')?.email); }
    catch { return false; }
  };

  if (!hasSession()) window.location.replace('/');
})();
