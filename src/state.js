const namespace =  require('./namespace');

async function setState(token, { drawnId, reach }) {
  await token.setFlag(namespace, 'drawnId', drawnId);
  await token.setFlag(namespace, 'reach', reach);
}

function getState(token) {
  const drawnId = token.getFlag(namespace, 'drawnId');
  const reach = token.getFlag(namespace, 'reach') || 0;
  return { drawnId, reach };
}

async function clearState(token) {
  await token.unsetFlag(namespace, 'drawnId');
  await token.unsetFlag(namespace, 'reach');
}

module.exports = {
  setState,
  getState,
  clearState,
};